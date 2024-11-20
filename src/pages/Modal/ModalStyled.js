import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  width: fit-content;
  max-width: 90%;
  background: white;
  border-radius: 4px;
  overflow: hidden;
`;

export const LoadingText = styled.div`
  color: #111;
  font-size: 14px;
  text-align: center;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: white;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.8;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.span`
  font-size: 15px;
  color: #111;
  font-weight: 500;
`;

export const UserHandle = styled.span`
  font-size: 14px;
  color: #767676;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Button = styled.button`
  background: white;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  padding: 8px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #111;
  transition: all 0.2s;

  &:hover {
    background: #f8f8f8;
  }

  img {
    width: 18px;
    height: 18px;
  }
`;

export const LikeButton = styled(Button)``;

export const CollectButton = styled(Button)``;

export const DownloadButton = styled(Button)``;

export const ZoomButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 10;

  &:hover {
    background: white;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  padding: 24px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  &:hover ${ZoomButton} {
    opacity: 1;
  }
`;

export const ModalImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: calc(90vh - 120px);
  width: auto;
  height: auto;
  cursor: zoom-in;
`;

export const Footer = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

export const Stats = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #767676;

  span:nth-child(2) {
    opacity: 0.5;
  }
`;

export const NavButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => (direction === "prev" ? "left: 20px;" : "right: 20px;")}
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 1100;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  img {
    width: 24px;
    height: 24px;
    filter: invert(1);
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 1100;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  img {
    width: 24px;
    height: 24px;
    filter: invert(1);
  }
`;

export const FullScreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  cursor: zoom-out;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
