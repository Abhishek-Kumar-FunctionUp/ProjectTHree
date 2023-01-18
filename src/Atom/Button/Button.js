import React from 'react'
import style from './Button.module.css'

function Button({btnText, handleClicked}) {
  return (
    <button onClick={handleClicked} className={style.btn}>
      {btnText}
    
    </button>
  )
}

export default Button
