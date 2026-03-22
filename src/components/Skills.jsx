import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Layers } from 'lucide-react';

const SkillCard = ({ title, icon, skills, variants }) => {
  const chipHoverStyle = { 
    backgroundColor: "rgba(255, 255, 255, 0.15)", 
    color: "#ffffff", 
    borderColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="group relative backdrop-blur-lg bg-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 shadow-2xl shadow-black/25 transition-all duration-500 overflow-hidden"
    >
      {/* Nebula/Glow atmospheric effects */}
      <div className="absolute -inset-px bg-gradient-to-br from-gray-700/10 via-gray-600/5 to-gray-800/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Apple-style Glass Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
          <div className="p-2 sm:p-2.5 rounded-xl transition-all duration-500 group-hover:scale-110 bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20 group-hover:text-white">
            {React.cloneElement(icon, { size: 18, className: "sm:w-5 sm:h-5" })}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                ...chipHoverStyle,
                backdropFilter: "blur(15px)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-medium border border-white/5 bg-white/5 text-gray-400 transition-all duration-300 cursor-default relative overflow-hidden"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 />,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "HTML/CSS", "MATLAB", "SQL", "Bash", "Go"],
    },
    {
      title: "Software Development",
      icon: <Layers />,
      skills: ["NodeJs", "Express", "React", "NextJs", "SpringBoot", "FastAPI", "Flask", "Django", "MongoDB", "SQL", "Redis", "Docker", "AWS", "Azure", "GraphQL", "WebSockets", "REST APIs", "Prisma"],
    },
    {
      title: "AI/ML & Data Science",
      icon: <Cpu />,
      skills: ["TensorFlow", "MLFlow", "ZenML", "Numpy", "Pandas", "Exploratory Data Analysis (EDA)", "Model Development", "MLOps", "Scikit-learn", "NLP", "LLM Integration"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden">
      {/* Nebula atmospheric effects */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gray-800/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gray-700/15 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white">
            Technical <span className="text-gray-400">Skills</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-3xl mx-auto font-medium px-4">
            A comprehensive overview of my technical expertise spanning multiple domains including AI/ML, software development, and various programming languages.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Left Column: Languages & AI/ML */}
          <div className="space-y-6 sm:space-y-8">
            <SkillCard {...skillCategories[0]} variants={cardVariants} />
            <SkillCard {...skillCategories[2]} variants={cardVariants} />
          </div>

          {/* Right Column: Software Development */}
          <div>
            <SkillCard {...skillCategories[1]} variants={cardVariants} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

