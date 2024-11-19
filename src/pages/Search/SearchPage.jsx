import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useInfiniteSearchPhotos from "../../hooks/useInfiniteSearchPhotos";
import {
  SearchWrapper,
  ResultsContainer,
  ImageItem,
  Image,
  TextWrap,
  ButtonWrap,
  AvatarWrap,
  DownloadButtonWrap,
  LoadingText,
  ErrorText,
  ScrollArea,
} from "./SearchPageStyled";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";
import Modal from "../Modal/Modal";
import likeSvg from "../../assets/like.svg";
import plusSvg from "../../assets/plus.svg";
import arrowDownSvg from "../../assets/arrow-down.svg";

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
    return <div>검색어를 입력해주세요.</div>;
  }

  return (
    <SearchWrapper>
      <h1>검색결과 : {query}</h1>
      <ResultsContainer>
        {isLoading && <LoadingText>로딩중...</LoadingText>}
        {error && (
          <ErrorText>
            에러:
            {error.message || "이미지를 불러오는 도중 문제가 발생했습니다."}
          </ErrorText>
        )}
        {!isFetching && !error && data?.length === 0 && (
          <ErrorText>검색결과가 없습니다.</ErrorText>
        )}

        {/* data.results 배열을 map으로 순회하며 img 태그를 생성 */}
        {data?.length > 0 &&
          data.map((photo) => (
            <ImageItem key={photo.id} onClick={() => openModal(photo)}>
              <Image src={photo.urls.regular} alt={photo.description} />
              <TextWrap>
                <ButtonWrap>
                  <Button altText="좋아요">
                    <img src={likeSvg} alt="좋아요" />
                  </Button>
                  <Button altText="추가">
                    <img src={plusSvg} alt="추가" />
                  </Button>
                </ButtonWrap>
                <AvatarWrap>
                  <Avatar
                    src={photo.user.profile_image.small}
                    alt={photo.user.username}
                  />
                  <span>{photo.user.username}</span>
                </AvatarWrap>
                <DownloadButtonWrap>
                  <Button altText="다운로드">
                    <img src={arrowDownSvg} alt="다운로드" />
                  </Button>
                </DownloadButtonWrap>
              </TextWrap>
            </ImageItem>
          ))}
      </ResultsContainer>

      {/* 무한스크롤 영역 */}
      <ScrollArea ref={ref} />

      <div>
        {isFetchingNextPage
          ? "로딩중..."
          : hasNextPage
          ? "더보기"
          : "마지막 페이지"}
      </div>

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
