import React, { useState } from 'react'
import FormModal from 'react-nmp-modal'
import ReactDOM from 'react-dom'

const App = () => {
  const [isShowing, setIsShowing] = useState(true)
  const handleClickToClose = () => {
    setIsShowing(!isShowing)
  }

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <FormModal onClick={handleClickToClose} />
        </>,
        document.body
      )
    : null
}

export default App
