import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useInfiniteSearchPhotos from "../../hooks/useInfiniteSearchPhotos";
import { SearchWrapper, ResultsContainer } from "./SearchPageStyled";
import ImageCard from "../../components/common/ImageCard/ImageCard";
import Modal from "../Modal/Modal";
import LoadingState from "../../components/common/LoadingState/index";
import ErrorState from "../../components/common/ErrorState/index";
import LoadMoreIndicator from "../../components/common/LoadMoreIndicator/index";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { ref, inView } = useInView(); // Intersection Observer 훅
  const photoId = searchParams.get("photoId");
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteSearchPhotos(query);

  // 무한스크롤 영역이 보이면 다음 페이지 로드
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  // 선택된 이미지를 설정하고 모달을 열기
  useEffect(() => {
    if (photoId && data) {
      const image = data.find((photo) => photo.id === photoId);
      setSelectedImage(image || null);
    } else {
      setSelectedImage(null);
    }
  }, [photoId, data]);

  // 모달 열기
  const openModal = (image) => {
    setSearchParams({ query, photoId: image.id });
  };

  // 모달 닫기
  const closeModal = () => {
    setSearchParams({ query });
    setSelectedImage(null);
  };

  // query가 없을 때 검색어를 입력하라는 메시지 표시
  if (!query) {
    return <ErrorState message="검색어를 입력해주세요." />;
  }

  return (
    <SearchWrapper>
      <h1>검색결과 : {query}</h1>
      <ResultsContainer>
        {isLoading && <LoadingState />}
        {error && (
          <ErrorState
            message={
              error.message || "이미지를 불러오는 도중 문제가 발생했습니다."
            }
          />
        )}
        {!isFetching && !error && data?.length === 0 && (
          <ErrorState message="검색결과가 없습니다." />
        )}

        {data?.length > 0 &&
          data.map((photo) => (
            <ImageCard key={photo.id} photo={photo} onClick={openModal} />
          ))}
      </ResultsContainer>

      {/* 무한스크롤 영역 */}
      <div ref={ref} />
      <LoadMoreIndicator
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />

      {/* 모달 */}
      {selectedImage && (
        <Modal
          isOpen={Boolean(selectedImage)}
          onClose={closeModal}
          photoId={selectedImage?.id}
          imageUrl={selectedImage?.urls.regular}
          imageAlt={selectedImage?.description}
        >
          <h2>{selectedImage?.user.name}</h2>
          <p>{selectedImage?.user.bio}</p>
        </Modal>
      )}
    </SearchWrapper>
  );
}

export default Search;
