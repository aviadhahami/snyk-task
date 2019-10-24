import uuid from 'uuid';
class Node {
	constructor ({ name, children = [], version = 'latest' }) {
		this.id = uuid();
		this.name = name;
		this.version = version;
		this.children = children;
	}
}

export {
	Node
};
