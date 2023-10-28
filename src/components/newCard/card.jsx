import React from 'react';
import { useState } from 'react';
import './Card.css'

function Card() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className={`box ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
       <button onClick={toggleMode}>Toggle Mode</button>
        <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
              <div >
                   <h1 className='title1'> We Are Live Now </h1>
                     <p className='para'>Our new feature is now Live and ready for you to explore.<br/> Go ahead and give it a try</p>
              </div>
               
                       <button className={`btn ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Get Started</button>
        
      </div>
    </div>
  );
}

export default Card;
