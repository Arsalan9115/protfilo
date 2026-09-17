"use client"
import { useState } from "react"
export default function Contact(){
 const [sent,setSent]=useState(false)
 async function onSubmit(e:any){e.preventDefault(); const d=Object.fromEntries(new FormData(e.target)); await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}); setSent(true)}
 return(
  <section id="contact" className="py-24 max-w-3xl mx-auto px-4 text-center">
   <h2 className="text-6xl font-black tracking-tighter">Let�s build<br/>your best.</h2>
   <form onSubmit={onSubmit} className="mt-10 grid gap-3 text-left bg-[#0A0A0C] border border-white/10 p-6 rounded-[24px]">
    <div className="grid md:grid-cols-2 gap-3"><input name="name" required placeholder="Name" className="bg-black border border-white/10 p-4 rounded-xl outline-none"/><input name="email" required placeholder="Email" className="bg-black border border-white/10 p-4 rounded-xl outline-none"/></div>
    <textarea name="message" required placeholder="Project details..." className="bg-black border border-white/10 p-4 rounded-xl h-32 outline-none"/>
    <button className="bg-white text-black p-4 rounded-xl font-bold">{sent?"? Sent!":"Send Message"}</button>
   </form>
  </section>
 )
}