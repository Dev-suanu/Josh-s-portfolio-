import { motion } from "framer-motion";

const contributions = [
  {
    project: "Uniswap DAO",
    role: "Governance Moderator",
    period: "2024 - PRESENT",
    status: "ACTIVE",
    impact: "Facilitated 50+ Snapshot proposals; resolved 200+ governance disputes.",
  },
  {
    project: "Starknet",
    role: "Ecosystem Ambassador",
    period: "2023 - 2024",
    status: "COMPLETED",
    impact: "Authored 12 technical guides for Cairo 1.0; onboarded 500+ devs.",
  },
  {
    project: "Mirror Protocol",
    role: "Content Strategist",
    period: "2023 - 2023",
    status: "COMPLETED",
    impact: "Generated 45k+ impressions via long-form protocol deep-dives.",
  },
  {
    project: "WorkWave",
    role: "Founder / Architect",
    period: "2024 - PRESENT",
    status: "ACTIVE",
    impact: "Built a decentralized talent-matching layer for Web3 contributors.",
  }
];

const Projects = () => {
  return (
    <section id="contributions" className="py-20 px-6 sm:px-12 bg-[#050505] font-mono border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-cyan-400 text-[9px] tracking-[0.4em] uppercase mb-2 font-bold">Proof_of_Contribution</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            Verified <span className="text-cyan-400">History</span>
          </h2>
        </div>

        {/* MOBILE VIEW: Vertical Log Cards (Hidden on Desktop) */}
        <div className="md:hidden space-y-4">
          {contributions.map((item) => (
            <motion.div 
              key={`${item.project}-mob`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-zinc-900/20 border border-white/5 rounded-2xl relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-white font-black text-xl uppercase tracking-tighter">
                  {item.project}
                </span>
                <div className="flex items-center gap-1.5">
                   <span className={`text-[8px] font-bold ${item.status === 'ACTIVE' ? 'text-cyan-400' : 'text-zinc-600'}`}>{item.status}</span>
                   <div className={`w-1 h-1 rounded-full ${item.status === 'ACTIVE' ? 'bg-cyan-400 animate-pulse' : 'bg-zinc-700'}`} />
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-zinc-600 text-[9px] uppercase tracking-widest font-bold">Role / Period</p>
                  <p className="text-zinc-300 text-xs">{item.role} <span className="text-zinc-700 mx-2">|</span> {item.period}</p>
                </div>
                <div>
                  <p className="text-zinc-600 text-[9px] uppercase tracking-widest font-bold">Impact_Log</p>
                  <p className="text-zinc-500 text-xs leading-relaxed mt-1"> {item.impact}</p>
                </div>
              </div>
              
              {/* Corner Glow for Active Projects */}
              {item.status === 'ACTIVE' && (
                <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-400/5 blur-xl pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>

        {/* DESKTOP VIEW: Tactical Table (Hidden on Mobile) */}
        <div className="hidden md:block w-full">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-left text-zinc-600 text-[10px] tracking-[0.3em] uppercase">
                <th className="pb-6 font-bold">Protocol_Entity</th>
                <th className="pb-6 font-bold">Operational_Role</th>
                <th className="pb-6 font-bold">Impact_Metric</th>
                <th className="pb-6 font-bold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {contributions.map((item) => (
                <motion.tr 
                  key={item.project}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="group hover:bg-white/[0.01] transition-colors"
                >
                  <td className="py-10">
                    <div className="flex flex-col">
                      <span className="text-white font-black text-2xl tracking-tighter uppercase italic group-hover:text-cyan-400 transition-colors leading-none">
                        {item.project}
                      </span>
                      <span className="text-zinc-700 text-[9px] mt-2 tracking-widest uppercase">{item.period}</span>
                    </div>
                  </td>
                  <td className="py-10 align-top pt-11 text-zinc-400 text-[11px] uppercase tracking-widest font-bold">
                    {item.role}
                  </td>
                  <td className="py-10 align-top pt-11 max-w-sm">
                    <p className="text-zinc-500 text-xs leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                      // {item.impact}
                    </p>
                  </td>
                  <td className="py-10 text-right align-top pt-11">
                    <div className="inline-flex items-center gap-3 bg-zinc-900/40 px-3 py-1.5 rounded-md border border-white/5">
                      <span className={`text-[9px] font-black tracking-[0.2em] ${item.status === 'ACTIVE' ? 'text-cyan-400' : 'text-zinc-700'}`}>
                        {item.status}
                      </span>
                      <div className={`w-1 h-1 rounded-full ${item.status === 'ACTIVE' ? 'bg-cyan-400 animate-pulse' : 'bg-zinc-800'}`} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Projects;