import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Events from "./pages/Events";
import NewEvent from "./pages/NewEvent";
import NotFound from "./pages/NotFound"; // Import the NotFound component
import RootLayout from "./components/layout/RootLayout.jsx";
import EventDetail from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import AuthLayout from "./components/layout/AuthLayout.jsx";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Profile from "./pages/auth/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/new",
        element: <NewEvent />,
      },
      {
        path: "/events/edit",
        element: <NewEvent />,
      },
      {
        path: "/events/:id", //id less user experience  and slug improves user experience
        element: <EventDetail />,
      },
      {
        path: "/events/:id/edit",
        element: <EditEvent />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      { 
        path: "/register",
        element: <Register />,
      },
       { 
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // You can create a NotFound component for handling 404 errors
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;