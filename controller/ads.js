
import {request, response, NextFunction} from 'express';
import {arrAds} from '../model/ads';

const arr =[]
const createAd =(request, response, NextFunction)=>{
    const text = (request.body).text

    arr.push(new Array(text))
    response.status(201).json({message:' resived ad' })

};

const readAd =(request, response, NextFunction)=>{
    const text = (request.param).text
    
    
    arrAds.indexof(text).
    response.json({})
    response.status(201).json({message:' resived ad' })
    
};
module.exports={
    createAd,
    readAd,
    updateAd,
    deleteAd
};



/*/
create ad - first time - open a file
if file exist add


read all the ad
read from the json file and sent to the server

update the ad -I need Id of the ad I want to update
then to reat it again

delete the ad is can be by resived ID and delete it from the array we update


/*/