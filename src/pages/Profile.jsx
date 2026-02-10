import React from 'react';

const Portfolio = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skill' },
    { name: 'Background', href: '#background' },
    { name: 'Certificate', href: '#certificate' },
    { name: 'Project', href: '#project' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased scroll-smooth">
      {/* --- Navigation --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-50">
        <div className="text-2xl font-black tracking-tighter text-slate-900">RANDEV</div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-[--brand-pink] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile menu button could go here */}
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        
        {/* --- About Section --- */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-start pt-10">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-b-8 border-[--brand-pink]">
            <img 
              src="/profile.jpg" // Ensure this is in your public folder
              alt="Ranchana P. (BOW)" 
              className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-6">
            <h2 className="section-title text-[--brand-pink]">
              About <span className="title-accent"></span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              I am currently seeking a frontend developer position in the tech industry where I can grow efficiently 
              and continuously while improving my language skills. I have 2.2 years of experience, mainly working with 
              Nuxt.js, and I have also completed a project using Svelte. I prefer to work near the MRT Blue Line.
            </p>
            
            <div className="space-y-4 text-slate-600 font-medium bg-slate-50 p-6 rounded-2xl">
              <ContactInfo icon="✉" text="marryrcp@gmail.com" />
              <ContactInfo icon="LINE" text="marryran" isBadge />
              <ContactInfo icon="📞" text="+66 93 131 7520" />
            </div>
            
            <button className="btn-brand group">
              Download CV
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </button>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skill">
          <h2 className="section-title">
            Skills <span className="title-accent"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            <SkillGroup title="Technical Skill" items={[
              "Frontend Development (Nuxt.js, Vue.js, Svelte)",
              "HTML, CSS, JavaScript, TypeScript",
              "UI Frameworks (Tailwind CSS, Vuetify, Bootstrap)",
              "Tools (Git, Postman, Figma, Jira, Appwrite)"
            ]} />
            
            <SkillGroup title="Language Proficiency" items={[
              "English: TU-GET PBT (620, 2025), IELTS (6.0)",
              "Japanese: Basic (N5-N3 learner)",
              "Thai: Native"
            ]} />
            
            <SkillGroup title="Soft Skill" items={[
              "Analytical Thinking",
              "Effective Communication",
              "Team Collaboration"
            ]} />
            
            <SkillGroup title="Other Knowledge" items={[
              "Logistics - Export Management",
              "Administration & Recruitment",
              "Classroom Management"
            ]} />
          </div>
        </section>

        {/* --- Background Section --- */}
        <section id="background" className="grid md:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-b-2 border-slate-100 pb-4">
              Education
            </h2>
            <div className="ml-2">
              <HistoryItem 
                date="2018 - 2022"
                title="Bachelor of Arts in English & Japanese Minor"
                sub="Suan Sunandha Rajabhat University"
                details="GPA 3.74 • Second Class Honors"
              />
              <HistoryItem 
                date="2015 - 2018"
                title="Mathematics-Science Program"
                sub="Nakhonsawan School"
                details="GPA 3.14"
              />
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight border-b-2 border-slate-100 pb-4">
              Professional Experiences
            </h2>
            <div className="ml-2">
              <HistoryItem 
                date="Aug 2025 - Current"
                title="Front-end Developer"
                sub="SPARKLAB TECHNOLOGY CO., LTD."
                details="Developed responsive websites with Nuxt and Svelte. Worked with REST APIs and Appwrite functions."
              />
              <HistoryItem 
                date="Jul 2023 - Feb 2025"
                title="Front-end Developer"
                sub="INNOVATE AI COMPANY LIMITED"
                details="Developed, tested, and debugged websites using Nuxt.js, Vuetify, and Tailwind CSS."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="text-2xl font-black tracking-tighter">RANDEV</div>
          <p className="text-slate-400">Built with React & Tailwind CSS</p>
          <div className="pt-8 text-slate-500 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} RanDev Portfolio
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- Optimized Sub-Components --- */

const ContactInfo = ({ icon, text, isBadge }) => (
  <div className="flex items-center gap-4 group">
    <span className={`text-[--brand-pink] w-8 font-bold ${isBadge ? 'text-[10px] bg-pink-100 p-1 rounded text-center' : 'text-lg'}`}>
      {icon}
    </span>
    <span className="group-hover:text-[--brand-pink] transition-colors">{text}</span>
  </div>
);

const SkillGroup = ({ title, items }) => (
  <div className="space-y-4 group">
    <h3 className="bg-[--skill-highlight] px-4 py-2 font-black text-slate-800 text-[11px] uppercase tracking-[0.2em] border-l-4 border-[--skill-accent]">
      {title}
    </h3>
    <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="text-[--brand-pink] font-bold">/</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const HistoryItem = ({ date, title, sub, details }) => (
  <div className="relative pl-10 pb-12 border-l-2 border-slate-100 last:border-0 group">
    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-[--brand-pink] bg-white group-hover:bg-[--brand-pink] transition-colors duration-300"></div>
    <div className="bg-slate-100 px-3 py-1 rounded text-[10px] font-black text-slate-500 uppercase inline-block mb-3 tracking-wider">
      {date}
    </div>
    <h4 className="font-bold text-slate-900 text-xl leading-snug">{title}</h4>
    <p className="text-[--brand-pink] text-sm italic font-semibold mt-1 uppercase tracking-tight">{sub}</p>
    <div className="mt-3 text-slate-500 text-sm leading-relaxed max-w-md">
      {details}
    </div>
  </div>
);

export default Portfolio;