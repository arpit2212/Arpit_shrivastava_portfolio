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
        {/* Hero Section with its own Starfield Background */}
        <section className="relative h-screen overflow-hidden">
          <StarfieldBackground 
            count={500}
            speed={0.4}
            className="z-0"
          />
          <Hero />
        </section>

        {/* Other Sections with Shared Animated Gradient Background */}
        <section className="relative">
          <AnimatedBackground />
          <div className="relative z-10">
            <About />
            <Skills />
            <Projects />
            
            {/* Additional sections like Blogs, Contact can go here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
