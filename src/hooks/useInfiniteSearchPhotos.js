import { useInfiniteQuery } from "@tanstack/react-query";
import { getInfiniteScrollPhotos } from "../api/search";

const useInfiniteSearchPhotos = (query) => {
  return useInfiniteQuery({
    queryKey: ["Photos", query],
    queryFn: ({ pageParam = 1 }) => getInfiniteScrollPhotos(query, pageParam),
    getNextPageParam: (lastPage, pages = []) => {
      return lastPage.total_pages > pages.length ? pages.length + 1 : undefined;
    },
    select: (data) => data.pages.flatMap((page) => page.results),
    enabled: !!query, // query가 있을 때만 쿼리 실행
  });
};

export default useInfiniteSearchPhotos;
