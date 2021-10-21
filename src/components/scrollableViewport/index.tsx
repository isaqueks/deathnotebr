import React, { Children } from "react";
import ScrollableSection from "../scrollableSection";
import './scrollableViewport.css';

function roundOpacity(opacity: number): number {
    if (opacity <= 0.025) return 0;
    else if (opacity >= 0.975) return 1;
    return opacity;
}

export default class ScrollableViewport extends React.Component {

    private element: React.Ref<any> = React.createRef();
    private domElement: HTMLElement;

    handleScroll(e) {
        const { children: childrenRaw, scrollTop } = this.domElement;
        const children = Array.from(childrenRaw);
        const clientHeight = children[0].clientHeight;

        const lastPerfectScroll = scrollTop - (scrollTop % clientHeight);

        let index = 0;
        for (let h = 0; h < lastPerfectScroll; h += clientHeight) {
            index++;
        }

        const lastElement = children[index];
        const currentElement = children[index + 1];

        if (!currentElement) {
            return;
        }

        // Apply opacity 0 on all previous elements
        // for a bug fix
        for (let i = 0; i < children.length; i++) {
            if (i < index) {
                const elementAsAny = children[i] as any;
                elementAsAny.style.opacity = 0;
                if (window.innerWidth <= 850) {
                    elementAsAny.scrollTop = 0;
                }
            }
        }

        const lastY = (lastElement as any).offsetTop % clientHeight;
        const currY = (currentElement as any).offsetTop % clientHeight;

        const perc = lastY / clientHeight;

        const lastAsAny = lastElement as any;
        const currAsAny = currentElement as any;

        lastAsAny.style.opacity = roundOpacity(1 - perc);
        currAsAny.style.opacity = roundOpacity(perc);


    }

    componentDidMount() {

        this.domElement = (this.element as any).current as HTMLElement;

    }

    render() {

        const children = React.Children.toArray(this.props.children);

        let i = 0;

        const getSection = (child) => {
            return <ScrollableSection key={i++} index={0}>
                {child}
            </ScrollableSection>
        }

        const arrayToRender = [];

        children.forEach(child => {
            arrayToRender.push(getSection(child));
        })

        return <div className="scrollableViewport" ref={this.element} onScroll={e => this.handleScroll(e)}>
            {arrayToRender}
        </div>
    }

}