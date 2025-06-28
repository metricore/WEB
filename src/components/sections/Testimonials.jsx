import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      position: "CEO",
      company: "TechStart Solutions",
      image: "Professional businesswoman CEO in modern office",
      testimonial: "MetricoreLabs no solo transformó nuestra presencia digital, sino que revolucionó nuestra forma de entender el marketing. En 6 meses aumentamos nuestras ventas online en un 300% y conseguimos funding de $2M. Su enfoque con IA es simplemente impresionante.",
      rating: 5,
      results: "300% aumento en ventas"
    },
    {
      name: "Carlos Mendoza",
      position: "Fundador",
      company: "EcoFashion Global",
      image: "Sustainable fashion entrepreneur in eco-friendly store",
      testimonial: "La estrategia omnicanal que desarrollaron nos posicionó como líderes en moda sostenible. Pasamos de ser una marca local a tener presencia en 15 países. Su visión global y ejecución impecable superaron todas nuestras expectativas.",
      rating: 5,
      results: "Expansión a 15 países"
    },
    {
      name: "Ana Rodríguez",
      position: "CMO",
      company: "FinTech Disruptor",
      image: "Female fintech executive with financial technology background",
      testimonial: "El lanzamiento de nuestra app fintech fue un éxito rotundo gracias a MetricoreLabs. Alcanzamos 1 millón de usuarios en solo 6 meses con una estrategia de marketing viral que nadie más podría haber ejecutado. Son verdaderos magos del marketing digital.",
      rating: 5,
      results: "1M usuarios en 6 meses"
    },
    {
      name: "Roberto Silva",
      position: "Director",
      company: "HealthTech Innovation",
      image: "Healthcare technology director in medical facility",
      testimonial: "Su especialización en marketing B2B para el sector salud es excepcional. Nos ayudaron a conseguir contratos con más de 50 hospitales y generar $5M en nuevos contratos. Su conocimiento del sector y estrategias personalizadas son incomparables.",
      rating: 5,
      results: "$5M en contratos"
    },
    {
      name: "Laura Martínez",
      position: "Directora de Marketing",
      company: "RetailTech Pro",
      image: "Marketing director in modern retail technology company",
      testimonial: "La automatización de marketing que implementaron transformó completamente nuestros procesos. Ahora generamos 5x más leads calificados con la mitad del esfuerzo. Su tecnología de IA para segmentación de audiencias es revolucionaria.",
      rating: 5,
      results: "5x más leads calificados"
    },
    {
      name: "Diego Fernández",
      position: "CEO",
      company: "PropTech Innovators",
      image: "Property technology CEO in modern real estate office",
      testimonial: "MetricoreLabs entendió perfectamente nuestro nicho en PropTech. Su estrategia de contenido especializado y lead generation nos posicionó como thought leaders del sector. Los resultados hablan por sí solos: 400% más leads en 4 meses.",
      rating: 5,
      results: "400% más leads"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-green-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Testimonios reales de líderes empresariales que han transformado sus negocios con nuestras estrategias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-green-400 mb-4" />
                
                <div className="flex items-center mb-6">
                  <img   
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    alt={`${testimonial.name} - ${testimonial.position} at ${testimonial.company}`}
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-green-400 text-sm font-semibold">{testimonial.position}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.testimonial}"</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-green-400 font-semibold text-sm">
                    {testimonial.results}
                  </div>
                </div>
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
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">4.9/5</span>
            </div>
            <p className="text-gray-300 text-lg">
              Calificación promedio basada en más de 200 reseñas verificadas de clientes reales
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;