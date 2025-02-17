import { Link } from "react-router-dom";

const OpenDoorsDifference = () => {
  return (
    <section className="open-doors-difference">
      <div className="container">
        <h2>Discover the Open Doors Morocco Difference</h2>
        <p className="intro-text">
          Traveling with Open Doors Morocco comes with unique guarantees:
        </p>

        <div className="difference-grid">
          <div className="difference-item">
            <h3>Our Guides</h3>
            <p>
              Our hosts grew up as nomads in the Sahara Desert. They’re
              responsible, professional, and committed to making sure you have
              an amazing trip.
            </p>
            <p>
              Although rare in the industry, our hosts are paid a living wage.
              They love their jobs, love their country, and they love sharing
              it. You will return home with new friends!
            </p>
          </div>
          <div className="difference-item">
            <h3>Our Expertise</h3>
            <p>
              Unlike other tour companies, our main office is in Marrakech. As
              owners, we are intimately involved in every aspect of your tour,
              so you can be confident your trip will fulfill your dreams.
            </p>
            <p>
              There’s no place we haven’t seen and experienced. We’ve been to
              every hotel and riad we recommend.
            </p>
          </div>
          <div className="difference-item">
            <h3>Our Promise</h3>
            <p>
              As our guests, you are treated like royalty. You will always feel
              safe and well-protected.
            </p>
            <p>
              We’ve been operating in Morocco since 2014. Members of the
              community know and respect us. We work closely with you to create
              life-changing experiences based upon what you really want!
            </p>
          </div>
        </div>

        <div className="actions">
          <Link to="about#team" className="btn btn-primary">
            Meet the Team
          </Link>
          <Link to="#sample-tours" className="btn btn-primary">
            View Sample Tours
          </Link>
          <Link to="#testimonials" className="btn btn-primary">
            Read Client Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OpenDoorsDifference;
