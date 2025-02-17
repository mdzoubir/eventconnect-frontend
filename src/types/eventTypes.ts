export interface Category {
  id: number;
  name: string;
}

export interface Image {
  id: number;
  image: string;
  is_primary: boolean;
}

export interface EventData {
  primary_image: Image | null;
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category: Category;
}
