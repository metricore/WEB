import React from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Header from "@/components/sections/Header";
import HomePage from "@/pages/HomePage";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Plans from "@/components/sections/Plans";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>MetricoreLabs - Agencia de Marketing Digital del Futuro</title>
        <meta
          name="description"
          content="Transformamos tu presencia digital con estrategias de marketing innovadoras, IA avanzada y tecnología de vanguardia. Especialistas en branding, desarrollo web, redes sociales y publicidad digital."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header />
        <main>
          <HomePage />
          <Stats />
          <Services />
          <Process />
          <Plans />
          <About />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <CTA />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;
