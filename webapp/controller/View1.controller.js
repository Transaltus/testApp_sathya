sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "project2/EXCEL/jszip",
	"project2/EXCEL/xlsx",
	"sap/ui/export/Spreadsheet"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, jszip, xlsx, Spreadsheet) {
		"use strict";

		return Controller.extend("project2.controller.View1", {
			onInit: function () {
                    var that = this;
                    this.ErrorLogModel = new sap.ui.model.json.JSONModel();
            },
            onDownloadExcel: function () {
                var projPath = jQuery.sap.getModulePath("project2");
			    var filePath = projPath + "/ExcelFormat/Job_hazard_Analysis_Format_1.xlsx";
			
			    sap.m.URLHelper.redirect(filePath, true);
            },
            onDownloadStatus: function () {
                var aCols, aProducts, oSettings, oSheet;

			    aCols = this.createColumnConfig();
			    var data = this.ErrorLogModel.getData();
			    aProducts = [];
			    for (var i = 0; i < data.length; i++) {
			    	aProducts.push(data[i]);
			    }

			    oSettings = {
			    	workbook: {
					columns: aCols
				},
				    dataSource: aProducts
			    };
			    oSheet = new Spreadsheet(oSettings);
			    oSheet.build()
				.then(function () {
					sap.m.MessageToast.show('Status Log export has finished');
				})
				.finally(function () {
					oSheet.destroy();
				});
            },
            createColumnConfig: function () {
			    return [{
				    label: 'ID',
				    property: 'ID',
				    width: '20'
		    	}, {
			    	label: 'Sheet Name',
			    	property: 'SN',
			    	width: '30'
			    }, {
				    label: 'Error Description',
			    	property: 'Desc',
			    	width: '40'
			    }];
            },
            onUploadExcel: function () {
                var that = this;

			    var fu = this.getView().byId("fup");
			
			    if (!fu.getValue()) {
				sap.m.MessageToast.show("No file choosen");
				return;
                }  else {
				// oTable.setBusy(true);
				var file = fu.getFocusDomRef().files[0];
				if (file && window.FileReader) {
					var reader = new FileReader();
					reader.onload = function (e) {

						var strCSV = e.target.result;
						var XL_row_object = [];
						var workbook = XLSX.read(strCSV, {
							type: 'binary'
						});
						var sheetName = workbook.SheetNames[0];
						XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
						that.BankDetArray = [];

						///////////////////
						var date = new Date();
						var month = date.getMonth() + 1;
						var da = date.getDate();
						var correctedMonth;
						var correctedDate;
						if (month < 10) {
							correctedMonth = "0" + month;
						} else {
							correctedMonth = month;
						}
						if (da < 10) {
							correctedDate = "0" + da;
						} else {
							correctedDate = da;
						}
						var dt = correctedDate + "/" + correctedMonth + "/" + date.getFullYear() + "  " + date.getHours() + ":" + date.getMinutes() +
							":" +
							date.getSeconds();

						/////////////////////

						for (var A = 0; A < XL_row_object.length; A++) {

							that.BankDetArray.push({
								VID: XL_row_object[A].ID,
								title: XL_row_object[A].Title,
								date: dt,
								location1: XL_row_object[A].Location,
								job: XL_row_object[A].Job,
								ops: XL_row_object[A].Operational_Status,
								RTable: [],
								REATable: [],
								TTable: [],
								remarks: "",
								Risks: [],
								Locations: []
							});
						}

						var XL_row_object4 = [];
						var sheetName4 = workbook.SheetNames[4];
						XL_row_object4 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName4]);
						that.BankDetArray1 = [];
						for (var b = 0; b < XL_row_object4.length; b++) {
							that.BankDetArray1.push({
								VID: XL_row_object4[b].ID,
								jobstep: XL_row_object4[b].Job_Steps,
								hazardcat: XL_row_object4[b].Hazard_category,
								hazards: XL_row_object4[b].Hazard,
								impacts: XL_row_object4[b].Impacts,
								EC: XL_row_object4[b].Existing_Controls,
								rb3: 2,
								NC: [],
								state: "Success",
								icon: "sap-icon://sys-enter-2",
								rbg3: 2,
								ST1SEL_LH: XL_row_object4[b].IR_Likelihood,
								ST1SEL_SV: XL_row_object4[b].IR_Severity,
								ST1_RV: XL_row_object4[b].Inherent_Risk,
								st2_RBG: 2,
								ST2SEL_LH: XL_row_object4[b].RR_Likelihood,
								ST2SEL_SV: XL_row_object4[b].RR_Severity,
								ST2_RV: XL_row_object4[b].Residual_Risk

							});
						}

						var XL_row_object5 = [];
						var sheetName5 = workbook.SheetNames[5];
						XL_row_object5 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName5]);
						that.BankDetArray2 = [];
						for (var c = 0; c < XL_row_object5.length; c++) {
							that.BankDetArray2.push({
								VID: XL_row_object5[c].ID,
								location: XL_row_object5[c].Job_Locations

							});
						}

						var XL_row_object6 = [];
						var sheetName6 = workbook.SheetNames[6];
						XL_row_object6 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName6]);
						that.DefineNC = [];
						for (var cc = 0; cc < XL_row_object6.length; cc++) {
							that.DefineNC.push({
								VID: XL_row_object6[cc].ID,
								jobstep: XL_row_object6[cc].Job_Steps,
								name: XL_row_object6[cc].Define_New_Controls,
								text: "Update Task",
								task: [{
									RAID: "",
									tcat: XL_row_object6[cc].Category,
									tpriority: XL_row_object6[cc].Priority,
									ttype: XL_row_object6[cc].Type,
									tsubtype: XL_row_object6[cc].Subtype,
									ttitle: XL_row_object6[cc].Title,
									tAN: XL_row_object6[cc].Action_Nature,
									tdesc: "",
									tdate: "",
									ttime: "",
									trecu: "",
									tdue: "",
									tperiod: "",
									tresponsible: XL_row_object6[cc].Responsible,
									timplementer: XL_row_object6[cc].Implementer,
									tapprover: XL_row_object6[cc].Approver
								}]
							});
						}

						var XL_row_object1 = [];
						var sheetName1 = workbook.SheetNames[1];
						XL_row_object1 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName1]);
						that.regu = [];
						for (var l = 0; l < XL_row_object1.length; l++) {
							var REF = "";
							if (XL_row_object1[l].Regulations === "TRGS Technical rules") {
								REF = "http://www.baua.de";
							} else if (XL_row_object[l].Regulations === "ACGIG Publications") {
								REF = "http://www.acgig.org";
							}
							that.regu.push({
								VID: XL_row_object1[l].ID,
								regulation: XL_row_object1[l].Regulations,

								reference: REF

							});
						}

						var XL_row_object2 = [];
						var sheetName2 = workbook.SheetNames[2];
						XL_row_object2 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName2]);
						that.reasonss = [];
						for (var m = 0; m < XL_row_object2.length; m++) {
							that.reasonss.push({
								VID: XL_row_object2[m].ID,
								reason: XL_row_object2[m].Assesment_Reason,
								reference: ""

							});
						}

						var XL_row_object3 = [];
						var sheetName3 = workbook.SheetNames[3];
						XL_row_object3 = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName3]);
						that.assessteam = [];
						for (var n = 0; n < XL_row_object3.length; n++) {
							that.assessteam.push({
								VID: XL_row_object3[n].ID,
								name: XL_row_object3[n].Assessment_Team,
								position: XL_row_object3[n].SAP_ID,
								role: XL_row_object3[n].Role

							});
						}

						this.object = that.BankDetArray;
						this.risks = that.BankDetArray1;
						this.JL = that.BankDetArray2;

						this.DNC = that.DefineNC;

						/////////////////////////////////////////////////////////////

						for (var dd = 0; dd < this.DNC.length; dd++) {
							for (var ef = 0; ef < this.risks.length; ef++) {
								if (this.DNC[dd].VID === this.risks[ef].VID && this.DNC[dd].jobstep === this.risks[ef].jobstep) {
									this.risks[ef].NC.push(this.DNC[dd]);
									if (dd === this.DNC.length - 1) {
										// return pd;
										break;
									}
								} else {
									if (ef === this.risks.length - 1) {
										if (dd === this.DNC.length - 1) {
											// return pd;
											break;
										}
									}

								}
							}
						}

						for (var d = 0; d < this.risks.length; d++) {
							for (var e = 0; e < this.object.length; e++) {
								if (this.risks[d].VID === this.object[e].VID) {
									this.object[e].Risks.push(this.risks[d]);
									if (d === this.risks.length - 1) {
										// return pd;
										break;
									}
								} else {
									if (e === this.object.length - 1) {
										if (d === this.risks.length - 1) {
											// return pd;
											break;
										}
									}

								}
							}
						}

						for (var f = 0; f < this.JL.length; f++) {
							for (var g = 0; g < this.object.length; g++) {
								if (this.JL[f].VID === this.object[g].VID) {
									this.object[g].Locations.push(this.JL[f]);
									if (f === this.JL.length - 1) {
										// return pd;
										break;
									}
								} else {
									if (g === this.object.length - 1) {
										if (f === this.JL.length - 1) {
											// return pd;
											break;
										}
									}

								}
							}
						}

						for (var o = 0; o < that.regu.length; o++) {
							for (var p = 0; p < this.object.length; p++) {
								if (that.regu[o].VID === this.object[p].VID) {
									this.object[p].RTable.push(that.regu[o]);
									if (o === that.regu.length - 1) {
										// return pd;
										break;
									}
								} else {
									if (p === this.object.length - 1) {
										if (o === that.regu.length - 1) {
											// return pd;
											break;
										}
									}

								}
							}
						}

						for (var q = 0; q < that.reasonss.length; q++) {
							for (var r = 0; r < this.object.length; r++) {
								if (that.reasonss[q].VID === this.object[r].VID) {
									this.object[r].REATable.push(that.reasonss[q]);
									if (q === that.reasonss.length - 1) {
										// return pd;
										break;
									}
								} else {
									if (r === this.object.length - 1) {
										if (q === that.reasonss.length - 1) {
											// return pd;
											break;
										}
									}

								}
							}
						}

						for (var s = 0; s < that.assessteam.length; s++) {
							for (var t = 0; t < this.object.length; t++) {
								if (that.assessteam[s].VID === this.object[t].VID) {
									this.object[t].TTable.push(that.assessteam[s]);
									if (s === that.assessteam.length - 1) {
										// return pd;
										break;
									}
								} else {
									if (t === this.object.length - 1) {
										if (s === that.assessteam.length - 1) {
											// return pd;
											break;
										}
									}

								}
							}
						}

						///////////////////////////////////////////////////////////

						var logarray = [];

						var errordescArray = [];

						for (var h = 0; h < this.object.length; h++) {
							if (this.object[h].title === ("" || undefined) || this.object[h].location1 === ("" || undefined) || this.object[h].job ===
								("" ||
									undefined) || this.object[h].ops === ("" || undefined)) {
								logarray.push({
									ID: this.object[h].VID,
									status: "Upload Failed",
									RAID: "***",
									state: "Error"
								});
								if (this.object[h].title === ("" || undefined)) {
									errordescArray.push({
										ID: this.object[h].VID,
										SN: "Basic Information",
										Desc: "Title is Empty"
									});
								}
								if (this.object[h].location1 === ("" || undefined)) {
									errordescArray.push({
										ID: this.object[h].VID,
										SN: "Basic Information",
										Desc: "Location is Empty"
									});
								}
								if (this.object[h].job === ("" || undefined)) {
									errordescArray.push({
										ID: this.object[h].VID,
										SN: "Basic Information",
										Desc: "Job is Empty"
									});
								}
								if (this.object[h].ops === ("" || undefined)) {
									errordescArray.push({
										ID: this.object[h].VID,
										SN: "Basic Information",
										Desc: "Operational Status is Empty"
									});
								}
							} else {
								var risksdata = that.getView().getModel("Assessment").getData();
								var tasksdata = that.getView().getModel("Tasks").getData();
								var joblocationsData = that.getView().getModel("JobLocations").getData();
								var maindata = that.getView().getModel("Main").getData();
								var lastid = Number(maindata.length) - 1;
								var newid = Number(maindata[lastid].id) + 1;
								logarray.push({
									ID: this.object[h].VID,
									status: "Upload Success",
									RAID: newid + "",
									state: "Success"
								});
								maindata.push({
									title: this.object[h].title,
									id: newid + "",
									jt: "JSA",
									status: "In Process",
									date: this.object[h].date,
									location1: this.object[h].location1,
									job: this.object[h].job,
									ops: this.object[h].ops,
									RTable: this.object[h].RTable,
									REATable: this.object[h].REATable,
									TTable: this.object[h].TTable,
									remarks: ""
								});

								for (var j = 0; j < this.object[h].Risks.length; j++) {
									risksdata.push({
										jobstep: this.object[h].Risks[j].jobstep,
										hazardcat: this.object[h].Risks[j].hazardcat,
										hazards: this.object[h].Risks[j].hazards,
										impacts: this.object[h].Risks[j].impacts,
										EC: this.object[h].Risks[j].EC,
										rb3: this.object[h].Risks[j].rb3,
										NC: this.object[h].Risks[j].NC,
										state: "Success",
										icon: "sap-icon://sys-enter-2",
										rbg3: 2,
										ST1SEL_LH: this.object[h].Risks[j].ST1SEL_LH,
										ST1SEL_SV: this.object[h].Risks[j].ST1SEL_SV,
										ST1_RV: this.object[h].Risks[j].ST1_RV,
										st2_RBG: 2,
										ST2SEL_LH: this.object[h].Risks[j].ST2SEL_LH,
										ST2SEL_SV: this.object[h].Risks[j].ST2SEL_SV,
										ST2_RV: this.object[h].Risks[j].ST2_RV,
										RAID: newid + ""

									});
								}
								for (var k = 0; k < this.object[h].Locations.length; k++) {
									joblocationsData.push({
										RAID: newid + "",
										location: this.object[h].Locations[k].location
									});
								}

							}
						}

						///////////////////////////////////////////////////////////////
						that.getView().getModel("Main").setData(maindata);
						that.getView().getModel("Main").refresh();

						that.getView().getModel("Assessment").setData(risksdata);
						that.getView().getModel("Assessment").refresh();

						that.getView().getModel("JobLocations").setData(joblocationsData);
						that.getView().getModel("JobLocations").refresh();
						var jsonmodel = new sap.ui.model.json.JSONModel(logarray);
						that.getView().setModel(jsonmodel, "res");
						jsonmodel.setSizeLimit(
							logarray.length);
						that.getView().byId("fup").setValue();

						that.ErrorLogModel.setData(errordescArray);
						//////////////////////////////////////////////////////////////

					};
				}

				reader.onerror = function (ex) {
					// console.log(ex);
				};

				reader.readAsBinaryString(file);

			}
                // this.getView().byId("res_table").setVisible(true);
                // this.getView().byId("idStatusBtn").setVisible(true);
            },
            OpenPOPOVER: function (oEvent) {
			var data = this.ErrorLogModel.getData();

			//	var data = this.getView().getModel("Assessment").getData();
			var id = oEvent.getSource().getParent().getCells()[0].getTitle();
			var filtered = [];
			for (var i = 0; i < data.length; i++) {
				if (data[i].ID == id) {
					filtered.push(data[i]);
				}
			}
			var filteredModel = new sap.ui.model.json.JSONModel(filtered);
			//	this.getView().byId("table2").setModel(filteredModel, "FM_ASSESSMENT");

			if (!this._oPopover) {
				this._oPopover = new sap.ui.xmlfragment("project2", this);
				this.getView().addDependent(this._oPopover);
			}
			this._oPopover.openBy(oEvent.getSource());
			this._oPopover.setModel(filteredModel, "FM");

        },
        onUploadCompleteFUP: function () {
            // this.getView().byId("idXlIcon").setVisible(true);
        }


		});
	});
