import Navbar from "./layout/Navbar";
import Footers from "./layout/Footer";
import { Hero } from "./sections/Hero";
import Projects from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Testimonials } from "./sections/Testimonials";
import Contact from "./sections/Contact";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footers />
    </>
  );
}

export default App;
