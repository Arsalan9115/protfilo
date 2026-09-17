import Link from "next/link";

export default function FreelancePage() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      <div className="max-w-[900px] mx-auto px-6 py-10 pb-20">

        <Link href="/" className="inline-flex text-[13px] text-white/50 hover:text-white transition mb-6">
          ← Back to Home
        </Link>

        <h1 className="text-[28px] font-bold">Freelance Services</h1>
        <p className="text-[13px] text-white/40 mt-1">Full Stack Developer • Available for New Projects</p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="rounded-[16px] border border-white/10 bg-[#0f0f11] p-5">
            <h3 className="font-semibold text-[13px]">🌐 Website Development</h3>
            <div className="text-[12px] text-white/50 mt-2 space-y-1">
              <p>• Business Website, E-commerce, Portfolio</p>
              <p>• Fast, Responsive, SEO Friendly</p>
              <p className="text-[11px] text-white/30 mt-2">Tech: Next.js, React, Node.js, MongoDB</p>
            </div>
          </div>

          <div className="rounded-[16px] border border-white/10 bg-[#0f0f11] p-5">
            <h3 className="font-semibold text-[13px]">📱 Mobile App Development</h3>
            <div className="text-[12px] text-white/50 mt-2 space-y-1">
              <p>• Android & iOS Apps</p>
              <p>• E-commerce, Social, Custom Apps</p>
              <p className="text-[11px] text-white/30 mt-2">Tech: React Native, Firebase</p>
            </div>
          </div>

          <div className="rounded-[16px] border border-white/10 bg-[#0f0f11] p-5">
            <h3 className="font-semibold text-[13px]">⚡ What You Get</h3>
            <div className="text-[12px] text-white/50 mt-2 space-y-1">
              <p>✓ Source Code + Deployment</p>
              <p>✓ 1 Month Free Support</p>
              <p>✓ Fast Delivery (3-7 Days)</p>
            </div>
          </div>

          <div className="rounded-[16px] border border-white/10 bg-[#0f0f11] p-5">
            <h3 className="font-semibold text-[13px]">🤝 How I Work</h3>
            <div className="text-[12px] text-white/50 mt-2 space-y-1">
              <p>1. Discuss Idea → 2. Design → 3. Build → 4. Deliver</p>
              <p>Daily Updates on WhatsApp</p>
              <p className="text-[10px] text-green-400 mt-2 font-bold">Based in Ahmedabad - Available Remote</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Number hata diya */}
        <div className="mt-6 rounded-[16px] border border-white/10 bg-[#0f0f11] p-6 text-center">
          <h3 className="font-bold text-[14px]">Let's Build Your Project</h3>
          <p className="text-[12px] text-white/40 mt-1">arsalanbotawala256@gmail.com</p>
          <div className="flex justify-center gap-3 mt-4">
            <Link href="/contact" className="px-5 py-2 bg-white text-black rounded-full text-[12px] font-bold">Contact Me</Link>
            <Link href="/projects" className="px-5 py-2 border border-white/20 rounded-full text-[12px] font-bold">View Projects</Link>
          </div>
        </div>

      </div>
    </div>
  );
}