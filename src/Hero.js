import "./index.css";

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-info">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-subtitle">Chicago</h2>
                <h4 className="hero-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h4>
                <a className="hero-button" href="/booking">Reserve a Table</a>
            </div>
            <div className="hero-image-container">
                <img src="./restauranfood.jpg" alt="picture-of-guy-serving-bruschettas"  width="250px" className="hero-image"></img>
            </div>
        </div>
    );
}