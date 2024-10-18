import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding: 20px;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ImageItem = styled.div`
  width: calc(33.3333% - 5.333px); // 여백을 각 열에 균등하게 분배
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
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
