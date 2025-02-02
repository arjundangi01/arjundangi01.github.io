const getImageUrl = ({
  projectName,
  formate,
}: {
  projectName: string;
  formate: "desktop" | "mobile";
}) => {
  if (formate == "mobile") {
    return `https://placehold.co/100x105/221b4b/ffffff.png?text=${projectName}&font=noto-sans`;
  }
  return `https://placehold.co/600x450/221b4b/ffffff.png?text=${projectName}&font=noto-sans`;
};

interface Project {
  title: string;
  subTitle: string;
  desktopImage: string;
  mobileImage: string;
  description: string;
  techStack: string[];
  features: string[];
  responsibility: string;
  githubUrl: string;
  previewUrl: string;
}

export const projectsData: { professional: Project[]; personal: Project[] } = {
  professional: [
    {
      title: "Franzy",
      subTitle: "Franzy: Franchise Discovery and Investment Platform",
      desktopImage: getImageUrl({
        projectName: "Franzy",
        formate: "desktop",
      }),
      mobileImage: getImageUrl({
        projectName: "Franzy",
        formate: "mobile",
      }),
      description:
        "Built a platform that helps users find, research, and invest in franchises that match their personal and financial goals.",
      techStack: [
        "NextJs",
        "Tailwind",
        "TypeScript",
        "GraphQL",
        "Prisma",
        "PostgreSQL",
      ],
      features: [
        "Implemented full process for users to connect with brands",
        "Developed feature to help users find territories of their chosen brands",
        "Designed the database schema and integrated it with Prisma",
        "Implemented GraphQL resolvers for multiple functionalities",
        "Built admin pages to display and manage data",
        "Contributed to multiple pages across the platform",
      ],
      responsibility: "",
      githubUrl: "",
      previewUrl: "",
    },
    {
      title: "Decimal",
      subTitle: "Decimal: Loan Refinance Platform",
      desktopImage: getImageUrl({
        projectName: "Decimal",
        formate: "desktop",
      }),
      mobileImage: getImageUrl({
        projectName: "Decimal",
        formate: "mobile",
      }),
      description:
        "Developed a platform that helps users find refinance options for their loans, providing offers and tracking user data.",
      techStack: [
        "Node.js",
        "Express",
        "Mongoose",
        "Firebase",
        "MongoDB",
        "Next.js",
        "Tailwind",
      ],
      features: [
        "Integrated Stripe for subscription management",
        "Implemented cron jobs for automating calculations and data updates",
        "Implemented services to fetch refinance offers for users",
        "Built dashboard pages to display refinance  and user data",
      ],
      responsibility: "",
      githubUrl: "",
      previewUrl: "",
    },

    {
      title: "Romeano",
      subTitle: "Romeano: Meeting Recording App",
      desktopImage: getImageUrl({
        projectName: "Romeano",
        formate: "desktop",
      }),
      mobileImage: getImageUrl({
        projectName: "Romeano",
        formate: "mobile",
      }),
      description:
        "Developed a macOS app for meeting recording, focusing on the frontend with features like auto-update and code signing.",
      techStack: ["React", "TypeScript", "Electron.js", "Vite", "Tailwind"],
      features: [
        "Developed the frontend for the entire project independently",
        "Implemented the build process for packaging and signing the macOS app (.dmg)",
        "Integrated code signing and notarization for the app",
        "Implemented auto-update (OTA updates) for seamless user experience",
      ],
      responsibility: "",
      githubUrl: "",
      previewUrl: "",
    },
  ],
  personal: [
    {
      title: "Travelious",
      subTitle: "A Full Stack travel booking website",
      desktopImage: getImageUrl({
        projectName: "Travelious",
        formate: "desktop",
      }),
      mobileImage: getImageUrl({
        projectName: "Travelious",
        formate: "mobile",
      }),
      description:
        "Constructed a robust travel booking platform with MERN stack, featuring secure user authentication, tour search, booking capabilities and secure payments. Users can access their profiles showcasing booking history and effortlessly cancel reservations.",
      techStack: [
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
      responsibility:
        "Independently Managed all aspects of the backend. In frontend, I contributed to the creation of the  tour detail page, navbar, profile page having user booking history, and login signup page",
      githubUrl: "https://github.com/arjundangi01/Travelious",
      previewUrl: "https://travelious-project.netlify.app/",
    },
    {
      title: "Auction Website",
      subTitle: "MERN-based auction platform with real-time bidding.",
      desktopImage: getImageUrl({
        projectName: "Auction Website",
        formate: "desktop",
      }),
      mobileImage: getImageUrl({
        projectName: "Auction Website",
        formate: "mobile",
      }),
      description:
        "I developed a full-stack auction site with MERN stack and socket-io. Introducing real-time bids and user-friendly navigation, ensuring a seamless and feature-rich experience. ",
      techStack: [
        "React",
        "Redux",
        "Javascript",
        "Tailwind Css",
        "Node",
        "Express",
        "MongoDB",
        "Socket",
      ],
      features: [
        "Login and Signup",
        "Sell Product",
        "Purchase Product",
        "Place a Bid",
        "Search Product",
      ],
      responsibility:
        "Independently created: Managed all aspects of the project",
      githubUrl: "https://github.com/arjundangi01/Auction-Website",
      previewUrl: "https://subtle-cupcake-2e83a9.netlify.app/",
    },
    {
      title: "Medium Clone",
      subTitle:
        "Individual project:  built a seamless Medium clone using MERN stack.",
      desktopImage: getImageUrl({
        projectName: "Medium Clone",
        formate: "desktop",
      }),
      mobileImage: getImageUrl({
        projectName: "Medium Clone",
        formate: "mobile",
      }),
      description:
        "I developed a Medium clone using the MERN stack. Demonstrating my skills in web development and full-stack programming.",
      techStack: [
        "React",
        "Redux",
        "Javascript",
        "Tailwind",
        "Node",
        "Express",
        "MongoDB",
      ],
      features: [
        "Login and Signup",
        "Profile Page",
        "Edit Profile",
        "Create Blog",
        "Update Blog",
        "Follow User",
        "Like and Comment on Blog",
      ],
      responsibility:
        "Independently created: Managed all aspects of the project",
      githubUrl: "https://github.com/arjundangi01/Medium-clone",
      previewUrl: "https://comforting-taffy-d07f72.netlify.app/",
    },
  ],
};
