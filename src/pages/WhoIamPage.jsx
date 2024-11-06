import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './WhoIamPage.scss';

const WhoIamPage = () => {    
    return (
        <>
            <Header />

            <main className="whoiam-page">
                {/* Section d'introduction */}
                <section className="intro-section-whoiam">
                    <h1>Who I Am</h1>
                    <p>
                        I am passionate about meeting people from diverse backgrounds, constantly enriched by their unique perspectives. Guided by values of justice and integrity, I seek to foster understanding and genuine connections.
                    </p>
                </section>

                {/* Section de contact */}
                <section className="contact-section">
                    <h2>Contact Me</h2>
                    <p>Wredgis</p>
                    <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default WhoIamPage;

