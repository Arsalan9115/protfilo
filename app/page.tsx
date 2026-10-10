import Link from "next/link";

const projects = [
  {
    id: "hotel-booking",
    title: "Hotel Booking System",
    icon: "🏨",
    desc: "Full-stack booking platform with payments, rooms, and admin dashboard.",
    tech: ["React", "Node.js", "Stripe"]
  },
  {
    id: "smart-dustbin",
    title: "Smart Waste Monitor",
    icon: "🗑️",
    desc: "IoT sensor for waste level monitoring with live dashboard & alerts.",
    tech: ["ESP32", "IoT", "MQTT"]
  },
  {
    id: "myntra-clone",
    title: "Myntra Clone",
    icon: "🛍️",
    desc: "Fashion storefront with responsive shopping experience and product cards.",
    tech: ["React", "Tailwind", "E-commerce"]
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    icon: "▶️",
    desc: "Video streaming clone with uploads, comments, and responsive UI.",
    tech: ["Next.js", "PostgreSQL", "Tailwind"]
  }
];

const credentials = [
  {
    type: "Experience",
    title: "Virtual Internship Offer Letter",
    organization: "SYNTECXHUB",
    date: "Oct 2026",
    link: "/certificates/view/syntecxhub-internship-offer.png"
  },
  {
    type: "Certificate",
    title: "Full Stack Web Dev",
    organization: "Elevance Skills",
    date: "2025",
    link: "/certificates/view/elevance-fullstack.jpg"
  },
  {
    type: "Experience",
    title: "Experience Letter",
    organization: "Elevance Skills",
    date: "2025",
    link: "/certificates/view/elevance-experience-letter.jpg"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080a] px-4 pb-10 text-white md:px-6">
      <div className="mx-auto max-w-[1120px]">
        <section className="px-4 pb-12 pt-12 text-center md:pb-16 md:pt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-[#16161a] px-4 py-2 text-xs text-[#b6f0b0]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#b6f0b0]" aria-hidden="true" />
            <span>Available for freelance</span>
            <span className="text-white/30" aria-hidden="true">•</span>
            <span>Open to work</span>
          </div>
          <h1 className="mt-7 text-4xl font-black leading-tight tracking-[-0.06em] sm:text-5xl md:text-6xl">
            Arsalan Botawala
          </h1>
          <p className="mt-3 text-lg font-semibold text-zinc-200 sm:text-xl">
            Full Stack Developer &amp; <span className="text-[#a996ff]">IoT Builder</span>
          </p>
          <p className="mx-auto mt-3 max-w-[620px] text-sm leading-6 text-zinc-400">
            I build scalable web apps, IoT systems, and modern UI.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/projects" className="rounded-xl bg-[#7c5cff] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_24px_rgba(124,92,255,0.25)] transition hover:-translate-y-0.5">
              ✨ View Projects
            </Link>
            <Link href="/resume" className="rounded-xl border border-white/10 bg-[#1a1a1e] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/20">
              View Resume ↗
            </Link>
            <Link href="/certificates" className="rounded-xl border border-white/10 bg-[#1a1a1e] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/20">
              🏆 Certs
            </Link>
          </div>
        </section>

        <section className="border-t border-white/[0.07] px-1 py-8 md:px-2">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-black tracking-tight md:text-2xl">Selected Projects</h2>
            <Link href="/projects" className="shrink-0 text-sm font-semibold text-zinc-400 transition hover:text-white">
              View All <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group rounded-2xl border border-white/[0.08] bg-[#111114] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#7c5cff]/50 hover:bg-[#141418]"
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-[#1a1a20] text-lg" aria-hidden="true">
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-[#c4b8ff]">{p.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">{p.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md border border-white/[0.06] bg-[#1a1a20] px-2.5 py-1 text-[11px] text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-white/[0.07] px-1 py-8 md:px-2">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-black tracking-tight md:text-2xl">🏆 Featured Credentials</h2>
            <Link href="/certificates" className="shrink-0 text-sm font-semibold text-zinc-400 transition hover:text-white">
              View All <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((credential) => (
              <article key={credential.title} className="rounded-2xl border border-white/[0.08] bg-[#111114] p-5 transition hover:border-white/15">
                <span className="inline-flex rounded-md border border-[#7c5cff]/20 bg-[#7c5cff]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#b9aaff]">
                  {credential.type}
                </span>
                <h3 className="mt-4 font-bold text-white">{credential.title}</h3>
                <p className="mt-1 text-xs text-zinc-400">
                  {credential.organization} <span className="text-zinc-600">({credential.date})</span>
                </p>
                <a
                  href={credential.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-xs font-semibold text-[#b9aaff] transition hover:text-white"
                >
                  Verify{credential.type === "Experience" ? " Letter" : ""} <span className="ml-1" aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
