import React, { useEffect, useState } from "react";
import { getPageBySlug } from "@/api/wordpress";
import { motion } from "framer-motion";
import TechMetrics from "@/components/ui/TechMetrics";
import NetworkBackground from "@/components/ui/NetworkBackground";

const HomePage = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const data = await getPageBySlug("inicio");
        if (data) {
          setPage(data);
        } else {
          setError(
            'No se pudo encontrar la página con slug "inicio". Asegúrate de que exista en tu WordPress y que esté publicada.',
          );
        }
      } catch (err) {
        console.error(err);
        setError(
          "Error al conectar con WordPress. Verifica la URL en src/api/wordpress.js y que la API REST de WordPress esté activa y accesible.",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchPage();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Network Background */}
      <NetworkBackground />

      {/* Background grid pattern */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      {/* Subtle glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl floating-animation"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl floating-animation"
        style={{ animationDelay: "-3s" }}
      ></div>

      {/* Hero Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1,
        }}
        className="text-center z-10 relative"
      >
        <motion.h1
          className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tight mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            METRICORE
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl mt-4 text-white neon-glow tracking-widest">
            LABS
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Innovation • Technology • Future
        </motion.p>

        {/* Glowing line */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-8 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        ></motion.div>
      </motion.div>

      {/* Tech Metrics */}
      <TechMetrics />
    </div>
  );
};

export default HomePage;
