import { PropsWithChildren } from "react";
import DivImage from "../divImage";
import Gradient from "../gradient";
import Padding from "../padding";
import TextAlign from "../textAlign";
import style from './BigCharacterView.module.css';

interface Props {
    image: string;
    name: string;
    mode: 'left' | 'right';
}

const Gradients = {
    left: 'linear-gradient(90deg, rgba(255,255,255,0) 70%, rgba(16,16,16,1) 100%)',
    right: 'linear-gradient(90deg, rgba(16,16,16,1) 0, rgba(255,255,255,0) 30%)',
}

const TextGradient = 'linear-gradient(0deg, rgba(16,16,16,1) 0%, rgba(16,16,16,1) 20%, rgba(16,16,16,0.65) 70%, rgba(16,16,16,0) 100%)';

export default function BigCharacterView(props: PropsWithChildren<Props>) {
    return <DivImage
        url={props.image}
        size="cover"
        position="right"
        className={style.bigCharacter}>
        <Gradient className={style.bigCharacterGradient} gradient={Gradients[props.mode]}>
            <div className={style.bigCharacterDetails}>
                <TextAlign type="center">
                    <h1>{props.name}</h1>
                </TextAlign>
                <div className={style.bigCharacterDescription}>
                    <div className={style.bigCharacterDescriptionWrapper}>
                        <Gradient gradient={TextGradient}>
                            <Padding className={style.bigCharacterPadding} value="24px" bottom="48px">
                                <TextAlign type={props.mode}>
                                    {props.children}
                                </TextAlign>
                            </Padding>
                        </Gradient>
                    </div>
                </div>
            </div>
        </Gradient>
    </DivImage>
}