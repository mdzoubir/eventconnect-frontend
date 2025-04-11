export interface EventData {
  id: number;
  title: string;
  description: string;
  datetime: string;
  location: number;
  category?: {
    name: string;
  };
  primary_image?: {
    image: string;
  };
}

export interface EventsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: EventData[];
  total_pages: number;
}

export interface Categories {
  name: string;
}
