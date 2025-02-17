import { Link } from "react-router-dom";
import adressIcon from "../assets/images/icons/placeholder.png";
import emailIcon from "../assets/images/icons/email.png";
import phoneIcon from "../assets/images/icons/phone.png";
const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-intro">
          We’d love to hear from you! Feel free to reach out using the options
          below or send us a message.
        </p>
        <div className="contact-content">
          <div className="contact-cards">
            <div className="contact-card">
              <img src={adressIcon} alt="Address Icon" />
              <div>
                <h3>Address</h3>
                <p>
                  123 Moroccan Street,
                  <br />
                  Marrakech, Morocco
                </p>
              </div>
            </div>
            <div className="contact-card">
              <img src={emailIcon} alt="Email Icon" />
              <div>
                <h3>Email</h3>
                <p>
                  <Link to="mailto:info@example.com">info@example.com</Link>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <img src={phoneIcon} alt="Phone Icon" />
              <div>
                <h3>Phone</h3>
                <p>
                  <Link to="tel:+212123456789">+212 123 456 789</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form action="" method="">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
