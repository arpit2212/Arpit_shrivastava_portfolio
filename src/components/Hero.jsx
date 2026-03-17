import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail, MessageSquare } from 'lucide-react';

const Hero = () => {
  const [tagline, setTagline] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Ui Ux Designer",
    "Intern @ Deccan AI",
    "Vice President @ Alexa Club",
    "Freelance Developer"
  ];

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(roleTimer);
  }, []);

  const taglines = [
    "Building scalable digital solutions.",
    "Transforming complex problems into elegant code.",
    "Crafting seamless user experiences with modern tech.",
    "Architecting the future of the web.",
    "Turning innovative ideas into functional reality.",
    "Passionate about clean code and efficient design.",
    "Mastering full-stack development with React and Node.",
    "Designing high-performance, responsive web applications."
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = taglines[index];
      
      if (isDeleting) {
        setTagline(currentFullText.substring(0, tagline.length - 1));
        setSpeed(40);
      } else {
        setTagline(currentFullText.substring(0, tagline.length + 1));
        setSpeed(80);
      }

      if (!isDeleting && tagline === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && tagline === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % taglines.length);
        setSpeed(300);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [tagline, isDeleting, index, speed]);

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/arpit-shrivastava", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/arpit-shrivastava", label: "GitHub" },
    { icon: <Mail size={20} />, href: "mailto:arpit.shrivastava2212@gmail.com", label: "Gmail" },
    { icon: <MessageSquare size={20} />, href: "https://wa.me/your-number", label: "WhatsApp" },
    { icon: <FileText size={20} />, href: "/resume.pdf", label: "Resume" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center px-4 bg-transparent pt-20 sm:pt-0">
      {/* Background Gradients removed in favor of StarfieldBackground in Home.jsx */}
      <div className="absolute inset-0 z-0">
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto relative z-10 space-y-6 sm:space-y-10"
      >
        <div className="space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-white/10 bg-white/5 text-blue-400 text-[10px] sm:text-sm font-semibold tracking-widest uppercase backdrop-blur-sm shadow-xl overflow-hidden h-[30px] sm:h-[38px]"
          >
            <div className="relative h-full flex flex-col items-center justify-center">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="whitespace-nowrap"
              >
                {roles[roleIndex]}
              </motion.span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter leading-none text-white drop-shadow-2xl flex flex-wrap justify-center gap-x-[0.3em]"
          >
            <div className="flex flex-wrap justify-center">
              {"Arpit".split("").map((char, i) => (
                <motion.span
                  key={`arpit-${i}`}
                  whileHover={{ color: "#60a5fa" }}
                  className="cursor-default transition-colors duration-200"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center">
              {"Shrivastava".split("").map((char, i) => (
                <motion.span
                  key={`shrivastava-${i}`}
                  whileHover={{ color: "#60a5fa" }}
                  className="cursor-default transition-colors duration-200"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>
          <div className="h-10 sm:h-12 flex items-center justify-center px-4">
            <p className="text-sm sm:text-xl md:text-3xl text-gray-400 font-medium leading-relaxed font-mono min-h-[1.5em] max-w-sm sm:max-w-none">
              {tagline}
              <span className="inline-block w-[2px] h-[1.1em] bg-blue-500 ml-1 animate-blink align-middle"></span>
            </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center gap-6 sm:gap-8 pt-2 sm:pt-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ 
                y: -2,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#60a5fa"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-black rounded-full font-bold text-base sm:text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] backdrop-blur-sm border border-transparent hover:border-white/10 w-full sm:w-auto"
            >
              Explore My Work
            </motion.button>
            
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0 sm:hover:gap-3 px-3 py-3 sm:px-4 sm:py-4 rounded-full border border-white/10 text-white backdrop-blur-sm transition-all duration-500 ease-in-out group overflow-hidden whitespace-nowrap bg-white/5 sm:hover:bg-white/10"
                title={link.label}
              >
                <span className="flex-shrink-0 transition-transform duration-500">
                  {link.icon}
                </span>
                <span className="max-w-0 opacity-0 sm:group-hover:max-w-[150px] sm:group-hover:opacity-100 transition-all duration-500 ease-in-out text-sm font-semibold tracking-wide uppercase">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx="true">{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
