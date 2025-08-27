function Gallery({ lang }) {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        {lang === "cz" ? "Galerie" : "Gallery"}
      </h1>
      <p>{lang === "cz" ? "Zde bude galerie obrázků." : "Here will be the image gallery."}</p>
    </section>
  );
}

export default Gallery;
