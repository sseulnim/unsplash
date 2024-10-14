import apiClient from "./apiClient";

export const getPhotos = async (query) => {
  const response = await apiClient.get("/search/photos", {
    params: {
      query,
    },
  });
  return response.data;
};
