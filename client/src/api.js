const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchData = (endpoint, options = {}) => {
  return fetch(`${apiUrl}${endpoint}`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};
