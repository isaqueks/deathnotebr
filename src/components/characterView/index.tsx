import React, { PropsWithChildren } from 'react';
import Image from '../image';
import style from './CharacterView.module.css';

export interface CharacterProps {
    name: string;
    image: string;
    center?: boolean;
    mode?: 'left' | 'right';
}

export default function CharacterView(props: PropsWithChildren<CharacterProps>) {

    const mode = props.mode || 'left';
    const center = props.center || false;

    const imageSide = (
        <div key="img-side" className={style.characterImage.concat(center ? ' '.concat(style.characterCenter) : '')}>
            <Image src={props.image} alt={`Death Note: ${props.name}`} />
        </div>
    );

    const infoSide = (
        <div key="info-side" className={style.characterInfo}>
            <div className={style.characterInfoWrapper}>
                <h2 className={`h1 ${style.characterName}`}>
                    {props.name}
                </h2>
                <div className={style.characterDescription}>
                    {props.children}
                </div>
            </div>
        </div>
    );

    return (
        <div className={`${style.characterView} ${style[`viewMode-${mode}`]}`}>
            {imageSide}
            {infoSide}
        </div>
    );
}