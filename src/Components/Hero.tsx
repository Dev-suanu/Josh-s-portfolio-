import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Web3 Ambassador", "Space Host", "Content Creator"];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[70vh] flex flex-col lg:flex-row items-center justify-between py-20 px-10 bg-[#080808] rounded-lg border border-white/5 mb-12 overflow-hidden font-display">
      
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
        }} 
      />
      
      {/* Radial Gradient Glow - Subtle Tone */}
      <div className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] bg-cyan-500/5 blur-[160px] rounded-full z-0 pointer-events-none" />

      {/* Content Section */}
      <div className="lg:w-1/2 text-center lg:text-left z-10">
        <div className="mb-4">
          <h2 className="text-white text-xl md:text-5xl font-light tracking-tight">
            Hello, my name is 
          </h2>
          <h2 className="font-black mt-3 text-4xl text-white">Josh, I'm a</h2> 
        </div>

        <div className="h-[60px] md:h-[80px] flex items-center justify-center lg:justify-start">
          <AnimatePresence mode="wait">
            <motion.h1
              key={roles[roleIndex]}     
              initial={{ y: 20, opacity: 0 }}  
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black text-cyan-400 capitalize tracking-tighter"
            >
              {roles[roleIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 font-mono text-lg max-w-lg mt-6 mb-10"
        >
          Helping DAOs and DeFi protocols turn users into long-term advocates through strategic moderation and transparent governance.
        </motion.p>

        <div className="flex gap-4 justify-center lg:justify-start">
  <a 
    href="https://x.com/ej_onx" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="font-mono px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-cyan-400 transition-colors flex items-center gap-2 group shadow-[0_0_20px_rgba(34,211,238,0.3)]"
  >
    CONTACT ME
    <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </a>
</div>
      </div>

      {/* Floating 3D Image Section */}
      <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0 perspective-1000 z-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80 preserve-3d animate-float-tilt">
          
          {/* Front Image */}
          <div className="absolute inset-0 backface-hidden rounded-2xl border-2 border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] overflow-hidden">
            <img src="/josh.jpg" alt="PFP Front" className="w-full h-full object-cover" />
          </div>

          {/* Back Image */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl border-2 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] overflow-hidden">
            <img src="/josh.jpg" alt="PFP Back" className="w-full h-full object-cover brightness-50" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
               <span className="font-mono text-white text-xs uppercase tracking-[0.3em] font-bold">Verified ID</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        @keyframes float-tilt {
          0% { transform: rotateY(-15deg) rotateX(10deg) translateY(0px); }
          50% { transform: rotateY(15deg) rotateX(-10deg) translateY(-20px); }
          100% { transform: rotateY(-15deg) rotateX(10deg) translateY(0px); }
        }
        .animate-float-tilt {
          animation: float-tilt 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;