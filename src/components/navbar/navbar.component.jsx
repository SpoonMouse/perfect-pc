import React from 'react';
import './navbar.styles.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
      <nav>
        <h1>PerfectPC</h1>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }


export default Navbar;
