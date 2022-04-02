import React from 'react';
import { PropsWithChildren } from 'react';
import style from './DoubleSplit.module.css';

export default function DoubleSplit(props: PropsWithChildren<any>) {
    
    const children = React.Children.toArray(props.children);
    if (children.length !== 2) {
        console.error(children);
        
        throw new Error(`DoubleSplit can only contain 2 childs!`);
    }
    const [left, right] = children;

    return <div className={style.doubleSplit}>
        <div className={style.splitLeft}>
            {left}
        </div>
        <div className={style.splitRight}>
            {right}
        </div>
    </div>

}