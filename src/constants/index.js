import {
  placeholder,
  criteo,
  head_of_design,
  stmicroelectronics,
  ensimag,
  polito,
  unict,
  jira_task_flow_visualizer,
  sky_rivon,
  sudoku_solver,
  event_flow_visualization_platform,
  physics_simulator,
  anim_hiking,
  anim_biking,
  anim_ping_pong,
  anim_guitar,
  anim_experiment,
  ielts,
  cambridge,
  cisco,
  microsoft,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import {
  SiCplusplus,
  SiJquery,
  SiMysql,
  SiDotnet,
  SiFlutter,
  SiTypescript, SiD3Dotjs, SiScala,
  SiAdobephotoshop, SiAdobeaftereffects, SiAdobepremierepro, SiAssemblyscript, SiOpensourceinitiative,
  SiUml, SiTampermonkey, SiUnity,
  SiWebpack, SiVite, SiJest, SiMocha, SiJenkins,
  SiMongodb
} from "react-icons/si";

import {
  FaRegImage, FaJs, FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt,
  FaUnity, FaReact, FaAngular, FaVuejs, FaNodeJs,
  FaCode, FaLanguage, FaBrain, FaChartBar, FaRegObjectGroup, FaWrench, FaDesktop, FaLayerGroup, FaServer,
  FaWindows, FaApple, FaAndroid, FaHashtag, FaDocker
} from "react-icons/fa";

import { MdDeveloperMode, MdDesignServices } from "react-icons/md";

import { AiFillBug, AiOutlineMobile } from "react-icons/ai";

import { GiPuzzle, GiBrain, GiProcessor, GiNetworkBars } from "react-icons/gi";

import { IoGameControllerOutline } from "react-icons/io5";

import { TbBrandCSharp } from "react-icons/tb";
import { FaDartLang } from "react-icons/fa6";

export const resumeLink = "";
export const callToAction = "https://www.linkedin.com/in/concetto-antonino-privitera-79514312b/";
export const repoLink = "https://github.com/AntoninoPrivitera/personal-portfolio";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  /*
  {
    id: "achievements",
    title: "Achievements",
  },
  */
  {
    id: "projects",
    title: "Projects",
  },
  /*
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  */
 {
    id: "blog",
    title: "Blog Posts",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "hobbies",
    title: "Hobbies",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: ensimag,
    title: "Grenoble INP - Ensimag",
    degree: "Engineering degree",
    duration: "2020 - Feb 2022",
    content1: "",
    content2: "",
  },
  {
    id: "education-2",
    icon: polito,
    title: "Polytechnic University of Turin",
    degree: "Master's Degree",
    duration: "2019 - Apr 2022",
    content1: "Grade: 110/110 with honors",
    content2: "",
  },
  {
    id: "education-3",
    icon: unict,
    title: "University of Catania",
    degree: "Bachelor's Degree",
    duration: "2015 - 2018",
    content1: "Grade: 105/110",
    content2: "",
  },
  {
    id: "education-4",
    icon: placeholder,
    title: "Industrial Technical Institute Galileo Ferraris",
    degree: "Diploma",
    duration: "2010 - 2015",
    content1: "Grade: 100/100",
    content2: "",
  }
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: FaRegImage,
    event: "Hakathon 2025",
    position: "Winner",
    content1: "",
    content2: "",
    content3: "",
    article: "",
    project: "",
    youtube: "",
    github: "",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      { id: "t-27", icon: FaJs, name: "JavaScript" },
      { id: "t-9", icon: SiTypescript, name: "TypeScript" },
      { id: "t-46", icon: FaPython, name: "Python" },
      { id: "t-37", icon: FaJava, name: "Java" },
      { id: "t-52", icon: FaCode, name: "C" },
      { id: "t-47", icon: SiCplusplus, name: "C++" },
      { id: "t-36", icon: TbBrandCSharp, name: "C#" },
      { id: "t-38", icon: FaPhp, name: "PHP" },
      { id: "t-57", icon: SiScala, name: "Scala" },
      { id: "t-48", icon: FaRegImage, name: "VHDL" },
      { id: "t-42", icon: SiAssemblyscript, name: "Assembly" },
      { id: "t-69", icon: FaDartLang, name: "Dart" },
    ],
  },
  {
    title: "Web & Application Frameworks",
    items: [
      { id: "f-1", icon: FaReact, name: "React.js" },
      { id: "f-2", icon: FaVuejs, name: "Vue.js" },
      { id: "f-4", icon: FaAngular, name: "Angular" },
      { id: "t-53", icon: FaNodeJs, name: "Node.js" },
      { id: "t-49", icon: FaHtml5, name: "HTML" },
      { id: "t-50", icon: FaCss3Alt, name: "CSS" },
      { id: "t-65", icon: SiDotnet, name: "ASP.NET" },
      { id: "t-43", icon: FaUnity, name: "Unity" },
      { id: "t-68", icon: SiFlutter, name: "Flutter" },
      { id: "f-3", icon: SiJquery, name: "jQuery" },
      { id: "t-18", icon: SiD3Dotjs, name: "D3.js" },
    ],
  },
    {
    title: "Database Technologies",
    items: [
      { id: "t-10", icon: FaDatabase, name: "Vertica" },
      { id: "t-11", icon: FaDatabase, name: "SQL Server" },
      { id: "t-12", icon: FaDatabase, name: "Hive" },
      { id: "t-13", icon: SiMongodb, name: "Mongo DB" },
      { id: "t-44", icon: SiMysql, name: "MySQL" },
      { id: "t-30", icon: FaServer, name: "Data warehouse" }
    ],
  },
  {
    title: "Development Tools",
    items: [
      { id: "t-51", icon: FaGitAlt, name: "Git" },
      { id: "t-70", icon: FaDocker, name: "Docker" },
      { id: "t-71", icon: SiWebpack, name: "Webpack" },
      { id: "t-72", icon: SiVite, name: "Vite" },
      { id: "t-73", icon: SiJest, name: "Jest" },
      { id: "t-74", icon: SiMocha, name: "Mocha" },
      { id: "t-76", icon: SiJenkins, name: "Jenkins" }
    ]
  },
  {
    title: "Specialized Technologies",
    items: [
      { id: "t-11", icon: GiProcessor, name: "SMT" },
      { id: "t-62", icon: FaCode, name: "Formal languages" },
      { id: "t-63", icon: GiPuzzle, name: "CUP" },
      { id: "t-64", icon: GiPuzzle, name: "Jflex" }
    ]
  },
  {
    title: "Editing",
    items: [
      { id: "t-39", icon: SiAdobephotoshop, name: "Photoshop" },
      { id: "t-40", icon: SiAdobeaftereffects, name: "After Effects" },
      { id: "t-41", icon: SiAdobepremierepro, name: "Premiere" }
    ]
  },
  {
    title: "Languages",
    items: [
      { id: "t-58", icon: FaLanguage, name: "English" },
      { id: "t-59", icon: FaLanguage, name: "Italian" },
      { id: "t-60", icon: FaLanguage, name: "French" }
    ]
  }
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Criteo",
    logo: criteo,
    link: "https://www.criteo.com",
    positions: [
      {
        title: "Software Development Engineer II",
        duration: "April 2023 - Present",
        content: [
          {
            text: "Delivered high-impact and cross-functional projects",
            link: "",
          },
          {
            text: "Led multi-team coordination",
            link: "",
          },
          {
            text: "Improved API performance through advanced API features",
            link: "",
          },
          {
            text: "Served as interim team lead and Scrum Master, organizing sprints and optimizing processes",
            link: "",
          },
          {
            text: "Mentored new hires and promoted team autonomy and code quality",
            link: "",
          },
          {
            text: "Conducted candidate interviews and contributed to hiring decisions",
            link: "",
          },
          {
            text: "Developed JIRA Task Flow Visualizer open-source tool and posted Medium article",
            link: "",
          },
          {
            text: "Contributed to strategic planning and roadmap alignment with business goals",
            link: "",
          }
        ],
      }, {
        title: "Software Development Engineer",
        duration: "April 2022 - April 2023",
        content: [
          {
            text: "Owned and coordinated delivery of major projects across multiple teams",
            link: "",
          },
          {
            text: "Led code reviews, refactored code, and enforced high-quality standards",
            link: "",
          },
          {
            text: "Investigated and resolved production issues",
            link: "",
          },
          {
            text: "Mentored new hires and facilitated technical knowledge sharing",
            link: "",
          },
          {
            text: "Led sprint and project planning, driving continuous improvement and team readiness",
            link: "",
          }
        ],
      }, {
        title: "Software Engineer",
        duration: "March 2021 - August 2021",
        content: [
          {
            text: "Developed a web-based platform to visualize large-scale temporal event data",
            link: "",
          },
          {
            text: "Designed interactive timelines displaying aggregated user and system events",
            link: "",
          },
          {
            text: "Implemented frontend components using React, TypeScript, and D3.js for dynamic, efficient rendering",
            link: "",
          },
          {
            text: "Developed backend services in Scala, interfacing with Vertica for high-performance data querying",
            link: "",
          },
          {
            text: "Created on-demand data fetching and virtualization techniques to optimize browser performance and avoid memory issues",
            link: "",
          },
          {
            text: "Built advanced features for event filtering, sequence comparison, and customizable timeline configuration",
            link: "",
          },
          {
            text: "Collaborated in an agile environment, following rigorous code review and automated testing processes",
            link: "",
          },
        ],
      }
    ],
  },
  {
    organisation: "Head of Design",
    logo: head_of_design,
    link: "",
    positions: [
      {
        title: "Web Designer and back-end Developer",
        duration: "July 2016 - October 2026",
        content: [
          {
            text: "",
            link: "",
          }
        ],
      }
    ],
  },
  {
    organisation: "ETIS: Editorial Press Centre",
    logo: placeholder,
    link: "",
    positions: [
      {
        title: "Maintenance Engineer of machinery and digitization of historical photos",
        duration: "May 2014 - May 2014",
        content: [
          {
            text: "",
            link: "",
          }
        ],
      }
    ],
  },
  {
    organisation: "STMicroelectronics",
    logo: stmicroelectronics,
    link: "",
    positions: [
      {
        title: "Stage",
        duration: "April 2014 - April 2014",
        content: [
          {
            text: "",
            link: "",
          }
        ],
      }
    ],
  },
  {
    organisation: "Industrial Technical Institute Galileo Ferraris",
    logo: placeholder,
    link: "",
    positions: [
      {
        title: "Digital and functional literacy tutor for seniors",
        duration: "2023",
        content: [
          {
            text: "",
            link: "",
          }
        ],
      }
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "JIRA Task Flow Visualizer",
    github: "",
    link: "",
    image: jira_task_flow_visualizer,
    content:
      "I developed and maintained JIRA Task Flow Visualizer, an open-source TamperMonkey userscript that displays Jira epic task dependencies as an interactive graph. Built with JavaScript, D3.js, and D3-DAG, it integrates with Jira's API to provide real-time visualization of progress, dependencies, and potential bottlenecks. Features include clickable task nodes, drag-and-drop positioning, dependency highlighting, and customizable views. Highlighted in a Criteo Tech Blog article on Medium, the tool streamlines project planning and boosts team productivity through clear and intuitive dependency mapping.",
    stack: [
      { id: "icon-js", icon: FaJs, name: "JavaScript" },
      { id: "icon-d3", icon: SiD3Dotjs, name: "D3.js" },
      { id: "icon-tampermonkey", icon: SiTampermonkey, name: "TamperMonkey" },
      { id: "icon-api", icon: FaDatabase, name: "Jira API" }
    ],
  },
  {
    id: "project-2",
    title: "Sky Rivon",
    github: "",
    link: "",
    image: sky_rivon,
    content:
      "I developed and published Sky Rivon, a free-to-play mobile game for iOS and Android where players navigate a magical sky river using simple one-finger controls. Featuring colorful fantasy visuals, dynamic river paths, hazards, power-ups, and upgrades, the game delivers quick, offline play sessions that challenge precision and decision-making.",
    stack: [
      { id: "icon-unity", icon: SiUnity, name: "Unity" },
      { id: "icon-csharp", icon: FaHashtag, name: "C#" }
    ],
  },
  {
    id: "project-3",
    title: "Sudoku Solver and Generator",
    github: "",
    link: "",
    image: sudoku_solver,
    content:
      "I built Sudoku Solver and Generator, a Python tool that solves puzzles using both a Z3-based SMT solver and a recursive backtracking algorithm. It generates Sudoku grids of multiple sizes by removing cells while ensuring unique solutions, and includes a command-line interface for solving, generating, and validating puzzles.",
    stack: [
      { id: "icon-python", icon: FaPython, name: "Python" }
    ],
  },
  {
    id: "project-4",
    title: "Event-Flow Visualization Platform",
    github: "",
    link: "",
    image: event_flow_visualization_platform,
    content:
      "I built the Event-Flow Visualization Platform, a web-based tool for analyzing large-scale time-series data within Criteo's advertising ecosystem. Using React, TypeScript, D3.js, Scala, and Vertica, it renders billions of events as interactive timelines with features like filtering, collapsing, and comparison, enabling smooth exploration and stronger data-driven decisions.",
    stack: [
      { id: "icon-react", icon: FaReact, name: "React" },
      { id: "icon-typescript", icon: SiTypescript, name: "TypeScript" },
      { id: "icon-d3", icon: SiD3Dotjs, name: "D3.js" },
      { id: "icon-scala", icon: SiScala, name: "Scala" },
      { id: "icon-vertica", icon: FaDatabase, name: "Vertica" }
    ],
  },
  {
    id: "project-5",
    title: "Physics Simulator with Augmented Reality",
    github: "",
    link: "",
    image: physics_simulator,
    content:
      "I developed a Physics Simulator with Augmented Reality, an educational app that visualizes dynamic 3D models, such as astronomical bodies, to illustrate concepts like motion, rotation, and temperature in an immersive AR environment. Built with Unity and C#, the project integrates custom simulation scripts, advanced rendering effects, and Vuforia-based AR overlays, running cross-platform on Windows, macOS, and Android to enhance interactive science learning.",
    stack: [
      { id: "icon-unity", icon: SiUnity, name: "Unity" },
      { id: "icon-csharp", icon: FaHashtag, name: "C#" }
    ],
  }
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "JIRA Task Flow Visualizer",
    link: "https://medium.com/criteo-engineering/jira-task-flow-visualizer-894ef529a88f",
    date: new Date(2024, 6, 4).toLocaleDateString(), // Can be edited to any string format
    image: jira_task_flow_visualizer,
    tags: [
      {
        id: "tag-1",
        name: "Developer Experience",
      },
      {
        id: "tag-2",
        name: "Jira",
      },
      {
        id: "tag-3",
        name: "JavaScript",
      },
      {
        id: "tag-4",
        name: "Management",
      },
      {
        id: "tag-6",
        name: "Data Visualization",
      }
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have indulged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "",
    title: "",
    duration: "",
    content: [
      {
        text: "",
        link: "",
      },
      {
        text: "",
        link: "",
      },
    ],
    logo: placeholder,
  },
];

