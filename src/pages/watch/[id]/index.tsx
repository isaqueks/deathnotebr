import AnimePlayer from "@components/animePlayer";
import CommentSection from "@components/commentSection";
import Navbar from "@components/navbar";
import Padding from "@components/padding";
import DeathNoteSeries from "@ts/series/deathNote";
import style from '@styles/DeathNote.module.css';
import Meta from "@components/Meta";
import { AnimeEpisode } from "@ts/series";
import ScrollableSection from "@components/scrollableSection";
import ScollableViewport from "@components/scrollableViewport";
import ScrollableViewport from "@components/scrollableViewport";

export const getStaticPaths = async () => {

    const paths = DeathNoteSeries.episodes.map((episode, id) => {
        return {
            params: { id: String(id) }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const index = context.params.id;
    const episode = DeathNoteSeries.episodes[index];

    return {
        props: {
            episode,
            index
        }
    }

}

interface Props {
    index: number;
    episode: AnimeEpisode;
}

export default function DeathNoteAnime({ episode, index }: Props) {

    return (<div>
        <Meta
            title={`Death Note EP ${(Number(index) + 1)} - ${episode.title} (Dublado) - DeathNoteBR`}
            keywords={"Death Note,Anime,Dublado,".concat(episode.title)}
            description={`Assista Death Note online Dublado - Episódio ${index + 1} (${episode.title}) - DeathNoteBR - Comunidade Brasileira - L vs Kira - Assistir Death Note gratuitamente`}
            type="video.episode"
            url={`https://deathnote.com.br/watch/${index}`}
            image="https://deathnote.com.br/img/death-note/series-cover.jpeg"
        >
            <meta property="og:video:series" content={`https://deathnote.com.br/watch/${index}`} />
            <meta property="og:video" content={episode.videoUrl} />
            <meta property="og:video:secure_url" content={episode.videoUrl} />
            <meta property="og:video:type" content="video/mp4" />
            <meta property="og:video:width" content={String(episode.resolution.width)} />
            <meta property="og:video:height" content={String(episode.resolution.height)} />

            <meta property="og:image:width" content="640" />
            <meta property="og:image:height" content="360" />
        </Meta>
        <ScrollableViewport>
            <div className={`${style.deathNote} ${style.pageBlock}`}>
                <Navbar title={episode.title} />
                <AnimePlayer currentEpisode={index} series={DeathNoteSeries} />
                <Padding>
                    <CommentSection
                        title={`${episode.title} - Death Note - DeathNoteBR`}
                        identifier={episode.title}
                    />
                </Padding>
            </div>
        </ScrollableViewport>
    </div>)

}