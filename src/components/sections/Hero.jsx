import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleQuoteClick = () => {
    toast({
      title: "Cotización",
      description: "🚧 Esta funcionalidad aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const handleVideoClick = () => {
    toast({
      title: "Video Demo",
      description: "🚧 Esta funcionalidad aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 tech-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
      
      <div className="absolute top-20 left-10 floating-animation">
        <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
      </div>
      <div className="absolute top-1/2 left-1/4 floating-animation" style={{ animationDelay: '4s' }}>
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full opacity-15 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8"
          >
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-sm text-gray-300">Agencia #1 en Innovación Digital</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            El futuro del{' '}
            <span className="gradient-text neon-glow">marketing digital</span>
            {' '}está aquí
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformamos tu presencia digital con inteligencia artificial, automatización avanzada y estrategias que generan resultados exponenciales
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={handleQuoteClick}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-6 text-lg pulse-glow transform hover:scale-105 transition-all duration-300"
            >
              Comenzar Ahora <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button
              onClick={handleVideoClick}
              variant="outline"
              className="border-2 border-green-400/50 text-green-400 hover:bg-green-400/10 px-10 py-6 text-lg group"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Ver Demo
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-400">Proyectos Exitosos</div>
            </div>
            <div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-400">Satisfacción Cliente</div>
            </div>
            <div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">Soporte Premium</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('servicios')}
            className="animate-bounce text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowRight className="w-6 h-6 rotate-90" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;