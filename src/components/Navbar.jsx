import React from 'react';
import { Home, User, Briefcase, Code, PenTool, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { icon: <Home size={18} />, label: 'Home', href: '#' },
    { icon: <User size={18} />, label: 'About Me', href: '#about' },
    { icon: <Code size={18} />, label: 'Projects', href: '#projects' },
    { icon: <Briefcase size={18} />, label: 'Experience', href: '#experience' },
    { icon: <PenTool size={18} />, label: 'Blogs', href: '#blogs' },
    { icon: <Mail size={18} />, label: 'Contact Us', href: '#contact' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto">
      <nav className="flex items-center justify-center gap-1 px-2 sm:px-3 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-x-auto no-scrollbar">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-0 sm:hover:gap-2 px-2 sm:px-3 py-2 rounded-full text-gray-400 sm:hover:text-white sm:hover:bg-white/10 transition-all duration-500 ease-in-out group overflow-hidden whitespace-nowrap"
          >
            <span className="flex-shrink-0 transition-transform duration-500">
              {item.icon}
            </span>
            <span className="max-w-0 opacity-0 sm:group-hover:max-w-[120px] sm:group-hover:opacity-100 transition-all duration-500 ease-in-out text-sm font-medium tracking-wide">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
