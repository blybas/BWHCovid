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
     <div className ="wait">
                 <input type="text" placeholder=""/>
                 <button>User Number</button>
     </div>
     <p></p>
     <p></p>
     <div className ="bing">
                      <input type="text" placeholder=""/>
                      <button>Pass Code</button>
     </div>
  </div>
  );
}

export default App;