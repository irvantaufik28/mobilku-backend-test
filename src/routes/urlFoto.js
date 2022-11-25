const express = require('express')
const router = express.Router()

const urlFoto = require('../controllers/urlFoto')
const mediahandler = require('../libs/mediahandler')

router.post('/urlfoto', mediahandler.single('url'), urlFoto.urlFotoCreate)

module.exports = router;



// app.post('/upload', upload.single("avatar"), (req, res)=>
// {
//     fs.rename(req.file.path, './images/avatar.jpg', (err)=>{
//         console.log(err);
//     })
  
//     sharp(__dirname + '/images/avatar.jpg').resize(200,200)
//     .jpeg({quality : 50}).toFile(__dirname 
//         + '/images/avatar_thumb.jpg');
  
  
//     sharp(__dirname + '/images/avatar.jpg').resize(640,480)
//     .jpeg({quality : 80}).toFile(__dirname 
//         + '/images/avatar_preview.jpg');
  
//     return res.json("File Uploaded Successfully!");
// });