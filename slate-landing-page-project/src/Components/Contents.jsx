import React from "react";
import Macbook from "../assets/Macbook-Pro.svg";
import BoardNotification from "../assets/Boards-Notifications.svg";
import "./Contents.css";
export default function Contents() {
  return (
    <section className="contents">
      <div className="container flow">
        <h2>Contents</h2>
        <p className="subtitle">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="card-container">
          <div className="card flow">
            <h3>Work</h3>
            <p>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </p>
            <a href="#" className="btn btn-primary btn-small">
              Sign Up
            </a>
            <img src={Macbook} alt="" />
          </div>
          <div className="card flow">
            <h3>Design with real data</h3>
            <p>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </p>
            <a href="#" className="btn btn-primary btn-small">
              Try For Free
            </a>
            <img src={BoardNotification} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
