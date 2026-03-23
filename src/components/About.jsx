import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FileText, MapPin, GraduationCap, Calendar, Trophy, Eye, Download } from 'lucide-react';
import profileImage from '../assets/Arpit_Shrivastava.jpg';

const About = () => {
  // Motion values for mouse position or gyroscope
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for lerping effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transforms for 3D effect (12 degrees max tilt) - Only used on mobile
  const rotateX = useTransform(smoothY, [0, 1], [12, -12]);
  const rotateY = useTransform(smoothX, [0, 1], [-12, 12]);
  
  // Parallax offsets for layers (adjusted for 12deg tilt)
  const bgTranslateX = useTransform(smoothX, [0, 1], [20, -20]);
  const bgTranslateY = useTransform(smoothY, [0, 1], [20, -20]);
  
  const fgTranslateX = useTransform(smoothX, [0, 1], [-15, 15]);
  const fgTranslateY = useTransform(smoothY, [0, 1], [-15, 15]);

  // Desktop hover animation values
  const desktopHoverScale = useMotionValue(1);
  const desktopHoverSpring = useSpring(desktopHoverScale, { damping: 20, stiffness: 300 });

  const [isMobile, setIsMobile] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      // Always track mouse for desktop hover effects even if 3D is mobile-only
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleOrientation = (e) => {
      if (!isMobile || !e.beta || !e.gamma) return;

      const x = (e.gamma + 30) / 60;
      const y = (e.beta - 15) / 60;
      
      mouseX.set(Math.max(0, Math.min(1, x)));
      mouseY.set(Math.max(0, Math.min(1, y)));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [mouseX, mouseY, isMobile]);

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
    <section id="about" className="py-16 md:py-24 relative bg-transparent overflow-hidden">
      {/* Nebula atmospheric effects - subtly blended */}
      <div className="absolute top-1/4 -left-24 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          <div 
            className="perspective-[1500px] w-full order-2 md:order-1 relative group"
            onMouseEnter={() => !isMobile && setIsFlipped(true)}
            onMouseLeave={() => !isMobile && setIsFlipped(false)}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (isMobile) {
                  if (info.offset.x > 50) setIsFlipped(false);
                  else if (info.offset.x < -50) setIsFlipped(true);
                }
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full min-h-[400px] md:min-h-[450px] cursor-pointer"
              onClick={() => isMobile && setIsFlipped(!isFlipped)}
            >
              {/* Front Side: About Me Content */}
              <div 
                style={{ backfaceVisibility: "hidden" }}
                className="absolute inset-0 w-full h-full space-y-4 md:space-y-8 backdrop-blur-lg bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl shadow-black/25 flex flex-col justify-center"
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center md:text-left">
                  About Me
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed text-justify">
                    I am a dedicated Full Stack Developer with a passion for creating high-performance web applications. My journey in tech is driven by a curiosity to solve complex problems and a commitment to delivering exceptional user experiences.
                  </p>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed text-justify">
                    With expertise in modern technologies like React, Node.js, and cloud architecture, I bridge the gap between robust backend systems and intuitive frontend interfaces.
                  </p>
                </div>
              </div>

              {/* Back Side: Education & Resume */}
              <div 
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
                className="absolute inset-0 w-full h-full backdrop-blur-lg bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl shadow-black/25 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <GraduationCap className="text-white/80" />
                    Education
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-white">
                        Bachelor of Technology in CSE
                      </h4>
                      <p className="text-gray-400 font-medium">SRM Institute of Science and Technology</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-sm md:text-base text-gray-400">
                      <div className="flex items-center gap-2">
                        <Trophy size={16} className="text-yellow-500/80" />
                        <span>CGPA: <span className="text-white font-bold">9.1</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-400" />
                        <span>Sep 2022 – May 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400" />
                        <span>Chennai, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white text-center md:text-left">Resume / CV</h3>
                    <p className="text-sm text-gray-500 text-center md:text-left">
                      Download my professional resume
                    </p>
                  </div>
                  <div className="flex items-stretch gap-3">
                    <motion.a
                      href="/resume.pdf"
                      download
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white text-black rounded-full font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
                    >
                      <Download size={18} />
                      <span>Download</span>
                    </motion.a>

                    <motion.a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center px-4 bg-white/10 text-white rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm transition-all"
                      title="Preview Resume"
                    >
                      <Eye size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile-only Dot Indicators */}
            {isMobile && (
              <div className="flex justify-center gap-3 mt-6">
                <button 
                  onClick={() => setIsFlipped(false)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${!isFlipped ? 'bg-white scale-110' : 'bg-white/20'}`}
                  aria-label="View About Me"
                />
                <button 
                  onClick={() => setIsFlipped(true)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${isFlipped ? 'bg-white scale-110' : 'bg-white/20'}`}
                  aria-label="View Education"
                />
              </div>
            )}
          </div>

          <motion.div 
            variants={itemVariants}
            className="relative flex flex-col items-center justify-center perspective-[1000px] space-y-6 order-1 md:order-2 max-w-[300px] md:max-w-none mx-auto w-full"
          >
            <motion.div
              style={isMobile ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              } : {
                scale: desktopHoverSpring,
              }}
              onMouseEnter={() => !isMobile && desktopHoverScale.set(1.05)}
              onMouseLeave={() => !isMobile && desktopHoverScale.set(1)}
              className="relative w-full aspect-square rounded-2xl shadow-2xl shadow-black/25 overflow-hidden border border-white/10 group"
            >
              {/* Background Layer (Parallax: Slower - Mobile Only) */}
              <motion.div
                style={isMobile ? {
                  translateX: bgTranslateX,
                  translateY: bgTranslateY,
                  scale: 1.2,
                  translateZ: "-40px",
                } : {}}
                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center pointer-events-none"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                {/* Subtle decorative background element */}
                <div className="w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full animate-pulse"></div>
              </motion.div>

              {/* Main Subject Layer (Middle) */}
              <motion.div
                style={isMobile ? {
                  translateZ: "0px",
                } : {}}
                className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
              >
                <img 
                  src={profileImage} 
                  alt="Arpit Shrivastava" 
                  className="w-full h-full object-cover rounded-xl opacity-90 transition-all duration-500 shadow-xl group-hover:opacity-100 group-hover:scale-110 md:group-hover:scale-100"
                />
              </motion.div>

              {/* Foreground / Glass Layer (Parallax: Faster - Mobile Only) */}
              <motion.div
                style={isMobile ? {
                  translateX: fgTranslateX,
                  translateY: fgTranslateY,
                  translateZ: "50px",
                } : {}}
                className="absolute inset-0 pointer-events-none z-10"
              >
                {/* Glassy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
                <div className="absolute inset-0 border border-white/10 rounded-2xl transition-colors duration-500 group-hover:border-white/20"></div>
              </motion.div>
            </motion.div>
            


            {/* Subtle atmospheric glow effect outside the container */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
