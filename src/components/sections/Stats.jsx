import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "300%",
      label: "Aumento promedio en ROI",
      description: "Nuestros clientes ven resultados exponenciales"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "10M+",
      label: "Usuarios impactados",
      description: "Alcance masivo en campañas digitales"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "50+",
      label: "Premios ganados",
      description: "Reconocimiento internacional en marketing"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "99.9%",
      label: "Uptime garantizado",
      description: "Infraestructura tecnológica de élite"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resultados que <span className="gradient-text">hablan por sí solos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Números reales de una agencia que transforma negocios con tecnología de vanguardia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-green-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;