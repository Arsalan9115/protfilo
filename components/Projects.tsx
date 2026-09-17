import { projects } from "@/lib/data"
export default function Projects(){
 return(
  <section id="work" className="py-32 max-w-6xl mx-auto px-4">
   <div className="flex justify-between items-end mb-12"><h2 className="text-[48px] font-[800] tracking-tighter leading-none">Selected<br/>Work � 2024</h2><p className="text-zinc-500 text-sm">3 featured / 10+ total</p></div>
   <div className="grid md:grid-cols-3 gap-5">
    {projects.map((p,i)=>(
     <div key={p.title} className="group relative rounded-[32px] border border-white/10 bg-[#0E0E10] overflow-hidden hover:border-white/20 transition-all duration-500">
       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-violet-500/20 via-transparent to-transparent" />
       <div className="p-8 relative"><div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[10px]">{String(i+1).padStart(2,'0')}</div><h3 className="text-[22px] font-bold mt-8 leading-tight">{p.title}</h3><p className="text-[13px] text-zinc-400 mt-3 leading-relaxed">{p.desc}</p><div className="flex flex-wrap gap-1.5 mt-8">{p.tech.map(t=><span key={t} className="text-[10px] tracking-wide px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">{t}</span>)}</div></div>
       <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
       <div className="p-4 flex justify-between text-[11px] text-zinc-500"><span>{p.year}</span><span className="group-hover:text-white transition">View case ?</span></div>
     </div>
    ))}
   </div>
  </section>
 )
}