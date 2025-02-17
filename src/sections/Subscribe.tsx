const Subscribe = () => {
  return (
    <section id="subscribe" className="subscription-section">
      <div className="container">
        <h2>Stay Updated!</h2>
        <p>
          Subscribe to our newsletter to get the latest updates on our events
          and new features.
        </p>
        <form className="subscription-form" action="#">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="btn btn-secondary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
