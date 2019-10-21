class Node {
  constructor ({ name, children = [], version = 'latest' }) {
    this.name = name
    this.version = version
    this.children = children
  }
}

export {
  Node
}
