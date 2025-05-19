function UseCases() {
    const items = [
      {
        title: "Rapid exploration",
        company: "StubHub",
        content: "StubHub realigned its analytics stack with Hex for speed and quality.",
        badge: "StubHub",
      },
      {
        title: "Operationalized data science",
        company: "ClickUp",
        content: "ClickUp used Hex to turn a churn project into a customer-saving program.",
        badge: "ClickUp",
      },
    ];
  
    return (
      <section className="bg-[#121417] py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-10 text-center">
          A new standard for data work
        </h2>
        <p className="text-center text-[#C7B2AE] mb-12">
          Hex helps 1,000s of teams do more with their data.
        </p>
  
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="bg-[#1C1F24] p-6 rounded-xl border border-[#2A2E35]">
              <span className="text-sm text-[#A28C88] font-bold uppercase tracking-wide mb-2 block">
                {item.badge}
              </span>
              <h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#C7B2AE]">{item.content}</p>
              <button className="mt-4 text-sm text-indigo-400 hover:underline">Read more →</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default UseCases;
  