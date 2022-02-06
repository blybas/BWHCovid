import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {ButtonToolbar, DropdownButton, Navbar} from "react-bootstrap"
import * as PropTypes from "prop-types";
import {useState} from 'react';

function MenuItem(props) {
    return null;
}

MenuItem.propTypes = {
    eventKey: PropTypes.string,
    children: PropTypes.node
};

function App() {
    const [openDropdown, setOpenDropdown]=useState(false)
    function toggleDropdown() {
        if (openDropdown){setOpenDropdown(false)}
        else {setOpenDropdown(true)}
        console.log(openDropdown, "openDropdown")
    }

  return (
    <div className="App">
        <Navbar bg='dark' variant = 'dark'>
            <Navbar.Brand>
              <div className ='Navbar-brand'>
                 <img src="BWH_logo.PNG" className='Logo'/>
                  OSIB Covid Testing Site Finder
              </div>
            </Navbar.Brand>
        </Navbar>
        <div className="Message">
            <h1><strong>
                Thank you for updating the COVID testing site finder!
            </strong></h1>
        </div>

        <div className="dropdown">
            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" onClick={toggleDropdown}>
                How many patients are currently waiting at your site?
            </button>
            {openDropdown?
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Fewer than 5</a>
                <a className="dropdown-item" href="#">6 - 15</a>
                <a className="dropdown-item" href="#">16 - 25</a>
                <a className="dropdown-item" href="#">More than 25</a>
            </div>
                :
            <></>}

        </div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <div className="dropdown">
            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Are you closed to new patients at this time?
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">No, we are accepting new patients</a>
                <a className="dropdown-item" href="#">Yes, we are closed for the day</a>
            </div>
        </div>
    </div>
  );
}

export default App;