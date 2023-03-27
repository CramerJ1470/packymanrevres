const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId ,Array} = Schema.Types;

const playingboardSchema = new Schema({
	rows: { type: Array, required: true },
	userId: { type: String, required: true },
    
});



module.exports = new Model("Playingboards", playingboardSchema);