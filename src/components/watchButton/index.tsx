import './watchButton.css';

export default function WatchButton(props) {
    return <a href="/watch/0" className="watchBtn" title="Assista Death Note dublado gratuitamente">
        {props.children}
    </a>
}