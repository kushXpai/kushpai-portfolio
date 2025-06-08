import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import ProjectCard from "@/components/portfolio/ProjectCard";
import SkillBadge from "@/components/portfolio/SkillBadge";
import Footer from "@/components/portfolio/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Gamepad2,
  Lock,
  Brain,
  Terminal,
  User,
  GraduationCap,
  MapPin,
  Calendar,
} from "lucide-react";

const Index = () => {
  const featuredProjects = [
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
  ];

  const skills = [
  {
    name: "Flutter",
    level: 85,
    category: "mobile" as const,
    icon: <Smartphone className="h-4 w-4" />,
  },
  {
    name: "Next.js",
    level: 88,
    category: "frontend" as const,
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    name: "Python",
    level: 90,
    category: "languages" as const,
    icon: <Terminal className="h-4 w-4" />,
  },
  {
    name: "Tailwind CSS",
    level: 85,
    category: "frontend" as const,
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    name: "Supabase",
    level: 80,
    category: "backend" as const,
    icon: <Database className="h-4 w-4" />,
  },
  {
    name: "Appwrite",
    level: 75,
    category: "backend" as const,
    icon: <Database className="h-4 w-4" />,
  },
  {
    name: "Docker",
    level: 70,
    category: "tools" as const,
    icon: <GitBranch className="h-4 w-4" />,
  },
  {
    name: "AWS",
    level: 65,
    category: "tools" as const,
    icon: <Globe className="h-4 w-4" />,
  },
  {
    name: "TensorFlow",
    level: 70,
    category: "ml" as const,
    icon: <Brain className="h-4 w-4" />,
  },
  {
    name: "React",
    level: 90,
    category: "frontend" as const,
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    name: "Node.js",
    level: 80,
    category: "backend" as const,
    icon: <Server className="h-4 w-4" />,
  },
  {
    name: "MongoDB",
    level: 78,
    category: "backend" as const,
    icon: <Database className="h-4 w-4" />,
  },
  {
    name: "PostgreSQL",
    level: 75,
    category: "backend" as const,
    icon: <Database className="h-4 w-4" />,
  },
  {
    name: "JavaScript",
    level: 90,
    category: "languages" as const,
    icon: <Terminal className="h-4 w-4" />,
  },
  {
    name: "C++",
    level: 80,
    category: "languages" as const,
    icon: <Terminal className="h-4 w-4" />,
  },
  {
    name: "GraphQL",
    level: 75,
    category: "backend" as const,
    icon: <Server className="h-4 w-4" />,
  },
  {
    name: "Unity",
    level: 70,
    category: "game-dev" as const,
    icon: <Gamepad2 className="h-4 w-4" />,
  },
  {
    name: "Clerk",
    level: 78,
    category: "tools" as const,
    icon: <Lock className="h-4 w-4" />,
  },
  {
    name: "Firebase",
    level: 80,
    category: "backend" as const,
    icon: <Database className="h-4 w-4" />,
  },
  {
    name: "Flask",
    level: 75,
    category: "backend" as const,
    icon: <Server className="h-4 w-4" />,
  },
];


  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Computer Science graduate with a passion for creating innovative
              digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-300">
                    <User className="h-5 w-5 mr-2" />
                    Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-300">
                  <p className="mb-4">
                    Recent Computer Science graduate with a strong foundation in
                    software development and a passion for creating
                    user-centered digital experiences. I love working at the
                    intersection of technology and design.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    diving into the latest developments in web3 and AI.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-300">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-300">
                  <div className="space-y-2">
                    <h4 className="font-semibold">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-zinc-400">
                      University of Technology • 2020-2024
                    </p>
                    <p className="text-sm">GPA: 3.8/4.0 • Magna Cum Laude</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-zinc-300 mb-6">
                <MapPin className="h-5 w-5 mr-2 text-cyan-400" />
                <span>Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center text-zinc-300 mb-6">
                <Calendar className="h-5 w-5 mr-2 text-cyan-400" />
                <span>Available for opportunities</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  Interests & Hobbies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                      "Data Analysis",
                      "Machine Learning",
                      "Web Development",
                      "Mobile App Development",
                      "AI and Automation",
                      "Sports",
                      "Fitness",
                      "Gaming",
                      "Traveling",
                      "Cooking",
                    ].map((interest) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="bg-zinc-700 text-zinc-300"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Constantly learning and evolving with the latest technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                level={skill.level}
                category={skill.category}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
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

          <div className="text-center">
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
