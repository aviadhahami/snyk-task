/* eslint-disable no-return-assign */

import dotenv from 'dotenv';
import each from 'lodash/each';

const result = dotenv.config();

let envs;

// Helping us load production env if needed
if (!('error' in result)) {
	envs = result.parsed;
} else {
	envs = {};
	each(process.env, (value, key) => envs[key] = value);
}
const API = 'https://registry.npmjs.org';

module.exports = {
	...envs,
	API
};
