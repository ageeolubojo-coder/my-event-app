export const backendFetch = async (endpoint, options = {}) => {
  const api_url =
    import.meta.env.VITE_API_URL ||
    "https://event-api-service-3jtj.onrender.com/api/v1";

  if (!api_url) {
    throw new Error("Api url is not provided in env");
  }

  const full_endpoint = `${api_url}/${endpoint}`;
  const token = options?.token;
  const bear_token = `Bearer ${token ?? ""}`;

  try {
    const response = await fetch(full_endpoint, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...token && { Authorization: bear_token },
        ...options.headers,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message ?? "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error("Error proceesing request", error.message);
    return { error: error.message };
  }
};