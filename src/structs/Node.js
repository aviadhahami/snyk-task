import uuid from 'uuid';

const typeSizes = {
	'undefined': () => 0,
	'boolean': () => 4,
	'number': () => 8,
	'string': item => 2 * item.length,
	'object': item => !item ? 0 : Object
		.keys(item)
		.reduce((total, key) => sizeOf(key) + sizeOf(item[key]) + total, 0)
};

const sizeOf = value => typeSizes[typeof value](value);

class Node {
	constructor ({ name, children = [], version }) {
		this.id = uuid();
		this.name = name;
		this.version = version;
		this.children = children;
	}

	get subtreeSize () {
		return 1 + this.children.reduce((sum, current) => sum + current.subtreeSize, 0);
	}

	get size () {
		return sizeOf(this.toJSON());
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
