import React from 'react';
import { Mail, Github, Globe } from 'lucide-react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGithub, 
  FaNodeJs, 
  FaPhp, 
  FaLaravel 
} from 'react-icons/fa';

import { 
  SiDocker, 
  SiNginx, 
  SiElasticsearch 
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
  { name: 'PHP', icon: <FaPhp />, color: 'text-indigo-600' },
  { name: 'Laravel', icon: <FaLaravel />, color: 'text-red-500' },
  { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
  { name: 'Nginx', icon: <SiNginx />, color: 'text-emerald-500' },
  { name: 'Elasticsearch', icon: <SiElasticsearch />, color: 'text-blue-400' },
  { name: 'Git & GitHub', icon: <FaGithub />, color: 'text-slate-800' },
];

const softSkills = [
  'Problem Solving', 'Creativity', 'Critical Thinking'
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        
        {/* --- ABOUT SECTION --- */}
        <section id="about" className="grid md:grid-cols-2 gap-16 items-start">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-b-[10px] border-[--brand-pink]">
             <img 
              src="braylii.svg" 
              alt="Bryle Suquib Solon " 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div className="space-y-6 pt-4">
            <h2 className="section-title text-[--brand-pink]">
              About <span className="title-accent"></span>
            </h2>
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">
              Bryle <br/> <span className="text-slate-300">Solon</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Results-driven Associate in Computer Technology student and CLI enthusiast seeking a position that leverages my technical skills . Hands-on experience with Linux (Arch/Debian)  and Docker for deploying reproducible environments, including MySQL Master-Slave replication and Nginx configurations. Proven ability to automate workflows—reducing task completion times by 80% and dedicated to applying a disciplined, problem-solving approach  to real-world infrastructure challenges.
            </p>
            
            <div className="space-y-4 pt-4">
              <ContactLink icon={<Mail size={18}/>} text="tiredofbeggingshyt@gmail.com" />
              <ContactLink icon={<Github size={18}/>} text="github.com/tiredshyt" />
              <ContactLink icon={<Globe size={18}/>} text="Cebu, Philippines" />
            </div>

            <button className="btn-brand mt-4">Download Resume</button>
          </div>
        </section>

        {/* --- SKILLS & CERTIFICATIONS --- */}
        <section id="skill">
          <h2 className="section-title">
            Expertise <span className="title-accent"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h3 className="bg-[--skill-highlight] border-l-4 border-[--skill-accent] px-4 py-2 font-black text-[10px] uppercase tracking-widest mb-6">Technical Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                    <span className={skill.color}>{skill.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
       
          </div>
        </section>

        {/* --- BACKGROUND SECTION --- */}
        <section id="background" className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="section-title text-slate-800">Education <span className="title-accent"></span></h2>
            <div className="space-y-0">
              <TimelineItem 
                date="2023 - 2026"
                title="Associate in Computer Technology"
                sub="University of San Jose - Recoletos"
                desc="Major in Software Development. Focused on Software and Web development."
              />
           
            </div>
          </div>

          <div>
            <h2 className="section-title text-slate-800">Experience <span className="title-accent"></span></h2>
            <div className="space-y-0">
              <TimelineItem 
                date="Summer of 2022"
                title="ML Music Editor"
                sub="Side Project out of boredom"
                desc="Developed an integrated web application that streamlines audio replacement, reducing task completion time from 5 minutes to 1 minute."
              />
              <TimelineItem 
                date="Sep 2025 - Nov 2025"
                title="CodeRED Placer: A Hackathon Against OSAEC"
                sub="Bidlisiw Foundation Hackathon"
                desc="Developed a centralized database architecture to synchronize real-time reports across multiple Local Government Units (LGUs) to combat OSAEC.
"
              />
             
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-slate-50">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
          © 2026 Bryle Solon • Built with React
        </div>
      </footer>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const ContactLink = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-[--brand-pink] transition-colors cursor-pointer">
    <span className="text-[--brand-pink]">{icon}</span>
    {text}
  </div>
);

const CertItem = ({ title, org }) => (
  <div className="flex items-center justify-between p-2 border-b border-slate-100">
    <span className="text-[10px] font-bold uppercase">{title}</span>
    <span className="text-[9px] font-black text-slate-400 uppercase">{org}</span>
  </div>
);

const TimelineItem = ({ date, title, sub, desc }) => (
  <div className="relative pl-10 pb-12 border-l-2 border-slate-100 last:border-0 group">
    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-[--brand-pink] bg-white group-hover:bg-[--brand-pink] transition-colors duration-300"></div>
    <div className="bg-slate-100 px-3 py-1 rounded text-[9px] font-black text-slate-400 uppercase inline-block mb-3 tracking-widest">
      {date}
    </div>
    <h4 className="font-bold text-slate-900 text-lg leading-tight uppercase tracking-tighter">{title}</h4>
    <p className="text-[--brand-pink] text-xs font-bold italic mt-1 uppercase">{sub}</p>
    <p className="text-slate-500 text-sm mt-3 leading-relaxed">{desc}</p>
  </div>
);

export default Profile;