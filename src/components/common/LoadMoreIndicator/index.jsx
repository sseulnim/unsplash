import styled from "styled-components";

function LoadMoreIndicator({ isFetchingNextPage, hasNextPage }) {
  return (
    <LoadMoreText>
      {isFetchingNextPage
        ? "로딩중..."
        : hasNextPage
        ? "더보기"
        : "마지막 페이지"}
    </LoadMoreText>
  );
}

const LoadMoreText = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default LoadMoreIndicator;
