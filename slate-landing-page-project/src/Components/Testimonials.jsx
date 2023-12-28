import React from "react";
import "./Testimonials.css";
import womanProfile from "../assets/woman-profile.jpg";
export default function Testimonials() {
  return (
    <section className="testiomials">
      <div className="container flow">
        <h2>Testimonials</h2>
        <div className="card-container testimonials-card-container">
          <div>
            <div className="testimonial-top">
              <div className="testimonial-img-container">
                <img src={womanProfile} alt="" />
              </div>
              <p className="testimonial-name">
                Claire Bell <span>Designer</span>
              </p>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              accusamus sequi facilis excepturi qui possimus voluptatem
              repellendus autem commodi sed.
            </p>
          </div>
          <div>
            <div className="testimonial-top">
              <div className="testimonial-img-container">
                <img src={womanProfile} alt="" />
              </div>
              <p className="testimonial-name">
                Franscisco Lane <span>Designer</span>
              </p>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              accusamus sequi facilis excepturi qui possimus voluptatem
              repellendus autem commodi sed.
            </p>
          </div>
          <div>
            <div className="testimonial-top">
              <div className="testimonial-img-container">
                <img src={womanProfile} alt="" />
              </div>
              <p className="testimonial-name">
                Ralph Fisher <span>Designer</span>
              </p>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              accusamus sequi facilis excepturi qui possimus voluptatem
              repellendus autem commodi sed.
            </p>
          </div>
          <div>
            <div className="testimonial-top">
              <div className="testimonial-img-container">
                <img src={womanProfile} alt="" />
              </div>
              <p className="testimonial-name">
                Jorge Murphy <span>Designer</span>
              </p>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              accusamus sequi facilis excepturi qui possimus voluptatem
              repellendus autem commodi sed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
