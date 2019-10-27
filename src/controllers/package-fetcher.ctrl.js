import { performance } from 'perf_hooks';
import { fetchDepsTree } from '../logic/deps-tree-fetcher';
import { printTree } from '../logic/tree-printer';
import { generateView } from '../ui/generate-view';

async function packageFetcher (req, res) {
	const { packageName, packageVersion } = req.params;
	try {
		const start = performance.now();
		const tree = await fetchDepsTree({ packageName, packageVersion, firstInvoke: true });
		const end = performance.now();
		const payload = {
			tree,
			execTime: end - start
		};

		console.log({ size: tree.size });
		const view = generateView({ packageVersion, packageName, payload });
		// printTree(tree);
		return res.status(200).send(view);
	} catch (e) {
		console.log(e);
		return res.status(500).send(e.message);
	}
}

// Named exports for easier auto-importing by the IDE
export {
	packageFetcher
};
