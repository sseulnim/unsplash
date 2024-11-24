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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 32px;
  background-color: #f5f5f5fa;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0 11px;

  &:hover {
    background-color: #fff;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: #555;
  }

  &:hover svg {
    fill: #111;
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
