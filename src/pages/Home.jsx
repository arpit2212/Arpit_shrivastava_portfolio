import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { StarfieldBackground } from '../components/ui/starfield';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500/30 selection:text-blue-200 relative">
      <Navbar />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <StarfieldBackground 
            count={500}
            speed={0.4}
            className="z-0"
          />
          {/* Seamless transition gradient to the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          <Hero />
        </section>

        {/* Other Sections with Shared Animated Gradient Background */}
        <section className="relative">
          {/* Seamless transition gradient from the hero section */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          
          <AnimatedBackground />
          <div className="relative z-10">
            <About />
            <Skills />
            <Projects />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
