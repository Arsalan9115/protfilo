"use client"
import { motion } from "framer-motion"
export default function Hero(){
 return(
  <section className="relative min-h-[105vh] flex flex-col items-center justify-center pt-24 overflow-hidden">
   <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,80,255,0.15),transparent),radial-gradient(40%_40%_at_20%_30%,rgba(255,80,180,0.12),transparent),radial-gradient(40%_40%_at_80%_70%,rgba(80,180,255,0.12),transparent)]" />
   <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
    <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] tracking-wide mb-10"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"/> AVAILABLE FOR NEW PROJECTS</motion.div>
    <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-[14vw] md:text-[88px] font-[900] leading-[0.85] tracking-[-0.06em]">I build premium<br/><span className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">web products</span><br/>that convert.</motion.h1>
    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-zinc-400 max-w-xl mx-auto mt-8 text-[15px] leading-relaxed">MSc IT Developer � Hotel Booking, Smart Dustbin IoT, and conversion-focused web apps. Ahmedabad, India. Fast, reliable, elegant.</motion.p>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-10 flex justify-center gap-3">
      <a href="#contact" className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-[14px] hover:scale-[1.02] transition">Work with me ?</a>
      <a href="#work" className="px-8 py-3.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur text-[14px]">View projects</a>
    </motion.div>
    <div className="mt-20 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
     <div className="md:row-span-2 rounded-[28px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-8 backdrop-blur-xl"><div className="text-[11px] text-zinc-500">??</div><h3 className="text-2xl font-bold mt-4 leading-tight">Performance<br/>+92%</h3><p className="text-sm text-zinc-400 mt-3">Core Web Vitals optimized.<br/>Sub-100ms, Python + MySQL tuned.</p></div>
     <div className="md:col-span-2 rounded-[24px] bg-white/[0.04] border border-white/10 p-7 backdrop-blur"><h3 className="font-semibold">10+ SaaS & IoT Products</h3><p className="text-sm text-zinc-400 mt-1">Shipped for hotel, IoT, ecommerce � Ahmedabad to global.</p></div>
     <div className="md:col-span-2 rounded-[24px] bg-white/[0.04] border border-white/10 p-7 backdrop-blur"><h3 className="font-semibold">Next.js � TypeScript � Python � Arduino</h3><p className="text-sm text-zinc-400 mt-1">Modern stack. Scalable, secure, maintainable.</p></div>
    </div>
   </div>
  </section>
 )
}