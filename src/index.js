import express from 'express'
import router from './router'
import morgan from 'morgan'
import './config'

const app = express()

app.use(morgan('tiny'))
app.use(router)

const { PORT: port } = process.env
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
