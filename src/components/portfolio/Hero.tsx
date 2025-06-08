import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] bg-repeat'
          }
        ></div>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-400/5 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            Kush Pai
          </h1>
          <div className="relative">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-zinc-300 font-light mb-2">
              Computer Science Graduate
            </h2>
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-mono">
                Full Stack Developer
              </span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Dedicated to building digital solutions that combine advanced technology with elegant, 
          user-centered design. Focused on modern web development and creative problem-solving.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
            >
              View My Work
              <div className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </div>
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-6 mb-12">
          <a
            href="https://github.com/kushXpai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/kushpai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:kushpaipla@gmail.com"
            className="p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={scrollToNext}
          className="animate-bounce text-zinc-400 hover:text-cyan-300 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6 mx-auto" />
        </button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
