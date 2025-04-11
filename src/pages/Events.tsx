import React, { useState } from "react";
import EventCard from "../components/EventCard";
import useFetchEvents from "../hooks/useFetchEvents";
import useFetchEventTypes from "../hooks/useFetchEventTypes";
import EventFilter from "../components/EventFilter";
import Pagination from "../components/Pagination";

const Events: React.FC = () => {
  const [sorting, setSorting] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { events, loading, totalPages } = useFetchEvents(currentPage, sorting, eventType);
  const eventTypes = useFetchEventTypes();

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
            <EventFilter
              sorting={sorting}
              eventType={eventType}
              eventTypes={eventTypes}
              setSorting={setSorting}
              setEventType={setEventType}
              setCurrentPage={setCurrentPage}
            />
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

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
    </>
  );
};

export default Events;
