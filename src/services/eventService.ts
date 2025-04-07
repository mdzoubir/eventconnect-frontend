export const fetchEvents = async (
  page: number,
  sorting?: string,
  eventType?: string
) => {
  let url = `http://localhost:8000/api/events/?page=${page}`;

  if (sorting) url += `&ordering=${sorting}`;
  if (eventType) url += `&category__name=${eventType}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await response.json();
  return {
    events: data.results,
    total_pages: data.total_pages,
  };
};
