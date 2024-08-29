const express =require('express');
const axios=require('axios');
require('dotenv').config();

const app=express();

const API_KEY=process.env.API_KEY;
const port=3000;

app.get('/', async (req,res)=>{
    const {city}=req.query
    const url=`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
    try{
    const response=await axios.get(url)
        const weatherReport=await response.data
        res.send(weatherReport)
    } catch (error) {
        console.log(error);
    }

});

app.listen(port,()=>{
    console.log("Application running on 3000")
});