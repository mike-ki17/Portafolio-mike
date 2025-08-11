import React from 'react';
import { Trophy, Medal, Award, Star, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Tres Clasificaciones Nacionales",
      subtitle: "FIRST LEGO League",
      description: "Liderazgo de equipos juveniles hacia finales nacionales en competencias de robótica y programación",
      color: "from-yellow-400 to-orange-500",
      year: "2023-2025"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Mejor Bachiller 2023",
      subtitle: "Excelencia Académica",
      description: "Reconocimiento por destacado rendimiento académico y liderazgo estudiantil",
      color: "from-purple-400 to-pink-500",
      year: "2023"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Beca Excelencia Académica",
      subtitle: "Universidad San Buenaventura",
      description: "Beca completa por méritos académicos para estudios en Tecnología en Desarrollo de Software",
      color: "from-cyan-400 to-blue-500",
      year: "2024"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Beca Fundación ROFE",
      subtitle: "Programa Jóvenes Creativos",
      description: "Seleccionado para programa de desarrollo de talentos creativos y tecnológicos",
      color: "from-green-400 to-emerald-500",
      year: "2025"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Beca Platzi",
      subtitle: "Educación Tecnológica",
      description: "Acceso completo a plataforma de educación en tecnología y desarrollo profesional",
      color: "from-indigo-400 to-purple-500",
      year: "2024"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Mentor Destacado",
      subtitle: "Comunidad Tech",
      description: "Reconocimiento por contribuciones a la comunidad de desarrolladores junior",
      color: "from-pink-400 to-rose-500",
      year: "2024"
    }
  ];

  return (
    <section id="achievements" className="relative py-20 px-6 bg-slate-900/50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Logros & Reconocimientos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
            Reconocimientos que reflejan dedicación, excelencia y compromiso con el crecimiento profesional
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105"
            >
              {/* Year Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-700/50 text-slate-300 border border-slate-600/50">
                  {achievement.year}
                </span>
              </div>

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="text-white">
                  {achievement.icon}
                </div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.color} opacity-50 blur-lg animate-pulse`}></div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className={`font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                  {achievement.subtitle}
                </p>
                
                <p className="text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Hover Effect Lines */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-sm`}></div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "3", label: "Clasificaciones Nacionales", color: "text-yellow-400" },
            { number: "4", label: "Becas Obtenidas", color: "text-purple-400" },
            { number: "50+", label: "Proyectos Completados", color: "text-cyan-400" },
            { number: "2+", label: "Años de Experiencia", color: "text-green-400" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                {stat.number}
              </div>
              <div className="text-slate-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;