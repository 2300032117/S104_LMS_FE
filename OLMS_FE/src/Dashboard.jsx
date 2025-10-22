import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Bot from './Bot';

function Dashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    console.log("User logged out.");
    navigate('/');
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="logo">Learn 4u</div>
        <div className="nav-item">🏠 Home</div>
        <div className="nav-item">🔍 Search</div>
        <div className="nav-item">📊 My Shelf</div>
        <div className="nav-item">📚 Contribute</div>
      </div>

      <div className="main">
        <div className="topbar">
          <div className="search-bar">
            <select>
              <option>All</option>
              <option>Books</option>
              <option>Authors</option>
            </select>
            <input type="text" placeholder="Search" />
          </div>
          <div className="controls">
            <button>🔍</button>
            <select>
              <option>Lang</option>
              <option>EN</option>
              <option>ES</option>
            </select>
            <div className="relative profile-dropdown">
              <div className="profile-bar" onClick={toggleDropdown}>
                <img src="profile.jpg" alt="User" />
                <span className="username">Sweety</span>
                <span className="dropdown-icon">▼</span>
              </div>

              {dropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">Profile</div>
                  <div className="dropdown-item">Favourite</div>
                  <div className="dropdown-item">Payments</div>
                  <div className="dropdown-item" onClick={handleLogout}>Logout</div>
                </div>
              )}
            </div>
            <button>🔔</button>
          </div>
        </div>

        <div className="feature-section">
          <div className="quote-card">
            <p>“There is more treasure in books than in all the pirate’s loot on Treasure Island.”</p>
            <p>"Laughter is timeless, imagination has no age, and dreams are forever."</p>
            <p>"When you believe in a thing, believe in it all the way, implicitly and unquestionable."</p>
            <p>"The more you like yourself, the less you are like anyone else, which makes you unique."</p>
            <p>"All our dreams can come true, if we have the courage to pursue them."</p>
            <p>"The way to get started is to quit talking and begin doing."</p>
            <p>"It’s kind of fun to do the impossible."</p>
            <p>"First, think. Second, believe. Third, dream. And finally, dare."</p>
            <small>- Walt Disney</small>
            <div className="dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          <div className="new-arrival">
            <div className="label">New Arrivals</div>
            <img src="book5.jpg" alt="Harry Potter" />
            <img src="book4.jpg" alt="Lean UX" />
           
          </div>
        </div>

        <h2 className="greeting">Good Morning</h2>
        <h4 className="subheading">Recommended for You</h4>

        <div className="book-list">
          <div className="book-card">
            <img src="book1.jpg" alt="Don't Make Me Think" />
          </div>
          <div className="book-card">
            <img src="book2.jpg" alt="Design of Everyday Things" />
          </div>
          <div className="book-card">
            <img src="book3.jpg" alt="Sprint" />
          </div>
          <div className="book-card">
            <img src="book4.jpg" alt="Lean UX" />
          </div>
          <div className="book-card">
            <img src="book7.jpg" alt="The Road to React" />
          </div>
          <div className="book-card">
            <img src="book8richdad.jpg" alt="Rich Dad Poor Dad" />
          </div>
          <div className="book-card">
            <img src="book9.jpg" alt="Computer Fundamentals & Programming in C" />
          </div>
          <div className="book-card">
            <img src="book10.jpg" alt="Java Beginner's Guide" />
          </div>
          <div className="book-card">
            <img src="book11.jpg" alt="Python Programming" />
          </div>
          <div className="book-card">
            <img src="book12.jpg" alt="Beginning JavaScript" />
          </div>
        </div>
      </div>

      <Bot />
    </div>
  );
}

export default Dashboard;
