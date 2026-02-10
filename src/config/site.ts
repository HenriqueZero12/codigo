export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  nav: NavItem[];
  hero: {
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    // Nova estrutura para controle total do design
    floatingTags: Array<{
      prefix: string;   // Parte "Regular"
      highlight: string; // Parte "Semibold"
    }>
  }
  painPoints: {
    title: string;
    highlight: string;
    items: string[];
  }
}


export const siteConfig: SiteConfig = {
  nav: [
    { label: "Home", href: "#" },
    { label: "Serviços", href: "#services" },
    { label: "Cases", href: "#cases" },
    { label: "Sobre", href: "#about" },
  ],
  hero: {
    title: "A gente resolve o marketing da sua empresa",
    description: "Organizamos sua comunicação, seu site e suas campanhas para tudo trabalhar conectado e gerar demanda de verdade. Sem você precisar virar especialista.",
    ctaPrimary: "Quero uma análise",
    ctaSecondary: "Ver como funciona",
    floatingTags: [
      { prefix: "Chega de marketing", highlight: '"cada um por um lado"' },
      { prefix: "Chega de gastar", highlight: "em anúncio sem base" },
      { prefix: "Chega de depender de", highlight: "vários fornecedores" },
    ]
    
  },
painPoints: {
    title: "Se você sente que o marketing não encaixa,",
    highlight: "você não está sozinho.",
    items: [
      "Sua empresa parece boa, mas não parece confiável online",
      "O cliente chega confuso e não entende por que comprar de você",
      "Você já testou anúncios, mas não viu consistência",
      "Cada fornecedor fala uma coisa e nada conversa",
      "Você não tem tempo pra ficar gerenciando marketing"
    ]
  }
};
