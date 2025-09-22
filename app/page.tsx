"use client";
import { useLang } from "./components/LanguageContext";
import { motion } from "framer-motion";

export default function Home() {
  const { lang } = useLang();

  return (
    <motion.section
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center text-center py-8 dark:bg-black"
      style={{ overflow: "hidden" }}
    >
      <h1
        className="font-bold text-6xl mb-2 uppercase mt-18"
        style={{ fontFamily: "Copperplate, sans-serif" }}
      >
        Simon's Ink
      </h1>
      <h2 className="text-2xl mb-4 mt-6">
        {lang === "EN"
          ? "I make tattoos so that even your mum likes them too"
          : "Tetování dělám tak, aby se líbila i tvojí mámě"}
      </h2>
      <div className="mb-8 mt-8">
        <a
          href="https://simons-ink.reservio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-black text-white text-2xl font-semibold uppercase rounded hover:bg-gray-500 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          {lang === "EN" ? "Book here" : "Objednej se zde"}
        </a>
      </div>
      <div className="flex gap-6 justify-center items-center text-2xl mb-8 my-8">
        <a
          href="tel:+420735963200"
          aria-label="Phone"
          className="hover:text-gray-400"
        >
          <i className="fa-solid fa-phone fa-xl"></i>
        </a>
        <a
          href="https://www.instagram.com/simons.ink/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gray-400"
        >
          <i className="fa-brands fa-instagram fa-xl"></i>
        </a>
        <a
          href="https://www.facebook.com/sten.harvey.52/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-gray-400"
        >
          <i className="fa-brands fa-facebook fa-xl"></i>
        </a>
        <a
          href="https://www.tiktok.com/@simons.ink"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="hover:text-gray-400"
        >
          <i className="fa-brands fa-tiktok fa-xl"></i>
        </a>
      </div>
      <h2 className="text-2xl mb-4 mt-6">
        {lang === "EN" ? (
          <>
            I tattoo in{" "}
            <a
              href="https://share.google/r4g4awkU7eNwKmf5s"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-gray-400"
            >
              Tattoo Gallery Brno
            </a>{" "}
            and in{" "}
            <a
              href="https://share.google/UP58SqJFcTY4Lidea"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-gray-400"
            >
              Neon Spot Hodonín
            </a>
            .
          </>
        ) : (
          <>
            Tetuji v{" "}
            <a
              href="https://share.google/r4g4awkU7eNwKmf5s"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-gray-400"
            >
              Tattoo Gallery Brno
            </a>{" "}
            a v{" "}
            <a
              href="https://share.google/UP58SqJFcTY4Lidea"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-gray-400"
            >
              Neon Spot Hodonín
            </a>
            .
          </>
        )}
      </h2>
    </motion.section>
  );
}