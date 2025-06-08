import { Github, Linkedin, Mail, Heart, Disc } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Disc className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md" />
              </div>
              <span className="text-xl font-bold text-white">KP Portfolio</span>
            </div>
            <p className="text-zinc-400 max-w-sm">
              Crafting seamless digital experiences through modern software and intuitive design.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-zinc-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-zinc-400 hover:text-cyan-300 transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-zinc-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-zinc-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/kushXpai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/kushpai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:kushpaipla@gmail.com"
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-zinc-500">
              Always open to interesting conversations and collaboration
              opportunities.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-zinc-500 text-sm flex items-center">
            © {currentYear} Kush Pai. Made with{" "}
            <Heart className="h-4 w-4 mx-1 text-red-400" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
