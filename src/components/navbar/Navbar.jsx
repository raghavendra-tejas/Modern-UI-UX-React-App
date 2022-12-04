import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-link">
        <div className="navbar-link_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-link_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT3</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Out</button>
      </div>
    </div>
  );
}

export default Navbar;
