import React, { useState } from 'react'
import FormModal from 'react-nmp-modal'

const App = () => {
  const [isShowing, setIsShowing] = useState(false)
  const handleClickToClose = () => {
    setIsShowing(!isShowing)
  }

  return <FormModal onClick={handleClickToClose} />
}

export default App
