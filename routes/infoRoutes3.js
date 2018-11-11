var express = require('express');
var router = express.Router();
var Info3 = require('../models/infoModel3');
var Load = require('../models/loadModel');
var Inverter3 = require('../models/inverterModel3');
var _ = require('lodash');

var Pv = require('../models/pvModel');



router.get('/', function(req, res, next){
  let pvs_data = null;
  let inverters3_data = null;
  let loads_data = null;
  let infos3_data = null;
  Pv.find().sort({Pmax:1}).exec((err, data) => {
    pvs_data = data;

    Inverter3.find().sort({Pinv_dc:1}).exec((err, data) => {
      inverters3_data = data;
      Load.find().exec((err, data) => {
        loads_data = data;
        Info3.find().sort({created_date:-1}).exec((err,data) => {
          infos3_data = data;
          res.render('infos3',{inverters3 : inverters3_data,pvs : pvs_data,loads : loads_data,infos3 : infos3_data});});
        } )
      
    });
  });
});

router.post('/add', function(req, res, next){
  var doc = new Info3(req.body);
  doc.save((err, data) => {
    if(err) console.log(err)
    res.redirect('/infos3')
  }) 
})

router.post('/delete/:_id' , function(req, res, next){
  Info3.findByIdAndRemove(req.params._id,(err, data) => {
    if(err) console.log(err);
    res.redirect('/infos3');
  })
})




  
   module.exports = router;
