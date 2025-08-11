import React from 'react';
import { Code, Database, Server, Globe, Terminal, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes",
      icon: <Code className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "JavaScript", level: 70 },
        { name: "TypeScript", level: 65 },
        { name: "Python", level: 60 },
        { name: "PHP", level: 60 },
        { name: "Java", level: 50 }
      ]
    },
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "React", level: 92 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 45 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Express", level: 85 },
        { name: "Flask", level: 82 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Bases de Datos",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 60 },
        { name: "PostgreSQL", level: 55 }
      ]
    },
    {
      title: "DevOps",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-indigo-400 to-purple-500",
      skills: [
        { name: "Linux", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 65 },
        { name: "CI/CD", level: 70 },
        { name: "Nginx", level: 65 }
      ]
    },
    {
      title: "Herramientas",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-pink-400 to-rose-500",
      skills: [
        { name: "Git", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 65 },
        { name: "Figma", level: 60}
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-6 bg-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Habilidades & Tecnologías
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                        }}
                      ></div>
                      <div className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} opacity-50 blur-sm rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-sm`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;