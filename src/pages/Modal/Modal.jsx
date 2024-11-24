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
  ModalDownloadButton,
  ModalZoomButton,
  ModalImageContainer,
  ModalImage,
  ModalFooter,
  ModalStats,
  ModalNavButton,
  ModalCloseButton,
  ModalFullScreenImage,
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
                <ModalDownloadButton>
                  <span>다운로드</span>
                  <DownloadButton />
                </ModalDownloadButton>
              </ModalActionButtons>
            </ModalHeader>

            <ModalImageContainer>
              <ModalZoomButton onClick={() => setIsFullScreen(!isFullScreen)}>
                {isFullScreen ? <ZoomOutButton /> : <ZoomInButton />}
              </ModalZoomButton>
              <ModalImage
                src={isFullScreen ? image.urls.full : image.urls.regular}
                alt={image.alt_description}
                onClick={() => setIsFullScreen(true)}
              />
            </ModalImageContainer>

            <ModalFooter>
              <ModalStats>
                <span>조회수 {image.views?.toLocaleString()}</span>
                <span>·</span>
                <span>다운로드 {image.downloads?.toLocaleString()}</span>
              </ModalStats>
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

      {isFullScreen && (
        <ModalFullScreenImage onClick={() => setIsFullScreen(false)}>
          <img src={image.urls.full} alt={image.alt_description} />
        </ModalFullScreenImage>
      )}
    </ModalOverlay>
  );
}

export default Modal;
