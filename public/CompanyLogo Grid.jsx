
import Footer from "./components/Footer";

<section className="py-20 text-center">
  <h2 className="text-2xl md:text-3xl font-semibold mb-10">Trusted by leading data teams</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center px-6 md:px-12">
    {["notion", "clickup", "reddit", "brex", "anthropic"].map((logo, i) => (
      <img
        key={i}
        src={`/logos/${logo}.svg`}
        alt={`${logo} logo`}
        className="h-10 mx-auto opacity-80 hover:opacity-100 transition"
      />
    ))}
  </div>
</section>
