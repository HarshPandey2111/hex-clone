function ProductPreview() {
    return (
      <section className="bg-[#121417] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Teamwork, that works for teams</h2>
            <p className="text-[#C7B2AE] mb-6">
              Get feedback from peers, align with stakeholders, review trusted data, and build from reusable components — all in one place.
            </p>
            <button className="px-6 py-3 border border-[#C7B2AE] text-[#C7B2AE] rounded hover:bg-[#C7B2AE] hover:text-[#0F1114] transition">
              Learn more
            </button>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#2A2E35] bg-[#1C1F24] shadow-xl">
          <img src="/churn-analysis-preview.png" alt="Churn Dashboard" className="w-full object-cover" />

          </div>
        </div>
      </section>
    );
  }
  
  export default ProductPreview;
  