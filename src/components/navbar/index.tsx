import style from './Navbar.module.css';
import NavLink from './navLink';

export default function Navbar(props) {

    return <nav className={style.navBar}>
        <NavLink className={style.logo} url="/">
            <img src="/logo192.png" alt="Logo" />
        </NavLink>
        <NavLink url="/">Início</NavLink>
        <NavLink url="/#sobre">Sobre</NavLink>
        <h1 className={style.navTitle}>{props.title}</h1>
    </nav>

}