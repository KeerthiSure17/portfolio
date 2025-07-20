import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const SkillShow = ({ skills, skillType }) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
      <h3 className="text-xl font-bold mb-4"> {skillType}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const frontEndSkills = [
    "React",
    "Angular",
    "Redux",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "SASS",
    "Bootstrap",
    "Tailwind CSS",
    "Storybook",
    "Responsive Design",
  ];
  const backEndSkills = [
    "Python(Flask, Django)",
    "Node.js",
    "Java(SpringBoot)",
    "RESTful APIs",
    "GraphQL",
    "JWT",
    "OAuth",
  ];

  const dataBases = ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB"];

  const devOps = ["Git", "GitHub Actions", "Jenkins", "Docker", "AWS"];

  const testing = ["Jest", "React Testing Library", "Mocha", "Cypress"];

  return (
    <section
      id="#about"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-center bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 mb-6 text-center">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillShow skills={frontEndSkills} skillType="Frontend" />
            <SkillShow skills={backEndSkills} skillType="Backend" />
            <SkillShow skills={dataBases} skillType="DataBases" />
            <SkillShow skillType="DevOPS & Cloud" skills={devOps} />
            <SkillShow skillType="Testing" skills={testing} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
