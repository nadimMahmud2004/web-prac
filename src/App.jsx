import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
};

export default App;
