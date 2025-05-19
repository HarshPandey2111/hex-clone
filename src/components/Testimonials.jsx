function Testimonials() {
    const testimonials = [
      {
        name: "Aarav Singh",
        text: "HexClone transformed the way our team works with data. It's fast, collaborative, and beautifully designed.",
        role: "Data Analyst, Finlytics",
      },
      {
        name: "Maya Kapoor",
        text: "We replaced four tools with HexClone. The AI assistant is a game changer for our workflow.",
        role: "ML Engineer, Quant Labs",
      },
    ];
  
    return (
      <section className="bg-[#121417] text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What People Are Saying</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-[#1C1F24] p-6 rounded-lg shadow">
                <p className="text-gray-300 italic mb-4">"{t.text}"</p>
                <div className="text-sm text-gray-400">
                  — <span className="text-white font-medium">{t.name}</span>, {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  