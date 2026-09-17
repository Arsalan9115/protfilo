const fs=require('fs');
const w=(p,c)=>{fs.mkdirSync(p.split('/').slice(0,-1).join('/'),{recursive:true});fs.writeFileSync(p,c);console.log("✓",p)}

w('lib/data.ts',`export const projects=[
{id:"hotel-booking",title:"Hotel Booking System",icon:"🏨",desc:"Full-stack booking platform with payments, rooms, and admin dashboard.",long:"Hotel booking platform with search and admin.",tech:["React","Node.js","Stripe"],cat:"Full Stack",year:"2024"},
{id:"smart-dustbin",title:"Smart Waste Monitor",icon:"🗑️",desc:"IoT sensor for waste level monitoring with live dashboard & alerts.",long:"Ultrasonic + Servo + Arduino. V1 GU prototype, V2 WET/DRY.",tech:["ESP32","IoT","MQTT"],cat:"IoT",year:"2024"},
{id:"youtube-clone",title:"YouTube Clone",icon:"▶️",desc:"Video streaming clone with uploads, comments, and responsive UI.",long:"YouTube clone from Elevance internship.",tech:["Next.js","PostgreSQL","Tailwind"],cat:"Frontend",year:"2025"}
];`);

w('app/globals.css',`@tailwind base;@tailwind components;@tailwind utilities;
body{background:#050507;color:white;font-family:Inter,system-ui}
.grid-bg{background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px);background-size:80px 80px}
`);

w('app/layout.tsx',`import "./globals.css";
export default function Root({children}:{children:React.ReactNode}){
return(<html><body className="bg-black text-white grid-bg min-h-screen">{children}
<div className="py-8 text-center text-[11px] text-zinc-600">© 2026 Arsalan Botawala • Built with React, TypeScript & Tailwind</div>
</body></html>)}`);

w('app/page.tsx',`
import Link from "next/link"; import {projects} from "@/lib/data";
export default function Home(){return(
<main className="min-h-screen px-4 py-6">
<div className="max-w-[1150px] mx-auto rounded-[24px] border border-white/[0.06] bg-[#0a0a0e]/90 backdrop-blur overflow-hidden">
{/* NAV */}
<div className="m-4 rounded-[16px] bg-[#111113] border border-white/[0.04] px-6 h-[56px] flex justify-between items-center">
<div className="flex items-center gap-2"><div className="w-9 h-9 rounded-[12px] bg-[#d8d0ff] text-[#7c5cff] grid place-items-center font-black">AB</div></div>
<div className="flex gap-2">
<Link href="/" className="px-5 py-2 rounded-full bg-[#7c5cff] text-white text-[13px] font-bold">Home</Link>
<Link href="/projects" className="px-5 py-2 rounded-full bg-[#2a2a2e] text-zinc-400 text-[13px]">Projects</Link>
<Link href="/resume" className="px-5 py-2 rounded-full bg-[#3a3a3e] text-zinc-300 text-[13px]">Resume</Link>
<Link href="/freelance" className="px-5 py-2 rounded-full bg-[#3a3a3e] text-zinc-300 text-[13px]">Freelance</Link>
<Link href="/contact" className="px-5 py-2 rounded-full bg-[#7c5cff] text-white text-[13px] font-bold">Hire Me</Link>
</div></div>

{/* HERO */}
<div className="text-center pt-8 pb-6 px-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111113] px-3 py-1 text-[12px] text-[#a8e6a0]"><span className="w-2 h-2 bg-[#a8e6a0] rounded-full"></span>Available for freelance</div>
<h1 className="mt-6 text-[56px] md:text-[64px] font-black leading-[0.9] tracking-tighter">Arsalan Botawala<br/><span className="font-bold text-white">Full Stack Developer & </span><span className="text-[#7c5cff]">IoT Builder</span></h1>
<p className="mt-4 max-w-[700px] mx-auto text-[13px] text-zinc-400 leading-relaxed">I design and build scalable web applications, IoT systems, and modern digital experiences. Turning ideas into real-world products with clean code and practical engineering.</p>
<div className="mt-7 flex justify-center gap-3">
<Link href="/projects" className="px-6 py-3 rounded-[12px] bg-[#7c5cff] text-white text-[14px] font-bold flex gap-2">✨ View Projects</Link>
<Link href="/resume" className="px-6 py-3 rounded-[12px] border border-white/15 bg-[#111113] text-white text-[14px] font-bold">⬇ Download Resume</Link>
</div></div>

{/* SELECTED */}
<div className="px-8 pb-8">
<div className="flex gap-3 items-baseline"><div className="font-black text-[22px]">Selected Projects</div><div className="text-[14px] text-zinc-400">— A few things I've built recently</div></div>
<div className="mt-6 grid md:grid-cols-3 gap-5">
{projects.map(p=><Link key={p.id} href={"/projects/"+p.id} className="group rounded-[16px] border border-white/[0.08] bg-[#15151a] p-6 hover:border-[#7c5cff]/50 transition">
<div className="w-10 h-10 rounded-[12px] bg-[#1e1e26] border border-[#7c5cff]/30 grid place-items-center text-[#7c5cff] text-[18px]">{p.icon}</div>
<div className="mt-4 font-bold text-[17px]">{p.title}</div>
<div className="mt-2 text-[12.5px] text-zinc-400 leading-relaxed">{p.desc}</div>
<div className="mt-4 flex gap-2 flex-wrap">{p.tech.map(t=><span key={t} className="text-[11px] px-2.5 py-1 rounded-[8px] bg-[#2a2a3a] border border-white/5">{t}</span>)}</div>
<div className="mt-4 h-[3px] w-full bg-[#7c5cff]/60 rounded-full opacity-0 group-hover:opacity-100 transition"></div>
</Link>)}
</div>
<div className="mt-10 grid grid-cols-3 text-center border-t border-white/5 pt-7">
<div><div className="text-[32px] font-black text-[#7c5cff]">10+</div><div className="text-[13px] text-zinc-400">Projects</div></div>
<div className="border-x border-white/5"><div className="text-[32px] font-black text-[#7c5cff]">3+</div><div className="text-[13px] text-zinc-400">IoT</div></div>
<div><div className="text-[32px] font-black text-[#7c5cff]">2+</div><div className="text-[13px] text-zinc-400">Experience</div></div>
</div></div></div></main>)}`);

