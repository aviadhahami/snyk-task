import { Router } from 'express'
import { packageFetcher } from '../controllers/package-fetcher.ctrl'

const router = new Router()

router.get('/:packageName/:packageVersion?', packageFetcher)

export default router
