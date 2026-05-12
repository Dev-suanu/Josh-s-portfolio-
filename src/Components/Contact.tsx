import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 sm:px-12 bg-[#050505] font-mono border-t border-white/5 relative overflow-hidden">
      
      {/* Cinematic Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left: Huge Title Block (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-cyan-400" />
              <span className="text-cyan-400 text-[10px] tracking-[0.5em] uppercase font-bold">Avaliable to work</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-4">
              establish<br />
              <span className="text-transparent border-b-2 border-zinc-800 pb-2 italic" 
                    style={{ WebkitTextStroke: '1px #27272a' }}>contact</span>
            </h2>
          </div>

          {/* Right: The Connection Card (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <motion.a
              href="https://x.com/ej_onx"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative block p-8 md:p-12 bg-zinc-900/10 border border-white/5 hover:border-cyan-400/40 transition-all duration-700 rounded-sm overflow-hidden"
            >
              {/* Card Scanline */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(34,211,238,0.05)_50%,transparent_100%)] bg-[size:100%_20px] animate-scan" />
              
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-zinc-600 tracking-[0.3em] font-bold uppercase">Transmission_Route</p>
                  <div className="w-8 h-8 flex items-center justify-center bg-white text-black group-hover:bg-cyan-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    @ej_onx
                  </h3>
                  <p className="text-zinc-500 text-xs mt-4 leading-relaxed font-sans max-w-xs">
                    Drop a DM for partnerships, community scaling, or technical advisory.
                  </p>
                </div>

                <div className="flex items-center gap-4 group-hover:gap-6 transition-all">
                  <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Connect on X</span>
                  <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-cyan-400/50" />
                </div>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
                   <p>Powered by Setronix</p>

          
          
        </div>
      </div>

      <style>{`
        @keyframes scan {
          from { background-position: 0 -100px; }
          to { background-position: 0 100%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;