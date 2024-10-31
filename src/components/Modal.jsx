import React from "react";
import styled from "styled-components";

function Modal({ isOpen, onClose, imageUrl, imageAlt, children }) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={imageAlt} />
        {children}
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </Overlay>
  );
}

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  max-width: 90%;
  max-height: 80%;
  overflow: auto;
  border-radius: 8px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;
