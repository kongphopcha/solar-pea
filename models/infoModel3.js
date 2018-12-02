var mongoose = require('mongoose');
// Schema Validation
var infoSchema3 = mongoose.Schema({
    project: {type: String, trim:true},
    des: {type: String, trim:true},
    met : {type: String, trim:true},
    user : {type: String, trim:true},
  
    time_use : {type: String, trim:true}, 
    unit : {type: Number},
    buy : {type: Number},
    sale : {type: Number},
    tem_min : {type: Number},
    tem_max : {type: Number},
    tem_max2 : {type: Number},
    province: {type: String, trim:true},
    psh: {type: Number},
    azimuth: {type: String, trim:true},
    altitute: {type: String, trim:true},
    hdts: {type: String, trim:true},
    PV_module: {type: String, trim:true},
    No_Pvs : {type: Number},
    meter: {type: String, trim:true}, 
    area: {type: String, trim:true},
    inv : {type: String, trim:true},
    
    num_inv : {type: Number},
    in_inv : {type: Number},
    string_input : {type: Number},
    PV_Stringmin : {type: Number},
    PV_String : {type: Number},
    PV_string_best : {type: Number},
    in_inv1 : {type: Number},
    st_in1 : {type: Number},
    Pv_st1 : {type: Number},
    in_inv2 : {type: Number},
    st_in2 : {type: Number},
    Pv_st2 : {type: Number},
    in_inv3 : {type: Number},
    st_in3 : {type: Number},
    pv_onein : {type: Number},
    stringtotal : {type: Number},
    saspv : {type: Number},

    how_wdc : {type: String, trim:true},  
    distance_dc : {type: String, trim:true}, 
    fuse : {type: String, trim:true},
    pv1f_string : {type: Number},
    vdroppv : {type: Number},
    pervdroppv : {type: Number},
    plosspv : {type: Number},
    perplosspv : {type: Number},
    cbdc : {type: Number},
    pv1f_array : {type: Number},
    fah : {type: String, trim:true}, 
    groundpv1 : {type: Number},
    
    type_wac : {type: String, trim:true}, 
    how_wac : {type: String, trim:true},
    distance_ac : {type: Number},
    cbac : {type: Number},
    wireac : {type: Number},
    ground_inv : {type: Number},
    vdropac : {type: Number},
    pervdropac : {type: Number},
    plossac : {type: Number},
    perplossac : {type: Number},
    type_wmdb : {type: String, trim:true},
    how_wacsolar : {type: String, trim:true},
    distance_acsolar : {type: Number},
    cb_mdb : {type: Number},
    wiremdb : {type: Number},
    ground_mdb : {type: Number},
    vdropmdb : {type: Number},
    pervdropmdb : {type: Number},
    plossmdb : {type: Number},
    perplossmdb : {type: Number},
    Pmax_dc : {type: String, trim:true},
    invest10 : {type: String, trim:true},
    energy10 : {type: String, trim:true},
    income10 : {type: String, trim:true},
    year10 : {type: Number},
    month10 : {type: Number},



    

   
    created_date: {type:Date, default: Date.now}
    
});


var Info3 = mongoose.model('infos3',infoSchema3);
module.exports = Info3;  
    


