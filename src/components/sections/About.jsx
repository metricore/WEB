import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Star, Award, Globe, Brain } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Innovación Constante",
      description: "Siempre a la vanguardia tecnológica"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enfoque en Resultados",
      description: "Cada estrategia está diseñada para el éxito"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Excelencia en Servicio",
      description: "Superamos expectativas constantemente"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Visión Global",
      description: "Perspectiva internacional en cada proyecto"
    }
  ];

  const achievements = [
    { number: "500+", label: "Proyectos Completados" },
    { number: "98%", label: "Satisfacción Cliente" },
    { number: "15+", label: "Países Atendidos" },
    { number: "50+", label: "Premios Ganados" }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Sobre <span className="gradient-text">MetricoreLabs</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Somos pioneros en la revolución del marketing digital. Fundada por expertos en tecnología y marketing, 
              MetricoreLabs nació con la visión de transformar la manera en que las marcas se conectan con sus audiencias.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Nuestro enfoque único combina inteligencia artificial, automatización avanzada y creatividad humana 
              para crear experiencias digitales que no solo captan atención, sino que generan conversiones reales y 
              construyen relaciones duraderas con los clientes.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{achievement.number}</div>
                  <div className="text-gray-400 text-sm">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl font-semibold mb-8 text-center relative z-10">Nuestra Misión</h3>
              <p className="text-gray-300 text-center leading-relaxed mb-8 relative z-10">
                Democratizar el acceso a tecnologías de marketing avanzadas, permitiendo que empresas de todos los tamaños 
                compitan en igualdad de condiciones en el ecosistema digital global.
              </p>
              
              <div className="space-y-6 relative z-10">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center group"
                  >
                    <div className="text-green-400 mr-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{value.title}</div>
                      <div className="text-sm text-gray-400">{value.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl floating-animation"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <Award className="w-12 h-12 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Reconocimiento Internacional</h3>
            <p className="text-gray-300 leading-relaxed">
              Hemos sido reconocidos por organizaciones líderes en la industria del marketing digital, 
              incluyendo premios por innovación tecnológica, excelencia en servicio al cliente y 
              resultados excepcionales en campañas digitales a nivel global.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;