'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class FireAngelSMOKE extends ZwaveDevice {

    onMeshInit() {

    	this.enableDebug();
        // print the node's info to the console
        this.printNode();

        this.registerCapability('measure_battery', 'BATTERY');

        this.registerCapability('alarm_smoke', 'NOTIFICATION', {
			getOpts: {
				getOnStart: true, // get the initial value on app start
				//pollInterval: 'poll_interval' // maps to device settings
			},
			report: 'NOTIFICATION_REPORT',
			reportParser: report => {
				if (report && report.hasOwnProperty('Notification Type') && report.hasOwnProperty('Event (Parsed)')) {
					if (report['Event (Parsed)'] === 'Smoke detected, Unknown Location' && report['Notification Type'] === 'Smoke') return true; 
					if (report['Event (Parsed)'] === 'Event inactive' && report['Notification Type'] === 'Smoke') return false;
				
				return null;
				}	
			},
		});

        this.registerCapability('smoke_test', 'NOTIFICATION', {
			getOpts: {
				getOnStart: true, // get the initial value on app start
				//pollInterval: 'poll_interval' // maps to device settings
			},
			report: 'NOTIFICATION_REPORT',
			reportParser: report => {
				if (report && report.hasOwnProperty('Notification Type') && report.hasOwnProperty('Event (Parsed)')) {
					if (report['Event (Parsed)'] === 'Smoke Alarm Test' && report['Notification Type'] === 'Smoke') return true; 
					if (report['Event (Parsed)'] === 'Event inactive' && report['Notification Type'] === 'Smoke') return false;
				
				return null;
				}	
			},
		});
    }
}

module.exports = FireAngelSMOKE;
