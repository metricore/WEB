import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Cog, Rocket, BarChart, Trophy } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Análisis Profundo",
      description:
        "Investigamos tu mercado, competencia y audiencia utilizando IA y big data para identificar oportunidades únicas.",
      duration: "1-2 semanas",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Estrategia Personalizada",
      description:
        "Desarrollamos una estrategia 360° adaptada a tus objetivos específicos y recursos disponibles.",
      duration: "1 semana",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Implementación Técnica",
      description:
        "Ejecutamos la estrategia con tecnologías de vanguardia y automatizaciones inteligentes.",
      duration: "2-4 semanas",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lanzamiento Optimizado",
      description:
        "Lanzamos las campañas con monitoreo en tiempo real y ajustes automáticos para máximo rendimiento.",
      duration: "1 semana",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Optimización Continua",
      description:
        "Analizamos resultados constantemente y optimizamos estrategias basadas en datos en tiempo real.",
      duration: "Continuo",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Escalamiento",
      description:
        "Escalamos las estrategias exitosas y exploramos nuevas oportunidades de crecimiento exponencial.",
      duration: "Continuo",
    },
  ];

  return (
    <section
      id="proceso"
      className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-blue-900/10"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Nuestro <span className="gradient-text">proceso</span> probado
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Una metodología sistemática que garantiza resultados excepcionales
            en cada proyecto
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 opacity-30 hidden lg:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-12 gap-6 sm:gap-8`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="glass-effect rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center mb-3 sm:mb-4 flex-wrap gap-2">
                      <div className="text-green-400 mr-2 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div className="text-xs sm:text-sm text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded-full">
                        {step.duration}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full flex justify-center lg:order-none order-first">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-black font-bold text-lg sm:text-xl">
                      {index + 1}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
