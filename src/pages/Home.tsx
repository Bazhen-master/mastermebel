import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Materials from '../components/sections/Materials';
import Gallery from '../components/sections/Gallery';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import CTA from '../components/sections/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Materials />
      <Gallery />
      <About />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;