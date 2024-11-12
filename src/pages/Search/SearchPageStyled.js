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
  padding: 10px;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s ease, opacity 0.3s ease;
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
  top: 30px;
  right: 30px; /* 오른쪽 상단 정렬 */
`;

export const Button = styled.button`
  width: 58px;
  height: 47px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  img {
    width: 24px;
    height: 24px;
    color: #555555;
    transition: fill 0.3s ease;
  }

  &:hover {
    background-color: #ffffff;

    img {
      fill: #111111;
    }
  }
`;

export const AvatarWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  bottom: 30px;
  left: 30px; /* 왼쪽 하단 정렬 */
  color: white;
`;

export const DownloadButtonWrap = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px; /* 오른쪽 하단 정렬 */
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
