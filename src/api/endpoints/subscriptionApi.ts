import apiClient from '../client';
import { SubscribePayload } from '../types';

export const subscribe = (data: SubscribePayload): Promise<void> => 
  apiClient.post('/subscribers/', data).then(() => {});
