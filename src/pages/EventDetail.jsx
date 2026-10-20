import React from "react";
import { useParams } from "react-router";
import { events } from "../data";
import Button from "../components/ui/Button";
// import { useEvent } from "../hooks/useEvent";
import useEventStore from "../stores/useEvent.store.js";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const EventDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const getEventById = useEventStore((s) => s.eventById);
  // const deleteEvent = useEventStore(s => s.deleteEvent);
  // const { getEventById, deleteEvent } = useEvent();

  const response = getEventById(id);

  console.log("EventDetail response:", response);

  if (!response.success) {
    return (
      <div className="p-6 text-[var(--text)] font-[var(--sans)]">
        Event not found
      </div>
    );
  }

  const event = response.data;

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = new Date(event.date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleEdit = () => {
    navigate(`/events/${event.id}/edit`);
  };
  const handleDelete = () => {
    // const result = deleteEvent(id);
    // if (result.success) {
    //   toast.success(result.message || "Event deleted successfully:");
    //   navigate("/events");
    // } else {
    //   toast.error(result.message);
    //   console.error(result.message);
    // }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-[var(--sans)] text-[var(--text)]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Image + Actions */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <img
            src={event.thunmailUrl}
            alt={event.name}
            className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-[var(--shadow)]"
          />

          <div className="flex gap-3">
            <Button onClick={handleEdit} type="button" variant="rounded-full">
              Edit
            </Button>
            <Button onClick={handleDelete} type="button" variant="rounded-full">
              Delete
            </Button>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="md:w-1/2 flex flex-col justify-between text-left">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-indigo-400 bg-indigo-800 border border-indigo-400 rounded-full px-3 py-1 mb-4">
              Event
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-h)] font-[var(--heading)] mb-4 leading-tight text-left">
              {event.name}
            </h1>

            <p className="text-base leading-relaxed text-[var(--text)] mb-8">
              {event.description}
            </p>

            <div className="flex flex-col gap-5 border-t border-[var(--border)] pt-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-800 border border-indigo-400 text-indigo-400 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--text)] opacity-70 font-medium">
                    Date & Time
                  </p>
                  <p className="text-sm font-semibold text-[var(--text-h)]">
                    {formattedDate}
                  </p>
                  <p className="text-sm text-[var(--text)]">{formattedTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-800 border border-indigo-400 text-indigo-400 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--text)] opacity-70 font-medium">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-[var(--text-h)]">
                    {event.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-800 border border-indigo-400 text-indigo-400 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--text)] opacity-70 font-medium">
                    Attendees
                  </p>
                  <p className="text-sm font-semibold text-[var(--text-h)]">
                    {event.attendees} people going
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
