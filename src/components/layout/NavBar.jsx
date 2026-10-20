
import { Link, NavLink } from "react-router";
import { Plus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  console.log("IsAuthenticated:", isAuthenticated);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between">
      <Link
        to="/"
        className="text-lg font-bold text-indigo-600 dark:text-indigo-400"
      >
        Events
      </Link>

      <div className="flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold"
              : "text-gray-600 dark:text-gray-300 hover:text-indigo-600"
          }
        >
          Home
        </NavLink>

        <Link
          to="/events/new"
          className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 text-sm font-medium"
        >
          <Plus size={16} />
          New Event
        </Link>

        {isAuthenticated ? (
          <>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 dark:text-gray-300 hover:text-indigo-600"
              }
            >
              Profile
            </NavLink>

            <p className="text-sm text-gray-700 dark:text-gray-200">
              Welcome back,{" "}
              <span className="font-semibold text-indigo-400">
                {user?.name}
              </span>
            </p>

            <button
              onClick={logout}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
