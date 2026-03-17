import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      description: "A real-time dashboard for managing financial transactions and data analytics.",
      tags: ["React", "Node.js", "Chart.js"],
      color: "from-blue-600/20 to-cyan-600/20",
    },
    {
      title: "E-commerce Platform",
      description: "A feature-rich platform with seamless checkout and inventory management.",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      color: "from-purple-600/20 to-pink-600/20",
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat interface powered by OpenAI's GPT models.",
      tags: ["Python", "Socket.io", "React"],
      color: "from-emerald-600/20 to-teal-600/20",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills and experience in building modern web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10 space-y-6">
                <div className="h-40 rounded-xl bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                   <span className="text-white/10 text-4xl font-bold uppercase tracking-widest">{project.title.split(' ')[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-medium border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
