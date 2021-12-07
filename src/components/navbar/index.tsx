import './navbar.css';
import NavLink from './navLink';

export default function Navbar() {

    return <nav className="navBar">
        <NavLink className="logo" url="/">
            <img src="/logo192.png" alt="Logo" />
        </NavLink>
        <NavLink url="/">Início</NavLink>
        <NavLink url="/#sobre">Sobre</NavLink>
    </nav>

}