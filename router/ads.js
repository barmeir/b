'use strict'
import express from 'express'
import {createAd, readAd,updateAd,deleteAd} from '../controller/ads'

const router = express()

//creat
router.post('/',createAd)
//read
router.get('/id',readAd)
//update
router.patch('/id',updateAd)
//delete
router.delete('/id',deleteAd)

export default router;
