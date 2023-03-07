import React from "react";
import './option.styles.css';
import { Link } from 'react-router-dom';

const Option = () => {
    return (
        <div className="option-container">
        <h1 className="option-title">select your perfect pc</h1>
          <div className="option-buttons">
          <div className="option-card">
          <Link to='/laptopquiz'>
          <button className="option-card-title">Laptop</button>
          </Link>
          </div>
          <div className="option-card">
            <Link to='/desktopquiz'>
          <button className="option-card-title">Desktop</button>
          </Link>
          </div>
        </div>
      </div>
    );
  };


export default Option