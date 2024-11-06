import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import './PopulationPage.scss';

const PopulationPage = () => {
    return (
        <>
            <Header />
            <div className="population-page">
                {/* banner */}
                <section className="banner">
                    <img src="pics/indonesia-cityscape2.jpg" alt="Cityscape of Indonesia" className="banner-image" />
                    <h1 className="banner-title-population">Population of Indonesia</h1>
                </section>

                {/* Introduction */}
                <section className="intro">
                    <p>Indonesia is the fourth most populous country in the world, known for its rich cultural diversity and rapid urbanization. Discover more about the demographics, culture, and unique aspects of Indonesia's population below.</p>
                </section>

                {/* Key Statistics */}
                <section className="stats-section">
                    <h2 className="section-title">Key Statistics</h2>
                    <div className="stats-container">
                        <div className="stat-card">
                            <h3>Total Population</h3>
                            <p>276 million</p>
                        </div>
                        <div className="stat-card">
                            <h3>Urban Population</h3>
                            <p>55%</p>
                        </div>
                        <div className="stat-card">
                            <h3>Ethnic Groups</h3>
                            <p>Over 300</p>
                        </div>
                        <div className="stat-card">
                            <h3>Main Religions</h3>
                            <p>Islam, Christianity, Hinduism, Buddhism</p>
                        </div>
                    </div>
                </section>

                {/* Cultural and Ethnic Diversity */}
                <section className="culture-section">
                    <h2 className="section-title">Cultural and Ethnic Diversity</h2>
                    <p>Indonesia is home to hundreds of ethnic groups and languages, with the Javanese, Sundanese, and Balinese being among the largest. Each group contributes its own unique customs, languages, and festivals.</p>
                    <img src="/pics/ethnic-groups.jpg" alt="Indonesian ethnic groups" className="culture-image" />
                </section>

                {/* Population Density */}
                <section className="density-section">
                    <h2 className="section-title">Population Density</h2>
                    <p>While Java is one of the most densely populated islands globally, other regions like Papua and Kalimantan are sparsely populated, offering a glimpse into Indonesia’s diverse geography and lifestyle.</p>
                    <img src="/pics/population-density-map1.png" alt="Population density map of Indonesia" className="density-image" />
                </section>

                {/* Urbanization and Major Cities */}
                <section className="urbanization-section">
                    <h2 className="section-title">Urbanization and Major Cities</h2>
                    <p>With Jakarta, Surabaya, and Bandung as major urban centers, Indonesia’s rapid urbanization brings both opportunities and challenges. These cities are hubs of economic growth, culture, and modernization.</p>
                    <div className="city-images">
                        <img src="/pics/jakarta.jpg" alt="Jakarta city" />
                        <img src="/pics/surabaya.jpg" alt="Surabaya city" />
                        <img src="/pics/bandung.jpg" alt="Bandung city" />
                    </div>
                </section>

                {/* interestings facts */}
                <section className="fun-facts">
                    <h2 className="section-title">Interesting Facts</h2>
                    <ul>
                        <li>Indonesia has the largest Muslim population in the world.</li>
                        <li>Over 40% of the population is under the age of 25.</li>
                        <li>With more than 17,000 islands, Indonesia’s people are spread across vast distances.</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default PopulationPage;
