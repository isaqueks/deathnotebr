import { PropsWithChildren } from "react";
import style from './Navbar.module.css';

export default function NavLink({ url, children, ...other }: PropsWithChildren<{ url: string } & any>) {
    
    let extraClasses = other.className || '';
    delete other.className;

    return <a href={url} className={style.navLink.concat(' ' + extraClasses)} {...other}>
        {children}
    </a>

}