import FadeInWhenVisible from "./FadeInWhenVisible";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="px-6 md:px-12 py-24 grid md:grid-cols-2 gap-10 items-center">
      <FadeInWhenVisible>
        <div className="relative">
          <motion.div
            className="absolute text-2xl top-12 left-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#F6E6E2]">
            Bring everyone <br /> together <br /> with data
          </h1>
          <p className="text-[#C7B2AE] text-lg mb-8">
            Go end-to-end from quick queries to deep-dive analyses...
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 border border-[#C7B2AE] text-[#C7B2AE] rounded hover:bg-[#C7B2AE] hover:text-[#0F1114] transition">
              Get started for free
            </button>
            <button className="px-6 py-3 border border-[#C7B2AE] text-[#C7B2AE] rounded hover:bg-[#C7B2AE] hover:text-[#0F1114] transition">
              Request a demo
            </button>
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <img src="/magic-preview.png" className="rounded-lg shadow-xl border border-[#2A2E35]" />
      </FadeInWhenVisible>
    </section>
  );
}

export default Hero;
