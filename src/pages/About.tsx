import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  Briefcase,
  Award,
  Heart,
  Code2,
  Download,
  MapPin,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const experiences = [
    {
      title: "Software and AI Engineering Intern",
      company: "Thapar.Tech",
      period: "June 2025 - August 2025",
      description:
        "Engineered full-stack systems optimized for Hostinger shared hosting using Laravel, MySQL, and Tailwind CSS. Built dynamic interfaces using HTMX and jQuery. Developed admin panels (Laravel Nova/Voyager), and integrated Instagram and Facebook web scrapers. Designed AI-based microservices for trainer data collection and recommendation systems.",
      technologies: [ "PHP", "Laravel", "MySQL", "Tailwind CSS", "HTMX", "jQuery", "Laravel Nova", "Web Scraping", "AI Microservices" ],
    },
    {
      title: "Freelance Software Developer",
      company: "NityaPriya Dance Academy",
      period: "January 2025 - April 2025",
      description:
        "Led the end-to-end design and development of a dynamic Next.js website, seamlessly integrating Firebase and AWS DynamoDB for robust backend support. Implemented advanced SEO strategies that significantly boosted online visibility and streamlined the student enrollment process through an intuitive, user-friendly interface.",
      technologies: [ "Next.js", "Firebase", "AWS DynamoDB", "SEO", "JavaScript", "React" ],
    },
    {
      title: "Freelance Software Developer",
      company: "KP FAST",
      period: "November 2023 - March 2025",
      description:
        "Spearheaded the creation and successful launch of a cross-platform fitness monitoring app and accompanying website using Flutter and Firebase. Enhanced user engagement by 55%, achieving over 50 daily active users through intuitive design, real-time tracking, and seamless synchronization across devices.",
      technologies: [ "Flutter", "Firebase", "Dart", "Google Analytics", "Cross-Platform Development", "UI/UX Design" ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      school: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
      period: "2024-2026",
      gpa: "9.23/10",
      coursework: [
        "Software Engineering & Project Management",
        "Operating System",
        "Data Mining",
        "Design and Analysis of Algorithm",
        "Artificial Intelligence and Machine Learning",
        "Web Technology (Node.js, React, Flutter)",
        "Cloud Computing",
        "Deep Learning"
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "SVKM's Mithibai College of Arts, Science & Commerce",
      period: "2021-2024",
      gpa: "8.36/10",
      coursework: [
        "Operating Systems",
        "Computer Organization and Architecture",
        "Compiler Design",
        "Computer Networks",
        "Android Development",
        "Web Technology",
        "Information Retrieval"
      ],
    },
  ];

  const certifications = [
    {
      name: "Financial Accounting and Analysis",
      issuer: "Indian Institute of Management Bangalore",
      year: "2024",
    },
    // {
    //   name: "Google Cloud Professional",
    //   issuer: "Google Cloud",
    //   year: "2023",
    // },
    // {
    //   name: "React Developer Certification",
    //   issuer: "Meta",
    //   year: "2022",
    // },
  ];

  const languages = [
    { name: "English", level: 100 },
    { name: "Marathi", level: 90 },
    { name: "Hindi", level: 90 },
  ];

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">KP</span>
                  </div>
                  <CardTitle className="text-2xl text-white">
                    Kush Pai
                  </CardTitle>
                  <p className="text-cyan-300">Full Stack Developer</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-zinc-300">
                    <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>Available for opportunities</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>kushpaipla@gmail.com</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>+91 83559 58693</span>
                  </div>

                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-300">{lang.name}</span>
                        <span className="text-zinc-400">{lang.level}%</span>
                      </div>
                      <Progress value={lang.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-300">
                    <Heart className="h-5 w-5 mr-2" />
                    Interests
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
                        className="bg-zinc-700 text-zinc-300 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    My Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-300 space-y-4">
                  <p>
                    Hi! I&apos;m Kush, a driven and curious software developer 
                    currently pursuing my Master&apos;s in Computer Applications 
                    at VJTI, Mumbai. My passion for building impactful digital 
                    solutions took shape during my undergrad at Mithibai College, 
                    where I explored everything from web apps to cross-platform 
                    mobile development.
                  </p>
                  <p>
                    Over the years, I&apos;ve had the chance to lead and contribute 
                    to a wide range of projects — from fitness tracking apps and 
                    clinic management systems to collaborative editing platforms. 
                    I love working at the intersection of technology and human 
                    experience, and I aim to create products that are not only 
                    functional but intuitive and meaningful.
                  </p>
                  <p>
                    Beyond the screen, I&apos;m a national-level weightlifter, 
                    a five-time baseball division champion, and a firm believer 
                    in balance and discipline. Whether it&apos;s learning a new 
                    stack, contributing to open-source, or simply sketching out 
                    ideas, I&apos;m always seeking growth and inspiration in 
                    everything I do.
                  </p>
                </CardContent>

              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-white">
                    <Briefcase className="h-6 w-6 mr-3 text-cyan-400" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-cyan-400/30 pl-6 relative"
                    >
                      <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-2 top-2"></div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-300 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-zinc-400">{exp.period}</p>
                        <p className="text-zinc-300">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-zinc-700 text-zinc-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-white">
                    <GraduationCap className="h-6 w-6 mr-3 text-cyan-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-300 font-medium">
                          {edu.school}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-zinc-400 mt-1">
                          <span>{edu.period}</span>
                          <span>•</span>
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-zinc-300 mb-2">
                          Relevant Coursework:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {edu.coursework.map((course) => (
                            <div key={course} className="text-sm text-zinc-400">
                              • {course}
                            </div>
                          ))}
                        </div>
                      </div>
                      {index < education.length - 1 && (
                        <div className="border-t border-zinc-700/50 pt-6 mt-6"></div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-white">
                    <Award className="h-6 w-6 mr-3 text-cyan-400" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-zinc-700/30 rounded-lg p-4"
                      >
                        <h3 className="font-semibold text-white">
                          {cert.name}
                        </h3>
                        <p className="text-cyan-300 text-sm">{cert.issuer}</p>
                        <p className="text-zinc-400 text-sm">{cert.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
