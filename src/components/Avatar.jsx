import styled from "styled-components";

function Avatar({ src, alt }) {
  return (
    <AvatarWrapper>
      <img src={src} alt={alt} />
    </AvatarWrapper>
  );
}

export default Avatar;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
