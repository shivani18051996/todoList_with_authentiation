import React, { useState } from 'react';
import './Login.css'; 
import { generateToken } from '../consts';


function Login({ setToken }) {
  const [user, setUser] = useState({ email: '', password: '' });

  const authenticateUser = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email === "shivani@gmail.com" && password === "Admin@123") {
      const token = generateToken(16);
      localStorage.setItem('token', token);
      setToken(token);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="login-container">
      <h2>LOGIN FORM</h2>
      <form onSubmit={authenticateUser} className="login-form">
        <input
          type="email"
          name="email"
          className="login-input"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          className="login-input"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
