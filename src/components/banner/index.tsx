import DivImage from '../divImage';
import style from './Banner.module.css';

export default function Banner(props) {
    
    const { url, ...other } = props;

    return <DivImage className={style.splashSection} url={url} {...other}>
        {props.children}
    </DivImage>
}