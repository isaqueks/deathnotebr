import { useEpisodeContext } from "../../contexts/episodeContext";
import { AnimeEpisode } from "../../ts/series";

interface Props {
    episode: AnimeEpisode;
    episodeIndex: number,
    linkUrl: string;
}

export default function EpisodeLink({ linkUrl, episode, episodeIndex }: Props) {

    const context = useEpisodeContext();

    const clickHandler = (e) => {
        e.preventDefault();
        context.setCurrentEpisodeIndex(episodeIndex)
    }

    return <a 
        href={linkUrl} 
        title={episode.title} 
        className="episodeLink"
        onClick={e => clickHandler(e)}
    >
        {episode.title}
    </a>

}