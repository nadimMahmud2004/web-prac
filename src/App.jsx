import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
