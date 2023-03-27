const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Playingboards.find()
			.then((playingboards) => res.send(playingboards))
			.catch(next);
	},
	post: (req, res, next) => {
		const { rows,userId } = req.body;
		
		models.Playingboards.create({ rows ,userId })
		.then((createdPlayingboard) => res.send(createdPlayingboard))
		.catch(next);
},
	
	put: (req, res, next) => {
		const id = req.params.id;
		const { description } = req.body;
		models.Playingboards.updateOne({ _id: id }, { description })
			.then((updatedPlayingboards) => res.send(updatedPlayingboards))
			.catch(next);
	},

	delete: (req, res, next) => {
		const id = req.params.id;
		models.Playingboards.deleteOne({ _id: id })
			.then((removedPlayingboards) => res.send(removedPlayingboards))
			.catch(next);
	},
};
