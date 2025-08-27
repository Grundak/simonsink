function About({ lang }) {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        {lang === "cz" ? "O mně" : "About me"}
      </h1>
      <p>{lang === "cz" ? "Informace o mně." : "Information about me."}</p>
    </section>
  );
}

export default About;
