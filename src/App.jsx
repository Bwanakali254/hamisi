import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Value from "./components/Value";
import Experience from "./components/Experience";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio-bg text-slate-100">
      <Header />
      <Hero />
      <Skills />
      <Value />
      <Experience />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
