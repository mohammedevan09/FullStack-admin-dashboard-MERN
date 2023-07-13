import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import helmet from 'helmet'
import morgan from 'morgan'
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'

// data imports
import User from './models/User.js'
import Product from './models/Product.js'
import ProductStat from './models/ProductStat.js'
import Transaction from './models/Transaction.js'
import OverallStat from './models/OverallState.js'
import AffiliateStat from './models/AffiliateState.js'

import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from './data/index.js'

// Configuration
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use('/client', clientRoutes)
app.use('/general', generalRoutes)
app.use('/management', managementRoutes)
app.use('/sales', salesRoutes)

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

// Mongoose setup
const PORT = process.env.PORT || 5000
mongoose.set('strictQuery', true)
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('database connected')
    app.listen(PORT, () => {
      console.log('server at localhost:' + PORT)
    })

    // ONLY ADD DATA ONE TIME #
    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
    // OverallStat.insertMany(dataOverallStat)
    // AffiliateStat.insertMany(dataAffiliateStat)
  })
  .catch((error) => {
    console.log('database disconnected')
  })