w('app/projects/page.tsx',`import Link from "next/link"; import {projects} from "@/lib/data";
export default function P(){return(<main className="min-h-screen max-w-[1100px] mx-auto px-6 py-12"><h1 className="text-[40px] font-black">All Projects</h1><div className="mt-6 grid md:grid-cols-3 gap-5">{projects.map(p=><Link key={p.id} href={"/projects/"+p.id} className="rounded-[18px] border border-white/10 bg-[#0f0f11] p-6"><div className="text-[20px]">{p.icon}</div><div className="mt-2 font-bold">{p.title}</div><div className="text-[12px] text-zinc-400">{p.desc}</div></Link>)}</div></main>)}`);

w('app/projects/[id]/page.tsx',`import {projects} from "@/lib/data"; import Link from "next/link";
export default function D({params}:{params:{id:string}}){
const p=projects.find(x=>x.id===params.id); if(!p) return <div className="p-20"><Link href="/projects">Back</Link></div>;
return(<main className="min-h-screen max-w-[900px] mx-auto px-6 py-12"><Link href="/projects" className="text-zinc-500 text-[12px]">← Projects</Link><h1 className="mt-4 text-[44px] font-black">{p.title}</h1><p className="mt-2 text-zinc-400">{p.long}</p><div className="mt-6 rounded-[18px] border border-white/10 bg-[#0f0f11] overflow-hidden">{p.id==="smart-dustbin"?<div className="grid md:grid-cols-2"><img src="/projects/smart-dustbin.jpg" className="h-[300px] object-cover"/><img src="/projects/smart-dustbin-pro.jpg" className="h-[300px] object-cover bg-white"/></div>:<div className="p-10 text-center text-zinc-500">Add /public/projects/{p.id}.jpg</div>}</div></main>)}`);

w('app/resume/page.tsx',`export default function R(){return(<main className="min-h-screen max-w-[1000px] mx-auto px-6 py-12"><h1 className="text-[40px] font-black">Resume</h1><div className="mt-6 grid md:grid-cols-3 gap-4"><div className="rounded-[16px] border border-white/10 bg-[#0f0f11] overflow-hidden"><div className="p-3 text-[11px] font-bold">AI Academia Offer</div><img src="/certificates/ai-academia-offer.jpg" className="w-full h-[260px] object-contain bg-white"/></div><div className="rounded-[16px] border border-white/10 bg-[#0f0f11] overflow-hidden"><div className="p-3 text-[11px] font-bold">Myntra React</div><img src="/certificates/elevance-myntra-react.jpg" className="w-full h-[260px] object-contain bg-white"/></div><div className="rounded-[16px] border border-white/10 bg-[#0f0f11] overflow-hidden"><div className="p-3 text-[11px] font-bold">Full Stack</div><img src="/certificates/elevance-fullstack.jpg" className="w-full h-[260px] object-contain bg-white"/></div></div></main>)}`);
w('app/freelance/page.tsx',`export default function F(){return(<main className="min-h-screen max-w-[1000px] mx-auto px-6 py-12"><h1 className="text-[40px] font-black">Freelance</h1><div className="mt-6 grid grid-cols-3 gap-4"><div className="bg-[#111113] border border-white/10 p-6 rounded-[16px]"><div>Basic ₹4,999</div></div><div className="bg-[#7c5cff] text-black p-6 rounded-[16px] font-bold"><div>Full Stack ₹9,999</div></div><div className="bg-[#111113] border border-white/10 p-6 rounded-[16px]"><div>IoT ₹6,999</div></div></div></main>)}`);
w('app/contact/page.tsx',`export default function C(){return(<main className="min-h-screen max-w-[600px] mx-auto px-6 py-12"><h1 className="text-[40px] font-black">Contact</h1><div className="mt-6 bg-[#0f0f11] border border-white/10 p-6 rounded-[16px]"><div>Email: arsalanbotawala256@gmail.com</div><div>Phone: 8128664964</div></div></main>)}`);
console.log("DONE - exact output image design");