"use client"; import { useState } from 'react';
export default function Form(){
 const [s,setS]=useState(''); const [l,setL]=useState(false);
 async function submit(e:any){
  e.preventDefault(); setL(true);
  const fd=new FormData(e.target); const data=Object.fromEntries(fd);
  const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
  const j=await res.json(); setS(j.message); setL(false); e.target.reset();
 }
 return <form onSubmit={submit} className="space-y-3"><input name="name" required placeholder="Your name" className="w-full bg-[#111] border border-white/10 p-3 rounded-lg"/><input name="email" required placeholder="Email" className="w-full bg-[#111] border border-white/10 p-3 rounded-lg"/><textarea name="message" required placeholder="Project idea..." className="w-full bg-[#111] border border-white/10 p-3 rounded-lg h-24"/><button disabled={l} className="w-full bg-white text-black py-3 rounded-lg font-bold">{l?'Sending to backend...':'Send to Backend →'}</button>{s && <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-3 rounded-lg text-[12px]">{s}</div>}</form>
}