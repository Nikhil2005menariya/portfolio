"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiKubuntu,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from "react-icons/si";
import { TbTerminal2 } from "react-icons/tb";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "naresh.khatri2345@gmail",
    href: "mailto:naresh.khatri2345@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "Phone",
    content: "1234567890",
    href: "tel:1234567890",
    icon: <FaPhone />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/naresh-khatri/",
    content: "/naresh-khatri",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Naresh-Khatri",
    content: "/naresh-khatri",
    icon: <FaGithub />,
  },
];

const TOOLS = [
  { name: "TypeScript", icon: <SiTypescript size="50px" color="#007acc" /> },
  { name: "HTML", icon: <FaHtml5 size="50px" color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3 size="50px" color="#563d7c" /> },
  { name: "Node.js", icon: <FaNodeJs size="50px" color="#6cc24a" /> },
  { name: "React", icon: <FaReact size="50px" color="#61dafb" /> },
  { name: "Docker", icon: <FaDocker size="50px" color="#2496ed" /> },
  { name: "Nginx", icon: <DiNginx size="50px" color="#008000" /> },
  { name: "Vue", icon: <FaVuejs size="50px" color="#41b883" /> },
  { name: "Express", icon: <SiExpress size="50px" color="#fff" /> },
  { name: "PostgreSQL", icon: <DiPostgresql size="50px" color="#336791" /> },
  { name: "MongoDB", icon: <DiMongodb size="50px" color="#4db33d" /> },
  { name: "Tailwind", icon: <RiTailwindCssFill size="50px" color="#06b6d4" /> },
  { name: "Firebase", icon: <RiFirebaseFill size="50px" color="#FFCA28" /> },
  { name: "Git", icon: <FaGit size="50px" color="#f05032" /> },
  { name: "GitHub", icon: <FaGithub size="50px" color="#fff" /> },
  { name: "VS Code", icon: <SiVscodium size="50px" color="#007acc" /> },
  { name: "Vim", icon: <DiVim size="50px" color="#fff" /> },
  { name: "Prettier", icon: <SiPrettier size="50px" color="#f7b93c" /> },
  { name: "NPM", icon: <DiNpm size="50px" color="#CB3837" /> },
  { name: "Yarn", icon: <FaYarn size="50px" color="#2C8EBB" /> },
  { name: "Vercel", icon: <SiVercel size="50px" color="#fff" /> },
  { name: "Linux", icon: <FaLinux size="50px" color="#fff" /> },
  { name: "Kubuntu", icon: <SiKubuntu size="50px" color="#0077C4" /> },
  { name: "Terminal", icon: <TbTerminal2 size="50px" color="#fff" /> },
  { name: "AWS", icon: <FaAws size="50px" color="#3f51b5" /> },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);

  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600 backdrop-blur-sm">
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Nikhil Menariya</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Tech Enthusiast / Full-Stack Developer
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md"
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="basis-3/4">
          <div className="p-10 border-[.5px] rounded-md border-zinc-600 backdrop-blur-sm">
            <h1 className="text-3xl mb-10">About me</h1>

            <p className="mb-10 leading-relaxed">
              Hi, I&apos;m a passionate tech enthusiast with a strong curiosity
              for innovation and emerging technologies. My journey spans across
              a wide spectrum of fields including Artificial Intelligence &
              Machine Learning, MERN Stack development, IoT systems, Robotics,
              and AR/VR applications.
            </p>

            <p className="mb-10 leading-relaxed">
              I thrive on building impactful projects that blend creativity with
              cutting-edge technology. Whether it&apos;s designing intelligent
              algorithms, developing full-stack web applications, crafting
              immersive AR/VR experiences, or tinkering with hardware in
              robotics and IoT — I&apos;m always excited to explore, learn, and
              create.
            </p>

            <p className="mb-10 leading-relaxed">
              Driven by a love for problem-solving and continuous learning,
              I&apos;m on a mission to contribute to the future of tech, one
              project at a time.
            </p>

            <h1 className="text-3xl mb-10">Stuff I use</h1>

            {toolsLoaded && (
              <Splide
                options={{
                  type: "loop",
                  autoplay: true,
                  interval: 2000,
                  speed: 2000,
                  perPage: 5,
                  arrows: false,
                  pagination: false,
                }}
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md">
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
