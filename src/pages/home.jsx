import React from "react";
import "../styles/home.css";
import arjunImg from "./Images/avatar.jpg";
import Typewriter from "typewriter-effect";
import { motion, Variants } from "framer-motion";
const Home = () => {
  const textAnimate = {
    offscreen: { x: -100 },
    onscreen: {
      x: 0,
      transition: { duration: 2 },
    },
  };
  return (
    <div id="home">
      <div className="container">
        <motion.div
          initial={"offscreen"}
          animate={"onscreen"}
          variants={textAnimate}
        >
          <div className="left-div">
            <h2 className="animated-text h-text">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 65,
                  deleteSpeed: 55,

                  cursor: "|",

                  typeString: "A simple yet powerful native javascript",
                  strings: ["Hello 👋", "Hii 👋", "Namaste 🙏"],
                }}
              />
            </h2>
           
              <h1 id="user-detail-name">
                I am <span className="h-text">Arjun Dangi</span>{" "}
              </h1>
              <h1 id="user-detail-intro">Aspiring Full Stack </h1>
              <h1 className="h-text">Developer</h1>
          
          </div>
        </motion.div>
        <div className="right-div">
          <img className="home-img" src={arjunImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
