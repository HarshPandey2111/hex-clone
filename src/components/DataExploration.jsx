function DataExploration() {
    return (
      <section className="bg-[#121417] py-24 px-6 md:px-12 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl text-white font-bold mb-4">Data exploration superpowers</h2>
          <p className="text-[#C7B2AE] mb-6">
            SQL, Python, R, pivots, spreadsheets, charts — all in a modular, notebook-based canvas.
          </p>
          <button className="px-6 py-3 border border-[#C7B2AE] text-[#C7B2AE] rounded hover:bg-[#C7B2AE] hover:text-[#0F1114] transition">
            Explore Notebooks
          </button>
        </div>
        <div className="bg-[#1C1F24] rounded-lg overflow-hidden border border-[#2A2E35] shadow-xl">
          <img src="/data-preview.png" alt="Data Heatmap" className="w-full" />
        </div>
      </section>
    );
  }
  
  export default DataExploration;
  