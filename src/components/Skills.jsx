import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiPython,
} from "react-icons/di";
import { SiDjango, SiMicrosoftexcel, SiPowerbi, SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-500" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss className="text-teal-400 text-5xl hover:text-teal-300 transition" />
        ),
      },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400" /> },
      { name: "React", icon: <DiReact className="text-blue-400" /> },
    ],
  },
  {
    category: "Backend & Data Analysis",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
      { name: "Python", icon: <DiPython className="text-blue-500" /> },
      { name: "Django", icon: <SiDjango className="text-green-600" /> },
      { name: "Excel", icon: <SiMicrosoftexcel className="text-green-500" /> },
      { name: "Power BI", icon: <SiPowerbi className="text-yellow-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-5xl mx-auto flex flex-col justify-center px-8 text-gray-200 pb-16 md:py-20"
      id="skills"
    >
      <Reveal>
        <h2 className="text-5xl font-bold mb-8 text-center">Skills</h2>
        <p className="text-center mb-12 text-gray-400 text-lg">
          I have experience working on frontend, backend, and data analysis projects. Check them
          <a href="#" className="underline text-purple-400 hover:text-purple-300"> here</a>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-700 p-8 rounded-xl bg-purple-900/20 shadow-lg"
            >
              <h3 className="text-3xl font-semibold mb-6 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <span className="text-4xl">{tech.icon}</span>
                    <span className="text-xl">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
