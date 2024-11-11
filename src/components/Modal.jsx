import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import styled from "styled-components";
import { getPhotoById } from "../api/search";

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
            <ModalImage
              src={image.urls.regular}
              alt={image.alt_description}
              onClick={() => setIsFullScreen(!isFullScreen)}
              isFullScreen={isFullScreen}
            />
            {!isFullScreen && (
              <>
                <ImageInfo>
                  <AuthorInfo>
                    <Avatar
                      src={image.user.profile_image.medium}
                      alt={image.user.name}
                    />
                    <h3>{image.user.name}</h3>
                  </AuthorInfo>
                  <Description>
                    {image.description || "설명이 없습니다."}
                  </Description>
                  <Stats>
                    <StatItem>조회수: {image.views}</StatItem>
                    <StatItem>다운로드: {image.downloads}</StatItem>
                  </Stats>
                </ImageInfo>
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

const LoadingText = styled.p`
  color: white;
  text-align: center;
`;

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
  object-fit: ${({ isFullScreen }) => (isFullScreen ? "contain" : "cover")};
  cursor: pointer;
  transition: width 0.3s ease, height 0.3s ease;
`;

const ImageInfo = styled.div`
  color: 10px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: gray;
`;

const StatItem = styled.span`
  font-size: 14px;
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
  display: ${({ isFullScreen }) => (isFullScreen ? "none" : "block")};
`;
