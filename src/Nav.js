import "./index.css"

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list-item"><a href="/home">Home</a></li>
                <li className="nav-list-item"><a href="/home">About</a></li>
                <li className="nav-list-item"><a href="/home">Menu</a></li>
                <li className="nav-list-item"><a href="/home">Reservations</a></li>
                <li className="nav-list-item"><a href="/home">Order Online</a></li>
                <li className="nav-list-item"><a href="/home">Log In</a></li>
            </ul>
        </nav>
    )
}