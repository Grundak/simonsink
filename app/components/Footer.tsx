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
      <ol className="mb-2">
        <li>Ing. Šimon Holomek</li>
        <li>
          <a href="tel:+420735963200" className="hover:text-gray-400">
            +420 735 963 200
          </a>
        </li>
        <li>U Červených domků 2975/32, 695 01, Hodonín</li>
        <li>IČO: 21072035</li>
      </ol>
      <Link href="https://github.com/Grundak" className="font-bold uppercase hover:text-gray-300">
        Dev & Des by Grundak
      </Link>
      <div className="text-xs mt-2">
        <p>
          {lang === "EN"
            ? "© 2023 Simon's Ink. All rights reserved."
            : "© 2023 Simon's Ink. Všechna práva vyhrazena."}
        </p>
      </div>
    </footer>
  );
}