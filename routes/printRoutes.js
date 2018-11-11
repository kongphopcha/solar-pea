var express = require('express');
var router = express.Router();
var Info = require('../models/infoModel');


var _ = require('lodash');




router.get('/', function(req, res, next){
  let infos_data = null;
 
  Info.find().sort({created_date:-1}).exec((err, data) => {
    infos_data = data;

    
      res.render('prints',{infos : infos_data});
    
  });
});


  
 
   module.exports = router;
