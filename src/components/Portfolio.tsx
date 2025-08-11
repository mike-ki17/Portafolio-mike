import React from 'react';
import { ExternalLink, Github, Eye, Code, Zap, Users } from 'lucide-react';
import tatuImg from '../../public/tatu.png';
import ruletaImg from '../../public/ruleta.png';
import pizzaImg from '../../public/pizza.png';
import driuxImg from '../../public/driux.png';
import moninasImg from '../../public/moninas.png';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  color: string;
  features: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "Red Social de Tatuajes",
      description: "Plataforma social completa para artistas de tatuajes con sistema de perfiles, galería de trabajos, sistema de citas y chat en tiempo real. En desarrollo",
      image: tatuImg,
      technologies: ["React", "Node.js", "Socket.io", "ASql", "Express", "TypeScript", "Tailwind CSS", "Zustand", "Clean Architecture"],
      category: "Full Stack",
      color: "from-purple-400 to-pink-500",
      features: ["Autenticación JWT", "Chat en tiempo real", "Sistema de reservas", "Galería interactiva"],
      demoUrl: "https://mike-ki17.github.io/artbyte-technology-web/",
      codeUrl: "https://github.com/mike-ki17/Tatu"
    },
    {
      title: "Ruleta Cliente-Servidor",
      description: "App web diseñada para una resolución específica para una feria de la empresa Sinco Soft como un sistema de premios para los clientes conectada una base de datos en tiempo real.",
      image: ruletaImg,
      technologies: ["JavaScript", "Python", "Flask", "Sql"],
      category: "Full Stack",
      color: "from-red-400 to-orange-500",
      features: ["Multijugador", "Tiempo real", "Sistema de apuestas", "Animaciones fluidas"],
      demoUrl: "https://michaelcastro-new.github.io/Sinco-ruleta-desarrollo/templates/RuletaERP.html?nombre=DJJDJSW&empresa=DSKDKSDK&premio=3+horas+de+consultorias+gratis&correo=mike%40gmail.com&celular=FDKS%40gmail.com",
      codeUrl: "https://github.com/MichaelCastro-new?tab=repositories"
    },
    {
      title: "Gestión Restaurante",
      description: "Sistema completo de gestión para restaurantes, con gestion de pedidos",
      image: pizzaImg,
      technologies: ["React", "MySQL", "Tailwind CSS", "Node.js", "Express"],
      category: "Full Stack",
      color: "from-green-400 to-emerald-500",
      features: ["POS integrado", "Control de inventario", "Gestión de mesas", "Reportes en tiempo real"],
      demoUrl: "https://nonapizza.netlify.app",
      codeUrl: "https://github.com/mike-ki17/nonna-s-pizza-shop"
    },
    {
      title: "Landing Pages Corporativas",
      description: "Desarrollo de múltiples landing pages optimizadas para conversión con diseño responsive y integración de herramientas de marketing.",
      image: driuxImg,
      technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
      category: "Frontend",
      color: "from-cyan-400 to-blue-500",
      features: ["SEO optimizado", "Responsive design", "Alta conversión", "Carga rápida"],
      demoUrl: "https://driux.netlify.app/",
      codeUrl: "https://github.com/mike-ki17/driux-web-v2"
    },
    {
      title: "E-commerce Multitienda",
      description: "Plataforma de comercio electrónico multivendedor y panel de administración.",
      image: moninasImg,
      technologies: ["React", "Typescript", "Node.js", "Express", "Tailwind CSS"],
      category: "E-commerce",
      color: "from-indigo-400 to-purple-500",
      features: ["Multivendedor", "Pagos seguros", "Panel admin", "Analytics avanzado"],
      demoUrl: "https://moninas.netlify.app",
      codeUrl: "https://github.com/mike-ki17/moninas-shop"
    },
    // {
    //   title: "API RESTful Microservicios",
    //   description: "Arquitectura de microservicios escalable con API RESTful, documentación completa y sistema de autenticación robusto.",
    //   image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["Node.js", "Express", "Docker", "JWT", "Swagger"],
    //   category: "Backend",
    //   color: "from-teal-400 to-cyan-500",
    //   features: ["Microservicios", "Documentación Swagger", "Escalabilidad", "Seguridad JWT"]
    // }
  ];

  const categories = ["Todos", "Full Stack", "Frontend", "E-commerce"];
  const [activeCategory, setActiveCategory] = React.useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-20 px-6 bg-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Portafolio de Proyectos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades técnicas y creatividad
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 rounded-2xl transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-48">
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
                
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex gap-2 z-30">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full backdrop-blur-sm transition-all duration-300 bg-slate-900/80 hover:bg-slate-800/80 opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full backdrop-blur-sm transition-all duration-300 bg-slate-900/80 hover:bg-slate-800/80 opacity-0 group-hover:opacity-100 cursor-pointer hover:scale-110"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} bg-opacity-90 text-white backdrop-blur-sm`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="flex items-center text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full"
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 relative z-30">
                  <a 
                    href={project.demoUrl || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => !project.demoUrl && e.preventDefault()}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 text-sm ${
                      project.demoUrl 
                        ? 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 cursor-pointer hover:scale-105' 
                        : 'bg-slate-800/50 text-slate-500 pointer-events-none opacity-50'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    Ver Demo
                  </a>
                  <a 
                    href={project.codeUrl || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => !project.codeUrl && e.preventDefault()}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all duration-300 text-sm ${
                      project.codeUrl 
                        ? 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 cursor-pointer hover:scale-105' 
                        : 'bg-slate-800/50 text-slate-500 pointer-events-none opacity-50'
                    }`}
                  >
                    <Code className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              {/* <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-sm`}></div> */}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-lg mb-6">
            ¿Interesado en colaborar en un proyecto?
          </p>
          <button
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <Users className="w-5 h-5" />
            Trabajemos Juntos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;