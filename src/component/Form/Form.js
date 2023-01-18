import React from 'react'
import style from './Form.module.css'
import {FaTwitter} from 'react-icons/fa';
import Inputfield from '../../Atom/Input/Input';
import SignUp from '../../Atom/SignUp/SignUp';
import Image from './apple.png'
import Image2 from './google.png'
import { Link } from 'react-router-dom';




function Form() {
  return (
    <div className={style.main}  >
        <form className={style.form} style={{gap:'1vh', position:"absolute"}}>
            <FaTwitter style={{color:"white",fontSize:"40px",marginTop:"10px"}}/>
            <h1>Sign in to Twitter</h1>
            <SignUp 
              SignUpTxt={"Sign in with Google"}
              Image={Image2}/>
          
            <br/>
            <SignUp 
             SignUpTxt={"Sign in with Apple"}
             Image={Image}/>
            <br/>
           <span style={{display:"flex" }}><hr/>&nbsp;&nbsp;or&nbsp;&nbsp;<hr/></span> 
           <br/>
            <Inputfield />
            <br/>
            <Link to={"/Password"}><SignUp
             SignUpTxt={"Next"}/></Link>
            <br/>
            <SignUp
             SignUpTxt={"Forgot password?"}/>
            <h4>Don't have an account?<Link to={"/login"} ><span style={{color:"#2997f1"}}> Sign up</span> </Link></h4>
            <br/>
        </form>
      
    </div>
  )
}

export default Form
