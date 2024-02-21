
import "./App.css";
import "./styling.css";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Hours from './components/Hours';
import ContactForm from "./components/ContactForm";
import "./styling/BackgroundImage.css";
import Reference from "./components/Reference";
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import React from "react";
import BookingLink from "./components/BookingLink";


function App() {
  return (
    
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<div><Navbar/> <Hours/><Contact/><BookingLink/><Reference/></div>}/>
         <Route path="contactform" element={<ContactForm />} />        
       </Routes>
      </BrowserRouter>    
  );
  }



  export default App;



