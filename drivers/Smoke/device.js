'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class FireAngelSMOKE extends ZwaveDevice {

    async onMeshInit() {

    	this.enableDebug();
        // print the node's info to the console
        this.printNode();

        this.registerCapability('measure_battery', 'BATTERY');
        this.registerCapability('alarm_smoke', 'NOTIFICATION');
    }
}

module.exports = FireAngelSMOKE;
