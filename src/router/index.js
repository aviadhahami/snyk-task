import { Router } from 'express';
import { packageFetcher } from '../controllers/package-fetcher.ctrl';

const router = new Router();

// regex to match namespaced packages i.e. @babel/core
router.get('/:packageName([@\\/]\\w+\\/\\w+|\\S+)', packageFetcher);

export default router;
