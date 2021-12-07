import { AnimeEpisode } from "../../ts/series";

interface Props {
    episode: AnimeEpisode;
    linkUrl: string;
}

export default function EpisodeLink({ linkUrl, episode }: Props) {

    return <a href={linkUrl} title={episode.title} className="episodeLink">
        {episode.title}
    </a>

}