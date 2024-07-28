import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import SignUpPage from "./pages/SignUp"
import { Heading1 } from 'lucide-react'
import SignInPage  from './pages/Login'
import { Navbar } from './pages/Header'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<SignInPage/>}/>        
      </Routes>
    </>
  )
}

export default App
