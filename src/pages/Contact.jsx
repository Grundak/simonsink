function Contact({ lang }) {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        {lang === "cz" ? "Kontakt" : "Contact"}
      </h1>
      <p>{lang === "cz" ? "Zde mě můžeš kontaktovat." : "You can contact me here."}</p>
    </section>
  );
}

export default Contact;
