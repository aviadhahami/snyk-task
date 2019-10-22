import printTree from 'print-tree';

const printer = (t) => {
	console.log(printTree(
		t,
		node => node.name.toUpperCase(),
		node => node.children
	));
};

export {
	printer as printTree
};
