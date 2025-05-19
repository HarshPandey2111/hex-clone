import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MagicAI from "./components/MagicAI";
import ProductPreview from "./components/ProductPreview";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import UseCases from "./components/UseCases";
import Integrations from "./components/Integrations";
import DataExploration from "./components/DataExploration";
import FinalCTA from "./components/FinalCTA";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <MagicAI />
      <ProductPreview />
      <UseCases />
      <Integrations />
      <DataExploration />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
