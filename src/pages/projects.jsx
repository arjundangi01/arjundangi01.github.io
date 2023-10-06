import React from "react";
import Project from "../components/project";
import style from "../styles/projects.module.css";
import glossierImg from "../pages/Images/gloosier.png";
import gssImg from "./Images/gloosier s.png";
import myntraImg from "./Images/myntra.png";
import myntraS from "./Images/myntra small.png";
import travelImg from "./Images/travelious.png";
import travelS from "./Images/travelious s.png";
import portfolio from "./Images/portfolio.png";
import portfolio_small from "./Images/port f.png";
import { motion, Variants } from "framer-motion";

const data = [
  {
    id:1,
    title: "Travelious",
    subTitle: "A user specific travel booking website build in react",
    img1: travelImg,
    img2: travelS,
    desc: "Build a travel website in 7 days along with a team of 5 members.",
    techUsed: ["React", "Routing", "JavaScript", "Redux","API","auth0"],
    features: ["Login", "Signup", "Booking History and update facility" , "Profile Page", "Checkout Page"],
    resp: " Integrated auth0 and developed the profile page, tour detail page and, navbar",
    git: "https://github.com/arjundangi01/Travelious",
    preview:"https://travelious-project.netlify.app/"
  },
  {
    id:2,
    title: "Myntra Clone",
    subTitle: "An E-Commerce website",
    img1: myntraImg,
    img2: myntraS,
    desc: "Build clone of myntra.com in 7 days along with a team of 5 members.",
    techUsed: ["HTML", "CSS", "JavaScript", "Local Storage"],
    features: ["Login", "Signup", "Cart Page", "Checkout Page"],
    resp: "Developed the product page(Men's T-shirt), product's static pages, cart page and wishlist page",
    git: "https://github.com/arjundangi01/Myntra-Clone",
    preview:"https://gilded-vacherin-2e78d2.netlify.app/"
  },
  {
    id:3,
    title: "Glossier Clone",
    subTitle: "An E-Commerce website",
    img1: glossierImg,
    img2: gssImg,
    desc: "Build  Glossier.com in 7 days along with a team of 4 members.",
    techUsed: ["HTML", "CSS", "JavaScript", "Local Storage","API"],
    features: ["Login", "Signup", "Cart Page", "Checkout Page"],
    resp: "Developed the navbar, product page and cart page",
    git: "https://github.com/arjundangi01/Glossier-clone",
    preview:"https://celebrated-cendol-85db1c.netlify.app/"
  },
  {
    id:4,
    title: "Portfolio",
    subTitle: "",
    img1: portfolio,
    img2: portfolio_small,
    desc: "This is my portfolio built in react",
    techUsed: ["React","Framer Motion","bootstrap"],
    features: [],
    resp: "Build the whole portfolio",
    git: "https://github.com/arjundangi01/arjundangi01.github.io",
    preview:"https://arjundangi01.github.io/"
  }
  
];



const Projects = () => {
  return (
    <div id="projects" className={`  ${style.projects}`}>
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
      <div className={` ${style.container}`}>
       

        {/*  */}
        {
          data.map((ele,ind) => (
            <Project key={ele.id} {...ele} ind={ind}  />
          ))
       }

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
