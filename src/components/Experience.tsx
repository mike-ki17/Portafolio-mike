import React from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Artbyte Technology",
      period: "2024 - Actual",
      location: "Remoto",
      type: "Tiempo Completo",
      description: "Desarrollo de aplicaciones web full-stack utilizando tecnologías modernas. Implementación de soluciones escalables y mantenimiento de sistemas existentes.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "TypeScript"],
      color: "from-cyan-400 to-blue-500",
      status: "Actual"
    },
    {
      title: "Coach de Programación",
      company: "FIRST Lego League",
      period: "2023 - 2025",
      location: "Bogotá, D.C.",
      type: "Parcial",
      description: "Mentor y entrenador de equipos juveniles en competencias de robótica y programación. Desarrollo de habilidades técnicas y trabajo en equipo.",
      technologies: ["Python", "Scratch", "Robótica", "Metodologías Ágiles"],
      color: "from-purple-400 to-pink-500",
      status: "En Curso"
    },
    {
      title: "Asesor de Ventas",
      company: "Talento SAS",
      period: "2025",
      location: "Bogotá, D.C.",
      type: "Tiempo Completo",
      description: "Asesoramiento comercial y desarrollo de estrategias de ventas. Gestión de clientes y análisis de mercado.",
      technologies: ["CRM", "Análisis de Datos", "Excel", "PowerBI"],
      color: "from-green-400 to-emerald-500",
      status: "Reciente"
    },
    {
      title: "Consultor de Negocios",
      company: "Konecta Claro",
      period: "2024",
      location: "Bogotá, D.C.",
      type: "Tiempo Completo",
      description: "Consultoría especializada para Pymes, brindando soporte técnico y soluciones empresariales personalizadas.",
      technologies: ["Consultoría", "Análisis Empresarial", "Soluciones TI"],
      color: "from-orange-400 to-red-500",
      status: "Completado"
    }
  ];

  const freelanceProjects = [
    {
      name: "Landing Pages Corporativas",
      url: "https://driux.netlify.app"
    },
    {
      name: "Sistema de Gestión para Restaurantes",
      url: "https://nonapizza.netlify.app"
    },
    {
      name: "E-commerce y Tiendas Online",
      url: "https://moninas.netlify.app"
    },
    {
      name: "Ruleta Cliente-Servidor",
      url: "https://michaelcastro-new.github.io/Sinco-ruleta-desarrollo/templates/RuletaERP.html?nombre=DJJDJSW&empresa=DSKDKSDK&premio=3+horas+de+consultorias+gratis&correo=mike%40gmail.com&celular=FDKS%40gmail.com"
    },
    {
      name: "Red Social de Tatuajes",
      url: "https://mike-ki17.github.io/artbyte-technology-web/"
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-6 bg-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experiencia Laboral
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} bg-opacity-20 text-white border border-opacity-30`}>
                  {exp.status}
                </span>
              </div>

              {/* Header */}
              <div className="flex items-start mb-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${exp.color} mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-purple-400 font-semibold">{exp.company}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-slate-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period} • {exp.type}
                </div>
                
                <div className="flex items-center text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:border-slate-500/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-sm`}></div>
            </div>
          ))}
        </div>

        {/* Freelance Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Proyectos <span className="text-cyan-400">Freelance</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {freelanceProjects.map((project, index) => (
              <div
                key={index}
                className="group relative p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <a
                  href={project.url || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => !project.url && e.preventDefault()}
                  className={`flex items-center justify-between ${
                    project.url ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <span className={`text-slate-300 group-hover:text-white transition-colors duration-300 font-medium ${
                    !project.url && 'opacity-70'
                  }`}>
                    {project.name}
                  </span>
                  <ExternalLink className={`w-4 h-4 transition-colors duration-300 ${
                    project.url 
                      ? 'text-slate-400 group-hover:text-cyan-400' 
                      : 'text-slate-600'
                  }`}/>
                </a>
                
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;