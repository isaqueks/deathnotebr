import React, { useEffect, useRef, useState } from "react";

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

    const ref = useRef<HTMLImageElement>(null);

    const onLoad = (e) => {
        if (placeholderLoaded) {
            return;
        }

        setPlaceholderLoaded(true);
    }

    useEffect(() => {
        // When ReactDOM.hydrate is called (SSR),
        // the image can already be loaded without
        // the onLoad event listener.
        // So, let's check if the image is already loaded
        // and if so, call onLoad:
        if (!placeholderLoaded && ref.current.naturalWidth) {
            onLoad(null);
        }
    });

    return <img 
        ref={ref} 
        src={placeholderLoaded ? props.src : placeholder} 
        loading={placeholderLoaded ? 'lazy' : 'eager'}
        alt={props.alt} 
        onLoad={onLoad} 
    />
}