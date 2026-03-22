import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, Cpu, Layers } from 'lucide-react';

const SkillCard = ({ title, icon, skills, chipStyle, accentColor, variants }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX);
  const mouseYSpring = useSpring(mouseY);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"]), {
    stiffness: 100,
    damping: 20
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]), {
    stiffness: 100,
    damping: 20
  });

  function handleMouseMove(event) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const glowColor = accentColor === 'purple' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(59, 130, 246, 0.15)';
  const borderColor = accentColor === 'purple' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(59, 130, 246, 0.3)';

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-[#16161a] rounded-3xl p-8 border border-white/5 shadow-2xl transition-all duration-500 overflow-hidden h-full"
    >
      {/* Interactive Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${glowColor}, transparent 40%)`
          ),
        }}
      />
      
      {/* Spotlight Border Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, ${borderColor}, transparent 40%)`
          ),
          WebkitMaskImage: `radial-gradient(400px circle at 0px 0px, transparent 100%, black 100%)`, // Just a placeholder for the concept
          maskImage: `radial-gradient(400px circle at 0px 0px, transparent 100%, black 100%)`,
          border: `1px solid ${borderColor}`
        }}
      />

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className={`p-2 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:${accentColor === 'purple' ? '-rotate-6 shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 'rotate-6 shadow-[0_0_20px_rgba(59,130,246,0.4)]'} ${accentColor === 'purple' ? 'bg-purple-500/10' : 'bg-blue-500/10'}`}>
            {React.cloneElement(icon, { 
              className: `w-6 h-6 ${accentColor === 'purple' ? 'text-purple-400' : 'text-blue-400'}` 
            })}
          </div>
          <h3 className={`text-xl font-bold text-white transition-colors duration-500 group-hover:${accentColor === 'purple' ? 'text-purple-400' : 'text-blue-400'}`}>
            {title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                delay: i * 0.03 
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-default relative overflow-hidden group/chip ${skillStyle(accentColor, chipStyle)}`}
            >
              <span className="relative z-10">{skill}</span>
              <motion.div 
                className={`absolute inset-0 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300 ${accentColor === 'purple' ? 'bg-purple-500/10' : 'bg-blue-500/10'}`}
              />
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const skillStyle = (accent, defaultStyle) => {
  return defaultStyle;
};

const Skills = () => {

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 />,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "HTML/CSS", "MATLAB", "SQL", "Bash", "Go"],
      accentColor: "blue",
      chipStyle: "bg-[#2a2a2e] text-gray-300 border-white/5 hover:border-blue-500/50 hover:text-blue-400",
    },
    {
      title: "Software Development",
      icon: <Layers />,
      skills: ["NodeJs", "Express", "React", "NextJs", "SpringBoot", "FastAPI", "Flask", "Django", "MongoDB", "SQL", "Redis", "Docker", "AWS", "Azure", "GraphQL", "WebSockets", "REST APIs", "Prisma"],
      accentColor: "purple",
      chipStyle: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/50",
    },
    {
      title: "AI/ML & Data Science",
      icon: <Cpu />,
      skills: ["TensorFlow", "MLFlow", "ZenML", "Numpy", "Pandas", "Exploratory Data Analysis (EDA)", "Model Development", "MLOps", "Scikit-learn", "NLP", "LLM Integration"],
      accentColor: "blue",
      chipStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full pointer-events-none"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto font-medium">
            A comprehensive overview of my technical expertise spanning multiple domains including AI/ML, software development, and various programming languages.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left Column: Languages & AI/ML */}
          <div className="space-y-8">
            <SkillCard {...skillCategories[0]} variants={cardVariants} />
            <SkillCard {...skillCategories[2]} variants={cardVariants} />
          </div>

          {/* Right Column: Software Development */}
          <div className="h-full">
            <SkillCard {...skillCategories[1]} variants={cardVariants} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

