import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Users, Zap, Palette, Star, Brain, Rocket, Shield, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA & Automatización",
      description: "Implementamos inteligencia artificial para optimizar campañas, automatizar procesos y predecir tendencias de mercado.",
      features: ["Chatbots inteligentes", "Análisis predictivo", "Automatización de marketing"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Registro de Marca",
      description: "Protección integral de tu identidad corporativa con servicios legales especializados y estrategia de marca.",
      features: ["Registro legal", "Protección internacional", "Consultoría jurídica"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desarrollo Web Avanzado",
      description: "Sitios web de alta performance con tecnologías de vanguardia, optimizados para conversión y experiencia de usuario.",
      features: ["PWA & SPA", "E-commerce avanzado", "Optimización SEO"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media 360°",
      description: "Gestión integral de redes sociales con estrategias de contenido viral y community management profesional.",
      features: ["Contenido viral", "Influencer marketing", "Community management"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Publicidad Programática",
      description: "Campañas publicitarias automatizadas con targeting avanzado y optimización en tiempo real para máximo ROI.",
      features: ["Real-time bidding", "Targeting avanzado", "Optimización automática"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding Futurista",
      description: "Identidades visuales innovadoras que combinan diseño tradicional con elementos digitales y experiencias inmersivas.",
      features: ["Diseño 3D", "Realidad aumentada", "Motion graphics"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Growth Hacking",
      description: "Estrategias de crecimiento acelerado utilizando técnicas no convencionales y experimentación constante.",
      features: ["A/B testing masivo", "Viral loops", "Product-market fit"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ciberseguridad Digital",
      description: "Protección integral de activos digitales con monitoreo 24/7 y respuesta ante incidentes de seguridad.",
      features: ["Monitoreo 24/7", "Auditorías de seguridad", "Respuesta a incidentes"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics Avanzado",
      description: "Análisis profundo de datos con dashboards interactivos y reportes automatizados para toma de decisiones.",
      features: ["Dashboards en tiempo real", "Reportes automatizados", "Insights predictivos"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Servicios de <span className="gradient-text">vanguardia</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones tecnológicas avanzadas que transforman tu negocio y te posicionan como líder en tu industria
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white relative z-10">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 relative z-10">{service.description}</p>
              
              <ul className="space-y-2 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;