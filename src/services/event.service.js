
import { backendFetch } from "../libs/backend-fetch.js";
import { EVENT_ENDPOINTS } from "../libs/constant/index.js";

// GET ALL EVENTS
export const getEvents = async (query) => {
  const name = query?.name || "";

  try {
    const response = await backendFetch(
      EVENT_ENDPOINTS.LIST_EVENTS_ENDPOINT(name),
      {
        method: "GET",
      },
    );

    if (!response || response.error) {
      throw new Error(response?.error || "Failed to fetch events");
    }

    return {
      success: true,
      data: response.data || [],
    };
  } catch (error) {
    console.error("[getEvents] Error fetching events:", error);

    return {
      success: false,
      message: error.message || "Failed to fetch events",
    };
  }
};

// GET MY EVENTS
export const getMyEvents = async (token, query) => {
  try {
    // We will connect this to the backend endpoint next.
    return {
      success: false,
      message: "My Events endpoint is not connected yet.",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to fetch your events",
    };
  }
};

// GET ONE EVENT
export const getEventById = async (token, id) => {
  try {
    // We will connect this to the backend endpoint next.
    return {
      success: false,
      message: "Get event by ID endpoint is not connected yet.",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to fetch event",
    };
  }
};

// CREATE EVENT
export const createEvent = async (token, payload) => {
  try {
    // We will connect this to the backend endpoint next.
    return {
      success: false,
      message: "Create event endpoint is not connected yet.",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to create event",
    };
  }
};

// UPDATE EVENT
export const updateEvent = async (token, id, payload) => {
  try {
    // We will connect this to the backend endpoint next.
    return {
      success: false,
      message: "Update event endpoint is not connected yet.",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to update event",
    };
  }
};

// DELETE EVENT
export const deleteEvent = async (token, id) => {
  try {
    // We will connect this to the backend endpoint next.
    return {
      success: false,
      message: "Delete event endpoint is not connected yet.",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to delete event",
    };
  }
};
