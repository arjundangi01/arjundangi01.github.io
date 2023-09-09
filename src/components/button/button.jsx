import React from "react";
import style from './button.module.css'

const Button = ({text}) => {
  return (
    <button className={`project-github-link ${style.button}`}>
          <span className={style.buttonContent}>{text}</span>
    </button>
  );
};

export default Button;
