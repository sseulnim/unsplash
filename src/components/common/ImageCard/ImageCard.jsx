import { ImageCardWrapper, Image, Overlay } from "./ImageCardStyled";
import ImageCardActions from "./ImageCardActions";
import ImageCardFooter from "./ImageCardFooter";

function ImageCard({ photo, onClick }) {
  // 이미지 카드 클릭 시 모달 열기
  const handleImageClick = () => {
    onClick(photo);
  };

  return (
    <ImageCardWrapper onClick={handleImageClick}>
      <Image src={photo.urls.regular} alt={photo.description} />
      <Overlay>
        <ImageCardActions />{" "}
        {/* 버튼 클릭 이벤트는 ImageCardActions에서 중단 */}
        <ImageCardFooter user={photo.user} />{" "}
        {/* 아바타와 버튼 클릭 이벤트는 ImageCardFooter에서 중단 */}
      </Overlay>
    </ImageCardWrapper>
  );
}

export default ImageCard;
