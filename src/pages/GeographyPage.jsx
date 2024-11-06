import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './GeographyPage.scss';

const GeographyPage = () => {
    return (
        <>
            <Header />

            <div className="geography-page">
                {/* banner */}
                <section className="banner">
                    <img src="/pics/indonesia-landscape2.jpg" alt="Indonesian landscape" className="banner-image-geography" />
                    <h1 className="banner-title-geography">Geography of Indonesia</h1>
                </section>

                {/* Introduction */}
                <section className="intro">
                    <p>As an archipelago nation of over 17,000 islands, Indonesia offers some of the world's most diverse and breathtaking landscapes, from pristine beaches and lush jungles to towering volcanoes. Explore the unique geography that shapes this extraordinary country.</p>
                </section>

                {/* physical geography */}
                <section className="physical-geography">
                    <h2 className="section-title">Physical Geography</h2>
                    <p>Indonesia spans over 5,000 kilometers across the equator, making it one of the most ecologically rich countries on Earth. Its islands are home to tropical rainforests, mountains, and over 400 volcanoes.</p>
                    <img src="/pics/volcano.jpg" alt="Indonesian volcano" className="geography-image" />
                </section>

                {/* Climate */}
                <section className="climate-section">
                    <h2 className="section-title">Climate</h2>
                    <p>Indonesia has a tropical climate with high humidity and rainfall. The climate varies across regions, influenced by monsoon patterns, elevation, and proximity to the sea, resulting in unique microclimates.</p>
                </section>

                {/* Biodiversity*/}
                <section className="biodiversity">
                    <h2 className="section-title">Biodiversity</h2>
                    <p>Indonesia is part of the Coral Triangle, home to some of the richest marine biodiversity in the world. Its tropical rainforests and unique ecosystems host species like the Komodo dragon, orangutans, and a vast range of marine life.</p>
                    <img src="/pics/coral-reef.jpg" alt="Indonesian coral reef" className="geography-image" />
                </section>

                {/* The Archipelago and Major Islands */}
                <section className="archipelago">
                    <h2 className="section-title">The Archipelago and Major Islands</h2>
                    <p>The Indonesian archipelago includes five main islands: Java, Sumatra, Kalimantan, Sulawesi, and Papua. Each region has its own unique terrain, ecosystems, and cultural heritage.</p>
                    <div className="island-gallery">
                        <img src="/pics/java.jpg" alt="Java island" />
                        <img src="/pics/sumatra.jpg" alt="Sumatra island" />
                        <img src="/pics/kalimantan.jpg" alt="Kalimantan island" />
                    </div>
                </section>

                {/* Interesting Facts */}
                <section className="fun-facts">
                    <h2 className="section-title">Interesting Facts</h2>
                    <ul>
                        <li>Indonesia has the largest number of active volcanoes in the world.</li>
                        <li>Java is the most populous island globally, with over 141 million people.</li>
                        <li>Indonesia is home to the only place in the world where Komodo dragons exist naturally.</li>
                    </ul>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default GeographyPage;
