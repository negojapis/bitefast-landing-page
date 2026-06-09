import Link from "next/link";
import { Camera, Globe, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030303] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex flex-col mb-6">
              <span className="font-oswald text-4xl font-bold text-bite-white leading-none tracking-wider">
                BITEFAST
              </span>
              <span className="text-bite-cheddar text-sm font-semibold tracking-widest uppercase mt-1">
                Burger House
              </span>
            </Link>
            <p className="text-bite-white/60 font-light max-w-sm">
              Elevando o padrão do fast food com ingredientes premium, muito cheddar e sabor de verdade.
            </p>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg text-bite-white uppercase tracking-wider mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-4">
              {["Home", "Menu", "Ofertas", "Sobre"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-bite-white/60 hover:text-bite-cheddar transition-colors font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg text-bite-white uppercase tracking-wider mb-6">
              Siga-nos
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-bite-white/5 flex items-center justify-center text-bite-white hover:bg-bite-cheddar hover:text-bite-black transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bite-white/5 flex items-center justify-center text-bite-white hover:bg-bite-cheddar hover:text-bite-black transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bite-white/5 flex items-center justify-center text-bite-white hover:bg-bite-cheddar hover:text-bite-black transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-bite-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-bite-white/40 text-sm font-light">
            © {new Date().getFullYear()} Bitefast Burger House. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-bite-white/40 font-light">
            <a href="#" className="hover:text-bite-white">Termos de Uso</a>
            <a href="#" className="hover:text-bite-white">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
