import styled from "styled-components";

function ArrowDownButton() {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      version="1.1"
      viewBox="0 0 32 32"
      aria-hidden="false"
    >
      <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z" />
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  width: 16px;
  height: 16px;

  path {
    fill: currentColor;
  }
`;

export default ArrowDownButton;
