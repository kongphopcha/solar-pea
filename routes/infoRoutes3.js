var express = require('express');
var router = express.Router();
var Inverter3 = require('../models/inverterModel3');
var _ = require('lodash');
var Load = require('../models/loadModel');
var Pv = require('../models/pvModel');



router.get('/', function(req, res, next){
  let pvs_data = null;
  let inverters_data = null;
  let loads_data = null;
  Pv.find().sort({Pmax:1}).exec((err, data) => {
    pvs_data = data;

    Inverter3.find().sort({Pinv_dc:1}).exec((err, data) => {
      inverters_data = data;
      Load.find().exec((err, data) => {
        loads_data = data;
      res.render('infos3',{inverters3 : inverters_data,pvs : pvs_data,loads : loads_data});});
    });
  });
});
  
  
   module.exports = router;
