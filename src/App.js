import React from 'react';
import Navbar from './components/navbar/navbar.component.jsx';
import Home from './components/home/home.component.jsx';
import Option from './components/option/option.component.jsx';
import DesktopQuiz from './components/desktop-quiz/desktopquiz.component.jsx';
import LaptopQuiz from './components/laptop-quiz/laptopquiz.component.jsx';
import "animate.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <Router>
    <div className='App'>
        <Navbar />
      <div className='content'>
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/option' element={< Option />}/>
            <Route path ='/desktopquiz' element ={< DesktopQuiz />}/>
            <Route path ='/laptopquiz' element ={< LaptopQuiz />}/>
         </Routes>
      </div>
    </div>
   </Router>
  );
}

export default App;
