import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 bg-slate-900 border-t border-slate-700/50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl mr-4">
              <img src="../../public/mike.png" alt=""  className='rounded-full'/>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Michael Castro</h3>
              <p className="text-slate-400 text-sm">Full Stack Developer</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Apasionado por crear soluciones innovadoras que combinan tecnología y creatividad. 
            Siempre en búsqueda de nuevos desafíos y oportunidades para crecer profesionalmente.
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mb-8"></div>

          {/* Made with love */}
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <Code className="w-4 h-4 text-cyan-400" />
            <span>y mucho</span>
            <Coffee className="w-4 h-4 text-yellow-600" />
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
            <p>© {currentYear} Michael Castro. Todos los derechos reservados.</p>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span>Bogotá, D.C., Colombia</span>
              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
              <span>michael17ycd@gmail.com</span>
            </div>
          </div>

          {/* Tech Stack Attribution */}
          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <p className="text-xs text-slate-500">
              Desarrollado con React, TypeScript, Tailwind CSS y mucha creatividad ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;