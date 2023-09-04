import React from "react";
import style from "../styles/github.module.css"
const Github = () => {
  return (
    <div id="github" className={  `${style.github}`} >
      <div className={  `${style.container}`} >
        <div>
          <img src="https://github-profile-trophy.vercel.app/?username=arjundangi01" alt="" />
        </div>
        <div className={  `${style.top}`} >
          <div   >
            <img id="github-top-langs" src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=arjundangi01&theme=2077" alt="" />
          </div>
          <div>
            <img src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=arjundangi01&theme=2077" alt="" />
          </div>
        </div>
        <div  >
          <img id="github-stats-card" src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=arjundangi01&theme=2077" alt="" />
        </div>
        <div >
          <img  id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=arjundangi01&theme=tokyonight_duo&hide_border=true&background=DD272700" alt="" />
        </div>
        <div>
          <img class="react-activity-calendar" src="http://ghchart.rshah.org/arjundangi01" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Github;
