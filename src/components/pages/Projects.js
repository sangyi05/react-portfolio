import React from "react";
import runBuddy from "../../assets/images/run-buddy.png"
import weatherDash from "../../assets/images/weather.png"
import dayScheduler from "../../assets/images/day-scheduler.png"
import horiseon from "../../assets/images/horiseon.png"
import safePassage from "../../assets/images/safe-passage.png"
import cornstocks from "../../assets/images/cornstocks.png"

const Projects = () => (
  <div>
    <h1>Portfolio</h1>
    <div>
      <img src={runBuddy}></img>
      <a href="https://sangyi05.github.io/run-buddy/">Run Buddy Website</a>
      <a href="https://github.com/sangyi05/run-buddy">Run Buddy GitHub</a>
    </div>
    <div>
      <img src={weatherDash}></img>
      <a href="https://sangyi05.github.io/weather-dashboard/">Weather Dashboard Website</a>
      <a href="https://github.com/sangyi05/weather-dashboard">Weather Dashboard GitHub</a>
    </div>
    <div>
      <img src={dayScheduler}></img>
      <a href="https://sangyi05.github.io/day-scheduler/">Day Scheduler Website</a>
      <a href="https://github.com/sangyi05/day-scheduler">Day Scheduler GitHub</a>
    </div>
    <div>
      <img src={horiseon}></img>
      <a href="https://sangyi05.github.io/horiseon-marketing/">Horiseon Marketing Website</a>
      <a href="https://github.com/sangyi05/horiseon-marketing">Horiseon Marketing GitHub</a>
    </div>
    <div>
      <img src={safePassage}></img>
      <a href="https://jaderiver62.github.io/safe-passage/">Safe Passage Website</a>
      <a href="https://github.com/jaderiver62/safe-passage">Safe Passage GitHub</a>
    </div>
    <div>
      <img src={cornstocks}></img>
      <a href="https://cornstocks-10-team.herokuapp.com/">Cornstocks Website</a>
      <a href="https://github.com/subin-su/Project02-Requirements">Cornstocks GitHub</a>
    </div>
  </div>
);

export default Projects;
