import AnimePlayer from "../../../components/animePlayer";
import CommentSection from "../../../components/commentSection";
import Navbar from "../../../components/navbar";
import Padding from "../../../components/padding";
import DeathNoteSeries from "../../../ts/series/deathNote";
import '../deathNote.css';

const episode = parseInt(window.location.href.split('/').pop()||'0')||0;

export default function DeathNoteAnime(props) {

    return <div className="deathNote deathNoteAnime page-block">
        <Navbar title={DeathNoteSeries.episodes[episode].title} />
        <AnimePlayer currentEpisode={episode} series={DeathNoteSeries} />
        <Padding>
            <CommentSection />
        </Padding>
    </div>

}