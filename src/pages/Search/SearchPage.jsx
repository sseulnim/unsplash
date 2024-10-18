import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useInfiniteSearchPhotos from "../../hooks/useInfiniteSearchPhotos";
import {
  SearchWrapper,
  ResultsContainer,
  ImageItem,
  Image,
  LoadingText,
  ErrorText,
  ScrollArea,
} from "./SearchPageStyled";

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
  } = useInfiniteSearchPhotos(query);

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
    <SearchWrapper>
      <h1>검색결과 : {query}</h1>
      <ResultsContainer>
        {isLoading && <LoadingText>로딩중...</LoadingText>}
        {error && (
          <ErrorText>
            에러:{" "}
            {error.message || "이미지를 불러오는 도중 문제가 발생했습니다."}
          </ErrorText>
        )}
        {!isLoading && !error && data?.length === 0 && (
          <ErrorText>검색결과가 없습니다.</ErrorText>
        )}

        {/* data.results 배열을 map으로 순회하며 img 태그를 생성 */}
        {data?.length > 0 &&
          data.map((photo) => (
            <ImageItem key={photo.id}>
              <Image src={photo.urls.regular} alt={photo.description} />
            </ImageItem>
          ))}
      </ResultsContainer>

      {/* 무한스크롤 영역 */}
      <ScrollArea ref={ref}>
        {isFetchingNextPage
          ? "로딩중..."
          : hasNextPage
          ? "더보기"
          : "마지막 페이지"}
      </ScrollArea>
    </SearchWrapper>
  );
}

export default Search;
