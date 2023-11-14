import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className={"header-border"}>
            <img className={"logo"} src="src/assets/f2f_logo_.png" />
            <nav className={"nav-main"}>
                <ul>
                    <li> <Link to={"/"}>Home</Link></li>
                    <li> <Link to={"/workouts/add"}>Add</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
