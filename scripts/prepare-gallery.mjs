import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const directory = path.join(process.cwd(), "public/images/gallery");
const outputDirectory = path.join(directory, "optimized");
const manifestPath = path.join(outputDirectory, "manifest.json");
const widths = [384, 640, 960, 1600];
const quality = 75;
const configuration = JSON.stringify({ version: 1, widths, quality });

await fs.mkdir(outputDirectory, { recursive: true });
let previousManifest = {};
try {
  previousManifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const files = (await fs.readdir(directory))
  .filter((file) => [".webp", ".jpg", ".jpeg", ".png"].includes(path.extname(file).toLowerCase()))
  .sort();
const manifest = {};
let updated = 0;

for (const file of files) {
  const input = await fs.readFile(path.join(directory, file));
  const fingerprint = createHash("sha256").update(configuration).update(input).digest("hex").slice(0, 12);
  const previous = previousManifest[file];
  if (previous?.fingerprint === fingerprint) {
    const available = await Promise.all(previous.variants.map((variant) =>
      fs.access(path.join(process.cwd(), "public", variant.src)).then(() => true, () => false)
    ));
    if (available.every(Boolean)) {
      manifest[file] = previous;
      continue;
    }
  }

  const metadata = await sharp(input).metadata();
  const rotated = [5, 6, 7, 8].includes(metadata.orientation);
  const width = rotated ? metadata.height : metadata.width;
  const height = rotated ? metadata.width : metadata.height;
  const { data, info } = await sharp(input)
    .rotate()
    .resize({ width: widths[widths.length - 1], withoutEnlargement: true })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const raw = { width: info.width, height: info.height, channels: info.channels };
  const outputWidths = [...new Set(widths.map((candidate) => Math.min(candidate, info.width)))];
  const variants = [];

  for (const outputWidth of outputWidths) {
    const filename = `${path.parse(file).name}-${fingerprint}-${outputWidth}.webp`;
    const result = await sharp(data, { raw })
      .resize({ width: outputWidth, withoutEnlargement: true })
      .webp({ quality })
      .toFile(path.join(outputDirectory, filename));
    variants.push({ src: `/images/gallery/optimized/${filename}`, width: result.width, height: result.height });
  }

  const preview = await sharp(data, { raw }).resize({ width: 24 }).webp({ quality: 30 }).toBuffer();
  manifest[file] = {
    fingerprint,
    width,
    height,
    blurDataURL: `data:image/webp;base64,${preview.toString("base64")}`,
    variants,
  };
  updated += 1;
}

const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
if (serialized !== `${JSON.stringify(previousManifest, null, 2)}\n`) {
  await fs.writeFile(manifestPath, serialized);
}
console.log(`Gallery: ${files.length} photos ready (${updated} updated).`);
