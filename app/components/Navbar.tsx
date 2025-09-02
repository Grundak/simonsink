"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLang } from "./LanguageContext";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full flex items-center bg-white text-black dark:bg-black dark:text-white p-4 relative uppercase">
      {/* Nalevo */}
      <div className="flex items-center">
        {/* Plný název pro větší obrazovky */}
        <Link
          href="/"
          className="hover:text-gray-300 uppercase text-2xl md:block hidden"
          style={{ fontFamily: "Copperplate, sans-serif" }}
        >
          Simon's Ink
        </Link>
        <Link
          href="/"
          className="hover:text-gray-300 uppercase text-sm md:hidden xs:hidden block"
          style={{ fontFamily: "Copperplate, sans-serif" }}
        >
          Simon's Ink
        </Link>
      </div>
      {/* Uprostřed - pouze na md a větších */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-4 md:flex hidden">
        <Link href="/gallery" className="hover:text-gray-300">
          {lang === "EN" ? "Gallery" : "Galerie"}
        </Link>
        <Link href="/art" className="hover:text-gray-300">
          {lang === "EN" ? "Art" : "Umění"}
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          {lang === "EN" ? "Contact" : "Kontakt"}
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          {lang === "EN" ? "About" : "O mně"}
        </Link>
      </div>
      {/* Hamburger na menších než md */}
      <div className="absolute left-1/2 -translate-x-1/2 flex md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
          aria-label="Open menu"
        >
          {/* Hamburger icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Napravo */}
      <div className="flex items-center gap-2 ml-auto">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="w-9 h-9 flex items-center justify-center rounded bg-gray-300 hover:bg-gray-500 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            // Sun icon for light mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.46 6.46L5.05 5.05m13.9 0l-1.41 1.41M6.46 17.54l-1.41 1.41"
              />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          )}
        </button>
        <button
          onClick={toggleLang}
          className="w-9 h-9 flex items-center justify-center rounded bg-gray-300 hover:bg-gray-500 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
          aria-label="Toggle language"
        >
          {lang === "EN" ? (
            <span className="font-bold text-xs">EN</span>
          ) : (
            <span className="font-bold text-xs">CS</span>
          )}
        </button>
      </div>
      {/* Mobilní menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50 md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="flex flex-col gap-8 text-2xl text-white">
            <Link
              href="/gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300"
            >
              {lang === "EN" ? "Gallery" : "Galerie"}
            </Link>
            <Link
              href="/art"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300"
            >
              {lang === "EN" ? "Art" : "Umění"}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300"
            >
              {lang === "EN" ? "Contact" : "Kontakt"}
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300"
            >
              {lang === "EN" ? "About" : "O mně"}
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
}