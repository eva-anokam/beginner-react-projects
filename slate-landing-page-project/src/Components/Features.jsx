import featuresImg from "../assets/features.svg";
import featureIcon1 from "../assets/feature-icon1.svg"
import featureIcon2 from "../assets/feature-icon2.svg";
import featureIcon3 from "../assets/feature-icon3.svg";
import "./Features.css"
export default function Features() {
  return (
    <section className="features">
      <div className="container flow">
        <h2>Features</h2>
        <p className="subtitle">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
        <div className="img-container">
          <img src={featuresImg} alt="features" />
          <ul className="features__list">
            <li>
              <p className="title">
                <span>
                  <img src={featureIcon1} alt="" />
                </span>
                A single source fo truth
              </p>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </li>
            <li>
              <p className="title">
                <span>
                  <img src={featureIcon2} alt="" />
                </span>
                Intuitive interface
              </p>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </li>
            <li>
              <p className="title">
                <span>
                  <img src={featureIcon3} alt="" />
                </span>
                Or with rules
              </p>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
