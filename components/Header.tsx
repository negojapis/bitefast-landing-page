"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowRight, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu ao pressionar Esc e travar scroll quando aberto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const navItems = [
    { name: "Home", href: "#home", num: "01" },
    { name: "Menu", href: "#menu", num: "02" },
    { name: "Ofertas", href: "#ofertas", num: "03" },
    { name: "Sobre", href: "#sobre", num: "04" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-bite-black/90 backdrop-blur-md shadow-lg shadow-black/50 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col group z-50 focus:outline-none"
          >
            <span className="font-oswald text-3xl font-bold text-bite-white leading-none tracking-wider group-hover:text-bite-cheddar transition-colors">
              BITEFAST
            </span>
            <span className="text-bite-cheddar text-xs font-semibold tracking-widest uppercase mt-1">
              Burger House
            </span>
          </Link>

          {/* Botão Hambúrguer no canto direito - Estilo Minimalista / Responsivo */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={menuOpen}
            className="relative z-50 p-2.5 -mr-2 rounded-lg flex flex-col justify-center items-center gap-1.5 focus:outline-none group cursor-pointer transition-colors hover:bg-white/5"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="w-7 h-[2px] bg-bite-white rounded-full transition-colors group-hover:bg-bite-cheddar origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="w-7 h-[2px] bg-bite-white rounded-full transition-colors group-hover:bg-bite-cheddar"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="w-7 h-[2px] bg-bite-white rounded-full transition-colors group-hover:bg-bite-cheddar origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Drawer / Sessão Lateral no Canto Direito */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop escurecido com blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Painel lateral deslizante da direita */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] md:w-[460px] h-screen bg-[#070707] border-l border-white/10 z-50 flex flex-col justify-between p-6 sm:p-10 shadow-[-20px_0_60px_rgba(0,0,0,0.9)] overflow-y-auto"
            >
              {/* Brilho sutil no fundo da gaveta */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-bite-red/15 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-bite-cheddar/10 rounded-full blur-[100px] pointer-events-none" />

              {/* Topo da Sessão Lateral */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <span className="font-oswald text-2xl font-bold text-bite-white tracking-wider block">
                    BITEFAST
                  </span>
                  <span className="text-[10px] text-bite-cheddar font-semibold tracking-widest uppercase">
                    Burger House • Menu
                  </span>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-bite-white hover:text-bite-cheddar transition-all cursor-pointer focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links de Navegação com Efeito Stagger */}
              <nav className="relative z-10 my-auto py-8 flex flex-col gap-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-bite-white/40 mb-2">
                  Navegação Principal
                </span>

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.1 + index * 0.08,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between py-3 border-b border-white/5 hover:border-bite-cheddar/40 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-bite-cheddar/70 group-hover:text-bite-cheddar transition-colors">
                          {item.num}
                        </span>
                        <span className="font-oswald text-3xl sm:text-4xl font-bold tracking-wider text-bite-white group-hover:text-bite-cheddar uppercase transition-all duration-200 group-hover:translate-x-1">
                          {item.name}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-bite-cheddar group-hover:text-bite-black text-white/50 flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Rodapé da Gaveta com CTA Pedir Agora e Informações */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col gap-6">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-3 bg-bite-red hover:bg-bite-red-dark text-bite-white py-4 px-6 rounded-full font-bold uppercase tracking-wider text-sm transition-all transform hover:scale-[1.02] shadow-[0_0_25px_rgba(179,18,18,0.4)]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pedir agora no WhatsApp</span>
                </a>

                <div className="flex flex-col gap-1 text-xs text-bite-white/50 font-light">
                  <div className="flex items-center justify-between text-bite-white/70">
                    <span>Horário de Funcionamento:</span>
                    <span className="text-bite-cheddar font-medium">18h às 23h30</span>
                  </div>
                  <span>Terça a Domingo • Delivery & Retirada</span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
