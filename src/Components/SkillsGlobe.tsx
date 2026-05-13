import { motion } from "framer-motion";

const skills = [
  "Space Hosting",
  "Community Moderation",
  "Web3 Brand Ambassadorship",
  "Technical Content Creation",
  "Growth Strategy"
];

const SkillsGlobe = () => {
  return (
    <section id="skills" className="py-10 pt-15 px-6 sm:px-12 bg-[#050505] font-mono border-t border-white/5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Technical Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-xs tracking-[0.3em] uppercase">Service_Report</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
            What <span className="text-cyan-400">I Do</span>
          </h2>
          <p className="text-zinc-500 text-md mt-3 max-w-lg font-sans leading-relaxed">
            Specialized in bridging the gap between technical protocols and active community participation.
          </p>
        </motion.div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => {
            // Left column (0, 2) slides from left (-x)
            // Right column (1, 3) slides from right (+x)
            const isLeftColumn = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: isLeftColumn ? -60 : 60 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0 
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for a smooth "snap"
                }}
                className="group border border-white/5 bg-zinc-900/10 p-5 hover:bg-zinc-900/30 hover:border-cyan-400/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1 h-3 bg-zinc-800 group-hover:bg-cyan-400 transition-colors" />
                  <h3 className="text-lg font-bold text-zinc-400 group-hover:text-white uppercase tracking-tight transition-colors">
                    {skill}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsGlobe;