
interface Props {
    src: string;
    alt?: string;
}

export default function Image(props: Props) {
    return <img src={props.src} alt={props.alt} />
}