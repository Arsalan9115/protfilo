import Link from "next/link";

export default function SmartDustbinPage() {
  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <div className="max-w-[760px] mx-auto px-6 py-10">
        <Link href="/projects" className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white/80 transition">
          <span>←</span> Back to Projects
        </Link>

        <div className="mt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1e] border border-white/10 text-[11px] text-white/60">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            IoT • Gujarat University Final Year
          </div>

          <h1 className="text-[32px] md:text-[42px] font-black leading-[1.1] mt-4 tracking-[-0.02em]">
            Smart Waste <span className="text-white/40">Monitor</span>
          </h1>
          <p className="text-[14px] text-white/50 mt-3 max-w-[560px] leading-6">
            An IoT-based automatic waste bin built with ESP32 and Ultrasonic Sensor.
            It detects waste level, opens the lid automatically, and sends live data to the cloud.
          </p>
        </div>

        {/* Main Image */}
        <div className="mt-8 rounded-[28px] overflow-hidden border border-white/[0.08] bg-[#121214] p-2">
          <div className="rounded-[20px] overflow-hidden bg-black">
            <img
              src="/projects/smart-dustbin.png"
              alt="Smart Dustbin"
              className="w-full h-auto max-h-[520px] object-contain bg-[#0e0e10]"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <p className="text-[11px] text-white/40">Prototype V1 • Cardboard + ESP32</p>
            <div className="flex gap-2">
              {["ESP32","HC-SR04","Servo"].map(t=>(
                <span key={t} className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] text-white/60">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Video + Details */}
        <div className="mt-6 grid md:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-[24px] overflow-hidden border border-white/[0.08] bg-[#121214] p-2">
             <div className="rounded-[16px] overflow-hidden bg-black">
                <video
                  src="/projects/smart-dustbin.mp4"
                  poster="/projects/smart-dustbin.png"
                  controls
                  playsInline
                  className="w-full h-auto"
                />
             </div>
             <p className="text-[11px] text-white/40 px-3 py-2">Live Demo • Auto Lid Mechanism</p>
          </div>

          <div className="rounded-[24px] border border-white/[0.08] bg-[#121214] p-5">
            <h3 className="text-[13px] font-bold tracking-wide">HOW IT WORKS</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Measures distance with HC-SR04",
                "Opens lid via Servo when object is <30cm",
                "Sends data to cloud via ESP32 + MQTT",
                "Shows bin-full alert on dashboard"
              ].map((item,i)=>(
                <li key={i} className="flex gap-3 text-[13px] text-white/60">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white">{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 rounded-[14px] bg-yellow-500/[0.08] border border-yellow-500/20">
              <p className="text-[11px] text-yellow-200/80 font-medium">⚠️ Hardware Project</p>
              <p className="text-[11px] text-yellow-200/50 mt-1 leading-4">Source code & circuit diagram available on request. Offline demo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}