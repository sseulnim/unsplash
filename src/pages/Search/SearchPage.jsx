import { getInfiniteScrollPhotos, getSearchPhotos } from "../../api/search";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { ref, inView } = useInView(); // Intersection Observer 훅

  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["Photos", query],
    queryFn: ({ pageParam = 1 }) => getInfiniteScrollPhotos(query, pageParam),
    getNextPageParam: (lastPage, pages = []) => {
      return lastPage.total_pages > pages.length ? pages.length + 1 : undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  return (
    <div>
      <h1>검색결과 : {query}</h1>
      <div>
        {isLoading && <div>로딩중...</div>}
        {error && <div>에러: {error.message}</div>}
        {/* data.results 배열을 map으로 순회하며 img 태그를 생성 */}
        {data?.pages.map((page) =>
          page.results.map((photo) => (
            <img
              key={photo.id}
              src={photo.urls.regular}
              alt={photo.description}
            />
          ))
        )}
      </div>

      {/* 무한스크롤 영역 */}
      <div ref={ref}>
        {isFetchingNextPage
          ? "로딩중..."
          : hasNextPage
          ? "더보기"
          : "마지막 페이지"}
      </div>
    </div>
  );
}

export default Search;
