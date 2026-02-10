import React from 'react';

// Main Portfolio Component
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* --- Navigation --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="text-2xl font-black tracking-tighter">RANDEV</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 uppercase">
          <a href="#" className="hover:text-[--brand-pink]">Home</a>
          <a href="#" className="text-[--brand-pink]">About</a>
          <a href="#" className="hover:text-[--brand-pink]">Skill</a>
          <a href="#" className="hover:text-[--brand-pink]">Background</a>
          <a href="#" className="hover:text-[--brand-pink]">Certificate</a>
          <a href="#" className="hover:text-[--brand-pink]">Project</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        
        {/* --- About Section --- */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            {/* The image from your screenshot */}
            <img 
              src="/path-to-your-profile.jpg" 
              alt="Ranchana P. (BOW)" 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="section-title text-[--brand-pink]">About<span className="title-accent"></span></h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              I am currently seeking a frontend developer position in the tech industry where I can grow efficiently 
              and continuously while improving my language skills. I have 2.2 years of experience, mainly working with 
              Nuxt.js, and I have also completed a project using Svelte. I prefer to work near the MRT Blue Line.
            </p>
            
            <div className="space-y-4 text-slate-600 font-medium">
              <div className="flex items-center gap-4">
                <span className="text-[--brand-pink] w-6">✉</span> marryrcp@gmail.com
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[--brand-pink] w-6 text-xs bg-pink-50 rounded p-1">LINE</span> marryran
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[--brand-pink] w-6">📞</span> +66 93 131 7520
              </div>
            </div>
            
            <button className="btn-brand">Download CV</button>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skill">
          <h2 className="section-title">Skills<span className="title-accent"></span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            <SkillGroup title="Technical Skill" items={[
              "Frontend Development (Nuxt.js (Main), Vue.js, Svelte)",
              "HTML, CSS, JavaScript, TypeScript",
              "UI Frameworks (Vuetify, Bootstrap, Tailwind CSS)",
              "Tools (GitLab, GitHub, SourceTree, Postman, Figma)"
            ]} />
            
            <SkillGroup title="Language Proficiency" items={[
              "English: TU-GET PBT (620, 2025), IELTS (6.0, 2021)",
              "Japanese: Basic",
              "Thai: Native"
            ]} />
            
            <SkillGroup title="Soft Skill" items={[
              "Analytical Thinking",
              "Effective Communication",
              "Team Collaboration"
            ]} />
            
            <SkillGroup title="Other Knowledge" items={[
              "Logistics - Export of Building Materials",
              "Administration & Recruitment",
              "Classroom Management"
            ]} />
          </div>
        </section>

        {/* --- Background Section (Education & Experience) --- */}
        <section id="background" className="grid md:grid-cols-2 gap-20">
          {/* Education Column */}
          <div>
            <h2 className="text-2xl font-black text-blue-900 mb-10 flex items-center gap-2">
              Education
            </h2>
            <div className="space-y-0">
              <HistoryItem 
                date="2018 - 2022"
                title="Bachelor of Arts in English & Japanese Minor"
                sub="Suan Sunandha Rajabhat University"
                details="GPA 3.74 Second Class Honors"
                dotColor="border-pink-500"
              />
              <HistoryItem 
                date="2015 - 2018"
                title="Mathematics-Science Program"
                sub="Nakhonsawan School"
                details="GPA 3.14"
                dotColor="border-pink-500"
              />
            </div>
          </div>

          {/* Professional Experience Column */}
          <div>
            <h2 className="text-2xl font-black text-blue-900 mb-10">
              Professional Experiences
            </h2>
            <div className="space-y-0">
              <HistoryItem 
                date="Aug 2025 - Current"
                title="Front-end Developer (Full Time • 6 M)"
                sub="SPARKLAB TECHNOLOGY CO., LTD."
                details="Developed responsive websites primarily with Nuxt and Svelte. Worked with REST APIs and Appwrite."
                dotColor="border-pink-500"
              />
              <HistoryItem 
                date="Jul 2023 - Feb 2025"
                title="Front-end Developer (Full Time • 1 Y 8 M)"
                sub="INNOVATE AI COMPANY LIMITED"
                details="Developed, tested, and debugged websites using Nuxt.js, Vuetify, Tailwind and Bootstrap."
                dotColor="border-pink-500"
              />
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center py-12 text-slate-400 text-sm border-t border-slate-50">
        © RanDev Portfolio
      </footer>
    </div>
  );
};

/* --- Sub-Components for Clean Code --- */

const SkillGroup = ({ title, items }) => (
  <div className="space-y-4">
    <h3 className="bg-[#FDF9E7] px-4 py-2 font-bold text-slate-800 text-xs uppercase tracking-widest border-l-4 border-[#F3E6A1]">
      {title}
    </h3>
    <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2">
          <span className="text-[--brand-pink] font-bold">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const HistoryItem = ({ date, title, sub, details, dotColor }) => (
  <div className="relative pl-10 pb-12 border-l-2 border-slate-100 last:border-0">
    {/* Timeline Dot */}
    <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 bg-white ${dotColor}`}></div>
    
    <div className="bg-slate-100 px-3 py-1 rounded text-[10px] font-bold text-slate-500 uppercase inline-block mb-3">
      {date}
    </div>
    <h4 className="font-bold text-slate-900 text-lg leading-snug">{title}</h4>
    <p className="text-slate-500 text-sm italic font-medium mt-1 uppercase tracking-wide">{sub}</p>
    <div className="mt-2 text-slate-500 text-sm leading-relaxed">
      {details}
    </div>
  </div>
);

export default Portfolio;