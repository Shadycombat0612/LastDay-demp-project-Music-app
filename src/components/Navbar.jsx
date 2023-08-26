import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <div className="navbar-logo">
      
      
        <h1 className="navbar-brand">Music App</h1>
        <ul className="nav">
          <li className="nav-item">
            <a href="/" className="nav-btn">Home</a>
          </li>
          <li className="nav-item">
            <a href="/all-music" className="nav-btn">All Music</a>
          </li>
          <li className="nav-item">
            <a href="/favorites" className="nav-btn">Favorites</a>
          </li>
          <li className="nav-item">
            <a href="/item1" className="nav-btn">Recently added</a>
          </li>
          <li className="nav-item">
            <a href="/item2" className="nav-btn">New songs</a>
          </li>
          <li className="nav-item">
            <a href="/item3" className="nav-btn">Artist</a>
          </li>
          </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
