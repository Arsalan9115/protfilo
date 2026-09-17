"use client";

import Link from "next/link";

export default function HotelBookingPage() {
  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <div className="max-w-[760px] mx-auto px-6 py-10">
        <Link href="/projects" className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white/80 transition">
          <span>←</span> Back to Projects
        </Link>

        <div className="mt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1e] border border-white/10 text-[11px] text-white/60">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Full-Stack • MERN Stack
          </div>

          <h1 className="text-[32px] md:text-[42px] font-black leading-[1.1] mt-4 tracking-[-0.02em]">
            Hotel Booking <span className="text-white/40">System</span>
          </h1>
          <p className="text-[14px] text-white/50 mt-3 max-w-[560px] leading-6">
            A full-stack hotel booking platform with real-time room availability, secure payments, and admin dashboard.
          </p>
        </div>

        <div className="mt-8 rounded-[28px] overflow-hidden border border-white/[0.08] bg-[#121214] p-2">
          <div className="rounded-[20px] overflow-hidden bg-black h-[420px]">
            <img
              src="/projects/hotel-booking.png"
              alt="Hotel Booking"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <p className="text-[11px] text-white/40">Version 2.0 • Live Soon</p>
            <div className="flex gap-2">
              {["React","Node.js","MongoDB","Stripe"].map(t=>(
                <span key={t} className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] text-white/60">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#121214] p-5">
            <h3 className="text-[13px] font-bold tracking-wide">FEATURES</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Search & filter hotels by city & price",
                "Real-time room availability check",
                "Secure booking with Stripe payment",
                "User dashboard with booking history",
                "Admin panel to manage hotels & bookings"
              ].map((item,i)=>(
                <li key={i} className="flex gap-3 text-[13px] text-white/60">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] border border-white/[0.08] bg-[#121214] p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-[13px] font-bold tracking-wide">TECH STACK</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Next.js","TypeScript","Node.js","Express","MongoDB","Tailwind CSS","Stripe","JWT Auth"].map(t=>(
                  <span key={t} className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] text-white/70">{t}</span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex-1 h-10 rounded-full bg-white text-black text-[13px] font-bold flex items-center justify-center">Live Demo</a>
              <a href="#" className="flex-1 h-10 rounded-full bg-white/10 border border-white/10 text-[13px] font-bold flex items-center justify-center">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}