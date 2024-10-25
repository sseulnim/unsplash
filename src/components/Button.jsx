import styled from "styled-components";
import likeSvg from "../assets/like.svg";
import plusSvg from "../assets/plus.svg";
import arrowDownSvg from "../assets/arrow-down.svg";

function Button({ type, altText }) {
  const iconSrc =
    type === "like" ? likeSvg : type === "plus" ? plusSvg : arrowDownSvg;

  return (
    <ButtonWrapper>
      <img src={iconSrc} alt={altText} />
      <span className="sr-only">{altText}</span>
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
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  img {
    width: 20px;
    height: 20px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
