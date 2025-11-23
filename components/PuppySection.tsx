import React from 'react';
import { Puppy } from '../types';
import { Scroll, Mail } from 'lucide-react';

const puppies: Puppy[] = [
  {
    id: 'p1',
    litterName: 'Помет "A"',
    status: 'available',
    gender: 'male',
    color: 'Тигровый',
    image: 'https://images.unsplash.com/photo-1591561582301-7ce6588cc286?auto=format&fit=crop&q=80&w=800',
    price: '120 000 ₽',
    lineage: {
        sire: 'Ch. Finbar the Brave',
        dam: 'Ch. Queen Maeve'
    }
  },
  {
    id: 'p2',
    litterName: 'Помет "A"',
    status: 'reserved',
    gender: 'female',
    color: 'Пшеничный',
    image: 'https://images.unsplash.com/photo-1548681528-6a5c45b664d2?auto=format&fit=crop&q=80&w=800',
    price: '140 000 ₽',
    lineage: {
        sire: 'Ch. Finbar the Brave',
        dam: 'Ch. Queen Maeve'
    }
  },
  {
    id: 'p3',
    litterName: 'Помет "A"',
    status: 'available',
    gender: 'male',
    color: 'Серый',
    image: 'https://images.unsplash.com/photo-1548247661-3d70726b784a?auto=format&fit=crop&q=80&w=800',
    price: '110 000 ₽',
    lineage: {
        sire: 'Ch. Finbar the Brave',
        dam: 'Ch. Queen Maeve'
    }
  }
];

const WaxSeal = ({ status }: { status: string }) => (
  <div className={`absolute -top-3 -right-3 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl z-20 transform rotate-12 
    ${status === 'available' ? 'bg-emerald-800 shadow-emerald-900/50' : 'bg-red-900 shadow-red-900/50'}
    border-4 border-white/10 backdrop-blur-sm
  `}>
    <div className="absolute inset-2 border border-white/20 rounded-full"></div>
    <div className="text-center transform -rotate-12">
      <span className="text-[10px] text-gold-100 font-bold uppercase tracking-widest block leading-tight">
        {status === 'available' ? 'Свободен' : 'Резерв'}
      </span>
    </div>
  </div>
);

const PuppySection: React.FC = () => {
  return (
    <div className="py-32 bg-[#e8e6e1] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
             <Scroll className="w-12 h-12 text-emerald-900" strokeWidth={1} />
          </div>
          <h2 className="text-emerald-950 font-display text-5xl md:text-6xl mb-4">Королевские Указы</h2>
          <p className="text-stone-600 font-serif text-lg italic">
            Ожидают своих владений
          </p>
        </div>

        {/* Letters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {puppies.map((puppy) => (
            <div key={puppy.id} className="bg-[#f4f1ea] p-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] relative group hover:-translate-y-2 transition-transform duration-500">
              <div className="border border-stone-300 p-6 h-full flex flex-col relative bg-[url('https://www.transparenttextures.com/patterns/paper.png')]">
                
                <WaxSeal status={puppy.status} />
                
                <div className="mb-6 text-center border-b border-stone-300 pb-4">
                    <h3 className="font-display text-3xl text-emerald-900">
                        {puppy.gender === 'male' ? 'Лорд' : 'Леди'} • {puppy.color}
                    </h3>
                    <p className="text-stone-500 text-xs uppercase tracking-[0.3em] mt-2">{puppy.litterName}</p>
                </div>
                
                <div className="relative aspect-square overflow-hidden mb-6 bg-stone-200 sepia-[0.2] group-hover:sepia-0 transition-all duration-500">
                  <img 
                      src={puppy.image} 
                      alt={`Puppy ${puppy.color}`} 
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
                </div>
                
                <div className="space-y-2 text-center mb-6 flex-grow">
                    <p className="font-serif text-sm text-stone-600">
                        <span className="text-emerald-800 font-bold">Отец:</span> {puppy.lineage?.sire}
                    </p>
                    <p className="font-serif text-sm text-stone-600">
                        <span className="text-emerald-800 font-bold">Мать:</span> {puppy.lineage?.dam}
                    </p>
                </div>

                {puppy.status === 'available' ? (
                    <button className="w-full py-3 border border-emerald-900 text-emerald-900 font-serif uppercase tracking-wider hover:bg-emerald-900 hover:text-gold-100 transition-all duration-300">
                        Направить прошение
                    </button>
                ) : (
                    <div className="w-full py-3 text-center text-stone-400 font-serif italic border border-transparent">
                        Судьба определена
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative bg-stone-900 py-16 px-8 text-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535930891776-0c2dfb7fb1a0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
                <h3 className="font-display text-4xl text-gold-100 mb-6">Лист Ожидания</h3>
                <p className="font-serif text-xl text-stone-400 mb-10 italic max-w-2xl mx-auto">
                    "Мы не продаем собак. Мы передаем наследие в достойные руки."
                </p>
                <a 
                  href="mailto:info@strazh-severa.ru"
                  className="bg-gold-600 text-stone-900 px-12 py-4 font-bold uppercase tracking-[0.2em] hover:bg-gold-500 transition-all duration-300 inline-flex items-center"
                >
                    <Mail className="mr-3 w-5 h-5" />
                    Связаться с заводчиком
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PuppySection;