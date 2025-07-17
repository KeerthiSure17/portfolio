import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontEndSkills = [
    "React",
    "Vue",
    "Angular",
    "TypeScript",
    "TailWindCSS",
  ];
  const backEndSkills = ["Python", "Node.js", "Java"];
  return (
    <section
      id="#about"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-center bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEndSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backEndSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 ">🏫 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Masters in IT Security</strong> - Ontario Tech
                    University (2023-2025)
                  </li>
                  <li>
                    <strong>
                      B.Tech in Electronics and Communication Engineering
                    </strong>{" "}
                    - Jawaharlal Nehru Technological University (2016-2020)
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 ">👩🏻‍💻 Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Application Development Analyst (Full Stack Developer) at
                      Accenture (May 2021 - Aug 2023)
                    </h4>
                    <p></p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Project Engineer at Wipro Technologies (Sept 2019 - May
                      2021)
                    </h4>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
