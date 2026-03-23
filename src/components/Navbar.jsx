import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // scrolling down
          setIsVisible(false);
        } else {
          // scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const navItems = [
    { icon: <Home size={21} />, label: 'Home', href: '#' },
    { icon: <User size={21} />, label: 'About Me', href: '#about' },
    { icon: <Trophy size={21} />, label: 'Technical Skills', href: '#skills' },
    { icon: <Briefcase size={21} />, label: 'Experience', href: '#experience' },
    { icon: <Code size={21} />, label: 'Projects', href: '#projects' },
    { icon: <Mail size={21} />, label: 'Contact Me', href: '#contact' },
  ];

  return (
    <motion.div
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -75,
        x: '-50%', 
        opacity: isVisible ? 1 : 0.8 // Increase opacity when hidden for better visibility
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-7 left-1/2 z-50 w-auto"
    >
      <nav className={`flex items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-3.5 rounded-[40px] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] overflow-hidden transition-colors duration-500 ${isVisible ? 'bg-white/[0.03]' : 'bg-white/10'}`}>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex items-center gap-0 text-gray-400 hover:text-white transition-all duration-500 ease-in-out px-3 py-2 rounded-full hover:bg-white/10"
            aria-label={item.label}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center flex-shrink-0"
            >
              {item.icon}
            </motion.div>
            
            <motion.span
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ 
                width: hoveredIndex === index ? "auto" : 0,
                opacity: hoveredIndex === index ? 1 : 0,
                marginLeft: hoveredIndex === index ? 10 : 0
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden whitespace-nowrap text-sm font-bold tracking-wide uppercase"
            >
              {item.label}
            </motion.span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
};

export default Navbar;
