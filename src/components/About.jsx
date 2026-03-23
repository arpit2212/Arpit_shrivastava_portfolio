import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Linkedin, FileText, Smartphone } from 'lucide-react';
import profileImage from '../assets/Arpit_Shrivastava.jpg';

const About = () => {
  // Motion values for mouse position or gyroscope
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for lerping effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transforms for 3D effect (25 degrees max tilt)
  const rotateX = useTransform(smoothY, [0, 1], [25, -25]);
  const rotateY = useTransform(smoothX, [0, 1], [-25, 25]);
  
  // Parallax offsets for layers (increased range for 25deg tilt)
  const bgTranslateX = useTransform(smoothX, [0, 1], [30, -30]);
  const bgTranslateY = useTransform(smoothY, [0, 1], [30, -30]);
  
  const fgTranslateX = useTransform(smoothX, [0, 1], [-20, 20]);
  const fgTranslateY = useTransform(smoothY, [0, 1], [-20, 20]);

  const [isMobile, setIsMobile] = useState(false);
  const [gyroPermission, setGyroPermission] = useState('unknown');

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();

    const handleMouseMove = (e) => {
      if (isMobile && gyroPermission === 'granted') return; // Prefer gyro on mobile if granted
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleOrientation = (e) => {
      if (!e.beta || !e.gamma) return;

      // beta: -180 to 180 (front/back tilt), gamma: -90 to 90 (left/right tilt)
      // Normalize to 0-1 range (subtle tilt range +/- 30 degrees)
      const x = (e.gamma + 30) / 60;
      const y = (e.beta - 15) / 60; // Offset beta for natural viewing angle
      
      mouseX.set(Math.max(0, Math.min(1, x)));
      mouseY.set(Math.max(0, Math.min(1, y)));
    };

    window.addEventListener('mousemove', handleMouseMove);
    if (isMobile && gyroPermission === 'granted') {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [mouseX, mouseY, isMobile, gyroPermission]);

  const requestPermission = async () => {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        setGyroPermission(permission);
      } catch (error) {
        console.error('Gyroscope permission error:', error);
      }
    } else {
      // Browser doesn't support/require explicit permission
      setGyroPermission('granted');
    }
  };

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

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all border border-white/10 backdrop-blur-sm"
              >
                <FileText size={20} />
                <span>Resume</span>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/arpit-shrivastava"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-full font-semibold transition-all border border-blue-500/20 backdrop-blur-sm"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative flex flex-col items-center justify-center perspective-[1000px] space-y-6"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full aspect-square rounded-2xl shadow-2xl shadow-black/25 overflow-hidden border border-white/10"
            >
              {/* Background Layer (Parallax: Slower) */}
              <motion.div
                style={{
                  translateX: bgTranslateX,
                  translateY: bgTranslateY,
                  scale: 1.2, // Increased scale for 25deg tilt
                  translateZ: "-40px",
                }}
                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center pointer-events-none"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                {/* Subtle decorative background element */}
                <div className="w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full animate-pulse"></div>
              </motion.div>

              {/* Main Subject Layer (Middle) */}
              <motion.div
                style={{
                  translateZ: "0px",
                }}
                className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
              >
                <img 
                  src={profileImage} 
                  alt="Arpit Shrivastava" 
                  className="w-full h-full object-cover rounded-xl opacity-90 transition-opacity duration-500 shadow-xl"
                />
              </motion.div>

              {/* Foreground / Glass Layer (Parallax: Faster) */}
              <motion.div
                style={{
                  translateX: fgTranslateX,
                  translateY: fgTranslateY,
                  translateZ: "50px",
                }}
                className="absolute inset-0 pointer-events-none z-10"
              >
                {/* Glassy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
              </motion.div>
            </motion.div>
            
            {/* Mobile Gyro Permission Button */}
            <AnimatePresence>
              {isMobile && gyroPermission !== 'granted' && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onClick={requestPermission}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 backdrop-blur-sm transition-all"
                >
                  <Smartphone size={16} />
                  <span>Enable 3D Motion</span>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Subtle atmospheric glow effect outside the container */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
