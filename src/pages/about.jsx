import React from "react";
import style from "../styles/about.module.css";
import { motion, Variants } from "framer-motion";
import arjunImg from "./Images/avatar.jpg";
import Button from "../components/button/button";
import { useBreakpointValue } from "@chakra-ui/react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const textAnimate = {
    offscreen: { y: +20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div id="about" className={`about section ${style.about2}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="ABOUT"
      >
        ABOUT
      </motion.h2>
      <div className={`${style.container}`}>
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
        <div className={`${style.rightDdiv}`}>
          <div>
            <p className={`${style.my_desc}`} >
              An enthusiastic Full Stack Web Developer with a strong set of
              technical as well as non-technical skills and a dedication towards
              creating useful and interactive web applications using MERN stack.
            </p>
            <div className={style.card_container}>
              <div className={style.card}>
                <motion.div
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  variants={textAnimate}
                >
                  <h1>
                    <span>1,200+</span>
                  </h1>
                  <h2>Hours of Coding</h2>
                </motion.div>
              </div>
              <div className={style.card}>
                <motion.div
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  variants={textAnimate}
                >
                  <h1>
                    <span>1,000+</span>
                  </h1>
                  <h2>Hours of DSA</h2>
                </motion.div>
              </div>
              <div className={style.card}>
                <motion.div
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  variants={textAnimate}
                >
                  <h1>
                    <span>3+</span>
                  </h1>
                  <h2>Projects</h2>
                </motion.div>
              </div>
            </div>
            <div className={style.skill_div}>
              <div>
                {" "}
                <p className="d-flex align-items-center gap-md-2 gap-sm-1">
                  {" "}
                  <span>
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Problem Solving
                </p>
              </div>
              <div>
                {" "}
                <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                  {" "}
                  <span>
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Adaptability
                 
                </p>{" "}
              </div>
              <div>
                {" "}
                <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                  {" "}
                  <span>
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Time management
                </p>{" "}
              </div>
              <div>
                {" "}
                <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                  {" "}
                  <span>
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Team worker
                </p>{" "}
              </div>
            </div>

            <a
              className="resume active me-5"
              aria-current="page"
              target="_blank"
              href="https://drive.google.com/file/d/1g1p0r_ZLrjd9HtU44ZRflT0ZjvDOirkY/view?usp=drive_link"
            >
              <Button text="Resume" id="resume-button-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <table>
<tbody>
  <tr>
    <td>Name : </td>
    <td>Arjun Dangi</td>
  </tr>
  <tr>
    <td>Date of Birth : </td>
    <td>February 01, 2003</td>
  </tr>
  <tr>
    <td>Address : </td>
    <td>Indore, Madhya Pradesh</td>
  </tr>
  <tr>
    <td>Zip Code : </td>
    <td>453001</td>
  </tr>
  <tr>
    <td>Email : </td>
    <td>arjundangi907473@gmail.com</td>
  </tr>
  <tr>
    <td>Mobile : </td>
    <td>+91 8349831395</td>
  </tr>
</tbody>
</table> */
}
