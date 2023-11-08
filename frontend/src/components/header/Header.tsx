import "./Header.css";

function Header() {
    return (
        <header>
            <p className={"logo"}>Fatty2Fitty</p>
            <nav className={"nav-main"}>
                <ul>
                    <li>Home</li>
                    <li>Add</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
