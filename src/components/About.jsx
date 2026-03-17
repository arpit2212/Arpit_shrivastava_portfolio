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
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
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
                <h4 className="text-white font-bold text-2xl">5+</h4>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl">50+</h4>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative aspect-square rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5"
          >
            {/* Placeholder for an image or a creative element */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
               <span className="text-white/20 text-9xl font-bold">AS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
