import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Layers } from 'lucide-react';

const SkillCard = ({ title, icon, skills, chipStyle, accentColor, variants }) => {
  const glowColor = accentColor === 'purple' ? 'from-purple-500/20 to-pink-500/20' : 'from-blue-500/20 to-cyan-500/20';
  const borderColor = accentColor === 'purple' ? 'group-hover:border-purple-500/50' : 'group-hover:border-blue-500/50';

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className={`group relative bg-[#11111d] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/5 shadow-2xl transition-all duration-500 overflow-hidden ${borderColor}`}
    >
      {/* Subtle Glow Effect on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
          <div className={`p-2 sm:p-2.5 rounded-xl transition-all duration-500 group-hover:scale-110 ${accentColor === 'purple' ? 'bg-purple-500/10 text-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' : 'bg-blue-500/10 text-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]'}`}>
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
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                transition: { duration: 0.2 }
              }}
              className={`px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-medium border transition-all duration-300 cursor-default relative overflow-hidden group/chip ${chipStyle}`}
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
      accentColor: "blue",
      chipStyle: "bg-[#2a2a2e]/50 text-gray-300 border-white/5 hover:border-blue-500/30 hover:text-blue-400",
    },
    {
      title: "Software Development",
      icon: <Layers />,
      skills: ["NodeJs", "Express", "React", "NextJs", "SpringBoot", "FastAPI", "Flask", "Django", "MongoDB", "SQL", "Redis", "Docker", "AWS", "Azure", "GraphQL", "WebSockets", "REST APIs", "Prisma"],
      accentColor: "purple",
      chipStyle: "bg-purple-500/10 text-purple-400 border-purple-500/10 hover:bg-purple-500/20 hover:border-purple-500/30",
    },
    {
      title: "AI/ML & Data Science",
      icon: <Cpu />,
      skills: ["TensorFlow", "MLFlow", "ZenML", "Numpy", "Pandas", "Exploratory Data Analysis (EDA)", "Model Development", "MLOps", "Scikit-learn", "NLP", "LLM Integration"],
      accentColor: "blue",
      chipStyle: "bg-blue-500/10 text-blue-400 border-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/30",
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
    <section id="skills" className="py-16 sm:py-24 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-400 max-w-3xl mx-auto font-medium px-4">
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

