import { apiClient } from "./index";

export const getSearchPhotos = async (query) => {
  const response = await apiClient.get("/search/photos", {
    params: {
      query,
    },
  });
  return response.data;
};
