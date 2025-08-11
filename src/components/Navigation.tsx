import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, GraduationCap, Briefcase, Trophy, FolderOpen, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Inicio', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'Acerca', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Habilidades', icon: <Code className="w-4 h-4" /> },
    { id: 'education', label: 'Educación', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'experience', label: 'Experiencia', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'achievements', label: 'Logros', icon: <Trophy className="w-4 h-4" /> },
    { id: 'portfolio', label: 'Proyectos', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'contact', label: 'Contacto', icon: <Mail className="w-4 h-4" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                <img src="../../public/mike.png" alt="" className='rounded-full'/>
              </div>
              <span className="ml-3 text-xl font-bold text-white">
                Michael Castro
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800/50 text-white hover:bg-slate-700/50 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>
        
        <div className={`absolute top-20 left-4 right-4 bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 transition-transform duration-300 ${
          isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}>
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Navigation Indicator */}
      <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-500 scale-150'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              title={item.label}
            >
              <div className={`absolute right-5 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
                activeSection === item.id ? 'opacity-100' : ''
              }`}>
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;