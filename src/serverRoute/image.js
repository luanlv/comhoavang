var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
var request = require('request');
var Gm = require("gm")
var utf8 = require('utf8');
var iconv = require('iconv-lite');

router.use('/small/', getSmallImage , express.static(path.join(__dirname , '../images-small')))

router.use('/', express.static(path.join(__dirname , '../images')));

function getSmallImage(req, res, next){
  var imageName = decodeURI(req.originalUrl.slice(13))
  var originalPathImage = path.join(__dirname , '../images/', imageName)
  if(!fs.existsSync(originalPathImage)){
    return next()
  }
  var pathImage = path.join(__dirname , '../images-small/', imageName)
  if (fs.existsSync(pathImage)) {
    next()
  } else {
    Gm(originalPathImage).resize(300, "!").write(pathImage, function (err) {
      if(err) console.log(err)
      next()
    })
    next()
  }
}

router.use('*', (req, res, next) => {
  res.status(404).send('not found!')
})

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = router;