// List out your hobbies here
export const hobbies = [
  {
    id: "hobby-1",
    lottie_animation: anim_hiking,
    activity: 'Hiking',
    sentence: '“The journey of a thousand miles begins with a single step.”',
    author: 'Lao Tzu',
  },
  {
    id: "hobby-2",
    lottie_animation: anim_guitar,
    activity: 'Playing guitar',
    sentence: '“We may all speak different languages, but music is a language we all understand”',
    author: 'Yiruma',
  },
  {
    id: "hobby-3",
    lottie_animation: anim_ping_pong,
    activity: 'Table tennis',
    sentence:
      '“Only passions. great passions can elevate the soul to great things.”',
    author: 'Zhang Jike',
  },
  {
    id: "hobby-4",
    lottie_animation: anim_experiment,
    activity: 'Experimenting new ideas',
    sentence:
      '“All life is an experiment. The more experiments you make the better.”',
    author: 'Ralph Waldo Emerson',
  },
  {
    id: "hobby-5",
    lottie_animation: anim_biking,
    activity: 'Cycling',
    sentence:
      '“The bicycle is a curious vehicle. Its passenger is its engine.”',
    author: 'John Howard',
  },
];

export const certificates = [
  {
    id: "certificate-1",
    logo: ielts,
    title: 'IELTS 6.5',
  },
  {
    id: "certificate-2",
    logo: cambridge,
    title: 'PET-B1',
  },
  {
    id: "certificate-3",
    logo: cisco,
    title: 'Cisco CCNA Exploration',
  },
  {
    id: "certificate-6",
    logo: cisco,
    title: 'Cisco IT Essentials',
  },
  {
    id: "certificate-4",
    logo: microsoft,
    title: 'Microsoft Specialist for Excel 2007',
  },
  {
    id: "certificate-5",
    logo: microsoft,
    title: 'Microsoft Specialist for Word 2007',
  },
]

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/concetto-antonino-privitera-79514312b/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/AntoninoPrivitera/",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:ca.privitera@outlook.com",
  },
  /*{
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/<your-twitter-id>/",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/<your-instagram-id>/",
  },*/
];

// Your professional summary
export const aboutMe = {
  name: "Concetto Antonino Privitera",
  githubUsername: 'AntoninoPrivitera',
  tagLine: "Software Development Engineer II",
  intro: "I am a full-stack software engineer with a strong passion for coding, problem-solving, and creating innovative solutions. With a solid foundation in computer science and a keen eye for detail, I thrive in dynamic environments where I can apply my skills to develop efficient and scalable applications. I am always eager to learn new technologies and stay updated with industry trends to deliver cutting-edge solutions that meet user needs.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "criteo/jira-task-flow-visualizer",
];
