import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  Button,
  Message,
  ModalBtn,
  ModalContainer,
  ModalMessage,
  ModalWindow
} from '../example/src/stylesModal'

const Modal = ({ modalStyles, onClick, messageText }) => {
  return (
    <ThemeProvider theme={modalStyles}>
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
    </ThemeProvider>
  )
}

export default Modal
