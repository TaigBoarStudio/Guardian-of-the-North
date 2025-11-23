import React from 'react';

// SVG Components for Atmosphere
const CelticPattern = () => (
  <svg className="absolute w-full h-full opacity-[0.03] pointer-events-none top-0 left-0" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0 0 Q 50 50 100 0 Q 50 50 0 100 Q 50 50 0 0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-500"/>
  </svg>
);

const DropCap = ({ letter }: { letter: string }) => (
  <span className="float-left font-gothic text-6xl md:text-8xl text-gold-500 mb-2 mr-4 tracking-wide opacity-90 leading-[0.8]">
    {letter}
  </span>
);

const BrokenKnot = () => (
  <svg className="w-full h-full max-h-[600px] drop-shadow-2xl" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="knotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" /> {/* Gold 500 */}
        <stop offset="100%" stopColor="#78350f" /> {/* Amber 900 */}
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* --- ATMOSPHERE LAYERS (Orbits & Time) --- */}
    
    {/* Outer Orbit */}
    <circle cx="250" cy="250" r="220" fill="none" stroke="#44403c" strokeWidth="1" strokeDasharray="4 8" opacity="0.3">
         <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="120s" repeatCount="indefinite" />
    </circle>
    
    {/* Inner Static Ring */}
    <circle cx="250" cy="250" r="180" fill="none" stroke="#292524" strokeWidth="0.5" opacity="0.2" />

    {/* Historical Dates fading in background */}
    <text x="250" y="80" textAnchor="middle" fontFamily="NewCyrillicGoth" fontSize="50" fill="#57534e" opacity="0.25" letterSpacing="0.1em">XVII</text>
    <text x="250" y="440" textAnchor="middle" fontFamily="NewCyrillicGoth" fontSize="50" fill="#57534e" opacity="0.25" letterSpacing="0.1em">XVIII</text>

    {/* --- CELTIC TRIQUETRA --- */}
    <g transform="translate(250, 260) scale(1.8)">
      {/* 1. Top Left Loop (Solid) */}
      <path 
        d="M 0 -80 Q 40 -40 0 0 Q -40 -40 0 -80" 
        fill="none" 
        stroke="url(#knotGradient)" 
        strokeWidth="10" 
        strokeLinecap="round"
        transform="rotate(-30)"
        filter="url(#glow)"
        className="opacity-90"
      />
      
      {/* 2. Top Right Loop (Solid) */}
      <path 
        d="M 0 -80 Q 40 -40 0 0 Q -40 -40 0 -80" 
        fill="none" 
        stroke="url(#knotGradient)" 
        strokeWidth="10" 
        strokeLinecap="round"
        transform="rotate(90)"
        filter="url(#glow)"
        className="opacity-90"
      />

      {/* 3. Bottom Loop (The Broken Link) */}
      {/* Faint Outline */}
      <path 
        d="M 0 -80 Q 40 -40 0 0 Q -40 -40 0 -80" 
        fill="none" 
        stroke="#44403c" 
        strokeWidth="10" 
        strokeLinecap="round"
        transform="rotate(210)"
        className="opacity-20"
      />
      
      {/* The Thread of Hope (Pulsing Dotted Line) */}
      <path 
        d="M 0 -80 Q 40 -40 0 0 Q -40 -40 0 -80" 
        fill="none" 
        stroke="#fbbf24" 
        strokeWidth="3" 
        strokeLinecap="round"
        strokeDasharray="3 6"
        transform="rotate(210)"
        className="opacity-80"
      >
        <animate attributeName="stroke-dashoffset" from="9" to="0" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
        <animate attributeName="stroke-width" values="3;4;3" dur="3s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Center Spark (Life) */}
    <circle cx="250" cy="260" r="4" fill="#fbbf24" filter="url(#glow)">
        <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const HistorySection: React.FC = () => {
  return (
    <div className="bg-stone-950 relative z-20 overflow-hidden text-stone-300">
      <CelticPattern />
      
      {/* 1. Cu Faoil - The Great Dog of the Celts */}
      <div className="relative py-24 px-4 border-b border-stone-800">
         <div className="max-w-5xl mx-auto relative z-10 text-center mb-16">
           <h2 className="font-gothic text-6xl md:text-8xl text-gold-500 mb-2 tracking-wide opacity-90">
             Cu Faoil
           </h2>
           <p className="font-display text-2xl text-stone-400 uppercase tracking-[0.3em]">Великий пёс кельтов</p>
         </div>

         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="font-serif text-xl md:text-2xl leading-relaxed text-justify text-stone-300">
              <p className="mb-8">
                <DropCap letter="И" />рландские волкодавы — одна из самых древних пород Европы. Первые упоминания встречаются ещё в VI веке. Их называли <strong>Cu Faoil</strong> — «великий пёс». Эти собаки сопровождали воинов в походах, охраняли кланы и участвовали в ритуалах.
              </p>
              <p>
                Римляне восхищались их силой: историк Квинт Курций писал, что <em>«целый легион казался менее грозным, чем один ирландский пёс»</em>.
              </p>
            </div>
            <div className="relative w-full border border-stone-800 p-2 bg-stone-900/50">
               <img 
                 src="https://i.postimg.cc/sXp12mYZ/Copilot-20251018-154431.png" 
                 alt="Ancient Wolfhounds with Warriors" 
                 className="w-full h-auto object-cover"
               />
               <div className="absolute bottom-4 left-4 right-4 text-center">
                 <span className="text-xs font-serif italic text-gold-500/60 shadow-black drop-shadow-md">Воины древней Ирландии</span>
               </div>
            </div>
         </div>
      </div>

      {/* 2. Symbol of Power (Middle Ages) */}
      <div className="relative py-24 px-4 bg-stone-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative w-full border-4 border-double border-stone-800 p-1">
               <img 
                 src="https://i.postimg.cc/NM1L0D61/Copilot-20251018-155715.png" 
                 alt="Wolfhound with Shield and Book" 
                 className="w-full h-auto object-cover"
               />
            </div>
            <div className="order-1 md:order-2 font-serif text-xl md:text-2xl leading-relaxed text-justify">
               <h3 className="font-gothic text-5xl text-gold-500 mb-8 border-b border-gold-500/20 pb-4">Символ власти</h3>
               <p className="mb-6">
                 В Средние века волкодавы стали символом власти. Их дарили королям Франции, Швеции и даже Папе Римскому.
               </p>
               <p className="mb-6">
                 Их главная миссия — охота на волков, которые разоряли деревни и угрожали стадам. Благодаря силе и росту они легко справлялись с крупным зверем.
               </p>
               <blockquote className="border-l-2 border-gold-500 pl-4 italic text-stone-400 my-4 text-lg md:text-xl">
                 "Не случайно в старых законах Ирландии волкодав упоминался как собака, равная по ценности целому стаду овец."
               </blockquote>
            </div>
        </div>
      </div>

      {/* 3. When the Legend Almost Vanished */}
      <div className="relative py-24 px-4 border-t border-stone-800">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="font-serif text-xl md:text-2xl leading-relaxed text-justify">
               <h3 className="font-gothic text-4xl md:text-5xl text-stone-200 mb-8">
                 Когда легенда почти исчезла
               </h3>
               <p className="mb-6 text-stone-400">
                 К XVII веку, когда последних волков истребили, потребность в этих собаках исчезла. Постепенно волкодавы стали редкостью, их держала только знать как символ престижа.
               </p>
               <p className="text-stone-400">
                 В XVIII веке порода оказалась на грани исчезновения. Упоминания о волкодавах встречались лишь в письмах путешественников и старых хрониках. Казалось, что легенда будет утрачена навсегда.
               </p>
            </div>
            
            {/* Abstract Graphic Element: Celtic Knot with Time Orbits */}
             <div className="relative aspect-square flex flex-col items-center justify-center bg-stone-900/40 border border-stone-800/30 p-8 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] group overflow-hidden">
               <BrokenKnot />
            </div>
         </div>
      </div>

      {/* 4. Second Life (Captain Graham) */}
      <div className="relative py-24 px-4 bg-emerald-950/20">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative w-full border border-gold-900/30 p-4 bg-stone-900">
               <img 
                 src="https://i.postimg.cc/B6xtvpTH/Copilot-20251018-164636.png" 
                 alt="Captain Graham" 
                 className="w-full h-auto object-cover"
               />
                <div className="absolute bottom-2 right-2 font-display text-gold-500/40 text-sm">Вторая жизнь</div>
            </div>
            <div className="order-1 md:order-2 font-serif text-xl md:text-2xl leading-relaxed text-justify">
               <h3 className="font-gothic text-4xl text-gold-500 mb-6">Возрождение Ирландского Великана</h3>
               <p className="mb-6">
                 Капитан <strong>Джордж Аугустус Грэхэм</strong> посвятил жизнь восстановлению породы. Он собрал оставшихся волкодавов и скрестил их с шотландскими дирхаундами, догами и борзыми.
               </p>
               <p className="mb-6">
                 Его целью было сохранить не только внешний облик, но и дух ирландского пса — спокойного, преданного и величественного.
               </p>
               <div className="bg-emerald-900/20 p-6 border-l border-emerald-800">
                 <p className="text-emerald-500 italic text-lg md:text-xl">
                   "К концу XIX века порода вновь была признана. Ирландский волкодав стал символом нации: его изображение украшает гербы, памятники и даже почтовые марки Ирландии."
                 </p>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default HistorySection;