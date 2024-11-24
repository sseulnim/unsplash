import Button from "../../Button";
import LikeButton from "../../buttons/LikeButton";
import PlusButton from "../../buttons/PlusButton";
import { ActionsWrapper } from "./ImageCardStyled";

function ImageCardActions() {
  // 버튼 클릭 이벤트가 상위로 전파되지 않도록 중단
  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ActionsWrapper onClick={handleButtonClick}>
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
