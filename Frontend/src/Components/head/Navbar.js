import React, { useState, useRef} from "react";
import {Link} from 'react-router-dom';
import "./NavBar.css";
import Header from "./Header";


const NavBar = () => {
  const [showHeader, setShowHeader] = useState(false);
  const headerRef = useRef(null);

  // ✅ Close header only if BOTH list item & header are not hovered
  const handleMouseLeave = () => {
    setTimeout(() => {
      if (
        headerRef.current &&
        !headerRef.current.matches(":hover")
      ) {
        setShowHeader(false);
      }
    }, 200); // Small delay for smoother effect
  };

  return (
    <>
      <nav className="navbar custom-navbar">
        <div className="container">
          <img src="#" alt="Logo" width="30" height="24" className="logo" />
          <p className="logo">Mediator</p>

        
          {/* Navbar Items */}
          <div className="navlist" id="navbarNav">
            <ul className="navbar-nav">
              {/* ✅ Hovering "Features" opens header */}
              <li
                className="nav-item"
                onMouseEnter={() => setShowHeader(true)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to='/'><a className="nav-link" href="#">Features</a></Link>
              </li>
              <Link to='/App'><li className="nav-item"><a className="nav-link" href="#">App</a></li></Link>
              <Link to='/pricing'><li className="nav-item"><a className="nav-link" href="#">Pricing</a></li></Link>

              <Link to='/integration'><li className="nav-item"><a className="nav-link" href="#">Integrations</a></li></Link>
              <li className="nav-item">
                <a className="nav-link nav-item" href="#" id="helpDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Help </a>
                <ul className="dropdown-menu">
                  
                </ul>
              </li>
            </ul>

            {/* Login and CTA Button */}
            <Link to='/signup'> <button className="header-btn">Log In</button></Link>
            <button className="header-btn2">Start Free Trial</button>
          </div>
        </div>
      </nav>

      {/* ✅ Header stays open when hovering over it */}
      {showHeader && (
        <div
          className="header-show"
          ref={headerRef}
          onMouseEnter={() => setShowHeader(true)}
          onMouseLeave={handleMouseLeave}  // Close when leaving header
        >
          <Header />
        </div>
      )}
    </>
  );
};

export default NavBar;
