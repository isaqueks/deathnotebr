import Link from 'next/link';
import style from './WatchButton.module.css';

export default function WatchButton(props) {
    return (
        <Link href="/watch/0" >
            <a
                className={style.watchBtn} 
                title="Assista Death Note dublado gratuitamente"
            >
                {props.children}
            </a>
        </Link>
    )
}