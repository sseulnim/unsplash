import Button from "../../Button";
import LikeButton from "../../buttons/LikeButton";
import PlusButton from "../../buttons/PlusButton";
import { ActionsWrapper } from "./ImageCardStyled";

function ImageCardActions() {
  return (
    <ActionsWrapper>
      <Button altText="좋아요">
        <LikeButton />
      </Button>
      <Button altText="추가">
        <PlusButton />
      </Button>
    </ActionsWrapper>
  );
}

export default ImageCardActions;
