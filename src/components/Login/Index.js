import React, { useState } from "react";
import axios from "axios";

const  Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", credentials);
      setMessage(response.data.message);
      if (response.data.message === "Login successful") {
        window.location.href = "/dashboard"; // Redirect to Dashboard
      }
    } catch (error) {
      setMessage("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
}

export default Login;
