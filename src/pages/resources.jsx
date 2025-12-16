import React from 'react';
import './references.css';

export default function Resources() {
    const birdArt = `⣰⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⡾
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
            {/* Bird decorations */}
            <div id="bird1" className="bird">{birdArt}</div>
            <div id="bird2" className="bird">{birdArt}</div>
            <div id="bird3" className="bird">{birdArt}</div>
            <div id="bird4" className="bird">{birdArt}</div>
            <div id="bird5" className="bird">{birdArt}</div>
            <div id="bird6" className="bird">{birdArt}</div>
            <div id="bird7" className="bird">{birdArt}</div>
            <div id="bird8" className="bird">{birdArt}</div>

            <div className="resources-container">
                <h1 className="maintitle">Citations</h1>

                <ul className="sourceslist sources-tooltips">
                    <li>
                        USDA APHIS – Wild Bird HPAI Surveillance and Detection Data Dashboard<br />
                        <a 
                            href="https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza/wild-bird-surveillance-dashboard"
                            data-desc="Official USDA dashboard tracking HPAI detections in wild birds, with surveillance results and reported findings."
                        >
                            https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza/wild-bird-surveillance-dashboard
                        </a>
                    </li>

                    <li>
                        USDA APHIS – H5N1 Highly Pathogenic Avian Influenza (HPAI)<br />
                        <a 
                            href="https://www.aphis.usda.gov/h5n1-hpai"
                            data-desc="USDA overview page for H5N1/HPAI: situation updates, response actions, and key guidance resources."
                        >
                            https://www.aphis.usda.gov/h5n1-hpai
                        </a>
                    </li>

                    <li>
                        NOAA NCEI – Climate at a Glance Dashboard<br />
                        <a 
                            href="https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/20/tavg/1/0/2022-2025"
                            data-desc="NOAA climate time-series tool used to pull temperature/precipitation trends for environmental context."
                        >
                            https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/20/tavg/1/0/2022-2025
                        </a>
                    </li>

                    <li>
                        Prevalence of Avian Influenza Virus in Atypical Wild Bird Host Groups (PMC)<br />
                        <a 
                            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12016917/"
                            data-desc="Study on detection rates in less-studied wild bird host groups, highlighting surveillance blind spots and bias."
                        >
                            https://pmc.ncbi.nlm.nih.gov/articles/PMC12016917/
                        </a>
                    </li>

                    <li>
                        Sampling Strategies and Biodiversity of Influenza A Subtypes in Wild Birds (PMC)<br />
                        <a 
                            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3944928/"
                            data-desc="Methods-focused paper on field sampling strategies and subtype diversity—useful for interpreting dataset bias."
                        >
                            https://pmc.ncbi.nlm.nih.gov/articles/PMC3944928/
                        </a>
                    </li>

                    <li>
                        The Bird Flu: A New Emerging Pandemic Threat and Its Pharmacological Intervention (PMC)<br />
                        <a 
                            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3068632/"
                            data-desc="Background review on H5N1 pathogenicity, pandemic risk framing, and pharmacological intervention options."
                        >
                            https://pmc.ncbi.nlm.nih.gov/articles/PMC3068632/
                        </a>
                    </li>

                    <h1 className="maintitle">Resources</h1>

                    <li>
                        Wild Birds Affected by HPAI A (H5N1) Worldwide: Epidemiological Insights (Global Change Biology)<br />
                        <a 
                            href="https://onlinelibrary.wiley.com/doi/10.1111/gcb.70523"
                            data-desc="Peer-reviewed overview of the recent global H5N1 panzootic in wild birds: spread, patterns, and drivers."
                        >
                            https://onlinelibrary.wiley.com/doi/10.1111/gcb.70523
                        </a>
                    </li>

                    <li>
                        Ecology and Spread of the North American H5N1 Epizootic (Nature)<br />
                        <a 
                            href="https://www.nature.com/articles/s41586-025-09737-x"
                            data-desc="Research article analyzing North American H5N1 spread, ecology, and transmission dynamics across regions/species."
                        >
                            https://www.nature.com/articles/s41586-025-09737-x
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}