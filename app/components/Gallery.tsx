"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-8" id="gallery">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-4
          gap-1
          max-w-6xl
          mx-auto
        "
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`
              overflow-hidden shadow-sm
              ${i % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""}
              ${i % 3 === 0 ? "aspect-[3/4] md:aspect-auto" : "aspect-[3/4]"}
            `}
          >
            <button
              type="button"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="block w-full h-full focus:outline-none"
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`
                  w-full h-full object-cover transition duration-200
                  hover:brightness-90 hover:scale-[1.02]
                `}
                loading="lazy"
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
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </section>
  );
}