sap.ui.controller("hcm.fab.myprofile.HCMFAB_PRFL_MONExtension.blocks.PersInfoBankBlockControllerCustom", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf hcm.fab.myprofile.HCMFAB_PRFL_MONExtension.blocks.PersInfoBankBlockControllerCustom
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf hcm.fab.myprofile.HCMFAB_PRFL_MONExtension.blocks.PersInfoBankBlockControllerCustom
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf hcm.fab.myprofile.HCMFAB_PRFL_MONExtension.blocks.PersInfoBankBlockControllerCustom
	 */
	onAfterRendering: function () {
		$("div[id$='ProfileOverview--bankSubSection']").prop('title', 'Nur deutsche Bankverbindungen');
		// document.getElementById("application-PersonnelProfile-display-component---ProfileOverview--bankSubSection").title =
		// 	"Nur deutsche Bankverbindungen";
	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf hcm.fab.myprofile.HCMFAB_PRFL_MONExtension.blocks.PersInfoBankBlockControllerCustom
	 */
	//	onExit: function() {
	//
	//	},

	//	onDataRequested: function() {
	//
	//	}
	//	onChange: function(e) {
	//
	//	}
	//	onNavToBankDetailsPress: function() {
	//
	//	}
	//	getVisibility: function(s, a, b) {
	//
	//	}
	//	formatPostalCodeCityLabel: function(p, P, c, a) {
	//
	//	}
	//	getPersinfoLabel: function(p, a, s) {
	//
	//	}

});