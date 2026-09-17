"use client";

export default function Page() {
  const LIVE_LINK = "https://youtube-clone-b32d-self.vercel.app/";
  const GITHUB_LINK = "https://github.com/Arsalan9115/youtube-clone";

  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-10">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1e] border border-white/10 text-[11px] text-white/60">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> LIVE PROJECT • 2025
        </div>

        <h1 className="mt-5 text-[42px] font-extrabold tracking-[-0.03em] leading-[0.95]">
          YourTube — YouTube Clone +<br />Video Call
        </h1>
        <p className="mt-4 text-[15px] text-white/50 max-w-[560px] leading-[1.6]">
          Full-stack YouTube clone with Google Auth, video upload, likes, comments,
          subscriptions and 1-1 calling built with WebRTC & Socket.io.
        </p>

        <div className="flex gap-3 mt-6">
          <a href={LIVE_LINK} target="_blank" className="h-[44px] px-7 rounded-full bg-white text-black font-bold text-[13px] flex items-center gap-1.5">
            🚀 Live Demo ↗
          </a>
          <a href={GITHUB_LINK} target="_blank" className="h-[44px] px-7 rounded-full bg-white/[0.08] border border-white/10 font-bold text-[13px] flex items-center gap-2">
            ⭐ GitHub
          </a>
        </div>

        <div className="mt-10 rounded-[20px] border border-white/[0.08] bg-[#121214] p-[8px]">
          <div className="rounded-[12px] overflow-hidden bg-black">
            <img src="/projects/youtube-clone.png" alt="Feed" className="w-full h-auto object-contain" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-[18px] border border-white/[0.08] bg-[#121214] p-[8px]">
            <img src="/projects/youtube-clone-2.png" className="w-full aspect-[16/10] object-cover rounded-[10px]" alt="" />
          </div>
          <div className="rounded-[18px] border border-white/[0.08] bg-[#121214] p-[8px]">
            <img src="/projects/youtube-clone-3.png" className="w-full aspect-[16/10] object-cover rounded-[10px]" alt="" />
          </div>
        </div>

      </div>
    </div>
  );
}