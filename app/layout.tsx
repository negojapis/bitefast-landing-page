import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BITEFAST - Burger House",
  description: "Hambúrguer artesanal, cheddar exagerado e uma experiência feita para quem busca sabor de verdade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col bg-bite-black text-bite-white">
        {children}
      </body>
    </html>
  );
}
