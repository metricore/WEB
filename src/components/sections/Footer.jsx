import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Servicios",
      links: [
        "IA & Automatización",
        "Desarrollo Web Avanzado",
        "Social Media 360°",
        "Publicidad Programática",
        "Branding Futurista",
        "Growth Hacking",
        "Ciberseguridad Digital",
        "Analytics Avanzado"
      ]
    },
    {
      title: "Planes",
      links: [
        "Startup Digital",
        "Growth Accelerator",
        "Enterprise Elite",
        "Plan Personalizado",
        "Consultoría Estratégica",
        "Auditoría Digital"
      ]
    },
    {
      title: "Recursos",
      links: [
        "Blog de Marketing",
        "Casos de Éxito",
        "Whitepapers",
        "Webinars",
        "Herramientas Gratuitas",
        "Centro de Ayuda"
      ]
    },
    {
      title: "Empresa",
      links: [
        "Sobre Nosotros",
        "Nuestro Equipo",
        "Carreras",
        "Prensa",
        "Partnerships",
        "Contacto"
      ]
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube", href: "#" }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-6 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="text-3xl font-bold gradient-text mb-6">MetricoreLabs</div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Transformamos negocios a través del marketing digital del futuro. Combinamos IA, automatización y creatividad para generar resultados extraordinarios.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-green-400 mr-3" />
                <span>hola@metricorelabs.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span>+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                <span>Ciudad de México, México</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="lg:col-span-1"
            >
              <span className="text-lg font-semibold text-white mb-6 block">{section.title}</span>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-16 pt-8"
        >
          <div className="glass-effect rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <span className="text-lg font-semibold text-white">¿Listo para transformar tu negocio?</span>
                <p className="text-gray-400 text-sm">Únete a más de 500 empresas que ya confían en nosotros</p>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-all duration-300">
                Comenzar Ahora <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} MetricoreLabs. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-green-400 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-green-400 transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;