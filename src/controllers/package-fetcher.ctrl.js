import { fetchDepsTree } from '../logic/deps-tree-fetcher';
import { printTree } from '../logic/tree-printer';

async function packageFetcher (req, res) {
	const { packageName } = req.params;
	try {
		const tree = await fetchDepsTree({ packageName });
		printTree(tree);
		return res.status(200).send(tree);
	} catch (e) {
		return res.status(500).send(e.message);
	}
}

// Named exports for easier auto-importing by the IDE
export {
	packageFetcher
};
