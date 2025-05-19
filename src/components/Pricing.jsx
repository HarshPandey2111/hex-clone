function Pricing() {
    const plans = [
      {
        title: "Starter",
        price: "$0",
        features: ["Basic features", "Community support", "1 project"],
      },
      {
        title: "Pro",
        price: "$29/mo",
        features: ["Unlimited projects", "Team collaboration", "Email support"],
        popular: true,
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: ["Advanced analytics", "Custom integrations", "Dedicated support"],
      },
    ];
  
    return (
      <section className="bg-[#0F1114] text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Simple Pricing</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border ${
                  plan.popular
                    ? "border-indigo-500 shadow-lg"
                    : "border-gray-700"
                } bg-[#1A1C1F]`}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="text-gray-400 mb-6 space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded text-white font-semibold">
                  {plan.price === "Custom" ? "Contact Us" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Pricing;
  