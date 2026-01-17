import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">AI Analyzer</div>
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-200">Home</Link>
          <Link to="/analyzer" className="hover:text-yellow-200">Analyzer</Link>
          <Link to="/about" className="hover:text-yellow-200">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


