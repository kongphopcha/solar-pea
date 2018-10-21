var mongoose = require('mongoose');
// Schema Validation
var infoSchema = mongoose.Schema({
    project: {type: String, trim:true},
    met : {type: String, trim:true},
    user : {type: String, trim:true},
    description : {type: String, trim:true} ,
    time_use : {type: String, trim:true}, 
    unit : {type: Number},
    buy : {type: Number},
    sale : {type: Number},
    tem_min : {type: Number},
    tem_max : {type: Number},
    how_wdc : {type: String, trim:true}, 
    distance_dc : {type: Number},
    how_wac : {type: String, trim:true}, 
    distance_ac : {type: Number},
    type_wac : {type: String, trim:true}, 


    province: {type: String, trim:true},
    psh: {type: Number},
    azimuth: {type: String, trim:true},
    altitute: {type: String, trim:true},
    hdts: {type: String, trim:true},
    pv_module: {type: String, trim:true},
    meter: {type: String, trim:true},    
    area: {type: String, trim:true},
    inv : {type: String, trim:true},
    num_inv : {type: Number},
    num_pv : {type: Number},
    string : {type: Number},
    cbdc : {type: Number},
    wdc : {type: Number}, 
    grounddc : {type: Number},
    pipe : {type: Number},
    vdropdc : {type: Number},
    pervdropdc : {type: Number},
    plossdc : {type: Number},
    perplossdc : {type: Number},
    cbmdb : {type: Number},
    wmdb : {type: Number},
    groundmdb : {type: Number},
    cbac : {type: Number},
    wac : {type: Number},
    groundac : {type: Number},
    vdropac : {type: Number},
    pervdropac : {type: Number},
    plossac : {type: Number},
    perplossac : {type: Number},
    pmax : {type: Number},
    invest : {type: Number},
    energy : {type: Number},
    income : {type: Number},
    month : {type: Number},
    year : {type: Number},

   
    created_date: {type:Date, default: Date.now}
    
});


var Info = mongoose.model('infos',infoSchema);
module.exports = Info;  
    


