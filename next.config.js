const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
	env : {
		title            : 'Elsa',
		titleDescription : 'Elsa',
		baseDomain       : 'http://localhost:5000/api',
	},
	target: "serverless",
};

module.exports = withPlugins([ withImages(), nextSettings ]);