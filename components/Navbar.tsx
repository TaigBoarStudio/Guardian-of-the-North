import React, { useState, useEffect } from 'react';
import { Menu, X, Dog } from 'lucide-react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: Section.HOME, label: 'Главная' },
    { id: Section.HISTORY, label: 'Легенды' },
    { id: Section.ABOUT, label: 'О породе' },
    { id: Section.DOGS, label: 'Собаки' },
    { id: Section.PUPPIES, label: 'Щенки' },
  ];

  const navClass = `fixed w-full z-50 transition-all duration-700 ${
    isScrolled ? 'bg-emerald-950/90 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => scrollToSection(Section.HOME)}
          >
            <Dog className={`h-8 w-8 mr-3 transition-colors duration-500 ${isScrolled ? 'text-gold-500' : 'text-stone-200 group-hover:text-gold-400'}`} />
            <div className="flex flex-col">
              <span className={`font-serif text-lg md:text-xl font-bold tracking-[0.15em] uppercase ${isScrolled ? 'text-stone-200' : 'text-white'}`}>
                Страж
              </span>
              <span className={`font-serif text-xs md:text-sm font-light tracking-[0.3em] uppercase text-center ${isScrolled ? 'text-gold-500' : 'text-gold-400'}`}>
                Севера
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs lg:text-sm font-medium transition-all duration-500 uppercase tracking-[0.2em] relative group
                  ${activeSection === item.id ? 'text-gold-400' : 'text-stone-300 hover:text-white'}
                `}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-1/2 w-0 h-px bg-gold-500 transition-all duration-500 transform -translate-x-1/2 group-hover:w-full ${activeSection === item.id ? 'w-full' : ''}`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-gold-400 transition-colors">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-emerald-950 absolute w-full top-full left-0 shadow-2xl border-t border-emerald-900 animate-fade-in-down">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-center py-4 text-sm font-light uppercase tracking-[0.2em] transition-all
                  ${activeSection === item.id 
                    ? 'text-gold-400 bg-emerald-900/50' 
                    : 'text-stone-300 hover:text-white hover:bg-emerald-900/30'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;