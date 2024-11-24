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

// Import icons
import likeIcon from "../../assets/like-small.svg";
import plusIcon from "../../assets/plus-small.svg";
import downloadIcon from "../../assets/download.svg";
import arrowLeftIcon from "../../assets/arrow-left.svg";
import arrowRightIcon from "../../assets/arrow-right.svg";
import closeIcon from "../../assets/close.svg";
import shareIcon from "../../assets/share.svg";
import infoIcon from "../../assets/info.svg";
import moreIcon from "../../assets/more.svg";
import zoomInIcon from "../../assets/zoom-in.svg";
import zoomOutIcon from "../../assets/zoom-out.svg";

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
        <img src={closeIcon} alt="Close" />
      </ModalCloseButton>

      <ModalNavButton direction="prev" onClick={onPrev}>
        <img src={arrowLeftIcon} alt="Previous" />
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
                  <img src={likeIcon} alt="Like" />
                </ModalLikeButton>
                <ModalCollectButton>
                  <img src={plusIcon} alt="Add to Collection" />
                </ModalCollectButton>
                <ModalDownloadButton>
                  <span>다운로드</span>
                  <img src={downloadIcon} alt="Download" />
                </ModalDownloadButton>
              </ModalActionButtons>
            </ModalHeader>

            <ModalImageContainer>
              <ModalZoomButton onClick={() => setIsFullScreen(!isFullScreen)}>
                <img
                  src={isFullScreen ? zoomOutIcon : zoomInIcon}
                  alt="Toggle zoom"
                />
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
                  <img src={shareIcon} alt="Share" />
                  공유
                </ModalButton>
                <ModalButton>
                  <img src={infoIcon} alt="Info" />
                  정보
                </ModalButton>
                <ModalButton>
                  <img src={moreIcon} alt="More" />
                </ModalButton>
              </ModalActionButtons>
            </ModalFooter>
          </>
        )}
      </ModalContainer>

      <ModalNavButton direction="next" onClick={onNext}>
        <img src={arrowRightIcon} alt="Next" />
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
