/* eslint-disable no-return-assign */

import dotenv from 'dotenv'
import each from 'lodash/each'

const result = dotenv.config()

let envs

if (!('error' in result)) {
  envs = result.parsed
} else {
  envs = {}
  each(process.env, (value, key) => envs[key] = value)
}

module.exports = envs
