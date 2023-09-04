import React from "react";
import style from "../styles/contact.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
const Contact = () => {
  return (
    <div id="contact" className={`${style.contact}`}>
      <div className={`${style.container}`}>
        <a href="https://github.com/arjundangi01" target="blank" >
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
        {/*  */}
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
        {/*  */}
        <a href="">
          <div id="contact-email" className={`${style.card}`}>
            <div className={`${style.icon}`}>
              <AiOutlineMail />
            </div>
            <div className={`${style.desc}`}>
              <h5>Linkdin</h5>
              <p>arjundangi907473@gmail.com</p>
            </div>
          </div>
        </a>
        {/*  */}
        <a href="">
          <div  id="contact-phone" className={`${style.card}`}>
            <div className={`${style.icon}`}>
              <AiOutlinePhone />
            </div>
            <div className={`${style.desc}`}>
              <h5>Phone</h5>
              <p>+91 8349831395</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
