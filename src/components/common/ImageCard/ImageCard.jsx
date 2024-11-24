import { ImageCardWrapper, Image, Overlay } from "./ImageCardStyled";
import ImageCardActions from "./ImageCardActions";
import ImageCardFooter from "./ImageCardFooter";

function ImageCard({ photo, onClick }) {
  return (
    <ImageCardWrapper onClick={() => onClick(photo)}>
      <Image src={photo.urls.regular} alt={photo.description} />
      <Overlay>
        <ImageCardActions />
        <ImageCardFooter user={photo.user} />
      </Overlay>
    </ImageCardWrapper>
  );
}

export default ImageCard;
