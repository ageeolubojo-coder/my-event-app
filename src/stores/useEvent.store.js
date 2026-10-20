import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import useEventStore;

const useEventStore = create(
  persist(
    (set, get) => ({

      // ==============================
      // EVENTS
      // ==============================

      events: initialEvents,

      // ==============================
      // GET EVENT BY ID
      // ==============================

      getEventById: (eventId) => {
        const events = get().events;

        return events.find((event) => event.id === eventId);
      },

      // ==============================
      // CREATE EVENT
      // ==============================

      createEvent: (newEvent) => {

        // Validate required fields
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

        // Validate date
        if (isNaN(new Date(newEvent.date).getTime())) {
          return {
            success: false,
            message: "Please enter a valid date",
          };
        }

        // Create event object
        const payload = {
          id: Date.now().toString(),
          name: newEvent.name.trim(),
          description: newEvent.description.trim(),
          date: newEvent.date,
          location: newEvent.location.trim(),
          attendees: newEvent.attendees || 0,
          thunmailUrl: newEvent.thunmailUrl.trim(),
        };

        // Add event to store
        set((state) => ({
          events: [payload, ...state.events],
        }));

        return {
          success: true,
          message: "Event created successfully",
          data: payload,
        };
      },

      // ==============================
      // UPDATE EVENT
      // ==============================

      updateEvent: (eventId, updatedEvent) => {
        const events = get().events;

        const event = events.find((event) => event.id === eventId);

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
          events: events.map((event) =>
            event.id === eventId ? updatedEventPayload : event
          ),
        });

        return {
          success: true,
          message: "Event updated successfully",
          data: updatedEventPayload,
        };
      },

      // ==============================
      // DELETE EVENT
      // ==============================

      deleteEvent: (eventId) => {
        const events = get().events;

        const event = events.find((event) => event.id === eventId);

        if (!event) {
          return {
            success: false,
            message: "Event not found",
          };
        }

        set({
          events: events.filter((event) => event.id !== eventId),
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
    }
  )
);

export default useEventStore;