sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		NavigateModel: function () {
			var oModel = new JSONModel([{
				title: "Welding Work",
				id: "546",
				jt: "JSA",
				status: "In Process",
				date: "04/04/2020 13:8:36",
				location1: "Location1",
				job: "Welding",
				ops: "Normal Operation",
				RTable: [{
					VID: "",
					regulation: "ACGIG Publications",
					reference: "http://www.acgig.org"
				}],

				REATable: [{
					VID: "",
					reason: "Regulation",
					reference: ""
				}],
				TTable: [{
					VID: "",
					name: "Karthik",
					position: "P2",
					role: "Assessment Approver"
				}],
				remarks: ""

			}, {
				title: "Knurling Work",
				id: "547",
				jt: "JSA",
				status: "Completed",
				date: "05/05/2020 13:8:36",
				location1: "location2",
				job: "Knurling",
				ops: "Normal Operation",
				RTable: [{
					VID: "",
					regulation: "ACGIG Publications",
					reference: "http://www.acgig.org"
				}],
				REATable: [{
					VID: "",
					reason: "Regulation",
					reference: ""
				}],
				TTable: [{
					VID: "",
					name: "Karthik",
					position: "P2",
					role: "Assessment Approver"
				}],
				remarks: ""
			}, {
				title: "Work",
				id: "548",
				jt: "JSA",
				status: "Completed",
				date: "06/06/2020 13:8:36",
				location1: "location3",
				job: "Welding",
				ops: "Normal Operation",
				RTable: [{
					VID: "",
					regulation: "ACGIG Publications",
					reference: "http://www.acgig.org"
				}],
				REATable: [{
					VID: "",
					reason: "Regulation",
					reference: ""
				}],
				TTable: [{
					VID: "",
					name: "Karthik",
					position: "P2",
					role: "Assessment Approver"
				}],
				remarks: ""
			}, {
				title: "Work",
				id: "549",
				jt: "JSA",
				status: "Completed",
				date: "07/07/2020 13:8:36",
				location1: "location4",
				job: "Welding",
				ops: "Normal Operation",
				RTable: [{
					VID: "",
					regulation: "ACGIG Publications",
					reference: "http://www.acgig.org"
				}],
				REATable: [{
					VID: "",
					reason: "Regulation",
					reference: ""
				}],
				TTable: [{
					VID: "",
					name: "Karthik",
					position: "P2",
					role: "Assessment Approver"
				}],
				remarks: ""
			}]);
			return oModel;
		},
		AssessmentModel: function () {
			var oModel = new JSONModel([{
				jobstep: "Job Step 1",
				hazardcat: "Biological",
				hazards: "Cold Stress",
				impacts: "Fire",
				EC: "Vending",
				rb3: 2,
				NC: [{
					name: "Air Purifying Respirator",
					text: "Update Task",
					task: [{
						RAID: "546",
						tcat: "Action",
						tpriority: "Normal",
						ttype: "A",
						tsubtype: "B",
						ttitle: "546",
						tAN: "Corrective",
						tdesc: "",
						tdate: "Nov 2, 2020",
						ttime: "2:47:08 PM",
						trecu: "Only Once",
						tdue: "1",
						tperiod: "Year",
						tresponsible: "5462313",
						timplementer: "546",
						tapprover: "546"
					}]
				}, {
					name: "Daily Site Inspection",
					text: "Update Task",
					task: [{
						RAID: "546",
						tcat: "Action",
						tpriority: "Normal",
						ttype: "A",
						tsubtype: "B",
						ttitle: "546",
						tAN: "Corrective",
						tdesc: "",
						tdate: "Nov 2, 2020",
						ttime: "2:47:08 PM",
						trecu: "Only Once",
						tdue: "1",
						tperiod: "Year",
						tresponsible: "aaaa",
						timplementer: "546",
						tapprover: "546"
					}]
				}],
				state: "Success",
				icon: "sap-icon://sys-enter-2",
				rbg3: 2,
				ST1SEL_LH: "Likely",
				ST1SEL_SV: "Minor",
				ST1_RV: "H12",
				st2_RBG: 2,
				ST2SEL_LH: "Likely",
				ST2SEL_SV: "Major",
				ST2_RV: "E21",
				RAID: "546",
				index: 0
			}, {
				jobstep: "Job Step 1",
				hazardcat: "Biological",
				hazards: "Cold Stress",
				impacts: "Fire",
				EC: "Vending",
				rb3: 2,
				NC: [{
					name: "Air Purifying Respirator",
					text: "Update Task",
					task: [{
						RAID: "546",
						tcat: "Action",
						tpriority: "Normal",
						ttype: "A",
						tsubtype: "B",
						ttitle: "546",
						tAN: "Corrective",
						tdesc: "",
						tdate: "Nov 2, 2020",
						ttime: "2:47:08 PM",
						trecu: "Only Once",
						tdue: "1",
						tperiod: "Year",
						tresponsible: "546",
						timplementer: "546",
						tapprover: "546"
					}]
				}, {
					name: "Daily Site Inspection",
					text: "Update Task",
					task: [{
						RAID: "546",
						tcat: "Action",
						tpriority: "Normal",
						ttype: "A",
						tsubtype: "B",
						ttitle: "546",
						tAN: "Corrective",
						tdesc: "",
						tdate: "Nov 2, 2020",
						ttime: "2:47:08 PM",
						trecu: "Only Once",
						tdue: "1",
						tperiod: "Year",
						tresponsible: "546",
						timplementer: "546",
						tapprover: "546"
					}]
				}],
				state: "Success",
				icon: "sap-icon://sys-enter-2",
				rbg3: 2,
				ST1SEL_LH: "Likely",
				ST1SEL_SV: "Minor",
				ST1_RV: "H12",
				st2_RBG: 2,
				ST2SEL_LH: "Likely",
				ST2SEL_SV: "Major",
				ST2_RV: "E21",
				RAID: "547",
				index: 0
			}, {
				jobstep: "Job Step 1",
				hazardcat: "Biological",
				hazards: "Cold Stress",
				impacts: "Fire",
				EC: "Vending",
				rb3: 2,
				NC: [{
					name: "Air Purifying Respirator",
					text: "Update Task",
					task: [{
						RAID: "546",
						tcat: "Action",
						tpriority: "Normal",
						ttype: "A",
						tsubtype: "B",
						ttitle: "546",
						tAN: "Corrective",
						tdesc: "",
						tdate: "Nov 2, 2020",
						ttime: "2:47:08 PM",
						trecu: "Only Once",
						tdue: "1",
						tperiod: "Year",
						tresponsible: "546",
						timplementer: "546",
						tapprover: "546"
					}]
				}, {
					name: "Daily Site Inspection",
					text: "Update Task",
					task: [{
						RAID: "546",
						tcat: "Action",
						tpriority: "Normal",
						ttype: "A",
						tsubtype: "B",
						ttitle: "546",
						tAN: "Corrective",
						tdesc: "",
						tdate: "Nov 2, 2020",
						ttime: "2:47:08 PM",
						trecu: "Only Once",
						tdue: "1",
						tperiod: "Year",
						tresponsible: "546",
						timplementer: "546",
						tapprover: "546"
					}]
				}],
				state: "Success",
				icon: "sap-icon://sys-enter-2",
				rbg3: 2,
				ST1SEL_LH: "Likely",
				ST1SEL_SV: "Minor",
				ST1_RV: "H12",
				st2_RBG: 2,
				ST2SEL_LH: "Likely",
				ST2SEL_SV: "Major",
				ST2_RV: "E21",
				RAID: "548",
				index: 0
			}, {
				jobstep: "Job Step 1",
				hazardcat: "Biological",
				hazards: "Cold Stress",
				impacts: "Fire",
				EC: "Vending",
				rb3: 2,
				NC: [{
					name: "Air Purifying Respirator",
					text: "Update Task",
					task: [{
						RAID: "546",
						tcat: "Action",
						tpriority: "Normal",
						ttype: "A",
						tsubtype: "B",
						ttitle: "546",
						tAN: "Corrective",
						tdesc: "",
						tdate: "Nov 2, 2020",
						ttime: "2:47:08 PM",
						trecu: "Only Once",
						tdue: "1",
						tperiod: "Year",
						tresponsible: "546",
						timplementer: "546",
						tapprover: "546"
					}]
				}, {
					name: "Daily Site Inspection",
					text: "Update Task",
					task: [{
						RAID: "546",
						tcat: "Action",
						tpriority: "Normal",
						ttype: "A",
						tsubtype: "B",
						ttitle: "546",
						tAN: "Corrective",
						tdesc: "",
						tdate: "Nov 2, 2020",
						ttime: "2:47:08 PM",
						trecu: "Only Once",
						tdue: "1",
						tperiod: "Year",
						tresponsible: "546",
						timplementer: "546",
						tapprover: "546"
					}]
				}],
				state: "Success",
				icon: "sap-icon://sys-enter-2",
				rbg3: 2,
				ST1SEL_LH: "Likely",
				ST1SEL_SV: "Minor",
				ST1_RV: "H12",
				st2_RBG: 2,
				ST2SEL_LH: "Likely",
				ST2SEL_SV: "Major",
				ST2_RV: "E21",
				RAID: "549",
				index: 0
			}, {
				jobstep: "Job Step 2",
				hazardcat: "Physical",
				hazards: "Cold Stress",
				impacts: "Fire, Burning, Explosion",
				EC: "Vending",
				rb3: 2,
				NC: [{
					name: "Air Purify",
					text: "Update Task",
					task: [{
						RAID: "546",
						tcat: "Action",
						tpriority: "Normal",
						ttype: "A",
						tsubtype: "B",
						ttitle: "546",
						tAN: "Corrective",
						tdesc: "",
						tdate: "Nov 2, 2020",
						ttime: "2:47:08 PM",
						trecu: "Only Once",
						tdue: "1",
						tperiod: "Year",
						tresponsible: "546",
						timplementer: "546",
						tapprover: "546"
					}]
				}, {
					name: "Daily Site",
					text: "Update Task",
					task: [{
						RAID: "546",
						tcat: "Action",
						tpriority: "Normal",
						ttype: "A",
						tsubtype: "B",
						ttitle: "546",
						tAN: "Corrective",
						tdesc: "",
						tdate: "Nov 2, 2020",
						ttime: "2:47:08 PM",
						trecu: "Only Once",
						tdue: "1",
						tperiod: "Year",
						tresponsible: "546",
						timplementer: "546",
						tapprover: "546"
					}]
				}],
				state: "Success",
				icon: "sap-icon://sys-enter-2",
				rbg3: 2,
				ST1SEL_LH: "Likely",
				ST1SEL_SV: "Minor",
				ST1_RV: "H12",
				st2_RBG: 2,
				ST2SEL_LH: "Likely",
				ST2SEL_SV: "Major",
				ST2_RV: "E21",
				RAID: "549",
				index: 1
			}]);
			return oModel;
		},
		TaskModel: function () {
			var oModel = new JSONModel([{
				RAID: "546",
				tcat: "Action",
				tpriority: "Normal",
				ttype: "A",
				tsubtype: "B",
				ttitle: "546",
				tAN: "Corrective",
				tdesc: "",
				tdate: "Nov 2, 2020",
				ttime: "2:47:08 PM",
				trecu: "Only Once",
				tdue: "1",
				tperiod: "Year",
				tresponsible: "546",
				timplementer: "546",
				tapprover: "546"
			}, {
				RAID: "547",
				tcat: "Action",
				tpriority: "Normal",
				ttype: "A",
				tsubtype: "B",
				ttitle: "547",
				tAN: "Corrective",
				tdesc: "",
				tdate: "Nov 2, 2020",
				ttime: "2:47:08 PM",
				trecu: "Only Once",
				tdue: "1",
				tperiod: "Year",
				tresponsible: "547",
				timplementer: "547",
				tapprover: "547"
			}, {
				RAID: "548",
				tcat: "Action",
				tpriority: "Normal",
				ttype: "A",
				tsubtype: "B",
				ttitle: "548",
				tAN: "Corrective",
				tdesc: "",
				tdate: "Nov 2, 2020",
				ttime: "2:47:08 PM",
				trecu: "Only Once",
				tdue: "1",
				tperiod: "Year",
				tresponsible: "548",
				timplementer: "548",
				tapprover: "548"
			}, {
				RAID: "549",
				tcat: "Action",
				tpriority: "Normal",
				ttype: "A",
				tsubtype: "B",
				ttitle: "549",
				tAN: "Corrective",
				tdesc: "",
				tdate: "Nov 2, 2020",
				ttime: "2:47:08 PM",
				trecu: "Only Once",
				tdue: "1",
				tperiod: "Year",
				tresponsible: "549",
				timplementer: "549",
				tapprover: "549"
			}]);
			return oModel;
		},
		ModeModel: function () {
			var oModel = new JSONModel({
				mode: "",
				"id": "",
				path: "",
				stat: "",
				location: ""
			});
			return oModel;
		},
		JobLocationsModel: function () {
			var oModel = new JSONModel([{
				RAID: "547",
				location: "6422- Oficinas / ID: 990"
			}]);
			return oModel;
		},
		NewControlsModel: function () {
			var oModel = new JSONModel([{
				name: "Air Purifying Respirator"
			}, {
				name: "Daily Site Inspection"
			}, {
				name: "Standard Operating Procedures"
			}, {
				name: "Proper handling of bags"
			}, {
				name: "Proper cleaning of the wet floor"
			}, {
				name: "On the job safety training"
			}, {
				name: "Trained personnel"
			}]);
			return oModel;
		}

	};
});