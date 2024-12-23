import { apiClient } from "./index";

// 기본 검색 함수
export const getSearchPhotos = async (query) => {
  const response = await apiClient.get("/search/photos", {
    params: {
      query,
    },
  });
  return response.data;
};

// 무한 스크롤을 위한 함수
export const getInfiniteScrollPhotos = async (query, pageParam = 1) => {
  const response = await apiClient.get("/search/photos", {
    params: {
      query,
      page: pageParam,
      per_page: 10,
    },
  });
  return response.data;
};
