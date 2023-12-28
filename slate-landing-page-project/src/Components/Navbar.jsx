import logo from "../assets/logo.svg"
import React from "react";
import "./Navbar.css"
export default function Navbar() {
    return (
      <nav className="container">
        <a href="index.html" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <input type="checkbox" name="menu-bars" id="menu-bars-control" />
        <label htmlFor="menu-bars-control">
          <div className="menu-bars">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </label>
        <div className="menu">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div>
            <a href="#" className="btn btn-secondary btn-small">Login</a>
          </div>
        </div>
      </nav>
    );
}