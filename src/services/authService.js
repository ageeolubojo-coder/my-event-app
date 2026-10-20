
import { backendFetch } from "../libs/backend-fetch";
import { AUTH_ENDPOINTS } from "../libs/constant/index.js";

// LOGIN
export const login = async (data) => {
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

// REGISTER
export const register = async (data) => {
  try {
    const response = await backendFetch(AUTH_ENDPOINTS.REGISTER, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response || response.error) {
      throw new Error(response?.error || "Registration failed");
    }

    return response.data;
  } catch (error) {
    return { error: error.message };
  }
};

// FORGOT PASSWORD
export const forgotPassword = async (data) => {
  try {
    const response = await backendFetch(
      AUTH_ENDPOINTS.FORGOT_PASSWORD,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response || response.error) {
      throw new Error(response?.error || "Password reset request failed");
    }

    return response.data;
  } catch (error) {
    return { error: error.message };
  }
};

// REFRESH TOKEN
export const refreshToken = async (data) => {
  try {
    const response = await backendFetch(
      AUTH_ENDPOINTS.REFRESH_TOKEN,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response || response.error) {
      throw new Error(response?.error || "Token refresh failed");
    }

    return response.data;
  } catch (error) {
    return { error: error.message };
  }
};

// GET CURRENT USER
export const me = async (token) => {
  try {
    const response = await backendFetch(AUTH_ENDPOINTS.ME, {
      method: "GET",
      token,
    });

    if (!response || response.error) {
      throw new Error(response?.error || "Failed to get user");
    }

    return response.data;
  } catch (error) {
    return { error: error.message };
  }
};
