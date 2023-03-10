const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const playingboardSchema = new Schema({
	rows: { type: Array, required: true },
	playingboard_id: { type: ObjectId, required: true },
    
});

module.exports = new Model("Playingboards", playingboardSchema);