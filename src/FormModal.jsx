import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const FormModal = () => {
  const [isShowing, setIsShowing] = useState(true)
  const handleClickToClose = () => {
    setIsShowing(!isShowing)
  }
  const slideUp = keyframes`
  from
  {
    transform: translateY(100px);
    opacity : 0
    
  }
  
 to
  {
    transform: translateY(-10px);
    opacity:1
  }
`

  const changeOpacity = keyframes`
from
{
  opacity : 0
 
}

to
{
  opacity:1

`

  const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    margin: auto;
    width: auto;
    height: 100vh;
    background: transparent;
    z-index: -10000;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `

  const ModalWindow = styled.div`
    -webkit-box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.7);
    background: #fff;
    width: 300px;
    height: 60px;
    position: absolute;
    bottom: 10px;
    left: 40%;
    z-index: 1000;
    border-radius: 15px;
    animation-fill-mode: forwards;
    animation: ${slideUp} 0.3s;
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
    color: #000;
    font-size: 1em;
  `

  const Button = styled.button`
    text-decoration: none;
    text-shadow: 1px 1px 0px #fff;
    font-weight: 400;
    color: #000;
    background-color: #fff;
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    opacity: 1;
    position: absolute;
    right: -5px;
    top: -5px;
    &:hover {
      color: #fff;
      background: #000;
      animation: ${changeOpacity} 0.5s linear;
      border: 2px solid #000;
    }
  `

  return (
    <ModalContainer>
      <ModalWindow>
        <ModalBtn>
          <Button aria-label='Close' onClick={handleClickToClose}>
            X
          </Button>
        </ModalBtn>
        <ModalMessage>
          <Message>Employee created !</Message>
        </ModalMessage>
      </ModalWindow>
    </ModalContainer>
  )
}

export default FormModal
