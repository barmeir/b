
'use strict'
import express, {request,response,NextFunction} from 'express'
import router from './router/ads'

console.log('running')
const app = express()


 app.use('./router/ads', router)
 app.use(( request,response,NextFunction)=>{
response.status(500).json({message:'error' })
 })

app.listen(3000, () => {
    console.log('Ready')
  })


