import React from "react";
import style from "./button.module.css";
import { motion, Variants } from "framer-motion";


const Button = ({ text, id }) => {
  const onclick = () => {
    
  }
  return (
    <motion.div className={style.btn_back_div}>
      <motion.div initial={{ y: 0, x: 0 }} whileHover={{ y: -4, x: -4 }}>
       
        <button className={style.button} id={id}>
          <span className={style.buttonContent}>{text} </span>
        </button>
        
        
      </motion.div>
    </motion.div>
  );
};

export default Button;
