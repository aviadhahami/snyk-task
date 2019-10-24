import { Router } from 'express';
import { packageFetcher } from '../controllers/package-fetcher.ctrl';

const router = new Router();

const path = '/package/:packageName';

// regex to match namespaced packages i.e. @babel/core
router.get(path, (req, res) => {
	return res.redirect(`/package/${req.params.packageName}/latest`);
});
router.get(`${path}/:packageVersion`, packageFetcher);

export default router;
