const multer = require('multer')
const path = require('path')
const SharpMulter  =  require("sharp-multer");
const fs = require('fs')

dirPath = './public'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}



const storage =  
 SharpMulter ({
              destination:(req, file, callback) => {
                callback(null, './public')
              },
              filename : (req, file ,cb)=>{
                cb(null, Date.now()+ '_' + file.originalname)
            },
              imageOptions:{
               fileFormat: "jpg",
               quality: 80,
               resize: { width: 500, height: 500 },
                 },
                 imageOptions:{
                    fileFormat: "jpg",
                    quality: 80,
                    resize: { width: 1000, height: 1000 },
                      }
           });
const upload  =  multer({ storage });




module.exports = upload


