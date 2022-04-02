import AnimePlayer from "@components/animePlayer";
import CommentSection from "@components/commentSection";
import Navbar from "@components/navbar";
import Padding from "@components/padding";
import DeathNoteSeries from "@ts/series/deathNote";
import style from '@styles/DeathNote.module.css';
import Meta from "@components/Meta";
import { AnimeEpisode } from "@ts/series";

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
            title={`Death Note EP ${index+1} - ${episode.title} (Dublado) - DeathNoteBR`}
            keywords={"Death Note,Anime,Dublado,".concat(episode.title)}
            description={`Assista Death Note online Dublado - Episódio ${index+1} (${episode.title}) - DeathNoteBR - Comunidade Brasileira - L vs Kira - Assistir Death Note gratuitamente`} 
            type="video.episode" 
            url={`https://deathnote.com.br/watch/${index}`}
        >
            <meta property="og:video:series" content="Death Note" />
        </Meta>
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
    </div>)

}