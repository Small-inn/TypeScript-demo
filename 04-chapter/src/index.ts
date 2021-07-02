import express, { Request, Response } from 'express'
import router from './router'


const app = express()

app.use(router)

app.listen(8000, () => {
  console.log('sever is running')
})
