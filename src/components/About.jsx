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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8 bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-2xl">
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
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl">20+</h4>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative aspect-square rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-md border border-white/5 group shadow-2xl flex items-center justify-center"
          >
            {/* Creative element with personal brand */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4c9aff]/10 to-purple-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
               <span className="text-white/20 text-9xl font-bold tracking-tighter">AS</span>
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,154,255,0.05)_0%,transparent_70%)]"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
