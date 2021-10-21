import './section.css';
import { PropsWithChildren } from "react";

interface Props {
    index?: number;
    onScroll?: any;
}

export default function ScrollableSection(props: PropsWithChildren<Props>) {

    const style: any = {
    }

    if (typeof props.index === 'number') {
        style.top = `${(props.index * 100)}vh`;
    }

    return <section className="scrollableSection" style={style} {...props}>
        {props.children}
    </section>
}