import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { connect } from 'mongoose'
import productRouter from './src/routes/product.routes.js'
import 'dotenv/config'

const app = express()

app.use(
  express.json(),
  morgan('dev'),
  cors()
)

app.use('/api/product', productRouter)

const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV || 'development'
const DATABASE_URI = ENV === 'development' ? process.env.DATABASE_URI_DEV : process.env.DATABASE_URI_PROD

if (DATABASE_URI) {
  connect(DATABASE_URI)
    .then(() => app.listen(PORT, () => {
      console.log(`Server running for ${ENV} in port ${PORT}...`)
    }))
    .catch((e) => console.log(e))
} else {
  console.log('Database URI not provided...')
}
