// src/hooks/useFetchEventTypes.ts
import { useState, useEffect } from "react";
import { fetchEventCategories } from "../api/endpoints/eventCategoriesApi";
import { Categories } from "../types/event.types";

const useFetchEventCategories = () => {
  const [eventTypes, setEventTypes] = useState<Categories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEventCategories();
        setEventTypes(data);
      } catch (error) {
        console.error("Failed to fetch event types", error);
      }
    };
    fetchData();
  }, []);

  return eventTypes;
};

export default useFetchEventCategories;
