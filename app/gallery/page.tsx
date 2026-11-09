import fs from "fs";
import path from "path";
import Gallery, { type GalleryImage } from "../components/Gallery";

const imageOrder = [
  "IMG_1848.webp",
  "IMG_2962.webp",
  "IMG_9180.webp",
  "IMG_5942.webp",
  "IMG_9124.webp",
  "IMG_3780.webp",
  "IMG_8904.webp",
  "IMG_4791.webp",
  "IMG_8981.webp",
  "IMG_9075.webp",
  "IMG_9127.webp",
  "IMG_9129.webp",
  "IMG_0962.webp",
  "IMG_6958.webp",
  "IMG_4288.webp",
  "IMG_6480.webp",
  "IMG_3592.webp",
  "IMG_8683.webp",
  "IMG_2796.webp",
  "IMG_3005.webp",
  "IMG_5801.webp",
  "IMG_3204.webp",
  "IMG_3280.webp",
  "IMG_1787.webp",
  "IMG_1793.webp",
  "IMG_1800.webp",
];
const imagePositions = new Map(imageOrder.map((file, index) => [file, index]));

const dir = path.join(process.cwd(), "public/images/gallery");

export default function GalleryPage() {
  const prepared: Record<string, Omit<GalleryImage, "src" | "alt">> = JSON.parse(
    fs.readFileSync(path.join(dir, "optimized/manifest.json"), "utf8")
  );
  const files = fs
    .readdirSync(dir)
    .filter((file) =>
      [".webp", ".jpg", ".jpeg", ".png"].includes(path.extname(file).toLowerCase())
    )
    .sort(
      (left, right) =>
        (imagePositions.get(left) ?? imageOrder.length) -
          (imagePositions.get(right) ?? imageOrder.length) ||
        left.localeCompare(right)
    );
  const images = files.map((file) => ({
    ...prepared[file],
    src: `/images/gallery/${file}`,
    alt: `Originální tetování od Šimona Holomka – ukázka motivu ${file.replace(/\.[^/.]+$/, "")} | Tattoo Gallery Brno a Neon Spot Hodonín | Precizní práce, kreativní návrhy, profesionální tetování.`,
  }));

  return <Gallery images={images} />;
}
