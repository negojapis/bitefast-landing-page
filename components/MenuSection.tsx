"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-4xl md:text-5xl font-bold text-bite-white uppercase tracking-wider"
          >
            Nosso <span className="text-bite-red">Cardápio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-bite-white/70 max-w-2xl mx-auto font-light"
          >
            Escolha o seu favorito. Feitos com blends exclusivos e ingredientes premium.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <div className="relative w-full max-w-6xl aspect-[16/9] md:aspect-[21/9]">
            <Image
              src="/images/menu-grid.jpg"
              alt="Cardápio Bitefast"
              fill
              className="object-contain rounded-3xl"
              quality={100}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
