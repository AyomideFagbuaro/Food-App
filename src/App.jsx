import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
