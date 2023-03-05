import React from "react";
import "../Gitstat/Gitstat.css";

export const Gitstat = () => {
  return (
    <div>
      <div className="box1">
        <a href="https://github.com/HIMANSHUMISHRA389">
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=HIMANSHUMISHRA389"
            alt="streak"
          />
        </a>
      </div>

      <div className="box2">
        <a href="https://github.com/HIMANSHUMISHRA389">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=HIMANSHUMISHRA389"
            alt="stats"
          />
        </a>
        <a href="https://github.com/HIMANSHUMISHRA389">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=HIMANSHUMISHRA389&count_private=true&show_icons=true"
            alt="stats"
          />
        </a>
      </div>
    </div>
  );
};
