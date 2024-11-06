import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './TourismPage.scss'

const TourismPage = () => {
    return (
        <>
            <Header />

            <div className="tourism-page">
                {/* banner */}
                <section className="banner">
                    <img src="/pics/indonesia-tourism-banner.jpg" alt="Beautiful beach in Indonesia" className="banner-image" />
                    <h1 className="banner-title-tourism">Discover Indonesia</h1>
                </section>

                {/* Introduction */}
                <section className="intro">
                    <p>Indonesia is a paradise for travelers, offering everything from pristine beaches to vibrant culture, and a warm, welcoming atmosphere. Explore some of the top destinations and activities that make Indonesia a unique travel experience.</p>
                </section>

                {/* Top Destinations */}
                <section className="destinations-section">
                    <h2 className="section-title">Top Destinations</h2>
                    <div className="destinations-container">
                        <div className="destination-card">
                            <img src="/pics/bali.jpg" alt="Bali" />
                            <h3>Bali</h3>
                            <p>Known for its beaches, temples, and vibrant culture.</p>
                        </div>
                        <div className="destination-card">
                            <img src="/pics/yogyakarta.jpg" alt="Yogyakarta" />
                            <h3>Yogyakarta</h3>
                            <p>A cultural hub and home to the Borobudur temple.</p>
                        </div>
                        <div className="destination-card">
                            <img src="/pics/komodo.jpg" alt="Komodo Island" />
                            <h3>Komodo Island</h3>
                            <p>Famous for its unique Komodo dragons and stunning landscapes.</p>
                        </div>
                    </div>
                </section>

                {/* Popular Activities */}
                <section className="activities-section">
                    <h2 className="section-title">Popular Activities</h2>
                    <ul className="activities-list">
                        <li>Surfing in Bali and the Mentawai Islands</li>
                        <li>Snorkeling and diving in Raja Ampat</li>
                        <li>Hiking Mount Bromo and other volcanoes</li>
                        <li>Cultural tours in Yogyakarta and Ubud</li>
                        <li>Exploring traditional markets and culinary delights</li>
                    </ul>
                </section>

                {/* Travel Tips */}
                <section className="info-section">
                    <h2 className="section-title">Travel Tips</h2>
                    <p>When planning your trip to Indonesia, keep in mind that the best time to visit is during the dry season, from April to October. Make sure to respect local customs, especially when visiting temples and traditional villages.</p>
                </section>

                {/* Photo Gallery */}
                <section className="gallery">
                    <h2 className="section-title">Photo Gallery</h2>
                    <div className="gallery-images">
                        <img src="/pics/borobudur1.jpg" alt="Borobudur temple" />
                        <img src="/pics/raja-ampat.jpg" alt="Raja Ampat diving spot" />
                        <img src="/pics/mount-bromo.jpg" alt="Mount Bromo at sunrise" />
                        <img src="/pics/mentawai.jpg" alt="Mentawai Islands surfing" />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default TourismPage;
