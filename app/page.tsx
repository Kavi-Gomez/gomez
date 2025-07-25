"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Code,
  Briefcase,
  User,
  MessageSquare,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
    "Docker",
    "AWS",
    "REST APIs",
    "GraphQL",
    "Redux",
    "Firebase",
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: "Blog Platform",
      description:
        "Content management system with markdown support, comment system, and SEO optimization for bloggers.",
      tech: ["Next.js", "MDX", "Prisma", "NextAuth"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">KL</div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors duration-200 hover:text-gray-300 ${
                      activeSection === item
                        ? "text-white border-b-2 border-white"
                        : "text-gray-400"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-2 space-y-1">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 capitalize text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              KAVINDU LAKSHAN
            </h1>
            <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & Next.js Specialist
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern web
              technologies. Passionate about creating scalable, performant
              applications that make a difference.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kavindu@example.com"
              className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </button>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-16 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Hello, I'm Kavindu</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with expertise in Next.js
                and modern web technologies. With a strong foundation in both
                frontend and backend development, I create seamless digital
                experiences that combine beautiful design with robust
                functionality.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My journey in web development started with a curiosity about how
                things work on the internet. Today, I specialize in building
                scalable applications using React, Next.js, Node.js, and various
                database technologies.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 border border-white/10 rounded-lg">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-gray-400 text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-4 border border-white/10 rounded-lg">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto border-2 border-white/20 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <User size={120} className="text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <div className="h-1 w-16 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="p-4 text-center border border-white/10 rounded-lg hover:border-white/30 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm font-medium">{skill}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 border border-white/10 rounded-lg">
              <Code className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-gray-400 text-sm">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-lg">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <p className="text-gray-400 text-sm">
                Node.js, Express, Databases, APIs
              </p>
            </div>
            <div className="text-center p-6 border border-white/10 rounded-lg">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-xl font-bold mb-2">Full Stack Solutions</h3>
              <p className="text-gray-400 text-sm">
                End-to-end application development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-16 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-white/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="h-1 w-16 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together to bring your ideas to
              life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-400">kavindu@example.com</p>
            </div>
            <div className="p-6">
              <Github className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/kavindulakshan</p>
            </div>
            <div className="p-6">
              <Linkedin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/kavindulakshan</p>
            </div>
          </div>

          <a
            href="mailto:kavindu@example.com"
            className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Kavindu Lakshan. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #374151 #111827;
        }

        *::-webkit-scrollbar {
          width: 6px;
        }

        *::-webkit-scrollbar-track {
          background: #111827;
        }

        *::-webkit-scrollbar-thumb {
          background-color: #374151;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
