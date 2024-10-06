import "./index.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <img src="./logo.png" alt="logo" className="footer-logo"></img>
            <div>
                <h3>Doormat Navigation</h3>
                <ul className="footer-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/booking">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Log In</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul className="footer-list">
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>

            <div>
                <h3>Social Media Links</h3>
                <ul className="footer-list">
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    )
}