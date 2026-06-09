"use client";

import { motion } from "framer-motion";
import HeroImageSequence from "./HeroImageSequence";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black pt-20">
      {/* Background Image Sequence - Fills the hero */}
      <HeroImageSequence />

      {/* Dark gradient on the left to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-0 opacity-80" />

      {/* Background Radial Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen">
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-bite-red-dark/30 rounded-full blur-[120px]" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 h-full pointer-events-none">
        {/* Left Content */}
        <div className="flex flex-col justify-center pb-20 lg:pb-0 pointer-events-auto pt-12 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-oswald text-6xl md:text-[clamp(4.5rem,8vw,7rem)] font-bold text-bite-white leading-[1.05] uppercase tracking-wide drop-shadow-2xl"
          >
            Sabor Intenso.<br />
            <span className="text-bite-red">Mordida Perfeita.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-bite-white/90 max-w-lg leading-relaxed font-light drop-shadow-lg"
          >
            Hambúrguer artesanal, cheddar exagerado e uma experiência feita para quem busca sabor de verdade.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5500000000000"
              className="px-8 py-4 bg-bite-cheddar hover:bg-yellow-400 text-bite-black font-bold text-lg rounded-full text-center transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(255,196,0,0.3)] uppercase tracking-wider"
            >
              Fazer pedido
            </a>
            <a
              href="#menu"
              className="px-8 py-4 bg-black/40 backdrop-blur-md border border-bite-white/20 hover:border-bite-white hover:bg-black/60 text-bite-white font-bold text-lg rounded-full text-center transition-all uppercase tracking-wider"
            >
              Ver cardápio
            </a>
          </motion.div>
        </div>

        {/* Right Content is empty to let the background video shine */}
        <div className="hidden lg:block w-full"></div>
      </div>
    </section>
  );
}
