import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Plans = () => {
  const handlePlanClick = (planName) => {
    toast({
      title: `Plan ${planName}`,
      description: "🚧 Esta funcionalidad aún no está implementada—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 5000,
    });
  };

  const plans = [
    {
      name: "Startup Digital",
      price: "$499",
      period: "/mes",
      description: "Perfecto para startups y emprendedores ambiciosos",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Gestión de 3 redes sociales",
        "Branding completo + guidelines",
        "Landing page optimizada",
        "15 posts mensuales + stories",
        "Reportes semanales",
        "Soporte por WhatsApp",
        "Consultoría mensual (2h)"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Growth Accelerator",
      price: "$899",
      period: "/mes",
      description: "Ideal para empresas en crecimiento acelerado",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Gestión de 5 redes sociales",
        "Sitio web completo + blog",
        "Branding avanzado + aplicaciones",
        "30 posts mensuales + contenido video",
        "Publicidad paga ($400 incluidos)",
        "Email marketing automatizado",
        "Reportes en tiempo real",
        "Soporte prioritario 24/7",
        "Consultoría semanal (4h)"
      ],
      popular: true,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Enterprise Elite",
      price: "$1,599",
      period: "/mes",
      description: "Solución enterprise para líderes del mercado",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Gestión completa multicanal",
        "Plataforma web + e-commerce + app",
        "Branding 360° + experiencias inmersivas",
        "Contenido ilimitado + producción video",
        "Publicidad paga ($800 incluidos)",
        "Marketing automation avanzado",
        "CRM integrado + lead scoring",
        "Analytics predictivo con IA",
        "Dedicated account manager",
        "Consultoría estratégica ilimitada",
        "Soporte white-glove 24/7"
      ],
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="planes" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,136,0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Planes que <span className="gradient-text">escalan contigo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Desde startups disruptivas hasta enterprises globales, tenemos la solución perfecta para tu crecimiento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`glass-effect rounded-2xl p-8 relative hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-green-400 bg-gradient-to-b from-green-900/20 to-transparent' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${plan.gradient} text-white mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <div className="text-sm text-gray-500">Facturación mensual</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePlanClick(plan.name)}
                className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 pulse-glow'
                    : 'bg-gray-700 hover:bg-gray-600'
                } text-white`}
              >
                Comenzar Ahora
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">¿Necesitas algo personalizado?</p>
          <Button
            onClick={() => handlePlanClick('Personalizado')}
            variant="outline"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3"
          >
            Solicitar Plan Personalizado
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;