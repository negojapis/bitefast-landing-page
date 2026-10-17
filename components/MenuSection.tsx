"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ArrowUpRight, Flame, Sparkles } from "lucide-react";

interface BurgerItem {
  id: string;
  name: string;
  price: string;
  badge: string;
  description: string;
  image: string;
}

const burgers: BurgerItem[] = [
  {
    id: "signature",
    name: "Signature Burger",
    price: "R$ 42,90",
    badge: "Mais Pedido",
    description: "Blend Angus 180g grelhado no fogo, bacon crocante, cebola caramelizada artesanal e queijo cheddar cremoso derretido.",
    image: "/images/burger-signature.png",
  },
  {
    id: "double-cheddar",
    name: "Double Cheddar",
    price: "R$ 48,90",
    badge: "Cheddar Lovers",
    description: "Pão australiano macio, duplo blend 160g, cascata de cheddar cremoso exagerado e farofa crocante de bacon artesanal.",
    image: "/images/burger-double-cheddar.png",
  },
  {
    id: "onion-crispy",
    name: "Onion Crispy",
    price: "R$ 39,90",
    badge: "Extra Crocante",
    description: "Blend bovino 180g suculento, anéis de cebola empanados ultra crocantes, molho barbecue rústico e queijo prato derretido.",
    image: "/images/burger-onion-crispy.png",
  },
  {
    id: "spicy-bacon",
    name: "Spicy Bacon",
    price: "R$ 44,90",
    badge: "Picante & Defumado",
    description: "Blend 180g na brasa viva, tiras fartas de bacon caramelizado com toque picante exclusivo e queijo suíço derretido.",
    image: "/images/burger-spicy-bacon.png",
  },
  {
    id: "classic-smash",
    name: "Classic Smash",
    price: "R$ 34,90",
    badge: "Smash Original",
    description: "Duplo smash burger ultra prensado com crostinha dourada, cheddar americano duplo, picles agridoce da casa e molho especial.",
    image: "/images/burger-classic-smash.png",
  },
  {
    id: "supreme-bite",
    name: "Supreme Bite",
    price: "R$ 54,90",
    badge: "Chef's Special",
    description: "Blend Angus nobre 200g, bloco de queijo gouda empanado crocante, tiras de bacon, alface americana, tomate e maionese trufada.",
    image: "/images/burger-supreme-bite.png",
  },
];

function BurgerCard({
  burger,
  index,
  isInitiallyActive,
}: {
  burger: BurgerItem;
  index: number;
  isInitiallyActive: boolean;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(
    `Olá! Gostaria de pedir o *${burger.name}* (${burger.price}).`
  )}`;

  const isActive = isHovered || isInitiallyActive;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative block w-full h-[460px] sm:h-[500px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c0c0c] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isActive
            ? "border-2 border-bite-red shadow-[0_0_35px_rgba(179,18,18,0.45)] -translate-y-2.5 scale-[1.015]"
            : "border border-white/10 hover:border-bite-red/70 hover:shadow-[0_0_30px_rgba(179,18,18,0.35)] hover:-translate-y-2 hover:scale-[1.01]"
        }`}
      >
        {/* Efeito Spotlight Interativo seguindo o cursor do mouse */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 196, 0, 0.15), transparent 70%)`,
          }}
        />

        {/* Marca d'água BITEFAST centralizada no topo */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none text-center">
          <span className="font-oswald font-black text-xl sm:text-2xl tracking-[0.28em] text-white/20 group-hover:text-white/40 transition-all duration-300 uppercase block">
            BITEFAST
          </span>
        </div>

        {/* Badge da categoria no canto superior esquerdo */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/10 text-bite-white/80 group-hover:border-bite-cheddar/50 group-hover:text-bite-cheddar transition-all duration-300">
            <Sparkles className="w-3 h-3 text-bite-cheddar" />
            {burger.badge}
          </span>
        </div>

        {/* Ícone de ação rápida no canto superior direito */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 group-hover:border-bite-red group-hover:bg-bite-red text-bite-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Container da Imagem com Zoom Dinâmico */}
        <div className="relative w-full h-[78%] overflow-hidden bg-black/50">
          <Image
            src={burger.image}
            alt={burger.name}
            fill
            priority={index < 3}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
          />

          {/* Vinheta escura na base para contraste perfeito */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>

        {/* Barra Inferior com Nome, Preço e Painel Interativo Deslizante */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#080808]/95 backdrop-blur-md border-t border-white/10 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300">
          {/* Linha Principal: Nome e Preço */}
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase tracking-wide text-bite-white group-hover:text-bite-cheddar transition-colors duration-200">
              {burger.name}
            </h3>
            <span className="font-oswald text-xl sm:text-2xl font-bold text-bite-cheddar tracking-wider whitespace-nowrap">
              {burger.price}
            </span>
          </div>

          {/* Descrição dos Ingredientes (expande suavemente no hover) */}
          <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2.5">
            <p className="text-xs sm:text-sm text-bite-white/75 font-light leading-relaxed mb-3">
              {burger.description}
            </p>

            {/* Botão de Pedir no WhatsApp revelado no hover */}
            <div className="w-full py-2.5 px-4 rounded-xl bg-bite-red hover:bg-bite-red-dark text-bite-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(179,18,18,0.4)] transition-all">
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Pedir pelo WhatsApp</span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function MenuSection() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section id="menu" className="py-28 bg-[#070707] relative overflow-hidden">
      {/* Luzes ambiente de fundo */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-bite-red-dark/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[650px] h-[650px] bg-bite-cheddar/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Container aumentado para máximo impacto visual */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Título da Seção */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bite-cheddar/10 border border-bite-cheddar/30 text-bite-cheddar text-xs md:text-sm font-semibold tracking-widest uppercase mb-4"
          >
            <Flame className="w-4 h-4 text-bite-cheddar animate-pulse" />
            <span>Cardápio Artesanal Bitefast</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-oswald text-4xl sm:text-6xl md:text-7xl font-bold text-bite-white uppercase tracking-wider"
          >
            Nosso <span className="text-bite-red">Cardápio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-bite-white/70 max-w-2xl mx-auto font-light text-base sm:text-lg md:text-xl leading-relaxed"
          >
            Passe o mouse sobre os lanches para ver os detalhes e fazer seu pedido diretamente no WhatsApp.
          </motion.p>
        </div>

        {/* Grid Ampliado de 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 xl:gap-12">
          {burgers.map((burger, index) => (
            <div
              key={burger.id}
              onMouseEnter={() => setHoveredCardId(burger.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <BurgerCard
                burger={burger}
                index={index}
                // O primeiro card fica com o contorno vermelho por padrão se nenhum outro estiver hovered (idêntico à referência)
                isInitiallyActive={hoveredCardId === null && index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
