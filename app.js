'use strict';

const Homey = require('homey');
const { Log } = require('homey-log');

class FireAngel extends Homey.App {

	onInit() {
		this.log('FireAngel Z-wave app is running...');

		// Register triggers for flows
		this._triggerSmokeTestTrue = new Homey.FlowCardTriggerDevice('smoke_test_onoff_true').register();
		this._triggerSmokeTestFalse = new Homey.FlowCardTriggerDevice('smoke_test_onoff_false').register();

	}
}

module.exports = FireAngel;
