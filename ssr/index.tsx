import 'ignore-styles';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DeathNote from '../src/pages/deathNote';
import fs from 'fs';

const KEYWORD_REPLACE = '__REACT_CONTENT__';

const htmlFile = process.argv.pop();
if (!fs.existsSync(htmlFile)) {
    console.error(`File not found: "${htmlFile}".`);
    process.exit();
}

const htmlContent = fs.readFileSync(htmlFile).toString();
const renderedHtml = ReactDOMServer.renderToString(<DeathNote />);

fs.writeFileSync(htmlFile, htmlContent.replace(KEYWORD_REPLACE, renderedHtml));