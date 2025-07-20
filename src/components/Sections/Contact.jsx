import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-center bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-center">Email Me</h3>

              <a
                href="mailto:keerthisure179@gmail.com"
                className="flex items-center justify-center bg-blue-500 text-white text-center py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)"
              >
                keerthisure179@gmail.com
              </a>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl text-center font-bold mb-2">
                Connect on LinkedIn
              </h3>

              <a
                href="https://www.linkedin.com/in/keerthi-sure/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex item-center justify-center text-center bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)"
              >
                linkedin.com/in/keerthi-sure
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
