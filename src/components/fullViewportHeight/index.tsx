import style from './FullViewportHeight.module.css';

export default function FullViewportHeight(props) {
    return <div className={style.viewportHeight}>
        {props.children}
    </div>
}