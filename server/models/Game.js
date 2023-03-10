const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const gameSchema = new Schema({
	highscore: { type: Number, required: true },
	scores: [{ type: Number, required: false }],
	title: { type: String, required: true },
	user_id: { type: ObjectId, ref: "User",require: true },
	playingboard_id: { type: ObjectId,ref: "Playingboards", required: true },
});

module.exports = new Model("Game", gameSchema);
