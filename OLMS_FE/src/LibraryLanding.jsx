import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Required for navigation
import "./index.css";

export default function LibraryLanding() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    name: "",
    collegeId: "",
    role: "student",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginClick = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const handleSignupClick = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

 const handleSignupSubmit = async (e) => {
  e.preventDefault();

  if (signupData.password !== signupData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // ✅ Correct: use signupData, not loginData
  const payload = {
    fullname: signupData.name,
    email: signupData.email.toLowerCase(),
    password: signupData.password,
  };

  try {
    const response = await fetch("http://localhost:8081/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      alert("Signup successful!");
      closeModal();
      // navigate("/dashboard");
    } else {
      alert("Signup failed: " + data.message);
    }
  } catch (error) {
    alert("Error connecting to backend: " + error.message);
  }
};



  const handleLoginSubmit = async (e) => {
  e.preventDefault();

  // Prepare payload matching backend
  const payload = {
    email: loginData.username, // your backend expects "email"
    password: loginData.password,
  };

  try {
    const response = await fetch("http://localhost:8081/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      alert("Login successful!");
      closeModal();
      navigate("/dashboard"); // redirect to dashboard
    } else {
      alert("Login failed: " + data.message);
    }

  } catch (error) {
    alert("Error connecting to backend: " + error.message);
  }
};


  return (
    <div className="container">
      <header className="header">
        <div className="logo">📖 Learn4U</div>
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="button-group">
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
          <button className="signup-btn" onClick={handleSignupClick}>Sign Up</button>
        </div>
      </header>

      <section className="hero">
        <h1>Welcome to Our Digital Library</h1>
        <p>Explore a world of knowledge with thousands of books, articles, and more.</p>
        <button onClick={handleLoginClick}>Start Exploring 📚</button>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>📚 Huge Collection</h3>
          <p>Access thousands of books in various genres.</p>
        </div>
        <div className="feature-card">
          <h3>📖 Easy Borrowing</h3>
          <p>Borrow and manage your reading list effortlessly.</p>
        </div>
        <div className="feature-card">
          <h3>🌟 Personalized</h3>
          <p>Get recommendations based on your reading history.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Library Management System | All Rights Reserved</p>
      </footer>
    </div>
  );
}
