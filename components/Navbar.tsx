import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-4 py-5 md:px-6">
      <Link href="/" className="text-[20px] font-black tracking-[-0.08em] text-white md:text-[24px]" aria-label="Arsalan Botawala home">
        <span className="text-violet-500">&lt;</span>
        arsalan.best
        <span className="text-violet-500">/&gt;</span>
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-1 rounded-full border border-white/10 bg-[#101114]/90 px-2 py-1.5 text-[11px] font-medium text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
        <Link href="/" className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white">home</Link>
        <Link href="/projects" className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white">projects</Link>
        <Link href="/resume" className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white">resume</Link>
        <Link href="/contact" className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white">contact</Link>
        <Link href="/freelance" className="rounded-full bg-[#7c5cff] px-4 py-2 font-bold text-white transition hover:bg-[#8b75ff]">Hire</Link>
      </div>
    </nav>
  );
}