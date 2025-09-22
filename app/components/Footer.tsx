"use client";
import Link from "next/link";
import { useLang } from "./LanguageContext";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-white text-black text-center p-4 mt-auto dark:bg-black dark:text-white">
      <Link href="/" className="font-bold text-lg mb-2 uppercase">
        Simon's Ink
      </Link>
      <div className="flex gap-4 justify-center items-center text-lg mt-4">
        <a
          href="tel:+420735963200"
          aria-label="Phone"
          className="hover:text-gray-400"
        >
          <i className="fa-solid fa-phone fa-lg"></i>
        </a>
        <a
          href="https://www.instagram.com/simons.ink/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gray-400"
        >
          <i className="fa-brands fa-instagram fa-lg"></i>
        </a>
        <a
          href="https://www.facebook.com/sten.harvey.52/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-gray-400"
        >
          <i className="fa-brands fa-facebook fa-lg"></i>
        </a>
        <a
          href="https://www.tiktok.com/@simons.ink"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="hover:text-gray-400"
        >
          <i className="fa-brands fa-tiktok fa-lg"></i>
        </a>
      </div>
      <ol className="mb-2 my-4">
        <li>Ing. Šimon Holomek</li>
        <li>
          <a href="tel:+420735963200" className="hover:text-gray-400">
            +420 735 963 200
          </a>
        </li>
        <li>U Červených domků 2975/32, 695 01, Hodonín</li>
        <li>IČO: 21072035</li>
      </ol>
      <Link
        href="https://github.com/Grundak"
        className="font-bold uppercase hover:text-gray-300"
      >
        Dev & Des by Grundak
      </Link>
      <div className="text-xs mt-2">
        <p>
          {lang === "EN"
            ? `© ${new Date().getFullYear()} Simon's Ink. All rights reserved.`
            : `© ${new Date().getFullYear()} Simon's Ink. Všechna práva vyhrazena.`}
        </p>
      </div>
    </footer>
  );
}
