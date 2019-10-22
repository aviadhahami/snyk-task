/* eslint-disable no-unused-vars */
import App from './components/App';
import React from 'react';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';

function generateView () {
	const baseHtml = `
  <html>
  <head><title>My First SSR</title></head>
  <body>
  <h1>My First Server Side Render</h1>
  <div id="reactele">{{{reactele}}}</div>
  <script src="/app.js" charset="utf-8"></script>
  <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;

	const hbsTemplate = hbs.compile(baseHtml);
	const reactComp = renderToString(<App />);
	return hbsTemplate({ reactele: reactComp });
}

export {
	generateView
};
