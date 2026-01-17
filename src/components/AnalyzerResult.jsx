import React from "react";

const AnalyzerResult = ({ result }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6 w-full max-w-lg text-gray-800">
      <h2 className="text-xl font-semibold mb-2 text-blue-600">Analysis Result</h2>
      <p>{result}</p>
    </div>
  );
};

export default AnalyzerResult;


