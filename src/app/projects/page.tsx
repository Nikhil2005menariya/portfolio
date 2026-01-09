"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "RAG Scientific Literature Explorer",
    description:
      "An AI-powered system that lets users upload research PDFs and ask questions answered using Retrieval-Augmented Generation (RAG). It extracts text, builds FAISS indexes, retrieves relevant chunks, and uses Groq LLMs to generate accurate, context-grounded answers.",
    link: "https://github.com/Nikhil2005menariya/RAG_Scientific-Literature-Explorer-with-Hypothesis-Drill-Down",
    images: [
      "/lovable-uploads/9bd5a4e9-372e-4ac4-9025-291eb143ab5c.png",
    ],
  },
  {
    id: 2,
    name: "Stock Demand Prediction using CatBoost",
    description:
      "A machine learning model to predict stock demand using historical and trend-based data. Features preprocessing, CatBoost Regressor, MAPE/RMSE analysis, and insightful visualizations.",
    link: "https://github.com/Nikhil2005menariya/ML-sales-prediction-project",
    images: [
      "/lovable-uploads/Screenshot 2025-04-21 at 2.12.32 PM.png",
    ],
  },
  {
    id: 3,
    name: "Arogya AI – Smart Health Assistant",
    description:
      "A web-based assistant predicting diseases from symptoms, powered by ML, and supporting secure real-time doctor-patient chat.",
    link: "https://github.com/Nikhil2005menariya/Arogya-Ai",
    images: [
      "/lovable-uploads/d6f8a09e-6ec7-464d-8d07-b2fc50250c25.png",
    ],
  },
  {
    id: 4,
    name: "Music Streaming Web App",
    description:
      "Full-stack music streaming with chatbot, supporting genre queries and Gemini-powered interactions.",
    link: "https://music-app-79t7.onrender.com/",
    images: [
      "/lovable-uploads/6fb84967-074c-444d-aa83-2d6ed6cccc6f.png",
    ],
  },
  {
    id: 5,
    name: "Notes Nest – Task & Note Manager",
    description:
      "Productivity tool for notes and tasks, real-time updates with clean, modern UI.",
    link: "https://github.com/Nikhil2005menariya/Notes_app",
    images: [
      "/lovable-uploads/19dcf7a1-5d5f-44cf-b28f-9f3b1edd39d8.png",
    ],
  },
  {
    id: 6,
    name: "Bit Automation – IoT Home Automation",
    description:
      "IoT home automation using ESP8266. Enables smart control (lights, fans, irrigation) and safety (gas leak).",
    link: "https://github.com/Nikhil2005menariya/Home-Automation-IOT",
    images: [
      "/lovable-uploads/c7285175-5629-467e-a486-7bcabfcf2aef.png",
    ],
  },
  {
    id: 7,
    name: "PMSS Scholarship Portal – SIH 2023",
    description:
      "Centralized portal for student applications to Prime Minister's Scholarship Scheme. Features document upload, eligibility checks, and admin dashboard.",
    link: "https://github.com/AthJa/SIH2024",
    images: [
      "/lovable-uploads/9fdde6ff-7edb-452e-bb54-00c504e04e88.png",
    ],
  },
  {
    id: 8,
    name: "Wi-Fi Controlled Rover Robot",
    description:
      "Remotely controlled rover robot powered by ESP8266, featuring live web panel, directional control and custom UI.",
    link: "https://github.com/Nikhil2005menariya/Rover-Wifi-Controlled",
    images: [
      "/lovable-uploads/058b10b0-f283-4bb1-89cb-b323d0a2279c.png",
    ],
  },
  {
    id: 9,
    name: "Crop Recommendation System",
    description:
      "Recommends optimal crop based on soil/environment using ML. Clean input UI and real-time prediction.",
    link: "https://github.com/Nikhil2005menariya/ML-Based-crop-recommendation-",
    images: [
      "/lovable-uploads/62d7569e-0485-4ed5-83cd-bee36b542bca.png",
    ],
  },
  {
    id: 10,
    name: "Handwritten Digit Recognition",
    description:
      "ML model for real-time handwritten digit recognition via web canvas interface.",
    link: "https://github.com/Nikhil2005menariya/ML-Based-Digit-Detection",
    images: [
      "/lovable-uploads/494ababf-9ec6-4501-86c6-75c49f0a630d.png",
    ],
  },
  {
    id: 11,
    name: "Disease Prediction System",
    description:
      "Predicts likelihood of multiple diseases (Diabetes, Heart Disease, Parkinson’s, etc.) from symptom input using optimized ML.",
    link: "https://github.com/Nikhil2005menariya/Disease-Predictor-ML-model",
    images: [
      "/lovable-uploads/Screenshot 2025-04-21 at 2.14.40 PM.png",
    ],
  },
  {
    id: 12,
    name: "Real-time ML Motion Detection",
    description:
      "Web-based CV system using OpenCV/Flask for live motion detection, event logging, and alerting—usable for smart automation and edge devices.",
    link: "https://github.com/Nikhil2005menariya/ML-Motion-Detection",
    images: [
      "/lovable-uploads/Screenshot 2025-04-21 at 2.14.40 PM.png",
    ],
  },
  {
    id: 13,
    name: "Emotion Detection (ML)",
    description:
      "Emotion recognition from image/video using ML/CV. VSCode screenshot displays the system in use.",
    link: "#",
    images: [
      "/lovable-uploads/69a3c523-c2ed-4e2b-8c7e-eecd9717d021.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
