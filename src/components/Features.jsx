function Features() {
  const features = [
    { title: "Built for Data Teams", description: "SQL, Python, and AI – all in one workspace." },
    { title: "Real-Time Collaboration", description: "Work with your team in sync, not in silos." },
    { title: "AI Assistant", description: "Auto-suggest queries, summarize outputs, and build dashboards faster." },
  ];

  return (
    <section className="bg-[#121417] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Powerful Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1C1F24] p-6 rounded shadow hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
