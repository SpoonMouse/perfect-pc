import React from 'react';
import './home.styles.css';
import "animate.css"
import { Link } from "react-router-dom";

function Home() {
    return (
      <header className="header-container">
        <h1 className="header-title">find your dream computer in just a few clicks</h1>
        <Link to="/option">
         <button 
            className="header-button animate__animated animate__fadeIn">get started
         </button>
        </Link>
      </header>
    );
  }
  
  export default Home;