import apple from "../assets/apple.jpg";
import computer from "../assets/computer.jpg";
import coffee from "../assets/coffee.jpg";
import entrepreneur from "../assets/entrepreneur.jpg";
import entrepreneur2 from "../assets/entrepreneur2.jpg";
import home from "../assets/home.jpg";
import woman from "../assets/woman.jpg";
import "./Gallery.css"
export default function Gallery() {
    return (
      <section>
        <div className="container flow">
        <h2>Gallery</h2>
        <p className="subtitle">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
            </p>
          <div className="image-container">
            <div>
                <img src={apple} alt="" />
            </div>
            <div className="">
                <img src={coffee} alt="" />

            </div>
            <div>
                <img src={computer} alt="" />

            </div>
            <div>
                <img src={entrepreneur} alt="" />

            </div>
            <div>
                <img src={entrepreneur2} alt="" />

            </div>
            <div>
                <img src={home} alt="" />

            </div>
            <div>
                <img src={woman} alt="" />
            </div>
            </div>
            <a href="#" className="btn btn-secondary btn-small">See more</a>
        </div>
      </section>
    );
}