import "./index.css"

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list-item"><a href="/">Home</a></li>
                <li className="nav-list-item"><a href="/">About</a></li>
                <li className="nav-list-item"><a href="/">Menu</a></li>
                <li className="nav-list-item"><a href="/booking" >Reservations</a></li>
                <li className="nav-list-item"><a href="/">Order Online</a></li>
                <li className="nav-list-item"><a href="/">Log In</a></li>
            </ul>
        </nav>
    )
}