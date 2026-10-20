
import { AUTH_ENDPOINTS } from "../libs/constant/index.js";
import { backendFetch } from "../libs/constant/backend-fetch.js";

export const login = async (data) => {
  try {
    const response = await backendFetch(AUTH_ENDPOINTS.LOGIN, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response || response.error) {
      throw new Error(response?.error || "Login failed");
    }

    return response.data ?? response;
  } catch (error) {
    return { error: error.message };
  }
};

export const register = async (data) => {
  try {
    const response = await backendFetch(AUTH_ENDPOINTS.REGISTER, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response || response.error) {
      throw new Error(response?.error || "Registration failed");
    }

    return response.data ?? response;
  } catch (error) {
    return { error: error.message };
  }
};

export const forgotPassword = async (data) => {
  try {
    return await backendFetch(AUTH_ENDPOINTS.FORGET_PASSWORD, {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {
    return { error: error.message };
  }
};

export const refreshToken = async (data) => {
  return { error: "Refresh token function is not configured yet." };
};

export const me = async (token) => {
  try {
    const response = await backendFetch(AUTH_ENDPOINTS.ME, {
      method: "GET",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    if (!response || response.error) {
      throw new Error(response?.error || "Unable to get user");
    }

    return response.data ?? response;
  } catch (error) {
    return { error: error.message };
  }
};
