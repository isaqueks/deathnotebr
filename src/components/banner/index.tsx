import './banner.css';

export default function Banner(props) {
    
    // Classname should not be "banner"
    // because some ad blockers
    // will block the keyword "banner"

    const style = {
        backgroundImage: `url("${props.image}")`,
        backgroundPositionX: props.x || 'auto'
    }

    return <div className="splashSection" style={style} {...props}>
        {props.children}
    </div>
}