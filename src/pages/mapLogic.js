import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.heat';
import Chart from 'chart.js/auto';
import { use, useEffect } from 'react';

// Central coordinates for states/regions (Expanded List)
const LOCATIONS = {
    'AL': [32.8, -86.8], 'AK': [61.3, -152.4], 'AZ': [33.7, -111.4], 'AR': [34.9, -92.3],
    'CA': [36.1, -119.6], 'CO': [39.0, -105.3], 'CT': [41.6, -72.7], 'DE': [39.3, -75.5],
    'FL': [27.7, -81.6], 'GA': [33.0, -83.6], 'HI': [21.0, -157.5], 'ID': [44.2, -114.4],
    'IL': [40.3, -88.9], 'IN': [39.8, -86.2], 'IA': [42.0, -93.2], 'KS': [38.5, -96.7],
    'KY': [37.6, -84.6], 'LA': [31.1, -91.8], 'ME': [44.6, -69.3], 'MD': [39.0, -76.8],
    'MA': [42.2, -71.5], 'MI': [43.3, -84.5], 'MN': [45.6, -93.9], 'MS': [32.7, -89.6],
    'MO': [38.4, -92.2], 'MT': [46.9, -110.4], 'NE': [41.1, -98.2], 'NV': [38.3, -117.0],
    'NH': [43.4, -71.5], 'NJ': [40.2, -74.5], 'NM': [34.8, -106.2], 'NY': [42.1, -74.9],
    'NC': [35.6, -79.8], 'ND': [47.5, -99.7], 'OH': [40.3, -82.7], 'OK': [35.5, -96.9],
    'OR': [44.5, -122.0], 'PA': [40.5, -77.2], 'RI': [41.6, -71.5], 'SC': [33.8, -80.9],
    'SD': [44.2, -99.4], 'TN': [35.7, -86.6], 'TX': [31.0, -97.5], 'UT': [40.1, -111.8],
    'VT': [44.0, -72.7], 'VA': [37.7, -78.1], 'WA': [47.4, -121.4], 'WV': [38.4, -80.9],
    'WI': [44.2, -89.6], 'WY': [42.7, -107.3],
    // Full names support
    'Alabama': [32.8, -86.8], 'Alaska': [61.3, -152.4], 'Arizona': [33.7, -111.4], 'Arkansas': [34.9, -92.3],
    'California': [36.1, -119.6], 'Colorado': [39.0, -105.3], 'Connecticut': [41.6, -72.7], 'Delaware': [39.3, -75.5],
    'Florida': [27.7, -81.6], 'Georgia': [33.0, -83.6], 'Hawaii': [21.0, -157.5], 'Idaho': [44.2, -114.4],
    'Illinois': [40.3, -88.9], 'Indiana': [39.8, -86.2], 'Iowa': [42.0, -93.2], 'Kansas': [38.5, -96.7],
    'Kentucky': [37.6, -84.6], 'Louisiana': [31.1, -91.8], 'Maine': [44.6, -69.3], 'Maryland': [39.0, -76.8],
    'Massachusetts': [42.2, -71.5], 'Michigan': [43.3, -84.5], 'Minnesota': [45.6, -93.9], 'Mississippi': [32.7, -89.6],
    'Missouri': [38.4, -92.2], 'Montana': [46.9, -110.4], 'Nebraska': [41.1, -98.2], 'Nevada': [38.3, -117.0],
    'New Hampshire': [43.4, -71.5], 'New Jersey': [40.2, -74.5], 'New Mexico': [34.8, -106.2], 'New York': [42.1, -74.9],
    'North Carolina': [35.6, -79.8], 'North Dakota': [47.5, -99.7], 'Ohio': [40.3, -82.7], 'Oklahoma': [35.5, -96.9],
    'Oregon': [44.5, -122.0], 'Pennsylvania': [40.5, -77.2], 'Rhode Island': [41.6, -71.5], 'South Carolina': [33.8, -80.9],
    'South Dakota': [44.2, -99.4], 'Tennessee': [35.7, -86.6], 'Texas': [31.0, -97.5], 'Utah': [40.1, -111.8],
    'Vermont': [44.0, -72.7], 'Virginia': [37.7, -78.1], 'Washington': [47.4, -121.4], 'West Virginia': [38.4, -80.9],
    'Wisconsin': [44.2, -89.6], 'Wyoming': [42.7, -107.3]
};

let globalData = [];
let charts = {};
let heatLayer = null;
let map = null;
let markersLayer = null;

