//  CRUD
//  c = create
//  r = read
//  u = update
//  d = delete
import { useState, useEffect } from "react";
import {
  getEvents,
  getMyEvents as serviceGetMyEvents,
  getEventById as serviceGetEventById,
  // set this as alias cause createEvent is already defined in this file
  createEvent as serviceCreateEvent,
} from "../services/event.service";
import { useTokenStore } from "../stores/useToken.store";

export const useEvent = (query) => {
  const token = useTokenStore((s) => s.token);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getEvents(query);
        setEvents(events);
      } catch (error) {
        console.log("[useEvent] Error fetching events:", error);
        setError(error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [query]);

  // get event by id,
  const getEventById = async (id) => {
    try {
      setLoading(true);
      console.log("[useEvent] Fetching event by id:", id);
      const event = await serviceGetEventById(token, id);
      return event;
    } catch (error) {
      console.log("[useEvent] Error fetching event by id:", error);
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (newEvent) => {
    if (
      !newEvent.name ||
      !newEvent.description ||
      !newEvent.date ||
      !newEvent.location ||
      !newEvent.thunmailUrl
    ) {
      throw new Error("Missing required fields for creating an event");
    }

    try {
      setLoading(true);
      const event = await serviceCreateEvent(token,newEvent);
      return event;
    } catch (error) {
      console.log("[useEvent] Error creating event:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const editEvent = (eventId, updatedEvent) => {
    const event = getEventById(eventId);
    // guard clause
    if (!event) {
      return {
        success: false,
        message: "Event not found",
      };
    }

    const newEventPayload = {
      ...event,
      ...updatedEvent,
    };

    const updatedEvents = events.map((event) =>
      event.id === eventId ? newEventPayload : event,
    );
    setEvents(updatedEvents);
    return {
      success: true,
      message: "Event updated successfully",
      data: newEventPayload,
    };
  };

  const deleteEvent = (eventId) => {
    const event = getEventById(eventId);
    // guard clause
    if (!event) {
      return {
        success: false,
        message: "Event not found",
      };
    }

    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);

    return {
      success: true,
      message: "Event deleted successfully",
    };
  };

  return {
    loading,
    error,
    events,
    getEventById,
    createEvent,
    editEvent,
    deleteEvent,
  };
};