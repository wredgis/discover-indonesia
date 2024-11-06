import './Carousel.scss';

const Carousel = () => {
    return (
        <div className="container my-5">
            <div className="row">
                {/* left side */}
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <p>Ads on left</p>
                </div>

                {/*  carrousel area (middle) */}
                <div className="col-md-6 carousel-position carousel-image">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/pics/population.jpg" className="d-block w-100" alt="population of indonesia" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>The population in Indonesia</h5>
                                    <p>The mixies inodonesian population.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <img src="/pics/culture.jpg" className="d-block w-100" alt="culture of indonesia" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>The wonderful culture of Indonesians</h5>
                                <p>There is not only one but many cultures in Indonesia.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/pics/borobudur.jpeg" className="d-block w-100" alt="History of Indonesia" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>The history of Indonesia</h5>
                                <p>The history of Indonesia is one of the richest in the world.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/pics/indonesia-map2.jpg" className="d-block w-100" alt="Geography of Indonesia" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>The geography of Indonesia</h5>
                                <p>The geography of Indonesia is among the richest in the world.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/pics/tourism.jpg" className="d-block w-100" alt="Tourism in Indonesia" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Tourism in Indonesia</h5>
                                <p>Indonesia's tourism offers diverse experiences.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/pics/news.png" className="d-block w-100" alt="News in Indonesia" />
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h5>News in Indonesia</h5> */}
                                {/* <p>Stay updated with the latest from Indonesia.</p> */}
                            </div>
                        </div>  

                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <p>Ads on right</p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
