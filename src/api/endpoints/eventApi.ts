// src/api/endpoints/eventApi.ts
import apiClient from "../client";
import { EventsResponse } from "../../types/event.types";

export const fetchEvents = (
  currentPage: number,
  sorting: string,
  eventType: string
): Promise<EventsResponse> =>
  apiClient
    .get("/events/", {
      params: {
        page: currentPage,
        sorting: sorting || "",
        event_type: eventType || "",
      },
    })
    .then((response) => response.data);
