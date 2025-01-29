import React from 'react'

export const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-grid">
        <div className="skills-card">
          <h2>Languages</h2>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skills-card">
          <h2>Database</h2>
          <ul>
            <li>MySQL</li>
            <li>NoSQL</li>
          </ul>
        </div>
        <div className="skills-card">
          <h2>Tools & Platforms</h2>
          <ul>
            <li>GitHub</li>
            <li>Canva</li>
            <li>GIT</li>
            <li>PyCharm</li>
            <li>VS Code</li>
            <li>IDLE-Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
};