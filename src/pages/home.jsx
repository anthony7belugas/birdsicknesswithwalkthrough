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
    <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#4fd1c5" }}>
      Understanding Bird Flu Patterns Across the U.S.
    </h2>

    <p style={{ lineHeight: "1.6", marginBottom: "1.5rem" }}>
      Since 2003, the CDC has reported more than 950 cases of H5N1 (bird flu)
      globally, with nearly 49% resulting in mortality. To help you stay safe
      during your travels—or keep your flock and livestock protected—we’ve
      compiled data showing where and when bird flu has been reported, alongside
      temperature trends that reveal a higher likelihood of outbreaks during
      colder months.
    </p>

    <Link className="btn" to="/map">
      Start Exploring →
    </Link>

    {/* Three-Column Insights */}
    <section style={{ marginTop: "3rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "0.5rem", color: "#4fd1c5" }}>
            Winter Drives Bird Flu Surges
          </h3>
          <p style={{ lineHeight: "1.6" }}>
            Bird flu cases peak during winter months as temperatures drop. This
            inverse relationship between temperature and case counts appears
            consistently across states, highlighting cold weather as a key
            driver of transmission.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: "0.5rem", color: "#4fd1c5" }}>
            Wetland Species Face the Greatest Risk
          </h3>
          <p style={{ lineHeight: "1.6" }}>
            Wetland birds, particularly Mallards and Canada Geese, are
            disproportionately affected. Their migratory behavior, habitat, and
            tendency to gather in large groups increase exposure to the virus.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: "0.5rem", color: "#4fd1c5" }}>
            Hotspots Reveal Regional Risk
          </h3>
          <p style={{ lineHeight: "1.6" }}>
            Bird flu cases cluster in specific regions rather than occurring
            evenly nationwide. States like Minnesota and California consistently
            report higher case counts, emphasizing the role of regional ecology
            and migration routes.
          </p>
        </div>
      </div>
    </section>
  </main>
</div>
    </>
  );
}