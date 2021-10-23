import React from 'react';
import { PropsWithChildren } from 'react';
import './doubleSplit.css';

export default function DoubleSplit(props: PropsWithChildren<any>) {
    
    const children = React.Children.toArray(props.children);
    if (children.length !== 2) {
        console.error(children);
        
        throw new Error(`DoubleSplit can only contain 2 childs!`);
    }
    const [left, right] = children;

    return <div className="doubleSplit">
        <div className="splitLeft">
            {left}
        </div>
        <div className="splitRight">
            {right}
        </div>
    </div>

}