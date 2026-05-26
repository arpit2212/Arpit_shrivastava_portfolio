import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send, ExternalLink, FileText } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "arpit.shrivastava2212@gmail.com",
      href: "mailto:arpit.shrivastava2212@gmail.com",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9111456393",
      href: "tel:+919111456393",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Arpit Shrivastava",
      href: "https://www.linkedin.com/in/arpit-shrivastava-1278as/",
      color: "text-sky-400",
      bgColor: "bg-sky-500/10",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "arpit2212",
      href: "https://github.com/arpit2212",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-3xl mx-auto font-medium px-4">
            I'm always open to new opportunities, collaborations, or just a friendly chat. 
            Feel free to reach out through any of these platforms!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-blue-500/30 transition-all duration-500 flex flex-col items-center text-center space-y-4 backdrop-blur-xl relative overflow-hidden"
              >
                <div className={`p-4 rounded-2xl ${info.bgColor} ${info.color} group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                  {info.icon}
                </div>
                <div className="space-y-1 relative z-10">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{info.label}</p>
                  <p className="text-white font-medium break-all">{info.value}</p>
                </div>
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ExternalLink className={`w-4 h-4 ${info.color}`} />
                </div>
                {/* Background Glow */}
                <div className={`absolute inset-0 ${info.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl -z-10`} />
              </motion.a>
            ))}
          </div>

          {/* Quick Message / Final CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700" />
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-4 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Let's build something <br /><span className="text-blue-400">extraordinary</span> together.</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm currently looking for new opportunities as a Full Stack Developer or Software Engineer Intern. 
                  If you have a project that needs some creative coding or technical expertise, let's talk!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                  <span>Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                  <span>Remote work specialist</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                  <span>Based in India, working globally</span>
                </div>
              </div>

              <motion.a
                href="mailto:arpit.shrivastava2212@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-50 transition-colors shadow-lg shadow-white/5"
              >
                Send a Message <Send className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="mt-24 border-t border-white/5 pt-8 text-center">
        <p className="text-gray-600 text-sm font-medium tracking-widest uppercase">
          Designed & Built with ❤️ by Arpit Shrivastava
        </p>
        <p className="text-gray-700 text-xs mt-2 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;
