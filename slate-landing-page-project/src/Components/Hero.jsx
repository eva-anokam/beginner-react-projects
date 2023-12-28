import heroImg from "../assets/hero.svg";
import "./Hero.css"
export default function Hero() {
  return (
    <section className="hero">
      <div className="container flow">
        <h1>Work at the speed of thought</h1>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
        <div className="btn-group">
          <a href="#" className=" btn btn-primary">Try it out</a>
          <a href="#" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
      <div className="img-group">
        <img src={heroImg} alt="hero-image" />
      </div>
    </section>
  );
}
