const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
	env: {
		title: 'ELSA',
		titleDescription: 'ELSA',
		baseDomain: 'http://localhost:5000/api',
	},
	target: "serverless",
	images: {
		disableStaticImages: true
	}
};

module.exports = withPlugins([withImages(), nextSettings]);
