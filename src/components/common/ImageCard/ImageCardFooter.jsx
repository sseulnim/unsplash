import Avatar from "../../Avatar";
import Button from "../../Button";
import ArrowDownButton from "../../buttons/ArrowDownButton";
import { FooterWrapper, UserInfo, DownloadWrapper } from "./ImageCardStyled";

function ImageCardFooter({ user }) {
  return (
    <FooterWrapper>
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
