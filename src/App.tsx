
// import CaseStudies from './Components/CaseStudies'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
// import Metrics from './Components/Metrix'
import SkillsGlobe from './Components/SkillsGlobe'
import Projects from './Components/Projects'
import WorkWave from './Components/Workwave'
import FloatingNav from './Components/FloatingNav'


const App = () => {
  return (
   <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
  {/* Background Noise/Grain Overlay (Optional but Pro) */}
  <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
<div className="absolute inset-0 pointer-events-none z-50">
    <div className="w-full h-1 bg-neon-cyan/10 blur-sm animate-scanline" />
  </div>

  {/* The Static Grid/Scanline Texture */}
  <div className="absolute inset-0 pointer-events-none z-40 scanline-overlay opacity-20" />
  {/* Main Content Wrapper */}
  <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 space-y-12">
    <FloatingNav />
    <Hero />
    <WorkWave />
    <SkillsGlobe />
    <Projects />
    {/* <Metrics />
    <CaseStudies /> */}
    <Contact />
    
    {/* You can add Services, , etc. here as well */}
    
  </div>
</div>
  )
}

export default App
