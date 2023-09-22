import React from "react";
import style from "../styles/github.module.css";
import { motion, Variants } from "framer-motion";
import { useBreakpointValue } from "@chakra-ui/react";
const Github = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  console.log(variant);
  return (
    <div id="github" className={`${style.github}`}>
         <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="PROJECTS"
      >
        PROJECTS
      </motion.h2>
      <div className={`${style.container}`}>
   
        <div>
          <img
            src="https://github-profile-trophy.vercel.app/?username=arjundangi01"
            alt=""
          />
        </div>
        <div className={`${style.top}`}>
          <div>
            {/* <motion.img
            initial={     { x: 300, opacity: 0 }      }
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -5 }}
            // viewport={{ once: false, amount: .7 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=arjundangi01&layout=donut"
            alt=""
            /> */}
            <motion.div
              initial={
                variant ? { x: "100%", opacity: 0 } : { x: 300, opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ y: -5 }}
              // viewport={{ once: false, amount: .7 }}
              transition={{ duration: 1, type: "spring", stiffness: 200 }}
            >
              <img
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=arjundangi01&layout=donut"
                alt=""
              />
            </motion.div>
          </div>
          <div>
            {/* <motion.img
            initial={   { x: -300, opacity: 0 }  }
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -5 }}
            // viewport={{ once: false, amount: .4 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}
            src="https://github-readme-stats.vercel.app/api?username=arjundangi01&show_icons=true"
            alt=""
            /> */}
            <motion.div
              initial={
                variant ? { x: "-100%", opacity: 0 } : { x: -300, opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ y: -5 }}
              // viewport={{ once: false, amount: .4 }}
              transition={{ duration: 1, type: "spring", stiffness: 200 }}
            >
              <img
                id="github-stats-card"
                height="214"
                src="https://github-readme-stats.vercel.app/api?username=arjundangi01&show_icons=true"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div>
          {/* <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, rotateX: [0, 360] }}
            whileHover={{ y: -5 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 1 }}
            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=arjundangi01&theme=2077"
            alt=""
          /> */}
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1, rotateX: [0, 360] }}
            whileHover={{ y: -5 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 1 }}
          >
            <img
              src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=arjundangi01&theme=2077"
              alt=""
            />
          </motion.div>
        </div>
        <div>
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=arjundangi01&theme=tokyonight_duo&hide_border=true&background=DD272700"
            alt=""
          />
        </div>
        <div>
          <img
            class="react-activity-calendar"
            src="http://ghchart.rshah.org/arjundangi01"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Github;
