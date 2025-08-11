import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      year: "2024",
      status: "En Curso",
      title: "Tecnología en Desarrollo de Software",
      institution: "Universidad San Buenaventura",
      description: "Formación integral en desarrollo de software, metodologías ágiles y arquitectura de sistemas.",
      color: "from-cyan-400 to-blue-500",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      year: "2025",
      status: "Programa",
      title: "Jóvenes Creativos",
      institution: "Fundación ROFE",
      description: "Programa de desarrollo de habilidades creativas y tecnológicas para jóvenes talentos.",
      color: "from-purple-400 to-pink-500",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2022",
      status: "Completado",
      title: "Técnico en Integración de Contenidos Digitales",
      institution: "SENA",
      description: "Especialización en manejo de contenidos digitales y herramientas multimedia.",
      color: "from-green-400 to-emerald-500",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const courses = [
    "Ciencia de Datos",
    "Machine Learning",
    "Frontend Developer",
    "Linux y Servidores",
    "Desarrollo PHP",
    "Python Avanzado",
    "Fundamentos de Software (Universidad El Bosque)"
  ];

  return (
    <section id="education" className="relative py-20 px-6 bg-slate-900/50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Educación
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-cyan-400" />
              Formación Académica
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
              
              {educationData.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 group">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-50 blur-md animate-pulse`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 flex-grow">
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 backdrop-blur-sm group-hover:transform group-hover:scale-105">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} bg-opacity-20 text-white border border-opacity-30`}>
                          {item.year} - {item.status}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {item.title}
                      </h4>
                      
                      <p className="text-slate-400 font-medium mb-3">
                        {item.institution}
                      </p>
                      
                      <p className="text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-purple-400" />
              Cursos Destacados
            </h3>
            
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="group relative p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">
                      {course}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;