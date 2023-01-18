import React from 'react'
import {Routes, Route} from "react-router-dom"
import Form from '../component/Form/Form'
import Password from '../component/Form/password'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'

const Router = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/Password' element={<Password/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/login"  element={<Login/>}/>
        </Routes>
    </>
  )
}

export default Router

