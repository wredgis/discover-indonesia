import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './NewsPage.scss';

const NewsPage = () => {
    return (
        <>
            <Header />

            <div className="news-page">
                {/* Banner */}
                <section className="banner">
                    <img src="/pics/indonesia-news-banner.png" alt="News banner" className="banner-image-news" />
                    <h1 className="banner-title">Latest News in Indonesia</h1>
                </section>

                {/* Weather Section */}
                <section className="weather-section">
                    <h2 className="section-title">Weather Updates</h2>
                    <div className="weather-info">
                        <p>Stay updated with the latest weather forecasts across Indonesia, including daily temperatures, rainfall, and storm warnings.</p>
                        <img src="/pics/indonesia-weather.jpg" alt="Weather in Indonesia" className="weather-image" />
                    </div>
                </section>

                {/* Politics Section */}
                <section className="politics-section">
                    <h2 className="section-title">Political News</h2>
                    <p>Get insights into the current political climate in Indonesia, from local governance to national policies affecting the population.</p>
                    <ul className="politics-articles">
                        <li>Recent elections and updates</li>
                        <li>New governmental policies</li>
                        <li>International relations and impacts</li>
                    </ul>
                </section>

                {/* Economy Section */}
                <section className="economy-section">
                    <h2 className="section-title">Economic Developments</h2>
                    <p>Learn about the latest economic trends in Indonesia, including changes in trade, GDP growth, and business opportunities.</p>
                    <img src="/pics/indonesia-economy.jpg" alt="Indonesia economy" className="economy-image" />
                </section>

                {/* Social Issues Section */}
                <section className="social-section">
                    <h2 className="section-title">Social Issues</h2>
                    <p>Explore the significant social issues affecting the people of Indonesia, such as education, healthcare, and social equality.</p>
                </section>
            </div>
            
            <Footer />
        </>
    );
};

export default NewsPage;
