import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const FormModal = ({ onClick }) => {
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
  {
    /*
display: flex;
    justify-content: center;
    align-item: center;
    margin: auto;
    width: 100%;
    height: 100%;
    background:rgba(20, 0, 0, 0.4);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
animation: ${slideUp} 0.3s linear;
*/
    /*
 -webkit-box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.7);
    background: #fff;
    width: 300px;
    height: 60px;
    z-index: 1000;
    margin: auto;
    border-radius: 15px;
    z-index: 1;
     position: relative;
*/
  }
  const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    z-index: 0;
    transform: scale(1);
    background: rgba(0, 0, 0, 0.7);
    animation: ${blowUpModal} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    width: 100%;
    height: 100vh;
  `

  const ModalWindow = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    background: #fff;
    width: 200px;
    height: 200px;
    margin: auto;
    background: white;
    position: relative;
    border-radius:5px;
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
    color: #000;
    font-size: 1.2em;
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
          <Button aria-label='Close' onClick={onClick}>
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
