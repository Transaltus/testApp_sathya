sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"project2/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("project2.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
            this.setModel(models.createDeviceModel(), "device");
            
            this.getRouter().initialize();
			this.setModel(models.NewControlsModel(), "NCM");
			this.setModel(models.NavigateModel(), "Main");
			this.setModel(models.AssessmentModel(), "Assessment");
			this.setModel(models.TaskModel(), "Tasks");
			this.setModel(models.JobLocationsModel(), "JobLocations");
			this.setModel(models.ModeModel(), "Mode");
		}
	});
});
