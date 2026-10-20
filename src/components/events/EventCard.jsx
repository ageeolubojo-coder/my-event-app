import React from "react";
import { Link } from "react-router";
import { format } from "date-fns";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Pencil,
  Trash2,
} from "lucide-react";
import Button from "../ui/Button";

const EventCard = ({ event,  onDelete }) => {
  const { id, name, description, date, location, attendees, thunmailUrl } =
    event;
  const formattedDate = format(new Date(date), "MMM dd, yyyy, h:mm a");

  return (
    <div className="group flex flex-col bg-slate-900/60 rounded-xl border border-indigo-500/20 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative w-full h-44 overflow-hidden">
        <img
          src={thunmailUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
        <span className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-indigo-600/80 backdrop-blur-sm rounded-full border border-indigo-400/40">
          <Users className="w-3 h-3" />
          {attendees} attending
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <h2 className="text-lg font-semibold text-white line-clamp-1 group-hover:text-indigo-300 transition-colors">
          {name}
        </h2>

        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col gap-2 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        <Link
          to={`/events/${id}`}
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group/link"
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
        <div className="flex items-center gap-2 border-t border-slate-700/70 pt-3 mt-auto">
          <Link to={`/events/${id}/edit`} className="flex-1">
            <Button
              variant="ghost"
              className="w-full text-slate-300 hover:text-white"
            >
              <Pencil className="w-4 h-4" />
              Edit
            </Button>
          </Link>

          <Button
            variant="danger"
            className="flex-1"
            onClick={() => onDelete?.(id)}
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
