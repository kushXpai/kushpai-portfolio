"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <h3 className="font-bold">Languages</h3>
          <ul className="list-disc pl-2">
            <li>Python</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Swift</li>
            <li>C++</li>
            <li>C#</li>
            <li>FLTK</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <h3 className="font-bold">Technologies</h3>
          <ul className="list-disc pl-2">
            <li>Node</li>
            <li>Django</li>
            <li>GraphQL</li>
            <li>Flutter</li>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>Firebase</li>
            <li>Power BI</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <h3 className="font-bold">Cloud Technologies</h3>
          <ul className="list-disc pl-2">
            <li>Google Cloud Platform</li>
            <li>Compute Engine</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Science in Computer Science :  Mithibai College, Mumbai University - 8.36 CGPA</li>
        <li>Intermediate : State Board, Maharashtra - 93.17%</li>
        <li>Matriculation : State Board, Maharashtra - 90.20%</li>
      </ul>
    ),
  },
  {
    title: "Extracirricular Achievements",
    id: "Extracirricular Achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Head of Finance and Corporate Relations, Mithibai Techspark 2024</li>
        <li>Website Developer, TEDxMithibaiCollege 2023</li>
        <li>National Level Weightlifter, 2 time Maharashtra State Champion</li>
        <li>Captain of School Baseball team: 5 concecutive years Baseball Divisions Champion</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a dedicated software developer with a comprehensive skill set in Python, JavaScript, Java, Swift, and C. My technical expertise extends to Power BI, GraphQL, Node, Kubernetes, Docker, Firebase, Django, and Flutter, complemented by hands-on experience with Google Cloud Platform (GCP) services such as Storage, Compute Engine, and Firebase. I possess strong critical thinking and problem-solving abilities, with a keen aptitude for active listening and effective teamwork. I am committed to leveraging my skills to develop innovative software solutions and contribute to impactful projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Extracirricular Achievements")}
              active={tab === "Extracirricular Achievements"}
            >
              {" "}
              Extracirricular Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
