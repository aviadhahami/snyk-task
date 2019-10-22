import { fetchDepsTree } from '../logic/deps-tree-fetcher';
import { printTree } from '../logic/tree-printer';

async function packageFetcher (req, res) {
	const { packageName, packageVersion } = req.params;
	console.log(req.params);
	try {
		const tree = await fetchDepsTree({ packageName, packageVersion });
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
