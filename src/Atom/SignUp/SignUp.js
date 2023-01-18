import React from 'react'
import style from './SignUp.module.css'

function SignUp({SignUpTxt,Image}) {
  return (
    <div>
        <button className={style.signbtn}><img className={style.img1} src={Image}></img>{SignUpTxt}</button>
    </div>
  )
}

export default SignUp