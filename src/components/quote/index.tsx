import './quote.css';
import { PropsWithChildren } from "react";

interface Props {
    cite: string;
}

export default function Quote(props: PropsWithChildren<Props>) {

    const { children, cite, ...other } = props;

    return <p className="quote" {...other}>
        <blockquote>
            {children}
            <cite>{cite}</cite>
        </blockquote>
    </p>
}