export function initMap(mapRef) {
    Chart.defaults.color = '#8b949e';
    Chart.defaults.borderColor = 'rgba(255,255,255,0.05)';
    Chart.defaults.font.family = "'Inter', sans-serif";

    if (mapRef.current) {
        map = L.map(mapRef.current, {
            center: [39.8283, -98.5795],
            zoom: 4,
            attributionControl: false,
            zoomControl: false
        });
        L.control.zoom({ position: 'bottomright' }).addTo(map);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(map);

        markersLayer = L.markerClusterGroup({
            showCoverageOnHover: false,
            maxClusterRadius: 40,
            iconCreateFunction: function(cluster) {
                const c = cluster.getChildCount();
                let size = c < 10 ? 30 : (c < 50 ? 40 : 50);
                return L.divIcon({ 
                    html: `<div style="background:rgba(102, 252, 241, 0.9); color:#000; border-radius:50%; width:${size}px; height:${size}px; display:flex; align-items:center; justify-content:center; font-weight:800; border:2px solid #fff; box-shadow: 0 0 15px rgba(102,252,241,0.4); font-family:'JetBrains Mono';">${c}</div>`, 
                    className: 'marker-cluster', iconSize: L.point(size, size) 
                });
            }
        });
        if (map) map.addLayer(markersLayer);

    
    }
}



function generateSampleData() {
    const samples = [];
    const speciesList = ['Mallard', 'Canada Goose', 'Bald Eagle', 'Black Vulture', 'Red-tailed Hawk', 'Snow Goose', 'Gadwall'];
    const stateKeys = Object.keys(LOCATIONS);
    
    for(let i=0; i<450; i++) {
        const date = new Date(2023, 0, 1);
        date.setDate(date.getDate() + Math.floor(Math.random() * 700));
        
        samples.push({
            'State': stateKeys[Math.floor(Math.random() * stateKeys.length)],
            'Common Name': speciesList[Math.floor(Math.random() * speciesList.length)],
            'Date Detected': date.toISOString().split('T')[0],
            'County': 'Sample County'
        });
    }
    processData(samples);
}

export function cleanupMap() {
    if (map) {
        map.remove();
        map = null;
        markersLayer = null;
        heatLayer = null;
    }
}

export function switchView(view) {
    // Remove 'active' class from all view sections
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    // Add 'active' class to the selected view section
    const selectedView = document.getElementById('view-' + view);
    if (selectedView) {
        selectedView.classList.add('active');
    }

    // Remove 'active' class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    // Add 'active' class to the selected nav button
    const selectedButton = document.getElementById('btn-' + view);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }

    // Handle specific view logic
    if (view === 'map') {
        setTimeout(() => map?.invalidateSize(), 100);
    }
};

export function switchLayer(type) {
    if (type === 'clusters') {
        if (heatLayer) map.removeLayer(heatLayer);
        if (map) map.addLayer(markersLayer);
    } else {
        if (map) map.removeLayer(markersLayer);
        if (map) map.addLayer(heatLayer);
    }
};

export async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://mlrocha.webdev.iyaserver.com/acad274/php_files/tester.php');
        const data = await response.json();
       
      
        processData(data);
    } catch (error) {
        if (map){
        console.error("Error fetching data from API:", error);
     
        }
    }
}







function getField(row, possibilities) {
    const keys = Object.keys(row);
    for (let p of possibilities) {
        const match = keys.find(k => k.toLowerCase().includes(p.toLowerCase()));
        if (match) return row[match];
    }
    return null;
}


