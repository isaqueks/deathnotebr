import React, { UIEventHandler } from "react";

const DELAY = 50;
const OPACITY_TOLERANCE = 0.05;

export default function scrollAnim<T extends Element = HTMLDivElement>(ref: React.RefObject<T>): UIEventHandler<T> {

    let lastExec = Date.now();
    let children: HTMLElement[] = null;

    // This function will do some calculations
    // and optimizations
    const applyOpacity = (element: HTMLElement, opacity: number) => {

        if (opacity <= OPACITY_TOLERANCE) {
            opacity = 0;
        }
        else if (opacity >= 1 - OPACITY_TOLERANCE) {
            opacity = 1;
        }

        const str = opacity.toFixed(2);

        if (element.style.opacity == str) {
            return;
        }
        element.style.opacity = str;
    }

    return (e) => {
        const element = ref.current;
        if (!element) {
            return;
        }

        // The function runs every 50 (or DELAY) ms
        // for performance enhacement 
        if (Date.now() - lastExec < DELAY) {
            return;
        }
        lastExec = Date.now();

        const top = element.scrollTop;

        // Chilren is cached for performance enhacement
        if (!children) {
            children = Array.from<HTMLElement>(element.children as any);
        }

        const childrenOrdered = children.sort((a, b) =>
            Math.abs(a.offsetTop - top) > Math.abs(b.offsetTop - top) ? 1 : -1
        );

        let [curr, next] = childrenOrdered;

        if (next.offsetTop < curr.offsetTop) {
            [curr, next] = [next, curr];
        }


        // (top - curr.offsetTop) / next.offsetHeight is the percentage itself
        // but multiplying it by 2, raising to 1.7 and divising by 2
        // gives a better effect in my opinion
        let perc = (((top - curr.offsetTop) / next.offsetHeight) * 2) ** 1.7 / 2;
        perc = 0.1 + perc * 0.9;

        applyOpacity(next, perc);
        applyOpacity(curr, 1 - perc);


    }
}