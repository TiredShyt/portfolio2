import React from 'react';
import { Mail, Github, Code, Book, Briefcase, User, Award, ExternalLink, Phone, CheckCircle } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub as FaGithubIcon, FaJava, FaDatabase } from "react-icons/fa";
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
  'Responsive Design', 'UI/UX Principles', 'Agile Methodologies', 
  'RESTful APIs', 'Testing & Debugging', 'Problem Solving', 'Communication'
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* HEADER SECTION */}
      <header className="py-20 px-6 border-b border-slate-100 text-center bg-slate-50">
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          Seth Andrey <span className="text-[#D83B7D]">Jabagat</span>
        </h1>
        <p className="text-slate-400 font-bold tracking-[0.3em] uppercase text-xs mb-8">
          Software Developer • Major in Software Development
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="mailto:sethandreyjabagat@gmail.com" className="flex items-center gap-2 hover:text-[#D83B7D] transition-colors">
            <Mail size={18} className="text-[#D83B7D]" /> sethandreyjabagat@gmail.com
          </a>
          <a href="https://github.com/gsi78eywh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D83B7D] transition-colors">
            <Github size={18} className="text-[#D83B7D]" /> github.com/gsi78eywh
            
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN */}
        <div className="md:col-span-5 space-y-16">
          {/* ABOUT */}
          <section>
            <div className="relative mb-8">
              <h2 className="text-3xl font-bold italic uppercase flex items-center gap-3">
                <User className="text-[#D83B7D]" size={28} /> About Me
              </h2>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-[#D83B7D]"></div>
            </div>
            <p className="text-lg leading-relaxed text-slate-500">
              Passionate frontend developer focused on building simple, clean, and
              user-friendly web applications using React. Dedicated to writing 
              efficient code and continuous learning in the IT field.
            </p>
            <button className="mt-8 bg-[#D83B7D] text-white px-8 py-3 rounded-full font-bold hover:bg-[#8B1A4F] transition-all shadow-lg shadow-pink-100">
              Download CV
            </button>
          </section>

          {/* TECHNICAL SKILLS */}
          <section>
            <div className="relative mb-8">
              <h2 className="text-3xl font-bold italic uppercase flex items-center gap-3">
                <Code className="text-[#D83B7D]" size={28} /> Tech Stack
              </h2>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-[#D83B7D]"></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
                  <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                  <span className="font-bold text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SOFT SKILLS & PRINCIPLES */}
          <section>
            <div className="relative mb-8">
              <h2 className="text-2xl font-bold italic uppercase flex items-center gap-3">
                <CheckCircle className="text-[#D83B7D]" size={24} /> Principles
              </h2>
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#D83B7D]"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="bg-slate-50 text-slate-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border border-slate-200">
                  {s}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-7 space-y-16">
          
          {/* EXPERIENCE */}
          <section>
            <h2 className="text-3xl font-bold uppercase flex items-center gap-3 mb-10">
              <Briefcase className="text-[#D83B7D]" size={28} /> Experience
            </h2>
            <div className="relative pl-8 border-l-2 border-slate-100 ml-3">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#D83B7D] rounded-full border-4 border-white shadow-sm" />
              <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Frontend Developer</h3>
              <p className="text-[#D83B7D] font-black text-xs uppercase tracking-[0.2em] mb-4">IDUNNO COMPANY | 2024 - Present</p>
              <p className="text-slate-500 leading-relaxed italic">
                Developed portfolio websites and interactive web apps. 
                Focused on component-based architecture and state management in React.
              </p>
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <h2 className="text-3xl font-bold uppercase flex items-center gap-3 mb-10">
              <Book className="text-[#D83B7D]" size={28} /> Education
            </h2>
            <div className="space-y-10">
              {/* USJR */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-pink-200 transition-colors">
                <h3 className="text-xl font-black uppercase tracking-tight">Associate in Computer Technology</h3>
                <p className="text-[#D83B7D] font-bold text-sm mt-1 mb-4">Major in Software Development</p>
                <p className="font-bold text-slate-700">University of San Jose - Recoletos</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a href="https://www.usjr.edu.ph/" target="_blank" className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                    USJR.EDU.PH <ExternalLink size={14} />
                  </a>
                  <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full border tracking-widest">EXP. 2026</span>
                </div>
              </div>

              {/* SHS */}
              <div className="pl-8 border-l-2 border-slate-100 ml-3 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-200 rounded-full border-4 border-white" />
                <h3 className="text-lg font-black uppercase tracking-tight">Senior High School</h3>
                <p className="text-slate-500 font-medium">HUMSS - Mantalongon National High School</p>
                <a href="https://mantalongonnationalschool.com/" target="_blank" className="text-xs font-bold text-blue-600 hover:underline mt-2 inline-block">
                  Visit School Website
                </a>
              </div>
            </div>
          </section>

          {/* CERTIFICATES */}
          <section>
            <h2 className="text-3xl font-bold uppercase flex items-center gap-3 mb-10">
              <Award className="text-[#D83B7D]" size={28} /> Certificates
            </h2>
            <div className="grid gap-4">
              {[
                { title: "Data Analytics", issuer: "Google Coursera" },
                { title: "React.js Essentials", issuer: "Online Certification" },
                { title: "JS Advanced Concepts", issuer: "Dev Institute" }
              ].map((cert) => (
                <div key={cert.title} className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase tracking-tight">{cert.title}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase">{cert.issuer}</p>
                  </div>
                  <Award className="text-slate-200" size={20} />
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <footer className="py-16 text-center text-slate-300 text-[10px] font-black uppercase tracking-[0.5em] border-t">
        © 2026 Seth Andrey Jabagat • Built with React & Tailwind
      </footer>
    </div>
  );
};

export default Profile;