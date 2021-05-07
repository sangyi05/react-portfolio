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
      <a href="https://sangyi05.github.io/run-buddy/"><img src={runBuddy} className="img-thumbnail mx-1"></img></a>
      <a href="https://github.com/sangyi05/run-buddy">Run Buddy GitHub</a>
    </div>
    <div>
      <a href="https://sangyi05.github.io/weather-dashboard/"><img src={weatherDash} className="img-thumbnail mx-1"></img></a>
      <a href="https://github.com/sangyi05/weather-dashboard">Weather Dashboard GitHub</a>
    </div>
    <div>
      <a href="https://sangyi05.github.io/day-scheduler/"><img src={dayScheduler} className="img-thumbnail mx-1"></img></a>
      <a href="https://github.com/sangyi05/day-scheduler">Day Scheduler GitHub</a>
    </div>
    <div>
      <a href="https://sangyi05.github.io/horiseon-marketing/"><img src={horiseon} className="img-thumbnail mx-1"></img></a>
      <a href="https://github.com/sangyi05/horiseon-marketing">Horiseon Marketing GitHub</a>
    </div>
    <div>
      <a href="https://jaderiver62.github.io/safe-passage/"><img src={safePassage} className="img-thumbnail mx-1"></img></a>
      <a href="https://github.com/jaderiver62/safe-passage">Safe Passage GitHub</a>
    </div>
    <div>
      <a href="https://cornstocks-10-team.herokuapp.com/"><img src={cornstocks} className="img-thumbnail mx-1"></img></a>
      <a href="https://github.com/subin-su/Project02-Requirements">Cornstocks GitHub</a>
    </div>
  </div>
);

export default Projects;
