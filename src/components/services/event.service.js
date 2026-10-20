
import { EVENT_ENDPOINTS } from "../libs/constant/index.js";
import { backendFetch } from "../libs/backend-fetch.js";

// Get all events from the backend
export const listEvents = async () => {
  return await backendFetch(EVENT_ENDPOINTS.LIST, {
    method: "GET",
  });
};
