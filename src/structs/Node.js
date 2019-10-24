import uuid from 'uuid';
class Node {
	constructor ({ name, children = [], version = 'latest' }) {
		this.id = uuid();
		this.name = name;
		this.version = version;
		this.children = children;
	}
	get subtreeSize () {
		return 1 + this.children.reduce((sum, current) => sum + current.subtreeSize, 0);
	}

	toJSON () {
		const { id, name, version, children, subtreeSize } = this;
		return {
			id,
			name,
			version,
			children,
			subtreeSize
		};
	}
}

export {
	Node
};
