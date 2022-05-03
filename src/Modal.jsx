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

const Modal = (props) => {
  return (
    <ThemeProvider theme={props.styles}>
      <ModalContainer>
        <ModalWindow>
          <ModalBtn>
            <Button aria-label='Close' onClick={props.onClick}>
              X
            </Button>
          </ModalBtn>
          <ModalMessage>
            <Message>{props.messageText}</Message>
          </ModalMessage>
        </ModalWindow>
      </ModalContainer>
    </ThemeProvider>
  )
}

export default Modal
