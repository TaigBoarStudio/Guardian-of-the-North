import React from 'react';
import { Ruler, Heart, History, Home } from 'lucide-react';

const DropCap = ({ letter }: { letter: string }) => (
  <span className="float-left text-6xl md:text-7xl font-gothic text-emerald-900 mr-4 mt-1 leading-[0.8] border border-gold-500/30 p-2 bg-gold-100/30 rounded-sm shadow-sm">
    {letter}
  </span>
);

const BreedInfo: React.FC = () => {
  const features = [
    {
      icon: Ruler,
      title: "Величие",
      text: "Ирландский волкодав — гигант среди собак. Кобели достигают 81-86 см в холке. Это собака внушительной силы, сочетающая мощь и стремительность."
    },
    {
      icon: Heart,
      title: "Характер",
      text: "Под суровой внешностью скрывается «нежный гигант». Они безгранично терпеливы с детьми, преданны семье и невероятно чувствительны к эмоциям хозяина."
    },
    {
      icon: History,
      title: "История",
      text: "Древнейшая порода Ирландии. Ими владели короли, их дарили императорам как драгоценности. Они охотились на ирландского лося и сражались в войнах."
    },
    {
      icon: Home,
      title: "В доме",
      text: "Несмотря на размер, дома они тихи и незаметны. Им не нужны дворцы, но нужен мягкий диван и ваша любовь. Однако им необходим простор для галопа на улице."
    }
  ];

  return (
    <div className="py-32 relative bg-[#f2f0e9] overflow-hidden">
      {/* Parchment Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-80"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
           <span className="font-gothic text-emerald-900/60 tracking-[0.2em] text-xl mb-4 block">Liber Canis</span>
           <h2 className="text-emerald-950 font-gothic text-7xl md:text-8xl mb-4 tracking-wide">
              О Породе
           </h2>
           <div className="flex items-center justify-center gap-4 opacity-60">
             <div className="h-px w-20 bg-emerald-900"></div>
             <div className="w-2 h-2 rotate-45 bg-emerald-900"></div>
             <div className="h-px w-20 bg-emerald-900"></div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
          {features.map((f, i) => (
            <div key={i} className="relative group">
              {/* Divider line for desktop */}
              <div className="absolute -left-10 top-0 bottom-0 w-px bg-emerald-900/10 hidden md:block"></div>
              
              <div className="flex items-end mb-6 border-b border-emerald-900/20 pb-2">
                <f.icon className="w-8 h-8 text-gold-600 mr-4 opacity-80 mb-1" strokeWidth={1.5} />
                <h3 className="font-gothic text-4xl text-emerald-950 w-full">
                  {f.title}
                </h3>
              </div>
              
              {/* Using font-display (Cormorant) for a classic book look */}
              <p className="font-display text-2xl text-stone-800 leading-relaxed text-justify font-medium">
                <DropCap letter={f.text.charAt(0)} />
                {f.text.slice(1)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <p className="font-gothic text-3xl text-emerald-900/70 max-w-3xl mx-auto">
             "Собаки говорят, но только с теми, кто умеет слушать."
           </p>
        </div>

      </div>
      
      {/* Edge Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default BreedInfo;