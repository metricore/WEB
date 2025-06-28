import React, { useEffect, useState } from "react";
import { getPageBySlug } from "@/api/wordpress";
import { motion } from "framer-motion";

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-green-400 neon-glow">
          Bienvenido a Metricore Labs
        </h1>
      </div>
    );
  }

  if (!page) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-40"
    >
      <div className="wordpress-content max-w-4xl mx-auto text-center">
        <h1
          dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          className="text-6xl md:text-8xl font-black mb-8 leading-tight gradient-text neon-glow"
        />
        <div
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          className="text-xl text-gray-300 leading-relaxed"
        />
      </div>
    </motion.section>
  );
};

export default HomePage;
