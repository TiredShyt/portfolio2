import React from 'react';
import { Mail, Github, Code, Book, Briefcase, User } from 'lucide-react';


const Profile = () => {
  return (
    <div className="cv-container">
      {/* Header Section */}
      <header className="cv-header">
        <h1>Seth Andrey Jabagat</h1>
        <p className="subtitle">Software Developer | IT Specialist</p>
        <div className="contact-links">
          <span><Mail size={18} /> sethandreyjabagat@gmail.com</span>
          <span><Github size={18} /> github.com/gsi78eywh
</span>
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
              {['HTML', 'CSS', 'JavaScript', 'React', 'Git & GitHub', 'Node.js', 'Responsive Design'].map(skill => (
                <span key={skill} className="tag">{skill}</span>
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
              <h3>Bachelor of Science in Information Technology</h3>
              <p>College Level</p>
            </article>
            <article className="education-item">
              <h3>Senior High School</h3>
              <p>TVL - ICT Strand</p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;