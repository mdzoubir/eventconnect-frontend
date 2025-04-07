import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { fetchEvents } from "../services/eventService";
import { EventData } from "../types/eventTypes";

const Events = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [sorting, setSorting] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [eventTypes, setEventTypes] = useState<{ id: number; name: string }[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchEvents(currentPage, sorting, eventType);
        setEvents(data.events);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Failed to fetch events", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, sorting, eventType]);
  useEffect(() => {
    const fetchEventTypes = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/event-categories/"
        );
        const data = await response.json();
        setEventTypes(data);
      } catch (error) {
        console.error("Failed to fetch event types", error);
      }
    };

    fetchEventTypes();
  }, []);

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

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
            <form className="filter-form" onSubmit={handleFilterSubmit}>
              <div className="form-group">
                <label htmlFor="sort-select">Sort by:</label>
                <select
                  id="sort-select"
                  value={sorting}
                  onChange={(e) => setSorting(e.target.value)}
                >
                  <option value="">Default</option>
                  <option value="recent">Recent</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="type-select">Event Type:</label>
                <select
                  id="type-select"
                  name="event_type"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option value="">All Types</option>
                  {eventTypes.map((type) => (
                    <option key={type.id} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setSorting("");
                  setEventType("");
                  setCurrentPage(1);
                }}
              >
                Reset
              </button>
            </form>
          </div>

          {loading ? (
            <p className="text-center">Loading events...</p>
          ) : events.length === 0 ? (
            <p className="text-center">No events found.</p>
          ) : (
            <div>
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  {...event}
                  category={event.category ? event.category.name : undefined}
                  image={
                    event.primary_image ? event.primary_image.image : undefined
                  }
                />
              ))}
            </div>
          )}

          <div className="pagination">
            <button
              className="btn btn-primary"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              &laquo; Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-primary"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Events;
