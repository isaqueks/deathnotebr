(this["webpackJsonpdeath-note-br"]=this["webpackJsonpdeath-note-br"]||[]).push([[0],[,,,,,,function(e,t,i){},,,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(1),o=i.n(a),n=i(7),c=i.n(n),s=(i(12),i(2)),r=i(3),d=(i(13),i(0));function l(e){var t=Object(s.a)({backgroundImage:'url("'.concat(e.url,'")'),backgroundSize:e.size||"cover",backgroundPosition:e.position||"center",backgroundRepeat:e.repeat||"no-repeat"},e.style);return e.x&&(t.backgroundPositionX=e.x),e.y&&(t.backgroundPositionY=e.y),Object(d.jsx)("div",{className:"divImage".concat("string"===typeof e.className?" ".concat(e.className):""),style:t,children:e.children})}i(15);var h=["url"];function m(e){var t=e.url,i=Object(r.a)(e,h);return Object(d.jsx)(l,Object(s.a)(Object(s.a)({className:"splashSection",url:t},i),{},{children:e.children}))}i(16);var p=["children","className","gradient"];function u(e){var t=e.children,i=e.className,a=e.gradient,o=Object(r.a)(e,p),n={background:a||"linear-gradient(110deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 18%, rgba(0,0,0,0.85) 40%, rgba(129,129,129,0.25) 90%, rgba(255,255,255,0) 100%)"};return Object(d.jsx)("div",Object(s.a)(Object(s.a)({className:"gradient".concat(i?" ".concat(i):"")},o),{},{style:n,children:t}))}var j=["value","top","bottom","left","right","children"];function g(e){var t=e.value,i=e.top,a=e.bottom,o=e.left,n=e.right,c=e.children,l=Object(r.a)(e,j),h={padding:t||"16px",paddingTop:i||"16px",paddingBottom:a||"16px",paddingLeft:o||"16px",paddingRight:n||"16px"};return Object(d.jsx)("div",Object(s.a)(Object(s.a)({style:h},l),{},{children:c}))}function b(e){var t={textAlign:e.type};return Object(d.jsx)("div",{style:t,children:e.children})}i(17);var v={left:"linear-gradient(90deg, rgba(255,255,255,0) 70%, rgba(16,16,16,1) 100%)",right:"linear-gradient(90deg, rgba(16,16,16,1) 0, rgba(255,255,255,0) 30%)"};function O(e){return Object(d.jsx)(l,{url:e.image,size:"cover",position:"right",className:"bigCharacter",children:Object(d.jsx)(u,{className:"bigCharacterGradient",gradient:v[e.mode],children:Object(d.jsxs)("div",{className:"bigCharacterDetails",children:[Object(d.jsx)(b,{type:"center",children:Object(d.jsx)("h1",{children:e.name})}),Object(d.jsx)("div",{className:"bigCharacterDescription",children:Object(d.jsx)("div",{className:"bigCharacterDescriptionWrapper",children:Object(d.jsx)(u,{gradient:"linear-gradient(0deg, rgba(16,16,16,1) 0%, rgba(16,16,16,1) 20%, rgba(16,16,16,0.65) 70%, rgba(16,16,16,0) 100%)",children:Object(d.jsx)(g,{className:"bigCharacterPadding",value:"24px",bottom:"48px",children:Object(d.jsx)(b,{type:e.mode,children:e.children})})})})})]})})})}var x=i(4);function f(e){var t=e.src.split("/"),i=t.pop();t.push("ph"),t.push(i);var o=t.join("/"),n=Object(a.useState)(!1),c=Object(x.a)(n,2),s=c[0],r=c[1],l=Object(a.useRef)(null),h=function(e){s||r(!0)};return Object(a.useEffect)((function(){!s&&l.current.naturalWidth&&h()})),Object(d.jsx)("img",{ref:l,src:s?e.src:o,loading:s?"lazy":"eager",alt:e.alt,onLoad:h})}i(18);function y(e){var t=e.mode||"left",i=e.center||!1,a=Object(d.jsx)("div",{className:"characterImage".concat(i?" characterCenter":""),children:Object(d.jsx)(f,{src:e.image,alt:"Death Note: ".concat(e.name)})},"img-side"),o=Object(d.jsx)("div",{className:"characterInfo",children:Object(d.jsxs)("div",{className:"characterInfoWrapper",children:[Object(d.jsx)("h2",{className:"h1 characterName",children:e.name}),Object(d.jsx)("div",{className:"characterDescription",children:e.children})]})},"info-side");return Object(d.jsxs)("div",{className:"characterView viewMode-".concat(t),children:[a,o]})}function N(e){return Object(a.useEffect)((function(){window.disq!==e.identifier&&(window.disq=e.identifier,function(){var t=function(){this.page.url=window.location.origin+window.location.pathname,this.page.identifier=e.identifier,this.page.title=e.title},i=window;if(i.disqus_config=t,i.DISQUS)i.DISQUS.reset({reload:!0,config:t});else{var a=document,o=a.createElement("script");o.src="https://deathnotebr.disqus.com/embed.js",o.async=!0,o.setAttribute("data-timestamp",String(new Date)),(a.head||a.body).appendChild(o)}}())})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{id:"disqus_thread","data-disq":e.title+e.identifier}),Object(d.jsxs)("noscript",{children:["Habilite JavaScript para carregar os ",Object(d.jsx)("a",{href:"https://disqus.com/?ref_noscript",children:"coment\xe1rios."})]})]})}i(19);function w(e){var t=o.a.Children.toArray(e.children);if(2!==t.length)throw console.error(t),new Error("DoubleSplit can only contain 2 childs!");var i=Object(x.a)(t,2),a=i[0],n=i[1];return Object(d.jsxs)("div",{className:"doubleSplit",children:[Object(d.jsx)("div",{className:"splitLeft",children:a}),Object(d.jsx)("div",{className:"splitRight",children:n})]})}i(20);function _(e){return Object(d.jsx)("div",{className:"viewportHeight",children:e.children})}i(21);var E=["children","cite"];function D(e){var t=e.children,i=e.cite,a=Object(r.a)(e,E);return Object(d.jsx)("p",Object(s.a)(Object(s.a)({className:"quote"},a),{},{children:Object(d.jsxs)("blockquote",{children:[t,Object(d.jsx)("cite",{children:i})]})}))}function U(e){var t=Date.now(),i=null,a=function(e,t){t<=.05?t=0:t>=.95&&(t=1);var i=t.toFixed(2);e.style.opacity!=i&&(e.style.opacity=i)};return function(o){var n=e.current;if(n&&!(Date.now()-t<50)){t=Date.now();var c=n.scrollTop;i||(i=Array.from(n.children));var s=i.sort((function(e,t){return Math.abs(e.offsetTop-c)>Math.abs(t.offsetTop-c)?1:-1})),r=Object(x.a)(s,2),d=r[0],l=r[1];if(l.offsetTop<d.offsetTop){var h=[l,d];d=h[0],l=h[1]}var m=Math.pow((c-d.offsetTop)/l.offsetHeight*2,1.7)/2;a(l,m=.1+.9*m),a(d,1-m)}}}i(22);var L=["index","snapStart"];function S(e){var t=e.index,i=(e.snapStart,Object(r.a)(e,L));return Object(d.jsx)("section",Object(s.a)(Object(s.a)({className:"scrollableSection"},i),{},{"data-index":t,children:e.children}))}i(23);function q(e){var t=o.a.Children.toArray(e.children),i=Object(a.useRef)(null),n=0;return Object(d.jsx)("div",{ref:i,className:"scrollableViewport",onScroll:U(i),children:t.map((function(e){return Object(d.jsx)(S,{index:n++,children:e},n)}))})}i(24);function A(e){return Object(d.jsx)("a",{href:"/watch/0",className:"watchBtn",title:"Assista Death Note dublado gratuitamente",children:e.children})}i(6);function k(){return Object(d.jsx)("div",{className:"deathNote",children:Object(d.jsxs)(q,{children:[Object(d.jsx)(m,{url:"/img/death-note/banner2.jpg",x:"200px",children:Object(d.jsx)(u,{children:Object(d.jsx)(g,{value:"32px",children:Object(d.jsxs)("div",{className:"seriesDescription",children:[Object(d.jsx)("h1",{children:"Death Note"}),Object(d.jsxs)("p",{className:"primaryParagraph",children:["Death Note \xe9 uma s\xe9rie de mang\xe1 escrita por Tsugumi Ohba e ilustrada por Takeshi Obata. ",Object(d.jsx)("br",{}),"Sua vers\xe3o em anime cont\xe9m 37 epis\xf3dios (1 temporada)."]}),Object(d.jsx)("em",{children:"Sinopse:"}),Object(d.jsx)("p",{children:"O jovem estudante Light Yagami achar um caderno com poderes sobrenaturais, chamado Death Note, no qual era poss\xedvel matar uma pessoa apenas escrevendo seu nome no caderno. Quando o descobre, Light tenta eliminar todos os criminosos do mundo e dar \xe0 sociedade um mundo livre do mal."}),Object(d.jsx)("em",{children:"O conte\xfado a seguir pode conter spoilers!"})]})})})}),Object(d.jsxs)(y,{name:"Assista Death Note",image:"/img/death-note/cover.jpg",center:!0,children:[Object(d.jsxs)("p",{children:["Voc\xea sabia que pode\xa0",Object(d.jsx)("a",{style:{color:"white"},href:"/watch/0",title:"Assista Death Note",children:"assistir Death Note gratuitamente"}),"\xa0em nosso site? Basta clicar no bot\xe3o abaixo: ",Object(d.jsx)("br",{})]}),Object(d.jsx)(b,{type:"center",children:Object(d.jsx)(A,{children:"Assista Death Note"})})]}),Object(d.jsx)(y,{name:"Light Yagami",image:"/img/death-note/light-yagami.png",mode:"right",children:Object(d.jsx)("p",{children:'Light Yagami (\u591c\u795e\u6708, Yagami Raito) \xe9 o protagonista de Death Note e a verdadeira identidade do assassino em massa KIRA. Um estudante que encontrou o Death Note de Ryuk e come\xe7ou a matar criminosos, dizendo que se tornaria o "deus do novo mundo", logo o povo o reconhece como entidade e o apelida de Kira (pron\xfancia japonesa da palavra inglesa "killer" - matador). Seu arqui-inimigo \xe9 o detetive L, que tenta capturar Kira.'})}),Object(d.jsx)(y,{name:"L Lawliet",image:"/img/death-note/l-lawliet.png",mode:"left",children:Object(d.jsx)("p",{children:"L (\u30a8\u30eb, Eru) \xe9 um detetive de renome mundial que assume o desafio de capturar o assassino em massa conhecido como Kira. Em sua investiga\xe7\xe3o, L come\xe7a a suspeitar de Light Yagami e tem como objetivo provar que Light \xe9 Kira."})}),Object(d.jsx)(y,{name:"Misa Amane",image:"/img/death-note/misa-amane.png",mode:"right",children:Object(d.jsx)("p",{children:'Misa Amane (\u5f25 \u6d77\u7802, Amane Misa) \xe9 uma \xeddolo japonesa famosa que tamb\xe9m \xe9 portadora de um Death Note. Misa ficou obcecada por Kira depois que ele matou o assassino de seus pais, pelo modo que se dedica a ajudar Light, fazendo se passar pelo "segundo Kira".'})}),Object(d.jsx)(y,{name:"Ryuk",image:"/img/death-note/ryuk.png",mode:"left",children:Object(d.jsx)("p",{children:"\xc9 o shinigami (deus da morte no folclore japon\xeas) entediado que indiretamente deu o Death Note a Light Yagami ap\xf3s jog\xe1-lo no mundo humano como uma tentativa de ter entretenimento e atua como o deuteragonista da s\xe9rie. Ap\xf3s seu primeiro encontro com Light, ele age apenas como um acompanhante de Light e um mero espectador de tudo o que acontece ao longo da s\xe9rie."})}),Object(d.jsx)(y,{name:"Near",image:"/img/death-note/near.png",mode:"right",children:Object(d.jsx)("p",{children:"Near (\u30cb\u30a2 Nia), \xe9 uma das crian\xe7as superdotadas do orfanato Wammy's House e o primeiro na linha de sucess\xe3o de L. Ele serve como o antagonista principal da s\xe9rie ap\xf3s a morte de L. Ao ser informado da morte de L, ele se ofereceu para pegar Kira junto de Mello, mas Mello se recusou."})}),Object(d.jsx)(y,{name:"Mello",image:"/img/death-note/mello.png",mode:"left",children:Object(d.jsx)("p",{children:"Mello (\u30e1 \u30ed, Mero ) \xe9 o mais velho dos dois sucessores de L, criado na Wammy's House , o orfanato de Watari para crian\xe7as superdotadas em Winchester, Inglaterra."})}),Object(d.jsx)("div",{className:"site-info page-block",children:Object(d.jsx)(_,{children:Object(d.jsxs)(w,{children:[Object(d.jsx)(O,{image:"/img/death-note/vs/l.jpg",mode:"left",name:"L Lawliet",children:Object(d.jsx)(D,{cite:"L Lawliet",children:"Estamos lidando com um indiv\xedduo [Kira] que tem um conceito muito infantil de certo e errado."})}),Object(d.jsx)(O,{image:"/img/death-note/vs/kira.jpg",mode:"right",name:"Kira",children:Object(d.jsx)(D,{cite:"Light Yagami",children:"Eu sou a justi\xe7a! Sou o homem que salvar\xe1 os oprimidos e serei o deus de um novo mundo, um mundo ideal! Aqueles que se op\xf5em a deus, esses sim s\xe3o malignos."})})]})})}),Object(d.jsx)("div",{className:"site-info page-block",children:Object(d.jsxs)(g,{value:"32px",bottom:"0",children:[Object(d.jsx)("h2",{id:"sobre",children:"Sobre o site"}),Object(d.jsxs)("div",{className:"siteDescription",children:[Object(d.jsxs)("p",{children:["DeathNote.com.br \xe9 um site feito por um f\xe3 de Death Note. O objetivo do site \xe9 trazer informa\xe7\xf5es sobre Death Note e seus personagens. O WebSite \xe9 open-source:\xa0",Object(d.jsx)("a",{className:"link",href:"https://github.com/isaqueks/deathnotebr",target:"_blank",rel:"noreferrer",children:"Veja o c\xf3digo fonte no GitHub!"})]}),Object(d.jsx)("p",{children:"DeathNote.com.br n\xe3o \xe9 um WebSite oficial de Death Note."})]}),Object(d.jsx)("h3",{className:"textCenter",children:"Abertura Death Note:"}),Object(d.jsx)("div",{className:"youtubeWrapper",children:Object(d.jsx)("iframe",{className:"youtubeOpening",src:"https://www.youtube.com/embed/8QE9cmfxx4s",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,loading:"lazy"})}),Object(d.jsx)("div",{className:"w-100",children:Object(d.jsx)(g,{value:"12px",children:Object(d.jsx)(b,{type:"center",children:Object(d.jsx)(A,{children:"Assistir Death Note"})})})}),Object(d.jsx)("p",{children:"E voc\xea, \xe9 Team L ou Team Kira? Deixe nos coment\xe1rios!"}),Object(d.jsx)("h3",{children:"Discuss\xe3o:"}),Object(d.jsx)(N,{identifier:"Death Note BR",title:"Death Note - Comunidade Brasileira"}),Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("span",{children:"Copyright \xa9 DeathNote.com.br - Isaque K. Schluter"})})]})})]})})}i(25);var C=o.a.createContext(null);function I(e){var t=e.navigationContext,i=e.children;return Object(d.jsx)(C.Provider,{value:t,children:i})}function R(e){var t=e.linkUrl,i=e.episode,o=e.episodeIndex,n=Object(a.useContext)(C);return Object(d.jsx)("a",{href:t,title:i.title,className:"episodeLink",onClick:function(e){return function(e){e.preventDefault(),n.setCurrentEpisodeIndex(o)}(e)},children:i.title})}function T(e){var t=e.series.episodes[e.currentEpisode||0],i=t.resolution.width,a=t.resolution.height,o={aspectRatio:"".concat(i,"/").concat(a)};return Object(d.jsxs)("section",{className:"animePlayer",children:[Object(d.jsxs)("div",{className:"videoRow",children:[Object(d.jsxs)("video",{controls:!0,src:t.videoUrl,style:o,children:[Object(d.jsx)("source",{src:t.videoUrl,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(d.jsx)("div",{className:"videoTitle",children:Object(d.jsx)("span",{children:t.title})}),Object(d.jsx)("div",{className:"videoDescription",children:Object(d.jsxs)("p",{children:["Assista o anime Death Note online gratuitamente. Assista Death Note dublado em alta resolu\xe7\xe3o e qualidade. ",Object(d.jsx)("br",{}),t.title]})})]}),Object(d.jsx)("div",{className:"episodeList",children:e.series.episodes.map((function(e,t){return Object(d.jsx)(R,{episodeIndex:t,linkUrl:"/watch/".concat(t),episode:e},t)}))})]})}i(26);var M=["url","children"];function K(e){var t=e.url,i=e.children,a=Object(r.a)(e,M),o=a.className||"";return delete a.className,Object(d.jsx)("a",Object(s.a)(Object(s.a)({href:t,className:"navLink ".concat(o)},a),{},{children:i}))}function P(e){return Object(d.jsxs)("nav",{className:"navBar",children:[Object(d.jsx)(K,{className:"logo",url:"/",children:Object(d.jsx)("img",{src:"/logo192.png",alt:"Logo"})}),Object(d.jsx)(K,{url:"/",children:"In\xedcio"}),Object(d.jsx)(K,{url:"/#sobre",children:"Sobre"}),Object(d.jsx)("h1",{className:"navTitle",children:e.title})]})}var B={title:"Death Note",episodes:[{title:"Epis\xf3dio 1 - Renascimento",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_1.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 2 - Confronto",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_2.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 3 - Negocia\xe7\xf5es",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_3.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 4 - Persegui\xe7\xe3o",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_4.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 5 - T\xe1ticas",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_5.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 6 - Rasgo",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_6.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 7 - C\xe9u nublado",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_7.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 8 - Ofusca\xe7\xe3o",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_8.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 9 - Contato",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_9.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 10 - D\xfavida",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_10.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 11 - Assalto",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_11.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 12 - Amor",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_12.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 13 - Confiss\xf5es",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_13.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 14 - Amigo",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_14.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 15 - Aposta",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_15.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 16 - Decis\xe3o",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_16.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 17 - Execu\xe7\xe3o",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_17.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 18 - Aliado",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_18.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 19 - Matsuda",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_19.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 20 - Artif\xedcio",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_20.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 21 - Performance",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_21.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 22 - Dire\xe7\xe3o",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_22.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 23 - Frensei",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_23.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 24 - Ressurrei\xe7\xe3o",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_24.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 25 - Sil\xeancio",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_25.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 26 - Renova\xe7\xe3o",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_26.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 27 - Abdu\xe7\xe3o",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_16.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 28 - Impaci\xeancia",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_28.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 29 - Pai",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_29.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 30 - Justi\xe7a",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_30.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 31 - Transfer\xeancia",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_31.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 32 - Sele\xe7\xe3o",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_32.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 33 - Desprezo",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_33.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 34 - Vigil\xe2ncia",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_34.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 35 - Mal\xedcia",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_35.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 36 - 1.28",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_36.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 37 - Novo Mundo",videoUrl:"https://animecontentdelivery.nyc3.digitaloceanspaces.com/death_note_36.mp4",resolution:{width:1920,height:1080}}]};function W(e){var t,i,o,n,c=Object(a.useState)(parseInt((null===(t=window.location)||void 0===t||null===(i=t.href)||void 0===i||null===(o=i.split("/"))||void 0===o?void 0:o.pop().replace("html",""))||"0")||0),s=Object(x.a)(c,2),r=s[0],l=s[1],h=B.episodes[r];return n=h,document.title="".concat(n.title," (Dublado) - Death Note - DeathNoteBR"),Object(d.jsx)("div",{className:"deathNote deathNoteAnime page-block",children:Object(d.jsxs)(I,{navigationContext:{currentEpisodeIndex:r,setCurrentEpisodeIndex:function(e){return function(e){var t;return null===(t=window.history)||void 0===t||t.pushState(null,null,"/watch/".concat(e)),l(e)}(e)}},children:[Object(d.jsx)(P,{title:h.title}),Object(d.jsx)(T,{currentEpisode:r,series:B}),Object(d.jsx)(g,{children:Object(d.jsx)(N,{title:"".concat(h.title," - Death Note - DeathNoteBR"),identifier:h.title})})]})})}var Y,z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,28)).then((function(t){var i=t.getCLS,a=t.getFID,o=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),a(e),o(e),n(e),c(e)}))},F=null===(Y=window)||void 0===Y?void 0:Y.location.pathname;c.a.hydrate(Object(d.jsx)(o.a.StrictMode,{children:F.includes("/watch/")?Object(d.jsx)(W,{}):Object(d.jsx)(k,{})}),document.getElementById("root")),z()}],[[27,1,2]]]);
//# sourceMappingURL=main.1161b25a.chunk.js.map