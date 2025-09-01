import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black text-center p-4 mt-auto dark:bg-black dark:text-white">
      <Link href="/" className="font-bold text-lg mb-2 uppercase" style={{ fontFamily: "Copperplate, sans-serif" }}>
        Simon's Ink
      </Link>
      <ol className="mb-2">
        <li>Ing. Šimon Holomek</li>
        <li>+420 735 963 200</li>
        <li>U Červených domků 2975/32, 695 01, Hodonín</li>
        <li>IČO: 21072035</li>
      </ol>
      <Link href="https://github.com/Grundak" className="font-bold uppercase hover:text-gray-300">
        Dev & Des by Grundak
      </Link>
      <div className="text-xs mt-2">
        © {new Date().getFullYear()} Simon's Ink. All rights reserved.
      </div>
    </footer>
  );
}