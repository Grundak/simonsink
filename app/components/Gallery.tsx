"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LanguageContext";

export default function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeInOut" }}
      className="py-8"
      style={{ overflow: "hidden" }}
      id="gallery"
    >
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-4
          md:auto-rows-fr
          gap-1
          max-w-6xl
          mx-auto
        "
      >
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={`
              overflow-hidden shadow-sm
              ${imageIndex % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""}
              ${imageIndex % 3 === 0 ? "aspect-[3/4] md:aspect-auto" : "aspect-[3/4]"}
            `}
          >
            <button
              type="button"
              onClick={() => {
                setIndex(imageIndex);
                setOpen(true);
              }}
              className="relative block w-full h-full focus:outline-none"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  imageIndex % 3 === 0
                    ? "(min-width: 1152px) 574px, (min-width: 640px) 50vw, 100vw"
                    : "(min-width: 1152px) 285px, (min-width: 768px) 25vw, (min-width: 640px) 50vw, 100vw"
                }
                priority={imageIndex === 0}
                className={`
                  w-full h-full object-cover transition duration-200
                  hover:brightness-90 hover:scale-[1.02]
                `}
                loading={imageIndex < 3 ? "eager" : "lazy"}
              />
            </button>
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        index={index}
        carousel={{ preload: 1 }}
        on={{ view: ({ index }) => setIndex(index) }}
      />
            <div className="mt-12 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-xl font-semibold shadow hover:bg-gray-700 dark:hover:bg-gray-200 transition"
          aria-label="Přejít na kontakt"
        >
          {lang === "EN" ? "Contact" : "Kontakt"}
          <span className="ml-3">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </motion.section>
  );
}
