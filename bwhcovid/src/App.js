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
       <div className ="left">
        <Button>I am an Administrator</Button>
       </div>
     </Navbar>
     <img src="map.png" />
        <div className ="search">
            <input type="text" placeholder="Enter your zipcode"/>
            <button>Zipcode</button>
        </div>
  </div>
  );
}

export default App;