import React from "react";
import style from "../styles/contact.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { motion, Variants } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className={`${style.contact}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ once: true, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="Contact"
      >
        Contact
      </motion.h2>
      <div className={`${style.container}`}>
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: false, amount: 1 }}
          // transition={{
          //   duration: 0.5,
          // }}
        >
          <a href="https://github.com/arjundangi01" target="blank">
            <div id="contact-github" className={`${style.card}`}>
              <div className={`${style.icon}`}>
                <AiFillGithub />
              </div>
              <div className={`${style.desc}`}>
                <h5>Github</h5>
                <p>arjundangi01</p>
              </div>
            </div>
          </a>
          </motion.div>
        {/*  */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: false, amount: 1 }}
          // transition={{
          //   duration: 0.5,
          // }}
        >
          <a href="https://www.linkedin.com/in/arjun-dangi/" target="blank">
            <div id="contact-linkedin" className={`${style.card}`}>
              <div className={`${style.icon}`}>
                <AiFillLinkedin />
              </div>
              <div className={`${style.desc}`}>
                <h5>Linkedin</h5>
                <p>arjun-dangi</p>
              </div>
            </div>
          </a>
          </motion.div>
        {/*  */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: false, amount: 1 }}
          // transition={{
          //   duration: 0.5,
          // }}
        >
        <a href="">
          <div id="contact-email" className={`${style.card}`}>
            <div className={`${style.icon}`}>
              <AiOutlineMail />
            </div>
            <div className={`${style.desc}`}>
              <h5>E-Mail</h5>
              <p>arjundangi907473@gmail.com</p>
            </div>
          </div>
        </a>
        </motion.div>
        {/*  */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: false, amount: 1 }}
          // transition={{
          //   duration: 0.5,
          // }}
        >
        <a href="">
          <div id="contact-phone" className={`${style.card}`}>
            <div className={`${style.icon}`}>
              <AiOutlinePhone />
            </div>
            <div className={`${style.desc}`}>
              <h5>Phone</h5>
              <p>+91 8349831395</p>
            </div>
          </div>
          </a>
          </motion.div>
      </div>
    </div>
  );
};

export default Contact;
