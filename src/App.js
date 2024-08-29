
import './App.css';
import Alerts from './component/Alerts';
import Navbar from './component/Navbar';
import About from './component/About';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

 



import TextForm from './component/TextForm';
import { useState } from 'react';

function App() {
  const [mode,setmode]= useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      type:type,
      msg:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggle=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.color="white"
      document.body.style.backgroundColor="#212529"
      showAlert("Dark mode has been enabled","success")

    }
    else{
      setmode("light")
      document.body.style.color="black"
      document.body.style.backgroundColor="white"
      showAlert("Dark mode has been disbled","success")

    }
  }
  return (
    <Router>
      <Navbar title="ALTER" about="ABOUT" mode={mode} toggle={toggle} />
      <Alerts alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/> } />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
