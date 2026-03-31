import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const walletAddress = "0x1234...abcd"; // Replace with your actual address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 bg-[#050505] font-mono border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Call to Action */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-[10px] tracking-[0.4em] uppercase font-bold">Signal_Status: Open</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8">
              Establish <br />
              <span className="text-zinc-800 text-5xl md:text-7xl">Contact</span>
            </h2>
            <p className="text-zinc-500 text-sm md:text-base max-w-md leading-relaxed mb-10">
              Currently accepting mandates for community scaling, protocol moderation, and technical narrative architecture. Reach out via the secure channels below.
            </p>
            
            {/* Wallet / Tip Jar (Web3 Style) */}
            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl inline-block group">
               <p className="text-[9px] text-zinc-600 uppercase tracking-widest mb-3 font-bold">Public_Address (ERC-20)</p>
               <div className="flex items-center gap-4">
                 <code className="text-cyan-400/80 text-xs md:text-sm">{walletAddress}</code>
                 <button 
                  onClick={copyToClipboard}
                  className="px-3 py-1 bg-white/5 hover:bg-cyan-400 hover:text-black text-[10px] text-white font-bold transition-all border border-white/10 rounded-md"
                 >
                   {copied ? "COPIED_HASH" : "COPY_LINK"}
                 </button>
               </div>
            </div>
          </div>

          {/* Right Side: Social Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Twitter / X", label: "@yourhandle", link: "#", color: "hover:border-blue-400" },
              { name: "Telegram", label: "t.me/yourname", link: "#", color: "hover:border-cyan-400" },
              { name: "Discord", label: "user#0000", link: "#", color: "hover:border-indigo-400" },
              { name: "Email", label: "hi@workwave.xyz", link: "mailto:hi@workwave.xyz", color: "hover:border-white" },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                whileHover={{ y: -5 }}
                className={`p-8 bg-[#080808] border border-white/5 rounded-2xl flex flex-col justify-between transition-colors duration-300 ${social.color} group`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] text-zinc-600 font-bold tracking-tighter uppercase">{social.name}</span>
                  <div className="w-1 h-1 bg-zinc-800 group-hover:bg-white transition-colors" />
                </div>
                <p className="text-white font-bold text-lg mt-6 tracking-tight">{social.label}</p>
              </motion.a>
            ))}
          </div>

        </div>

        {/* Footer Terminal Text */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[9px] text-zinc-700 uppercase tracking-[0.2em] flex gap-8">
             <span>Protocol: HTTPS/TLS_1.2</span>
             <span>Region: West_Africa_Node_01</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-zinc-500 text-[10px] uppercase font-black tracking-widest italic">
              System Ready for Deployment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;