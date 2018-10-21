var mongoose = require('mongoose');
// Schema Validation
var pvSchema = mongoose.Schema({
    Manufacturer: {type: String, trim:true},
    PV_module: {type: String, trim:true} ,
    Pmax: {type: Number, required: true },
    Vmp : {type: Number,  required: true },
    Imp : {type: Number, required: true},
    Voc : {type: Number,  required: true},
    Isc : {type: Number,  required: true},
    
    Temperature_Coefficient_of_Pmax:  {type: Number, required: true},
    Temperature_Coefficient_of_Voc:  {type: Number, required: true},
    Length : {type: Number, required: true},
    Price : {type: Number},
    created_date:{type:Date, default: Date.now}
});
    

var Pv = mongoose.model('pvs',pvSchema);
module.exports = Pv;