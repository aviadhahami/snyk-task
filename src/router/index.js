import { Router } from 'express';
import { packageFetcher } from '../controllers/package-fetcher.ctrl';

const router = new Router();

const path = '/package/:packageName';

// Redirecting to `latest` if no version was specified
router.get(path, (req, res) => {
	return res.redirect(`/package/${req.params.packageName}/latest`);
});
router.get(`${path}/:packageVersion`, packageFetcher);

export default router;
