import React from 'react';
import { Dog } from '../types';

const ourDogs: Dog[] = [
  {
    id: '1',
    name: 'Финбар',
    registeredName: 'Emerald Giants Finbar the Brave',
    gender: 'male',
    dob: '2019-05-12',
    image: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&q=80&w=800',
    description: 'Мощный кобель с идеальной анатомией. Чемпион России, Чемпион Евразии.',
    titles: ['CH RUS', 'CH RKF', 'CH CLUB']
  },
  {
    id: '2',
    name: 'Мэйв',
    registeredName: 'Emerald Giants Queen Maeve',
    gender: 'female',
    dob: '2020-03-15',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    description: 'Королева питомника. Нежная и заботливая мать с великолепной жесткой шерстью.',
    titles: ['JCH RUS', 'CH RUS']
  },
  {
    id: '3',
    name: 'Оскар',
    registeredName: 'Silver Shadow Oscar',
    gender: 'male',
    dob: '2021-08-01',
    image: 'https://images.unsplash.com/photo-1619446906607-81ad229c652d?auto=format&fit=crop&q=80&w=800',
    description: 'Молодая надежда. Импорт из Ирландии. Крупный, костистый, с истинным характером.',
    titles: ['JCH RUS']
  }
];

const DogGallery: React.FC = () => {
  return (
    <div className="py-32 bg-stone-950 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
            <h2 className="text-stone-200 font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight">Зал Славы</h2>
            <div className="flex justify-center items-center gap-4">
                <div className="h-px w-16 bg-stone-800"></div>
                <p className="text-gold-500/60 font-serif italic text-xl">"Наши великаны"</p>
                <div className="h-px w-16 bg-stone-800"></div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ourDogs.map((dog) => (
            <div key={dog.id} className="group relative">
              {/* Card */}
              <div className="relative bg-stone-900 border border-stone-800/50 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:border-gold-500/30">
                
                {/* Image Frame */}
                <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                        src={dog.image} 
                        alt={dog.name} 
                        className="w-full h-full object-cover filter sepia-[0.2] group-hover:sepia-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    {/* Inner border */}
                    <div className="absolute inset-3 border border-white/10 z-20 pointer-events-none"></div>
                </div>

                {/* Info */}
                <div className="p-8 text-center bg-stone-900 relative">
                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-stone-900 rotate-45 border-l border-t border-stone-800 group-hover:border-gold-500/30 transition-colors duration-500"></div>
                     
                     <h3 className="font-display text-2xl text-gold-100 mb-2 tracking-wide">{dog.registeredName}</h3>
                     <p className="text-xs text-gold-500 uppercase tracking-[0.2em] mb-6">{dog.titles?.join(' • ')}</p>
                     
                     <div className="w-10 h-px bg-stone-700 mx-auto mb-6"></div>
                     
                     <p className="text-stone-400 font-serif text-sm leading-relaxed">
                       {dog.description}
                     </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogGallery;