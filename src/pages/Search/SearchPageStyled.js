import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding: 20px;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TextWrap = styled.div`
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
  /* transition: visibility 0s ease, opacity 0.3s ease; */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
  z-index: 2;
`;

export const ImageItem = styled.div`
  width: calc(33.3333% - 5.333px); // 여백을 각 열에 균등하게 분배
  position: relative;
  z-index: 1;

  &:hover ${TextWrap} {
    visibility: visible;
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 20px;
  right: 20px; /* 오른쪽 상단 정렬 */
`;

export const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  bottom: 20px;
  left: 20px; /* 왼쪽 하단 정렬 */
  color: white;
`;

export const DownloadButtonWrap = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px; /* 오른쪽 하단 정렬 */
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

export const LoadingText = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const ErrorText = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

export const ScrollArea = styled.div`
  text-align: center;
  margin-top: 20px;
`;
