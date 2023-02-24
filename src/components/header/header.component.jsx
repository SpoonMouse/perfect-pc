import React from 'react';
import './header.styles.css';
import "animate.css"

function Header() {
    return (
      <header className="header-container">
        <h1 className="header-title">build your dream computer in just a few clicks</h1>
        <button className="header-button animate__animated animate__fadeIn">start</button>
      </header>
    );
  }
  
  export default Header;