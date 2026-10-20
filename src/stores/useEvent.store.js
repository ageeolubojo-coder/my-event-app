
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getEvents } from "../services/event.service.js";

const initialEvents = [];

const useEventStore = create(
  persist(
    (set, get) => ({
      events: initialEvents,

      // FETCH EVENTS FROM BACKEND
      
fetchEvents: async () => {
  try {
    const response = await getEvents();

    // Lines 17–20: Debug the API response
    console.log("Full API response:", response);
    console.log("Response data:", response?.data);
    console.log(
      "Is response.data an array:",
      Array.isArray(response?.data)
    );

    // Check whether the request failed
    if (!response || response.success === false) {
      throw new Error(
        response?.message || "Failed to fetch events"
      );
    }

    // Check the shape of the returned data
    const events = response.data;

    if (!Array.isArray(events)) {
      console.error(
        "Expected an array of events but received:",
        events
      );

      return {
        success: false,
        message: "The API response does not contain an events array",
      };
    }

    set({ events });

    return {
      success: true,
      data: events,
    };
  } catch (error) {
    console.error("Failed to fetch events:", error);

    return {
      success: false,
      message: error.message || "Failed to fetch events",
    };
  }
},


      // GET ONE EVENT FROM THE STORE
      getEventById: (eventId) => {
        return get().events.find(
          (event) => String(event.id) === String(eventId),
        );
      },

      // CREATE EVENT - LOCAL VERSION FOR NOW
      createEvent: (newEvent) => {
        if (
          !newEvent.name?.trim() ||
          !newEvent.description?.trim() ||
          !newEvent.date ||
          !newEvent.location?.trim() ||
          !newEvent.thunmailUrl?.trim()
        ) {
          return {
            success: false,
            message: "Please fill the required fields",
          };
        }

        if (isNaN(new Date(newEvent.date).getTime())) {
          return {
            success: false,
            message: "Please enter a valid date",
          };
        }

        const payload = {
          id: Date.now().toString(),
          name: newEvent.name.trim(),
          description: newEvent.description.trim(),
          date: newEvent.date,
          location: newEvent.location.trim(),
          attendees: newEvent.attendees || 0,
          thunmailUrl: newEvent.thunmailUrl.trim(),
        };

        set((state) => ({
          events: [payload, ...state.events],
        }));

        return {
          success: true,
          message: "Event created successfully",
          data: payload,
        };
      },

      // UPDATE EVENT - LOCAL VERSION FOR NOW
      updateEvent: (eventId, updatedEvent) => {
        const events = get().events;

        const event = events.find(
          (item) => String(item.id) === String(eventId),
        );

        if (!event) {
          return {
            success: false,
            message: "Event not found",
          };
        }

        const updatedEventPayload = {
          ...event,
          ...updatedEvent,
        };

        set({
          events: events.map((item) =>
            String(item.id) === String(eventId)
              ? updatedEventPayload
              : item,
          ),
        });

        return {
          success: true,
          message: "Event updated successfully",
          data: updatedEventPayload,
        };
      },

      // DELETE EVENT - LOCAL VERSION FOR NOW
      deleteEvent: (eventId) => {
        const events = get().events;

        const event = events.find(
          (item) => String(item.id) === String(eventId),
        );

        if (!event) {
          return {
            success: false,
            message: "Event not found",
          };
        }

        set({
          events: events.filter(
            (item) => String(item.id) !== String(eventId),
          ),
        });

        return {
          success: true,
          message: "Event deleted successfully",
        };
      },
    }),
    {
      name: "ao-event-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useEventStore;
