import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    
    if (!hasSeenWelcome) {
      setTimeout(() => {
        setShowWelcome(true);
      }, 300);
    }
  }, []);

    const closeWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };




  const birdArt = 
  `⣰⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⡾
⠀⠀⣿⡍⠛⠲⣶⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡴⠞⠉⣠⡞⠀⠀
⠀⠀⠘⣽⢷⣦⣌⣈⠋⡚⠿⣦⡀⠀⠀⣀⣤⠀⠀⠀⣠⡶⠚⠛⣙⣭⠠⣤⣶⣯⠆⠀⠀⠀
⠀⠀⠀⣼⣷⣀⠀⠀⠈⠀⠀⠀⢻⡇⠺⡿⠛⣿⠀⠀⢿⠀⠀⣼⠿⣫⣭⣠⣤⡶⠂⠀⠀⠀
⠀⠀⠀⠀⠉⠛⠿⣹⣾⠔⠃⠀⠈⠳⠾⠏⠀⠻⣶⡺⠋⠀⣤⣸⣷⣶⡾⠖⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠒⠷⣿⡻⣞⣀⣄⣀⣀⡄⠀⠀⣠⣄⣸⡿⣾⣿⡽⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠟⠯⣽⢿⡿⠃⠀⢀⣿⡙⠑⠙⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣯⣦⣾⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣼⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⣿⢩⡿⠘⠀⠀`;

  return (
    <>
      {showWelcome && (
        <div className="welcome-overlay" onClick={closeWelcome}>
          <div className="welcome-popup" onClick={(e) => e.stopPropagation()}>
            <h2>Welcome!</h2>
            <p>
              Welcome to your comprehensive bird flu website. 
              Please click the <strong>"Start Exploring"</strong> button to dive in.
            </p>
            <button onClick={closeWelcome}>Got it!</button>
          </div>
        </div>
      )}



      {/* ASCII Birds */}
      <div id="bird1" className="bird">{birdArt}</div>
      <div id="bird2" className="bird">{birdArt}</div>
      <div id="bird3" className="bird">{birdArt}</div>
      <div id="bird4" className="bird">{birdArt}</div>
      <div id="bird5" className="bird">{birdArt}</div>
      <div id="bird6" className="bird">{birdArt}</div>
      <div id="bird7" className="bird">{birdArt}</div>
      <div id="bird8" className="bird">{birdArt}</div>

      {/* Header */}


      {/* Main Content */}
      <div className="container">
        <main>
          <h2>Bird Flu is deadly</h2>
          <p>
            Since 2003, the CDC has reported more than 950 cases of H5N1 
            (bird flu) globally and 49% of cases ended in mortality. 
            To help you stay safe during your travels or keep your flock and 
            livestock safe, we have compiled data on where and when bird flu has
            been reported along with temperature data that indicates that the 
            larger the difference between the coldest average temperature in a month
             and the hottest average tempetature in a month per state the higher 
             likelihood of bird flu in that state.
          </p>
          <Link className="btn" to="/map">Start Exploring →</Link>
        </main>
      </div>
    </>
  );
}