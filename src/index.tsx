import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DeathNote from './pages/deathNote';
import DeathNoteAnime from './pages/deathNote/anime';
import reportWebVitals from './reportWebVitals';

const url = window?.location.pathname;

ReactDOM.hydrate(
  <React.StrictMode>
    {url.includes('/watch/') ? <DeathNoteAnime /> : <DeathNote />}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
