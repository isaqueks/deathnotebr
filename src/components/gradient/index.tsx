import './gradient.css';

export default function Gradient(props) {
    const { children, className, gradient, ...other } = props;
    const style = {
        background: gradient || 'linear-gradient(110deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 18%, rgba(0,0,0,0.85) 40%, rgba(129,129,129,0.25) 90%, rgba(255,255,255,0) 100%)'
    }


    return <div className={"gradient".concat(className ? ` ${className}` : '')} {...other} style={style}>
        {children}
    </div>
}