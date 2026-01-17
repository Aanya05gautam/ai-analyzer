import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setMessage(`Welcome, ${email.split("@")[0]}!`);
      setEmail("");
      setPassword("");
    } else {
      setMessage("Please enter email and password!");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-200">
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-600 font-medium">{message}</p>}
    </div>
  );
};

export default LoginForm;

