import Link from "next/link";
const projects = [
  {id:"hotel-booking", title:"Hotel Booking System", icon:"🏨", desc:"Full-stack booking platform with payments, rooms, and admin dashboard.", tech:["React","Node.js","Stripe"]},
  {id:"smart-dustbin", title:"Smart Waste Monitor", icon:"🗑️", desc:"IoT sensor for waste level monitoring with live dashboard & alerts.", tech:["ESP32","IoT","MQTT"]},
  {id:"youtube-clone", title:"YouTube Clone", icon:"▶️", desc:"Video streaming clone with uploads, comments, and responsive UI.", tech:["Next.js","PostgreSQL","Tailwind"]},
];

export default function Home(){
return(
<div className="min-h-screen bg-[#08080a] p-4 md:p-6 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]">
<div className="max-w-[1160px] mx-auto rounded-[24px] border border-white/[0.07] bg-[#0c0c0f]/90 shadow-2xl overflow-hidden">

<div className="m-3 md:m-4 rounded-[16px] bg-[#121214] border border-white/[0.05] px-5 h-[56px] flex justify-between items-center">
<div className="w-9 h-9 rounded-[12px] bg-[#e9e5ff] text-[#7c5cff] grid place-items-center font-black text-[14px]">AB</div>
<div className="flex gap-2">
<Link href="/" className="px-5 py-2 rounded-full bg-[#7c5cff] text-white text-[13px] font-bold">Home</Link>
<Link href="/projects" className="px-5 py-2 rounded-full bg-[#242428] text-zinc-400 text-[13px]">Projects</Link>
<Link href="/resume" className="px-5 py-2 rounded-full bg-[#2e2e32] text-zinc-300 text-[13px]">Resume</Link>
<Link href="/freelance" className="px-5 py-2 rounded-full bg-[#2e2e32] text-zinc-300 text-[13px]">Freelance</Link>
<Link href="/contact" className="px-5 py-2 rounded-full bg-[#7c5cff] text-white text-[13px] font-bold">Hire Me</Link>
</div></div>

<div className="text-center px-6 pt-10 pb-8">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#16161a] px-3 py-1 text-[12px] text-[#b6f0b0]"><span className="w-2 h-2 bg-[#b6f0b0] rounded-full animate-pulse"></span>Available for freelance</div>
<h1 className="mt-6 text-[52px] md:text-[64px] font-black leading-[0.9] tracking-tighter">Arsalan Botawala<br/><span className="text-white font-bold">Full Stack Developer & </span><span className="text-[#8b75ff]">IoT Builder</span></h1>
<p className="mt-4 max-w-[700px] mx-auto text-[13.5px] text-zinc-400 leading-relaxed">I design and build scalable web applications, IoT systems, and modern digital experiences. Turning ideas into real-world products with clean code and practical engineering.</p>
<div className="mt-7 flex justify-center gap-3">
<Link href="/projects" className="px-6 py-3 rounded-[12px] bg-[#7c5cff] text-white text-[14px] font-bold">✨ View Projects</Link>
<Link href="/resume" className="px-6 py-3 rounded-[12px] border border-white/10 bg-[#1a1a1e] text-white text-[14px] font-bold">⬇ Download Resume</Link>
</div></div>

<div className="px-7 pb-8">
<div className="flex items-center gap-3"><div className="font-black text-[20px] tracking-tight">Selected Projects</div><div className="text-[13px] text-zinc-500">— A few things I've built recently</div></div>
<div className="mt-5 grid md:grid-cols-3 gap-4">
{projects.map(p=>(
<Link key={p.id} href={`/projects/${p.id}`} className="group rounded-[16px] border border-white/[0.07] bg-[#15151a] p-6 hover:border-[#7c5cff]/50 transition">
<div className="w-10 h-10 rounded-[12px] bg-[#1e1e26] border border-[#7c5cff]/20 grid place-items-center text-[18px]">{p.icon}</div>
<div className="mt-4 font-bold text-[16px]">{p.title}</div>
<div className="mt-2 text-[12px] text-zinc-400 leading-relaxed min-h-[36px]">{p.desc}</div>
<div className="mt-4 flex gap-2 flex-wrap">{p.tech.map(t=><span key={t} className="text-[11px] px-2.5 py-1 rounded-[8px] bg-[#23232a] border border-white/5 text-zinc-300">{t}</span>)}</div>
<div className="mt-5 h-[2px] w-full bg-[#7c5cff] rounded-full opacity-0 group-hover:opacity-100"></div>
</Link>))}
</div>
<div className="mt-10 grid grid-cols-3 text-center border-t border-white/[0.06] pt-7">
<div><div className="text-[30px] font-black text-[#8b75ff]">10+</div><div className="text-[13px] text-zinc-500">Projects</div></div>
<div className="border-x border-white/[0.06]"><div className="text-[30px] font-black text-[#8b75ff]">3+</div><div className="text-[13px] text-zinc-500">IoT</div></div>
<div><div className="text-[30px] font-black text-[#8b75ff]">2+</div><div className="text-[13px] text-zinc-500">Experience</div></div>
</div></div></div></div>
)}