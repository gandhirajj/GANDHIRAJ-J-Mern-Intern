import React from 'react'
import './project.css';
export const Achivements = () => {
  return (
    <div className="container">
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
