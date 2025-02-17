import { Link } from "react-router-dom";
import firstAboutImg from "../assets/images/26b56436f3438eea8259f331de448113.jpg";
import SecondAboutImg from "../assets/images/9e67ee1d8b83d89a78993c4d924285e0.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="images">
            <img
              src={firstAboutImg}
              alt="Moroccan Festival"
              className="image-primary"
            />
            <img
              src={SecondAboutImg}
              alt="Moroccan Art"
              className="image-secondary"
            />
          </div>
          <div className="text-part">
            <h5>About us</h5>
            <h2>Experience the Heart of Culture</h2>
            <p>
              Immerse yourself in Morocco's rich tapestry of traditions, art,
              and heritage. From captivating festivals and timeless rituals to
              contemporary exhibitions, discover events that celebrate the soul
              of Moroccan culture. Let every event be your next adventure.
            </p>
            <Link to="about" className="btn btn-primary">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
