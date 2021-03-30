import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Michael Wong</NavLink>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" activeClassName="active">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar