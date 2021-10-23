import { PropsWithChildren } from "react"

interface Props {
    type: 'left' | 'center' | 'right';
}

export default function TextAlign(props: PropsWithChildren<Props>) {

    const style = {
        textAlign: props.type
    }

    return <div style={style}>
        {props.children}
    </div>
}