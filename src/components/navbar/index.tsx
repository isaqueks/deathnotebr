import './navbar.css';
import NavLink from './navLink';

export default function Navbar(props) {

    return <nav className="navBar">
        <NavLink className="logo" url="/">
            <img src="/logo192.png" alt="Logo" />
        </NavLink>
        <NavLink url="/">Início</NavLink>
        <NavLink url="/#sobre">Sobre</NavLink>
        <h1 className="navTitle">{props.title}</h1>
    </nav>

}