import { Link } from "react-router-dom";
import image1 from "../assets/images/IMG_74DF90841925-1.jpeg";
import image2 from "../assets/images/Traditional-Moroccan-Berber-clothing--969x1024.jpg";
import image3 from "../assets/images/b8fc0f7d25c590af2ae36cbb56312575.jpg";
import image4 from "../assets/images/36ceb6e46d3eabd224b2b70a71231e8f.jpg";

const FeaturedEvents = () => {
  return (
    <section id="sample-tours" className="featured-events">
      <div className="container">
        <h2>Unforgettable tours of Morocco tailored to you.</h2>
        <div className="event-list">
          <div className="event-item">
            <img src={image1} alt="Casablanca Jazz Festival" />
            <div className="event-details">
              <h3>Casablanca Jazz Festival</h3>
              <h5>6 DAYS</h5>
              <p>
                Experience the rhythm and energy of jazz music in the heart of
                Casablanca.
              </p>
              <Link to="event-details" className="btn btn-primary">
                Discover the Festival
              </Link>
            </div>
          </div>
          <div className="event-item">
            <img src={image2} alt="Marrakech Film Festival" />
            <div className="event-details">
              <h3>Marrakech Film Festival</h3>
              <h5>4 DAYS</h5>
              <p>
                A celebration of cinema featuring screenings and discussions
                with renowned filmmakers.
              </p>
              <Link to="event-details" className="btn btn-primary">
                Explore the Films
              </Link>
            </div>
          </div>
          <div className="event-item">
            <img src={image3} alt="Fez World Sacred Music Festival" />
            <div className="event-details">
              <h3>Fez World Sacred Music Festival</h3>
              <h5>10 DAYS</h5>
              <p>
                An enchanting journey into the spiritual world of music and art
                in Fez.
              </p>
              <Link to="event-details" className="btn btn-primary">
                Experience the Music
              </Link>
            </div>
          </div>
          <div className="event-item">
            <img src={image4} alt="Essaouira Gnaoua Festival" />
            <div className="event-details">
              <h3>Essaouira Gnaoua Festival</h3>
              <h5>5 DAYS</h5>
              <p>
                Dive into the vibrant rhythms and soulful music of Essaouira's
                iconic festival.
              </p>
              <Link to="event-details" className="btn btn-primary">
                Feel the Rhythm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
