import React, { useState, useEffect } from 'react';


const DesktopQuiz = () => {
    const [budget, setBudget] = useState('');
    const [operatingSystem, setOperatingSystem] = useState('');
    const [purpose, setPurpose] = useState('');
    const [filteredDesktop, setFilteredDesktop] = useState('');
  
    useEffect(() => {

      const desktops = [
        {operatingSystem: 'macOS', model: 'MacBook Air', price: '$999' },
        {operatingSystem: 'Windows', model: 'Surface Laptop 4', price: '$999' },
        {operatingSystem: 'Windows', model: 'XPS 13', price: '$999' },
      ];
  
      const filteredDesktops = desktops.filter(desktop => {
        return desktop.operatingSystem === operatingSystem &&
               desktop.purpose === purpose &&
               desktop.price === budget;
      });
  
      if (filteredDesktops.length > 0) {
        setFilteredDesktop(filteredDesktops[0]);
      } else {
        setFilteredDesktop('');
      }
    }, [budget, operatingSystem, purpose]);
  
    return (
      <div>
        <h2>Desktop Quiz</h2>
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
          </select>
        </div>
        <div>
          {filteredDesktop ? (
            <div>
              <h3>{filteredDesktop.purpose} {filteredDesktop.model}</h3>
              <p>{filteredDesktop.operatingSystem} - {filteredDesktop.price}</p>
            </div>
          ) : (
            <p>No desktops found. Likely because you want a gaming Mac lol</p>
          )}
        </div>
      </div>
    );
  };

  export default DesktopQuiz;