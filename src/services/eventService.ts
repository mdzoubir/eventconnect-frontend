import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/events/";

export const fetchEvents = async (page = 1, sorting = "") => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: { page: page, ordering: sorting },
    });
    return {
      events: response.data.results, // Assuming 'results' contains the event data
      total_pages: response.data.total_pages, // Get 'total_pages' from the response
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { events: [], total_pages: 1 }; // Default values in case of error
  }
};
