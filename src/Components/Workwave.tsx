import { motion } from "framer-motion";

const WorkWave = () => {
  return (
    <section id="workwave" className="relative group mb-12 p-1 font-display">
      {/* Background Glow Effect */}
      <div className="absolute -inset-24 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row items-stretch bg-[#0c0c0c] border border-white/10 rounded-md overflow-hidden">
        
        {/* Left: Platform Visual/Logo Area */}
        <div className="w-full lg:w-2/5 min-h-[320px] bg-zinc-950 flex items-center justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
          
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ translateY: ["0%", "450%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent z-0"
          />
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="z-10 text-center"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
              {/* Decorative Tech Frame */}
              <div className="absolute -inset-3 border border-cyan-500/10 rounded-2xl animate-pulse" />
              <div className="absolute -inset-px border border-white/10 rounded-2xl" />
              
              {/* Logo Container */}
              <div className="relative w-full h-full bg-[#0c0c0c] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src="/logo2.jpg" 
                  alt="WorkWave Logo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full opacity-50" />
                <div className="absolute bottom-2 right-2 w-4 h-[1px] bg-cyan-400/30" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-white/5 rounded-md">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
              <h3 className="text-zinc-500 font-mono text-[9px] tracking-[0.3em] uppercase">
                ESTABLISHED 2025
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Right: Founder Details */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest border border-cyan-400/20 rounded-full">
              Founder & Architect
            </span>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">
            WORK<span className="text-cyan-400">WAVE</span>
          </h2>

          <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            WorkWave is a specialized ecosystem designed to bridge the gap between 
            emerging Web3 talent and decentralized opportunities. As the founder, 
            I architected the platform to streamline community-driven workstreams, 
            incentivized contribution models, and transparent reward distributions.
          </p>

          {/* Platform Stats/Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-white/5 group-hover:border-cyan-400/20 transition-colors">
              <p className="text-white font-bold text-xl">100+</p>
              <p className="text-gray-500 font-mono text-[10px] uppercase">Active Contributors</p>
            </div>
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-white/5 group-hover:border-cyan-400/20 transition-colors">
              <p className="text-white font-bold text-xl">5+</p>
              <p className="text-gray-500 font-mono text-[10px] uppercase">Partner DAOs</p>
            </div>
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-white/5 hidden md:block group-hover:border-cyan-400/20 transition-colors">
              <p className="text-white font-bold text-xl text-cyan-400">Live</p>
              <p className="text-gray-500 font-mono text-[10px] uppercase">Platform Status</p>
            </div>
          </div>

    
        </div>
      </div>
    </section>
  );
};

export default WorkWave;