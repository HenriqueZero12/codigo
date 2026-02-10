import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroTag } from "@/components/ui/hero-tag";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      
      {/* CAMADA 1: Fundo */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-brand-dark" /> 
         <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/50 to-transparent" />
      </div>

      {/* CAMADA 2: Planeta */}
      <div className="absolute inset-0 z-10">
        <Image 
            src="/images/bg-planet.png" 
            alt="Planet Background" 
            fill 
            className="object-cover"
            quality={100}
            priority
            unoptimized
        />
      </div>

      {/* CAMADA 3: Astronauta */}
      <div className="absolute inset-0 z-20 pointer-events-none">
         <Image 
            src="/images/astronaut.png" 
            alt="Astronauta" 
            fill
            className="object-cover"
            quality={100}
            priority
            unoptimized
         /> 
      </div>

      {/* CAMADA 4: Conteúdo */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-30 h-full min-h-[600px]">
        
        {/* Esquerda: Textos */}
        <div className="max-w-2xl pt-20 lg:pt-0">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {siteConfig.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 font-light max-w-lg leading-relaxed">
            {siteConfig.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-brand-lime text-brand-dark hover:bg-brand-lime/80 font-bold rounded-md px-8 h-12 text-base shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            >
              {siteConfig.hero.ctaPrimary}
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border border-brand-lime text-brand-lime hover:bg-brand-lime/10 rounded-md px-8 h-12 text-base"
            >
              {siteConfig.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Direita: Tags Flutuantes */}
        <div className="relative h-full w-full hidden lg:block">
          {siteConfig.hero.floatingTags.map((tag, index) => (
             <HeroTag 
               key={index}
               prefix={tag.prefix}
               highlight={tag.highlight}
               className={`absolute animate-float ${
                  index === 0 ? "top-[15%] left-[-50px]" : 
                  index === 1 ? "top-[45%] right-[-20px] [animation-delay:2s]" : 
                  "bottom-[15%] left-[10%] [animation-delay:4s]"
               }`}
             />
          ))}
        </div>

      </div>
    </section>
  );
}