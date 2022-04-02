import Link from "next/link";
import { AnimeEpisode } from "@ts/series";
import style from './AnimePlayer.module.css';

interface Props {
    episode: AnimeEpisode;
    episodeIndex: number,
    linkUrl: string;
}

export default function EpisodeLink({ linkUrl, episode, episodeIndex }: Props) {

    return (
        <Link href={linkUrl}>
            <a title={episode.title} className={style.episodeLink}>
                {episode.title}
            </a>
        </Link>
    )

}