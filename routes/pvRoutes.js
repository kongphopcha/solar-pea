var express = require('express');
var router = express.Router();
var Pv = require('../models/pvModel');
var _ = require('lodash');

/* GET pvs listing. */





router.get('/', function(req, res, next) {
  Pv.find().sort({Pmax :1}).exec((err, data) => {
    
    res.render('pvs',{pvs : data})
  })
});

router.post('/search', function(req, res, next){
  var search = _.omitBy(req.body,_.isEmpty);
  console.log(req.body, search);
  
  Pv.find(search,(err, data) => {
    res.render('pvs',{pvs : data})
  })
})

router.post('/add', function(req, res, next){
  var doc = new Pv(req.body);
  doc.save((err, data) => {
    if(err) console.log(err)
    res.redirect('/pvs')
  }) 
})

router.post('/delete/:_id' , function(req, res, next){
  Pv.findByIdAndRemove(req.params._id,(err, data) => {
    if(err) console.log(err);
    res.redirect('/pvs');
  })
})

router.get('/edit/:_id', function(req, res, next){
  Pv.findById(req.params._id, (err, data) => {
    res.render('pvs', {pv: data});
  })
});

router.post('/edit/:_id', function(req, res, next){
  Pv.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if(err) console.log(err);
    res.redirect('/pvs')
  })
});

module.exports = router;
