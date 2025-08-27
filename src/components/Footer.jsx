function Footer({ lang }) {
  return (
    <footer className="bg-black text-gray-400 uppercase text-center py-6 mt-10 text-sm">
      <p className="mb-2">
        © {new Date().getFullYear()} {lang === "cz" ? "Moje webová aplikace" : "My web application"}
      </p>
      <div className="flex justify-center gap-6">
        <a href="/gallery" className="hover:text-white">
          {lang === "cz" ? "Galerie" : "Gallery"}
        </a>
        <a href="/about" className="hover:text-white">
          {lang === "cz" ? "O mně" : "About"}
        </a>
        <a href="/contact" className="hover:text-white">
          {lang === "cz" ? "Kontakt" : "Contact"}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
