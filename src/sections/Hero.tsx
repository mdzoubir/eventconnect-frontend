import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Best events in Morocco</h1>
        <p>
          Uncover the beauty of Morocco's vibrant traditions, festivals, and
          art.
          <br />
          From timeless heritage to modern creativity, let every event inspire
          your journey.
        </p>
        <Link to="events" className="btn btn-primary">
          Explore Events
        </Link>
      </div>
    </section>
  );
};

export default Hero;
