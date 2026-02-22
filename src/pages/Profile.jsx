import React from 'react';
import { Mail, Github } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub as FaGithubIcon, FaJava } from "react-icons/fa";
import { SiPhp, SiC, SiLaravel, SiMysql } from "react-icons/si";

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
  { name: 'Php', icon: <SiPhp />, color: 'text-indigo-600' },
  { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-600' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-700' },
  { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
  { name: 'C', icon: <SiC />, color: 'text-slate-500' },
  { name: 'Git & GitHub', icon: <FaGithubIcon />, color: 'text-slate-800' },
];

const softSkills = [
  'Problem Solving', 'Creativity', 'Critical Thinking', 
  'Teamwork', 'Communication', 'Responsive Design', 
  'UI/UX Principles', 'Agile Methodologies', 'RESTful APIs'
];

const certifications = [
  "Cyber Security Certification – Csico",
  "Skills to Succeed Academy – Accenture",
  "HTML, CSS & JavaScript Certification – DICT",
  "Hackathon Participant – University of San Jose-Recoletos, Aug 17–18, 2024",
  "Hackathon Participant – Horizon 101, Aug 17–18, 2024",
  "Digital Career Expo – Cebu City Hall, June 21, 2025"
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* --- NAVIGATION --- */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-8 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="text-2xl font-black tracking-tighter">SETH DEV</div>
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <a href="#about" className="hover:text-[--brand-pink]">About</a>
          <a href="#skill" className="hover:text-[--brand-pink]">Skill</a>
          <a href="#background" className="hover:text-[--brand-pink]">Background</a>
          <a href="#certificate" className="hover:text-[--brand-pink]">Certificate</a>
          <a href="#languages" className="hover:text-[--brand-pink]">Languages</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        
        {/* --- ABOUT SECTION --- */}
        <section id="about" className="grid md:grid-cols-2 gap-16 items-start">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-b-[10px] border-[--brand-pink]">
             <img 
              src="https://via.placeholder.com/500x600" 
              alt="Seth Andrey" 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div className="space-y-6 pt-4">
            <h2 className="section-title text-[--brand-pink]">About</h2>
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">
              Seth Andrey <br/> <span className="text-slate-300">Jabagat</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Fresh graduate in Computer Technology major in Software Development, 
              with internship experience as a Junior Front-End Developer. Focused on 
              frontend development using React and passionate about learning new 
              technologies while contributing to team-based projects. Motivated to 
              build high-quality systems, websites, and user experiences.
            </p>
            
            <div className="space-y-4 pt-4">
              <ContactLink icon={<Mail size={18}/>} text="sethandreyjabagat@gmail.com" />
              <ContactLink icon={<Github size={18}/>} text="github.com/gsi78eywh" />
            </div>

            <button className="btn-brand mt-4">Download CV</button>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skill">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h3 className="bg-[--skill-highlight] border-l-4 border-[--skill-accent] px-4 py-2 font-black text-[10px] uppercase tracking-widest mb-6">Technical Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all border hover:border-slate-100">
                    <span className={skill.color}>{skill.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="bg-[--skill-highlight] border-l-4 border-[--skill-accent] px-4 py-2 font-black text-[10px] uppercase tracking-widest mb-6">Principles</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span key={s} className="bg-white border border-slate-200 px-3 py-1 rounded text-[10px] font-bold uppercase text-slate-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- BACKGROUND SECTION --- */}
        <section id="background" className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="section-title text-slate-800">Education</h2>
            <TimelineItem 
              date="2023 – 2026"
              title="Associate in Computer Technology"
              sub="University of San Jose - Recoletos"
              desc="Major in Software Development"
            />
            <TimelineItem 
              date="2021 – 2023"
              title="Senior High School"
              sub="Patao National High School"
              desc="Patao, Bantayan, Cebu"
            />
          </div>

          <div>
            <h2 className="section-title text-slate-800">Experience</h2>
            <TimelineItem 
              date="May 31, 2025 – Jan 31, 2026"
              title="Junior Front-End Developer Intern"
              sub="MYT-Softdev Solutions"
              desc="Focused on front-end development tasks, worked in a team-driven environment, and gained hands-on experience in the development lifecycle."
            />
          </div>
        </section>

        {/* --- CERTIFICATIONS SECTION --- */}
        <section id="certificate">
          <h2 className="section-title text-slate-800">Certifications & Activities</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        {/* --- LANGUAGES SECTION --- */}
        <section id="languages">
          <h2 className="section-title text-slate-800">Languages</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Filipino</li>
            <li>English</li>
          </ul>
        </section>

      </main>

      <footer className="py-20 text-center border-t border-slate-50">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
          © 2026 Seth Andrey Jabagat • Built with React
        </div>
      </footer>
    </div>
  )
} 
export default Profile;
