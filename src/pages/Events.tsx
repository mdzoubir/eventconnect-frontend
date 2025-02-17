import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

interface EventData {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  image: string;
}
const Events = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/events/")
      .then((response) => {
        setEvents(response.data); // Update the events state
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        setError("Error fetching events");
        setLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <section className="events-intro">
        <div className="container">
          <h1>Upcoming Cultural Events</h1>
          <p>
            Explore vibrant cultural festivals and events happening near you.
          </p>
        </div>
      </section>

      <main className="events-list">
        <div className="container">
          <div className="filter-section">
            <form className="filter-form">
              <div className="form-group">
                <label htmlFor="city-select">Select City:</label>
                <select id="city-select" name="city">
                  <option value="">All Cities</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Marrakech">Marrakech</option>
                  <option value="Tangier">Tangier</option>
                  <option value="Rabat">Rabat</option>
                  <option value="Fes">Fes</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="type-select">Event Type:</label>
                <select id="type-select" name="event_type">
                  <option value="">All Types</option>
                  <option value="Music">Music</option>
                  <option value="Film">Film</option>
                  <option value="Art">Art</option>
                  <option value="Food">Food</option>
                  <option value="Cultural">Cultural</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Filter
              </button>
            </form>
          </div>
          {events.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              category={event.description}
              image={event.image}
            />
          ))}

          <section className="event">
            <img
              src="assets/images/mawazine.jpg"
              alt="Event 1"
              className="event-image"
            />
            <div className="event-details">
              <h2>Event Name</h2>
              <p className="event-date">Date: January 15, 2025</p>
              <p className="event-location">Location: Casablanca, Morocco</p>
              <p className="event-description">
                Join us for a day of vibrant performances, traditional foods,
                and cultural exhibitions celebrating the rich heritage of our
                community.
              </p>
              <a href="event-details.html" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </section>

          <section className="event">
            <img
              src="assets/images/Marrakech-Film-Festival.jpg"
              alt="Event 2"
              className="event-image"
            />
            <div className="event-details">
              <h2>Event Name</h2>
              <p className="event-date">Date: February 10, 2025</p>
              <p className="event-location">Location: Marrakech, Morocco</p>
              <p className="event-description">
                Experience the magic of Marrakech with this cultural showcase
                featuring music, dance, and crafts.
              </p>
              <a href="event-details.html" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </section>
          <section className="event">
            <img
              src="assets/images/IMG_7758.JPG"
              alt="Event 1"
              className="event-image"
            />
            <div className="event-details">
              <h2>Event Name</h2>
              <p className="event-date">Date: January 15, 2025</p>
              <p className="event-location">Location: Casablanca, Morocco</p>
              <p className="event-description">
                Join us for a day of vibrant performances, traditional foods,
                and cultural exhibitions celebrating the rich heritage of our
                community.
              </p>
              <a href="event-details.html" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </section>

          <section className="event">
            <img
              src="assets/images/9e67ee1d8b83d89a78993c4d924285e0.jpg"
              alt="Event 2"
              className="event-image"
            />
            <div className="event-details">
              <h2>Event Name</h2>
              <p className="event-date">Date: February 10, 2025</p>
              <p className="event-location">Location: Marrakech, Morocco</p>
              <p className="event-description">
                Experience the magic of Marrakech with this cultural showcase
                featuring music, dance, and crafts.
              </p>
              <a href="event-details.html" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </section>
          <section className="event">
            <img
              src="assets/images/IMG_7760.JPG"
              alt="Event 1"
              className="event-image"
            />
            <div className="event-details">
              <h2>Event Name</h2>
              <p className="event-date">Date: January 15, 2025</p>
              <p className="event-location">Location: Casablanca, Morocco</p>
              <p className="event-description">
                Join us for a day of vibrant performances, traditional foods,
                and cultural exhibitions celebrating the rich heritage of our
                community.
              </p>
              <a href="event-details.html" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </section>

          <section className="event">
            <img
              src="assets/images/tborida.jpg"
              alt="Event 2"
              className="event-image"
            />
            <div className="event-details">
              <h2>Event Name</h2>
              <p className="event-date">Date: February 10, 2025</p>
              <p className="event-location">Location: Marrakech, Morocco</p>
              <p className="event-description">
                Experience the magic of Marrakech with this cultural showcase
                featuring music, dance, and crafts.
              </p>
              <a href="event-details.html" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </section>
          <section className="event">
            <img
              src="assets/images/Sunrise-at-Sahara-desert-Merzouga.jpg"
              alt="Event 1"
              className="event-image"
            />
            <div className="event-details">
              <h2>Event Name</h2>
              <p className="event-date">Date: January 15, 2025</p>
              <p className="event-location">Location: Casablanca, Morocco</p>
              <p className="event-description">
                Join us for a day of vibrant performances, traditional foods,
                and cultural exhibitions celebrating the rich heritage of our
                community.
              </p>
              <a href="event-details.html" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </section>

          <section className="event">
            <img
              src="assets/images/merzouga-desert-camp-1024x629.png"
              alt="Event 2"
              className="event-image"
            />
            <div className="event-details">
              <h2>Event Name</h2>
              <p className="event-date">Date: February 10, 2025</p>
              <p className="event-location">Location: Marrakech, Morocco</p>
              <p className="event-description">
                Experience the magic of Marrakech with this cultural showcase
                featuring music, dance, and crafts.
              </p>
              <a href="event-details.html" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </section>
          <section className="event">
            <img
              src="assets/images/international-nomads-festival-askaladdin.webp"
              alt="Event 1"
              className="event-image"
            />
            <div className="event-details">
              <h2>Event Name</h2>
              <p className="event-date">Date: January 15, 2025</p>
              <p className="event-location">Location: Casablanca, Morocco</p>
              <p className="event-description">
                Join us for a day of vibrant performances, traditional foods,
                and cultural exhibitions celebrating the rich heritage of our
                community.
              </p>
              <a href="event-details.html" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </section>

          <section className="event">
            <img
              src="assets/images/IMG_74DF90841925-1.jpeg"
              alt="Event 2"
              className="event-image"
            />
            <div className="event-details">
              <h2>Event Name</h2>
              <p className="event-date">Date: February 10, 2025</p>
              <p className="event-location">Location: Marrakech, Morocco</p>
              <p className="event-description">
                Experience the magic of Marrakech with this cultural showcase
                featuring music, dance, and crafts.
              </p>
              <a href="event-details.html" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </section>

          <div className="pagination">
            <button className="btn btn-primary" data-page="prev" disabled>
              &laquo; Previous
            </button>
            <button className="btn btn-primary active" disabled data-page="1">
              1
            </button>
            <button className="btn btn-primary" data-page="2">
              2
            </button>
            <button className="btn btn-primary" data-page="3">
              3
            </button>
            <button className="btn btn-primary" data-page="next">
              Next &raquo;
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Events;
