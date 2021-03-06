const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4 : uuidv4 } = require('uuid');
const bodyParser = require("body-parser");

// Initialitazion
const app = express();
require('./repositories/database');

// Settings
app.set('port', 3001);
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json()); // <--- Here
/*
const storage = multer.diskStorage({
    destination: 'public/uploads',
    filename: (req, file ,cb)=>{
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
    }
});

app.use(multer({
    storage,
    limits: {fileSize: 2000000},
    fileFilter: (req, file, cb) =>{
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true);
        }
        cb('Error: Archivo no soportado');
    }
}).single('image'));*/

// Routes
app.use(require('./resources/imageResoure'));

// static files acceso desde navegador
app.use(express.static('public'));//testeo

// Start
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});