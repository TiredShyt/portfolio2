import React from 'react';
import { Mail, Github, Code, Book, Briefcase, User } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub as FaGithubIcon, FaJava } from "react-icons/fa";
import { SiPhp, SiC } from "react-icons/si";

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Php', 'Java', 'C',
  'React', 'Git & GitHub', 'Node.js', 'Responsive Design'
];

const skillIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  Php: <SiPhp />,
  Java: <FaJava />,
  C: <SiC />,
  React: <FaReact />,
  'Git & GitHub': <FaGithubIcon />,
  'Node.js': <FaNodeJs />,
};

const Profile = () => {
  return (
    <div className="cv-container">
      {/* Header Section */}
      <header className="cv-header">
        <h1>Seth Andrey Jabagat</h1>
        <p className="subtitle">Software Developer | IT Specialist</p>
        <div className="contact-links">
          <a href="mailto:sethandreyjabagat@gmail.com">
            <Mail size={18} /> sethandreyjabagat@gmail.com
          </a>
          <a href="https://github.com/gsi78eywh" target="_blank" rel="noopener noreferrer">
            <Github size={18} /> github.com/gsi78eywh
          </a>
        </div>
      </header>

      <div className="cv-grid">
        {/* Left Column */}
        <div className="left-col">
          <section>
            <h2><User size={22} /> About Me</h2>
            <p>
              Passionate frontend developer focused on building simple, clean, and
              user-friendly web applications using React. Dedicated to writing 
              efficient code and continuous learning in the IT field.
            </p>
          </section>

          <section>
            <h2><Code size={22} /> Skills</h2>
            <div className="skills-tags">
              {skills.map(skill => (
                <span key={skill} className="tag">
                  {skillIcons[skill]} {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="right-col">
          <section>
            <h2><Briefcase size={22} /> Experience</h2>
            <article className="experience-item">
              <h3>Frontend Developer (Projects)</h3>
              <p className="date">2023 - Present</p>
              <p>
                Developed portfolio websites and interactive web apps. 
                Focused on component-based architecture and state management in React.
              </p>
            </article>
          </section>

          <section>
            <h2><Book size={22} /> Education</h2>
            <article className="education-item">
              <h3>Associate in Computer Technology - Major in Software Development</h3>
              <p>College Level</p>
            </article>
            <article className="education-item">
              <h3>Senior High School</h3>
              <p>HUMMS - MANTALONGON NATION HIGH SCHOOL</p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
