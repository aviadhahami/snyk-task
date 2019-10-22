/* eslint-disable no-unused-vars */
import App from './components/App';
import React from 'react';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';

function generateView ({ packageName, packageVersion, tree }) {
	const baseHtml = `
  <html>
  <head>
  	<title>Info for package {{{packageName}}}:{{{packageVersion}}}</title>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ tree })}</script>
  </head>
  <body>
  <div id="app">{{{app}}}</div>
  <script src="/app.js" charset="utf-8"></script>
  <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;

	const hbsTemplate = hbs.compile(baseHtml);
	const reactApp = renderToString(<App />);
	return hbsTemplate({
		app: reactApp,
		packageName,
		packageVersion
	});
}

export {
	generateView
};
