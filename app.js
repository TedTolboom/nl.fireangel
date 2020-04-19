'use strict';

const Homey = require('homey');
const { Log } = require('homey-log');

class FireAngel extends Homey.App {

	onInit() {
		this.log('FireAngel Z-wave app is running...');
	}
}

module.exports = FireAngel;
