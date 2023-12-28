import React from "react";
import appleLogo from "../assets/logos_apple-app-store.svg";
import airbnbLogo from "../assets/logos_airbnb.svg";
import andriodLogo from "../assets/logos_android-icon.svg";
import apiaryLogo from "../assets/logos_apiary.svg";
import baseCampLogo from "../assets/logos_basecamp.svg";
import ibmLogo from "../assets/logos_ibm.svg";
import "./Partners.css";
export default function Partners() {
  return (
    <section className="partners">
      <div className="container flow">
        <h2>Partners</h2>
        <p className="subtitle">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="logo-container">
          <img src={appleLogo} alt="" />
          <img src={apiaryLogo} alt="" />
          <img src={andriodLogo} alt="" />
          <img src={baseCampLogo} alt="" />
          <img src={airbnbLogo} alt="" />
          <img src={ibmLogo} alt="" />
        </div>
        <a href="#" className="btn btn-secondary btn-small">
          All Partners
        </a>
      </div>
    </section>
  );
}
