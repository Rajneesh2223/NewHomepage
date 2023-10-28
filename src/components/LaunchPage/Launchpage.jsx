import React, { useState, useEffect } from 'react';
import './launchpage.css';
import {BiCheck} from 'react-icons/bi'
import { useNavigate  } from 'react-router-dom';

function Launchpage() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(3);
  const [email, setEmail] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate=useNavigate();
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  

  
  const updateTimer = () => {
    if (minutes === 0 && seconds === 0) {
      navigate('/Card');
      return;
    }
    if (seconds === 0) {
      
      setMinutes((prevMinutes) => prevMinutes - 1);
      setSeconds(59);
      
    } else {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }
  };
  
  
  const handleEmailSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsEmailSubmitted(true);
      setIsLoading(false);
      setEmail('');
      setIsButtonActive(true);
      setTimeout(() => {
        setIsEmailSubmitted(false);
        setIsButtonActive(false); 
       navigate('/Card')
      }, 2000); 
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(updateTimer, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonActive(validateEmail(e.target.value));
  };

  const validateEmail = (email) => {
    return email.includes('@gmail.com');
  };
  

  return (
    <div className='back' >
     

     
     <div className={`box ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

      <div className= {`blob1 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}></div>
      <div className={`blob2 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}></div>
      <h1 className= {`upper-heading ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>The <span className= {`upper ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Product </span>Platform</h1>
      <button onClick={toggleMode} className='toggle'>Toggle Mode</button>
      <h1 className={`title-heading ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <span className='rocket'>
          <svg xmlns="http://www.w3.org/2000/svg" width="74" height="80" viewBox="0 0 74 80" fill="none">
<path d="M36.7846 39.7129C39.6529 41.3689 43.7707 39.6125 45.9807 35.7846C48.1907 31.9568 47.6529 27.5124 44.7846 25.8564C41.9163 24.2004 37.7984 25.9568 35.5884 29.7846C33.3784 33.6125 33.9163 38.0569 36.7846 39.7129Z" fill="url(#paint0_linear_13_6810)"/>
<path d="M48.8582 50.4247C54.9587 38.2984 56.519 29.4119 56.3405 23.249C56.2318 19.6852 55.5435 17.0615 54.8453 15.2867C54.5752 14.5893 54.2495 13.9148 53.8715 13.2695C53.762 13.0827 53.6456 12.8999 53.5226 12.7217C53.3378 12.4256 53.0848 12.1781 52.7846 12C52.4583 11.8176 52.0909 11.7216 51.7172 11.7209C51.5 11.7109 51.2826 11.7086 51.0653 11.714C50.3106 11.7311 49.5583 11.8064 48.8152 11.9392C46.9175 12.2661 44.2855 13.0328 41.1373 14.7578C35.7047 17.7273 28.8084 23.4961 21.4799 34.6133L12.6422 37.9447L12.6183 37.954C10.5028 38.7803 8.73154 40.3021 7.596 42.269L0.999996 53.6936C0.790113 54.0571 0.699931 54.4775 0.742223 54.8951C0.784516 55.3127 0.957141 55.7064 1.23564 56.0205C1.51414 56.3346 1.8844 56.5531 2.29398 56.645C2.70355 56.737 3.13167 56.6977 3.51769 56.5328L10.4148 53.5867C11.4338 53.1496 12.6697 53.041 14.1598 53.1161C15.1171 53.17 15.9779 53.279 16.8869 53.3927L17.7408 53.4977C19.3096 56.3804 21.8401 58.7974 24.7846 60.4974C27.7291 62.1974 31.0876 63.1804 34.3684 63.0977C34.5405 63.3356 34.7137 63.5557 34.8814 63.7772C35.4393 64.515 35.9641 65.206 36.4894 66.0081C37.2995 67.261 37.8234 68.3856 37.9544 69.4867L38.8515 76.9328C38.9017 77.3496 39.0818 77.7399 39.3662 78.0487C39.6506 78.3574 40.025 78.5688 40.4362 78.653C40.8474 78.7371 41.2747 78.6898 41.6576 78.5176C42.0404 78.3454 42.3593 78.0571 42.5692 77.6936L49.1652 66.269C50.3008 64.3021 50.7331 62.0073 50.3909 59.762L48.8582 50.4247ZM45.751 56.1825L45.641 56.3731C43.909 59.373 41.4872 61.2957 38.7629 62.2862C39.1407 62.7999 39.5145 63.3206 39.8372 63.8256C40.7942 65.288 41.6885 67.0191 41.9277 69.0047L42.1051 70.4974L45.7011 64.269C46.3806 63.0922 46.6405 61.7197 46.4384 60.376L45.751 56.1825ZM16.2463 49.2862C15.742 46.4317 16.1962 43.373 17.9282 40.3731L18.0362 40.186L14.0649 41.6806C12.7988 42.1778 11.7393 43.0905 11.0601 44.269L7.4641 50.4974L8.84352 49.9082C10.6828 49.1226 12.631 49.028 14.376 49.1256C14.9728 49.156 15.6125 49.2159 16.2463 49.2862ZM50.6698 15.735C50.808 15.9995 50.9668 16.3406 51.1267 16.7516C51.6585 18.1025 52.2507 20.2688 52.3425 23.3657C52.5154 29.5623 50.7029 39.6056 42.1769 54.3731C40.4609 57.3453 37.9213 58.7519 35.1243 59.0446C32.4677 59.326 29.4901 58.5953 26.7846 57.0333C24.0791 55.4713 21.9576 53.258 20.873 50.8166C19.7264 48.2425 19.6763 45.3453 21.3923 42.3731C29.7563 27.8862 37.5434 21.2785 43.0576 18.2637C45.8144 16.7607 48.0275 16.1355 49.4943 15.8831C49.958 15.7998 50.3512 15.7589 50.6698 15.735Z" fill="url(#paint1_linear_13_6810)"/>
<path d="M29.1861 64.706C27.3373 64.0682 25.5132 63.2275 23.7846 62.2295C22.0526 61.2295 20.416 60.0722 18.9392 58.79L19.799 65.9329C19.8361 66.2411 19.9445 66.5365 20.1156 66.7956C20.2867 67.0547 20.5158 67.2705 20.7846 67.4257C21.0535 67.5809 21.3549 67.6715 21.6648 67.6901C21.9747 67.7087 22.2848 67.6548 22.5703 67.5329L29.1861 64.706Z" fill="#FF00B8"/>
<defs>
<linearGradient id="paint0_linear_13_6810" x1="44.7846" y1="25.8564" x2="36.7846" y2="39.7129" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FF00B8"/>
</linearGradient>
<linearGradient id="paint1_linear_13_6810" x1="52.7846" y1="12" x2="20.7846" y2="67.4256" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FF00B8"/>
</linearGradient>
</defs>
</svg>
          </span>
          Launching New Module Soon
        </h1>
        <p className='heading'>
          Exciting things are in the works! We're currently crafting a new feature for you.<br/> Keep an eye out for updates – We're working to make it available soon!
        </p>
        <h3 className={`new-heading ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>Get Ready for the New Reveal</h3>
        <div className={`clock ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <div className={`black ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
            <div>
            <h1>{minutes} 
                      </h1>
            </div>
            <h2>:</h2>
            <h1>{seconds}</h1>
          </div>
        </div>

        <div className='notify'>
          
            <p>Be the first to know! Share your email, and we'll notify you when it's live</p>
          
          <div>
            <input
              type="email"
              placeholder='Enter your email id'
              className={`custom-input ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
              value={email}
              onChange={handleEmailChange}
            />
          
            {isEmailSubmitted ? (
             <button className={`custom-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                  <BiCheck/>
             </button>
              
            
            ) : (
              <button
              className={`custom-button ${isButtonActive ? '' : 'inactive'} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}

                onClick={handleEmailSubmit}
              > {isLoading ? 'Loading...' : 'Notify Me'}
              
              </button>
            )}
            </div>  
          

          
        </div>
      </div>
    </div>
  );
}

export default Launchpage;
