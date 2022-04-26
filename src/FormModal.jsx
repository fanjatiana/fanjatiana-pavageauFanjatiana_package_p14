import React from 'react'
import styled, { keyframes } from 'styled-components'

const FormModal = ({ onClick }) => {
  const slideDown = keyframes`
    from
    {
      transform: translateY(-100px);
      opacity : 0
    }
    
   to
    {
      transform: translateY(0px);
      opacity:1
    }
  `

  const slideUp = keyframes`
  from
  {
    transform: translateY(0px);
    opacity : 1
  }
  
 to
  {
    transform: translateY(-100px);
    opacity:0
  }
`

  const ModalContainer = styled.div`
    border: 1px #fff solid;
    background: #035327;
    width: 300px;
    height: 100px;
    position: absolute;
    top: 0px;
    left: 40%;
    z-index: 1000;
    border-radius: 15px;
    animation: ${slideDown} 0.5s linear;
  `

  const ModalBtn = styled.div`
    display: flex;
    justify-content: end;
    margin: 1em 1em 0 0;
    animation: ${slideUp} 0.5s linear;
  `

  const ModalMessage = styled.div`
    display: flex;
    justify-content: center;
  `
  return (
    <ModalContainer>
      <ModalBtn>
        <button aria-label='Close' onClick={onClick}>
          X
        </button>
      </ModalBtn>
      <ModalMessage>
        <p style={{ color: '#FFF' }}>Employee created !</p>
      </ModalMessage>
    </ModalContainer>
  )
}

export default FormModal
