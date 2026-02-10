import Image from "next/image";
import { siteConfig } from "@/config/site";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

export function PainPointsSection() {
  return (
    <section id="services" className="relative min-h-screen flex items-center py-24 bg-[#000000] overflow-hidden">
      
      {/* Background Animado */}
      <StarsBackground /> 
      <ShootingStars />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Coluna Esquerda: Textos e Lista */}
        <div className="max-w-xl relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight tracking-tight">
            {siteConfig.painPoints.title}{" "}
            <span className="text-brand-lime block mt-2">
              {siteConfig.painPoints.highlight}
            </span>
          </h2>

          <ul className="space-y-6">
            {siteConfig.painPoints.items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <Image 
                  src="/images/icon.svg" 
                  alt="Seta" 
                  width={24} 
                  height={24} 
                  className="mt-1 flex-shrink-0"
                />
                <p className="text-white/90 text-lg md:text-xl font-light font-sans" style={{ fontFamily: 'var(--font-inter)' }}>
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna Direita: Planeta Roxo (100% Puro, sem filtros CSS) */}
        <div className="relative h-[600px] md:h-[800px] w-full hidden lg:block perspective-1000">
          <div className="absolute top-1/2 -translate-y-1/2 right-[-20%] w-[120%] h-[120%] z-10 pointer-events-none">
            <Image 
              src="/images/planet-purple.png" 
              alt="Planeta Roxo" 
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

      </div>
    </section>
  );
}