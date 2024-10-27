import styled from "styled-components";

function Button({ children, altText, ...props }) {
  return (
    <ButtonWrapper {...props}>
      <Icon>{children}</Icon>
      <ScreenReaderText>{altText}</ScreenReaderText>
    </ButtonWrapper>
  );
}

export default Button;

const ButtonWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  /* border-radius: 50%; */
  transition: background-color 0.3s ease;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const Icon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ScreenReaderText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
