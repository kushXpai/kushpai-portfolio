import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) => {
  return (
    <Card
      className={cn(
        "group overflow-hidden bg-zinc-800/50 border-zinc-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105",
        featured && "ring-2 ring-cyan-400/20",
      )}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          {liveUrl && (
            <Button
              size="sm"
              asChild
              className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="outline"
              asChild
              className="border-zinc-400 text-zinc-200 hover:bg-zinc-700"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>

        {featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-cyan-500 text-white border-0">Featured</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-zinc-400 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-zinc-700/50 text-zinc-300 hover:bg-cyan-400/10 hover:text-cyan-300 transition-colors duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
