import { motion } from "framer-motion";

const skillModules = [
  {
    id: "MOD_01",
    title: "Community Moderation",
    details: [
      "Crisis Management & Conflict Resolution",
      "Discord/Telegram Architecture & Security",
      "Sybil Resistance & Bot Mitigation",
      "24/7 Global Ecosystem Monitoring"
    ],
    status: "SYSTEM_ACTIVE"
  },
  {
    id: "MOD_02",
    title: "Content Creation",
    details: [
      "Technical Thread & Article Authoring",
      "Protocol Documentation & Mirror.xyz Posts",
      "Educational Video Scripting",
      "Narrative Building & Brand Voice"
    ],
    tag: " ",
    status: "SYSTEM_ACTIVE"
  },
  {
    id: "MOD_03",
    title: "Community Ops",
    details: ["Protocol Moderation", "Sybil Resistance Ops", "Support Architecture"],
  },
  {
    id: "MOD_04",
    title: "Developer Relations",
    details: ["Integration Support", "Cairo/Solidity Basics", "SDK Documentation"],
  }
];

const SkillsGlobe = () => {
  return (
    <section id="skills" className="py-18 px-6 sm:px-12 bg-[#050505] font-mono border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Technical Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-xs tracking-[0.3em] uppercase">System_Diagnostics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
            Skill <span className="text-cyan-400">Inventory</span>
          </h2>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {skillModules.map((module) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#080808] p-8 group hover:bg-zinc-900/40 transition-colors duration-500 relative"
            >
              {/* Module Metadata */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] text-zinc-600 tracking-widest">{module.id}</span>
                <span className="text-[10px] text-cyan-400/50 group-hover:text-cyan-400 transition-colors">
                   {module.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                {module.title}
              </h3>

              <ul className="space-y-4">
                {module.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 group/item">
                    <div className="mt-1.5 w-1 h-1 bg-zinc-700 group-hover/item:bg-cyan-400 transition-colors" />
                    <span className="text-zinc-500 text-sm group-hover/item:text-zinc-300 transition-colors">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Decorative Corner Scan-line */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-8 flex justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest">
           <p>Last Sync: {new Date().toLocaleDateString()}</p>
           <p>Connection: Stable</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsGlobe;