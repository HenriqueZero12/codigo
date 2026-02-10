import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importa a fonte Inter
import "./globals.css";

// Configura a fonte Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Cria uma variável CSS para usarmos no Tailwind
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agência Código",
  description: "Marketing e Tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ypn1xik.css" />
      </head>
      {/* Adicionamos a variável da font-inter no body */}
      <body className={`${inter.variable} antialiased font-sans bg-brand-dark text-white min-h-screen selection:bg-brand-lime selection:text-brand-dark overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}