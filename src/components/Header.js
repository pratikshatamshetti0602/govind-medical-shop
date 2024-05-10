import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import Logo1 from "../images/logo1.jpg";
import myprofile from "../images/myprofile.png";
import House from "../images/House.png";
import settings from "../images/settings.png";
import customer from "../images/customer.png";
import dashboard from "../images/dashboard.png";
import multiple from "../images/multiple.png";
import task from "../images/task.png";
import newproj from "../images/newproj.png";
import analysis from "../images/analysis.png";
import "../App.css";
/*import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"; */

function Header() {
  const [isActive, setIsActive] = useState(false); // State for mobile menu visibility
  const [showProfile, setShowProfile] = useState(false); // State for profile visibility
  const [showSubMenu, setShowSubMenu] = useState(false); // State for submenu visibility

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleProfileToggle = () => {
    setShowProfile(!showProfile);
  };

  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };
  

  return (
    <div>
      <div className={`header ${isActive ? "active" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="navbar">
          <ul className="nav_links">
          <li className="nav_link">
              <Link to="/">Home</Link>
            </li>

            <li className="nav_link">
              <Link to="/about">About</Link>
            </li>

            <li className="nav_link">
              <Link to="/activities">Products</Link>
            </li>

            <li className="nav_link">
              <Link to="/career">Services</Link>
            </li>

            <li className="nav_link">
              <Link to="/contact">Contact</Link>
            </li>

            {/* Your existing navigation links */}
            <li className="nav_link">
            <button1 className="profile-button" onClick={handleSubMenuToggle}>
              <img src={myprofile} alt="Profile" className="my-profile" style={{ border: 0 }} />
            </button1>
            <div className={`sub-menu-wrap ${showSubMenu ? "open-menu" : ""}`}>
                <div className="sub-menu">
                  <div className="user-info">
                    <img src={Logo1} alt="" />
                    <h2>Govind Medical</h2>
                  </div>
                  <div className="menu-icon">
                    <hr />
                  </div>
                  <a href="#" className="sub-menu-link" >
                    <img src={House} alt="" />
                    <p>Home</p>
                    <span>&gt;</span>
                  </a>
                  <a href="#" className="sub-menu-link" >
                    <img src={dashboard} alt="" />
                    <p>Dashboard</p>
                    <span>&gt;</span>
                  </a>
                  <a href="#" className="sub-menu-link" >
                    <img src={newproj} alt="" />
                    <p>Projects</p>
                    <span>&gt;</span>
                  </a>
                  <a href="#" className="sub-menu-link" >
                    <img src={task} alt="" />
                    <p>Tasks</p>
                    <span>&gt;</span>
                  </a>
                  <a href="#" className="sub-menu-link" >
                    <img src={analysis} alt="" />
                    <p>Reporting</p>
                    <span>&gt;</span>
                  </a>
                  <a href="#" className="sub-menu-link" >
                    <img src={multiple} alt="" />
                    <p>Users</p>
                    <span>&gt;</span>
                  </a>
                  <a href="#" className="sub-menu-link" >
                    <img src={customer} alt="" />
                    <p>Support</p>
                    
                  </a>
                  <a href="#" className="sub-menu-link" >
                    <img src={settings} alt="" />
                    <p>Settings</p>
                    
                  </a>


                </div>
              </div>

            </li>

           { /*
            <li className="sign-in-button ">
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </li>
            <SignedIn
              appearance={{
                elements: {
                  footer: {
                    display: "none",
                  },
                },
              }}
            >
              <UserButton />
            </SignedIn>
            */}
          </ul>
        </div>

        <div className="toggle" onClick={handleToggle}>
          <div className="menu_icon">
            <span className="top"></span>
            <span className="middle"></span>
            <span className="end"></span>
          </div>
        </div>

      </div>

     {/*  Profile component - rendered conditionally 
      {showProfile && <Profile />}
      */}
    </div>
  );
}

export default Header;
