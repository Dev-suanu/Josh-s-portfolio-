const Metrics = () => {
  const stats = [
    { label: "Community Growth", value: "500%", sub: "1k to 5k members" },
    { label: "Daily Active Users", value: "+20%", sub: "Post-onboarding flow" },
    { label: "Proposals Authored", value: "12", sub: "95% passing rate" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {stats.map((s, i) => (
        <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center hover:border-cyan-500/50 transition-colors">
          <h3 className="text-4xl font-black text-white mb-2">{s.value}</h3>
          <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest mb-1">{s.label}</p>
          <p className="text-gray-500 text-sm">{s.sub}</p>
        </div>
      ))}
    </section>
  );
};

export default Metrics;