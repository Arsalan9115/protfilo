import Link from "next/link";
const projects = [
  {id:"hotel-booking", title:"Hotel Booking System", icon:"🏨", desc:"Full-stack booking with payments and admin.", tech:["React","Node.js","MySQL"]},
  {id:"smart-dustbin", title:"Smart Waste Monitor", icon:"🗑️", desc:"IoT dustbin - auto open + WET/DRY detection. Real hardware built.", tech:["Arduino","IoT","ESP32"]},
  {id:"youtube-clone", title:"YouTube Clone", icon:"▶️", desc:"Video streaming clone with uploads, comments - Elevance internship.", tech:["Next.js","React","Tailwind"]},
];

export default function Projects(){
return(
<main className="min-h-screen bg-black text-white max-w-[1100px] mx-auto px-6 py-12">
<Link href="/" className="text-zinc-500 text-[12px]">← Home</Link>
<h1 className="mt-4 text-[40px] font-black">All Projects</h1>
<div className="mt-8 grid md:grid-cols-3 gap-5">
{projects.map((p)=>(
<Link key={p.id} href={`/projects/${p.id}`} className="rounded-[18px] border border-white/10 bg-[#0f0f11] p-6 hover:border-[#7c5cff]/50">
<div className="text-[22px]">{p.icon}</div>
<div className="mt-3 font-bold">{p.title}</div>
<div className="mt-2 text-[12px] text-zinc-400">{p.desc}</div>
<div className="mt-4 flex gap-2 flex-wrap">
{p.tech.map((t)=> <span key={t} className="text-[10px] px-2 py-1 rounded bg-[#1e1e22]">{t}</span>)}
</div>
</Link>
))}
</div>
</main>
)}