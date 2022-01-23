'use strict';

const {
	db,
	models: { User, Wish },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

const users = [
	{
		username: 'adminEllie',
		password: 'passwordlmao',
		isAdmin: true,
	},
	{
		username: 'wisher2022',
		password: 'wishingWell',
	},
	{
		username: 'King-iwnl',
		password: 'gamingGOD',
	},
];

const wishes = [
	{
		wishMessage: 'I hope I pass my MCAT',
		approved: true,
	},
	{
		wishMessage: 'I want a pay raise',
		approved: true,
	},
	{
		wishMessage: 'I wish I could go to my homeland again',
	},
	{
		wishMessage: 'I want to reach immortals in Valorant',
		approved: true,
	},
	{
		wishMessage: 'I want to get c6 Ganyu',
	},
];
async function seed() {
	await db.sync({ force: true }); // clears db and matches models to tables
	console.log('db synced!');

	await Promise.all(
		users.map((user) => {
			return User.create(user);
		})
	);

	await Promise.all(
		wishes.map((wish) => {
			return Wish.create(wish);
		})
	);

	// wishes[1].setUser(users[1]);
	// wishes[3].setUser(users[2]);
	// wishes[4].setUser(users[2]);

	console.log(`seeded successfully`);
	return wishes, users;
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
	console.log('seeding...');
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log('closing db connection');
		await db.close();
		console.log('db connection closed');
	}
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
	runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
