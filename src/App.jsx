import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Journey from "./pages/Journey";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

function App(){
  return (
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
        </Routes>
  );
}
export default App;