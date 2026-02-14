import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
