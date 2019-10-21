import { Router } from 'express'
import { packageFetcher } from '../controllers/package-fetcher.ctrl'

const router = new Router()

router.get('/:packageName([@\\/]\\w+\\/\\w+|\\S+)', packageFetcher)

export default router
