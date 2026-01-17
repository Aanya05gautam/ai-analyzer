import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center py-20 px-4 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">About AI Analyzer</h2>
      <p className="mb-4 text-lg">
        AI Analyzer is a modern web application that uses Artificial Intelligence to analyze text. You can check word count, character count, and eventually perform advanced analysis like sentiment and grammar checks.
      </p>
      <p className="mb-4 text-lg">
        It is fully interactive and user-friendly. Built with <strong>React</strong> and <strong>TailwindCSS</strong>, it demonstrates how AI can help you understand text instantly and visually.
      </p>
      <p className="text-lg">
        Navigate through the <strong>Analyzer</strong> to test it yourself, or log in via the <strong>Home</strong> page.
      </p>
    </div>
  );
};

export default About;

