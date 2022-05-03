import React, { useState } from 'react'
import Modal from 'react-nmp-modal'
import ReactDOM from 'react-dom'

const App = () => {
  const [isShowing, setIsShowing] = useState(true)

  // function that closes the modal
  const handleClickToClose = () => {
    setIsShowing(!isShowing)
  }

  // to customize the modal
  const styles = {
    modalContainerBg: 'rgba(0, 0, 0, 0.7)',
    bg: '#fff',
    width: '300px',
    height: '100px',
    radius: '5px',
    messageColor: '#000',
    messageFontSize: '1.2em',
    buttonColor: '#000',
    buttonBg: '#fff',
    buttonWidth: '30px',
    buttonHeight: '30px',
    buttonHoverColor: '#fff',
    buttonHoverBg: '#000'
  }

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <Modal
            modalStyles={styles}
            onClick={handleClickToClose}
            messageText='Employee is created !'
          />
        </>,
        document.body
      )
    : null
}

export default App
