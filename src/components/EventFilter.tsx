// src/components/EventFilter.tsx
import React from "react";

interface EventFilterProps {
  sorting: string;
  eventType: string;
  eventTypes: { id: number; name: string }[];
  setSorting: React.Dispatch<React.SetStateAction<string>>;
  setEventType: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const EventFilter: React.FC<EventFilterProps> = ({
  sorting,
  eventType,
  eventTypes,
  setSorting,
  setEventType,
  setCurrentPage,
}) => {
  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <form className="filter-form" onSubmit={handleFilterSubmit}>
      <div className="form-group">
        <label htmlFor="sort-select">Sort by:</label>
        <select
          id="sort-select"
          value={sorting}
          onChange={(e) => {
            setSorting(e.target.value);
            setCurrentPage(1);
          }}
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
          value={eventType}
          onChange={(e) => {
            setEventType(e.target.value);
            setCurrentPage(1);
          }}
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
  );
};

export default EventFilter;
