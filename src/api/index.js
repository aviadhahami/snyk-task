import { API } from './../config'

const generateURL = ({ name, version = 'latest' }) => `${API}/${name}/${version}`
const BASE_API = API

export {
  generateURL,
  BASE_API
}
