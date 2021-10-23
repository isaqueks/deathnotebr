
export default function Padding(props) {
    const { value, top, bottom, left, right, children, ...other } = props;

    const style: any = {
        padding: value || '16px',
        paddingTop: top || '16px',
        paddingBottom: bottom || '16px',
        paddingLeft: left || '16px',
        paddingRight: right || '16px'
    }

    return <div style={style} {...other}>
        {children}
    </div>
}