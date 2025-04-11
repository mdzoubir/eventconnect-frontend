import ContactSection from "../sections/ContactSection";

const Contact = () => {
  return (
    <>
      <section className="map-section">
        <div className="content">
          <h2>Contact us</h2>
          <p>Get in touch with our team</p>
          <a href="#contact" className="btn btn-primary">
            Send Message
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps?q=Morocco&z=5&output=embed"
          width="100%"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <ContactSection />
    </>
  );
};

export default Contact;
