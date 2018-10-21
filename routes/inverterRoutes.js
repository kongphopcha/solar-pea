var express = require('express');
var router = express.Router();
var Inverter = require('../models/inverterModel');
var _ = require('lodash');

/* GET inverters listing. */
router.get('/', function(req, res, next) {
  Inverter.find().sort({Pinv_ac :1}).exec((err, data) => {
    
    res.render('inverters',{inverters : data})
  })
});

router.post('/search', function(req, res, next){
  var search = _.omitBy(req.body,_.isEmpty);
  console.log(req.body, search);
  
  Inverter.find(search,(err, data) => {
    res.render('inverters',{inverters : data})
  })
})

router.post('/add', function(req, res, next){
  var doc = new Inverter(req.body);
  doc.save((err, data) => {
    if(err) console.log(err)
    res.redirect('/inverters')
  }) 
})

router.post('/delete/:_id' , function(req, res, next){
  Inverter.findByIdAndRemove(req.params._id,(err, data) => {
    if(err) console.log(err);
    res.redirect('/inverters');
  })
})

router.get('/edit/:_id', function(req, res, next){
    Inverter.findById(req.params._id, (err, data) => {
    res.render('inverters', {inverter: data});
  })
});

router.post('/edit/:_id', function(req, res, next){
    Inverter.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if(err) console.log(err);
    res.redirect('/inverters')
  })
});

module.exports = router;
