import React from 'react'
import styled, { keyframes } from 'styled-components'

const Modal = ({ modalStyles, onClick, messageText }) => {
  const {
    modalContainerBg,
    bg,
    width,
    height,
    radius,
    messageColor,
    messageFontSize,
    buttonColor,
    buttonBg,
    buttonWidth,
    buttonHeight,
    buttonHoverColor,
    buttonHoverBg
  } = modalStyles

  // to customize the modal with styled-components
  const changeOpacity = keyframes`
from
{
  opacity : 0
 
}

to
{
  opacity:1

`

  const blowUpModal = keyframes`

0% {
  transform:scale(0);
}
100% {
  transform:scale(1);
}
`

  const blowUpContent = keyframes`
0% {
  transform:scale(0.5);
  opacity:1;
}
100% {
  transform:scale(1);
}
`

  const ModalContainer = styled.div`
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-item: center;
    z-index: 0;
    transform: scale(1);
    background: ${modalContainerBg};
    animation: ${blowUpModal} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    width: 100%;
    height: 100%;
  `

  const ModalWindow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${bg};
    width: ${width};
    height: ${height};
    margin: auto;
    position: relative;
    border-radius: ${radius};
    z-index: 0;
    animation: ${blowUpContent} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    -webkit-box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.7);
  `

  const ModalBtn = styled.div`
    display: flex;
    justify-content: end;
    margin: 0.5em 0.5em 0 0;
  `

  const ModalMessage = styled.div`
    display: flex;
    justify-content: center;
  `

  const Message = styled.p`
    color: ${messageColor};
    font-size: ${messageFontSize};
    text-align: center;
  `

  const Button = styled.button`
    text-decoration: none;
    text-shadow: 1px 1px 0px #fff;
    font-weight: 400;
    color: ${buttonColor};
    background-color: ${buttonBg};
    cursor: pointer;
    border-radius: 50%;
    width: ${buttonWidth};
    height: ${buttonHeight};
    opacity: 1;
    position: absolute;
    right: -5px;
    top: -5px;
    &:hover {
      color: ${buttonHoverColor};
      background: ${buttonHoverBg};
      animation: ${changeOpacity} 0.5s linear;
      border: 2px solid #000;
    }
  `

  return (
    <ModalContainer>
      <ModalWindow>
        <ModalBtn>
          <Button aria-label='Close' onClick={onClick}>
            X
          </Button>
        </ModalBtn>
        <ModalMessage>
          <Message>{messageText}</Message>
        </ModalMessage>
      </ModalWindow>
    </ModalContainer>
  )
}

export default Modal
