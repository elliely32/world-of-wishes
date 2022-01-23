const User = require('../db/models/User');

const requireToken = async (req, res, next) => {
	try {
		const token = req.headers.authorization;
		const user = await User.findByToken(token);
		req.user = user;
		next();
	} catch (e) {
		next(e);
	}
};

const isAdmin = (req, res, next) => {
	console.log(req.user);
	if (!req.user.isAdmin) {
		return res.status(403).send('You shall not pass!');
	} else {
		next();
	}
};

module.exports = {
	requireToken,
	isAdmin,
};
