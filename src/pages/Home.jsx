function Home({ lang }) {
  return (
    <section className="flex flex-col items-center justify-center bg-black text-white text-center h-screen uppercase">
      <div className="w-4/5 border-l-4 border-r-0 border-t-0 border-b-0 border-white py-8 px-6">
        <h1 className="text-5xl font-bold mb-4">
          {lang === "cz" ? "Vítej na mém portfoliu" : "Welcome to my portfolio"}
        </h1>
        <h2 className="text-2xl font-light mb-6">
          {lang === "cz" ? "Tvůrce digitálního obsahu" : "Digital content creator"}
        </h2>
        <h3 className="text-xl mt-8">
          {lang === "cz" ? "Prohlédni si moje projekty" : "Check out my projects"}
        </h3>
      </div>

      {/* Ikony sociálních sítí */}
      <div className="flex gap-6 mt-6">
        <a href="#" className="hover:text-gray-400">Instagram</a>
        <a href="#" className="hover:text-gray-400">LinkedIn</a>
        <a href="#" className="hover:text-gray-400">GitHub</a>
      </div>

      {/* Šipka dolů */}
      <div className="mt-10">
        <a href="#gallery" className="text-white hover:text-gray-400 text-3xl">↓</a>
      </div>
    </section>
  );
}

export default Home;
