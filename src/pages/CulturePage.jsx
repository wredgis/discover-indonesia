import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import './CulturePage.scss';

const CulturePage = () => {
    return (
        <>
            <Header />
            <div className="culture-page">
                {/* banner */}
                <section className="banner">
                    <img src="/pics/culture-banner1.jpg" alt="Cultural festival in Indonesia" className="banner-image" />
                    <h1 className="banner-title-culture">Culture of Indonesia</h1>
                </section>

                {/* Introduction */}
                <section className="intro">
                    <p>Indonesia's culture is a vibrant tapestry woven from hundreds of ethnic groups and traditions. Explore the richness of Indonesian culture through its food, art, music, and customs.</p>
                </section>

                {/* Traditions & customs */}
                <section className="traditions-section">
                    <h2 className="section-title">Traditions and Customs</h2>
                    <p>Discover unique Indonesian traditions, such as traditional weddings and festivals.</p>
                    <img src="/pics/traditions.jpg" alt="Indonesian traditions" className="traditions-image" />
                </section>

                {/* Cooking */}
                <section className="cuisine-section">
                    <h2 className="section-title">Indonesian Cuisine</h2>
                    <p>Indonesian cuisine is known for its rich flavors and variety. Some popular dishes include Nasi Goreng and Rendang.</p>
                    <img src="/pics/cuisine.jpg" alt="Indonesian cuisine" className="cuisine-image" />
                </section>

                {/* Arts and Crafts */}
                <section className="arts-section">
                    <h2 className="section-title">Arts and Crafts</h2>
                    <p>Indonesian arts, including Batik and traditional dances, reflect the country’s rich cultural heritage.</p>
                    <img src="/pics/arts.jpg" alt="Indonesian arts" className="arts-image" />
                </section>

                {/* Musique & danse */}
                <section className="music-dance-section">
                    <h2 className="section-title">Music and Dance</h2>
                    <p>Explore the diverse music and dance styles, including Gamelan and traditional performances.</p>
                </section>

                {/* Interesting Cultural Facts */}
                <section className="fun-facts">
                    <h2 className="section-title">Interesting Cultural Facts</h2>
                    <ul>
                        <li>Indonesia has over 300 ethnic groups.</li>
                        <li>The country is home to a variety of traditional musical instruments.</li>
                        <li>Each region has its own distinct culinary specialties.</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default CulturePage;
