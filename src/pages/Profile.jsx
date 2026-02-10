import React from 'react';
import { Mail, Github, Code, Book, Briefcase, User, Award, ExternalLink, CheckCircle, Download } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub as FaGithubIcon, FaJava } from "react-icons/fa";
import { SiPhp, SiC, SiLaravel, SiMysql } from "react-icons/si";

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
  { name: 'PHP', icon: <SiPhp />, color: 'text-indigo-600' },
  { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-600' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-700' },
  { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
  { name: 'C', icon: <SiC />, color: 'text-slate-500' },
  { name: 'Git & GitHub', icon: <FaGithubIcon />, color: 'text-slate-800' },
];

const softSkills = [
  'Responsive Design', 'UI/UX Principles', 'Agile Methodologies', 
  'RESTful APIs', 'Testing & Debugging', 'Problem Solving', 'Communication'
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* HEADER */}
      <header className="py-24 px-6 border-b border-slate-100 text-center bg-slate-50/50">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
          Seth Andrey <span className="text-[#D83B7D]">Jabagat</span>
        </h1>
        <p className="text-slate-400 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-10">
          Software Developer • Major in Software Development
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-sm font-bold">
          <a href="mailto:sethandreyjabagat@gmail.com" className="flex items-center gap-2 hover:text-[#D83B7D] transition-colors">
            <Mail size={18} className="text-[#D83B7D]" /> sethandreyjabagat@gmail.com
          </a>
          <a href="https://github.com/gsi78eywh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D83B7D] transition-colors">
            <Github size={18} className="text-[#D83B7D]" /> github.com/gsi78eywh
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-20">
        
        {/* LEFT COLUMN */}
        <div className="md:col-span-5 space-y-20">
          <section>
            <div className="section-title">
              <User className="text-[#D83B7D]" size={28} /> About Me
              <div className="title-accent"></div>
            </div>
            <p className="text-lg leading-relaxed text-slate-500 font-medium">
              Passionate frontend developer focused on building simple, clean, and
              user-friendly web applications using React. Dedicated to writing 
              efficient code and continuous learning in the IT field.
            </p>
            <button className="btn-brand mt-10">
              <Download size={20} /> Download CV
            </button>
          </section>

          <section>
            <div className="section-title">
              <Code className="text-[#D83B7D]" size={28} /> Tech Stack
              <div className="title-accent"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 bg-white border border-slate-100 p-4 rounded-2xl hover:border-[#D83B7D] transition-all group shadow-sm">
                  <span className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform`}>{skill.icon}</span>
                  <span className="font-black text-[9px] uppercase tracking-widest text-slate-400">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="section-title">
              <CheckCircle className="text-[#D83B7D]" size={24} /> Principles
              <div className="title-accent"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider border border-slate-200">
                  {s}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-7 space-y-20">
          <section>
            <h2 className="text-3xl font-black uppercase flex items-center gap-3 mb-12">
              <Briefcase className="text-[#D83B7D]" size={28} /> Experience
            </h2>
            <div className="relative pl-10 border-l-4 border-slate-100 ml-3 py-2">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#D83B7D] rounded-full border-4 border-white" />
              <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Frontend Developer</h3>
              <p className="text-[#D83B7D] font-black text-[10px] uppercase tracking-[0.3em] mt-1 mb-4">IDUNNO COMPANY | 2024 - PRESENT</p>
              <p className="text-slate-500 leading-relaxed font-medium italic">
                Developed portfolio websites and interactive web apps. 
                Focused on component-based architecture and state management in React.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase flex items-center gap-3 mb-12">
              <Book className="text-[#D83B7D]" size={28} /> Education
            </h2>
            <div className="space-y-12">
              <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:border-pink-200 transition-all">
                <h3 className="text-xl font-black uppercase tracking-tight">Associate in Computer Technology</h3>
                <p className="text-[#D83B7D] font-black text-xs mt-1 mb-6 uppercase tracking-widest">Major in Software Development</p>
                <p className="font-bold text-slate-700 text-lg">University of San Jose - Recoletos</p>
                <div className="mt-8 flex items-center gap-4">
                  <a href="https://www.usjr.edu.ph/" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    Official Site <ExternalLink size={12} />
                  </a>
                  <span className="text-[10px] font-black text-slate-400 border px-4 py-2 rounded-lg uppercase tracking-widest">Graduating 2026</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black uppercase flex items-center gap-3 mb-12">
              <Award className="text-[#D83B7D]" size={28} /> Certificates
            </h2>
            <div className="grid gap-4">
              {["Data Analytics (Google)", "React.js Essentials", "JS Advanced Concepts"].map((cert) => (
                <div key={cert} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:shadow-pink-50 transition-all group">
                  <h4 className="font-black text-slate-800 uppercase tracking-tight group-hover:text-[#D83B7D] transition-colors">{cert}</h4>
                  <Award className="text-slate-200 group-hover:text-[#D83B7D] transition-colors" size={24} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="py-20 text-center border-t border-slate-100">
        <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.6em]">
          © 2026 Seth Andrey Jabagat • Built with Vite & Tailwind
        </p>
      </footer>
    </div>
  );
};

export default Profile;