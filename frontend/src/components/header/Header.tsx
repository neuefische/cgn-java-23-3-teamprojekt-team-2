import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <p className={"logo"}>Fatty2Fitty</p>
            <nav className={"nav-main"}>
                <ul>
                    <li> <Link to={"/"}>Home</Link></li>
                    <li>Add</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
