import Link from "next/link";

const skills = [
  {
    title: "Languages",
    items: "TypeScript, JavaScript (ES6+), Python, C++, SQL, HTML5, CSS3"
  },
  {
    title: "Frontend",
    items: "Next.js, React, Tailwind CSS, Bootstrap, Redux, responsive design, UI/UX"
  },
  {
    title: "Backend",
    items: "Node.js, Express.js, REST APIs, JWT authentication, Mongoose"
  },
  {
    title: "Database & Cloud",
    items: "MongoDB, Firebase, MySQL, Vercel, Render, Cloudinary"
  },
  {
    title: "Payments & APIs",
    items: "Razorpay, Resend, Twilio, FFmpeg"
  },
  {
    title: "Tools",
    items: "Git, GitHub, VS Code, Figma, Postman, Arduino IDE"
  }
];

const projects = [
  {
    title: "YouTube — Video Streaming SaaS Platform",
    stack: "Next.js, Express, Firebase, Razorpay, FFmpeg",
    details: [
      "Built a full-stack YouTube-like platform with authentication, video upload, playback, and cloud storage.",
      "Implemented FFmpeg transcoding, Resend OTP email authentication, and Razorpay subscriptions.",
      "Added Cloudinary/Multer uploads, video diagnostics, and dynamic CORS for Vercel and Render."
    ]
  },
  {
    title: "StyleCart — Fashion E-Commerce Platform",
    stack: "MERN Stack, Firebase, JWT, Tailwind CSS",
    details: [
      "Built a Myntra-inspired shopping platform with cart, search, filters, and responsive product galleries.",
      "Added category filters, wishlist, order management, Razorpay payments, and an admin product panel.",
      "Created REST APIs with Node.js, Express, MongoDB, and Firebase authentication."
    ]
  },
  {
    title: "StayEase — Hotel Booking & Management System",
    stack: "MERN Stack, Bootstrap, REST APIs, JWT",
    details: [
      "Developed a responsive hotel-booking platform with city/date search and real-time availability validation.",
      "Implemented pricing, sorting, ratings, reviews, and a secure JWT-based dashboard.",
      "Built an admin dashboard to add or edit rooms and view bookings."
    ]
  },
  {
    title: "DevFolio — Developer Portfolio",
    stack: "Next.js, TypeScript, Tailwind CSS, Radix UI, Vercel",
    details: [
      "Built and deployed a responsive portfolio with 10 reusable TSX components and Home, About, Skills, Projects, and Contact pages.",
      "Added dark/light themes, SEO metadata, Framer Motion animations, image optimization, and an API-route contact form."
    ]
  },
  {
    title: "EcoSort — Smart Wet & Dry Waste Segregation Dustbin",
    stack: "Arduino, IoT, Sensors",
    details: [
      "Built an automatic waste-segregation dustbin with Arduino Uno, moisture sensor, HC-SR04 ultrasonic sensor, IR sensor, and two SG90 servo motors.",
      "Programmed touchless hand detection (0–30 cm), wet/dry classification, and servo-controlled lids with a three-second auto-close."
    ]
  }
];

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#08080a] px-4 py-8 text-white md:px-6">
      <div className="mx-auto max-w-[960px]">
        <section className="rounded-[24px] border border-white/10 bg-[#111114] p-6 md:p-10">
          <Link
            href="/"
            className="mb-6 inline-flex h-10 items-center rounded-full border border-white/10 px-4 text-sm font-semibold text-zinc-300 transition hover:border-violet-400/50 hover:bg-white/5 hover:text-white"
          >
            ← Back to Home
          </Link>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a996ff]">Resume</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Arsalan Botawala</h1>
              <p className="mt-2 text-sm text-zinc-400">Full-Stack Developer • IoT Builder</p>
            </div>
            <a
              href="/Arsalan-Botawala-Resume.pdf"
              download="Arsalan-Botawala-Resume.pdf"
              className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-bold text-black transition hover:bg-zinc-200"
            >
              ↓ Download Resume
            </a>
            <Link
              href="/certificates"
              className="inline-flex h-11 items-center rounded-full border border-white/10 px-6 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/50 hover:bg-white/5 hover:text-white"
            >
              View Certificates
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 border-y border-white/10 py-3 text-xs text-zinc-400">
            <span>Ahmedabad, Gujarat, India</span>
            <span>•</span>
            <a className="hover:text-white" href="mailto:arsalanbotawala256@gmail.com">arsalanbotawala256@gmail.com</a>
            <span>•</span>
            <a className="hover:text-white" href="https://arsalanbotawala.vercel.app" target="_blank" rel="noreferrer">Portfolio</a>
            <span>•</span>
            <a className="hover:text-white" href="https://github.com/Arsalan9115" target="_blank" rel="noreferrer">GitHub</a>
            <span>•</span>
            <a className="hover:text-white" href="https://linkedin.com/in/arsalan-botawala-8b2327365" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <section className="mt-7">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#a996ff]">Professional Summary</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Full-stack developer pursuing an M.Sc. IT (Software Development), with a B.Sc. IT (CGPA 7.0)
              from Gujarat University. Builds and deploys full-stack applications using Next.js, React,
              Node.js, Express, MongoDB, and Firebase. Hands-on experience with REST APIs, JWT
              authentication, payment integrations (Razorpay), and cloud deployments on Vercel and Render.
            </p>
          </section>

          <section className="mt-7">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#a996ff]">Technical Skills</h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {skills.map((skill) => (
                <p key={skill.title} className="text-[13px] leading-5 text-zinc-300">
                  <span className="font-semibold text-white">{skill.title}:</span> {skill.items}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#a996ff]">Experience</h2>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-bold">Web Development Intern | Elevance Skill, Bangalore (Remote)</h3>
              <p className="text-xs text-zinc-400">Jan 2025 – Mar 2025</p>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] leading-5 text-zinc-300">
              <li>Built full-stack projects: a YouTube-style video platform and a Myntra-inspired e-commerce app.</li>
              <li>Implemented responsive UIs, REST APIs, JWT authentication, search/filter workflows, and cloud deployment.</li>
            </ul>
          </section>

          <section className="mt-7">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#a996ff]">Projects</h2>
            <div className="mt-3 space-y-4">
              {projects.map((project) => (
                <article key={project.title}>
                  <h3 className="text-sm font-bold">{project.title} <span className="font-normal text-zinc-400">| {project.stack}</span></h3>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[12px] leading-[1.55] text-zinc-300">
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#a996ff]">Education</h2>
            <div className="mt-3 space-y-3 text-[13px] leading-5 text-zinc-300">
              <div>
                <h3 className="font-bold text-white">Integrated M.Sc. IT (Software Development) — Pursuing</h3>
                <p>2026 – Present | Gujarat University, Ahmedabad</p>
              </div>
              <div>
                <h3 className="font-bold text-white">B.Sc. IT (Software Development) — Completed</h3>
                <p>2023 – 2026 | CGPA: 7.0 | Gujarat University, Ahmedabad</p>
                <p className="text-zinc-400">Relevant Coursework: DSA, DBMS, Operating Systems, Computer Networks, Software Engineering, IoT & Embedded Systems</p>
              </div>
            </div>
          </section>
        </section>

      </div>
    </main>
  );
}
