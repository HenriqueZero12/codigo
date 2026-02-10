import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO (Carrega de public/logo.svg) */}
        <Link href="/" className="relative w-40 h-20 block transition-opacity hover:opacity-80">
          <Image 
            src="/logo.svg" 
            alt="Agência Código" 
            fill 
            className="object-contain object-left"
            priority 
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {siteConfig.nav.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="
                text-[16px] 
                font-semibold 
                font-sans 
                text-white 
                hover:text-brand-lime 
                transition-colors 
                duration-300
                uppercase
                tracking-wide
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}