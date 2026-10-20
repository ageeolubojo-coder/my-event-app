import { AUTH_ENDPOINTS } from "../libs/constant/index.js";
import { backendFetch } from "../libs/backend-fetch";

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



export const me = async (token) => {
  try {
    const response = await backendFetch(AUTH_ENDPOINTS.ME, {
      method: "GET",
      token,
    });

    if (!response || response.error) {
      throw new Error(response?.error || "Login failed");
    }
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
};