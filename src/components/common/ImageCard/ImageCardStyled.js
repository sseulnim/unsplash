import styled from "styled-components";

export const ImageCardWrapper = styled.div`
  width: calc(33.3333% - 5.333px);
  position: relative;
  z-index: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  cursor: zoom-in;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
  z-index: 2;

  ${ImageCardWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 20px;
  right: 20px; /* 오른쪽 상단 정렬 */
`;

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  cursor: pointer;

  span {
    color: #fff;
    transition: all 0.1s ease-in-out;
  }

  &:hover span {
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const DownloadWrapper = styled.div`
  z-index: 3;

  button {
    background-color: #f5f5f5fa;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2);

    svg {
      color: #555;
    }

    &:hover {
      background-color: #fff;

      svg {
        color: #111;
      }
    }
  }
`;
