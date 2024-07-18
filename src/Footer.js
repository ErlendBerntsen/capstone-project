import "./index.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <img src="./logo.png" alt="logo" className="footer-logo"></img>
            <div>
                <h3>Doormat Navigation</h3>
                <ul className="footer-list">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/home">About</a></li>
                    <li><a href="/home">Menu</a></li>
                    <li><a href="/home">Reservations</a></li>
                    <li><a href="/home">Order Online</a></li>
                    <li><a href="/home">Log In</a></li>
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