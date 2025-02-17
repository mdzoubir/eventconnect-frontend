const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

interface EventProps {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category?: string;
  image?: string;
}

const EventCard = ({
  id,
  title,
  date,
  location,
  description,
  category,
  image,
}: EventProps) => {
  const formattedDate = formatDate(date);
  const imageUrl = image
    ? `http://localhost:8000${image}`
    : "/default-event.jpg";

  return (
    <section className="event">
      <img src={imageUrl} alt={title} className="event-image" />
      <div className="event-details">
        <h2>
          {title}
          {category && <span className="text-small">"{category}"</span>}
        </h2>
        <p className="event-date">Date: {formattedDate}</p>
        <p className="event-location">Location: {location}</p>
        <p className="event-description">{description}</p>
        <a href={`event-details.html?id=${id}`} className="btn btn-secondary">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default EventCard;
