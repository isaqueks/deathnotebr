import style from './Quote.module.css';
import { PropsWithChildren } from "react";

interface Props {
    cite: string;
}

export default function Quote(props: PropsWithChildren<Props>) {

    const { children, cite, ...other } = props;

    return <div className={style.quote} {...other}>
        <blockquote>
            {children}
            <cite>{cite}</cite>
        </blockquote>
    </div>
}