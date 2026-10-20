import React from "react";
import EventForm from "../components/events/EventForm";
import { useEvent } from "../hooks/useEvent";

const NewEvent = () => {
  const { createEvent } = useEvent();

  const handleSubmit = (data) => {
    createEvent(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Event</h1>

      <EventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewEvent;