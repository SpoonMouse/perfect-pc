import React from "react";
import './option.styles.css';

const Option = () => {
    return (
        <div className="option-container">
        <h1 className="option-title">select your perfect pc</h1>
        <div className="option-buttons">
          <div className="option-card">
            <h2 className="option-card-title">Option 1</h2>
            <p className="option-card-description">Description for Option 1</p>
          </div>
          <div className="option-card">
            <h2 className="option-card-title">Option 2</h2>
            <p className="option-card-description">Description for Option 2</p>
          </div>
        </div>
      </div>
    );
  };


export default Option