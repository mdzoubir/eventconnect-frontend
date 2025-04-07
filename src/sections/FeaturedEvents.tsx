import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const FeaturedEvents = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/events/?ordering=upcoming/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        const upcomingEvents = data.results
          .filter((event: any) => new Date(event.datetime) > new Date())
          .slice(0, 4); // limit to 4

        setEvents(upcomingEvents);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingEvents();
  }, []);

  if (loading) {
    return <div className="loading">Loading featured events...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>Oops! Couldn't load events. {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <section id="sample-tours" className="featured-events">
      <div className="container">
        <h2>Comming Events...</h2>

        <div className="event-list">
          {events.map((event) => {
            // Check for the primary image or fallback to a default image
            const primaryImage = event.primary_image?.image
              ? `http://localhost:8000${event.primary_image.image}`
              : "https://via.placeholder.com/400x250?text=No+Image";
            return (
              <div key={event.id} className="event-item">
                <img
                  src={primaryImage}
                  alt={event.title}
                  className="event-image"
                />

                <div className="event-details">
                  <h3>{event.title}</h3>
                  <h5>{format(new Date(event.datetime), "MMMM dd, yyyy")}</h5>
                  <p>{event.description}</p>
                  <Link
                    to={`/event-details/${event.id}`}
                    className="btn btn-primary"
                  >
                    Discover the Event
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="view-all">
          <Link to="/events" className="btn btn-secondary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
