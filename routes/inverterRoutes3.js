var express = require('express');
var router = express.Router();
var Inverter3 = require('../models/inverterModel3');
var _ = require('lodash');

/* GET inverters listing. */
router.get('/', function(req, res, next) {
  Inverter3.find().sort({Pinv_ac :1}).exec((err, data) => {
    
    res.render('inverters3',{inverters3 : data})
  })
});

router.post('/search', function(req, res, next){
  var search = _.omitBy(req.body,_.isEmpty);
  console.log(req.body, search);
  
  Inverter3.find(search,(err, data) => {
    res.render('inverters3',{inverters3 : data})
  })
})

router.post('/add', function(req, res, next){
  var doc = new Inverter3(req.body);
  doc.save((err, data) => {
    if(err) console.log(err)
    res.redirect('/inverters3')
  }) 
})

router.post('/delete/:_id' , function(req, res, next){
  Inverter3.findByIdAndRemove(req.params._id,(err, data) => {
    if(err) console.log(err);
    res.redirect('/inverters3');
  })
})

router.get('/edit/:_id', function(req, res, next){
    Inverter3.findById(req.params._id, (err, data) => {
    res.render('inverters3', {inverter3: data});
  })
});

router.post('/edit/:_id', function(req, res, next){
    Inverter3.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if(err) console.log(err);
    res.redirect('/inverters3')
  })
});

module.exports = router;
