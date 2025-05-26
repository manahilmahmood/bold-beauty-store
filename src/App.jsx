import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStack from "./navigation/MainStack";
import Header from "./components/header";
import Navbar from "./navigation/Navbar";
import Footer from "./components/Footer";

function App() {
 
  return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <MainStack/>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
