import "./index.css"

export const Footer = () => {
    return (
        <footer className="footer-background">
            <div className="footer-container">
                <img src="./logo.png" alt="logo" className="footer-logo"></img>
                <div>
                    <h5>Doormat Navigation</h5>
                    <ul className="footer-list">
                        <li><a href="/" className="footer-link">Home</a></li>
                        <li><a href="/" className="footer-link">About</a></li>
                        <li><a href="/" className="footer-link">Menu</a></li>
                        <li><a href="/booking" className="footer-link">Reservations</a></li>
                        <li><a href="/" className="footer-link">Order Online</a></li>
                        <li><a href="/" className="footer-link">Log In</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul className="footer-list">
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h5>Social Media Links</h5>
                    <ul className="footer-list">
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}