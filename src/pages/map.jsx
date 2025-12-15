import React, { useEffect, useRef, useState } from 'react';
import './map.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { initMap, switchView, switchLayer, fetchDataFromAPI, cleanupMap, updateWeatherChart } from './mapLogic.js';

function Map() {
  const mapContainerRef = useRef(null);
  const [totalDetections, setTotalDetections] = useState(0);
  const [uniqueSpecies, setUniqueSpecies] = useState(0);
  const [statesRegions, setStatesRegions] = useState(0);
  const [recordCount, setRecordCount] = useState('Loading...');
  const [statusMode, setStatusMode] = useState('Sample Data');
  const [selectedState, setSelectedState] = useState('Alabama');

  useEffect(() => {
    initMap(mapContainerRef);
    fetchDataFromAPI(setTotalDetections, setUniqueSpecies, setStatesRegions, setRecordCount, setStatusMode); // Pass setters
    updateWeatherChart(selectedState); // Initialize weather chart with default state

    return () => {
      cleanupMap(); // Cleanup map on component unmount
    };
  }, []);

  useEffect(() => {
    updateWeatherChart(selectedState); // Update chart when state changes
  }, [selectedState]);

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet"/>

      <div className="main-container">
        <div className="sidebar">
          <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', letterSpacing: '1px', marginTop: '10px' }}>SITUATION REPORT</div>

          <div className="kpi-card danger">
            <div className="kpi-label">Total Detections</div>
            <div className="kpi-val" id="kpi-total">{totalDetections}</div>
            <div className="kpi-sub">Confirmed Cases</div>
          </div>

          <div className="kpi-card warning">
            <div className="kpi-label">Unique Species</div>
            <div className="kpi-val" id="kpi-species">{uniqueSpecies}</div>
            <div className="kpi-sub">Affected Taxa</div>
          </div>

          <div className="kpi-card">
            <div className="kpi-label">States / Regions</div>
            <div className="kpi-val" id="kpi-states">{statesRegions}</div>
            <div className="kpi-sub">Geographic Spread</div>
          </div>

          <div style={{ marginTop: 'auto', padding: '15px', borderTop: '1px solid var(--border)', fontSize: '0.7rem', color: '#666' }}>
            <i className="fas fa-info-circle"></i> <strong>SYSTEM STATUS</strong><br/>
            Mode: <span id="status-mode" style={{ color: 'var(--cyan)' }}>{statusMode}</span><br/>
            <span id="record-count">{recordCount}</span>
          </div>
        </div>

        <div className="content-area">
          <div id="view-map" className="view-section active">
            <div id="map-wrapper">
              <div id="mainMap" ref={mapContainerRef}></div>
              <div className="map-overlay-controls glass">
                <div style={{ fontSize: '0.7rem', fontWeight: '700', marginBottom: '10px', color: 'black' }}>LAYERS</div>
                <label className="toggle-row">
                  <input type="radio" name="maplayer" value="clusters" defaultChecked onClick={() => switchLayer('clusters')} /> 
                  Cluster Markers
                </label>
                <label className="toggle-row">
                  <input type="radio" name="maplayer" value="heat" onClick={() => switchLayer('heat')} /> 
                  Heatmap Density
                </label>
              </div>
            </div>
          </div>

          <div id="view-analytics" className="view-section">
            <div className="analytics-grid">
              <div className="chart-card col-12">
                <div className="chart-header">
                  <div className="chart-title">
                    <i className="fas fa-wave-square"></i> Weather Trends
                    <select
                      style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px' }}
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                    >
                      {['Alabama', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'].map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="chart-container"><canvas id="weatherChart"></canvas></div>
              </div>

              <div className="chart-card col-6">
                <div className="chart-header">
                  <div className="chart-title"><i className="fas fa-map-marker-alt"></i> Geographic Hotspots</div>
                </div>
                <div className="chart-container"><canvas id="stateChart"></canvas></div>
              </div>

              <div className="chart-card col-6">
                <div className="chart-header">
                  <div className="chart-title"><i className="fas fa-crow"></i> Species Susceptibility</div>
                </div>
                <div className="chart-container"><canvas id="speciesChart"></canvas></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;