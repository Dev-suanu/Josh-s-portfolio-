import { motion } from "framer-motion";

const WorkWave = () => {
  return (
    <section id="workwave" className="relative group mb-12 p-1 font-display">
      {/* Animated Border Gradient for the "Founder" status */}
      
      <div className="relative flex flex-col lg:flex-row items-center bg-[#0c0c0c] border border-white/10 rounded-md overflow-hidden">
        
        {/* Left: Platform Visual/Logo Area */}
        <div className="w-full lg:w-2/5 h-64 lg:h-auto bg-zinc-900 lg:bg-transparent flex items-center justify-center relative overflow-hidden">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-10 " />
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="z-10 text-center"
          >
            <div className="w-24 h-20 md:w-32 md:h-25 bg-cyan-500/10 border border-cyan-500/20 rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-[0_0_50px_rgba(34,211,238,0.1)] overflow-hidden">
              {/* Replace with your WorkWave Logo */}
            <img src="/logo2.jpg"/>
            </div>
            <h3 className="text-white font-mono text-xs tracking-[0.5em] uppercase">Established 2025</h3>
          </motion.div>
        </div>

        {/* Right: Founder Details */}
        <div className="w-full lg:w-3/5 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest border border-cyan-400/20 rounded-full">
              Founder & Architect
            </span>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">
            WORK<span className="text-cyan-400">WAVE</span>
          </h2>

          <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed mb-8">
            WorkWave is a specialized ecosystem designed to bridge the gap between 
            emerging Web3 talent and decentralized opportunities. As the founder, 
            I architected the platform to streamline community-driven workstreams, 
            incentivized contribution models, and transparent reward distributions.
          </p>

          {/* Platform Stats/Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="text-white font-bold text-xl">500+</p>
              <p className="text-gray-500 font-mono text-[10px] uppercase">Active Contributors</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="text-white font-bold text-xl">15+</p>
              <p className="text-gray-500 font-mono text-[10px] uppercase">Partner DAOs</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 hidden md:block">
              <p className="text-white font-bold text-xl">Open</p>
              <p className="text-gray-500 font-mono text-[10px] uppercase">Platform Status</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://workwave.xyz" target="_blank" rel="noreferrer" className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg text-sm hover:bg-cyan-400 transition-colors flex items-center gap-2">
              VISIT PLATFORM
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <button className="px-6 py-3 border border-white/10 text-white font-bold rounded-lg text-sm hover:bg-white/5 transition-colors">
              READ WHITEPAPER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWave;