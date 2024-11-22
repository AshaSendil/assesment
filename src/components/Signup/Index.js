import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    profession: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/signup", formData);
      alert(response.data.message);
      navigate("/login"); // Navigate to the login page on success
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <select name="profession" onChange={handleChange} required>
        <option value="">Select Profession</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
