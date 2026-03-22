import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 relative bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden">
      {/* Nebula atmospheric effects */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gray-800/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gray-700/15 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8 backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl shadow-black/25">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I am a dedicated Full Stack Developer with a passion for creating high-performance web applications. My journey in tech is driven by a curiosity to solve complex problems and a commitment to delivering exceptional user experiences.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              With expertise in modern technologies like React, Node.js, and cloud architecture, I bridge the gap between robust backend systems and intuitive frontend interfaces.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-white font-bold text-2xl">2+</h4>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl">20+</h4>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative aspect-square rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 group shadow-2xl shadow-black/25 flex items-center justify-center"
          >
            {/* Creative element with personal brand */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-gray-600/5 to-gray-800/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
               <span className="text-white/20 text-9xl font-bold tracking-tighter">AS</span>
            </div>
            {/* Subtle atmospheric glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
