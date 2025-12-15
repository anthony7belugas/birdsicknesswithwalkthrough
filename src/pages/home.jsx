import React from 'react';
import './home.css';

export default function Home() {
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
          <a className="btn" href="/map">Start Exploring →</a>
        </main>
      </div>
    </>
  );
}