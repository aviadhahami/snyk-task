/* eslint-disable no-unused-vars */
import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

hydrate(
	<App
		tree={window.__INITIAL__DATA__.tree}/>,
	document.getElementById('app'));
