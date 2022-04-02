import { PropsWithChildren } from 'react';
import style from './DivImage.module.css';

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

    const inlineStyle: any = {
        backgroundImage: `url("${props.url}")`,
        backgroundSize: props.size || 'cover',
        backgroundPosition: props.position || 'center',
        backgroundRepeat: props.repeat || 'no-repeat',
        ...props.style
    }

    if (props.x) {
        inlineStyle.backgroundPositionX = props.x;
    }
    if (props.y) {
        inlineStyle.backgroundPositionY = props.y;
    }

    return <div className={style.divImage.concat(typeof props.className === 'string' ? ` ${props.className}` : '')} style={inlineStyle}>
        {props.children}
    </div>
}