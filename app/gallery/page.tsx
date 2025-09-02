import fs from "fs";
import path from "path";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  // Cesta k public/images/gallery
  const dir = path.join(process.cwd(), "public/images/gallery");
  const files = fs
    .readdirSync(dir)
    .filter((file) =>
      [".webp", ".jpg", ".jpeg", ".png"].includes(path.extname(file).toLowerCase())
    );

  const images = files.map((file) => ({
    src: `/images/gallery/${file}`,
    alt: file,
  }));

  return <Gallery images={images} />;
}