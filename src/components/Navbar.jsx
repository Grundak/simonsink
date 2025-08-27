function Navbar({ darkMode, setDarkMode, lang, setLang }) {
  return (
    <header className="flex justify-between items-center w-full px-6 py-4 bg-black text-white uppercase font-sans">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-widest">
        <a href="/" className="hover:text-gray-400">Simon's Ink</a>
      </div>

      {/* Menu */}
      <nav>
        <ul className="flex gap-6 text-lg">
          <li>
            <a href="/" className="hover:text-gray-400">
              {lang === "cz" ? "Domů" : "Home"}
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-gray-400">
              {lang === "cz" ? "Galerie" : "Gallery"}
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              {lang === "cz" ? "O mně" : "About"}
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">
              {lang === "cz" ? "Kontakt" : "Contact"}
            </a>
          </li>
        </ul>
      </nav>

      {/* Ovládací prvky */}
      <div className="flex items-center gap-3">
        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded bg-gray-200 text-black hover:bg-gray-400 dark:bg-gray-700 dark:text-white"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === "cz" ? "en" : "cz")}
          className="px-3 py-1 rounded bg-gray-200 text-black hover:bg-gray-400 dark:bg-gray-700 dark:text-white uppercase"
        >
          {lang}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
