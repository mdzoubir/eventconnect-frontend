// src/api/endpoints/contactApi.ts
import apiClient from '../client';
import { ContactFormData } from '../../types/contact.types';

export const sendContactMessage = (data: ContactFormData): Promise<void> => 
  apiClient.post('/contacts/', data).then(response => response.data);