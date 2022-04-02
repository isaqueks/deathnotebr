import React, { Children, useRef } from "react";
import scrollAnimation from "../../ts/scrollAnim";
import ScrollableSection from "../scrollableSection";
import style from './ScrollableViewport.module.css';

export default function ScollableViewport(props) {

    const children = React.Children.toArray(props.children);
    const ref = useRef(null);

    let i = 0;

    return <div ref={ref} className={style.scrollableViewport} onScroll={scrollAnimation(ref)}>
        {children.map(child => {
            return <ScrollableSection key={i} index={i++}>
                {child}
            </ScrollableSection>
        })}
    </div>
}