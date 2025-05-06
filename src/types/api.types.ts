// src/types/api.types.ts

// Example user interface - adjust based on your Django models
export interface User {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  date_joined?: string;
  preferences?: string[];
}

// Authentication types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// Resource example - adjust based on your Django models
export interface Resource {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

// Generic response type for paginated API responses
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
