var express = require('express');
var router = express.Router();
var Info = require('../models/infoModel');
var Load = require('../models/loadModel');
var Inverter = require('../models/inverterModel');
var _ = require('lodash');

var Pv = require('../models/pvModel');



router.get('/', function(req, res, next){
  let pvs_data = null;
  let inverters_data = null;
  let loads_data = null;
  Pv.find().sort({Pmax:1}).exec((err, data) => {
    pvs_data = data;

    Inverter.find().sort({Pinv_dc:1}).exec((err, data) => {
      inverters_data = data;
      Load.find().exec((err, data) => {
        loads_data = data;
      res.render('infos',{inverters : inverters_data,pvs : pvs_data,loads : loads_data});});
    });
  });
});

router.post('/add', function(req, res, next){
  var doc = new Info(req.body);
  doc.save((err, data) => {
    if(err) console.log(err)
   
  }) 
})


  
   module.exports = router;
