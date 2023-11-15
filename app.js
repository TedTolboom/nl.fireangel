'use strict';

const Homey = require('homey');

class FireAngel extends Homey.App {

  onInit() {
    this.log('FireAngel Z-wave app is running...');

    // Register triggers for flows
    this._triggerSmokeTestTrue = this.homey.flow.getDeviceTriggerCard('smoke_test_onoff_true');
    this._triggerSmokeTestFalse = this.homey.flow.getDeviceTriggerCard('smoke_test_onoff_false');
  }

}

module.exports = FireAngel;
