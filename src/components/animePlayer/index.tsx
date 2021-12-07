import AnimeSeries from "../../ts/series";
import './animePlayer.css';
import EpisodeLink from "./episodeLink";

interface Props {
    series: AnimeSeries;
    currentEpisode?: number;
}

export default function AnimePlayer(props: Props) {

    const episode = props.series.episodes[props.currentEpisode || 0];

    const w = episode.resolution.width;
    const h = episode.resolution.height;

    const videoStyle = {
        aspectRatio: `${w}/${h}`
    }

    return <section className="animePlayer">
        <div className="videoRow">
            <video controls style={videoStyle}>
                <source src={episode.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="videoTitle">
                <span>{episode.title}</span>
            </div>
            <div className="videoDescription">
                <p>
                    Assista o anime Death Note online gratuitamente.
                    Assista Death Note em alta resolução e qualidade. <br />
                    {episode.title}
                </p>
            </div>
        </div>
        <div className="episodeList">
            {props.series.episodes.map((episode, index) => <EpisodeLink key={index} linkUrl={`/watch/${index}`} episode={episode} />)}
        </div>

    </section>
}