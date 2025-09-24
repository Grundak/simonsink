import fs from "fs";
import path from "path";
import Gallery from "../components/Gallery";

// Server-side načtení obrázků
const dir = path.join(process.cwd(), "public/images/gallery");
const files = fs
  .readdirSync(dir)
  .filter((file) =>
    [".webp", ".jpg", ".jpeg", ".png"].includes(path.extname(file).toLowerCase())
  );

const images = files.map((file) => ({
  src: `/images/gallery/${file}`,
  alt: `Originální tetování od Šimona Holomka – ukázka motivu ${file.replace(/\.[^/.]+$/, "")} | Tattoo Gallery Brno a Neon Spot Hodonín | Precizní práce, kreativní návrhy, profesionální tetování.`,
}));

export default function GalleryPage() {
  return <Gallery images={images} />;
}