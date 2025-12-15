import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home.jsx'
import Map from './pages/map.jsx'
import Ducks from './pages/ducks.jsx'
import TempBirds from './pages/tempBirds.jsx'
import DataTest from './pages/dataTest.jsx'
import Resources from './pages/resources.jsx'
import { initMap, switchView, switchLayer, cleanupMap } from './pages/mapLogic.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {

  return (
    <>


    <Router>
 

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet"/>



    <header className="glass">
            <div className="brand">
              <i className="fas fa-biohazard fa-lg" style={{ color: 'var(--danger)' }}></i>
              <div>
                <div className="brand-logo">HPAI<span style={{ color: '#fff' }}>_SURVEILLANCE</span></div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>GLOBAL ANALYTICS PLATFORM</div>
              </div>
              <div className="brand-meta">H5N1</div>
            </div>
            <div className="nav-tabs">
              <Link to="/">
              <button className="nav-btn active" onClick={() => switchView('home')} id="btn-home">
                <i className="fas fa-home"></i> HOME
              </button>
              </Link>
              <Link to="/ducks" id="btn-ducks">
              <button className = "nav-btn" onClick={() => switchView('ducks')} id = "btn-ducks">
                <i className="fas fa-dove"></i>
                DUCKS
              </button>
              </Link>
              <Link to="/map">
              <button className="nav-btn " onClick={() => switchView('map')} id="btn-map">
                <i className="fas fa-globe-americas"></i> MAP
              </button>
              </Link>
              <Link to="/map">
              <button className="nav-btn" onClick={() => switchView('analytics')} id="btn-analytics">
                <i className="fas fa-chart-pie"></i> ANALYTICS
              </button>
              </Link>
              <Link to="/resources">
              <button className="nav-btn" onClick={() => switchView('resources')} id="btn-resources">
                <i className="fas fa-book"></i> RESOURCES
              </button>
              </Link>
              
            </div>

          </header>

    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/ducks" element={<Ducks />} />
      <Route path="/tempBirds" element={<TempBirds />} />
      <Route path="/dataTest" element={<DataTest />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
