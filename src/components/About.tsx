import React from 'react';
import { Code, Brain, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Resolución de Problemas",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Pensamiento Lógico",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trabajo en Equipo",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Aprendizaje Continuo",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section id="about" className="relative py-20 px-6 bg-slate-900/50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Acerca de Mí
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Apasionado del <span className="text-cyan-400 font-semibold">desarrollo de software</span>, 
              con habilidades en resolución de problemas, pensamiento lógico y aprendizaje continuo.
            </p>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Me destaco en <span className="text-purple-400 font-semibold">trabajo en equipo</span> y 
              comunicación, siempre buscando aportar a proyectos innovadores y de alto impacto.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {['Innovación', 'Creatividad', 'Tecnología', 'Impacto'].map((tag, index) => (
                <span
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${
                    index % 2 === 0 ? 'from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30' 
                    : 'from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30'
                  } hover:scale-105 transition-transform duration-300`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;