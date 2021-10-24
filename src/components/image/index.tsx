import React, { useRef } from "react";

interface Props {
    src: string;
    alt?: string;
}

export default function Image(props: Props) {

    const parts = props.src.split('/');
    const imgFileName = parts.pop();
    // pushing 'ph' will add the ph (placeholder) directory
    // before: a/b/c.png
    // after: a/b/ph/c.png
    parts.push('ph');
    parts.push(imgFileName);

    const placeholder = parts.join('/');

    const ref = useRef<HTMLImageElement>(null);

    const onLoad = (e) => {
        if (ref.current.src.endsWith(props.src)) {
            return;
        }

        ref.current.src = props.src;
        ref.current.loading = 'lazy';
    }

    return <img ref={ref} src={placeholder} alt={props.alt} onLoad={onLoad} />
}