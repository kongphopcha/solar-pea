var express = require('express');
var router = express.Router();
var Info3 = require('../models/infoModel3');


var _ = require('lodash');




router.get('/', function(req, res, next){
  let infos3_data = null;
 
  Info3.find().sort({created_date:-1}).exec((err, data) => {
    infos3_data = data;

    
      res.render('prints3',{infos3 : infos3_data});
    
  });
});


  
 
   module.exports = router;
