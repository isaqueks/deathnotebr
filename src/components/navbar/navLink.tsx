import { PropsWithChildren } from "react";

export default function NavLink({ url, children, ...other }: PropsWithChildren<{ url: string } & any>) {
    
    let extraClasses = other.className || '';
    delete other.className;

    return <a href={url} className={"navLink ".concat(extraClasses)} {...other}>
        {children}
    </a>

}