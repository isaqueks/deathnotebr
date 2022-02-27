import 'ignore-styles';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DeathNoteAnime from '../src/pages/deathNote/anime';
import fs from 'fs';
import path from 'path';
import DeathNoteSeries from '../src/ts/series/deathNote';
import { JSDOM } from 'jsdom';

const htmlFile = process.argv.pop();
if (!fs.existsSync(htmlFile)) {
    console.error(`File not found: "${htmlFile}".`);
    process.exit();
}

const templateContent = fs.readFileSync(htmlFile).toString();

const baseDir = path.join(path.dirname(htmlFile), './watch');

fs.mkdirSync(baseDir, { recursive: true });

//     <link href="/static/css/main.9d0983a5.chunk.css" rel="stylesheet">

let i = 0;
for (const ep of DeathNoteSeries.episodes) {

    const reactGeneratedIndexDom = new JSDOM(fs.readFileSync(path.join(path.dirname(htmlFile), './index.html'))).window.document;

    (global as any).window = {
        BUILD_TIME: true,
        location: {
            href: `/watch/${i}`,
        }
    };
    (global as any).document = {};

    const renderedHtml = ReactDOMServer.renderToString(<DeathNoteAnime />);


    const templateVars = {
        __EP_TITLE__: ep.title,
        __REACT_CONTENT__: renderedHtml,
        __EP_INDEX__: i,
        '%PUBLIC_URL%': '',
        __JS__: Array.from(reactGeneratedIndexDom.querySelectorAll('body script')).map(e => e.outerHTML).join('\n'),
        __CSS__: Array.from(reactGeneratedIndexDom.querySelectorAll('link[href^="/static/css"]')).map(e => e.outerHTML).join('\n')
    }

    let html = templateContent;

    for (const varname in templateVars) {
        html = html.split(varname).join(templateVars[varname]);
    }

    fs.writeFileSync(path.join(baseDir, `/${i++}.html`), html);
}
