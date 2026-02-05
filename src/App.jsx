import Navbar from "./layout/Navbar";
import Footers from "./layout/Footer";
import { Hero } from "./sections/Hero";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footers />
    </>
  );
}

export default App;
