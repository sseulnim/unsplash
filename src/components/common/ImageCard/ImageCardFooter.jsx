import Avatar from "../../Avatar";
import Button from "../../Button";
import ArrowDownButton from "../../buttons/ArrowDownButton";
import { FooterWrapper, UserInfo, DownloadWrapper } from "./ImageCardStyled";

function ImageCardFooter({ user }) {
  // 아바타와 다운로드 버튼 클릭 이벤트가 상위로 전파되지 않도록 중단
  const handleFooterClick = (e) => {
    e.stopPropagation();
  };

  return (
    <FooterWrapper onClick={handleFooterClick}>
      <UserInfo>
        <Avatar src={user.profile_image.small} alt={user.username} />
        <span>{user.username}</span>
      </UserInfo>
      <DownloadWrapper>
        <Button altText="다운로드">
          <ArrowDownButton />
        </Button>
      </DownloadWrapper>
    </FooterWrapper>
  );
}

export default ImageCardFooter;
