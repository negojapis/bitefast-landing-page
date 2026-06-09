"use client";

import { motion } from "framer-motion";
import { Truck, Leaf, Star } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-bite-cheddar" />,
    title: "Entrega rápida",
    description: "Seu hambúrguer chega quente e perfeito para a primeira mordida.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-bite-cheddar" />,
    title: "Ingredientes frescos",
    description: "Selecionamos os melhores insumos diariamente para garantir qualidade premium.",
  },
  {
    icon: <Star className="w-8 h-8 text-bite-cheddar" />,
    title: "Cheddar premium",
    description: "Muito queijo derretido, cremoso e com sabor intenso em todas as opções.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-bite-black relative z-10 border-t border-bite-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-bite-white/5 border border-bite-white/10 rounded-[24px] p-8 hover:bg-bite-white/10 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-bite-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-oswald text-2xl font-bold text-bite-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-bite-white/70 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
