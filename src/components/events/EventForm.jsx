// {
//   "name": "Tech Meetup",
//   "description": "Discuss upcoming platform improvements and launch plans.",
//   "date": "2026-08-20T18:00:00.000Z",
//   "location": "Nairobi, Kenya",
//   "attendees": 55,
//   "thunmailUrl": "https://example.com/thumbnail.jpg"
// }

import React, { useState } from "react";
import Button from "../ui/Button";
import { Plus } from "lucide-react";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router";

const EventForm = ({ onSubmit, event  }) => {
  const [formData, setFormData] = useState({
    name: event?.name || "",
    description: event?.description || "",
    date: event?.date || "",
    location: event?.location || "",
    attendees: event?.attendees || 0,
    thunmailUrl: event?.thunmailUrl || "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubbmitHandler = (e) => {
    e.preventDefault();


    if( !formData.name || !formData.description || !formData.date || !formData.location || !formData.thunmailUrl) {
      toast.warn("Please fill the require fields");
      return;
    }

    toast.success("Form submitted successfully");
    onSubmit(formData);
    setFormData({
      name: "",
      description: "",
      date: "",
      location: "",
      attendees: 0,
      thunmailUrl: "",
    });
  }



  return (
    <div className="p-3">
      <form className="flex flex-col gap-4 max-w-150" onSubmit={onSubbmitHandler}>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={onChangeHandler}
            placeholder="Enter event name"
            className="border border-indigo-300/50 bg-indigo-400/30 rounded p-2 focus:border-indigo-500 focus:outline-none placeholder:text-gray-300"
          />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={onChangeHandler}
            placeholder="Enter event description"
            className="border border-indigo-300/50 bg-indigo-400/30 rounded p-2 focus:border-indigo-500 focus:outline-none placeholder:text-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={onChangeHandler}
            placeholder="Enter event date"
            className="border border-indigo-300/50 bg-indigo-400/30 rounded p-2 focus:border-indigo-500 focus:outline-none placeholder:text-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={onChangeHandler}
            placeholder="Abuja, Nigeria"
            className="border border-indigo-300/50 bg-indigo-400/30 rounded p-2 focus:border-indigo-500 focus:outline-none placeholder:text-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="attendees">Attendees:</label>
          <input
            type="text"
            name="attendees"
            id="attendees"
            placeholder="0"
            value={formData.attendees}
            onChange={onChangeHandler}
            className="border border-indigo-300/50 bg-indigo-400/30 rounded p-2 focus:border-indigo-500 focus:outline-none placeholder:text-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="thunmailUrl">Poster:</label>
          <input
            type="url"
            name="thunmailUrl"
            id="thunmailUrl"
            value={formData.thunmailUrl}
            onChange={onChangeHandler}
            placeholder="https://example.com/poster.jpg"
            className="border border-indigo-300/50 bg-indigo-400/30 rounded p-2 focus:border-indigo-500 focus:outline-none placeholder:text-gray-300"
          />
        </div>
        <div className="flex w-full">
          <Button type="submit" className="w-full justify-center mt-5">
            <Plus className="w-4 h-4" /> Create Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;