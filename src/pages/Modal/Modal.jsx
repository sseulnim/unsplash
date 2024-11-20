import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { getPhotoById } from "../../api/search";
import {
  Overlay,
  ModalContent,
  CloseButton,
  ImageContainer,
  ModalImage,
  Header,
  Footer,
  UserInfo,
  ActionButtons,
  Button,
  LikeButton,
  CollectButton,
  DownloadButton,
  NavButton,
  Stats,
  LoadingText,
  FullScreenImage,
  ZoomButton,
  AvatarLink,
  UserDetails,
  Username,
  UserHandle,
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
import ZoomIn from "../../assets/zoom-in.svg";
import ZoomOut from "../../assets/zoom-out.svg";

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
    <Overlay onClick={handleOverlayClick} isFullScreen={isFullScreen}>
      <CloseButton onClick={onClose}>
        <img src={closeIcon} alt="Close" />
      </CloseButton>

      <NavButton direction="prev" onClick={onPrev}>
        <img src={arrowLeftIcon} alt="Previous" />
      </NavButton>

      <ModalContent onClick={(e) => e.stopPropagation()}>
        {isLoading ? (
          <LoadingText>Loading...</LoadingText>
        ) : (
          <>
            <Header>
              <UserInfo>
                <AvatarLink href={`/@${image.user.username}`}>
                  <Avatar
                    src={image.user.profile_image.medium}
                    alt={image.user.name}
                  />
                  <UserDetails>
                    <Username>{image.user.name}</Username>
                    <UserHandle>{image.user.username}</UserHandle>
                  </UserDetails>
                </AvatarLink>
              </UserInfo>
              <ActionButtons>
                <LikeButton>
                  <img src={likeIcon} alt="Like" />
                </LikeButton>
                <CollectButton>
                  <img src={plusIcon} alt="Add to Collection" />
                </CollectButton>
                <DownloadButton>
                  <span>다운로드</span>
                  <img src={downloadIcon} alt="Download" />
                </DownloadButton>
              </ActionButtons>
            </Header>

            <ImageContainer>
              <ZoomButton onClick={() => setIsFullScreen(!isFullScreen)}>
                <img src={isFullScreen ? ZoomOut : ZoomIn} alt="Toggle zoom" />
              </ZoomButton>
              <ModalImage
                src={isFullScreen ? image.urls.full : image.urls.regular}
                alt={image.alt_description}
                onClick={() => setIsFullScreen(true)}
              />
            </ImageContainer>

            <Footer>
              <Stats>
                <span>조회수 {image.views?.toLocaleString()}</span>
                <span>·</span>
                <span>다운로드 {image.downloads?.toLocaleString()}</span>
              </Stats>
              <ActionButtons>
                <Button>
                  <img src={shareIcon} alt="Share" />
                  공유
                </Button>
                <Button>
                  <img src={infoIcon} alt="Info" />
                  정보
                </Button>
                <Button>
                  <img src={moreIcon} alt="More" />
                </Button>
              </ActionButtons>
            </Footer>
          </>
        )}
      </ModalContent>

      <NavButton direction="next" onClick={onNext}>
        <img src={arrowRightIcon} alt="Next" />
      </NavButton>

      {isFullScreen && (
        <FullScreenImage onClick={() => setIsFullScreen(false)}>
          <img src={image.urls.full} alt={image.alt_description} />
        </FullScreenImage>
      )}
    </Overlay>
  );
}

export default Modal;
