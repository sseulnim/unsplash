import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ isFullScreen }) =>
    isFullScreen ? "black" : "rgba(0, 0, 0, 0.8)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background: ${({ isFullScreen }) => (isFullScreen ? "black" : "white")};
  padding: ${({ isFullScreen }) => (isFullScreen ? "0" : "20px")};
  max-width: ${({ isFullScreen }) => (isFullScreen ? "100%" : "90%")};
  max-height: ${({ isFullScreen }) => (isFullScreen ? "100%" : "80%")};
  overflow: ${({ isFullScreen }) => (isFullScreen ? "hidden" : "auto")};
  border-radius: ${({ isFullScreen }) => (isFullScreen ? "0" : "8px")};
`;

export const ModalImage = styled.img`
  width: ${({ isFullScreen }) => (isFullScreen ? "100vw" : "100%")};
  height: ${({ isFullScreen }) => (isFullScreen ? "100vh" : "auto")};
  object-fit: contain;
  cursor: pointer;
`;

export const LoadingText = styled.p`
  color: white;
  text-align: center;
`;

export const TopBar = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BrandInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const BrandText = styled.div`
  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: gray;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const AddPhotoButton = styled(LikeButton)``;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: black;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatInfo = styled.div`
  font-size: 0.9rem;
  color: gray;
  display: flex;
  gap: 20px;
`;

export const StatItem = styled.span`
  font-size: 0.9rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  /* display: ${({ isFullScreen }) => (isFullScreen ? "none" : "block")}; */
`;
