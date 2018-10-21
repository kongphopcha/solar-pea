var mongoose = require('mongoose');
// Schema Validation
var loadSchema = mongoose.Schema({
    description : {type: String, trim:true},
    one : {type: Number,  required: true },
    two : {type: Number,  required: true },
    three : {type: Number, required: true },
    four : {type: Number,  required: true },
    five : {type: Number, required: true},
    six : {type: Number,  required: true},
    seven : {type: Number,  required: true},
    eight :  {type: Number, required: true},
    nine :  {type: Number, required: true},
    ten : {type: Number, required: true},
    eleven : {type: Number, required: true},
    twelve : {type: Number, required: true},
    thirteen : {type: Number, required: true},
    fourteen : {type: Number, required: true},
    fifteen : {type: Number, required: true},
    sixteen : {type: Number, required: true},
    seventeen : {type: Number, required: true},
    eighteen : {type: Number, required: true},
    nineteen : {type: Number, required: true},
    twenty : {type: Number, required: true},
    twenty_one : {type: Number, required: true},
    twenty_two : {type: Number, required: true},
    twenty_three : {type: Number, required: true},
    twenty_four : {type: Number, required: true},
    created_date:{type:Date, default: Date.now}
});
    

var Load = mongoose.model('loads',loadSchema);
module.exports = Load;