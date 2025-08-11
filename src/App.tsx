import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Achievements />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;