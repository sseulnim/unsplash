import styled from "styled-components";

function LoadingState() {
  return <LoadingText>로딩중...</LoadingText>;
}

const LoadingText = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default LoadingState;
