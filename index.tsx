// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: Use for styling

// App Component
function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="hero">
      <h2>Welcome to My Website</h2>
      <p>This is a simple React page to get started.</p>
      <button>Learn More</button>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);