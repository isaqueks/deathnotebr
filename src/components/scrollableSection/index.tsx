import style from './Section.module.css';
import { PropsWithChildren } from "react";

interface Props {
    index?: number;
    onScroll?: any;
    snapStart?: boolean;
}

export default function ScrollableSection(props: PropsWithChildren<Props>) {

    const { index, snapStart, ...other } = props;

    return <section className={style.scrollableSection} {...other} data-index={index}>
        {props.children}
    </section>
}