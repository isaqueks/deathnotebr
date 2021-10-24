import DivImage from '../divImage';
import './banner.css';

export default function Banner(props) {
    
    const { url, ...other } = props;

    return <DivImage className="splashSection" url={url} {...other}>
        {props.children}
    </DivImage>
}