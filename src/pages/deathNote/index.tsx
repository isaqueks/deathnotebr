import Banner from "../../components/banner";
import BigCharacterView from "../../components/bigCharacterView";
import CharacterView from "../../components/characterView";
import CommentSection from "../../components/commentSection";
import DivImage from "../../components/divImage";
import DoubleSplit from "../../components/doubleSplit";
import FullViewportHeight from "../../components/fullViewportHeight";
import Gradient from "../../components/gradient";
import Padding from "../../components/padding";
import Quote from "../../components/quote";
import ScrollableViewport from "../../components/scrollableViewport";
import './deathNote.css';

export default function DeathNote() {
    return (
        <div className="deathNote">
            <ScrollableViewport>

                <Banner url="/img/death-note/banner2.jpg" x="200px">
                    <Gradient>
                        <Padding value="32px">
                            <div className="seriesDescription">
                                <h1>Death Note</h1>
                                <p className="primaryParagraph">
                                    Death Note é uma série de mangá escrita por
                                    Tsugumi Ohba e ilustrada por Takeshi Obata. <br />
                                    Sua versão em anime contém 37 episódios (1 temporada).
                                </p>
                                <em>Sinopse:</em>
                                <p>
                                    O jovem estudante Light Yagami achar um caderno
                                    com poderes sobrenaturais, chamado Death Note,
                                    no qual era possível matar uma pessoa apenas
                                    escrevendo seu nome no caderno. Quando o descobre,
                                    Light tenta eliminar todos os criminosos do mundo e
                                    dar à sociedade um mundo livre do mal.
                                </p>
                                <em>
                                    O conteúdo a seguir pode conter spoilers!
                                </em>
                            </div>
                        </Padding>
                    </Gradient>
                </Banner>

                <CharacterView name="Light Yagami" image="/img/death-note/light-yagami.png">
                    <p>
                        Light Yagami (夜神月, Yagami Raito) é o protagonista
                        de Death Note e a verdadeira identidade do assassino
                        em massa KIRA. Um estudante que encontrou o Death
                        Note de Ryuk e começou a matar criminosos, dizendo
                        que se tornaria o "deus do novo mundo", logo o povo o
                        reconhece como entidade e o apelida de Kira (pronúncia
                        japonesa da palavra inglesa "killer" - matador). Seu
                        arqui-inimigo é o detetive L, que tenta capturar Kira.
                    </p>
                </CharacterView>

                <CharacterView name="L Lawliet" image="/img/death-note/l-lawliet.png" mode="right">
                    <p>
                        L (エル, Eru) é um detetive de renome mundial que assume o
                        desafio de capturar o assassino em massa conhecido como Kira.
                        Em sua investigação, L começa a suspeitar de Light Yagami e tem
                        como objetivo provar que Light é Kira.
                    </p>
                </CharacterView>

                <CharacterView name="Misa Amane" image="/img/death-note/misa-amane.png">
                    <p>
                        Misa Amane (弥 海砂, Amane Misa) é uma ídolo japonesa famosa
                        que também é portadora de um Death Note. Misa ficou obcecada
                        por Kira depois que ele matou o assassino de seus pais, pelo
                        modo que se dedica a ajudar Light, fazendo se passar pelo
                        "segundo Kira".
                    </p>
                </CharacterView>

                <CharacterView name="Ryuk" image="/img/death-note/ryuk.png" mode="right">
                    <p>
                        É o shinigami (deus da morte no folclore japonês) entediado
                        que indiretamente deu o Death Note a Light Yagami após jogá-lo
                        no mundo humano como uma tentativa de ter entretenimento e atua
                        como o deuteragonista da série. Após seu primeiro encontro com Light,
                        ele age apenas como um acompanhante de Light e um mero espectador
                        de tudo o que acontece ao longo da série.
                    </p>
                </CharacterView>

                <CharacterView name="Near" image="/img/death-note/near.png">
                    <p>
                        Near (ニア Nia),
                        é uma das crianças superdotadas do orfanato Wammy's House e
                        o primeiro na linha de sucessão de L. Ele serve como o
                        antagonista principal da série após a morte de L. Ao ser
                        informado da morte de L, ele se ofereceu para pegar Kira
                        junto de Mello, mas Mello se recusou.
                    </p>
                </CharacterView>

                <CharacterView name="Mello" image="/img/death-note/mello.png" mode="right">
                    <p>
                        Mello (メ ロ, Mero ) é o mais velho dos dois sucessores
                        de L, criado na Wammy's House , o orfanato de Watari para
                        crianças superdotadas em Winchester, Inglaterra.
                    </p>
                </CharacterView>


                <div className="site-info page-block">
                    <FullViewportHeight>
                        <DoubleSplit>
                            <BigCharacterView
                                image="/img/death-note/vs/l.jpg"
                                mode="left"
                                name="L Lawliet"
                            >
                                <Quote cite="L Lawliet">
                                    Estamos lidando com um 
                                    indivíduo [Kira] que tem
                                    um conceito muito infantil
                                    de certo e errado.
                                </Quote>
                            </BigCharacterView>

                            <BigCharacterView
                                image="/img/death-note/vs/kira.jpg"
                                mode="right"
                                name="Kira"
                            >
                                <Quote cite="Light Yagami">
                                    Eu sou a justiça!
                                    Sou o homem que salvará os
                                    oprimidos e serei o deus de
                                    um novo mundo, um mundo ideal!
                                    Aqueles que se opõem a deus,
                                    esses sim são malignos.
                                </Quote>
                            </BigCharacterView>

                        </DoubleSplit>
                    </FullViewportHeight>
                </div>

                <div className="site-info page-block">
                    <Padding value="32px" bottom="0">
                        <h2>Sobre o site</h2>
                        <div className="siteDescription">
                            <p>
                                DeathNote.com.br é um site feito por Isaque K. Schluter,
                                um fã de Death Note. O objetivo do site é trazer informações
                                sobre Death Note e seus personagens.
                                O WebSite é open-source:&nbsp;
                                <a
                                    className="link"
                                    href="https://github.com/isaqueks/deathnotebr"
                                    target="_blank"
                                    rel="noreferrer"
                                >Veja o código fonte no GitHub!</a>

                            </p>
                            <p>
                                DeathNote.com.br não é um WebSite oficial de Death Note.
                            </p>
                        </div>
                        <h3 className="textCenter">
                            Abertura Death Note:
                        </h3>
                        <div className="youtubeWrapper">
                            <iframe
                                className="youtubeOpening"
                                // width="560" 
                                // height="315" 
                                src="https://www.youtube.com/embed/8QE9cmfxx4s"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={true}>
                            </iframe>
                        </div>
                        <p>
                            E você, é Team L ou Team Kira?
                            Deixe nos comentários!
                        </p>
                        <h3>Discussão:</h3>
                        <CommentSection />
                        <footer className="footer">
                            <span>
                                Copyright © DeathNote.com.br - Isaque K. Schluter
                            </span>
                        </footer>
                    </Padding>
                </div>

            </ScrollableViewport>
        </div>
    );
}