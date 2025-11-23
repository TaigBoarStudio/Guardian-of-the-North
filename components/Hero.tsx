import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from '../types';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-emerald-950">
      {/* Deep Emerald Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900 via-emerald-950 to-emerald-950"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Content */}
      <div 
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }} // Parallax on text
      >
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-gold-500"></div>
                <span className="text-gold-400 text-xs md:text-sm uppercase tracking-[0.4em] font-serif">Est. 2015 • Krasnoyarsk</span>
                <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-gold-500"></div>
            </div>
        </div>

        <h1 className="font-display text-6xl md:text-9xl text-stone-100 font-bold mb-4 leading-none tracking-tighter animate-fade-in-up shadow-lg" style={{ animationDelay: '0.5s' }}>
          Страж
        </h1>
        <h1 className="font-display text-6xl md:text-9xl text-gold-500 font-light italic mb-8 leading-none tracking-tight animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          Севера
        </h1>

        <p className="text-stone-200 text-lg md:text-2xl max-w-2xl mb-12 font-serif italic leading-relaxed animate-fade-in-up drop-shadow-md" style={{ animationDelay: '1s' }}>
          "Величие древних королей в сердце Сибири."
        </p>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
            <button 
                onClick={() => scrollToSection(Section.HISTORY)}
                className="group relative px-10 py-4 border border-gold-500/50 overflow-hidden transition-colors hover:border-gold-400"
            >
                <div className="absolute inset-0 w-0 bg-gold-500/20 transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative font-serif text-gold-400 tracking-[0.2em] uppercase text-sm group-hover:text-gold-100">История Породы</span>
            </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gold-500/70 hover:text-gold-400 cursor-pointer transition-all duration-300 animate-bounce z-30" 
        onClick={() => scrollToSection(Section.HISTORY)}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Hero;
