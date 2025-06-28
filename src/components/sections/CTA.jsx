import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CTA = () => {
  const handleCTAClick = (action) => {
    toast({
      title: action,
      description: "🚧 Esta funcionalidad aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Resultados en 30 días"
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "Garantía de satisfacción"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      text: "Tecnología de vanguardia"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      <div className="absolute top-10 left-10 floating-animation">
        <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
      </div>
      <div className="absolute top-1/2 left-1/3 floating-animation" style={{ animationDelay: '4s' }}>
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full opacity-15 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8"
          >
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-sm text-gray-300">Oferta Limitada - Solo Este Mes</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            ¿Listo para <span className="gradient-text neon-glow">dominar</span> tu mercado?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Únete a más de 500 empresas que ya están transformando sus resultados con nuestras estrategias de marketing digital del futuro
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-center text-green-400"
              >
                {benefit.icon}
                <span className="ml-2 font-semibold">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              onClick={() => handleCTAClick('Consulta Gratuita')}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-6 text-xl pulse-glow transform hover:scale-105 transition-all duration-300"
            >
              Consulta Gratuita <ArrowRight className="ml-2" size={24} />
            </Button>
            
            <Button
              onClick={() => handleCTAClick('Ver Planes')}
              variant="outline"
              className="border-2 border-green-400/50 text-green-400 hover:bg-green-400/10 px-12 py-6 text-xl"
            >
              Ver Planes
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">🎯 Oferta Especial de Lanzamiento</h3>
            <p className="text-gray-300 mb-4">
              Los primeros 10 clientes que se registren este mes recibirán:
            </p>
            <ul className="text-left text-gray-300 space-y-2 max-w-md mx-auto">
              <li className="flex items-center">
                <Star className="w-4 h-4 text-green-400 mr-2" />
                50% de descuento en el primer mes
              </li>
              <li className="flex items-center">
                <Star className="w-4 h-4 text-green-400 mr-2" />
                Auditoría digital gratuita ($500 de valor)
              </li>
              <li className="flex items-center">
                <Star className="w-4 h-4 text-green-400 mr-2" />
                Setup de IA personalizado sin costo
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;