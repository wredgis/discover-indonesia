import Footer from "../components/Footer";
import Header from "../components/Header";
import './HistoryPage.scss';

const HistoryPage = () => {
    return (
        <>
            <Header />
            <div className="history-page">
                {/* banner */}
                <section className="banner">
                    <img src="/pics/indonesia-history.jpg" alt="Historical sites in Indonesia" className="banner-image" />
                    <h1 className="banner-title-history">History of Indonesia</h1>
                </section>

                {/* Introduction */}
                <section className="intro">
                    <p>Indonesia has a rich and diverse history, influenced by various cultures and civilizations over centuries. This page explores the key events and milestones that have shaped the nation.</p>
                </section>

                {/* Prehistoric Era and Early Influences */}
                <section className="prehistoric-section">
                    <h2 className="section-title">Prehistoric Era and Early Influences</h2>
                    <p>The earliest human settlements in Indonesia date back to around 1.5 million years ago. The archipelago has been a melting pot of cultures, influenced by Indian, Chinese, and Arab traders.</p>
                    <img src="/pics/prehistoric-indonesia.jpg" alt="Prehistoric Indonesia" className="history-image" />
                </section>

                {/* Période coloniale */}
                <section className="colonial-section">
                    <h2 className="section-title">Colonial Era</h2>
                    <p>In the 17th century, the Dutch began to establish a colonial presence, leading to significant changes in trade, culture, and the political landscape of Indonesia.</p>
                    <img src="/pics/colonial-indonesia.jpg" alt="Colonial Indonesia" className="history-image" />
                </section>

                {/* Lutte pour l'indépendance */}
                <section className="independence-section">
                    <h2 className="section-title">Struggle for Independence</h2>
                    <p>Indonesia declared independence from the Netherlands in 1945, marking the beginning of a long struggle for sovereignty that culminated in 1949.</p>
                    <img src="/pics/independence.jpg" alt="Independence movement" className="history-image" />
                </section>

                {/* Événements récents */}
                <section className="recent-events-section">
                    <h2 className="section-title">Recent Events</h2>
                    <p>Indonesia has undergone significant political and economic changes since the late 20th century, shaping it into the dynamic nation it is today.</p>
                    <img src="/pics/recent-history.jpg" alt="Recent events in Indonesia" className="history-image" />
                </section>

                {/* Faits intéressants */}
                <section className="fun-facts">
                    <h2 className="section-title">Interesting Historical Facts</h2>
                    <ul>
                        <li>Indonesia is home to some of the oldest archaeological sites in Southeast Asia.</li>
                        <li>The Indonesian archipelago consists of over 17,000 islands.</li>
                        <li>Indonesia was a key player in the spice trade during the 16th and 17th centuries.</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default HistoryPage;
