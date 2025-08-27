import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center bg-red-300 text-white p-4">
      <div className="flex gap-6">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
        <Link href="/art" className="hover:text-gray-300">Art</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  );
}