
export default function Padding(props) {
    const { value, children, ...other } = props;

    const style: any = {
        padding: value
    }

    if (props.bottom) {
        style.paddingBottom = props.bottom;
    }

    return <div style={style} {...other}>
        {children}
    </div>
}