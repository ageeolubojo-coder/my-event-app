import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "./components/layout/RootLayout";
import AuthLayout from "./components/layout/AuthLayout";

import Home from "./pages/Home";
import Events from "./pages/Events";
import NewEvent from "./pages/NewEvent";
import EventDetail from "./pages/EventDetail";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";

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
        path: "/events/:id",
        element: <EventDetail />,
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
    element: <div>404 Not Found</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;