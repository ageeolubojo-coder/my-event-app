
import React, { useState } from "react";
import Button from "../components/ui/Button";
import { Plus } from "lucide-react";
import EventCard from "../components/events/EventCard";
import { events } from "../data";
import { useNavigate } from "react-router";

const Events = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState({
    searchTerm: "",
    category: "all",
    status: "",
  });

  // Added: separate state for the displayed events
  const [eventList, setEventList] = useState(events);

  // Added: delete an event by its ID
  const handleDelete = (id) => {
    setEventList((prevEvents) =>
      prevEvents.filter((event) => event.id !== id)
    );
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log("Filter submitted:", filter);
  };

  const routeToNewEvent = () => {
    navigate("/events/new");
  };

  return (
    <div className="p-4">
      {/* header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          All Events
        </h1>

        <Button onClick={routeToNewEvent} variant="add">
          <Plus className="w-5 h-5" />
          New Event
        </Button>
      </div>

      {/* filter section */}
      <form
        onSubmit={onSubmit}
        method="GET"
        action=""
        className="flex items-center gap-4 my-6"
      >
        <input
          type="search"
          name="searchTerm"
          id="searchTerm"
          placeholder="Search events..."
          value={filter.searchTerm}
          onChange={handleFilterChange}
          className="flex-1 bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="category"
          id="category"
          value={filter.category}
          onChange={handleFilterChange}
          className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="work">WorkSpace</option>
          <option value="conference">Conference</option>
          <option value="meetup">Meetup</option>
          <option value="webinar">Webinar</option>
          <option value="others">Others</option>
        </select>

        <select
          name="status"
          id="status"
          value={filter.status}
          onChange={handleFilterChange}
          className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
        </select>
      </form>

      {/* events list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventList.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;