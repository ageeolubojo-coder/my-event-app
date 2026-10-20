
import { createContext, useContext } from "react";
import { useTokenStore } from "../stores/useToken.store";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Get values and functions from the Zustand store
  const isAuthenticated = useTokenStore(
    (state) => state.isAuthenticated
  );
  const user = useTokenStore((state) => state.user);
  const setUser = useTokenStore((state) => state.setUser);
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);

  // Log the user out
  const logout = () => {
    setUser(null);
    setToken(null);
    window.location.href = "/login";
  };

  // Set the logged-in user's information
  const setAuth = ({ user, token }) => {
    setUser(user);
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, setAuth, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
