import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="title">South Lake Union</h1>
      <ul className="nav-links">
        <li>Events</li>
        <li>Resources</li>
        <li>Membership</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar
