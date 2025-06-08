import Navigation from "@/components/portfolio/Navigation";
import ProjectCard from "@/components/portfolio/ProjectCard";
import Footer from "@/components/portfolio/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, Filter } from "lucide-react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website using TypeScript, React, and Tailwind CSS. Implements dynamic rendering and modular design for maintainability and scalability.",
    image: "/images/Portfolio.png",
    technologies: ["TypeScript", "React", "Tailwind"],
    category: "frontend",
    liveUrl: "https://kushpai-portfolio.vercel.app",
    githubUrl: "https://github.com/kushXpai/kushpai-portfolio",
  },
  {
    title: "VJTI Administration Management System",
    description:
      "Hostel application and grievance management system using Next.js and Supabase. Led a team of six to build a secure and efficient student portal and admin panel.",
    image: "/images/VJTI AdministrationManagementSystem.png",
    technologies: ["Next.js", "Supabase", "Tailwind"],
    category: "full-stack",
    liveUrl: "https://vjti-administration-management.vercel.app",
    githubUrl: "https://github.com/kushXpai/VJTI-Administration-Management",
    featured: true,
  },
  {
    title: "NityaPriya Dance Academy",
    description:
      "Commercial Next.js website for a dance academy with Firebase and AWS DynamoDB integration. SEO-optimized with a user-friendly enrollment system.",
    image: "/images/NityaPriyaDanceAcademy.png",
    technologies: ["Next.js", "Firebase", "AWS DynamoDB"],
    category: "full-stack",
    liveUrl: "https://www.nrityapriya.com",
    githubUrl: "https://github.com/kushXpai/nrityapriya-dance-academy",
    featured: true,
  },
  {
    title: "CarePulse",
    description:
      "Healthcare patient management system enabling appointment booking, admin scheduling, and secure file uploads. Integrated with Appwrite, Twilio, and Sentry for performance monitoring.",
    image: "/images/CarePulse.png",
    technologies: ["Next.js", "Appwrite", "Twilio", "Sentry"],
    category: "full-stack",
    liveUrl: "https://care-pulse-kushpai.vercel.app",
    githubUrl: "https://github.com/kushXpai/CarePulse",
  },
  {
    title: "LiveDocs",
    description:
      "Collaborative real-time document editor using Next.js, Liveblocks, and Clerk. Includes notifications, permission-based access, and a clean UI with Tailwind CSS.",
    image: "/images/LiveDocs.png",
    technologies: ["Next.js", "Liveblocks", "Clerk", "Tailwind"],
    category: "full-stack",
    liveUrl: "https://livedocs-kushxpai.vercel.app",
    githubUrl: "https://github.com/kushXpai/LiveDocs",
  },
  {
    title: "KP FAST",
    description:
      "Cross-platform fitness app and website using Flutter and C. Improved coach-athlete communication, increased user engagement by 55%, and maintains a stable user base.",
    image: "/images/KPFAST.png",
    technologies: ["Flutter", "C", "Firebase"],
    category: "mobile",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "GTA: Crimson Streets",
    description:
      "Open-world action game developed in Unity and C++ with advanced mission branching, customizable characters, and immersive gameplay.",
    image: "/images/GTACrimsonStreets.png",
    technologies: ["Unity", "C++"],
    category: "game-dev",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Chef’s Hat",
    description:
      "Personalized recipe suggestion app built in Flutter with Django GraphQL backend. Features community sharing, Firebase notifications, and meal planning tools.",
    image: "/images/ChefsHat.png",
    technologies: ["Flutter", "Django", "GraphQL", "Firebase"],
    category: "mobile",
    liveUrl: "",
    githubUrl: "https://github.com/kushXpai/chefshat-frontend",
  },
  {
    title: "FinChat",
    description:
      "This is a financial chatbot developed using Flask and Pandas. It enables seamless Natural Language Processing and financial data analysis, enhancing query handling.",
    image: "/images/FinChat.png",
    technologies: ["Python", "Flask"],
    category: "ml",
    liveUrl: "https://colab.research.google.com/drive/1J6TL2Qzle6HZy9p9YUa9r2gWgYRkl2hl?usp=sharing",
    githubUrl: "",
  },
  {
    title: "TinyURLer",
    description:
      "Python utility for sorting, categorizing, and cleaning large batches of URLs. Designed for automation and data preprocessing tasks.",
    image: "/images/TinyURLer.png",
    technologies: ["Python"],
    category: "backend",
    liveUrl: "",
    githubUrl: "https://github.com/kushXpai/url-shortener-software",
  },
  {
    title: "Sudoku Solver",
    description:
      "Python-based GUI application for solving Sudoku puzzles using backtracking. Visualizes step-by-step solution logic through Tkinter.",
    image: "/images/SudokuSolver.png",
    technologies: ["Python", "Tkinter"],
    category: "ai",
    liveUrl: "",
    githubUrl: "https://github.com/kushXpai/sudoku-solver",
  },
];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "full-stack", label: "Full Stack" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "mobile", label: "Mobile" },
    { value: "ml", label: "Machine Learning" },
    // { value: "devops", label: "DevOps" },
    { value: "game-dev", label: "Game Development" },
    { value: "ai", label: "AI / NLP" },
    // { value: "utility", label: "Utilities / Scripts" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A comprehensive showcase of my development work, from concept to
              deployment
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-cyan-400"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={
                    selectedCategory === category.value
                      ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                      : "border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-cyan-300"
                  }
                >
                  <Filter className="h-4 w-4 mr-1" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-zinc-400">
                No projects found matching your criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-zinc-400">
                  Showing {filteredProjects.length} of {projects.length}{" "}
                  projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    featured={project.featured}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
