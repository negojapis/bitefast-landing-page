"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-bite-black border-t border-bite-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* A dark stylized placeholder for the about section image */}
          <div className="aspect-square md:aspect-[4/5] rounded-[32px] bg-gradient-to-tr from-bite-red-dark/40 to-bite-black border border-bite-white/10 overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bite-red/20 via-transparent to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-oswald text-6xl font-black text-bite-white/5 uppercase tracking-widest -rotate-90 origin-center whitespace-nowrap">
                Burger House
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-bite-white uppercase tracking-wider mb-8">
            Nossa <span className="text-bite-red">História</span>
          </h2>
          <div className="space-y-6 text-bite-white/70 text-lg font-light leading-relaxed">
            <p>
              Na Bitefast, cada hambúrguer é preparado para entregar intensidade, textura e sabor em cada mordida.
            </p>
            <p>
              Do pão selado na chapa com manteiga até o cheddar derretido no ponto perfeito, tudo é pensado milimetricamente para uma experiência marcante que vai além de um simples lanche.
            </p>
            <p>
              Acreditamos que fast food pode ser sinônimo de qualidade premium, ingredientes selecionados e um sabor que te faz querer voltar no dia seguinte.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-oswald text-3xl font-bold text-bite-cheddar mb-2">100%</h4>
              <p className="text-bite-white/50 text-sm uppercase tracking-wider">Carne Fresca</p>
            </div>
            <div>
              <h4 className="font-oswald text-3xl font-bold text-bite-cheddar mb-2">Art.</h4>
              <p className="text-bite-white/50 text-sm uppercase tracking-wider">Preparo Artesanal</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
