import { AUTH_ENDPOINTS } from "../libs/constant/index.js";
import { backendFetch } from "../libs/constant/backend-fetch";
const API_URL = "https://event-api-service-3jtj.onrender.com/api/v1";

export const loginUser = async (loginData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

export const login = async (data) => {
  if (!data.email || !data.password) {
    return { error: "Email and password are required" };
  }

  try {
    const response = await backendFetch(AUTH_ENDPOINTS.LOGIN, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response || response.error) {
      throw new Error(response?.error || "Login failed");
    }
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
};

export const register = async (data) => {
  if (!data.email || !data.name || !data.password || !data.confirmPassword) {
    return { error: "All fields are required" };
  }

  if (data.password !== data.confirmPassword) {
    return { error: "Passwords do not match" };
  }

  try {
    const response = await backendFetch(AUTH_ENDPOINTS.REGISTER, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response || response.error) {
      throw new Error(response?.error || "Register failed");
    }
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
};


export const forgotPassword = async (data) => {};
export const refreshToken = async (data) => {};
export const me = async (data) => {};