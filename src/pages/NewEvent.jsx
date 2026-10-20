import React from "react";
import EventForm from "../components/events/EventForm";
// import { useEvent } from "../hooks/useEvent";
import { toast } from "react-toastify";
import useEventStore from "../stores/useEvent.store.js";

const NewEvent = () => {
  // const { createEvent } = useEvent();
  const createEvent = useEventStore((s) => s.createEvent);

  const handleSubmit = (data) => {
    const result = createEvent(data);
    if (result.success) {
      console.log("Event created successfully:", result.data);
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Event</h1>

      <EventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewEvent;