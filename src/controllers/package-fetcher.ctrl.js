import axios from 'axios'
import { generateURL } from '../api'

const fetch = async ({ packageName, packageVersion }) => {
  const url = generateURL({ name: packageName, version: packageVersion })
  const { data: response } = await axios.get(url)
  return response
}

async function packageFetcher (req, res) {
  const { packageName, packageVersion } = req.params
  try {
    const data = await fetch({ packageName, packageVersion })
    return res.status(200).send(data)
  } catch (e) {
    return res.status(e.response.status).send(e.message)
  }
}
export {
  packageFetcher
}
