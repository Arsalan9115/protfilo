const fs=require('fs');
const w=(p,c)=>{fs.mkdirSync(p.split('/').slice(0,-1).join('/'),{recursive:true}); fs.writeFileSync(p,c)};

w('components/Navbar.tsx',`import Link from "next/link";
export default function Navbar(){
 return(
  <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-6 py-5">
   <div className="font-black tracking-tighter text-[18px]"><span className="text-violet-500">{"<"}</span>arsalan.best<span className="text-violet-500">/{">"}</span></div>
   <div className="flex gap-1 text-[12px] bg-[#111113] border border-white/10 px-2 py-1.5 rounded-full">
    <Link href="/" className="px-3 py-1 rounded-full bg-white text-black font-bold">home</Link>
    <Link href="/projects" className="px-3 py-1 rounded-full hover:bg-white/10">projects</Link>
    <Link href="/contact" className="px-3 py-1 rounded-full hover:bg-white/10">contact</Link>
    <Link href="/resume" className="px-3 py-1 rounded-full hover:bg-white/10">resume</Link>
   </div>
  </nav>
 )
}`);

w('app/page.tsx',`"use client"; import { useEffect, useState } from 'react'; import Link from "next/link";
export default function Home(){
 const [v,setV]=useState(0);
 useEffect(()=>{fetch('/api/views').then(r=>r.json()).then(d=>setV(d.views))},[]);
 return(
  <main className="max-w-[1200px] mx-auto px-6 py-10">
   <div className="inline-flex items-center gap-2 bg-[#111113] border border-white/10 px-3 py-1 rounded-full text-[11px]"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>Available for work • {v} views via backend</div>
   <h1 className="text-[72px] font-black leading-[0.85] tracking-tighter mt-6">Full Stack<br/>Dev who<br/><span className="text-zinc-600">ships fast.</span></h1>
   <p className="text-zinc-400 text-[14px] mt-5 max-w-[420px] leading-relaxed">Arsalan Botawala — BSc IT 7.9 • Frontend Next.js + Backend API Routes • Sanand, Ahmedabad</p>
   <div className="flex gap-3 mt-6"><Link href="/projects" className="bg-white text-black px-5 py-2.5 rounded-full text-[13px] font-bold">View Projects →</Link><Link href="/contact" className="bg-[#111113] border border-white/10 px-5 py-2.5 rounded-full text-[13px]">Hire Me</Link></div>
   <div className="grid md:grid-cols-3 gap-4 mt-14">
    <div className="rounded-2xl p-6 bg-gradient-to-br from-violet-600 to-indigo-600 border border-white/10"><div className="text-[10px] opacity-70">01 / FRONTEND</div><div className="font-bold mt-2 text-[18px]">Next.js + Tailwind</div><div className="text-[12px] opacity-80 mt-2">Responsive UI, best coder structure, multi-file</div></div>
    <div className="rounded-2xl p-6 bg-[#121215] border border-white/10"><div className="text-[10px] text-violet-400">02 / BACKEND</div><div className="font-bold mt-2 text-[18px]">API Routes</div><div className="text-[12px] text-zinc-400 mt-2">/api/projects, /api/contact, /api/views → Node.js backend</div></div>
    <div className="rounded-2xl p-6 bg-white text-black"><div className="text-[10px] opacity-60">03 / DATABASE</div><div className="font-bold mt-2 text-[18px]">JSON → MongoDB</div><div className="text-[12px] opacity-70 mt-2">Contact form saves to data/contacts.json (backend)</div></div>
   </div>
  </main>
 )
}`);

console.log("UPGRADED to best coder UI");