import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import mikeImg from '../../public/mike.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23a855f7%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2237%22%20cy%3D%2237%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="relative mb-8 inline-block">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 ">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                <img src={mikeImg} alt="Michael Castro" className='rounded-full' />
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Michael Castro
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
          Full Stack Developer
        </h2>

        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Construyendo soluciones innovadoras que combinan{' '}
          <span className="text-cyan-400 font-semibold">tecnología</span> y{' '}
          <span className="text-purple-400 font-semibold">creatividad</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25"
          >
            <Mail className="inline-block w-5 h-5 mr-2" />
            <span>Contacto</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className="animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;