sap.ui.define(["hcm/fab/myprofile/controller/BaseController","hcm/fab/myprofile/utils/reuseHandler","hcm/fab/myprofile/utils/formatter","sap/ui/model/json/JSONModel"],function(e,t,o,n){"use strict";var r={AEDTM:"ChangedOn",UNAME:"ChangedBy",SPRTX:"LockIndicatorText",ANSSA:"AddressRecordType",STEXT:"SubtypeText",NAME2:"ContactName",STRAS:"Street",HSNMR:"HouseNumber",POSTA:"AppartementId",LOCAT:"SupplementalAddressLine",PSTLZ:"PostalCode",ORT01:"City",ORT02:"District",STATE:"StateId",BEZEI:"StateText",LAND1:"CountryId",LANDX:"CountryText",LANDX50:"CountryTextLong",TELNR:"TelephoneNumber",ENTKM:"WorkDistance",ENTKM_SIGN:"WorkDistanceUnit",WKWNG:"CompanyHousing",BUSRT:"BusRoute"};return sap.ui.controller("hcm.fab.myprofile.HCMFAB_PRFL_MONExtension.blocks.PersInfoAddressBlockControllerCustom",{onAfterRendering:function(){sap.ui.getCore().byId("application-MeineDaten-anzeigen-component---ProfileOverview--addressesSubSection--seeMore").$().css("display","none")}})});