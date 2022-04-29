# react-nmp-modal

> validation message for form

[![NPM](https://img.shields.io/npm/v/react-nmp-modal.svg)](https://www.npmjs.com/package/react-nmp-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-nmp-modal
```

or

```bash
yarn add react-nmp-modal
```

## Prerequisites

```bash
npm install
```

```bash
yarn add react react-dom
```

```bash
yarn add styled-components
```

## Usage

```jsx
import React, { useState } from 'react'
import Modal from 'react-nmp-modal'

const Form = () => {
  const [isShowing, setIsShowing] = useState(false)

  const handleClickToClose = () => {
    setIsShowing(!isShowing)
  }

  const myStylesModal = {
    modalContainerBg: 'rgba(0, 0, 0, 0.7)',
    bg: '#fff',
    width: '200px',
    height: '200px',
    radius: '5px',
    messageColor: '#000',
    messageFontSize: '1em',
    buttonColor: '#000',
    buttonBg: '#fff',
    buttonWidth: '30px',
    buttonHeight: '30px',
    buttonHoverColor: '#fff',
    buttonHoverBg: '#000'
  }

  return (
    <>
      <form>.... </form>
      {isShowing ? (
        <>
          <Modal
            modalStyles={myStylesModal}
            onClick={handleClickToClose}
            messageText='Employee created !'
          />
        </>
      ) : null}
    </>
  )
}
```

## License

pavageau F © [pavageau f](https://github.com/pavageau f)
