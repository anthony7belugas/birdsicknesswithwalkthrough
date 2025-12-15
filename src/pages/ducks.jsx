import React, { useState, useEffect } from 'react';
export default function Ducks() {
    const [heroImage, setHeroImage] = useState("https://ljwright.webdev.iyaserver.com/acad274/Group%20Project/birds");
    const [showResourcesHint, setShowResourcesHint] = useState(false);

useEffect(() => {
    // Check if user has seen this hint before
    const hasSeenResourcesHint = localStorage.getItem('hasSeenResourcesHint');
    if (!hasSeenResourcesHint) {
        setTimeout(() => {
            setShowResourcesHint(true);
        }, 1000);
    }
}, []);

const closeResourcesHint = () => {
    setShowResourcesHint(false);
    localStorage.setItem('hasSeenResourcesHint', 'true');
};
    const switchHeroImage = (mode) => {
        const visualImage = "https://ljwright.webdev.iyaserver.com/acad274/Group%20Project/birds";
        const chartImage = "https://ljwright.webdev.iyaserver.com/acad274/Group%20Project/chart.jpg";
        setHeroImage(mode === "visual" ? visualImage : chartImage);
    };

return (
    <>
        {showResourcesHint && (
            <div className="resources-hint-popup">
                <button className="resources-hint-close" onClick={closeResourcesHint}>✕</button>
                <p>
                    🦆 <strong>Note:</strong> Mallard ducks have the highest prevalence of being 
                    infected by avian flu. For more information, click on <strong>RESOURCES</strong> tab at the top.
                </p>
            </div>
        )}
        
            <style>
                {`
                    :root{
                        --bg-deep: #0f1113;
                        --panel: #141618;
                        --muted: #1a1d21;
                        --text: #e6eef2;
                        --muted-text: #a5a7aa;
                        --accent-cyan: #5ff6f1;
                        --accent-yellow: #f4b73b;
                        --card-shadow: rgba(0,0,0,0.6);
                    }

                    *{box-sizing:border-box}
                    html,body{
                        height:100%;margin:0;
                        font-family:Inter, "Segoe UI", Roboto, Arial, sans-serif;
                        background:var(--bg-deep);
                        color:var(--text);
                        -webkit-font-smoothing:antialiased;
                        overflow-y: auto; /* Ensure scrolling is enabled */
                    }

                    .wrap{
                        display:flex;
                        gap:28px;
                        max-width:1400px;
                        margin:28px auto;
                        padding:0 18px;
                        align-items:flex-start;
                    }

                    .sidebar{
                        width:320px;
                        background:linear-gradient(180deg,var(--muted), #121316);
                        border-radius:10px;
                        padding:22px;
                        box-shadow: 0 6px 20px var(--card-shadow);
                        border:1px solid rgba(255,255,255,0.03);
                        display:flex;
                        flex-direction:column;
                        gap:18px;
                        min-height:1300px;
                    }
                    .status-title{ font-size:12px; text-transform:uppercase; color:var(--muted-text); margin:6px 0; }
                    .metric { background:#0f1114; border-radius:10px; padding:16px; border-left:4px solid rgba(255,255,255,0.02); box-shadow:0 4px 12px rgba(0,0,0,0.6); }
                    .metric .big{ font-size:28px; font-weight:800; color:var(--text); }
                    .sidebar .spacer { flex:1; }
                    .sys{ font-size:12px; color:var(--muted-text); border-top:1px solid rgba(255,255,255,0.02); padding-top:12px; }

                    .main{ flex:1; min-width:600px; display:flex; flex-direction:column; gap:20px; }

                    .header-card{
                        background: linear-gradient(180deg,#0f1317,#101214);
                        padding:20px; border-radius:10px;
                        display:flex; align-items:center; justify-content:space-between;
                        border:1px solid rgba(255,255,255,0.03); box-shadow:0 6px 20px rgba(0,0,0,0.6);
                    }

                    .card{
                        background: linear-gradient(180deg,var(--panel), #0e1012 );
                        border-radius:10px; padding:18px; border:1px solid rgba(255,255,255,0.03);
                        box-shadow: 0 6px 24px rgba(0,0,0,0.6);
                    }

                    .section-title{ font-weight:700; font-size:16px; margin-bottom:12px; }

                    .map-hero{ position:relative; height:520px; border-radius:8px; overflow:hidden; background:#0b0c0d; display:flex; align-items:center; justify-content:center; }
                    .map-hero img{ width:100%; height:100%; object-fit:cover; display:block; opacity:1; transition:opacity .35s ease; }

                    .layers{
                        position:absolute; right:22px; top:22px;
                        background:rgba(18,20,22,0.75); border-radius:8px; padding:12px; min-width:160px;
                        border:1px solid rgba(255,255,255,0.04);
                    }
                    .layers h4{ margin:0 0 6px 0; font-size:12px; color:var(--muted-text); }
                    .layers label{ display:block; color:var(--muted-text); font-size:13px; margin:6px 0; cursor:pointer; }
                    .layers input{ margin-right:8px; accent-color: var(--accent-cyan); }

                    .data-table{ width:100%; border-collapse:collapse; font-size:14px; overflow:hidden; border-radius:6px; }
                    .data-table thead th{ padding:12px 14px; background: linear-gradient(180deg,#0c1113,#0a0d0f); text-transform:uppercase; letter-spacing:0.06em; border-bottom:1px solid rgba(255,255,255,0.03); color:var(--text); }
                    .data-table tbody td{ padding:12px 14px; color:var(--muted-text); border-bottom:1px solid rgba(255,255,255,0.02); }
                    .data-table tbody tr:hover td{ background: linear-gradient(90deg, rgba(95,246,241,0.03), transparent); color:var(--text); }
                    .species-name{ color:var(--accent-cyan); font-weight:700; cursor:pointer; }
                    .highlight{ background: linear-gradient(90deg, rgba(95,246,241,0.08), rgba(95,246,241,0.02)) !important; color:var(--text) !important; }

                    .analysis-box{ background: linear-gradient(180deg,#0f1213,#0c0d0e); border-left:4px solid var(--accent-yellow); padding:16px; border-radius:8px; color:var(--muted-text); }
                    footer{ color:var(--muted-text); text-align:center; padding:12px 0; font-size:13px; }

                    @media (max-width:1100px){ .wrap{ padding:0 12px; gap:18px; } .sidebar{ width:280px; } .map-hero{ height:420px; } }
                  @media (max-width:860px){ .wrap{ flex-direction:column; align-items:stretch; max-width:940px; margin:18px auto; } .sidebar{ width:100%; order:2; min-height:initial } .main{ order:1 } .map-hero{ height:320px } }

                    /* Resources Hint Popup */
                    .resources-hint-popup {
                        position: fixed;
                        bottom: 30px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: rgba(11, 12, 16, 0.95);
                        border: 1px solid #FF9500;
                        border-radius: 8px;
                        padding: 16px 50px 16px 24px;
                        max-width: 550px;
                        z-index: 9999;
                        box-shadow: 0 4px 20px rgba(255, 149, 0, 0.2);
                        color: #e6edf3;
                        font-size: 0.9rem;
                        line-height: 1.6;
                    }

                    .resources-hint-popup p {
                        margin: 0;
                    }

                    .resources-hint-popup strong {
                        color: #FFB038;
                    }

                    .resources-hint-close {
                        position: absolute;
                        top: 8px;
                        right: 12px;
                        background: none;
                        border: none;
                        color: #8b949e;
                        cursor: pointer;
                        font-size: 1.2rem;
                        padding: 0;
                    }

                    .resources-hint-close:hover {
                        color: #FF9500;
                    }
                `}
            </style>

            <div className="wrap">
                <aside className="sidebar">
                    <div className="status-title">Situation Report</div>

                    <div className="metric">
                        <div style={{ fontSize: '12px', color: 'var(--muted-text)' }}>Total Detections</div>
                        <div className="big">15530</div>
                        <small>Confirmed Cases</small>
                    </div>

                    <div className="metric">
                        <div style={{ fontSize: '12px', color: 'var(--muted-text)' }}>Unique Species</div>
                        <div className="big">237</div>
                        <small>Affected Taxa</small>
                    </div>

                    <div className="metric">
                        <div style={{ fontSize: '12px', color: 'var(--muted-text)' }}>States</div>
                        <div className="big">50</div>
                        <small>Geographic Spread</small>
                    </div>

                    <div className="spacer"></div>

                    <div className="sys">
                        <strong style={{ color: 'var(--accent-cyan)' }}>Mode:</strong> Sample Data<br />
                        15530 records mapped
                    </div>
                </aside>

                <main className="main">
                    <div className="header-card">
                        <div className="header-left">
                            <h1>Wild Bird Surveillance: Fighting Bird Flu</h1>
                            <p>The visualization below highlights the top species and the number of reported cases, while the table provides additional details.
                                Click any bird’s name in the table to reveal a fun fact about that species.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="section-title">Common Birds Infected with Bird Flu A Strains</div>

                        <div className="map-hero">
                            <img id="heroImage" src={heroImage} alt="visual" />

                            <div className="layers" aria-label="Image layer controls">
                                <h4>LAYERS</h4>
                                <label>
                                    <input
                                        type="radio"
                                        name="maplayer"
                                        id="mapVisualBtn"
                                        defaultChecked
                                        onChange={() => switchHeroImage("visual")}
                                    />
                                    Visual
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="maplayer"
                                        id="mapChartBtn"
                                        onChange={() => switchHeroImage("chart")}
                                    />
                                    Chart
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="section-title">Bird Observation Data</div>

                        <table className="data-table">
                            <thead>
                                <tr><th>Species</th><th>Observations</th><th>Category</th></tr>
                            </thead>
                            <tbody>
                                <tr><td className="species-name">Mallard</td><td>2835</td><td>Wild</td></tr>
                                <tr><td className="species-name">Canada Goose</td><td>1297</td><td>Wild</td></tr>
                                <tr><td className="species-name">Green-winged Teal</td><td>1244</td><td>Wild</td></tr>
                                <tr><td className="species-name">Snow Goose</td><td>912</td><td>Wild</td></tr>
                                <tr><td className="species-name">Blue-winged Teal</td><td>877</td><td>Wild</td></tr>
                                <tr><td className="species-name">Bald Eagle</td><td>803</td><td>Wild</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="analysis-box">
                        <b>Key Findings</b>
                        <ul style={{ margin: '8px 0 0 18px', color: 'var(--muted-text)' }}>
                            <li><strong style={{ color: 'var(--text)' }}>Species Dominance:</strong> Mallards dominate observations (2,835).</li>
                            <li><strong style={{ color: 'var(--text)' }}>Distribution:</strong> Top-heavy distribution; several species drive counts.</li>
                            <li><strong style={{ color: 'var(--text)' }}>Ecological:</strong> Focus management on high-prevalence taxa.</li>
                        </ul>
                    </div>

                    <footer>Bird Observation Dataset — Interactive Analysis</footer>
                </main>
            </div>
        </>
    );
}
