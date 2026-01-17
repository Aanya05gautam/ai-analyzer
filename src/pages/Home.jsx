import React from "react";
import LoginForm from "../components/LoginForm";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">Welcome to AI Analyzer</h1>
      <LoginForm />
    </div>
  );
};

export default Home;
