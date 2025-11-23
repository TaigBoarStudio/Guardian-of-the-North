import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HistorySection from './components/HistorySection';
import BreedInfo from './components/BreedInfo';
import DogGallery from './components/DogGallery';
import PuppySection from './components/PuppySection';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const scrollToSection = (sectionId: Section) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <section id={Section.HOME}>
          <Hero scrollToSection={scrollToSection} />
        </section>

        <section id={Section.HISTORY}>
          <HistorySection />
        </section>
        
        <section id={Section.ABOUT}>
          <BreedInfo />
        </section>
        
        <section id={Section.DOGS}>
          <DogGallery />
        </section>
        
        <section id={Section.PUPPIES}>
          <PuppySection />
        </section>
      </main>
    </div>
  );
};

export default App;