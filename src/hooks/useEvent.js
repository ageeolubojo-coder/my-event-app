//  CRUD
//  c = create
//  r = read
//  u = update
//  d = delete
import { useState, useEffect } from "react";
import { events as initialEvents } from "../data";

export const useEvent = () => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    setEvents(initialEvents);
  };

  useEffect(() => {
    getEvents();
  }, []);

  // get event by id,
  const getEventById = (id) => {
    const event = events.find((event) => event.id === id);
    return event;
  };

  //  {
  //   id: "507f1f77bcf86cd799439001",
  //   name: "Tech Meetup",
  //   description: "Discuss upcoming platform improvements and launch plans.",
  //   date: "2026-08-20T18:00:00.000Z",
  //   location: "Nairobi, Kenya",
  //   attendees: 55,
  //   thunmailUrl: "https://picsum.photos/seed/event1/400/300",
  // },

  const createEvent = (newEvent) => {

    if (
      !newEvent.name ||
      !newEvent.description ||
      !newEvent.date ||
      !newEvent.location ||
      !newEvent.thunmailUrl
    ) {
      return {
        success: false,
        message: "Please fill the require fields",
      };
    }

    const payload = {
      id: Date.now().toString(),
      name: newEvent.name,
      description: newEvent.description,
      date: newEvent.date,
      location: newEvent.location,
      attendees: newEvent.attendees || 0,
      thunmailUrl: newEvent.thunmailUrl,
    };
    setEvents((prevEvents) => [payload, ...prevEvents]);
    return {
      success: true,
      message: "Event created successfully",
      data: payload,
    };
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

      const updatedEvents = events.map(event => event.id === eventId ? newEventPayload : event);
      setEvents(updatedEvents);
      return {
        success: true,
        message: "Event updated successfully",
        data: newEventPayload,
      };
  };

  const deleteEvent = (eventId) => {};

  return {
    events,
    getEventById,
    createEvent,
    editEvent,
    deleteEvent,
  };
  
};