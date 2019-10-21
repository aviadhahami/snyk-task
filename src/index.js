import express from 'express'
import router from './router'
import morgan from 'morgan'
import { PORT } from './config'

const app = express()

app.use(morgan('tiny'))
app.use(router)

// const { PORT: port } = process.env
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
