import React from "react";
import Project from "../components/project";
import style from "../styles/projects.module.css";
import glossierImg from "../pages/Images/gloosier.png";
import gssImg from "./Images/gloosier s.png";
import myntraImg from "./Images/myntra.png";
import myntraS from "./Images/myntra small.png";
import travelImg from "./Images/travelious.png";
import travelS from "./Images/travelious s.png";
import medium from "./Images/medium .png";
import mediumS from "./Images/medium_s.png";
import portfolio from "./Images/portfolio.png";
import portfolio_small from "./Images/port f.png";

import { motion, Variants } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Travelious",
    subTitle: "A Full Stack travel booking website",
    img1: travelImg,
    img2: travelS,
    desc: "Build a travel website in 7 days along with a team of 5 members.",
    techUsed: [
      "Node js",
      "Express",
      "MongoDB",
      "React",
      "Routing",
      "Redux",
      "Chakra-UI",
    ],
    features: [
      "Login",
      "Signup",
      "Tour Page",
      "Booking History and update facility",
      "Profile Page",
      "Payment Page",
    ],
    resp: "Build Tour API along with sort and filter functionality and worked on connecting the frontend with the backend. I also contributed to the creation of the profile page, tour detail page, and, navbar",
    git: "https://github.com/arjundangi01/Travelious",
    preview: "https://travelious-project.netlify.app/",
  },
  {
    id: 2,
    title: "Medium Clone",
    subTitle: "Medium clone using MERN stack for creating and sharing articles.",
    img1: medium,
    img2: mediumS,
    desc: "I developed a Medium clone using the MERN stack. Demonstrating my skills in web development and full-stack programming.",
    techUsed: ["React","Redux","Javascript", "Tailwind", "Node", "Express","MongoDB"],
    features: [ "Create Blog", "Update Blog","Follow User","Comment on BLog"],
    resp: "Personal MERN stack project, an individual effort",
    git: "https://github.com/arjundangi01/Medium-clone",
    preview: "https://comforting-taffy-d07f72.netlify.app/",
    
  },
  {
    id: 3,
    title: "Myntra Clone",
    subTitle: "An E-Commerce website",
    img1: myntraImg,
    img2: myntraS,
    desc: "Build clone of myntra.com in 7 days along with a team of 5 members.",
    techUsed: ["HTML", "CSS", "JavaScript", "Local Storage"],
    features: ["Login", "Signup", "Cart Page", "Checkout Page"],
    resp: "Developed the product page(Men's T-shirt), product's static pages, cart page and wishlist page",
    git: "https://github.com/arjundangi01/Myntra-Clone",
    preview: "https://gilded-vacherin-2e78d2.netlify.app/",
  },
  {
    id: 4,
    title: "Glossier Clone",
    subTitle: "An E-Commerce website for women's beauty products",
    img1: glossierImg,
    img2: gssImg,
    desc: "Build  Glossier.com in 7 days along with a team of 4 members.",
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "JSON-server",
      "Local Storage",
      "API",
    ],
    features: ["Login", "Signup", "Cart Page", "Checkout Page"],
    resp: "Developed the navbar, product page and cart page",
    git: "https://github.com/arjundangi01/Glossier-clone",
    preview: "https://celebrated-cendol-85db1c.netlify.app/",
  },
  
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
        {data.map((ele, ind) => (
          <Project key={ele.id} {...ele} ind={ind} />
        ))}

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
