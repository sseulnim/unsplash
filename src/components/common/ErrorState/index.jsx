import styled from "styled-components";

function ErrorState({ message }) {
  return <ErrorText>{message}</ErrorText>;
}

const ErrorText = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

export default ErrorState;
