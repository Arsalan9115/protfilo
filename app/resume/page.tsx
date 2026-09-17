export default function Resume(){
 return (
  <main className="min-h-screen bg-[#0a0a0a] text-white p-6 max-w-6xl mx-auto">

    <h2 className="mt-2 text-[18px] font-bold">Main Resume - ATS Friendly</h2>
    <div className="mt-3 rounded-[16px] border border-white/10 bg-[#0f0f11] overflow-hidden">
      <img src="/certificates/main-resume.jpg" className="w-full h-[700px] object-contain bg-white"/>
      <div className="p-3 text-[11px] font-bold">Main Resume - ATS</div>
    </div>

    <h2 className="mt-10 text-[18px] font-bold">Experience & Recommendation (ElevanceSkills - Full Stack)</h2>
    <div className="mt-4 grid md:grid-cols-2 gap-4">
      <div className="rounded-[16px] border border-white/10 bg-[#0f0f11] overflow-hidden">
        <img src="/certificates/elevance-experience-letter.jpg" className="w-full h-[550px] object-contain bg-white"/>
        <div className="p-3 text-[11px] font-bold">Experience Letter - ElevanceSkills</div>
      </div>
      <div className="rounded-[16px] border border-white/10 bg-[#0f0f11] overflow-hidden">
        <img src="/certificates/elevance-recommendation-letter.jpg" className="w-full h-[550px] object-contain bg-white"/>
        <div className="p-3 text-[11px] font-bold">Recommendation Letter - ElevanceSkills</div>
      </div>
    </div>

    <h2 className="mt-10 text-[18px] font-bold">Course Certificates</h2>
    <div className="mt-4 grid md:grid-cols-3 gap-4">
      <div className="rounded-[16px] border border-white/10 bg-[#0f0f11] overflow-hidden">
        <img src="/certificates/elevance-fullstack.jpg" className="w-full h-[320px] object-contain bg-white"/>
        <div className="p-3 text-[11px] font-bold">Full Stack Web Development</div>
      </div>
      <div className="rounded-[16px] border border-white/10 bg-[#0f0f11] overflow-hidden">
        <img src="/certificates/elevance-myntra-react.jpg" className="w-full h-[320px] object-contain bg-white"/>
        <div className="p-3 text-[11px] font-bold">Myntra Clone - React Native</div>
      </div>
      <div className="rounded-[16px] border border-white/10 bg-[#0f0f11] overflow-hidden">
        <img src="/certificates/ai-academia-offer.jpg" className="w-full h-[320px] object-contain bg-white"/>
        <div className="p-3 text-[11px] font-bold">AI Academia - Campus Ambassador</div>
      </div>
    </div>

    <div className="mt-12 text-center text-[12px] text-zinc-500">
      Location: Ahmedabad 380001 • Phone: 8128696464 • Email: arsalanbotawala256@gmail.com<br/>
      GitHub: github.com/Arsalan9115
    </div>

  </main>
)}