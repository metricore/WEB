import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "🚧 Esta funcionalidad aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const handleQuickAction = (action) => {
    toast({
      title: action,
      description: "🚧 Esta funcionalidad aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Directo",
      info: "hola@metricorelabs.com",
      description: "Respuesta en menos de 2 horas",
      color: "text-green-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: "+52 (55) 1234-5678",
      description: "Lun-Vie 9:00 AM - 8:00 PM",
      color: "text-blue-400"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp Business",
      info: "+52 (55) 9876-5432",
      description: "Disponible 24/7",
      color: "text-green-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Oficinas",
      info: "Ciudad de México, México",
      description: "Reuniones presenciales disponibles",
      color: "text-purple-400"
    }
  ];

  const quickActions = [
    {
      title: "Agendar Llamada",
      description: "Consulta gratuita de 30 min",
      icon: <Calendar className="w-5 h-5" />,
      action: "Agendar Llamada"
    },
    {
      title: "Auditoría Express",
      description: "Análisis gratuito de tu presencia digital",
      icon: <ArrowRight className="w-5 h-5" />,
      action: "Solicitar Auditoría"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Hablemos de tu <span className="gradient-text">proyecto</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Estamos listos para transformar tu visión en resultados extraordinarios. Contáctanos y descubre el poder del marketing digital del futuro
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Múltiples formas de contacto</h3>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start">
                    <div className={`${method.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-gray-300 font-medium mb-1">{method.info}</p>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Button
                    onClick={() => handleQuickAction(action.action)}
                    className="w-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 text-green-400 hover:bg-green-400/10 p-4 h-auto"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="text-left">
                        <div className="font-semibold">{action.title}</div>
                        <div className="text-sm opacity-80">{action.description}</div>
                      </div>
                      {action.icon}
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 glass-effect rounded-xl p-6"
            >
              <div className="flex items-center text-green-400 mb-3">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Horarios de Atención</span>
              </div>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergencias:</span>
                  <span>24/7 disponible</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Envíanos tu proyecto</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Presupuesto Mensual
                    </label>
                    <select className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white">
                      <option value="">Seleccionar rango</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000+">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Servicios de Interés
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['IA & Automatización', 'Desarrollo Web', 'Social Media', 'Publicidad Digital', 'Branding', 'Growth Hacking'].map((service) => (
                      <label key={service} className="flex items-center text-gray-300 cursor-pointer">
                        <input type="checkbox" className="mr-2 text-green-400 focus:ring-green-400" />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Describe tu proyecto, objetivos, desafíos actuales y qué esperas lograr con nuestros servicios..."
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-4 text-lg font-semibold pulse-glow transition-all duration-300"
                >
                  Enviar Proyecto <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;