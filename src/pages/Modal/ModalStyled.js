import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  position: relative;
  margin: 16px 120px 0;
  background: #fff;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;

export const ModalLoadingText = styled.div`
  color: #111;
  font-size: 14px;
  text-align: center;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #fff;
`;

export const ModalUserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalAvatarLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalUserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalUsername = styled.span`
  font-size: 15px;
  color: #111;
  font-weight: 500;
`;

export const ModalUserHandle = styled.span`
  font-size: 14px;
  color: #767676;
`;

export const ModalActionButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ModalButton = styled.button`
  background: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  padding: 0 11px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #767676;
  transition: all 0.2s;

  &:hover {
    background: #f8f8f8;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

export const ModalLikeButton = styled(ModalButton)``;
export const ModalCollectButton = styled(ModalButton)``;
export const ModalDownloadButton = styled(ModalButton)``;

export const ModalZoomButton = styled.button`
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
    background: #fff;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

export const ModalImageContainer = styled.div`
  position: relative;
  padding: 24px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  &:hover ${ModalZoomButton} {
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

export const ModalFooter = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

export const ModalStats = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #767676;

  span:nth-child(2) {
    opacity: 0.5;
  }
`;

export const ModalNavButton = styled.button`
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

export const ModalCloseButton = styled.button`
  position: fixed;
  top: 5px;
  left: 5px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 1100;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  img {
    width: 15px;
  }
`;

export const ModalFullScreenImage = styled.div`
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
    width: 100%;
    object-fit: unset;
  }
`;
