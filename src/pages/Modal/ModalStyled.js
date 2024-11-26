import styled from "styled-components";

export const ModalImage = styled.img`
  position: relative;
  display: block;
  max-width: 100%;
  max-height: calc(90vh - 120px);
  width: auto;
  height: auto;
  cursor: zoom-in;
  padding: 10px 20px;
  box-sizing: border-box;
`;

export const ModalFullScreenZoomButton = styled.button`
  position: absolute;
  top: 25px;
  right: 35px;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  z-index: 1300;
`;

export const ModalImageWrapper = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  &:hover ${ModalFullScreenZoomButton} {
    opacity: 1;
  }
`;

export const ModalFullScreenWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${ModalFullScreenZoomButton} {
    opacity: 1;
  }
`;

export const ModalFullScreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  cursor: zoom-out;
  overflow-y: auto;
  overflow-x: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

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
    fill: #d1d1d1;
  }

  &:hover svg {
    fill: #fff;
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

  &:hover {
    opacity: 1;
  }

  img {
    width: 24px;
    height: 24px;
    fill: #d1d1d1;
  }

  &:hover svg {
    fill: #fff;
  }
`;

export const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;
  background: #fff;
  gap: 8px;
`;

export const ModalUserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalAvatarLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
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
  background: linear-gradient(180deg, transparent 50%, rgba(10, 20, 30, 0.02))
    #fff;
  border: 1px solid #d1d1d1;
  border-radius: 6px;
  padding: 0 11px;
  height: 32px;
  line-height: 30px;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);

  path,
  circle {
    fill: currentColor;
  }

  &:hover {
    color: #111;
    border-color: #767676;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    path,
    circle {
      fill: #111;
    }
  }
`;

export const ModalLikeButton = styled(ModalButton)`
  svg {
    width: 14px;
    height: 12px;
  }
`;

export const ModalCollectButton = styled(ModalButton)`
  svg {
    width: 14px;
    height: 12px;
  }
`;

export const ModalDownloadButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 6px;
  height: 32px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-color: #767676;
  }
`;

export const ModalDownloadTextButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 0 11px;
  color: #767676;
  height: 100%;
  background: none;
  border: none;
  border-right: 1px solid #d1d1d1;
  cursor: pointer;

  path,
  circle {
    fill: currentColor;
  }

  &:hover {
    color: #111;
    border-color: #767676;

    path,
    circle {
      fill: #111;
    }
  }
`;

export const ModalDownloadIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
    fill: #767676;
  }

  &:hover {
    svg {
      fill: #111;

      path,
      circle {
        fill: #111;
      }
    }
  }
`;

export const ModalImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
export const ModalFooter = styled.div`
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
`;

export const ModalFooterStatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 160px));
  column-gap: 24px;
  align-items: center;
`;

export const ModalStatBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 44px;
`;

export const ModalStatTitle = styled.h3`
  font-size: 14px;
  color: #767676;
  margin: 0;
  line-height: 1.6;
  font-weight: 400;
`;

export const ModalStatValue = styled.span`
  font-size: 15px;
  color: #000;
  margin: 0;
  line-height: 1.6;
  font-weight: 400;
`;
