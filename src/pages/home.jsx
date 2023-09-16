import React from "react";
import style from "../styles/home.module.css";
import arjunImg from "./Images/avatar.jpg";
import Typewriter from "typewriter-effect";
import { motion, Variants } from "framer-motion";
import Button from "../components/button/button";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
const Home = () => {
  const textAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
  };
  return (
    <div id={`${style.home}`}>
      <div className={style.container}>
        <motion.div
          initial={"offscreen"}
          animate={"onscreen"}
          variants={textAnimate}
        >
          <div className="left-div">
            <h2 className={`${style.animated_text} ${style.h_text}}`}>
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
              I am <span className={`${style.h_text}`}>Arjun Dangi</span>{" "}
            </h1>
            <h1 id="user-detail-intro">Aspiring Full Stack </h1>
            <h1 className={`${style.h_text}`}>Developer</h1>
            <div>
              <Button text={<AiFillGithub />} />
              <Button text={<AiFillLinkedin />} />
              <Button text={<AiOutlineMail />} />
            </div>
          </div>
        </motion.div>
        <div className="right-div">
          <img className={`${style.home_img}`} src={arjunImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
