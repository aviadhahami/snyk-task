import { Node } from './../../src/structs/Node';

describe('Node struct test suite', () => {
	it('should export func', () => {
		expect(typeof Node).toEqual('function');
	});
	it('should init new Node for the tree', () => {
		const n = new Node({
			name: 'a',
			version: '123',
			children: []
		});
		expect(Object.keys(n).sort()).toEqual([ 'id', 'name', 'version', 'children' ].sort());
	});
	it('should init new Node w/o version or children spec', () => {
		const n = new Node({
			name: 'a'
		});
		const { version, children } = n;
		expect(version).toEqual('latest');
		expect(children).toEqual([]);
	});
});
