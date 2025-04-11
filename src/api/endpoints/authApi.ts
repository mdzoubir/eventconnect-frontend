// src/api/endpoints/authApi.ts
import { LoginCredentials, AuthResponse, User } from '../../types/api.types';
import apiClient from '../client';

export const login = (credentials: LoginCredentials): Promise<AuthResponse> => 
  apiClient.post('/auth/login/', credentials).then(response => response.data);

export const register = (userData: Partial<User>): Promise<AuthResponse> => 
  apiClient.post('/auth/register/', userData).then(response => response.data);

export const getCurrentUser = (): Promise<User> => 
  apiClient.get('/auth/user/').then(response => response.data);

export const logout = (): Promise<void> => 
  apiClient.post('/auth/logout/').then(response => response.data);

