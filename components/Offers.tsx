"use client";

import { motion } from "framer-motion";

export default function Offers() {
  return (
    <section id="ofertas" className="py-24 bg-bite-red-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-bite-red rounded-full blur-[80px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-bite-black rounded-full blur-[100px] opacity-50" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-bite-cheddar/30 bg-bite-black/40 backdrop-blur-sm rounded-[32px] p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <span className="text-bite-cheddar font-bold tracking-widest uppercase text-sm mb-4 block">
            Tempo Limitado
          </span>
          <h2 className="font-oswald text-4xl md:text-6xl font-bold text-bite-white uppercase tracking-wide mb-6">
            Oferta especial da semana
          </h2>
          <p className="text-lg md:text-xl text-bite-white/90 max-w-2xl mx-auto font-light mb-10">
            Combo com burger premium, batata crocante e bebida gelada.
          </p>
          <a
            href="https://wa.me/5500000000000"
            className="inline-block px-10 py-5 bg-bite-cheddar hover:bg-yellow-400 text-bite-black font-black text-xl rounded-full transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(255,196,0,0.4)] uppercase tracking-wider"
          >
            Garantir oferta
          </a>
        </motion.div>
      </div>
    </section>
  );
}
