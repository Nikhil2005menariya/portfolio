import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [


   {
    id: "arogya-ai",
    category: "AI / ML · MERN",
    title: "Arogya AI – Smart Health Assistant",
    src: "/lovable-uploads/d6f8a09e-6ec7-464d-8d07-b2fc50250c25.png",
    screenshots: ["d6f8a09e-6ec7-464d-8d07-b2fc50250c25.png"],
    live: "https://github.com/Nikhil2005menariya/Arogya-Ai",
    github: "https://github.com/Nikhil2005menariya/Arogya-Ai",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.python,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Smart health assistant that predicts diseases from symptoms and
            enables secure real-time doctor–patient chat using Socket.IO.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },

  {
    id: "chatx",
    category: "MERN · Real-Time",
    title: "ChatX – Real-Time Communication Platform",
    src: "/lovable-uploads/chatX.png", // replace with actual screenshot if needed
    screenshots: ["chatx.png"],
    live: "https://your-live-chat-app-link.com", // optional
    github: "https://github.com/Nikhil2005menariya/chat-app", // update if repo name differs
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Real-time chat application supporting instant messaging, secure
            document sharing, and low-latency video calls using WebRTC.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },

    {
    id: "music-streaming",
    category: "MERN Stack",
    title: "Music Streaming Web App",
    src: "/lovable-uploads/6fb84967-074c-444d-aa83-2d6ed6cccc6f.png",
    screenshots: ["6fb84967-074c-444d-aa83-2d6ed6cccc6f.png"],
    live: "https://music-app-79t7.onrender.com/",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Full-stack music streaming platform with AI chatbot support and
            genre-based search.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },


    {
    id: "notes-nest",
    category: "MERN Stack",
    title: "Notes Nest – Task & Note Manager",
    src: "/lovable-uploads/19dcf7a1-5d5f-44cf-b28f-9f3b1edd39d8.png",
    screenshots: ["19dcf7a1-5d5f-44cf-b28f-9f3b1edd39d8.png"],
    live: "https://github.com/Nikhil2005menariya/Notes_app",
    github: "https://github.com/Nikhil2005menariya/Notes_app",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Productivity application for managing notes and tasks with
            real-time updates and reminders.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },

  {
    id: "rag-scientific-explorer",
    category: "AI / ML",
    title: "RAG Scientific Literature Explorer",
    src: "/lovable-uploads/9bd5a4e9-372e-4ac4-9025-291eb143ab5c.png",
    screenshots: ["9bd5a4e9-372e-4ac4-9025-291eb143ab5c.png"],
    live: "https://github.com/Nikhil2005menariya/RAG_Scientific-Literature-Explorer-with-Hypothesis-Drill-Down",
    github: "https://github.com/Nikhil2005menariya/RAG_Scientific-Literature-Explorer-with-Hypothesis-Drill-Down",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            AI-powered system for querying scientific PDFs using
            Retrieval-Augmented Generation (RAG). It builds FAISS indexes and
            generates grounded answers using Groq LLMs.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },

  {
    id: "stock-demand-catboost",
    category: "AI / ML",
    title: "Stock Demand Prediction using CatBoost",
    src: "/lovable-uploads/Screenshot 2025-04-21 at 2.12.32 PM.png",
    screenshots: ["Screenshot 2025-04-21 at 2.12.32 PM.png"],
    live: "https://github.com/Nikhil2005menariya/ML-sales-prediction-project",
    github: "https://github.com/Nikhil2005menariya/ML-sales-prediction-project",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Machine learning model to predict stock demand using CatBoost
            Regressor with feature engineering and RMSE / MAPE evaluation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },



  {
    id: "bit-automation",
    category: "IoT",
    title: "Bit Automation – IoT Home Automation",
    src: "/lovable-uploads/c7285175-5629-467e-a486-7bcabfcf2aef.png",
    screenshots: ["c7285175-5629-467e-a486-7bcabfcf2aef.png"],
    live: "https://github.com/Nikhil2005menariya/Home-Automation-IOT",
    github: "https://github.com/Nikhil2005menariya/Home-Automation-IOT",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            ESP8266-based IoT system enabling smart control of appliances,
            irrigation automation, and gas leak detection.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },

  {
    id: "wifi-rover",
    category: "IoT",
    title: "Wi-Fi Controlled Rover Robot",
    src: "/lovable-uploads/058b10b0-f283-4bb1-89cb-b323d0a2279c.png",
    screenshots: ["058b10b0-f283-4bb1-89cb-b323d0a2279c.png"],
    live: "https://github.com/Nikhil2005menariya/Rover-Wifi-Controlled",
    github: "https://github.com/Nikhil2005menariya/Rover-Wifi-Controlled",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Wi-Fi controlled rover robot using ESP8266 with a hosted control
            panel and real-time movement.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },

  {
    id: "crop-recommendation",
    category: "AI / ML",
    title: "Crop Recommendation System",
    src: "/lovable-uploads/62d7569e-0485-4ed5-83cd-bee36b542bca.png",
    screenshots: ["62d7569e-0485-4ed5-83cd-bee36b542bca.png"],
    live: "https://github.com/Nikhil2005menariya/ML-Based-crop-recommendation-",
    github: "https://github.com/Nikhil2005menariya/ML-Based-crop-recommendation-",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Machine learning system that recommends optimal crops based on soil
            and environmental conditions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];

export default projects;
