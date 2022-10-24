import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {useState} from "react"

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({message: message, type: type})
    setTimeout(()=>{
      setAlert(message,type)
    }, 1000)
  }
  const toggleMode = ()=>{
    if(mode === "light")
    {
      setMode('dark')
      document.body.style.backgroundColor='#393c45'
      showAlert("Dark Mode has been set", "success")
    }
    else if(mode === "dark")
    {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been set", "success")
    }
  }
  return (
    <>
   
    <Navbar title="Textutils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert ={alert}/>
    <div className="container my-3">
    <Textform showAlert = {showAlert} heading="Enter your text:" mode = {mode}/>
    </div>
    </>
  );
}

export default App;
