// import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/SignUp";

import Header from './components/Header'; 
import Text from './components/Text';

import Footer from './components/Footer';
import './assets/css/bootstrap.min.css';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
    <Route path="/" element={<Text/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

