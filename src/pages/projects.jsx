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
import instagramImg from "./Images/instagram.png";
import instagramSImg from "./Images/instagram_s.png";
import chatImg from './Images/chatapp.png'
import chatImgS from './Images/chat_app_s.png'
import instagramSImg2 from "./Images/insta.png";
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
    resp: "Independently Managed all aspects of the backend. In frontend, I contributed to the creation of the tour detail page, navbar, and profile page having user booking history.",
    git: "https://github.com/arjundangi01/Travelious",
    preview: "https://travelious-project.netlify.app/",
  },
  {
    id: 2,
    title: "Instagram Clone",
    subTitle:
      "A fully-featured Instagram clone built with MERN stack.",
    img1: instagramImg,
    img2: instagramSImg,
    desc: "Team of three crafted a simple, user-friendly Instagram clone for a seamless social experience",
    techUsed: [
      "React",
      "Redux",
      "Typescript",
      "Javascript",
      "Chakra-UI",
      "Node",
      "Express",
      "MongoDB",
      "Socket",
    ],
    features: [ "Login Signup", "Create Post", "Chat", "Follow User", "Comment and Like"],
    resp: "Contributed on profile page, follow and Unfollow functionality. Contributed to post route and follower routes in backend",
    git: "https://github.com/arjundangi01/Instagram-Clone",
    preview: "https://instaclonevi.netlify.app/",
  },
  {
    id: 3,
    title: "Chat App",
    subTitle:
      "A chat application built with Next Js",
    img1: chatImg,
    img2: chatImgS,
    desc: "I developed a real-time chat application for unlimited chat",
    techUsed: [
      "NextJs",
      "Redux",
      "Typescript",  
      "Tailwind Css",
      "Node",
      "Express",
      "MongoDB",
      "Socket",
    ],
    features: ["Login Signup", "Unlimited Chat", "Search User", ],
    resp: "Independently created: Managed all aspects of the project",
    git: "https://github.com/arjundangi01/Chat-App",
    preview: "https://elaborate-shortbread-8d0fc5.netlify.app/",
  },
  {
    id: 4,
    title: "Medium Clone",
    subTitle:
      "Individual project:  built a seamless Medium clone using MERN stack.",
    img1: medium,
    img2: mediumS,
    desc: "I developed a Medium clone using the MERN stack. Demonstrating my skills in web development and full-stack programming.",
    techUsed: [
      "React",
      "Redux",
      "Javascript",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
    ],
    features: ["Create Blog", "Update Blog", "Follow User", "Comment on BLog"],
    resp: "Independently created: Managed all aspects of the project",
    git: "https://github.com/arjundangi01/Medium-clone",
    preview: "https://comforting-taffy-d07f72.netlify.app/",
  },
  {
    id: 5,
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
    id: 6,
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
