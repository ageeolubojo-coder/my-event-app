import React from "react";
import Button from "../components/ui/Button";
import StatCard from "../components/ui/StatCard";
import { useNavigate, Link } from "react-router";
import { Plus, ArrowRight } from "lucide-react";

const stats = [
    {
        title: "Total Events",
        value: 0,
        color: "blue",
    },
    {
        title: "Upcoming Events",
        value: 0,
        color: "gray",
    },
    {
        title: "Completed Events",
        value: 0,
        color: "green",
    },
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <div>
                <h1 className="text-2xl md:text-4xl font-bold text-white pb-3">
                    Welcome to EventApp
                </h1>
                <p>Create, manage, and track your events — all stored locally.</p>
                <div className="flex items-center justify-center mt-4">
                    <Button onClick={() => navigate("/events/new")}>
                        <Plus className="w-5 h-5 text-white" />
                        Create New Event
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                    // color={stat.color}
                    />
                ))}

            </div>
            <div className="flex justify-center items-center mt-4">
                <Link to="/events" className="flex items-center gap-3 text-blue-500 hover:underline ">
                    Browswer all Events <ArrowRight className="w-5 h-5 text-blue-500" />
                </Link>
            </div>
        </div>
    );
};

export default Home;