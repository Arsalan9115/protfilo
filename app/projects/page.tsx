import Link from "next/link";

const projects = [
  {
    id: "hotel-booking",
    title: "Hotel Booking System",
    icon: "🏨",
    desc: "Full-stack booking with payments and admin.",
    tech: ["React", "Node.js", "MySQL"]
  },
  {
    id: "smart-dustbin",
    title: "Smart Waste Monitor",
    icon: "🗑️",
    desc: "IoT dustbin - auto open + WET/DRY detection. Real hardware built.",
    tech: ["Arduino", "IoT", "ESP32"]
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
    desc: "Video streaming clone with uploads, comments - Elevance internship.",
    tech: ["Next.js", "React", "Tailwind"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <main className="mx-auto max-w-[1280px] px-4 pb-10 pt-8 md:px-6">
        <div className="pt-3 md:pt-6">
          <div className="mb-5 flex items-center gap-2 text-[13px] text-zinc-500">
            <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white">
              <span>←</span>
              <span>Home</span>
            </Link>
          </div>

          <h1 className="mb-8 text-[48px] font-black leading-[0.82] tracking-[-0.08em] text-white sm:text-[60px] md:mb-10 md:text-[88px] lg:text-[100px]">
            All Projects
          </h1>

          <div className="mx-auto grid max-w-[1040px] gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex h-[230px] flex-col rounded-[20px] border border-white/10 bg-[#111216] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-violet-500/60 hover:bg-[#151922] hover:shadow-[0_16px_34px_rgba(139,92,246,0.08)] md:last:col-start-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-[#181b20] text-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                  {project.icon}
                </div>

                <h2 className="mt-5 text-[20px] font-bold leading-tight tracking-[-0.04em] text-white md:text-[22px]">
                  {project.title}
                </h2>

                <p className="mt-3 min-h-[46px] text-[12.5px] leading-relaxed text-zinc-400">
                  {project.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-[#1a1d21] px-2.5 py-1 text-[10px] font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}