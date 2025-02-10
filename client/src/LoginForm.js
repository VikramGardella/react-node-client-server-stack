import React, { useState } from "react";
import './App.css';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Logging in with:", { username, password });

    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Login successful!"); // Replace with navigation logic
      } else {
        alert(`Login failed: ${data.message}`);
      }

  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:  </label>
          <input
            className="textfield"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>

        <div>
          <label>Password:  </label>
          <input
            className="textfield"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <button className="loginbutton" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
