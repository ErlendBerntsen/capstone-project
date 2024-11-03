import "./index.css";

export const Hero = () => {
    return (
        <div className="hero-background">
            <div className="hero-container">
                <section className="hero-info">
                    <h1 className="hero-title">Little Lemon</h1>
                    <h2 className="hero-subtitle">Chicago</h2>
                    <h4 className="hero-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h4>
                    <a className="hero-button" href="/booking" aria-label="Go to booking page">Reserve a Table</a>
                </section>
                <div className="hero-image-container">
                    <img src="./restauranfood.jpg" alt="picture-of-guy-serving-bruschettas"  width="250px" className="hero-image"></img>
                </div>
            </div>
        </div>
    );
}