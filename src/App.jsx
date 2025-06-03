import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStack from "./navigation/MainStack";
import Header from "./components/header";
import Navbar from "./navigation/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [role, setRole] = useState('user')

  const getRole = () => {
    let user = localStorage.getItem('user')
    user = JSON.parse(user)

    
    setRole(user?.role)
  }

  useEffect(() => {
    getRole()
  }, [])
 
  return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <MainStack role={role}/>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
