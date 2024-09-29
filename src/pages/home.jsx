import React, { useState } from "react";
import style from "../styles/home.module.css";
import arjunImg from "./Images/avatar.jpg";
import Typewriter from "typewriter-effect";
import { motion, Variants } from "framer-motion";
import Button from "../components/button/button";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { useBreakpointValue } from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";
import "../index.css";
// import style from "../styles/about.module.css";

const Home = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });

  const textAnimate = {
    offscreen: variant ? { x: 0, opacity: 0 } : { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
  };
  const [[flipVertically, flipHorizontally], toggleFlip] = useState([
    false,
    false,
  ]);
  // hello world
  return (
    <div id="home" className={style.home}>
      <div className={style.container}>
        <motion.div
          initial={"offscreen"}
          animate={"onscreen"}
          variants={textAnimate}
        >
          <div className={style.left_div}>
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
            <h1 id="user-detail-intro"> Full Stack </h1>
            <h1 className={`${style.h_text}`}>Developer @ Byldd</h1>
            <div className="d-flex gap-2">
              <a href="https://github.com/arjundangi01" target="blank">
                <Button text={<AiFillGithub />} />
              </a>
              <a href="https://www.linkedin.com/in/arjun-dangi/" target="blank">
                <Button text={<AiFillLinkedin />} />
              </a>
              <a href="mailto:arjundangi907473@gmail.com">
                <Button text={<AiOutlineMail />} />
              </a>
            </div>
          </div>
        </motion.div>
        {/* <div className={`${style.right_div}`}> */}
          {/* <img className={`${style.home_img}`} src={arjunImg} alt="" /> */}
          <div className={`${style.leftDiv}`}>
            {/* <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="" /> */}
            <motion.div
              initial={{ y: 0, x: 0 }}
              whileHover={{ y: 10, x: 10 }}
              className={style.back_div}
            >
              <motion.div
                initial={{ y: -20, x: -20 }}
                whileHover={{ y: -40, x: -40 }}
              >
                <img className="home-img" src={arjunImg} alt="" />
              </motion.div>
            </motion.div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
