const router = require('express').Router();
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');
const {
	models: { Wish },
} = require('../db');

//Getting all wishes that have been approved
router.get('/', async (req, res, next) => {
	try {
		const wishes = await Wish.findAll({
			attributes: ['wishMessage'],
			where: {
				approved: true,
			},
		});
		res.json(wishes);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const { wishMessage } = req.body;
		res.status(201).send(await Wish.create({ wishMessage }));
	} catch (err) {
		next(err);
	}
});

router.get('/:wishId', async (req, res, next) => {
	try {
		const wish = await Wish.findByPk(req.params.wishId);
		res.json(wish);
	} catch (err) {
		next(err);
	}
});

router.put('/:wishId', requireToken, isAdmin, async (req, res, next) => {
	try {
		const wish = await Wish.findByPk(req.params.wishId);
		res.json(await wish.update({ approved: true }));
	} catch (err) {
		next(err);
	}
});

router.delete('/:wishId', requireToken, isAdmin, async (req, res, next) => {
	try {
		const findWish = await Wish.findByPk(req.params.wishId);
		if (findWish) {
			await findWish.destroy();
			res.send(findWish).sendStatus(204);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

router.get('/unapproved', requireToken, isAdmin, async (req, res, next) => {
	try {
		const wishes = await Wish.findAll({
			where: {
				approved: false,
			},
		});
		res.json(wishes);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
