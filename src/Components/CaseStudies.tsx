const CaseStudies = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8 uppercase italic">Featured Campaigns</h2>
      <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-8 rounded-3xl border border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">Incentivized Testnet Growth</h3>
            <p className="text-gray-400 mb-6">Designed a series of 10 educational tutorials to simplify cross-chain bridging for non-technical users.</p>
            <div className="flex gap-4">
              <span className="px-4 py-1 bg-white/10 rounded-full text-xs text-cyan-400 border border-cyan-400/20">STARKNET</span>
              <span className="px-4 py-1 bg-white/10 rounded-full text-xs text-purple-400 border border-purple-400/20">POLYGON</span>
            </div>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
              <p className="text-white font-bold">Result:</p>
              <p className="text-gray-400 text-sm">Increased Testnet participation by 50% in 30 days.</p>
            </div>
            <button className="w-full py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              READ FULL ARTICLE →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;