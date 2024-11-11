import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import styled from "styled-components";
import { getPhotoById } from "../api/search";
import likeIcon from "../assets/like.svg";
import photoIcon from "../assets/plus.svg";
import downloadIcon from "../assets/arrow-down.svg";

function Modal({ isOpen, onClose, photoId }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // React Query로 개별 사진 데이터 호출
  const { data: image, isLoading } = useQuery(
    {
      queryKey: ["photo", photoId],
      queryFn: () => getPhotoById(photoId),
      enabled: !!photoId,
    } // photoId가 있을 때만 쿼리 실행
  );

  if (!isOpen || !photoId) return null;

  return (
    <Overlay isFullScreen={isFullScreen} onClick={onClose}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        isFullScreen={isFullScreen}
      >
        {isLoading ? (
          <LoadingText>Loading...</LoadingText>
        ) : (
          <>
            {!isFullScreen && (
              <TopBar>
                <BrandInfo>
                  <Avatar
                    src={image.user.profile_image.medium}
                    alt={image.user.name}
                  />
                  <BrandText>
                    <h3>{image.user.name}</h3>
                    <p>{image.user.bio || "정보가 없습니다."}</p>
                  </BrandText>
                </BrandInfo>
                <ButtonGroup>
                  <LikeButton>
                    <img src={likeIcon} alt="좋아요" />
                  </LikeButton>
                  <AddPhotoButton>
                    <img src={photoIcon} alt="추가" />
                  </AddPhotoButton>
                  <DownloadButton>
                    <img src={downloadIcon} alt="다운로드" />
                  </DownloadButton>
                </ButtonGroup>
              </TopBar>
            )}

            <ModalImage
              src={image.urls.regular}
              alt={image.alt_description}
              onClick={() => setIsFullScreen(!isFullScreen)}
              isFullScreen={isFullScreen}
            />

            {!isFullScreen && (
              <>
                <BottomBar>
                  <StatInfo>
                    <StatItem>조회수: {image.views.toLocaleString()}</StatItem>
                    <StatItem>
                      다운로드: {image.downloads.toLocaleString()}
                    </StatItem>
                  </StatInfo>
                  <ActionButtons>
                    <IconButton>🔗 공유</IconButton>
                    <IconButton>ℹ️ 정보</IconButton>
                    <IconButton>:</IconButton>
                  </ActionButtons>
                </BottomBar>
                <CloseButton onClick={onClose}>X</CloseButton>
              </>
            )}
          </>
        )}
      </ModalContent>
    </Overlay>
  );
}

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ isFullScreen }) =>
    isFullScreen ? "black" : "rgba(0, 0, 0, 0.8)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: ${({ isFullScreen }) => (isFullScreen ? "black" : "white")};
  padding: ${({ isFullScreen }) => (isFullScreen ? "0" : "20px")};
  max-width: ${({ isFullScreen }) => (isFullScreen ? "100%" : "90%")};
  max-height: ${({ isFullScreen }) => (isFullScreen ? "100%" : "80%")};
  overflow: ${({ isFullScreen }) => (isFullScreen ? "hidden" : "auto")};
  border-radius: ${({ isFullScreen }) => (isFullScreen ? "0" : "8px")};
`;

const ModalImage = styled.img`
  width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "100%")};
  height: ${({ isFullScreen }) => (isFullScreen ? "100vh" : "auto")};
  object-fit: contain;
  cursor: pointer;
`;

const LoadingText = styled.p`
  color: white;
  text-align: center;
`;

const TopBar = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const BrandText = styled.div`
  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: gray;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const AddPhotoButton = styled(LikeButton)``;

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: black;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatInfo = styled.div`
  font-size: 0.9rem;
  color: gray;
  display: flex;
  gap: 20px;
`;

const StatItem = styled.span`
  font-size: 0.9rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  /* display: ${({ isFullScreen }) => (isFullScreen ? "none" : "block")}; */
`;
