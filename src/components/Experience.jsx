import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

// Import company logos
import deccanLogo from '../assets/company_logo/ai_deccan_logo.jpg';
import alexaLogo from '../assets/company_logo/alexa-developer-srm.jpg';
import genyLogo from '../assets/company_logo/geny-events.jpg';
import munsocLogo from '../assets/company_logo/munsoc.jpg';
import nayepankhLogo from '../assets/company_logo/nayepankh-logo.jpg';
import pixadoraLogo from '../assets/company_logo/pixadora-logo.jpg';
import sentientLogo from '../assets/company_logo/sentient_scripts_logo.jpg';
import sheCanLogo from '../assets/company_logo/she-can-foundation.jpg';

const companyLogos = {
  "Deccan AI": deccanLogo,
  "Alexa Developers SRM": alexaLogo,
  "Gen-Y Events": genyLogo,
  "SRM MUN Society": munsocLogo,
  "NayePankh Foundation": nayepankhLogo,
  "PixAdora": pixadoraLogo,
  "Sentient Scripts": sentientLogo,
  "She Can Foundation": sheCanLogo
};

const experiences = [
  {
    role: "Operation Associate AI",
    company: "Deccan AI",
    duration: "Dec 2025 – Present",
    accent: "#2F80ED", // modern blue tone
    description: [
      "Evaluated and improved Large Language Model (LLM) outputs using SFT and RLHF workflows.",
      "Ensured accuracy, safety, and policy compliance through rigorous quality checks.",
      "Created high-quality annotated datasets to support model training.",
      "Provided structured human feedback to enhance model reasoning and reliability.",
      "Collaborated with teams to improve annotation standards and workflows."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Sentient Scripts",
    duration: "Aug 2024 – Feb 2025",
    accent: "#ffffff", // light grey minimal tone
    description: [
      "Built an interactive cohort management dashboard to streamline workflows.",
      "Improved usability and performance through optimized UI and data handling.",
      "Developed responsive interfaces for better cross-device experience.",
      "Collaborated with teams to deliver scalable frontend solutions."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "PixAdora",
    duration: "Jan 2024 – Jan 2025",
    accent: "#22CAC6", // teal from logo
    description: [
      "Delivered 25+ full-stack applications using React, Node.js, and REST APIs.",
      "Improved performance, scalability, and user experience across projects.",
      "Designed intuitive UI/UX and integrated backend services.",
      "Worked on real-world applications involving API integration and optimization."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "She Can Foundation",
    duration: "Oct 2023 – Apr 2024",
    accent: "#FF7A00", // orange from logo
    description: [
      "Engineered a scalable web dashboard using React and Node.js.",
      "Increased traffic by 25% through SEO optimization.",
      "Integrated Razorpay, boosting conversions by 50%.",
      "Enhanced UX with responsive design and performance improvements."
    ]
  },
  {
    role: "Vice President",
    company: "Alexa Developers SRM",
    duration: "Sep 2022 – Present",
    accent: "#00BCD4", // cyan / blue ring color
    description: [
      "Led execution of 270+ student-led events.",
      "Increased participation by 20% year-over-year.",
      "Mentored team members and managed operations.",
      "Organized hackathons, workshops, and speaker sessions.",
      "Built partnerships with tech communities."
    ]
  },
  {
    role: "Hospitality Head",
    company: "SRM MUN Society",
    duration: "Aug 2023 – Aug 2024",
    accent: "#e5e7eb", // black/grey minimal theme
    description: [
      "Led hospitality operations for large-scale MUN events.",
      "Managed logistics, guest coordination, and event execution.",
      "Collaborated with teams to improve operational workflows.",
      "Strengthened organizational and problem-solving skills."
    ]
  },
  {
    role: "Emcee Head",
    company: "Gen-Y Events",
    duration: "Jan 2024 – Jan 2025",
    accent: "#FF4C4C", // red tone from logo
    description: [
      "Led event hosting and managed emcee teams.",
      "Delivered engaging presentations for large audiences.",
      "Improved audience engagement through effective communication.",
      "Gained experience in event management and public speaking."
    ]
  },
  {
    role: "Head of Human Resources",
    company: "NayePankh Foundation",
    duration: "Jun 2023 – Sep 2023",
    accent: "#4CAF50", // green from wings
    description: [
      "Managed recruitment and onboarding of interns.",
      "Maintained records and tracked team performance.",
      "Led team coordination and improved workflow efficiency.",
      "Developed leadership and organizational skills."
    ]
  }
];

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className="relative mb-12 last:mb-0 group pl-12 md:pl-16"
    >
      {/* Timeline Node (Left) */}
      <div className="absolute left-0 top-6 items-center justify-center -translate-x-1/2 z-20">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.5 }}
          className="w-4 h-4 rounded-full border-2 transition-all duration-500"
          style={{ 
            backgroundColor: isInView ? experience.accent : 'transparent',
            borderColor: experience.accent,
            boxShadow: isInView ? `0 0 15px ${experience.accent}` : 'none'
          }}
        />
        {/* Pulse Effect */}
        {isInView && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: experience.accent }}
          />
        )}
      </div>

      {/* Experience Card */}
      <div className="flex flex-col items-start w-full">
        <div 
          className="w-full backdrop-blur-xl bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl transition-all duration-500 hover:bg-white/10 relative overflow-hidden group/card"
          style={{ 
            borderLeftWidth: '4px',
            borderLeftColor: experience.accent,
            boxShadow: isInView ? `0 10px 30px -10px ${experience.accent}40` : 'none'
          }}
        >
          {/* Subtle Background Glow */}
          <div 
            className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] transition-all duration-500 group-hover/card:opacity-20 group-hover/card:scale-110" 
            style={{ 
              backgroundColor: experience.accent,
              opacity: isInView ? 0.12 : 0.03
            }} 
          />
          
          <div className="relative z-10">
            <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
              <div className="flex-1 min-w-[200px]">
                <h3 
                  className="text-lg sm:text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover/card:brightness-110"
                  style={{ color: isInView ? experience.accent : '#fff' }}
                >
                  {experience.role}
                </h3>
                <div className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                  {companyLogos[experience.company] ? (
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 p-1 flex items-center justify-center border border-white/10 group-hover/card:border-blue-500/30 transition-all duration-500 group-hover/card:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      <img 
                        src={companyLogos[experience.company]} 
                        alt={experience.company}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                  ) : (
                    <Building2 size={14} style={{ color: experience.accent, opacity: 0.8 }} />
                  )}
                  <span className="group-hover/card:text-gray-200 transition-colors">{experience.company}</span>
                </div>
              </div>
              <div 
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border text-xs font-medium whitespace-nowrap transition-all duration-300 group-hover/card:bg-white/10"
                style={{ borderColor: `${experience.accent}40`, color: experience.accent, boxShadow: `0 0 10px ${experience.accent}20` }}
              >
                <Calendar size={12} />
                {experience.duration}
              </div>
            </div>
            
            <ul className="space-y-2">
              {experience.description.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed group/item">
                  <span 
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover/card:scale-125" 
                    style={{ backgroundColor: experience.accent, opacity: 0.7, boxShadow: `0 0 8px ${experience.accent}` }}
                  />
                  <span className="group-hover/card:text-gray-100 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Smooth spring for the line filling - slowed down
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden" ref={containerRef}>
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-3xl mx-auto font-medium px-4">
            A visual timeline of my professional growth, highlighting my technical journey and leadership milestones.
          </p>
        </motion.div>

        <div className="relative ml-4 md:ml-0">
          {/* Vertical Timeline Line (Left Side) */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10">
            <motion.div 
              className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-600 origin-top shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              style={{ scaleY }}
            />
          </div>

          {/* Experience List */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
