import axios from 'axios'
import printTree from 'print-tree'
import { Node } from './../structs/Node'
import { generateURL } from '../api'

const fetch = async ({ packageName, packageVersion = 'latest' }) => {
  const url = generateURL({ name: packageName, version: packageVersion })
  console.log({ packageVersion })
  console.log({ packageName })
  console.log({ url })
  try {
    const {
      data: {
        dependencies = {}
      }
    } = await axios.get(url)

    const tree = new Node({ name: packageName, version: packageVersion })
    console.log({ dependencies })
    if (Object.keys(dependencies).length) {
      const children = await Promise.all(
        Object.entries(dependencies)
          .map(async ([name, version]) => fetch({ packageName: name, packageVersion: version }))
      )
      tree.children = children
    }
    return tree
  } catch (e) {
    const tree = new Node({ name: packageName, version: packageVersion })
    return tree
  }
}

async function packageFetcher (req, res) {
  const { packageName } = req.params
  try {
    const data = await fetch({ packageName })
    console.log({ data })
    const tree = printTree(
      data,
      node => node.name.toUpperCase(),
      node => node.children
    )
    return res.status(200).send(JSON.stringify(data))
  } catch (e) {
    if (e.response) {
      return res.status(e.response.status).send(e.message)
    } else {
      return res.status(500).send(e.message)
    }
  }
}
export {
  packageFetcher
}
