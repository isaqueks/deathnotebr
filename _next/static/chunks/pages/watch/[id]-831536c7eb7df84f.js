(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{7527:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/watch/[id]",function(){return o(2789)}])},2789:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return fe},default:function(){return ve}});var i=o(5893),n=o(1664),r=o(3555),a=o.n(r);function s(e){var t=e.linkUrl,o=e.episode;e.episodeIndex;return(0,i.jsx)(n.default,{href:t,children:(0,i.jsx)("a",{title:o.title,className:a().episodeLink,children:o.title})})}var c=o(8575),l=o.n(c);function d(e){return new Audio(e)}var u=o(7294),p=o(5263),m=o.n(p);function h(e){var t=e.time,o=e.subtitle,n="";if(null===o||void 0===o?void 0:o.isParsed){var r=o.getTextAt(1e3*t);r&&(n=r.text)}var a={marginBottom:e.bottom};return(0,i.jsx)("div",{className:m().subtitle,children:(0,i.jsx)("div",{className:m().text,children:(0,i.jsx)("span",{style:a,children:n})})})}var f=o(2430),v=o.n(f);function g(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function b(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function _(e){var t=e.src,o=e.children,n=b(e,["src","children"]),r={backgroundImage:'url("'.concat(t,'")'),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",width:"100%",height:"100%",cursor:e.cursor||"pointer"};return(0,i.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},i=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),i.forEach((function(t){g(e,t,o[t])}))}return e}({style:r},n,{children:o}))}function y(e){var t=e.children,o={padding:e.value};return(0,i.jsx)("div",{style:o,children:t})}var x=o(3218),w=o.n(x);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,i=new Array(t);o<t;o++)i[o]=e[o];return i}function C(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e){var t,o=null===(t=e.options.find((function(t){return t.value==e.value})))||void 0===t?void 0:t.text;return(0,i.jsxs)("div",{className:w().field,children:[(0,i.jsx)("div",{className:w().fieldTitle,children:e.title}),(0,i.jsx)("select",{className:w().input,defaultValue:o,onChange:function(t){var o,i=t.target.value,n=null===(o=e.options.find((function(e){return e.text==i})))||void 0===o?void 0:o.value;console.log(n),e.onChange(n)},children:e.options.map((function(e){return(0,i.jsx)("option",{value:e.text,children:e.text},e.text)}))})]})}function P(e){var t=[{value:null,text:"Sem legenda"}].concat(C(e.subtitles.map((function(e){return{value:e,text:e.name}}))));return(0,i.jsxs)("div",{className:"".concat(w().configDialog," ").concat(e.mobile?w().mobile:""),onClick:function(e){return e.stopPropagation()},children:[e.mobile&&(0,i.jsx)("div",{className:w().header,children:(0,i.jsx)("div",{className:w().closeBtn,onClick:function(t){return e.onClose()}})}),(0,i.jsx)(k,{onChange:function(t){return e.onChangeSpeed(t)},title:"Velocidade",options:[{value:1,text:"1x"},{value:1.25,text:"1.25x"},{value:1.5,text:"1.5x"},{value:1.75,text:"1.75x"},{value:2,text:"2x"}],value:e.currentSpeed}),(0,i.jsx)(k,{onChange:function(t){return e.onSelectSubtitle(t)},title:"Legenda",options:t,value:e.selectedSubtitle})]})}var N=o(9780),S=o.n(N);function E(e){return(0,i.jsx)("div",{className:S().loadingAnimation})}var T=o(5693),L=o.n(T);function O(e){var t=e.isPlaying,o=e.onPlay,n=e.onPause;return(0,i.jsx)("div",{className:"".concat(L().playPause," ").concat(t?L().playing:L().paused),onClick:t?n:o,children:(0,i.jsx)("div",{className:"".concat(L().playPauseIcon," ").concat(t?L().playing:L().paused)})})}var D=o(9322),U=o.n(D);function A(e){var t="rgb(200, 200, 200)",o=e.currentTime/e.duration*100,n={background:"linear-gradient(to right, ".concat("red"," 0%, ").concat("red"," ").concat(o,"%, ").concat(t," ").concat(o,"%, ").concat(t," 100%)")};return(0,i.jsx)("div",{className:U().trackBar,children:(0,i.jsx)("input",{className:U().trackBarControl,type:"range",min:0,max:e.duration,value:e.currentTime,style:n,onChange:function(t){return e.onSeek(parseInt(t.target.value))}})})}var M=o(8145),q=o.n(M);function B(e){var t="white",o="rgba(180, 180, 180, 0.6)",n=e.current,r={background:"linear-gradient(to right, ".concat(t," 0%, ").concat(t," ").concat(n,"%, ").concat(o," ").concat(n,"%, ").concat(o," 100%)")};return(0,i.jsxs)("div",{className:q().volumeControl,children:[(0,i.jsx)(y,{value:"6px",children:(0,i.jsx)(_,{src:"/static/img/audio.png"})}),(0,i.jsx)("div",{className:q().trackContainer,children:(0,i.jsx)("input",{className:q().volumeTrackBarControl,type:"range",min:0,max:100,value:e.current,style:r,onChange:function(t){return e.onSet(parseInt(t.target.value))}})})]})}function R(e){var t=e.isPlaying,o=e.isLoading,n=e.duration,r=e.currentTime,a=e.volume,s=e.speed,c=e.subtitles,l=e.selectedSubtitle,d=e.mobile,p=e.onPlay,m=e.onPause,h=e.onSeek,f=e.onSetVolume,g=e.onChangeFullscreen,b=e.onChangeSpeed,x=e.onSelectSubtitle,w=e.onBannerClick,j=(0,u.useState)(!1),C=j[0],k=j[1],N={opacity:e.visible||C||o?1:0},S=function(e){var t=Math.floor(e/60),o=Math.floor(e%60);return"".concat(t,":").concat(String(o).padStart(2,"0"))};return(0,i.jsxs)("div",{className:v().videoControls.concat(d?" "+v().videoControlsMobile:""),style:N,children:[(0,i.jsx)("div",{className:v().screenControls,onClick:function(){return function(){if(C)return k(!1);w()}()},children:C?(0,i.jsx)(P,{selectedSubtitle:l,subtitles:c,currentSpeed:s,onSelectSubtitle:function(e){return x(e)},onChangeSpeed:function(e){return b(e)},mobile:d,onClose:function(){return k(!1)}}):(0,i.jsx)("div",{className:v().bannerPlayPause,children:o?(0,i.jsx)(E,{}):(0,i.jsx)(O,{isPlaying:t,onPlay:function(){return p()},onPause:function(){return m()}})})}),(0,i.jsxs)("div",{className:v().videoTiming,children:[(0,i.jsx)("div",{className:v().currentTime,children:S(r)}),(0,i.jsx)("div",{className:v().totalTime,children:S(n)})]}),(0,i.jsxs)("div",{className:v().downControls.concat(d?" "+v().downControlsMobile:""),children:[(0,i.jsx)(A,{duration:n,currentTime:r,onSeek:function(e){return h(e)}}),(0,i.jsxs)("div",{className:v().barControls.concat(d?" "+v().barControlsMobile:""),children:[(0,i.jsxs)("div",{className:v().barControlsLeft,children:[(0,i.jsx)(y,{value:"6px",children:(0,i.jsx)(O,{isPlaying:t,onPlay:function(){return p()},onPause:function(){return m()}})}),(0,i.jsx)(B,{current:a,onSet:function(e){return f(e)}})]}),(0,i.jsx)("div",{}),(0,i.jsxs)("div",{className:v().barControlsRight,children:[(0,i.jsx)(y,{value:"2px 6px 2px 0px",children:(0,i.jsx)(_,{src:"/static/img/gear.png",onClick:function(){return k(!C)}})}),(0,i.jsx)(y,{value:"2px 0px 2px 6px",children:(0,i.jsx)(_,{src:"/static/img/fullscreen.png",onClick:function(){return g()}})})]})]})]})]})}function V(e){var t,o,n,r,a=(0,u.useRef)(null),s=(0,u.useRef)(null),c=(0,u.useState)(!0),p=c[0],m=c[1],f=(0,u.useState)(!0),v=f[0],g=f[1],b=(0,u.useState)((null===a||void 0===a||null===(t=a.current)||void 0===t?void 0:t.currentTime)||0),_=b[0],y=b[1],x=(0,u.useState)(!0),w=x[0],j=x[1],C=(0,u.useState)(null),k=C[0],P=C[1],N=(0,u.useState)(1),S=N[0],E=N[1],T=(0,u.useState)(!1),L=T[0],O=T[1],D=(0,u.useState)(e.src),U=D[0],A=D[1],M=(0,u.useState)(d((null===(o=e.tracks)||void 0===o||null===(n=o[0])||void 0===n?void 0:n.src)||e.src)),q=M[0],B=(M[1],(0,u.useState)(100*((null===q||void 0===q?void 0:q.volume)||1))),V=B[0],I=B[1],z=(0,u.useState)({timeout:null})[0],K=function(){j(!0),z.timeout&&clearTimeout(z.timeout),z.timeout=setTimeout((function(){return j(!1)}),2500)},F=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=a.current;q.pause(),!e&&t.paused||(t.pause(),K(),m(!0))},G=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=a.current;q.play(),(e||t.paused)&&(t.play(),K(),m(!1))},Y=function(e){a.current.currentTime=e,y(e)},Z=function(){document.fullscreenElement?document.exitFullscreen():s.current.requestFullscreen()};return(0,u.useEffect)((function(){var t=function(){var e,t,o,i=!1;return o=(null===window||void 0===window||null===(e=window.navigator)||void 0===e?void 0:e.userAgent)||(null===window||void 0===window||null===(t=window.navigator)||void 0===t?void 0:t.vendor)||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0,4)))&&(i=!0),i}();L!==t&&O(t);var o,i=setInterval((function(){var t,o;((null===a||void 0===a?void 0:a.current)&&q&&!p&&Math.abs(q.currentTime-a.current.currentTime)>.5&&(q.currentTime=a.current.currentTime),_!==(null===a||void 0===a||null===(t=a.current)||void 0===t?void 0:t.currentTime))&&y((null===a||void 0===a||null===(o=a.current)||void 0===o?void 0:o.currentTime)||0);e.src!==U&&(F(),A(e.src),Y(0))}),250);L&&(o=function(){var e=!(0===window.orientation||180===window.orientation);console.log({horizontal:e}),e?document.fullscreenElement||Z():document.fullscreenElement&&Z()},window.addEventListener("orientationchange",o));var n=setInterval((function(){var e,t=((null===a||void 0===a||null===(e=a.current)||void 0===e?void 0:e.readyState)||0)<4;t!==v&&g(t)}),250);return function(){clearInterval(i),clearInterval(n),o&&window.removeEventListener("orientationchange",o)}})),(0,i.jsxs)("div",{ref:s,className:"".concat(l().videoPlayer," ").concat(L?l().mobile:""),onMouseMove:function(){return K()},children:[(0,i.jsx)("video",{ref:a,className:l().videoElement,onPause:function(){return F(!0)},onPlay:function(){return G(!0)},onStalled:function(){return!1},controls:!1,muted:!0,children:(0,i.jsx)("source",{type:e.type,src:U})}),(0,i.jsx)(h,{bottom:w||p?"70px":"15px",subtitle:k,time:_}),(0,i.jsx)("div",{className:l().controlsWrapper,children:(0,i.jsx)(R,{mobile:L,isLoading:v,isPlaying:!p,duration:(null===a||void 0===a||null===(r=a.current)||void 0===r?void 0:r.duration)||0,currentTime:_,volume:V,visible:p||w,speed:S,selectedSubtitle:k,subtitles:e.subtitles,onSeek:function(e){return Y(e)},onSetVolume:function(e){return function(e){var t=e/100;Math.abs(q.volume-t)<=.01||(q.volume=t,I(e))}(e)},onPlay:function(){return G()},onPause:function(){return F()},onChangeFullscreen:function(){return Z()},onChangeSpeed:function(e){return t=e,a.current.playbackRate=t,q.playbackRate=t,void E(t);var t},onSelectSubtitle:function(e){return(t=e).parse(),void P(t);var t},onBannerClick:function(){return function(){if(p)G();else{if(L)return w?F():j(!0);F()}}()}})})]},U)}var I=o(4051),z=o.n(I);var K=function e(t,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.src=t,this.language=o,this.name=i},F=o(7680);function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,i=new Array(t);o<t;o++)i[o]=e[o];return i}function Y(e,t,o,i,n,r,a){try{var s=e[r](a),c=s.value}catch(l){return void o(l)}s.done?t(c):Promise.resolve(c).then(i,n)}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}function J(e,t){return!t||"object"!==$(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e,t){return W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},W(e,t)}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i,n,r=[],a=!0,s=!1;try{for(o=o.call(e);!(a=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(c){s=!0,n=c}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return G(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function ee(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,i=X(e);if(t){var n=X(this).constructor;o=Reflect.construct(i,arguments,n)}else o=i.apply(this,arguments);return J(this,o)}}var te=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(o,e);var t=ee(o);function o(){return Z(this,o),t.apply(this,arguments)}var i,n,r,a=o.prototype;return a.parseTime=function(e){var t=e.includes(".")?".":",",o=Q(e.split(":"),3),i=o[0],n=o[1],r=Q(o[2].split(t),2),a=r[0],s=r[1];return 3600*Number(i)*1e3+60*Number(n)*1e3+1e3*Number(a)+Number(s)},a.removeTags=function(e){return e.replace(/<[^>]*>/g,"")},a.parse=function(){var e,t=this;return(e=z().mark((function e(){var o,i,n,r;return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.src);case 2:if(!((o=e.sent).status<200||o.status>299)){e.next=5;break}throw new Error("Failed to fetch subtitle: ".concat(o.status));case 5:return e.next=7,o.text();case 7:i=e.sent,n=new F.Z,r=n.fromSrt(i).map((function(e){var o=t.parseTime(e.startTime),i=t.parseTime(e.endTime);return{id:e.id,startTime:o,endTime:i,text:t.removeTags(e.text)}})),t.parsed=r;case 11:case"end":return e.stop()}}),e)})),function(){var t=this,o=arguments;return new Promise((function(i,n){var r=e.apply(t,o);function a(e){Y(r,i,n,a,s,"next",e)}function s(e){Y(r,i,n,a,s,"throw",e)}a(void 0)}))})()},a.getTextAt=function(e){if(!this.parsed)throw new Error("Subtitle not parsed yet");var t=this.parsed.find((function(t){return t.startTime<=e&&t.endTime>=e}));return t?{text:t.text,end:t.endTime,start:t.startTime}:null},i=o,(n=[{key:"isParsed",get:function(){return!!this.parsed}}])&&H(i.prototype,n),r&&H(i,r),o}(K);function oe(e){var t=e.series.episodes[e.currentEpisode||0],o=t.resolution.width,n=t.resolution.height,r={aspectRatio:"".concat(o,"/").concat(n)},c=[new te("https://static.deathnote.com.br/subtitles/E".concat(+e.currentEpisode+1,".srt"),"pt-BR","Portugu\xeas (Brasil)")];return console.log(t),(0,i.jsxs)("section",{className:a().animePlayer,children:[(0,i.jsxs)("div",{className:a().videoRow,children:[(0,i.jsx)("div",{style:r,children:(0,i.jsx)(V,{src:t.videoUrl,type:"video/mp4",tracks:[],subtitles:c})}),(0,i.jsx)("div",{className:a().videoTitle,children:(0,i.jsx)("span",{children:t.title})}),(0,i.jsxs)("div",{className:a().videoDescription,children:[(0,i.jsx)("p",{children:t.description}),(0,i.jsxs)("p",{children:["Assista o anime Death Note online gratuitamente. Assista Death Note dublado em alta resolu\xe7\xe3o e qualidade. ",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:t.title})]})]})]}),(0,i.jsx)("div",{className:a().episodeList,children:e.series.episodes.map((function(e,t){return(0,i.jsx)(s,{episodeIndex:t,linkUrl:"/watch/".concat(t),episode:e},t)}))})]})}var ie=o(8191),ne=o(1982),re=o.n(ne);function ae(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function se(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function ce(e){var t=e.url,o=e.children,n=se(e,["url","children"]),r=n.className||"";return delete n.className,(0,i.jsx)("a",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},i=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),i.forEach((function(t){ae(e,t,o[t])}))}return e}({href:t,className:re().navLink.concat(" "+r)},n,{children:o}))}function le(e){return(0,i.jsxs)("nav",{className:re().navBar,children:[(0,i.jsx)(ce,{className:re().logo,url:"/",children:(0,i.jsx)("img",{src:"/logo192.png",alt:"Logo"})}),(0,i.jsx)(ce,{url:"/",children:"In\xedcio"}),(0,i.jsx)(ce,{url:"/#sobre",children:"Sobre"}),(0,i.jsx)("h1",{className:re().navTitle,children:e.title})]})}var de=o(2765),ue={title:"Death Note",episodes:[{title:"Epis\xf3dio 1 - Renascimento",description:"O brilhante, mas entediado aluno do ensino m\xe9dio Light Yagami descobre de repente que tem o poder da vida e da morte em suas m\xe3os.",videoUrl:"https://static.deathnote.com.br/death_note_1.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 2 - Confronto",description:"Enquanto os criminosos do mundo continuam morrendo, L se re\xfane por computador com os representantes de v\xe1rias na\xe7\xf5es.",videoUrl:"https://static.deathnote.com.br/death_note_2.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 3 - Negocia\xe7\xf5es",description:"Ryuk, o Shinigami, ou deus da morte, que mandou a Death Note para o mundo humano, alerta Light de que algu\xe9m est\xe1 atr\xe1s dele.",videoUrl:"https://static.deathnote.com.br/death_note_3.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 4 - Persegui\xe7\xe3o",description:"Light \u2013 agora conhecido no mundo como Kira \u2013 testa a Death Note para compreender o seu poder e mata seis presos de v\xe1rias formas...",videoUrl:"https://static.deathnote.com.br/death_note_4.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 5 - T\xe1ticas",description:"Soichiro Yagami exige um encontro pessoalmente com L quando descobre que L trouxe agentes do FBI secretamente para o Jap\xe3o.",videoUrl:"https://static.deathnote.com.br/death_note_5.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 6 - Rasgo",description:"Light encontra uma mulher no Departamento de Pol\xedcia com uma mensagem urgente para a for\xe7a-tarefa de Kira.",videoUrl:"https://static.deathnote.com.br/death_note_6.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 7 - C\xe9u nublado",description:"Light usa a Death Note para tentar se livrar da mulher que poderia captur\xe1-lo, e fica chocado quando isso n\xe3o funciona.",videoUrl:"https://static.deathnote.com.br/death_note_7.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 8 - Ofusca\xe7\xe3o",description:"L insiste em colocar escutas e c\xe2meras nas casas do Chefe de Pol\xedtica Yagami e do Delegado Kitamura...",videoUrl:"https://static.deathnote.com.br/death_note_8.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 9 - Contato",description:"Os assassinatos continuam e L come\xe7a a suspeitar do comportamento perfeito de Light e decide investig\xe1-lo por conta pr\xf3pria.",videoUrl:"https://static.deathnote.com.br/death_note_9.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 10 - D\xfavida",description:"A suspeita de L em rela\xe7\xe3o a Light aumenta, fazendo com que ele convide Light para a investiga\xe7\xe3o.",videoUrl:"https://static.deathnote.com.br/death_note_10.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 11 - Assalto",description:"Como previsto nas fitas enviadas para a Sakura TV, os comentadores e \xe2ncoras de not\xedcias que expressaram d\xfavida sobre Kira morrem um a um.",videoUrl:"https://static.deathnote.com.br/death_note_11.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 12 - Amor",description:'Com um segundo Kira agora \xe0 solta, L pede a Light para ingressar na for\xe7a-tarefa e se comportar como Kira real a fim de descobrir quem \xe9 a "c\xf3pia".',videoUrl:"https://static.deathnote.com.br/death_note_12.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 13 - Confiss\xf5es",description:"Light vai para Aoyama para descobrir a identidade do segundo Kira antes de L suspeitar ainda mais.",videoUrl:"https://static.deathnote.com.br/death_note_13.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 14 - Amigo",description:"Light e Misa mostram um para o outro suas Death Notes, e Light pede a Misa para que seu shinigami Rem se livrar de L.",videoUrl:"https://static.deathnote.com.br/death_note_14.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 15 - Aposta",description:"As evid\xeancias apontam para Misa Amane como o segundo Kira.",videoUrl:"https://static.deathnote.com.br/death_note_15.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 16 - Decis\xe3o",description:"Misa est\xe1 em confinamento, embora suas mem\xf3rias da Death Note tenham sido totalmente apagadas.",videoUrl:"https://static.deathnote.com.br/death_note_16.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 17 - Execu\xe7\xe3o",description:"Depois de 50 dias de confinamento, as mortes continuam, e Misa e Light s\xe3o soltos.",videoUrl:"https://static.deathnote.com.br/death_note_17.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 18 - Aliado",description:"Embora L ainda tenha suspeitas, Light e Misa, com suas mem\xf3rias de ser Kira apagadas, retornam para o quartel general...",videoUrl:"https://static.deathnote.com.br/death_note_18.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 19 - Matsuda",description:"Matsuda, o membro da for\xe7a-tarefa designado para vigiar Misa, est\xe1 ansioso para se destacar...",videoUrl:"https://static.deathnote.com.br/death_note_19.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 20 - Artif\xedcio",description:"A equipe de L descobre que o Yotsuba Group se re\xfane em segredo para discutir a elimina\xe7\xe3o de pessoas que s\xe3o problem\xe1ticas para sua empresa...",videoUrl:"https://static.deathnote.com.br/death_note_20.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 21 - Performance",description:"O Yotsuba Group contrata Eraldo Coil para descobrir a identidade de L.",videoUrl:"https://static.deathnote.com.br/death_note_21.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 22 - Dire\xe7\xe3o",description:"Misa tem sucesso ao reduzir os suspeitos de Kira no Yotsuba Group a um: Higuchi.",videoUrl:"https://static.deathnote.com.br/death_note_22.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 23 - Frensei",description:"Higuchi do Yotsuba Group tenta matar Matsuda da for\xe7a-tarefa, e fica surpreso quando ele n\xe3o morre ap\xf3s 40 segundos.",videoUrl:"https://static.deathnote.com.br/death_note_23.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 24 - Ressurrei\xe7\xe3o",description:"Higuchi \xe9 capturado e conta aos investigadores sobre a Death Note.",videoUrl:"https://static.deathnote.com.br/death_note_24.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 25 - Sil\xeancio",description:"Light, com sua mem\xf3ria recuperada, diz a Misa para come\xe7ar a matar depois da morte de Higuchi.",videoUrl:"https://static.deathnote.com.br/death_note_25.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 26 - Renova\xe7\xe3o",description:"Light tirou todos de seu caminho e est\xe1 mais pr\xf3ximo de atingir seu mundo perfeito.",videoUrl:"https://static.deathnote.com.br/death_note_26.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 27 - Abdu\xe7\xe3o",description:"Um novo investigador avan\xe7a \u2013 Near, uma figura central na SPK, uma organiza\xe7\xe3o que est\xe1 tentando pegar Kira sem contar com L.",videoUrl:"https://static.deathnote.com.br/death_note_16.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 28 - Impaci\xeancia",description:"Light, agindo como L, revela para Near que sua irm\xe3 Sayu foi sequestrada por algu\xe9m querendo troc\xe1-la pela Death Note.",videoUrl:"https://static.deathnote.com.br/death_note_28.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 29 - Pai",description:"Light tenta descobrir onde Mello e seus associados da M\xe1fia est\xe3o escondidos e usa os olhos de Misa para encontrar o dono atual da Death Note.",videoUrl:"https://static.deathnote.com.br/death_note_29.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 30 - Justi\xe7a",description:"Mello entra no quartel general do SPK para recuperar uma fotografia dele, a fim de se certificar de que n\xe3o ser\xe1 morto por Kira.",videoUrl:"https://static.deathnote.com.br/death_note_30.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 31 - Transfer\xeancia",description:"Near contata a for\xe7a-tarefa japonesa e determina que Kira est\xe1 entre seus membros.",videoUrl:"https://static.deathnote.com.br/death_note_31.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 32 - Sele\xe7\xe3o",description:"O membro do elenco de estrelas, Kiyomi Takada, se torna o porta-voz de Kira para o mundo...",videoUrl:"https://static.deathnote.com.br/death_note_32.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 33 - Desprezo",description:"Light finge investigar Kiyomi...",videoUrl:"https://static.deathnote.com.br/death_note_33.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 34 - Vigil\xe2ncia",description:"Aizawa descobre o que est\xe1 acontecendo e conta a Near, que j\xe1 sabe sobre as notas.",videoUrl:"https://static.deathnote.com.br/death_note_34.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 35 - Mal\xedcia",description:"Light d\xe1 a Kiyomi a ordem para acabar com Near.",videoUrl:"https://static.deathnote.com.br/death_note_35.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 36 - 1.28",description:"Near, junto com o SPK, encontra Light e a for\xe7a-tarefa em um dep\xf3sito para o tiroteio final.",videoUrl:"https://static.deathnote.com.br/death_note_36.mp4",resolution:{width:1920,height:1080}},{title:"Epis\xf3dio 37 - Novo Mundo",description:"Embora Mikami tenha escrito todos os nomes dos investigadores na Death Note, um minuto se passa e todos ainda est\xe3o vivos.",videoUrl:"https://static.deathnote.com.br/death_note_37.mp4",resolution:{width:1920,height:1080}}]},pe=o(1823),me=o.n(pe),he=o(6257),fe=!0;function ve(e){var t=e.episode,o=e.index;return(0,i.jsxs)("div",{children:[(0,i.jsx)(he.Z,{title:"Death Note EP ".concat(o+1," - ").concat(t.title," (Dublado) - DeathNoteBR"),keywords:"Death Note,Anime,Dublado,".concat(t.title),description:"Assista Death Note online Dublado - Epis\xf3dio ".concat(o+1," (").concat(t.title,") - DeathNoteBR - Comunidade Brasileira - L vs Kira - Assistir Death Note gratuitamente"),type:"video.episode",url:"https://deathnote.com.br/watch/".concat(o),children:(0,i.jsx)("meta",{property:"og:video:series",content:"Death Note"})}),(0,i.jsxs)("div",{className:"".concat(me().deathNote," ").concat(me().pageBlock),children:[(0,i.jsx)(le,{title:t.title}),(0,i.jsx)(oe,{currentEpisode:o,series:ue}),(0,i.jsx)(de.Z,{children:(0,i.jsx)(ie.Z,{title:"".concat(t.title," - Death Note - DeathNoteBR"),identifier:t.title})})]})]})}},3555:function(e){e.exports={animePlayer:"AnimePlayer_animePlayer__XhmUW",episodeList:"AnimePlayer_episodeList__UlQKu",episodeLink:"AnimePlayer_episodeLink__QYxUz",videoRow:"AnimePlayer_videoRow__8lXox",videoTitle:"AnimePlayer_videoTitle__3TkML",videoDescription:"AnimePlayer_videoDescription__j_f5f"}},5263:function(e){e.exports={subtitle:"SubtitleView_subtitle__Grgpp",text:"SubtitleView_text__08mUV"}},3218:function(e){e.exports={configDialog:"ConfigDialog_configDialog__PF2dc",mobile:"ConfigDialog_mobile__viOu8",header:"ConfigDialog_header__XvgV5",closeBtn:"ConfigDialog_closeBtn__VwTa1",field:"ConfigDialog_field__9aUFe",fieldTitle:"ConfigDialog_fieldTitle__7Ra0l",input:"ConfigDialog_input__yVG7R"}},9780:function(e){e.exports={loadingAnimation:"LoadingAnimation_loadingAnimation__otfB5",LoadingSpinner:"LoadingAnimation_LoadingSpinner__JKqiV"}},5693:function(e){e.exports={playPause:"PlayPause_playPause__taXdF",playPauseIcon:"PlayPause_playPauseIcon__tjDcS",paused:"PlayPause_paused__iAN3g",playing:"PlayPause_playing__F0XRz"}},9322:function(e){e.exports={trackBar:"TrackBar_trackBar__mAitP",trackBarControl:"TrackBar_trackBarControl___sfXD"}},8145:function(e){e.exports={volumeControl:"VolumeControl_volumeControl__i8fQv",trackContainer:"VolumeControl_trackContainer__HLtcV",volumeTrackBarControl:"VolumeControl_volumeTrackBarControl__RGgxm",icon:"VolumeControl_icon__aiZOz"}},2430:function(e){e.exports={videoControls:"VideoControls_videoControls__UnJZj",videoControlsMobile:"VideoControls_videoControlsMobile__JnxFB",videoTiming:"VideoControls_videoTiming__SI06x",currentTime:"VideoControls_currentTime__x5t75",totalTime:"VideoControls_totalTime__TNA1C",downControls:"VideoControls_downControls__4dWbO",downControlsMobile:"VideoControls_downControlsMobile__kfNjb",barControls:"VideoControls_barControls__yD5bd",barControlsMobile:"VideoControls_barControlsMobile__FSaaH",barControlsLeft:"VideoControls_barControlsLeft__ZTpZI",barControlsRight:"VideoControls_barControlsRight__HW5at",bannerPlayPause:"VideoControls_bannerPlayPause__bqBzg"}},8575:function(e){e.exports={videoPlayer:"VideoPlayer_videoPlayer__U5FUg",videoElement:"VideoPlayer_videoElement__xls79",controlsWrapper:"VideoPlayer_controlsWrapper__w3b2I"}},1982:function(e){e.exports={navBar:"Navbar_navBar__oYrHJ",navLink:"Navbar_navLink__y_aLw",logo:"Navbar_logo__12RET",navTitle:"Navbar_navTitle__Gg_yC"}},7680:function(e,t){"use strict";var o=function(){function e(){this.seperator=","}return e.prototype.correctFormat=function(e){var t,o=e.replace(".",",").split(","),i=o[0],n=o[1];t=this.fixed_str_digit(3,n);var r=i.split(":"),a=r[0],s=r[1],c=r[2];return this.fixed_str_digit(2,a,!1)+":"+this.fixed_str_digit(2,s,!1)+":"+this.fixed_str_digit(2,c,!1)+","+t},e.prototype.fixed_str_digit=function(e,t,o){return void 0===o&&(o=!0),t.length==e?t:t.length>e?t.slice(0,e):t.length<e?o?t.padEnd(e,"0"):t.padStart(e,"0"):void 0},e.prototype.tryComma=function(e){var t=(e=e.replace(/\r/g,"")).split(/(\d+)\n(\d{1,2}:\d{2}:\d{2},\d{1,3}) --> (\d{1,2}:\d{2}:\d{2},\d{1,3})/g);return t.shift(),t},e.prototype.tryDot=function(e){var t=(e=e.replace(/\r/g,"")).split(/(\d+)\n(\d{1,2}:\d{2}:\d{2}\.\d{1,3}) --> (\d{1,2}:\d{2}:\d{2}\.\d{1,3})/g);return t.shift(),this.seperator=".",t},e.prototype.fromSrt=function(e){var t=e,o=this.tryComma(t);0==o.length&&(o=this.tryDot(t));for(var i=[],n=0;n<o.length;n+=4){var r={id:o[n].trim(),startTime:this.correctFormat(o[n+1].trim()),endTime:this.correctFormat(o[n+2].trim()),text:o[n+3].trim()};i.push(r)}return i},e.prototype.toSrt=function(e){for(var t="",o=0;o<e.length;o++){var i=e[o];t+=i.id+"\r\n",t+=i.startTime+" --\x3e "+i.endTime+"\r\n",t+=i.text.replace("\n","\r\n")+"\r\n\r\n"}return t},e}();t.Z=o}},function(e){e.O(0,[660,774,888,179],(function(){return t=7527,e(e.s=t);var t}));var t=e.O();_N_E=t}]);