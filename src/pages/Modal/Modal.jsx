import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getPhotoById } from "../../api/search";
import {
  Overlay,
  ModalContent,
  ModalImage,
  LoadingText,
  BottomBar,
  StatInfo,
  StatItem,
  ActionButtons,
  IconButton,
  DownloadButton,
  ButtonGroup,
  LikeButton,
  AddPhotoButton,
  CloseButton,
  TopBar,
  BrandInfo,
  BrandText,
} from "./ModalStyled";
import Avatar from "../../components/Avatar";
import downloadIcon from "../../assets/arrow-down.svg";
import closeIcon from "../../assets/close.svg";
import shareIcon from "../../assets/share.svg";
import infoIcon from "../../assets/info.svg";
import moreIcon from "../../assets/more.svg";
import arrowLeftIcon from "../../assets/arrow-left.svg";
import likeIcon from "../../assets/like.svg";
import plusIcon from "../../assets/plus.svg";

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
                    <img src={likeIcon} alt="Like" />
                  </LikeButton>
                  <AddPhotoButton>
                    <img src={plusIcon} alt="Add to Collection" />
                  </AddPhotoButton>
                  <DownloadButton>
                    <img src={downloadIcon} alt="Download" />
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
                    <IconButton>
                      <img src={shareIcon} alt="Share" />
                    </IconButton>
                    <IconButton>
                      <img src={infoIcon} alt="Info" />
                    </IconButton>
                    <IconButton>
                      <img src={moreIcon} alt="More" />
                    </IconButton>
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
