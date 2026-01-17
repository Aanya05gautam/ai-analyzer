import React, { useState } from "react";
import AnalyzerForm from "../components/AnalyzerForm";
import AnalyzerResult from "../components/AnalyzerResult";

const Analyzer = () => {
  const [result, setResult] = useState(null);

  const handleAnalyze = (inputText) => {
    const analysis = `Words: ${inputText.split(" ").length}, Characters: ${inputText.length}`;
    setResult(analysis);
  };

  return (
    <div className="flex flex-col items-center py-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Text Analyzer</h2>
      <AnalyzerForm onAnalyze={handleAnalyze} />
      {result && <AnalyzerResult result={result} />}
    </div>
  );
};

export default Analyzer;
