import { PropsWithChildren } from 'react';
import './divImage.css';

interface Props {
    size?: 'contain' | 'cover';
    position?: 'center' | 'left' | 'right';
    x?: string;
    y?: string;
    repeat?: string;
    url: string;
    style?: any;
    className?: string;
}

export default function DivImage(props: PropsWithChildren<Props>) {

    const style: any = {
        backgroundImage: `url("${props.url}")`,
        backgroundSize: props.size || 'cover',
        backgroundPosition: props.position || 'center',
        backgroundRepeat: props.repeat || 'no-repeat',
        ...props.style
    }

    if (props.x) {
        style.backgroundPositionX = props.x;
    }
    if (props.y) {
        style.backgroundPositionY = props.y;
    }

    return <div className={"divImage".concat(typeof props.className === 'string' ? ` ${props.className}` : '')} style={style}>
        {props.children}
    </div>
}