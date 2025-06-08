import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "languages" | "mobile" | "ml" | "game-dev";
  icon?: React.ReactNode;
}

const SkillBadge = ({ name, level, category, icon }: SkillBadgeProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "border-cyan-400/50 bg-cyan-400/10 hover:bg-cyan-400/20";
      case "backend":
        return "border-blue-400/50 bg-blue-400/10 hover:bg-blue-400/20";
      case "tools":
        return "border-purple-400/50 bg-purple-400/10 hover:bg-purple-400/20";
      case "languages":
        return "border-green-400/50 bg-green-400/10 hover:bg-green-400/20";
      case "mobile":
        return "border-pink-400/50 bg-pink-400/10 hover:bg-pink-400/20";
      case "ml":
        return "border-yellow-400/50 bg-yellow-400/10 hover:bg-yellow-400/20";
      case "game-dev":
        return "border-orange-400/50 bg-orange-400/10 hover:bg-orange-400/20";
      default:
        return "border-zinc-400/50 bg-zinc-400/10 hover:bg-zinc-400/20";
    }
  };

  const getProgressColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-cyan-400";
      case "backend":
        return "bg-blue-400";
      case "tools":
        return "bg-purple-400";
      case "languages":
        return "bg-green-400";
      case "mobile":
        return "bg-pink-400";
      case "ml":
        return "bg-yellow-400";
      case "game-dev":
        return "bg-orange-400";
      default:
        return "bg-zinc-400";
    }
  };


  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    if (level >= 40) return "Beginner";
    return "Learning";
  };

  return (
    <div
      className={cn(
        "group p-4 rounded-lg border transition-all duration-300 hover:scale-105 cursor-pointer",
        getCategoryColor(category),
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          {icon && (
            <div className="text-zinc-300 group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
          )}
          <span className="font-medium text-zinc-200 group-hover:text-white transition-colors duration-300">
            {name}
          </span>
        </div>
        <Badge
          variant="outline"
          className="text-xs border-zinc-500 text-zinc-400 group-hover:border-zinc-300 group-hover:text-zinc-200 transition-colors duration-300"
        >
          {getLevelText(level)}
        </Badge>
      </div>

      <div className="space-y-2">
        <Progress value={level} className="h-2 bg-zinc-700" />
        <div className="flex justify-between text-xs text-zinc-500">
          <span>Proficiency</span>
          <span>{level}%</span>
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm -z-10",
          getProgressColor(category),
        )}
      />
    </div>
  );
};

export default SkillBadge;
