import React from "react";
import './option.styles.css';

const Option = () => {
    return (
        <div className="option-container">
        <h1 className="option-title">select your perfect pc</h1>
        <div className="option-buttons">
          <div className="option-card">
            <h2 className="option-card-title">Laptop</h2>
          </div>
          <div className="option-card">
            <h2 className="option-card-title">Desktop</h2>
          </div>
        </div>
      </div>
    );
  };


export default Option