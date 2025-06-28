import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const handleCaseStudyClick = (projectName) => {
    toast({
      title: `Caso de Estudio: ${projectName}`,
      description: "🚧 Esta funcionalidad aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const projects = [
    {
      title: "TechStart Revolution",
      category: "SaaS Startup",
      description: "Transformación digital completa que resultó en 500% de crecimiento en usuarios y $2M en funding.",
      image: "Modern tech startup office with developers working",
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, value: "500%", label: "Crecimiento usuarios" },
        { icon: <Users className="w-4 h-4" />, value: "$2M", label: "Funding obtenido" },
        { icon: <Award className="w-4 h-4" />, value: "3 meses", label: "Tiempo récord" }
      ],
      tags: ["IA", "SaaS", "Growth Hacking"]
    },
    {
      title: "EcoFashion Global",
      category: "E-commerce Sostenible",
      description: "Estrategia omnicanal que posicionó la marca como líder en moda sostenible con presencia en 15 países.",
      image: "Sustainable fashion store with eco-friendly clothing displays",
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, value: "300%", label: "Ventas online" },
        { icon: <Users className="w-4 h-4" />, value: "15", label: "Países activos" },
        { icon: <Award className="w-4 h-4" />, value: "#1", label: "Ranking sector" }
      ],
      tags: ["E-commerce", "Sostenibilidad", "Global"]
    },
    {
      title: "FinTech Disruptor",
      category: "Servicios Financieros",
      description: "Lanzamiento de app fintech que alcanzó 1M de usuarios en 6 meses con estrategia de marketing viral.",
      image: "Modern fintech office with financial data displays",
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, value: "1M", label: "Usuarios activos" },
        { icon: <Users className="w-4 h-4" />, value: "6 meses", label: "Tiempo récord" },
        { icon: <Award className="w-4 h-4" />, value: "4.9★", label: "Rating app" }
      ],
      tags: ["FinTech", "App Mobile", "Viral Marketing"]
    },
    {
      title: "HealthTech Innovation",
      category: "Tecnología Médica",
      description: "Posicionamiento de startup de telemedicina como referente del sector con estrategia B2B especializada.",
      image: "Medical technology laboratory with advanced equipment",
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, value: "250%", label: "Leads B2B" },
        { icon: <Users className="w-4 h-4" />, value: "50+", label: "Hospitales cliente" },
        { icon: <Award className="w-4 h-4" />, value: "$5M", label: "Contratos cerrados" }
      ],
      tags: ["HealthTech", "B2B", "Telemedicina"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,136,0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Casos de <span className="gradient-text">éxito</span> reales
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proyectos que han transformado industrias y establecido nuevos estándares de excelencia digital
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img  
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`${project.title} - ${project.category}`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="flex items-center justify-center text-green-400 mb-1">
                        {metric.icon}
                      </div>
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button
                  onClick={() => handleCaseStudyClick(project.title)}
                  className="w-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 text-green-400 hover:bg-green-400/10"
                >
                  Ver Caso Completo <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            onClick={() => handleCaseStudyClick('Todos los casos')}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
          >
            Ver Todos los Casos de Éxito
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;