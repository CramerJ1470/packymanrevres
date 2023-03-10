const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Playingboards.find()
			.then((playingboards) => res.send(playingboards))
			.catch(next);
	},
	post: (req, res, next) => {
		const { description } = req.body;
		const { _id } = req.user;

		models.Playingboards.create({ description, uploadedBy: _id })
			.then((createdPlayingboards) => {
				return Promise.all([
					models.User.updateOne(
						{ _id },
						{ $push: { posts: createdPlayingboards } }
					),
					models.Playingboards.findOne({
						_id: createdPlayingboards._id,
					}),
				]);
			})
			.then(([modifiedObj, PlayingboardsObj]) => {
				res.send(PlayingboardsObj);
			})
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
