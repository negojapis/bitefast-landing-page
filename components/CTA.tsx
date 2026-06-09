"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-bite-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-oswald text-5xl md:text-7xl font-bold text-bite-white uppercase tracking-wider mb-8 leading-tight">
            Pronto para sentir <br className="hidden md:block" />
            <span className="text-bite-red">esse sabor?</span>
          </h2>
          
          <p className="text-xl text-bite-white/70 mb-12 font-light">
            Faça seu pedido agora e receba o melhor hambúrguer da cidade na sua casa.
          </p>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xl rounded-full transition-transform transform hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)] uppercase tracking-wider"
          >
            <MessageCircle className="w-6 h-6" />
            Pedir pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
