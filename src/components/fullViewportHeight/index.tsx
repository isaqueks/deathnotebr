import './fullViewportHeight.css';

export default function FullViewportHeight(props) {
    return <div className="viewportHeight">
        {props.children}
    </div>
}