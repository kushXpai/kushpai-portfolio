"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "Portfolio Website",
    description: "Responsive portfolio website developed using React, Tailwind CSS, and JavaScript. It showcases my personal projects and highlights software development skills.",
    image: "/images/projects/0.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kushXpai/Portfolio",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "KP FAST",
    description: "This is a cross-platform fitness app developed with Flutter and Firebase. It provides real-time data access, and user-friendly interfaces, achieving a 55% increase in user engagement.",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://apps.apple.com/in/app/kp-fast/id6505094329",
  },
  {
    id: 5,
    title: "GTA Crimson Streets",
    description: "This is an immersive 3D open-world game developed with Unity and C#. It blends intricate missions and diverse gameplay, showcasing expertise in game development and storytelling.",
    image: "/images/projects/5.png",
    tag: ["All", "Game Development"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Chef's Hat",
    description: "This is a recipe generator app developed with Flutter, Django, and GraphQL. It features ingredient-based suggestions, integrated payment, enhances community engagement etc.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Sudoku Solver",
    description: "This is an advanced Sudoku solver using backtracking algorithms. It significantly reduces problem-solving time, improving algorithm efficiency and performance.",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "https://github.com/kushXpai/sudoku-solver",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "TinyURLer",
    description: "This is a URL shortening service developed with React and MongoDB. It optimizes user operations by streamlining URL management and enhancing efficiency.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kushXpai/url-shortener-software",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Finchat",
    description: "This is a financial chatbot developed using Flask and Pandas. It enables seamless Natural Language Processing and financial data analysis, enhancing query handling.",
    image: "/images/projects/1.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game Development"
          isSelected={tag === "Game Development"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
