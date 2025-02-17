import { CalendarDays, MapPin } from "lucide-react";

type EventProps = {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

const EventCard = ({ id, name, date, location, description, image }: EventProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <div className="mt-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="flex items-center gap-2 text-gray-600">
          <CalendarDays size={18} /> {date}
        </p>
        <p className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} /> {location}
        </p>
        <p className="text-gray-700 mt-2">{description}</p>
        <a href={`/event/${id}`} className="mt-3 inline-block text-blue-500">
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default EventCard;
