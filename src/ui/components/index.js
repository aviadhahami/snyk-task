/* eslint-disable no-unused-vars */
import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

hydrate(
	<App
		tree={window.__INITIAL__DATA__.tree}
		size={window.__INITIAL__DATA__.size}
		execTime={window.__INITIAL__DATA__.execTime}/>,
	document.getElementById('app'));
