// src/api/endpoints/resourceApi.ts
import { Resource, PaginatedResponse } from '../../types/api.types';
import apiClient from '../client';


export const getResources = (): Promise<PaginatedResponse<Resource>> => 
  apiClient.get('/resources/').then(response => response.data);

export const getResourceById = (id: number): Promise<Resource> => 
  apiClient.get(`/resources/${id}/`).then(response => response.data);

export const createResource = (data: Partial<Resource>): Promise<Resource> => 
  apiClient.post('/resources/', data).then(response => response.data);

export const updateResource = (id: number, data: Partial<Resource>): Promise<Resource> => 
  apiClient.put(`/resources/${id}/`, data).then(response => response.data);

export const deleteResource = (id: number): Promise<void> => 
  apiClient.delete(`/resources/${id}/`).then(response => response.data);