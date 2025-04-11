import apiClient from "../client";

// Fetch event types (categories)
export const fetchEventCategories = (): Promise<any[]> =>
  apiClient.get("/event-categories/").then((response) => response.data);
