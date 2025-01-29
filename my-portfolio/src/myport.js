import React from 'react'

export const Home = () => {
  return (
    <div className="aboutme-container">
      
      <h1 className="aboutme-title">About Me - GANDHIRAJ J -AIML</h1>
      <br></br>
      <p className="aboutme-description">
         I'm Gandhiraj, a passionate Computer Science student at Sri Eshwar College of Engineering, specializing in Artificial Intelligence and Machine Learning. I have a strong foundation in programming languages like Python, C, C++, HTML, CSS, and JavaScript. 
        <br />
        <br />
        I am constantly working on improving my skills and staying updated with the latest trends in technology. I love solving problems, participating in hackathons, and taking on challenges in data structures, algorithms, and AI. 
        <br />
      </p>
       


      <div className="education-container">
      <h1 className="education-title">Education</h1>
      <div className="education-details">
        <div className="education-card">
          <h2>Sri Eshwar College of Engineering</h2>
          <p>B.E. CSE (AIML) – CGPA: 8.05 (2023–2027)</p>
        </div>
        <div className="education-card">
          <h2>Suraj Matric Hr. Sec. School</h2>
          <p>HSC – 85.67% (2021–2023)</p>
        </div>
        <div className="education-card">
        <h2>Suraj Matric Hr. Sec. School</h2>
        <p>SSLC – PASS (2020–2021)</p>
        </div>
      </div>
    </div>

    <h1 className="title">My Projects</h1>
        <div className="grid">
          <div className="card">
            <h2>Brain Tumor Prediction</h2>
            <p>
              A Python-based project utilizing TensorFlow and NumPy to classify MRI scans as tumor or non-tumor. Image augmentation is achieved using ImageDataGenerator.
            </p>
          </div>
          <div className="card">
            <h2>Sign Language Converter</h2>
            <p>
              A machine learning model using CNNs or RNNs to recognize hand gestures and translate them into text or speech, enabling real-time communication.
            </p>
          </div>
          <div className="card">
            <h2>Bank Management System</h2>
            <p>
              A console-based application built in C to simulate basic banking operations and manage customer accounts efficiently.
            </p>
          </div>
          <div className="card">
            <h2>Movie Review System</h2>
            <p>
              A Python application using Tkinter and speech recognition, allowing users to input and submit movie reviews by typing or speaking.
            </p>
          </div>
        </div>

        <h1 className="certification-title">Certifications</h1>
        <div className="certification-box">
          <ul>
            <li>Fundamentals of Generative AI – GUVI (2024)</li>
            <li>Python Matplotlib – Great Learning (2024)</li>
            <li>Pandas – Kaggle (2024)</li>
            <li>The Complete C Development Course – Udemy (2024)</li>
            <li>Mastering Data Structures and Algorithms Using C – Udemy (2024)</li>
          </ul>
        </div>

    
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

        <h1 className="title">Achievements</h1>
        <div className="grid">
          <div className="card">
            <h2>HackerRank</h2>
            <p>
            <ul>
              <li>4-star in Python</li>
              <li>3-star in C++</li>
              <li>2-star in C</li>
              <li>1-star in SQL</li>
            </ul>
            </p>
          </div>
          <div className="card">
            <h2>LeetCode</h2>
            <p>Solved 150+ problems (Rank: 655,845)</p>
          </div>
          <div className="card">
            <h2>Hackathon</h2>
            <p>Top 5 finalist in PSG College-level hackathon (2024)</p>
          </div>
          <div className="card">
            <h2>AI Workshop</h2>
            <p>Participated in CIT Coimbatore Workshop for Artificial Intelligence</p>
          </div>
        </div>

    </div>
  );
};

