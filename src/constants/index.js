import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  oasis,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nscc,
  chat,
  videoHub,
  cart,
  crypto,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  }
];

const technologies = [
 
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker ,
  },
 
  
  {
    name: "React JS",
    icon: reactjs,
  },
 
 
 
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Oasis Infobyte",
    icon: oasis,
    iconBg: "#383E56",
    date: "Sep 2023 – Oct 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "• Converted API from PHP to REST API using Nodejs and MongoDb to store data of Social Media App",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Increased the speed of the App",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Namespace Member ",
    company_name: "Tesla",
    icon: nscc,
    iconBg: "#E6DEDD",
    date: "Dec. 2022 – Present",
    points: [
      "• Communicate with other member to for managing the event and organising event in campus.",
      "Collaborating with designers, team managers, and other member to organize events.",
      "Orgainsied events such as HacktoberFest 2023.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ankit proved me wrong.",
    name: "Ayush Garg",
    designation: "Category Manager",
    company: "PW",
    image: "https://media.licdn.com/dms/image/D5603AQHfr9KHjzc6IA/profile-displayphoto-shrink_400_400/0/1708415080801?e=1726099200&v=beta&t=neWAULYlJ_Ldok0HlehHPyFQ_rlLhEruA5yiOpEGQKk",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Harshit Sachdeva",
    designation: "Technical Team Member",
    company: "Namespace",
    image: "https://media.licdn.com/dms/image/D4D03AQF8lvYiztf5oA/profile-displayphoto-shrink_400_400/0/1688710615495?e=1726099200&v=beta&t=iYMLTkrVimD5C2PxYaszeIjR8r49PP17FcCScH1yJhI",
  },
  
];

const projects = [
  {
    name: "Chat App",
    description:
      "Web-based platform that allows users to search, and chat with other users, providing a realtime communication.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Socket",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/ankit-lang/Chatapp-backend",
  },
  {
    name: "Video Hub",
    description:
      "Web application that enables users watch videos, view recorded videos",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: videoHub,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cart",
    description:
      "A comprehensive Cart allows users to out Items into the cart.",
    tags: [
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "ReduxThunk",
        color: "pink-text-gradient",
      },
    ],
    image: cart,
    source_code_link: "https://github.com/ankit-lang",
  },
  {
    name: "Crypto App",
    description:
      "A comprehensive App to view Data of about 3500 coins in different current according to country.",
    tags: [
      {
        name: "Crypto",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/ankit-lang",
  },
];

export { services, technologies, experiences, testimonials, projects };
