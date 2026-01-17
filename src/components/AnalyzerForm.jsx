import React, { useState } from "react";

const AnalyzerForm = ({ onAnalyze }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAnalyze(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg flex flex-col gap-4">
      <textarea
        rows={5}
        placeholder="Enter text to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
        Analyze
      </button>
    </form>
  );
};

export default AnalyzerForm;


