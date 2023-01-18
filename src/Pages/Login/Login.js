import React, { useState } from 'react'
import style from "./Login.module.css"
import Button from "../../Atom/Button/Button"
import {FaTwitter} from 'react-icons/fa';
import { GrGoogle } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';
import SignUp from '../../Atom/SignUp/SignUp';
import Image from "../../component/Form/apple.png"
import Image2 from "./google.png"

function Login() {
    const[state,setState]=useState("")
  
     const  handelinput =(e)=>{
  
       setState(e.target.value)
      
       console.log(e.target.value)
     }
  
     const nevigate = useNavigate()
        const Forgetpas=()=>{
         
           nevigate('/Forget')
        }
       
        const signnewpage =()=>{
         
           nevigate('/Singnewpage')
        }
   
      
  
    return (
      <>
  
       <div className={style.main}>
        <div className={style.center}>
        <FaTwitter style={{color:"white",fontSize:"40px",marginTop:"10px"}}/>
      <br/>
         <h1>Join Twitter today</h1><br/>
     
         <SignUp 
              SignUpTxt={"Sign in with Google"}
              Image={Image2}
              />
          
            <br/>
            <SignUp 
             SignUpTxt={"Sign in with Apple"}
             Image={Image}/>
            
            <br/>
            <span style={{display:"flex" }}><hr/>&nbsp;&nbsp;or&nbsp;&nbsp;<hr/></span> 
           <br/>
  
              
                <Button
         btnText="Sign up with Phone or email"
         onClick={signnewpage}
         className={style.But} /><br/>
         By signing up, you agree to the Terms of Service<br/>and Privacy Policy, including Cookie Use.
         <h4>Already have an account?<Link to={"/"} ><span style={{color:"#2997f1"}}> Log in</span> </Link></h4>               
              
  
            
  
        </div>
        </div>   
      
      
      </>
  
    )
  }
  
  export default Login