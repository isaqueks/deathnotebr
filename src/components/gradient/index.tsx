import './gradient.css';

export default function Gradient(props) {
    const { children, ...other } = props;
    return <div className="gradient" {...other}>
        {children}
    </div>
}