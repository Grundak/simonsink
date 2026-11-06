"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useLang } from "./LanguageContext";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuDialog = useRef<HTMLDivElement>(null);
  const links = [
    { href: "/gallery", label: lang === "EN" ? "Gallery" : "Galerie" },
    { href: "/contact", label: lang === "EN" ? "Contact" : "Kontakt" },
    { href: "/about", label: lang === "EN" ? "About" : "O mně" },
    { href: "/tattoo-guide", label: lang === "EN" ? "Tattoo Guide" : "Průvodce tetováním" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = menuDialog.current;
    dialog?.querySelector<HTMLButtonElement>("button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab" || !dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>("button, a[href]");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
      menuButton.current?.focus();
    };
  }, [menuOpen]);

  return (
    <nav aria-label="Main navigation" className="relative grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 bg-white p-4 text-black uppercase lg:grid-cols-[auto_1fr_auto] lg:gap-6 dark:bg-black dark:text-white">
        <Link
          href="/"
          className="justify-self-start whitespace-nowrap text-sm hover:text-gray-400 sm:text-xl xl:text-2xl"
          style={{ fontFamily: "Copperplate, sans-serif" }}
        >
          Simon's Ink
        </Link>
      <div className="hidden items-center justify-center gap-5 whitespace-nowrap text-sm lg:flex xl:gap-6 xl:text-base">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className="py-2 underline-offset-8 hover:text-gray-400 aria-[current=page]:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
        <button
          ref={menuButton}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
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
      {/* Napravo */}
      <div className="flex items-center justify-self-end gap-2">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="w-11 h-11 flex items-center justify-center rounded bg-gray-300 hover:bg-gray-500 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
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
          className="w-11 h-11 flex items-center justify-center rounded bg-gray-300 hover:bg-gray-500 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
          aria-label="Toggle language"
        >
          {lang === "EN" ? (
            <span className="font-bold text-xs">CS</span>
          ) : (
            <span className="font-bold text-xs">EN</span>
          )}
        </button>
      </div>
      {/* Mobilní menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuDialog}
          role="dialog"
          aria-modal="true"
          aria-label={lang === "EN" ? "Navigation menu" : "Navigační menu"}
          className="fixed inset-0 z-50 flex flex-col items-center overflow-y-auto bg-black/95 px-6 py-20 lg:hidden"
        >
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center text-3xl text-white focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className="my-auto flex w-full max-w-sm flex-col gap-5 text-center text-xl text-white sm:text-2xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="py-3 underline-offset-8 hover:text-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 aria-[current=page]:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