function updateCharts(data) {
        // Prepare Data
        const dates = {};
        const stateCounts = {};
        const specCounts = {};

        data.forEach(row => {
            const d = getField(row, ['date', 'collection']);
            if (d) {
                try {
                    const dateObj = new Date(d);
                    if(!isNaN(dateObj)) {
                        const k = dateObj.toISOString().slice(0, 7); // YYYY-MM
                        dates[k] = (dates[k] || 0) + 1;
                    }
                } catch(e) {}
            }

            const s = getField(row, ['state']);
            if(s) stateCounts[s] = (stateCounts[s] || 0) + 1;

            const sp = getField(row, ['common name', 'species']);
            if(sp) specCounts[sp] = (specCounts[sp] || 0) + 1;
        });

        // Destroy old charts
        if (charts.temporal) charts.temporal.destroy();
        if (charts.state) charts.state.destroy();
        if (charts.species) charts.species.destroy();

        // 1. Temporal Line Chart
        const sortedDates = Object.keys(dates).sort();
        charts.temporal = new Chart(document.getElementById('temporalChart'), {
            type: 'line',
            data: {
                labels: sortedDates,
                datasets: [{
                    label: 'Detections',
                    data: sortedDates.map(k => dates[k]),
                    borderColor: '#66fcf1',
                    backgroundColor: 'rgba(102, 252, 241, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { 
                    x: { grid: { display: false }, ticks: { color: '#888', font: {size: 10} } },
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#888' } }
                }
            }
        });
        
        // 2. State Bar Chart
        const topStates = Object.entries(stateCounts).sort((a,b) => b[1] - a[1]).slice(0, 10);
        charts.state = new Chart(document.getElementById('stateChart'), {
            type: 'bar',
            data: {
                labels: topStates.map(x => x[0]),
                datasets: [{
                    label: 'Cases',
                    data: topStates.map(x => x[1]),
                    backgroundColor: '#ff4d6d',
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { 
                    x: { grid: { color: 'rgba(255,255,255,0.05)' } },
                    y: { grid: { display: false }, ticks: { color: '#ccc' } }
                }
            }
        });
        
        // 3. Species Bar Chart
        const topSpecies = Object.entries(specCounts).sort((a,b) => b[1] - a[1]).slice(0, 10);
        charts.species = new Chart(document.getElementById('speciesChart'), {
            type: 'bar',
            data: {
                labels: topSpecies.map(x => x[0]),
                datasets: [{
                    label: 'Count',
                    data: topSpecies.map(x => x[1]),
                    backgroundColor: '#9d4edd',
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { 
                    x: { grid: { color: 'rgba(255,255,255,0.05)' } },
                    y: { grid: { display: false }, ticks: { color: '#ccc' } }
                }
            }
        });
    }




function processData(data) {
    globalData = data;
    
    //markersLayer.clearLayers();
    if (heatLayer) map.removeLayer(heatLayer);
    
    const heatPoints = [];
    let validPoints = 0;
    
    const states = new Set();
    const species = new Set();
    
    data.forEach(row => {
        const state = getField(row, ['state'])?.trim();
        const spec = getField(row, ['common name', 'species'])?.trim();
        const date = getField(row, ['date', 'collection'])?.trim();
        const county = getField(row, ['county'])?.trim();
        
        if (state && LOCATIONS[state]) {
            validPoints++;
            states.add(state);
            if(spec) species.add(spec);

            const center = LOCATIONS[state];
            const lat = center[0] + (Math.random() - 0.5) * 2;
            const lng = center[1] + (Math.random() - 0.5) * 3;
            
            const marker = L.marker([lat, lng], {
                icon: L.divIcon({
                    className: 'pin',
                    html: '<div style="width:8px; height:8px; background:#ff4d6d; border-radius:50%; border:1px solid white; box-shadow:0 0 4px #ff4d6d"></div>'
                })
            });
            
            marker.bindPopup(`
                <div class="bird-popup">
                    <h3>${spec || 'Unknown Species'}</h3>
                    <div class="popup-row"><span>State:</span> <b>${state}</b></div>
                    <div class="popup-row"><span>County:</span> <b>${county || 'N/A'}</b></div>
                    <div class="popup-row"><span>Date:</span> <b>${date || 'N/A'}</b></div>
                </div>
            `);
            
            if (map && markersLayer) markersLayer.addLayer(marker);
            heatPoints.push([lat, lng, 0.5]);
        }
    });

    heatLayer = L.heatLayer(heatPoints, { radius: 30, blur: 20, maxZoom: 8 });

    if (map){
             document.getElementById('kpi-total').innerText = validPoints.toLocaleString();
        document.getElementById('kpi-species').innerText = species.size.toLocaleString();
        document.getElementById('kpi-states').innerText = states.size;
        document.getElementById('record-count').innerText = `${validPoints} records mapped`;
    }


    updateCharts(data);
}

async function fetchWeatherData(state) {
    try {
        const protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';
        const apiUrl = `${protocol}//mlrocha.webdev.iyaserver.com/acad274/php_files/weather_data_API.php`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.filter(entry => entry.state === state);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return [];
    }
}

export async function updateWeatherChart(state) {
    const weatherData = await fetchWeatherData(state);

    const monthlyData = Array(12).fill(0);
    weatherData.forEach(entry => {
        const monthIndex = parseInt(entry.month, 10) - 1;
        monthlyData[monthIndex] = parseFloat(entry.average_temp);
    });

    if (charts.weather) charts.weather.destroy();

    charts.weather = new Chart(document.getElementById('weatherChart'), {
        type: 'line',
        data: {
            labels: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            datasets: [{
                label: `Average Monthly Temperature in ${state}`,
                data: monthlyData,
                borderColor: '#ff7f50',
                backgroundColor: 'rgba(255, 127, 80, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: true } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#888', font: { size: 10 } } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#888' } }
            }
        }
    });
}
