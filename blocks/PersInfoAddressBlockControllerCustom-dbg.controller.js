sap.ui.define([
	"hcm/fab/myprofile/controller/BaseController",
	"hcm/fab/myprofile/utils/reuseHandler",
	"hcm/fab/myprofile/utils/formatter",
	"sap/ui/model/json/JSONModel"
], function (B, r, f, J) {
	"use strict";
	var F = {
		AEDTM: "ChangedOn",
		UNAME: "ChangedBy",
		SPRTX: "LockIndicatorText",
		ANSSA: "AddressRecordType",
		STEXT: "SubtypeText",
		NAME2: "ContactName",
		STRAS: "Street",
		HSNMR: "HouseNumber",
		POSTA: "AppartementId",
		LOCAT: "SupplementalAddressLine",
		PSTLZ: "PostalCode",
		ORT01: "City",
		ORT02: "District",
		STATE: "StateId",
		BEZEI: "StateText",
		LAND1: "CountryId",
		LANDX: "CountryText",
		LANDX50: "CountryTextLong",
		TELNR: "TelephoneNumber",
		ENTKM: "WorkDistance",
		ENTKM_SIGN: "WorkDistanceUnit",
		WKWNG: "CompanyHousing",
		BUSRT: "BusRoute"
	};
	return sap.ui.controller("hcm.fab.myprofile.HCMFAB_PRFL_MONExtension.blocks.PersInfoAddressBlockControllerCustom", {
		
		onAfterRendering: function(){
			
			// 		sap.ui.getCore().byId("application-MeineDaten-anzeigen-component---ProfileOverview--addressesSubSection").getBlocks()[0].setSelectedView(
			// "application-MeineDaten-anzeigen-component---ProfileOverview--addressesBlock-Expanded")
			
		sap.ui.getCore().byId("application-MeineDaten-anzeigen-component---ProfileOverview--addressesSubSection--seeMore").$().css("display", "none")
		
		}
		//    formatter: f,
		//    reuseHandler: r,
		//    onInit: function () {
		//        this.setModel(new J({ busy: false }), "AddressView");
		//        this.oApplicationController = r.getOwnerComponent().getModel("appProperties").getProperty("/applicationController");
		//        this.oODataModel = r.getOwnerComponent().getModel();
		//    },
		//    onDataRequested: function () {
		//        var v = this.getModel("AddressView");
		//        this.oApplicationController.whenMetadataLoaded(function () {
		//            v.setProperty("/busy", true);
		//        });
		//    },
		//    onChange: function (e) {
		//        var a = this.getModel("appProperties"), c = e.getSource().getCurrentContexts();
		//        a.setProperty("/bPersInfoAddressExists", c.length > 0);
		//        this.getModel("AddressView").setProperty("/busy", false);
		//    },
		//    onNavToAddressesPress: function () {
		//        var n = this.oApplicationController.getCrossAppNavIntends().MYADDRESSES, a = this.oApplicationController.getApplicationIds().MYADDRESSES;
		//        this.oApplicationController.navToExternal(n.target, a);
		//    },
		//    getVisibility: function (s, a, b) {
		//        if (!a) {
		//            return true;
		//        }
		//        return r.getPersInfoFieldVisibility(s, a, F, b);
		//    },
		//    formatPostalCodeCityLabel: function (p, P, c, a) {
		//        return r.getPostalCodeCityLabel(p, this.oApplicationController.getAppEntities().ADDRESS, P, c, a, F);
		//    },
		//    getPersinfoLabel: function (p, a, s) {
		//        return r.getPersinfoLabel(p, a, F, s);
		//    }
	});
});