import { motion } from "framer-motion";

function MagicAI() {
  return (
    <section className="bg-[#0F1114] py-24 px-6 md:px-12 text-center text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Magical AI, built right in
      </motion.h2>

      <motion.p
        className="text-[#C7B2AE] max-w-2xl mx-auto text-lg mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Generate queries, write code, create visualizations, fix bugs, and kickstart whole analyses — all from a prompt.
      </motion.p>

      <motion.div
        className="rounded-xl overflow-hidden shadow-xl border border-[#2A2E35] bg-[#1C1F24] max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src="/magic-preview.png" alt="AI Preview" className="w-full object-cover" />

      </motion.div>

      <button className="mt-8 border border-[#C7B2AE] px-6 py-3 rounded hover:bg-[#C7B2AE] hover:text-black transition">
        Explore AI tools
      </button>
    </section>
  );
}

export default MagicAI;
