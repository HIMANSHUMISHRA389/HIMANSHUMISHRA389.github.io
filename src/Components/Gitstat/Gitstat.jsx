import React from "react";
import "../Gitstat/Gitstat.css";

export const Gitstat = () => {
  return (
    <section className="gitstat-container">
      <div className="gitstat-header">
        <h2>GitHub Statistics</h2>
        <p>A snapshot of my coding activity and language proficiency</p>
      </div>
      
      <div className="gitstat-wrapper">
        <div className="gitstat-card streak-card">
          <h3>Contribution Streak</h3>
          <a href="https://github.com/HIMANSHUMISHRA389" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=HIMANSHUMISHRA389&theme=radical&hide_border=true"
              alt="GitHub streak stats"
              className="gitstat-img"
            />
          </a>
        </div>
        
        <div className="gitstat-card lang-card">
          <h3>Top Languages</h3>
          <a href="https://github.com/HIMANSHUMISHRA389" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=HIMANSHUMISHRA389&layout=compact&theme=radical&hide_border=true"
              alt="Top languages used"
              className="gitstat-img"
            />
          </a>
        </div>
        
        <div className="gitstat-card stats-card">
          <h3>GitHub Stats</h3>
          <a href="https://github.com/HIMANSHUMISHRA389" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github-readme-stats.vercel.app/api?username=HIMANSHUMISHRA389&count_private=true&show_icons=true&theme=radical&hide_border=true"
              alt="GitHub stats"
              className="gitstat-img"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
