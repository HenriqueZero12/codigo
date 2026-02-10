interface HeroTagProps {
  prefix: string;
  highlight: string;
  className?: string;
}

export function HeroTag({ prefix, highlight, className }: HeroTagProps) {
  return (
    <div className={`
      absolute 
      backdrop-blur-md 
      bg-brand-dark/40 
      border border-white/20 
      px-6 py-4 
      w-max max-w-full /* Garante que o container abrace o texto sem quebrar */
      whitespace-nowrap /* Força linha única */
      ${className}
    `}>
      {/* Cruzes decorativas */}
      <PlusIcon className="absolute -top-1.5 -left-1.5 text-brand-lime w-3 h-3" />
      <PlusIcon className="absolute -top-1.5 -right-1.5 text-brand-lime w-3 h-3" />
      <PlusIcon className="absolute -bottom-1.5 -left-1.5 text-brand-lime w-3 h-3" />
      <PlusIcon className="absolute -bottom-1.5 -right-1.5 text-brand-lime w-3 h-3" />
      
      {/* Tipografia Inter com pesos mistos */}
      <p 
        className="text-white font-sans text-xl leading-tight tracking-tight flex gap-2" 
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <span className="font-normal opacity-90">{prefix}</span>
        <span className="font-semibold text-white">{highlight}</span>
      </p>
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}