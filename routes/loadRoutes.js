var express = require('express');
var router = express.Router();
var Load = require('../models/loadModel');
var _ = require('lodash');

/* GET inverters listing. */
router.get('/', function(req, res, next) {
  Load.find().sort({created_date :1}).exec((err, data) => {
    
    res.render('loads',{loads : data})
  })
});

router.post('/search', function(req, res, next){
  var search = _.omitBy(req.body,_.isEmpty);
  console.log(req.body, search);
  
  Load.find(search,(err, data) => {
    res.render('loads',{loads : data})
  })
})

router.post('/add', function(req, res, next){
  var doc = new Load(req.body);
  doc.save((err, data) => {
    if(err) console.log(err)
    res.redirect('/loads')
  }) 
})

router.post('/delete/:_id' , function(req, res, next){
  Load.findByIdAndRemove(req.params._id,(err, data) => {
    if(err) console.log(err);
    res.redirect('/loads');
  })
})

router.get('/edit/:_id', function(req, res, next){
    Load.findById(req.params._id, (err, data) => {
    res.render('loads', {load: data});
  })
});

router.post('/edit/:_id', function(req, res, next){
  Load.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if(err) console.log(err);
    res.redirect('/loads')
  })
});

module.exports = router;








