import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { getPhotoById } from "../../api/search";
import {
  ModalOverlay,
  ModalContainer,
  ModalLoadingText,
  ModalHeader,
  ModalUserInfo,
  ModalAvatarLink,
  ModalUserDetails,
  ModalUsername,
  ModalUserHandle,
  ModalActionButtons,
  ModalButton,
  ModalLikeButton,
  ModalCollectButton,
  ModalImageContainer,
  ModalImageWrapper,
  ModalImage,
  ModalFooter,
  ModalNavButton,
  ModalCloseButton,
  ModalFullScreenImage,
  ModalFullScreenWrapper,
  ModalFullScreenZoomButton,
  ModalStatBlock,
  ModalStatTitle,
  ModalStatValue,
  ModalFooterStatsContainer,
  ModalDownloadButtonContainer,
  ModalDownloadTextButton,
  ModalDownloadIconButton,
} from "./ModalStyled";
import Avatar from "../../components/Avatar";

// Import SVG Components
import ArrowLeftButton from "../../components/buttons/ArrowLeftButton";
import ArrowRightButton from "../../components/buttons/ArrowRightButton";
import CloseButton from "../../components/buttons/CloseButton";
import ShareButton from "../../components/buttons/ShareButton";
import InfoButton from "../../components/buttons/InfoButton";
import MoreButton from "../../components/buttons/MoreButton";
import ZoomInButton from "../../components/buttons/ZoomInButton";
import ZoomOutButton from "../../components/buttons/ZoomOutButton";
import LikeSmallButton from "../../components/buttons/LikeSmallButton";
import PlusSmallButton from "../../components/buttons/PlusSmallButton";
import DownloadButton from "../../components/buttons/DownloadButton";

function Modal({ isOpen, onClose, photoId, onPrev, onNext }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const { data: image, isLoading } = useQuery({
    queryKey: ["photo", photoId],
    queryFn: () => getPhotoById(photoId),
    enabled: !!photoId,
  });

  // 모달이 열리면 스크롤 비활성화, 닫히면 스크롤 활성화
  useEffect(() => {
    if (isOpen) {
      // 모달이 열리면 스크롤 비활성화
      document.body.style.overflow = "hidden";
    } else {
      // 모달이 닫히면 스크롤 활성화
      document.body.style.overflow = "";
    }

    return () => {
      // 컴포넌트 언마운트 시에도 스크롤 복구
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      if (isFullScreen) {
        setIsFullScreen(false);
      } else {
        onClose();
      }
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (isFullScreen) {
          setIsFullScreen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose, isFullScreen]);

  if (!isOpen || !photoId) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalCloseButton onClick={onClose}>
        <CloseButton />
      </ModalCloseButton>

      <ModalNavButton direction="prev" onClick={onPrev}>
        <ArrowLeftButton />
      </ModalNavButton>

      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {isLoading ? (
          <ModalLoadingText>Loading...</ModalLoadingText>
        ) : (
          <>
            <ModalHeader>
              <ModalUserInfo>
                <ModalAvatarLink href={`/@${image.user.username}`}>
                  <Avatar
                    src={image.user.profile_image.medium}
                    alt={image.user.name}
                  />
                  <ModalUserDetails>
                    <ModalUsername>{image.user.name}</ModalUsername>
                    <ModalUserHandle>@{image.user.username}</ModalUserHandle>
                  </ModalUserDetails>
                </ModalAvatarLink>
              </ModalUserInfo>
              <ModalActionButtons>
                <ModalLikeButton>
                  <LikeSmallButton />
                </ModalLikeButton>
                <ModalCollectButton>
                  <PlusSmallButton />
                </ModalCollectButton>
                <ModalDownloadButtonContainer>
                  <ModalDownloadTextButton
                    onClick={() => console.log("다운로드 클릭")}
                  >
                    다운로드
                  </ModalDownloadTextButton>
                  <ModalDownloadIconButton
                    onClick={() => console.log("다운로드 옵션 클릭")}
                  >
                    <DownloadButton />
                  </ModalDownloadIconButton>
                </ModalDownloadButtonContainer>
              </ModalActionButtons>
            </ModalHeader>

            <ModalImageContainer>
              <ModalImageWrapper>
                {/* 모달 이미지 내에서 줌아웃 버튼 */}
                {!isFullScreen && (
                  <ModalFullScreenZoomButton
                    isFullScreen={isFullScreen}
                    onClick={() => setIsFullScreen(true)}
                    aria-label="Zoom Out"
                  >
                    <ZoomOutButton />
                  </ModalFullScreenZoomButton>
                )}

                {/* 모달 이미지 */}
                <ModalImage
                  src={isFullScreen ? image.urls.full : image.urls.regular}
                  alt={image.alt_description}
                  onClick={() => {
                    if (!isFullScreen) setIsFullScreen(true);
                  }}
                />
              </ModalImageWrapper>
            </ModalImageContainer>

            <ModalFooter>
              {/* 조회수와 다운로드를 가로로 정렬 */}
              <ModalFooterStatsContainer>
                {/* 조회수 블록 */}
                <ModalStatBlock>
                  <ModalStatTitle>조회수</ModalStatTitle>
                  <ModalStatValue>
                    {image.views?.toLocaleString() || "--"}
                  </ModalStatValue>
                </ModalStatBlock>
                {/* 다운로드 블록 */}
                <ModalStatBlock>
                  <ModalStatTitle>다운로드</ModalStatTitle>
                  <ModalStatValue>
                    {image.downloads?.toLocaleString() || "--"}
                  </ModalStatValue>
                </ModalStatBlock>
              </ModalFooterStatsContainer>

              {/* 공유, 정보, 더보기 버튼 */}
              <ModalActionButtons>
                <ModalButton>
                  <ShareButton />
                  공유
                </ModalButton>
                <ModalButton>
                  <InfoButton />
                  정보
                </ModalButton>
                <ModalButton>
                  <MoreButton />
                </ModalButton>
              </ModalActionButtons>
            </ModalFooter>
          </>
        )}
      </ModalContainer>

      <ModalNavButton direction="next" onClick={onNext}>
        <ArrowRightButton />
      </ModalNavButton>

      {/* 풀스크린 이미지 내에서 줌인 버튼 */}
      {isFullScreen && (
        <ModalFullScreenImage onClick={() => setIsFullScreen(false)}>
          <ModalFullScreenWrapper>
            <ModalFullScreenZoomButton
              isFullScreen={isFullScreen}
              onClick={(e) => {
                e.stopPropagation();
                setIsFullScreen(false);
              }}
              aria-label="Zoom In"
            >
              <ZoomInButton />
            </ModalFullScreenZoomButton>
            <img src={image.urls.full} alt={image.alt_description} />
          </ModalFullScreenWrapper>
        </ModalFullScreenImage>
      )}
    </ModalOverlay>
  );
}

export default Modal;
