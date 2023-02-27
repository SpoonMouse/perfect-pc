import React, { useState, useEffect } from 'react';

const LaptopQuiz = () => {
    const [budget, setBudget] = useState('');
    const [operatingSystem, setOperatingSystem] = useState('');
    const [purpose, setPurpose] = useState('');
    const [filteredLaptop, setFilteredLaptop] = useState('');
  
    useEffect(() => {
      const laptops = [
        {operatingSystem: 'macOS', model: 'MacBook Air', price: '$999' },
        {operatingSystem: 'Windows', model: 'Surface Laptop 4', price: '$999' },
        {operatingSystem: 'Windows', model: 'XPS 13', price: '$999' },
      ];
  
      const filteredLaptops = laptops.filter(laptop => {
        return laptop.operatingSystem === operatingSystem &&
               laptop.purpose === purpose &&
               laptop.price === budget;
      });
  
      if (filteredLaptops.length > 0) {
        setFilteredLaptop(filteredLaptops[0]);
      } else {
        setFilteredLaptop('');
      }
    }, [budget, operatingSystem, purpose]);
  
    return (
      <div>
        <h2>Laptop Quiz</h2>
        <div>
          <label>Budget:</label>
          <select value={budget} onChange={e => setBudget(e.target.value)}>
            <option value=""></option>
            <option value="$999">$999 or less</option>
            <option value="$1499">$1499 or less</option>
            <option value="$1999">$1999 or less</option>
            <option value="$2000+">$2000 or more</option>
          </select>
        </div>
        <div>
          <label>Purpose: </label>
          <select value={purpose} onChange={e => setPurpose(e.target.value)}>
            <option value=""></option>
            <option value="Gaming/Streaming">Gaming/Streaming</option>
            <option value="Student">School</option>
            <option value="Rendering">3D Rendering or Editing Videos</option>
            <option value="Media">Media PC</option>
            <option value="Business">Day-to-Day Business</option>
          </select>
        </div>
        <div>
          <label>Operating System:</label>
          <select value={operatingSystem} onChange={e => setOperatingSystem(e.target.value)}>
            <option value=""></option>
            <option value="macOS">macOS</option>
            <option value="Windows">Windows</option>
            <option value="Linux">Linux</option>
          </select>
        </div>
        <div>
          {filteredLaptop ? (
            <div>
              <h3>{filteredLaptop.brand} {filteredLaptop.model}</h3>
              <p>{filteredLaptop.operatingSystem} - {filteredLaptop.price}</p>
            </div>
          ) : (
            <p>No laptops found. Likely because you want a gaming Mac lol</p>
          )}
        </div>
      </div>
    );
  };

  export default LaptopQuiz;
