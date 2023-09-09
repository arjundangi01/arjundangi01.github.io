import React from "react";
import style from "../styles/about.module.css";
import { motion, Variants } from "framer-motion";
const textAnimate = {
  offscreen: { x: 100 },
  onscreen: {
    x: 10,
    transition: { duration: 2 },
  },
};

const About = () => {
  return (
    <div id="about" className={`about section ${style.about2}`}>
      <div className={`${style.container}`}>
        <div className={`${style.leftDiv}`}>
          {/* <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="" /> */}
        </div>
        <motion.div className={`${style.rightDdiv}`}  initial={"offscreen"}
          animate={"onscreen"}
          variants={textAnimate} >
        <div >
         
          {/* <p>
            An enthusiastic Full Stack Web Developer with a strong set of
            technical as well as non-technical skills and a dedication towards
            creating useful and interactive web applications using MERN stack.
          </p> */}
          <table>
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
          </table>
        
          <a
            className="nav-link resume active me-5"
            aria-current="page"
            target="_blank"
            href="https://drive.google.com/u/0/uc?id=1ac9QC_NaLOMpNl9UpMvkjwPP7uW9c5ps&export=download"
          >
            <button id="resume-button-2" >RESUME</button>
            </a>
           
          </div>
          </motion.div>
      </div>
    </div>
  );
};

export default About;
