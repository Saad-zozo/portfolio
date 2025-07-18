import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Monitor,
  Smartphone,
  Database,
  Settings,
  Rocket,
  Globe,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiOpenai,
  SiPytorch,
  SiLangchain,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <SiReact className="text-sky-500 w-8 h-8" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600 w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 w-8 h-8" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500 w-8 h-8" /> },
  { name: "LangChain", icon: <SiLangchain className="text-purple-500 w-8 h-8" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-orange-500 w-8 h-8" /> },
  { name: "OpenAI", icon: <SiOpenai className="text-black w-8 h-8" /> },
];

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive UI using React and Tailwind.",
    icon: <Monitor className="w-8 h-8 text-primary" />,
  },
  {
    title: "Mobile App Development",
    description: "Developing cross-platform mobile apps for Android and iOS.",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
  },
  {
    title: "Backend Development",
    description: "Creating robust backend services with Node.js and Express.",
    icon: <Database className="w-8 h-8 text-primary" />,
  },
  {
    title: "Automation & Integrations",
    description: "Integrating APIs and automating workflows for efficiency.",
    icon: <Settings className="w-8 h-8 text-primary" />,
  },
  {
    title: "AI & Chatbot Solutions",
    description: "Delivering intelligent solutions powered by AI and NLP.",
    icon: <Rocket className="w-8 h-8 text-primary" />,
  },
  {
    title: "Web Development",
    description: "Creating complete websites with modern UI/UX and backend integration.",
    icon: <Globe className="w-8 h-8 text-primary" />,
  },
];

const projects = [
  "Booking App UI/UX",
  "E-commerce Platform",
  "Chatbot Assistant",
  "Real Estate Dashboard",
  "Online Learning Portal",
  "Startup Landing Page",
];

const testimonials = [
  {
    name: "Alex Cherri",
    role: "CEO, Advertisement",
    quote: "Working with Saad was a game changer. He automated processes we didn’t know could be automated!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Gagan Arora",
    role: "Founder, DesignGaga",
    quote: "Saad delivered a powerful AI chatbot for Reddit that improved our customer engagement instantly.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Dawei Wang",
    role: "Manager",
    quote: "Incredible Python skills and problem-solving. We saved countless hours thanks to his custom tools.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function PortfolioPage() {
  const { scrollYProgress } = useScroll();

  const Section = ({ children }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="my-16 px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.section>
    );
  };

  useEffect(() => {
    document.body.classList.remove("dark");
  }, []);

  return (
    <div className="relative">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 origin-left"
      />

      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div
          className="absolute w-full h-full bg-no-repeat bg-cover opacity-30 animate-pulse"
          style={{ backgroundImage: "url('/stars.svg')", backgroundPosition: "top" }}
        ></div>
        <div
          className="absolute w-full h-full bg-no-repeat bg-cover opacity-20 animate-bounce"
          style={{ backgroundImage: "url('/clouds.svg')", backgroundPosition: "bottom" }}
        ></div>
      </div>

      <a
        href="/Saad_Ayub_Resume.pdf"
        download
        className="fixed bottom-6 right-6 z-50 bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-all"
      >
        Download Resume
      </a>
      <a
        href="https://wa.me/923013222808"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-xl hover:bg-green-600 transition-all"
        title="Chat with me"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      <main className="min-h-screen p-6 bg-transparent text-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <Section>
            <div className="text-center space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600"
              >
                Saad Ayub
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl font-medium"
              >
                AI Engineer | Python Developer | Automation & Chatbot Specialist
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-md text-gray-500 italic"
              >
                Microsoft Certified Azure AI Engineer Associate
              </motion.p>
              <motion.div
                className="flex justify-center gap-6 mt-4"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <a href="mailto:realsaadayub@outlook.com" className="hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://github.com/Saad-zozo" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/saad-ayub-427859322" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </Section>

          <Section>
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8 place-items-center">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {tech.icon}
                  <span className="text-sm mt-2 text-muted-foreground">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">What I Can Do For You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((title, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <h4 className="text-lg font-semibold">{title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    A modern, fully responsive solution with elegant animations.
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-4xl font-bold text-center mb-12 text-green-700">What People Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl shadow-md bg-white border border-gray-200 text-center"
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="mx-auto w-16 h-16 rounded-full mb-4 border"
                  />
                  <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
                  <h4 className="font-bold text-md text-blue-600">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section>
            <div className="text-center py-16 space-y-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
              <h2 className="text-4xl font-extrabold text-blue-800">
                Let’s Work Together
              </h2>
              <p className="text-gray-700 text-md max-w-xl mx-auto">
                Whether you're looking to save hours, engage more leads, or create cutting-edge AI tools, I can help you build exactly what you need. Let's automate and innovate—together.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScrmRnZiyC-W1mvmZVBa0oHV-ur5fFzJtoy5MwEG0nPLoR0QQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-700 text-white px-8 py-3 text-lg hover:bg-blue-800">
                  Book a Free Discovery Call
                </Button>
              </a>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}