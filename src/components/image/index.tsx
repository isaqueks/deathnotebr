import React, { useRef, useState } from "react";

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

    const [ placeholderLoaded, setPlaceholderLoaded ] = useState(false);

    const onLoad = (e) => {
        if (placeholderLoaded) {
            return;
        }

        setPlaceholderLoaded(true);
    }

    return <img 
        src={placeholderLoaded ? props.src : placeholder} 
        loading={placeholderLoaded ? 'lazy' : 'eager'}
        alt={props.alt} 
        onLoad={onLoad} 
    />
}