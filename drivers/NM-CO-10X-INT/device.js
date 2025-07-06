'use strict';

const ZwaveDevice = require('homey-zwavedriver').ZwaveDevice;

class FireAngelCO extends ZwaveDevice {

  async onNodeInit() {

  	this.enableDebug();
    // print the node's info to the console
    this.printNode();

    this.registerCapability('measure_battery', 'BATTERY');
    this.registerCapability('alarm_co', 'NOTIFICATION');
  }
}

module.exports = FireAngelCO;
