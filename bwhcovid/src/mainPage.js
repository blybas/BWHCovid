import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from "react-bootstrap"
import { Button } from "react-bootstrap"

function App() {
  return (
  <div className='App'>
    <Navbar bg='dark' variant = 'dark'>
       <Navbar.Brand>
            <div className ='Navbar-brand'>
               <img src="logo.png" className='Logo'/>
                OSIB Covid Testing Site Finder
            </div>
       </Navbar.Brand>
     </Navbar>
     <div className = "wait">
         <img src="waitmap.png" />
     </div>
        <div className ="search">
            Covid Testing Locations near you
        </div>
        <div className = "bing">
            25 testing locations in Inglewood California
        </div>
  </div>
  );
}

export default App;