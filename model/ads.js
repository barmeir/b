
import fs from 'fs'

const ads ={
    id: String,
    description: String
}

const arrAds=[ads]

const toJson= JSON.stringify(ads)
fs.writeFileSync('ads.json',toJson)



const bufferdata=  fs.readFileSync('ads.json')
const dataStr = JSON.parse(bufferdata.toString())

module.exports={
    ads,
    arrAds,
}