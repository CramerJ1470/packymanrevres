const jwt = require("jsonwebtoken");
const secret = "yourSecretStringHere";
const models = require("../models");
let token = 
	"yourTokenHere";

function verifyToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, secret, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	});
}
console.log(verifyToken(token));
console.log(`hey now: `, models.TokenBlacklist.findOne({ token }));