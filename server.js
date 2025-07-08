const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const shortid = require('shortid');
require('dotenv').config()
const mongoUri = process.env.MONGO_URI 
const app = express()

app.use(cors())
app.use(express.json())
console.log("Conectando com:", mongoUri);


mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Erro ao conectar no MongoDB:", err));
const urlSchema = mongoose.Schema({
    originalUrl: {type: String, required: true},
    shortUrl: {type: String, required: true, unique: true},
})
const Url = mongoose.model('Url', urlSchema)

app.post('/api/shorten', async (req, res)=>{
    const originalUrl = req.body.originalUrl;
    const shortUrl = shortid.generate()
    const newUrl = new Url({originalUrl, shortUrl})
    await newUrl.save()
    res.status(201).json({originalUrl, shortUrl})
})

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = req.params.shortUrl
    const url = await Url.findOne({shortUrl})
    if(url){
        return res.redirect(url.originalUrl)
    }
    else{
        return res.status(404).json({error: 'URL not found'})
    }
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})