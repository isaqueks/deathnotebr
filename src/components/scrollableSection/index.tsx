import './section.css';
import { PropsWithChildren } from "react";

interface Props {
    index?: number;
    onScroll?: any;
    snapStart?: boolean;
}

export default function ScrollableSection(props: PropsWithChildren<Props>) {

    const { index, snapStart, ...other } = props;

    const style: any = {
    }

    if (typeof index === 'number') {
        style.top = `${(index * 100)}vh`;
    }

    return <section className="scrollableSection" style={style} {...other}>
        {props.children}
    </section>
}