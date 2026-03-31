import { useState, useEffect } from "react";
import { Home, Globe, Cpu, Database, Phone } from "lucide-react";

const navLinks = [
  { name: "Top", target: "home", icon: <Home size={18} /> },
  { name: "WorkWave", target: "workwave", icon: <Globe size={18} /> },
  { name: "Skills", target: "skills", icon: <Cpu size={18} /> },
  { name: "History", target: "contributions", icon: <Database size={18} /> },
  { name: "Contact", target: "contact", icon: <Phone size={18} /> },
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  // Handle Scroll to Section
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Change this value (in ms) to control speed
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  // Quadratic Easing Function (Slow start, fast middle, slow end)
  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

  // Track which section is in view
  useEffect(() => {
    const observers = navLinks.map((link) => {
      const element = document.getElementById(link.target);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.target);
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <nav className="fixed z-[100] -bottom-8 left-1/2 -translate-x-1/2 w-auto lg:left-2 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:translate-x-0">
      
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-1.5 lg:p-2 rounded-2xl flex lg:flex-col gap-1 items-center shadow-2xl">
        
        <div className="hidden lg:block w-6 h-[1px] bg-cyan-500/20 mb-2" />

        {navLinks.map((link) => {
          const isActive = activeSection === link.target;

          return (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="group relative p-3.5 lg:p-4 flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              {/* Active / Hover Glow Indicator */}
              <div className={`absolute transition-all duration-500 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]
                ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover:opacity-50 group-hover:scale-90"}
                lg:-left-2 lg:top-1/2 lg:-translate-y-1/2 lg:w-1 lg:h-5
                -top-2 left-1/2 -translate-x-1/2 w-5 h-1 lg:hidden`} 
              />

              {/* The Icon */}
              <div className={`transition-all duration-300 
                ${isActive ? "text-white scale-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "text-zinc-500 group-hover:text-zinc-300"}
              `}>
                {link.icon}
              </div>

              {/* Tooltip (Desktop Only) */}
              <div className="absolute left-14 px-3 py-1 bg-zinc-900 border border-white/10 rounded text-[9px] text-cyan-400 font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0 hidden lg:block whitespace-nowrap">
                {link.name}
              </div>
            </button>
          );
        })}

        <div className="hidden lg:block w-6 h-[1px] bg-zinc-800 mt-2" />
      </div>
    </nav>
  );
};

export default FloatingNav;