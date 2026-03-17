import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { StarfieldBackground } from '../components/ui/starfield';

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500/30 selection:text-blue-200 relative">
      {/* Background Effect */}
      <StarfieldBackground 
        count={500}
        speed={0.4}
        className="z-0"
      />
      
      <div className="relative z-10">
        <Navbar />
        <main className="space-y-0">
          <Hero />
          <About />
          <Projects />
          <Skills />
          {/* Additional sections like Blogs, Contact can go here */}
        </main>
      </div>
    </div>
  );
};

export default Home;
