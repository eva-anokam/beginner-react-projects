import lineChart from "../assets/line-chart.svg";
import "./CTA.css"
export default function CTA() {
    return (
        <section>
            <div className="container flow cta-container">
            <div className="flow cta-text">
                <h2>OpenType feature and Variable fonts</h2>
                <a href="#" className="btn btn-primary btn-small">Try For Free</a>
            </div>
            <div className="cta-img-container">
                <img src={lineChart} alt="" />
            </div>

            </div>
        </section>
    )
}