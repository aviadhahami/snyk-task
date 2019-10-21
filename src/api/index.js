import { API } from './../config'

const generateURL = ({ name, version = 'latest' }) => {
  const buffer = []
  buffer.push(API)
  buffer.push(name)
  if (!name.includes('@')) {
    buffer.push(version.replace(/.*(\d\.\d.\d).*/, '$1'))
  }
  return buffer.join('/')
}
const BASE_API = API

export {
  generateURL,
  BASE_API
}
