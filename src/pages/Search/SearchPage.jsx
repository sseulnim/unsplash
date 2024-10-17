import { getInfiniteScrollPhotos } from "../../api/search";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

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
    // select 옵션을 사용하여 데이터를 flat하게 처리 : 모든 페이지의 결과를 펼쳐 하나의 배열로 반환
    select: (data) => data.pages.flatMap((page) => page.results),
    enabled: !!query, // query가 있을 때만 쿼리 실행
  });

  // 무한스크롤 영역이 보이면 다음 페이지 로드
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  // query가 없을 때 검색어를 입력하라는 메시지 표시
  if (!query) {
    return <div>검색어를 입력해주세요.</div>;
  }

  return (
    <div>
      <h1>검색결과 : {query}</h1>
      <div>
        {isLoading && <div>로딩중...</div>}
        {error && <div>에러: {error.message}</div>}
        {/* data.results 배열을 map으로 순회하며 img 태그를 생성 */}
        {data?.length > 0 ? (
          data.map((photo) => (
            <img
              key={photo.id}
              src={photo.urls.regular}
              alt={photo.description}
            />
          ))
        ) : (
          <div>검색결과가 없습니다.</div>
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
