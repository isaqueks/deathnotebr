import React, { PropsWithChildren } from 'react';
import ScrollableSection from '../scrollableSection';
import ScrollableViewport from '../scrollableViewport';
import './characterView.css';

export interface CharacterProps {
    name: string;
    image: string;
    mode?: 'left' | 'right';
}

export default function CharacterView(props: PropsWithChildren<CharacterProps>) {

    const mode = props.mode || 'left';

    const imageSide = (
        <div key="img-side" className="characterImage">
            <img src={props.image} alt={`Death Note: ${props.name}`} />
        </div>
    );

    const infoSide = (
        <div key="info-side" className="characterInfo">
            <div className="characterInfoWrapper">
                <h1 className="characterName">
                    {props.name}
                </h1>
                <div className="characterDescription">
                    {props.children}
                </div>
            </div>
        </div>
    );

    return (
        <div className={`characterView viewMode-${mode}`}>
            {imageSide}
            {infoSide}
        </div>
    );
}