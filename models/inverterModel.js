var mongoose = require('mongoose');
// Schema Validation
var inverterSchema = mongoose.Schema({
    Manufacturer: {type: String, trim:true},
    Inverter: {type: String, trim:true,  required: true} ,
    Pinv_dc: {type: Number,  required: true },
    MPP_Voltage_range_min : {type: Number,  required: true},
    MPP_Voltage_range_max : {type: Number,  required: true},
    Vrated_dc : {type: Number,  required: true},
    Iinv_dcmax :  {type: Number,  required: true},
    Number_of_independent_MPP_inputs : {type: Number,  required: true},
    Pinv_ac:  {type: Number,  required: true},
    Iinv_acmax:{type: Number,  required: true},
    
    Efficiency: {type: Number,  required: true},
    Price: {type: Number},
    created_date:{type:Date, default: Date.now}
});

var Inverter = mongoose.model('inverters',inverterSchema);
module.exports = Inverter;

