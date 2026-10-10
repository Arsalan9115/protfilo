"use client";

import Link from "next/link";

export default function MyntraClonePage() {
  const LIVE_LINK = "https://mynra-clone-main-myntra.vercel.app/";
  const GITHUB_LINK = "https://github.com/Arsalan9115/mynra-clone-main.git";

  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <div className="max-w-[760px] mx-auto px-6 py-10">
        <Link href="/projects" className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white/80 transition">
          <span>←</span> Back to Projects
        </Link>

        <div className="mt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1e] border border-white/10 text-[11px] text-white/60">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
            E-Commerce • React + Tailwind
          </div>

          <h1 className="text-[32px] md:text-[42px] font-black leading-[1.1] mt-4 tracking-[-0.02em]">
            Myntra <span className="text-white/40">Clone</span>
          </h1>
          <p className="text-[14px] text-white/50 mt-3 max-w-[560px] leading-6">
            A modern fashion storefront inspired by Myntra with product cards, category sections,
            filters, and a responsive shopping layout built for demo and UI practice.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a href={LIVE_LINK} target="_blank" rel="noreferrer" className="h-[44px] px-7 rounded-full bg-white text-black font-bold text-[13px] flex items-center gap-2">
              🚀 Live Demo
            </a>
            <a href={GITHUB_LINK} target="_blank" rel="noreferrer" className="h-[44px] px-7 rounded-full bg-white/[0.08] border border-white/10 font-bold text-[13px] flex items-center gap-2">
              ⭐ GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-[28px] overflow-hidden border border-white/[0.08] bg-[#121214] p-2">
          <div className="rounded-[20px] overflow-hidden bg-[#0d0d10]">
            <img
              src="/projects/myntra-clone-live.png"
              alt="Myntra Clone project preview"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <p className="text-[11px] text-white/40">Live Demo • Responsive storefront</p>
            <div className="flex gap-2">
              {['React','Tailwind','Redux','E-commerce'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] text-white/60">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <figure className="rounded-[22px] overflow-hidden border border-white/[0.08] bg-[#121214] p-2">
            <img
              src="/projects/myntra-clone-live-2.png"
              alt="Trending fashion products from the live Myntra clone"
              className="w-full h-auto rounded-[16px]"
            />
            <figcaption className="px-3 py-2 text-[11px] text-white/45">Trending Products</figcaption>
          </figure>
          <figure className="rounded-[22px] overflow-hidden border border-white/[0.08] bg-[#121214] p-2">
            <img
              src="/projects/myntra-clone-live-3.png"
              alt="Featured fashion collection from the live Myntra clone"
              className="w-full h-auto rounded-[16px]"
            />
            <figcaption className="px-3 py-2 text-[11px] text-white/45">Featured Collection</figcaption>
          </figure>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#121214] p-5">
            <h3 className="text-[13px] font-bold tracking-wide">FEATURES</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Responsive hero, category, and product sections",
                "Fashion product cards with pricing and ratings",
                "Clean modern UI inspired by premium storefronts",
                "Mobile-friendly shopping layout"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[13px] text-white/60">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-white/[0.08] bg-[#121214] p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-[13px] font-bold tracking-wide">TECH STACK</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'Responsive UI'].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] text-white/70">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}