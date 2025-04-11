import { useState, useEffect } from "react";
import { fetchEvents } from "../api/endpoints/eventApi";
import { EventData } from "../types/event.types";

const useFetchEvents = (
  currentPage: number,
  sorting: string,
  eventType: string
) => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("Fetching events with:", {
          currentPage,
          sorting,
          eventType,
        });
        const data = await fetchEvents(currentPage, sorting, eventType);
        console.log("Fetched data:", data);
        // Notice: using data.results because your API returns events in 'results'
        setEvents(data.results ?? []);
        setTotalPages(data.total_pages ?? 1);
      } catch (error) {
        console.error("Failed to fetch events", error);
        setEvents([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, sorting, eventType]);

  return { events, loading, totalPages };
};

export default useFetchEvents;
