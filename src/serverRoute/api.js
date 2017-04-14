var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Post = mongoose.model('Post')
let bodyParser = require('body-parser')

router.post('/post/new', bodyParser.json() ,(req, res) => {
  Post.create(req.body, (err, resData) => {
    if(err) res.sendStatus(400)
    res.send(resData)
  })
})

router.post('/post/update', bodyParser.json() ,(req, res) => {
  Post.findOneAndUpdate({slug: req.body.slug}, { $set: req.body}, { new: true }, function (err, resData) {
    if (err) return handleError(err);
    res.send(resData);
  });
})

module.exports = router;
