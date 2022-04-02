import AnimeSeries from "@ts/series";
import EpisodeLink from "./episodeLink";
import style from './AnimePlayer.module.css';
import VideoPlayer from "@lib/VideoPlayer";
import SRTSubtitle from "@components/lib/video-player/src/ts/SRTSubtitle";

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

    const subtitles = [
        new SRTSubtitle(`https://static.deathnote.com.br/subtitles/E${(+props.currentEpisode+1)}.srt`, 'pt-BR', 'Português (Brasil)')
    ]

    return <section className={style.animePlayer}>
        <div className={style.videoRow}>
            <div style={videoStyle}>
                <VideoPlayer 
                    src={episode.videoUrl} 
                    type="video/mp4" 
                    tracks={[]} 
                    subtitles={subtitles} 
                />
            </div>
            <div className={style.videoTitle}>
                <span>{episode.title}</span>
            </div>
            <div className={style.videoDescription}>
                <p>
                    Assista o anime Death Note online gratuitamente.
                    Assista Death Note dublado em alta resolução e qualidade. <br />
                    {episode.title}
                </p>
            </div>
        </div>
        <div className={style.episodeList}>
            {props.series.episodes.map((episode, index) => <EpisodeLink key={index} episodeIndex={index} linkUrl={`/watch/${index}`} episode={episode} />)}
        </div>

    </section>
}