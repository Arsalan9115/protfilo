"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent!");
        setForm({ name: "", email: "", service: "Website Development", message: "" });
      } else {
        setStatus("❌ Failed to send");
      }
    } catch {
      setStatus("❌ Error");
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-10 pb-20">
        <Link href="/" className="inline-flex text-[13px] text-white/50 hover:text-white transition">
          ← Back to Home
        </Link>

        <h1 className="text-[28px] font-bold mt-6">~/contact</h1>
        <p className="text-[12px] text-white/30 mt-1">Got an idea or a role in mind? Let's talk.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Left */}
          <div className="rounded-[16px] border border-white/10 bg-[#0f0f11] p-6 h-fit">
            <h3 className="font-semibold text-[15px]">Let's Talk</h3>
            <p className="text-[13px] text-white/40 mt-2">Have a project? Freelance work? Job opportunity?</p>
            <div className="mt-6 space-y-3 text-[13px] text-white/70">
              <div>📍 Ahmedabad, Gujarat</div>
              <div>📧 arsalanbotawala256@gmail.com</div>
              <div>🔗 github.com/Arsalan9115</div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="mailto:arsalanbotawala256@gmail.com" className="px-4 py-2 bg-white text-black rounded-full text-[12px] font-bold">Email Me</a>
              <Link href="/freelance" className="px-4 py-2 border border-white/20 rounded-full text-[12px] font-bold hover:bg-white/10">Freelance Services</Link>
            </div>
          </div>

          {/* Right - Form (white highlight hat gaya) */}
          <form onSubmit={handleSubmit} className="rounded-[16px] border border-white/10 bg-[#0f0f11] p-6 space-y-4">
            <input
              required
              value={form.name}
              onChange={e=>setForm({...form, name:e.target.value})}
              placeholder="Your Name"
              className="w-full h-10 rounded-lg bg-black border border-white/10 px-3 text-[13px] text-white placeholder:text-white/30 outline-none focus:border-white/20"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={e=>setForm({...form, email:e.target.value})}
              placeholder="Your Email"
              className="w-full h-10 rounded-lg bg-black border border-white/10 px-3 text-[13px] text-white placeholder:text-white/30 outline-none focus:border-white/20"
            />
            <select
              value={form.service}
              onChange={e=>setForm({...form, service:e.target.value})}
              className="w-full h-10 rounded-lg bg-black border border-white/10 px-3 text-[13px] text-white outline-none"
            >
              <option>Website Development</option>
              <option>Freelance Work</option>
              <option>Job Opportunity</option>
            </select>
            <textarea
              required
              value={form.message}
              onChange={e=>setForm({...form, message:e.target.value})}
              placeholder="Tell me about your project..."
              className="w-full h-28 rounded-lg bg-black border border-white/10 p-3 text-[13px] text-white placeholder:text-white/30 outline-none focus:border-white/20 resize-none"
            />
            <button type="submit" className="w-full h-11 rounded-lg bg-white text-black font-bold text-[13px] hover:bg-zinc-200 transition">
              Send Message →
            </button>
            {status && <p className="text-center text-[12px] text-zinc-400">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}