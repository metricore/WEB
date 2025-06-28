import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "¿Qué hace diferente a MetricoreLabs de otras agencias?",
      answer: "Somos la única agencia que combina inteligencia artificial avanzada, automatización de marketing y creatividad humana en una sola solución. Nuestro enfoque tecnológico nos permite ofrecer resultados medibles y escalables que otras agencias simplemente no pueden igualar. Además, nuestro equipo incluye expertos en IA, data science y growth hacking."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados con sus estrategias?",
      answer: "Típicamente, nuestros clientes comienzan a ver mejoras significativas en las primeras 4-6 semanas. Sin embargo, los resultados transformadores generalmente se materializan entre los 3-6 meses. Esto depende del sector, presupuesto y objetivos específicos. Proporcionamos reportes semanales para que puedas seguir el progreso en tiempo real."
    },
    {
      question: "¿Trabajan con empresas de todos los tamaños?",
      answer: "Sí, trabajamos desde startups en etapa temprana hasta enterprises Fortune 500. Nuestros planes están diseñados para escalar con tu negocio. Tenemos experiencia específica en SaaS, FinTech, HealthTech, E-commerce, PropTech y muchos otros sectores verticales."
    },
    {
      question: "¿Qué tecnologías de IA utilizan en sus campañas?",
      answer: "Utilizamos machine learning para optimización de campañas, procesamiento de lenguaje natural para análisis de sentimientos, computer vision para análisis de contenido visual, y algoritmos predictivos para forecasting. También implementamos chatbots inteligentes, personalización dinámica y automatización de lead scoring."
    },
    {
      question: "¿Ofrecen garantías en sus resultados?",
      answer: "Ofrecemos una garantía de satisfacción de 90 días. Si no estás completamente satisfecho con los resultados en los primeros 3 meses, trabajaremos sin costo adicional hasta alcanzar los KPIs acordados, o te devolvemos tu inversión. Esta confianza se basa en nuestro historial del 98% de satisfacción cliente."
    },
    {
      question: "¿Cómo manejan la privacidad y seguridad de los datos?",
      answer: "Cumplimos con GDPR, CCPA y todas las regulaciones internacionales de privacidad. Utilizamos encriptación de grado militar, auditorías de seguridad trimestrales, y tenemos certificaciones ISO 27001. Todos nuestros empleados firman acuerdos de confidencialidad estrictos y reciben capacitación continua en ciberseguridad."
    },
    {
      question: "¿Proporcionan capacitación a nuestro equipo interno?",
      answer: "Absolutamente. Incluimos sesiones de capacitación para tu equipo como parte de nuestros planes Premium y Enterprise. Esto incluye workshops sobre herramientas de marketing, interpretación de analytics, mejores prácticas de contenido, y uso de nuestras plataformas propietarias."
    },
    {
      question: "¿Qué sucede si queremos cancelar el servicio?",
      answer: "No tenemos contratos de permanencia forzosa. Puedes cancelar con 30 días de aviso previo. Te proporcionaremos toda la documentación, accesos y assets creados durante nuestra colaboración. También ofrecemos una sesión de transición para asegurar continuidad en tus campañas."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestros servicios y metodología
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="glass-effect rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                  <div className="text-green-400 flex-shrink-0">
                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
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
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">¿Tienes más preguntas?</h3>
            <p className="text-gray-300 mb-6">
              Nuestro equipo de expertos está disponible 24/7 para resolver cualquier duda específica sobre tu proyecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Contactar Ahora
              </a>
              <a href="mailto:hola@metricorelabs.com" className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Enviar Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;