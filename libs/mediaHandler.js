const multer = require("multer");
const path = require("path");


const storage = new multer.diskStorage({
    destination: (req ,file , cb)=>{
        cb(null, path.join(__dirname, '../public/uploads'))
    },
    filename : (req, file ,cb)=>{
        cb(null, Date.now()+ '_' + file.originalname)
    }
})

const upload = multer ({
    storage:storage
})

module.exports = upload;