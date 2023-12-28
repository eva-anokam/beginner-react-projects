import React from "react";
import mapIcon from "../assets/bx_bx-map.svg";
import phoneIcon from "../assets/ic_baseline-phone-android.svg";
import facebookIcon from "../assets/ant-design_facebook-filled.svg";
import linkendInIcon from "../assets/ant-design_linkedin-filled.svg";
import twitterIcon from "../assets/ant-design_twitter-outlined.svg";
import "./Footer.css";
export default function Footer() {
  return (
    <section className="container footer">
      <div className="footer-menu-container">
        <div className="footer-menu">
          <p className="title">Resources</p>
          <p>Home</p>
          <p>Examples</p>
          <p>Pricing</p>
          <p>Updates</p>
        </div>
        <div className="footer-menu">
          <p className="title">Product</p>
          <p>Home</p>
          <p>Examples</p>
          <p>Pricing</p>
          <p>Updates</p>
        </div>
        <div className="footer-menu">
          <p className="title">About</p>
          <p>Home</p>
          <p>Examples</p>
          <p>Pricing</p>
          <p>Updates</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-contact">
          <img src={mapIcon} alt="" />
          <p>7480 Mockingbird Hill Unknown</p>
        </div>
        <div className="footer-contact">
          <img src={phoneIcon} alt="" />
          <p>(239) 555-0108</p>
        </div>
        <div className="footer-social">
          <img src={twitterIcon} alt="" />
          <img src={facebookIcon} alt="" />
          <img src={linkendInIcon} alt="" />
        </div>
      </div>
    </section>
  );
}
