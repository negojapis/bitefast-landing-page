"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bite-black/90 backdrop-blur-md shadow-lg shadow-bite-red-dark/20 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="font-oswald text-3xl font-bold text-bite-white leading-none tracking-wider">
            BITEFAST
          </span>
          <span className="text-bite-cheddar text-xs font-semibold tracking-widest uppercase mt-1">
            Burger House
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {["Home", "Menu", "Ofertas", "Sobre"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-bite-white/80 hover:text-bite-cheddar transition-colors uppercase tracking-wide"
            >
              {item}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center bg-bite-red hover:bg-bite-red-dark text-bite-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105"
        >
          Pedir agora
        </a>
      </div>
    </motion.header>
  );
}
