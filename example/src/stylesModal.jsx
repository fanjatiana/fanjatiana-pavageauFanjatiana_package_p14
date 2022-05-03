import styled, { keyframes } from 'styled-components'

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

export const ModalContainer = styled.div`
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
    background: ${(props) => props.theme.modalContainerBg};
    animation: ${blowUpModal} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    width: 100%;
    height: 100%;
  `

  export const ModalWindow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.bg};
    width: ${(props) => props.theme.width};
    height: ${(props) => props.theme.height};
    margin: auto;
    position: relative;
    border-radius: ${(props) => props.theme.radius};
    z-index: 0;
    animation: ${blowUpContent} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    -webkit-box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.7);
  `

  export const ModalBtn = styled.div`
    display: flex;
    justify-content: end;
    margin: 0.5em 0.5em 0 0;
  `

  export const ModalMessage = styled.div`
    display: flex;
    justify-content: center;
  `

  export const Message = styled.p`
    color: ${(props) => props.theme.messageColor};
    font-size: ${(props) => props.theme.messageFontSize};
    text-align: center;
  `

  export  const Button = styled.button`
    text-decoration: none;
    text-shadow: 1px 1px 0px #fff;
    font-weight: 400;
    color: ${(props) => props.theme.buttonColor};
    background-color: ${(props) => props.theme.buttonBg};
    cursor: pointer;
    border-radius: 50%;
    width: ${(props) => props.theme.buttonWidth};
    height: ${(props) => props.theme.buttonHeight};
    opacity: 1;
    position: absolute;
    right: -10px;
    top: -10px;
    &:hover {
      color: ${(props) => props.theme.buttonHoverColor};
      background: ${(props) => props.theme.buttonHoverBg};
      animation: ${changeOpacity} 0.5s linear;
      border: 2px solid #000;
    }
  `
