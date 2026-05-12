import { motion } from "framer-motion";

const contributions = [
  {
    project: "Quant AI",
    role: "Ambassador",
    logo: "/quant.jpg",
    description: "Developed comprehensive ecosystem narratives and educational content, driving awareness and onboarding new participants to the governance framework.",
    link: "https://x.com/tryquantio?s=21" 
  },
  {
    project: "Courtesy Chain",
    role: "Ecosystem Ambassador",
    logo: "/chain.jpg", 
    description: "Authored technical deep-dives and onboarding guides, successfully scaling the developer base by 200+ active users through clear technical storytelling.",
    link: "https://x.com/CourtesyChainHQ"
  },
  {
    project: "WorkWave",
    role: "Founder / Architect",
    logo: "/logo2.jpg",
    description: "Architected a decentralized talent-matching layer for Web3 contributors.",
    link: "https://useworkwave.vercel.app"
  }
];

const Projects = () => {
  return (
    <section id="contributions" className="py-20 px-6 sm:px-12 bg-[#050505] font-mono border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
            <p className="text-cyan-400 text-[9px] tracking-[0.4em] uppercase font-bold">
              Proof_of_Contribution
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
            Verified <span className="text-cyan-400">History</span>
          </h2>
        </div>

        {/* FEATURED HIGHLIGHT: X Space */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative overflow-hidden border border-cyan-400/30 bg-zinc-950 p-2 md:p-10"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 blur-[80px] -z-10" />
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* The Image from X */}
            <div className="w-full md:w-1/3 shrink-0  overflow-hidden border border-white/10 shadow-2xl">
              <img src="/space.jpg" alt="X Space Recording" className="w-full h-auto" />
            </div>

            {/* Space Details */}
            <div className="flex-1 p-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-cyan-400 text-black text-[8px] font-black uppercase rounded">Top Performance</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">
                space: <span className="text-cyan-400">Lets Round it Up</span>
              </h3>
              
              <p className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed mb-6">
                Directly engaged with over 5.6K listeners in a high-stakes ecosystem dialogue. 
                Managed live moderation, speaker onboarding, and technical uptime for a 
                47-hour broadcast window.
              </p>

              <div className="flex flex-wrap gap-6 border-t border-white/5 pt-6">
                <div>
                  <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-1">Engagement</p>
                  <p className="text-cyan-400 font-bold text-xl">5.6K+ Tuned In</p>
                </div>
                <div>
                  <p className="text-zinc-600 text-[9px] uppercase tracking-widest mb-1">Duration</p>
                  <p className="text-white font-bold text-xl">47h 37m</p>
                </div>
                <div className="ml-auto self-end">
                  <a href="https://x.com/ej_onx/status/2050085694102557061?s=20" target="_blank" className="text-[10px] font-bold text-white bg-zinc-900 px-4 py-2 border border-white/10 hover:border-cyan-400 transition-colors uppercase tracking-widest">
                    View Recording
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributions.map((item, index) => (
            <motion.div 
              key={item.project}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-zinc-900/10 border border-white/5 hover:border-cyan-400/30 transition-all duration-500 rounded-md relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    <img src={item.logo} alt={item.project} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
                      {item.project}
                    </h3>
                    <span className="text-cyan-400/80 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">
                      {item.role}
                    </span>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed font-sans max-w-sm mb-8">
                  {item.description}
                </p>
              </div>

              <div className="pt-4">
                <a href={item.link} target="_blank" className="inline-flex items-center gap-2 text-[10px] font-bold text-zinc-400 hover:text-cyan-400 tracking-widest uppercase transition-colors group/btn">
                  Visit Project
                  <svg className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-[1px] bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;