"use strict";
///<reference path="../../typings/main.d.ts"/>
var querystring = require('querystring');
var fetch = require('isomorphic-fetch');
var assign_1 = require('./assign');
(function (DeviceTypeEnum) {
    DeviceTypeEnum[DeviceTypeEnum["WorkstationsAndServers"] = 'WorkstationsAndServers'] = "WorkstationsAndServers";
    DeviceTypeEnum[DeviceTypeEnum["BackupStats"] = 'BackupStats'] = "BackupStats";
    DeviceTypeEnum[DeviceTypeEnum["Servers"] = 'Servers'] = "Servers";
    DeviceTypeEnum[DeviceTypeEnum["Workstations"] = 'Workstations'] = "Workstations";
})(exports.DeviceTypeEnum || (exports.DeviceTypeEnum = {}));
var DeviceTypeEnum = exports.DeviceTypeEnum;
(function (NameEnum) {
    NameEnum[NameEnum["From"] = 'From'] = "From";
    NameEnum[NameEnum["To"] = 'To'] = "To";
})(exports.NameEnum || (exports.NameEnum = {}));
var NameEnum = exports.NameEnum;
(function (IdentifierEnum) {
    IdentifierEnum[IdentifierEnum["From"] = 'From'] = "From";
    IdentifierEnum[IdentifierEnum["To"] = 'To'] = "To";
})(exports.IdentifierEnum || (exports.IdentifierEnum = {}));
var IdentifierEnum = exports.IdentifierEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["From"] = 'From'] = "From";
    StatusEnum[StatusEnum["To"] = 'To'] = "To";
})(exports.StatusEnum || (exports.StatusEnum = {}));
var StatusEnum = exports.StatusEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["From"] = 'From'] = "From";
    TypeEnum[TypeEnum["To"] = 'To'] = "To";
})(exports.TypeEnum || (exports.TypeEnum = {}));
var TypeEnum = exports.TypeEnum;
(function (PrimaryAddressEnum) {
    PrimaryAddressEnum[PrimaryAddressEnum["From"] = 'From'] = "From";
    PrimaryAddressEnum[PrimaryAddressEnum["To"] = 'To'] = "To";
})(exports.PrimaryAddressEnum || (exports.PrimaryAddressEnum = {}));
var PrimaryAddressEnum = exports.PrimaryAddressEnum;
(function (PrimaryContactEnum) {
    PrimaryContactEnum[PrimaryContactEnum["From"] = 'From'] = "From";
    PrimaryContactEnum[PrimaryContactEnum["To"] = 'To'] = "To";
})(exports.PrimaryContactEnum || (exports.PrimaryContactEnum = {}));
var PrimaryContactEnum = exports.PrimaryContactEnum;
(function (PhoneEnum) {
    PhoneEnum[PhoneEnum["From"] = 'From'] = "From";
    PhoneEnum[PhoneEnum["To"] = 'To'] = "To";
})(exports.PhoneEnum || (exports.PhoneEnum = {}));
var PhoneEnum = exports.PhoneEnum;
(function (FaxEnum) {
    FaxEnum[FaxEnum["From"] = 'From'] = "From";
    FaxEnum[FaxEnum["To"] = 'To'] = "To";
})(exports.FaxEnum || (exports.FaxEnum = {}));
var FaxEnum = exports.FaxEnum;
(function (WebsiteEnum) {
    WebsiteEnum[WebsiteEnum["From"] = 'From'] = "From";
    WebsiteEnum[WebsiteEnum["To"] = 'To'] = "To";
})(exports.WebsiteEnum || (exports.WebsiteEnum = {}));
var WebsiteEnum = exports.WebsiteEnum;
(function (MarketEnum) {
    MarketEnum[MarketEnum["From"] = 'From'] = "From";
    MarketEnum[MarketEnum["To"] = 'To'] = "To";
})(exports.MarketEnum || (exports.MarketEnum = {}));
var MarketEnum = exports.MarketEnum;
(function (TerritoryEnum) {
    TerritoryEnum[TerritoryEnum["From"] = 'From'] = "From";
    TerritoryEnum[TerritoryEnum["To"] = 'To'] = "To";
})(exports.TerritoryEnum || (exports.TerritoryEnum = {}));
var TerritoryEnum = exports.TerritoryEnum;
(function (RevenueEnum) {
    RevenueEnum[RevenueEnum["From"] = 'From'] = "From";
    RevenueEnum[RevenueEnum["To"] = 'To'] = "To";
})(exports.RevenueEnum || (exports.RevenueEnum = {}));
var RevenueEnum = exports.RevenueEnum;
(function (RevenueYearEnum) {
    RevenueYearEnum[RevenueYearEnum["From"] = 'From'] = "From";
    RevenueYearEnum[RevenueYearEnum["To"] = 'To'] = "To";
})(exports.RevenueYearEnum || (exports.RevenueYearEnum = {}));
var RevenueYearEnum = exports.RevenueYearEnum;
(function (NumberOfEmployeesEnum) {
    NumberOfEmployeesEnum[NumberOfEmployeesEnum["From"] = 'From'] = "From";
    NumberOfEmployeesEnum[NumberOfEmployeesEnum["To"] = 'To'] = "To";
})(exports.NumberOfEmployeesEnum || (exports.NumberOfEmployeesEnum = {}));
var NumberOfEmployeesEnum = exports.NumberOfEmployeesEnum;
(function (SicCodeEnum) {
    SicCodeEnum[SicCodeEnum["From"] = 'From'] = "From";
    SicCodeEnum[SicCodeEnum["To"] = 'To'] = "To";
})(exports.SicCodeEnum || (exports.SicCodeEnum = {}));
var SicCodeEnum = exports.SicCodeEnum;
(function (DateAcquiredEnum) {
    DateAcquiredEnum[DateAcquiredEnum["From"] = 'From'] = "From";
    DateAcquiredEnum[DateAcquiredEnum["To"] = 'To'] = "To";
})(exports.DateAcquiredEnum || (exports.DateAcquiredEnum = {}));
var DateAcquiredEnum = exports.DateAcquiredEnum;
(function (TimeZoneEnum) {
    TimeZoneEnum[TimeZoneEnum["From"] = 'From'] = "From";
    TimeZoneEnum[TimeZoneEnum["To"] = 'To'] = "To";
})(exports.TimeZoneEnum || (exports.TimeZoneEnum = {}));
var TimeZoneEnum = exports.TimeZoneEnum;
(function (SourceListEnum) {
    SourceListEnum[SourceListEnum["From"] = 'From'] = "From";
    SourceListEnum[SourceListEnum["To"] = 'To'] = "To";
})(exports.SourceListEnum || (exports.SourceListEnum = {}));
var SourceListEnum = exports.SourceListEnum;
(function (UserDefinedField1Enum) {
    UserDefinedField1Enum[UserDefinedField1Enum["From"] = 'From'] = "From";
    UserDefinedField1Enum[UserDefinedField1Enum["To"] = 'To'] = "To";
})(exports.UserDefinedField1Enum || (exports.UserDefinedField1Enum = {}));
var UserDefinedField1Enum = exports.UserDefinedField1Enum;
(function (UserDefinedField2Enum) {
    UserDefinedField2Enum[UserDefinedField2Enum["From"] = 'From'] = "From";
    UserDefinedField2Enum[UserDefinedField2Enum["To"] = 'To'] = "To";
})(exports.UserDefinedField2Enum || (exports.UserDefinedField2Enum = {}));
var UserDefinedField2Enum = exports.UserDefinedField2Enum;
(function (UserDefinedField3Enum) {
    UserDefinedField3Enum[UserDefinedField3Enum["From"] = 'From'] = "From";
    UserDefinedField3Enum[UserDefinedField3Enum["To"] = 'To'] = "To";
})(exports.UserDefinedField3Enum || (exports.UserDefinedField3Enum = {}));
var UserDefinedField3Enum = exports.UserDefinedField3Enum;
(function (UserDefinedField4Enum) {
    UserDefinedField4Enum[UserDefinedField4Enum["From"] = 'From'] = "From";
    UserDefinedField4Enum[UserDefinedField4Enum["To"] = 'To'] = "To";
})(exports.UserDefinedField4Enum || (exports.UserDefinedField4Enum = {}));
var UserDefinedField4Enum = exports.UserDefinedField4Enum;
(function (UserDefinedField5Enum) {
    UserDefinedField5Enum[UserDefinedField5Enum["From"] = 'From'] = "From";
    UserDefinedField5Enum[UserDefinedField5Enum["To"] = 'To'] = "To";
})(exports.UserDefinedField5Enum || (exports.UserDefinedField5Enum = {}));
var UserDefinedField5Enum = exports.UserDefinedField5Enum;
(function (UserDefinedField6Enum) {
    UserDefinedField6Enum[UserDefinedField6Enum["From"] = 'From'] = "From";
    UserDefinedField6Enum[UserDefinedField6Enum["To"] = 'To'] = "To";
})(exports.UserDefinedField6Enum || (exports.UserDefinedField6Enum = {}));
var UserDefinedField6Enum = exports.UserDefinedField6Enum;
(function (UserDefinedField7Enum) {
    UserDefinedField7Enum[UserDefinedField7Enum["From"] = 'From'] = "From";
    UserDefinedField7Enum[UserDefinedField7Enum["To"] = 'To'] = "To";
})(exports.UserDefinedField7Enum || (exports.UserDefinedField7Enum = {}));
var UserDefinedField7Enum = exports.UserDefinedField7Enum;
(function (UserDefinedField8Enum) {
    UserDefinedField8Enum[UserDefinedField8Enum["From"] = 'From'] = "From";
    UserDefinedField8Enum[UserDefinedField8Enum["To"] = 'To'] = "To";
})(exports.UserDefinedField8Enum || (exports.UserDefinedField8Enum = {}));
var UserDefinedField8Enum = exports.UserDefinedField8Enum;
(function (UserDefinedField9Enum) {
    UserDefinedField9Enum[UserDefinedField9Enum["From"] = 'From'] = "From";
    UserDefinedField9Enum[UserDefinedField9Enum["To"] = 'To'] = "To";
})(exports.UserDefinedField9Enum || (exports.UserDefinedField9Enum = {}));
var UserDefinedField9Enum = exports.UserDefinedField9Enum;
(function (UserDefinedField10Enum) {
    UserDefinedField10Enum[UserDefinedField10Enum["From"] = 'From'] = "From";
    UserDefinedField10Enum[UserDefinedField10Enum["To"] = 'To'] = "To";
})(exports.UserDefinedField10Enum || (exports.UserDefinedField10Enum = {}));
var UserDefinedField10Enum = exports.UserDefinedField10Enum;
(function (BillingAddressEnum) {
    BillingAddressEnum[BillingAddressEnum["From"] = 'From'] = "From";
    BillingAddressEnum[BillingAddressEnum["To"] = 'To'] = "To";
})(exports.BillingAddressEnum || (exports.BillingAddressEnum = {}));
var BillingAddressEnum = exports.BillingAddressEnum;
(function (BillingContactEnum) {
    BillingContactEnum[BillingContactEnum["From"] = 'From'] = "From";
    BillingContactEnum[BillingContactEnum["To"] = 'To'] = "To";
})(exports.BillingContactEnum || (exports.BillingContactEnum = {}));
var BillingContactEnum = exports.BillingContactEnum;
(function (TaxCodeEnum) {
    TaxCodeEnum[TaxCodeEnum["From"] = 'From'] = "From";
    TaxCodeEnum[TaxCodeEnum["To"] = 'To'] = "To";
})(exports.TaxCodeEnum || (exports.TaxCodeEnum = {}));
var TaxCodeEnum = exports.TaxCodeEnum;
(function (AccountNumberEnum) {
    AccountNumberEnum[AccountNumberEnum["From"] = 'From'] = "From";
    AccountNumberEnum[AccountNumberEnum["To"] = 'To'] = "To";
})(exports.AccountNumberEnum || (exports.AccountNumberEnum = {}));
var AccountNumberEnum = exports.AccountNumberEnum;
(function (BillingTermsEnum) {
    BillingTermsEnum[BillingTermsEnum["From"] = 'From'] = "From";
    BillingTermsEnum[BillingTermsEnum["To"] = 'To'] = "To";
})(exports.BillingTermsEnum || (exports.BillingTermsEnum = {}));
var BillingTermsEnum = exports.BillingTermsEnum;
(function (NotesEnum) {
    NotesEnum[NotesEnum["Discard"] = 'Discard'] = "Discard";
    NotesEnum[NotesEnum["Merge"] = 'Merge'] = "Merge";
})(exports.NotesEnum || (exports.NotesEnum = {}));
var NotesEnum = exports.NotesEnum;
(function (SitesEnum) {
    SitesEnum[SitesEnum["Discard"] = 'Discard'] = "Discard";
    SitesEnum[SitesEnum["Merge"] = 'Merge'] = "Merge";
})(exports.SitesEnum || (exports.SitesEnum = {}));
var SitesEnum = exports.SitesEnum;
(function (ActivitiesEnum) {
    ActivitiesEnum[ActivitiesEnum["Discard"] = 'Discard'] = "Discard";
    ActivitiesEnum[ActivitiesEnum["Merge"] = 'Merge'] = "Merge";
})(exports.ActivitiesEnum || (exports.ActivitiesEnum = {}));
var ActivitiesEnum = exports.ActivitiesEnum;
(function (OpportunitiesEnum) {
    OpportunitiesEnum[OpportunitiesEnum["Discard"] = 'Discard'] = "Discard";
    OpportunitiesEnum[OpportunitiesEnum["Merge"] = 'Merge'] = "Merge";
})(exports.OpportunitiesEnum || (exports.OpportunitiesEnum = {}));
var OpportunitiesEnum = exports.OpportunitiesEnum;
(function (ServicesEnum) {
    ServicesEnum[ServicesEnum["Discard"] = 'Discard'] = "Discard";
    ServicesEnum[ServicesEnum["Merge"] = 'Merge'] = "Merge";
})(exports.ServicesEnum || (exports.ServicesEnum = {}));
var ServicesEnum = exports.ServicesEnum;
(function (ProjectsEnum) {
    ProjectsEnum[ProjectsEnum["Discard"] = 'Discard'] = "Discard";
    ProjectsEnum[ProjectsEnum["Merge"] = 'Merge'] = "Merge";
})(exports.ProjectsEnum || (exports.ProjectsEnum = {}));
var ProjectsEnum = exports.ProjectsEnum;
(function (ContactsEnum) {
    ContactsEnum[ContactsEnum["Discard"] = 'Discard'] = "Discard";
    ContactsEnum[ContactsEnum["Merge"] = 'Merge'] = "Merge";
})(exports.ContactsEnum || (exports.ContactsEnum = {}));
var ContactsEnum = exports.ContactsEnum;
(function (DocumentsEnum) {
    DocumentsEnum[DocumentsEnum["Discard"] = 'Discard'] = "Discard";
    DocumentsEnum[DocumentsEnum["Merge"] = 'Merge'] = "Merge";
})(exports.DocumentsEnum || (exports.DocumentsEnum = {}));
var DocumentsEnum = exports.DocumentsEnum;
(function (FieldTypeEnum) {
    FieldTypeEnum[FieldTypeEnum["Text"] = 'Text'] = "Text";
    FieldTypeEnum[FieldTypeEnum["Button"] = 'Button'] = "Button";
    FieldTypeEnum[FieldTypeEnum["Currency"] = 'Currency'] = "Currency";
    FieldTypeEnum[FieldTypeEnum["Date"] = 'Date'] = "Date";
    FieldTypeEnum[FieldTypeEnum["Hyperlink"] = 'Hyperlink'] = "Hyperlink";
    FieldTypeEnum[FieldTypeEnum["IPAddress"] = 'IPAddress'] = "IPAddress";
    FieldTypeEnum[FieldTypeEnum["Checkbox"] = 'Checkbox'] = "Checkbox";
    FieldTypeEnum[FieldTypeEnum["Number"] = 'Number'] = "Number";
    FieldTypeEnum[FieldTypeEnum["Percent"] = 'Percent'] = "Percent";
    FieldTypeEnum[FieldTypeEnum["TextArea"] = 'TextArea'] = "TextArea";
    FieldTypeEnum[FieldTypeEnum["Password"] = 'Password'] = "Password";
})(exports.FieldTypeEnum || (exports.FieldTypeEnum = {}));
var FieldTypeEnum = exports.FieldTypeEnum;
(function (FieldTypeEnum) {
    FieldTypeEnum[FieldTypeEnum["Text"] = 'Text'] = "Text";
    FieldTypeEnum[FieldTypeEnum["Button"] = 'Button'] = "Button";
    FieldTypeEnum[FieldTypeEnum["Currency"] = 'Currency'] = "Currency";
    FieldTypeEnum[FieldTypeEnum["Date"] = 'Date'] = "Date";
    FieldTypeEnum[FieldTypeEnum["Hyperlink"] = 'Hyperlink'] = "Hyperlink";
    FieldTypeEnum[FieldTypeEnum["IPAddress"] = 'IPAddress'] = "IPAddress";
    FieldTypeEnum[FieldTypeEnum["Checkbox"] = 'Checkbox'] = "Checkbox";
    FieldTypeEnum[FieldTypeEnum["Number"] = 'Number'] = "Number";
    FieldTypeEnum[FieldTypeEnum["Percent"] = 'Percent'] = "Percent";
    FieldTypeEnum[FieldTypeEnum["TextArea"] = 'TextArea'] = "TextArea";
    FieldTypeEnum[FieldTypeEnum["Password"] = 'Password'] = "Password";
})(exports.FieldTypeEnum || (exports.FieldTypeEnum = {}));
var FieldTypeEnum = exports.FieldTypeEnum;
(function (EntryTypeEnum) {
    EntryTypeEnum[EntryTypeEnum["EntryField"] = 'EntryField'] = "EntryField";
    EntryTypeEnum[EntryTypeEnum["List"] = 'List'] = "List";
    EntryTypeEnum[EntryTypeEnum["Option"] = 'Option'] = "Option";
})(exports.EntryTypeEnum || (exports.EntryTypeEnum = {}));
var EntryTypeEnum = exports.EntryTypeEnum;
(function (GenderEnum) {
    GenderEnum[GenderEnum["Male"] = 'Male'] = "Male";
    GenderEnum[GenderEnum["Female"] = 'Female'] = "Female";
})(exports.GenderEnum || (exports.GenderEnum = {}));
var GenderEnum = exports.GenderEnum;
(function (PresenceEnum) {
    PresenceEnum[PresenceEnum["Online"] = 'Online'] = "Online";
    PresenceEnum[PresenceEnum["DoNotDisturb"] = 'DoNotDisturb'] = "DoNotDisturb";
    PresenceEnum[PresenceEnum["Away"] = 'Away'] = "Away";
    PresenceEnum[PresenceEnum["Offline"] = 'Offline'] = "Offline";
    PresenceEnum[PresenceEnum["NoAgent"] = 'NoAgent'] = "NoAgent";
})(exports.PresenceEnum || (exports.PresenceEnum = {}));
var PresenceEnum = exports.PresenceEnum;
(function (CommunicationTypeEnum) {
    CommunicationTypeEnum[CommunicationTypeEnum["Phone"] = 'Phone'] = "Phone";
    CommunicationTypeEnum[CommunicationTypeEnum["Fax"] = 'Fax'] = "Fax";
    CommunicationTypeEnum[CommunicationTypeEnum["Email"] = 'Email'] = "Email";
})(exports.CommunicationTypeEnum || (exports.CommunicationTypeEnum = {}));
var CommunicationTypeEnum = exports.CommunicationTypeEnum;
(function (CommunicationTypeEnum) {
    CommunicationTypeEnum[CommunicationTypeEnum["Phone"] = 'Phone'] = "Phone";
    CommunicationTypeEnum[CommunicationTypeEnum["Fax"] = 'Fax'] = "Fax";
    CommunicationTypeEnum[CommunicationTypeEnum["Email"] = 'Email'] = "Email";
})(exports.CommunicationTypeEnum || (exports.CommunicationTypeEnum = {}));
var CommunicationTypeEnum = exports.CommunicationTypeEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["Text"] = 'Text'] = "Text";
    TypeEnum[TypeEnum["Button"] = 'Button'] = "Button";
    TypeEnum[TypeEnum["Currency"] = 'Currency'] = "Currency";
    TypeEnum[TypeEnum["Date"] = 'Date'] = "Date";
    TypeEnum[TypeEnum["Hyperlink"] = 'Hyperlink'] = "Hyperlink";
    TypeEnum[TypeEnum["IPAddress"] = 'IPAddress'] = "IPAddress";
    TypeEnum[TypeEnum["Checkbox"] = 'Checkbox'] = "Checkbox";
    TypeEnum[TypeEnum["Number"] = 'Number'] = "Number";
    TypeEnum[TypeEnum["Percent"] = 'Percent'] = "Percent";
    TypeEnum[TypeEnum["TextArea"] = 'TextArea'] = "TextArea";
    TypeEnum[TypeEnum["Password"] = 'Password'] = "Password";
})(exports.TypeEnum || (exports.TypeEnum = {}));
var TypeEnum = exports.TypeEnum;
(function (EntryMethodEnum) {
    EntryMethodEnum[EntryMethodEnum["EntryField"] = 'EntryField'] = "EntryField";
    EntryMethodEnum[EntryMethodEnum["List"] = 'List'] = "List";
    EntryMethodEnum[EntryMethodEnum["Option"] = 'Option'] = "Option";
})(exports.EntryMethodEnum || (exports.EntryMethodEnum = {}));
var EntryMethodEnum = exports.EntryMethodEnum;
//export namespace  {
'use strict';
var CompaniesApi = (function () {
    function CompaniesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Companies Count
     * @param conditions
     */
    CompaniesApi.prototype.companyCompaniesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Companies
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CompaniesApi.prototype.companyCompaniesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Company By Id
     * @param id
     */
    CompaniesApi.prototype.companyCompaniesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Company By Id
     * @param id
     */
    CompaniesApi.prototype.companyCompaniesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Merge Company
     * @param id
     * @param merge
     */
    CompaniesApi.prototype.companyCompaniesIdMergePost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/merge'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdMergePost');
        }
        // verify required parameter 'merge' is set
        if (params.merge == null) {
            throw new Error('Missing required parameter merge when calling companyCompaniesIdMergePost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.merge),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Company
     * @param id
     * @param operations
     */
    CompaniesApi.prototype.companyCompaniesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyCompaniesIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Company
     * @param id
     * @param company
     */
    CompaniesApi.prototype.companyCompaniesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdPut');
        }
        // verify required parameter 'company' is set
        if (params.company == null) {
            throw new Error('Missing required parameter company when calling companyCompaniesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.company),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Company
     * @param company
     */
    CompaniesApi.prototype.companyCompaniesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'company' is set
        if (params.company == null) {
            throw new Error('Missing required parameter company when calling companyCompaniesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.company),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CompaniesApi;
}());
exports.CompaniesApi = CompaniesApi;
//}
//export namespace  {
'use strict';
var CompanyManagementSummarysApi = (function () {
    function CompanyManagementSummarysApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Company Types Count
     * @param id
     * @param conditions
     */
    CompanyManagementSummarysApi.prototype.companyCompaniesIdManagementSummaryReportsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Management Summarys
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CompanyManagementSummarysApi.prototype.companyCompaniesIdManagementSummaryReportsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Management Summary
     * @param id
     * @param managementSummary
     */
    CompanyManagementSummarysApi.prototype.companyCompaniesIdManagementSummaryReportsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsPost');
        }
        // verify required parameter 'managementSummary' is set
        if (params.managementSummary == null) {
            throw new Error('Missing required parameter managementSummary when calling companyCompaniesIdManagementSummaryReportsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.managementSummary),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Management Summary By Id
     * @param id
     * @param reportId
     */
    CompanyManagementSummarysApi.prototype.companyCompaniesIdManagementSummaryReportsReportIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports/{reportId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'reportId' + '}', String(params.reportId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsReportIdDelete');
        }
        // verify required parameter 'reportId' is set
        if (params.reportId == null) {
            throw new Error('Missing required parameter reportId when calling companyCompaniesIdManagementSummaryReportsReportIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Management Summary By Id
     * @param id
     * @param reportId
     */
    CompanyManagementSummarysApi.prototype.companyCompaniesIdManagementSummaryReportsReportIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports/{reportId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'reportId' + '}', String(params.reportId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsReportIdGet');
        }
        // verify required parameter 'reportId' is set
        if (params.reportId == null) {
            throw new Error('Missing required parameter reportId when calling companyCompaniesIdManagementSummaryReportsReportIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Management Summary
     * @param id
     * @param reportId
     * @param operations
     */
    CompanyManagementSummarysApi.prototype.companyCompaniesIdManagementSummaryReportsReportIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports/{reportId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'reportId' + '}', String(params.reportId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsReportIdPatch');
        }
        // verify required parameter 'reportId' is set
        if (params.reportId == null) {
            throw new Error('Missing required parameter reportId when calling companyCompaniesIdManagementSummaryReportsReportIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyCompaniesIdManagementSummaryReportsReportIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Management Summary
     * @param id
     * @param reportId
     * @param managementSummary
     */
    CompanyManagementSummarysApi.prototype.companyCompaniesIdManagementSummaryReportsReportIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/managementSummaryReports/{reportId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'reportId' + '}', String(params.reportId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdManagementSummaryReportsReportIdPut');
        }
        // verify required parameter 'reportId' is set
        if (params.reportId == null) {
            throw new Error('Missing required parameter reportId when calling companyCompaniesIdManagementSummaryReportsReportIdPut');
        }
        // verify required parameter 'managementSummary' is set
        if (params.managementSummary == null) {
            throw new Error('Missing required parameter managementSummary when calling companyCompaniesIdManagementSummaryReportsReportIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.managementSummary),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CompanyManagementSummarysApi;
}());
exports.CompanyManagementSummarysApi = CompanyManagementSummarysApi;
//}
//export namespace  {
'use strict';
var CompanyNotesApi = (function () {
    function CompanyNotesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Company Notes Count
     * @param id
     * @param conditions
     */
    CompanyNotesApi.prototype.companyCompaniesIdNotesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/notes/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdNotesCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Company Notes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CompanyNotesApi.prototype.companyCompaniesIdNotesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/notes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdNotesGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Company Note By Id
     * @param id
     * @param noteId
     */
    CompanyNotesApi.prototype.companyCompaniesIdNotesNoteIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdNotesNoteIdDelete');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling companyCompaniesIdNotesNoteIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Company Note By Id
     * @param id
     * @param noteId
     */
    CompanyNotesApi.prototype.companyCompaniesIdNotesNoteIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdNotesNoteIdGet');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling companyCompaniesIdNotesNoteIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Company Note
     * @param id
     * @param noteId
     * @param operations
     */
    CompanyNotesApi.prototype.companyCompaniesIdNotesNoteIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdNotesNoteIdPatch');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling companyCompaniesIdNotesNoteIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyCompaniesIdNotesNoteIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Company Note
     * @param id
     * @param noteId
     * @param companyNote
     */
    CompanyNotesApi.prototype.companyCompaniesIdNotesNoteIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdNotesNoteIdPut');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling companyCompaniesIdNotesNoteIdPut');
        }
        // verify required parameter 'companyNote' is set
        if (params.companyNote == null) {
            throw new Error('Missing required parameter companyNote when calling companyCompaniesIdNotesNoteIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.companyNote),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Company Note
     * @param id
     * @param companyNote
     */
    CompanyNotesApi.prototype.companyCompaniesIdNotesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/notes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdNotesPost');
        }
        // verify required parameter 'companyNote' is set
        if (params.companyNote == null) {
            throw new Error('Missing required parameter companyNote when calling companyCompaniesIdNotesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.companyNote),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CompanyNotesApi;
}());
exports.CompanyNotesApi = CompanyNotesApi;
//}
//export namespace  {
'use strict';
var CompanySitesApi = (function () {
    function CompanySitesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Sites Count
     * @param id
     * @param conditions
     */
    CompanySitesApi.prototype.companyCompaniesIdSitesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/sites/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdSitesCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Sites
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CompanySitesApi.prototype.companyCompaniesIdSitesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/sites'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdSitesGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Site
     * @param id
     * @param site
     */
    CompanySitesApi.prototype.companyCompaniesIdSitesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/sites'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdSitesPost');
        }
        // verify required parameter 'site' is set
        if (params.site == null) {
            throw new Error('Missing required parameter site when calling companyCompaniesIdSitesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.site),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Site By Id
     * @param id
     * @param siteId
     */
    CompanySitesApi.prototype.companyCompaniesIdSitesSiteIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/sites/{siteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'siteId' + '}', String(params.siteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdSitesSiteIdDelete');
        }
        // verify required parameter 'siteId' is set
        if (params.siteId == null) {
            throw new Error('Missing required parameter siteId when calling companyCompaniesIdSitesSiteIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Site By Id
     * @param id
     * @param siteId
     */
    CompanySitesApi.prototype.companyCompaniesIdSitesSiteIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/sites/{siteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'siteId' + '}', String(params.siteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdSitesSiteIdGet');
        }
        // verify required parameter 'siteId' is set
        if (params.siteId == null) {
            throw new Error('Missing required parameter siteId when calling companyCompaniesIdSitesSiteIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Site
     * @param id
     * @param siteId
     * @param operations
     */
    CompanySitesApi.prototype.companyCompaniesIdSitesSiteIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/sites/{siteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'siteId' + '}', String(params.siteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdSitesSiteIdPatch');
        }
        // verify required parameter 'siteId' is set
        if (params.siteId == null) {
            throw new Error('Missing required parameter siteId when calling companyCompaniesIdSitesSiteIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyCompaniesIdSitesSiteIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Site
     * @param id
     * @param siteId
     * @param site
     */
    CompanySitesApi.prototype.companyCompaniesIdSitesSiteIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/sites/{siteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'siteId' + '}', String(params.siteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdSitesSiteIdPut');
        }
        // verify required parameter 'siteId' is set
        if (params.siteId == null) {
            throw new Error('Missing required parameter siteId when calling companyCompaniesIdSitesSiteIdPut');
        }
        // verify required parameter 'site' is set
        if (params.site == null) {
            throw new Error('Missing required parameter site when calling companyCompaniesIdSitesSiteIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.site),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CompanySitesApi;
}());
exports.CompanySitesApi = CompanySitesApi;
//}
//export namespace  {
'use strict';
var CompanyStatusesApi = (function () {
    function CompanyStatusesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Company Statuses Count
     * @param conditions
     */
    CompanyStatusesApi.prototype.companyCompaniesStatusesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/statuses/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Company Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CompanyStatusesApi.prototype.companyCompaniesStatusesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/statuses';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Company Status By Id
     * @param id
     */
    CompanyStatusesApi.prototype.companyCompaniesStatusesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesStatusesIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Company Status By Id
     * @param id
     */
    CompanyStatusesApi.prototype.companyCompaniesStatusesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesStatusesIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Company Status
     * @param id
     * @param operations
     */
    CompanyStatusesApi.prototype.companyCompaniesStatusesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesStatusesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyCompaniesStatusesIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Company Status
     * @param id
     * @param companyStatus
     */
    CompanyStatusesApi.prototype.companyCompaniesStatusesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesStatusesIdPut');
        }
        // verify required parameter 'companyStatus' is set
        if (params.companyStatus == null) {
            throw new Error('Missing required parameter companyStatus when calling companyCompaniesStatusesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.companyStatus),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Company Status
     * @param companyStatus
     */
    CompanyStatusesApi.prototype.companyCompaniesStatusesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/statuses';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'companyStatus' is set
        if (params.companyStatus == null) {
            throw new Error('Missing required parameter companyStatus when calling companyCompaniesStatusesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.companyStatus),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CompanyStatusesApi;
}());
exports.CompanyStatusesApi = CompanyStatusesApi;
//}
//export namespace  {
'use strict';
var CompanyTeamsApi = (function () {
    function CompanyTeamsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Company Teams Count
     * @param id
     * @param conditions
     */
    CompanyTeamsApi.prototype.companyCompaniesIdTeamsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/teams/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Company Teams
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CompanyTeamsApi.prototype.companyCompaniesIdTeamsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/teams'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Company Team
     * @param id
     * @param companyTeam
     */
    CompanyTeamsApi.prototype.companyCompaniesIdTeamsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/teams'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsPost');
        }
        // verify required parameter 'companyTeam' is set
        if (params.companyTeam == null) {
            throw new Error('Missing required parameter companyTeam when calling companyCompaniesIdTeamsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.companyTeam),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Company Team By Id
     * @param id
     * @param teamId
     */
    CompanyTeamsApi.prototype.companyCompaniesIdTeamsTeamIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/teams/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsTeamIdDelete');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling companyCompaniesIdTeamsTeamIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Company Team By Id
     * @param id
     * @param teamId
     */
    CompanyTeamsApi.prototype.companyCompaniesIdTeamsTeamIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/teams/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsTeamIdGet');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling companyCompaniesIdTeamsTeamIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Company Team
     * @param id
     * @param teamId
     * @param operations
     */
    CompanyTeamsApi.prototype.companyCompaniesIdTeamsTeamIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/teams/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsTeamIdPatch');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling companyCompaniesIdTeamsTeamIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyCompaniesIdTeamsTeamIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Company Team
     * @param id
     * @param teamId
     * @param companyTeam
     */
    CompanyTeamsApi.prototype.companyCompaniesIdTeamsTeamIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/{id}/teams/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesIdTeamsTeamIdPut');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling companyCompaniesIdTeamsTeamIdPut');
        }
        // verify required parameter 'companyTeam' is set
        if (params.companyTeam == null) {
            throw new Error('Missing required parameter companyTeam when calling companyCompaniesIdTeamsTeamIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.companyTeam),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CompanyTeamsApi;
}());
exports.CompanyTeamsApi = CompanyTeamsApi;
//}
//export namespace  {
'use strict';
var CompanyTypesApi = (function () {
    function CompanyTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Company Types Count
     * @param conditions
     */
    CompanyTypesApi.prototype.companyCompaniesTypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/types/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Company Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CompanyTypesApi.prototype.companyCompaniesTypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Company Type By Id
     * @param id
     */
    CompanyTypesApi.prototype.companyCompaniesTypesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesTypesIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Company Type By Id
     * @param id
     */
    CompanyTypesApi.prototype.companyCompaniesTypesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesTypesIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Company Type
     * @param id
     * @param operations
     */
    CompanyTypesApi.prototype.companyCompaniesTypesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesTypesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyCompaniesTypesIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Company Type
     * @param id
     * @param companyType
     */
    CompanyTypesApi.prototype.companyCompaniesTypesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyCompaniesTypesIdPut');
        }
        // verify required parameter 'companyType' is set
        if (params.companyType == null) {
            throw new Error('Missing required parameter companyType when calling companyCompaniesTypesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.companyType),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Company Type
     * @param companyType
     */
    CompanyTypesApi.prototype.companyCompaniesTypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/companies/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'companyType' is set
        if (params.companyType == null) {
            throw new Error('Missing required parameter companyType when calling companyCompaniesTypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.companyType),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CompanyTypesApi;
}());
exports.CompanyTypesApi = CompanyTypesApi;
//}
//export namespace  {
'use strict';
var ConfigurationStatusesApi = (function () {
    function ConfigurationStatusesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Configuration Statuses Count
     * @param conditions
     */
    ConfigurationStatusesApi.prototype.companyConfigurationsStatusesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/statuses/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Configuration Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ConfigurationStatusesApi.prototype.companyConfigurationsStatusesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/statuses';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Configuration Status By Id
     * @param id
     */
    ConfigurationStatusesApi.prototype.companyConfigurationsStatusesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsStatusesIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Configuration Status By Id
     * @param id
     */
    ConfigurationStatusesApi.prototype.companyConfigurationsStatusesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsStatusesIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Configuration Status
     * @param id
     * @param operations
     */
    ConfigurationStatusesApi.prototype.companyConfigurationsStatusesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsStatusesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyConfigurationsStatusesIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Configuration Status
     * @param id
     * @param configurationStatus
     */
    ConfigurationStatusesApi.prototype.companyConfigurationsStatusesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsStatusesIdPut');
        }
        // verify required parameter 'configurationStatus' is set
        if (params.configurationStatus == null) {
            throw new Error('Missing required parameter configurationStatus when calling companyConfigurationsStatusesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.configurationStatus),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Configuration Status
     * @param configurationStatus
     */
    ConfigurationStatusesApi.prototype.companyConfigurationsStatusesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/statuses';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'configurationStatus' is set
        if (params.configurationStatus == null) {
            throw new Error('Missing required parameter configurationStatus when calling companyConfigurationsStatusesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.configurationStatus),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ConfigurationStatusesApi;
}());
exports.ConfigurationStatusesApi = ConfigurationStatusesApi;
//}
//export namespace  {
'use strict';
var ConfigurationTypeQuestionsApi = (function () {
    function ConfigurationTypeQuestionsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Configuration Type Questions Count
     * @param id
     * @param conditions
     */
    ConfigurationTypeQuestionsApi.prototype.companyConfigurationsTypesIdQuestionsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}/questions/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Configuration Type Questions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ConfigurationTypeQuestionsApi.prototype.companyConfigurationsTypesIdQuestionsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}/questions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Configuration Type Question
     * @param id
     * @param configurationTypeQuestion
     */
    ConfigurationTypeQuestionsApi.prototype.companyConfigurationsTypesIdQuestionsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}/questions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsPost');
        }
        // verify required parameter 'configurationTypeQuestion' is set
        if (params.configurationTypeQuestion == null) {
            throw new Error('Missing required parameter configurationTypeQuestion when calling companyConfigurationsTypesIdQuestionsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.configurationTypeQuestion),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Configuration Type Question By Id
     * @param id
     * @param questionId
     */
    ConfigurationTypeQuestionsApi.prototype.companyConfigurationsTypesIdQuestionsQuestionIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}/questions/{questionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'questionId' + '}', String(params.questionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsQuestionIdDelete');
        }
        // verify required parameter 'questionId' is set
        if (params.questionId == null) {
            throw new Error('Missing required parameter questionId when calling companyConfigurationsTypesIdQuestionsQuestionIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Configuration Type Question By Id
     * @param id
     * @param questionId
     */
    ConfigurationTypeQuestionsApi.prototype.companyConfigurationsTypesIdQuestionsQuestionIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}/questions/{questionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'questionId' + '}', String(params.questionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsQuestionIdGet');
        }
        // verify required parameter 'questionId' is set
        if (params.questionId == null) {
            throw new Error('Missing required parameter questionId when calling companyConfigurationsTypesIdQuestionsQuestionIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Configuration Type Question
     * @param id
     * @param questionId
     * @param operations
     */
    ConfigurationTypeQuestionsApi.prototype.companyConfigurationsTypesIdQuestionsQuestionIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}/questions/{questionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'questionId' + '}', String(params.questionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsQuestionIdPatch');
        }
        // verify required parameter 'questionId' is set
        if (params.questionId == null) {
            throw new Error('Missing required parameter questionId when calling companyConfigurationsTypesIdQuestionsQuestionIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyConfigurationsTypesIdQuestionsQuestionIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Configuration Type Question
     * @param id
     * @param questionId
     * @param configurationTypeQuestion
     */
    ConfigurationTypeQuestionsApi.prototype.companyConfigurationsTypesIdQuestionsQuestionIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}/questions/{questionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'questionId' + '}', String(params.questionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdQuestionsQuestionIdPut');
        }
        // verify required parameter 'questionId' is set
        if (params.questionId == null) {
            throw new Error('Missing required parameter questionId when calling companyConfigurationsTypesIdQuestionsQuestionIdPut');
        }
        // verify required parameter 'configurationTypeQuestion' is set
        if (params.configurationTypeQuestion == null) {
            throw new Error('Missing required parameter configurationTypeQuestion when calling companyConfigurationsTypesIdQuestionsQuestionIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.configurationTypeQuestion),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ConfigurationTypeQuestionsApi;
}());
exports.ConfigurationTypeQuestionsApi = ConfigurationTypeQuestionsApi;
//}
//export namespace  {
'use strict';
var ConfigurationTypesApi = (function () {
    function ConfigurationTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Configuration Types Count
     * @param conditions
     */
    ConfigurationTypesApi.prototype.companyConfigurationsTypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Configuration Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ConfigurationTypesApi.prototype.companyConfigurationsTypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Configuration Type By Id
     * @param id
     */
    ConfigurationTypesApi.prototype.companyConfigurationsTypesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Configuration Type By Id
     * @param id
     */
    ConfigurationTypesApi.prototype.companyConfigurationsTypesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Configuration Type
     * @param id
     * @param operations
     */
    ConfigurationTypesApi.prototype.companyConfigurationsTypesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyConfigurationsTypesIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Configuration Type
     * @param id
     * @param configurationType
     */
    ConfigurationTypesApi.prototype.companyConfigurationsTypesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsTypesIdPut');
        }
        // verify required parameter 'configurationType' is set
        if (params.configurationType == null) {
            throw new Error('Missing required parameter configurationType when calling companyConfigurationsTypesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.configurationType),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Configuration Type
     * @param configurationType
     */
    ConfigurationTypesApi.prototype.companyConfigurationsTypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'configurationType' is set
        if (params.configurationType == null) {
            throw new Error('Missing required parameter configurationType when calling companyConfigurationsTypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.configurationType),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ConfigurationTypesApi;
}());
exports.ConfigurationTypesApi = ConfigurationTypesApi;
//}
//export namespace  {
'use strict';
var ConfigurationsApi = (function () {
    function ConfigurationsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Configurations Count
     * @param conditions
     * @param managedIdentifier
     */
    ConfigurationsApi.prototype.companyConfigurationsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.managedIdentifier !== undefined) {
            queryParameters['managedIdentifier'] = params.managedIdentifier;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Configurations
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     * @param managedIdentifier
     */
    ConfigurationsApi.prototype.companyConfigurationsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        if (params.managedIdentifier !== undefined) {
            queryParameters['managedIdentifier'] = params.managedIdentifier;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Configuration By Id
     * @param id
     */
    ConfigurationsApi.prototype.companyConfigurationsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Configuration By Id
     * @param id
     */
    ConfigurationsApi.prototype.companyConfigurationsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Configuration
     * @param id
     * @param operations
     * @param managementSolutionName
     * @param managedIdentifier
     * @param type
     * @param level
     * @param childConfigurationsMatchingOn
     * @param inactivateConfigurationsMatchingOn
     * @param inactiveConfigurationStatusId
     */
    ConfigurationsApi.prototype.companyConfigurationsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyConfigurationsIdPatch');
        }
        if (params.managementSolutionName !== undefined) {
            queryParameters['managementSolutionName'] = params.managementSolutionName;
        }
        if (params.managedIdentifier !== undefined) {
            queryParameters['managedIdentifier'] = params.managedIdentifier;
        }
        if (params.type !== undefined) {
            queryParameters['type'] = params.type;
        }
        if (params.level !== undefined) {
            queryParameters['level'] = params.level;
        }
        if (params.childConfigurationsMatchingOn !== undefined) {
            queryParameters['childConfigurationsMatchingOn'] = params.childConfigurationsMatchingOn;
        }
        if (params.inactivateConfigurationsMatchingOn !== undefined) {
            queryParameters['inactivateConfigurationsMatchingOn'] = params.inactivateConfigurationsMatchingOn;
        }
        if (params.inactiveConfigurationStatusId !== undefined) {
            queryParameters['inactiveConfigurationStatusId'] = params.inactiveConfigurationStatusId;
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Configuration
     * @param id
     * @param configuration
     * @param managementSolutionName
     * @param managedIdentifier
     * @param type
     * @param level
     * @param childConfigurationsMatchingOn
     * @param inactivateConfigurationsMatchingOn
     * @param inactiveConfigurationStatusId
     */
    ConfigurationsApi.prototype.companyConfigurationsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyConfigurationsIdPut');
        }
        // verify required parameter 'configuration' is set
        if (params.configuration == null) {
            throw new Error('Missing required parameter configuration when calling companyConfigurationsIdPut');
        }
        if (params.managementSolutionName !== undefined) {
            queryParameters['managementSolutionName'] = params.managementSolutionName;
        }
        if (params.managedIdentifier !== undefined) {
            queryParameters['managedIdentifier'] = params.managedIdentifier;
        }
        if (params.type !== undefined) {
            queryParameters['type'] = params.type;
        }
        if (params.level !== undefined) {
            queryParameters['level'] = params.level;
        }
        if (params.childConfigurationsMatchingOn !== undefined) {
            queryParameters['childConfigurationsMatchingOn'] = params.childConfigurationsMatchingOn;
        }
        if (params.inactivateConfigurationsMatchingOn !== undefined) {
            queryParameters['inactivateConfigurationsMatchingOn'] = params.inactivateConfigurationsMatchingOn;
        }
        if (params.inactiveConfigurationStatusId !== undefined) {
            queryParameters['inactiveConfigurationStatusId'] = params.inactiveConfigurationStatusId;
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.configuration),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Configuration
     * @param configuration
     * @param managementSolutionName
     * @param managedIdentifier
     * @param type
     * @param level
     * @param childConfigurationsMatchingOn
     * @param inactivateConfigurationsMatchingOn
     * @param inactiveConfigurationStatusId
     */
    ConfigurationsApi.prototype.companyConfigurationsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/configurations';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'configuration' is set
        if (params.configuration == null) {
            throw new Error('Missing required parameter configuration when calling companyConfigurationsPost');
        }
        if (params.managementSolutionName !== undefined) {
            queryParameters['managementSolutionName'] = params.managementSolutionName;
        }
        if (params.managedIdentifier !== undefined) {
            queryParameters['managedIdentifier'] = params.managedIdentifier;
        }
        if (params.type !== undefined) {
            queryParameters['type'] = params.type;
        }
        if (params.level !== undefined) {
            queryParameters['level'] = params.level;
        }
        if (params.childConfigurationsMatchingOn !== undefined) {
            queryParameters['childConfigurationsMatchingOn'] = params.childConfigurationsMatchingOn;
        }
        if (params.inactivateConfigurationsMatchingOn !== undefined) {
            queryParameters['inactivateConfigurationsMatchingOn'] = params.inactivateConfigurationsMatchingOn;
        }
        if (params.inactiveConfigurationStatusId !== undefined) {
            queryParameters['inactiveConfigurationStatusId'] = params.inactiveConfigurationStatusId;
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.configuration),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ConfigurationsApi;
}());
exports.ConfigurationsApi = ConfigurationsApi;
//}
//export namespace  {
'use strict';
var ContactCommunicationsApi = (function () {
    function ContactCommunicationsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Delete Contact Communication By Id
     * @param id
     * @param communicationId
     */
    ContactCommunicationsApi.prototype.companyContactsIdCommunicationsCommunicationIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/communications/{communicationId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'communicationId' + '}', String(params.communicationId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsCommunicationIdDelete');
        }
        // verify required parameter 'communicationId' is set
        if (params.communicationId == null) {
            throw new Error('Missing required parameter communicationId when calling companyContactsIdCommunicationsCommunicationIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Communication By Id
     * @param id
     * @param communicationId
     */
    ContactCommunicationsApi.prototype.companyContactsIdCommunicationsCommunicationIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/communications/{communicationId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'communicationId' + '}', String(params.communicationId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsCommunicationIdGet');
        }
        // verify required parameter 'communicationId' is set
        if (params.communicationId == null) {
            throw new Error('Missing required parameter communicationId when calling companyContactsIdCommunicationsCommunicationIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Contact Communication
     * @param id
     * @param communicationId
     * @param operations
     */
    ContactCommunicationsApi.prototype.companyContactsIdCommunicationsCommunicationIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/communications/{communicationId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'communicationId' + '}', String(params.communicationId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsCommunicationIdPatch');
        }
        // verify required parameter 'communicationId' is set
        if (params.communicationId == null) {
            throw new Error('Missing required parameter communicationId when calling companyContactsIdCommunicationsCommunicationIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyContactsIdCommunicationsCommunicationIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Contact Communication
     * @param id
     * @param communicationId
     * @param contactCommunication
     */
    ContactCommunicationsApi.prototype.companyContactsIdCommunicationsCommunicationIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/communications/{communicationId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'communicationId' + '}', String(params.communicationId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsCommunicationIdPut');
        }
        // verify required parameter 'communicationId' is set
        if (params.communicationId == null) {
            throw new Error('Missing required parameter communicationId when calling companyContactsIdCommunicationsCommunicationIdPut');
        }
        // verify required parameter 'contactCommunication' is set
        if (params.contactCommunication == null) {
            throw new Error('Missing required parameter contactCommunication when calling companyContactsIdCommunicationsCommunicationIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.contactCommunication),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Communications Count
     * @param id
     * @param conditions
     */
    ContactCommunicationsApi.prototype.companyContactsIdCommunicationsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/communications/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Communications
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ContactCommunicationsApi.prototype.companyContactsIdCommunicationsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/communications'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Contact Communication
     * @param id
     * @param contactCommunication
     */
    ContactCommunicationsApi.prototype.companyContactsIdCommunicationsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/communications'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdCommunicationsPost');
        }
        // verify required parameter 'contactCommunication' is set
        if (params.contactCommunication == null) {
            throw new Error('Missing required parameter contactCommunication when calling companyContactsIdCommunicationsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.contactCommunication),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ContactCommunicationsApi;
}());
exports.ContactCommunicationsApi = ContactCommunicationsApi;
//}
//export namespace  {
'use strict';
var ContactDepartmentsApi = (function () {
    function ContactDepartmentsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Contact Departments Count
     * @param conditions
     */
    ContactDepartmentsApi.prototype.companyContactsDepartmentsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/departments/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Departments
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ContactDepartmentsApi.prototype.companyContactsDepartmentsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/departments';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Contact Department By Id
     * @param id
     */
    ContactDepartmentsApi.prototype.companyContactsDepartmentsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/departments/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsDepartmentsIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Department By Id
     * @param id
     */
    ContactDepartmentsApi.prototype.companyContactsDepartmentsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/departments/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsDepartmentsIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Contact Department
     * @param id
     * @param operations
     */
    ContactDepartmentsApi.prototype.companyContactsDepartmentsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/departments/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsDepartmentsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyContactsDepartmentsIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Contact Department
     * @param id
     * @param contactDepartment
     */
    ContactDepartmentsApi.prototype.companyContactsDepartmentsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/departments/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsDepartmentsIdPut');
        }
        // verify required parameter 'contactDepartment' is set
        if (params.contactDepartment == null) {
            throw new Error('Missing required parameter contactDepartment when calling companyContactsDepartmentsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.contactDepartment),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Contact Department
     * @param contactDepartment
     */
    ContactDepartmentsApi.prototype.companyContactsDepartmentsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/departments';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'contactDepartment' is set
        if (params.contactDepartment == null) {
            throw new Error('Missing required parameter contactDepartment when calling companyContactsDepartmentsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.contactDepartment),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ContactDepartmentsApi;
}());
exports.ContactDepartmentsApi = ContactDepartmentsApi;
//}
//export namespace  {
'use strict';
var ContactNotesApi = (function () {
    function ContactNotesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Contact Notes Count
     * @param id
     * @param conditions
     */
    ContactNotesApi.prototype.companyContactsIdNotesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/notes/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdNotesCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Notes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ContactNotesApi.prototype.companyContactsIdNotesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/notes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdNotesGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Contact Note By Id
     * @param id
     * @param noteId
     */
    ContactNotesApi.prototype.companyContactsIdNotesNoteIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdNotesNoteIdDelete');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling companyContactsIdNotesNoteIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Note By Id
     * @param id
     * @param noteId
     */
    ContactNotesApi.prototype.companyContactsIdNotesNoteIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdNotesNoteIdGet');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling companyContactsIdNotesNoteIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Contact Note
     * @param id
     * @param noteId
     * @param operations
     */
    ContactNotesApi.prototype.companyContactsIdNotesNoteIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdNotesNoteIdPatch');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling companyContactsIdNotesNoteIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyContactsIdNotesNoteIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Contact Note
     * @param id
     * @param noteId
     * @param contactNote
     */
    ContactNotesApi.prototype.companyContactsIdNotesNoteIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdNotesNoteIdPut');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling companyContactsIdNotesNoteIdPut');
        }
        // verify required parameter 'contactNote' is set
        if (params.contactNote == null) {
            throw new Error('Missing required parameter contactNote when calling companyContactsIdNotesNoteIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.contactNote),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Contact Note
     * @param id
     * @param contactNote
     */
    ContactNotesApi.prototype.companyContactsIdNotesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/notes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdNotesPost');
        }
        // verify required parameter 'contactNote' is set
        if (params.contactNote == null) {
            throw new Error('Missing required parameter contactNote when calling companyContactsIdNotesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.contactNote),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ContactNotesApi;
}());
exports.ContactNotesApi = ContactNotesApi;
//}
//export namespace  {
'use strict';
var ContactRelationshipsApi = (function () {
    function ContactRelationshipsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Contact Relationships Count
     * @param conditions
     */
    ContactRelationshipsApi.prototype.companyContactsRelationshipsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/relationships/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Relationships
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ContactRelationshipsApi.prototype.companyContactsRelationshipsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/relationships';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Contact Relationship By Id
     * @param id
     */
    ContactRelationshipsApi.prototype.companyContactsRelationshipsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/relationships/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsRelationshipsIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Relationship By Id
     * @param id
     */
    ContactRelationshipsApi.prototype.companyContactsRelationshipsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/relationships/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsRelationshipsIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Contact Relationship
     * @param id
     * @param operations
     */
    ContactRelationshipsApi.prototype.companyContactsRelationshipsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/relationships/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsRelationshipsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyContactsRelationshipsIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Contact Relationship
     * @param id
     * @param contactRelationship
     */
    ContactRelationshipsApi.prototype.companyContactsRelationshipsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/relationships/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsRelationshipsIdPut');
        }
        // verify required parameter 'contactRelationship' is set
        if (params.contactRelationship == null) {
            throw new Error('Missing required parameter contactRelationship when calling companyContactsRelationshipsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.contactRelationship),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Contact Relationship
     * @param contactRelationship
     */
    ContactRelationshipsApi.prototype.companyContactsRelationshipsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/relationships';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'contactRelationship' is set
        if (params.contactRelationship == null) {
            throw new Error('Missing required parameter contactRelationship when calling companyContactsRelationshipsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.contactRelationship),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ContactRelationshipsApi;
}());
exports.ContactRelationshipsApi = ContactRelationshipsApi;
//}
//export namespace  {
'use strict';
var ContactTracksApi = (function () {
    function ContactTracksApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Tracks Count
     * @param id
     * @param conditions
     */
    ContactTracksApi.prototype.companyContactsIdTracksCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/tracks/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdTracksCountGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Tracks
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ContactTracksApi.prototype.companyContactsIdTracksGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/tracks'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdTracksGet');
        }
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Track
     * @param id
     * @param track
     */
    ContactTracksApi.prototype.companyContactsIdTracksPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/tracks'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdTracksPost');
        }
        // verify required parameter 'track' is set
        if (params.track == null) {
            throw new Error('Missing required parameter track when calling companyContactsIdTracksPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.track),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Track By Id
     * @param id
     * @param trackId
     */
    ContactTracksApi.prototype.companyContactsIdTracksTrackIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/tracks/{trackId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'trackId' + '}', String(params.trackId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdTracksTrackIdDelete');
        }
        // verify required parameter 'trackId' is set
        if (params.trackId == null) {
            throw new Error('Missing required parameter trackId when calling companyContactsIdTracksTrackIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Track By Id
     * @param id
     * @param trackId
     */
    ContactTracksApi.prototype.companyContactsIdTracksTrackIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/tracks/{trackId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'trackId' + '}', String(params.trackId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdTracksTrackIdGet');
        }
        // verify required parameter 'trackId' is set
        if (params.trackId == null) {
            throw new Error('Missing required parameter trackId when calling companyContactsIdTracksTrackIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ContactTracksApi;
}());
exports.ContactTracksApi = ContactTracksApi;
//}
//export namespace  {
'use strict';
var ContactTypesApi = (function () {
    function ContactTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Contact Types Count
     * @param conditions
     */
    ContactTypesApi.prototype.companyContactsTypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/types/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ContactTypesApi.prototype.companyContactsTypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Contact Type By Id
     * @param id
     */
    ContactTypesApi.prototype.companyContactsTypesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsTypesIdDelete');
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Type By Id
     * @param id
     */
    ContactTypesApi.prototype.companyContactsTypesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsTypesIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Contact Type
     * @param id
     * @param operations
     */
    ContactTypesApi.prototype.companyContactsTypesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsTypesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyContactsTypesIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Contact Type
     * @param id
     * @param contactType
     */
    ContactTypesApi.prototype.companyContactsTypesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsTypesIdPut');
        }
        // verify required parameter 'contactType' is set
        if (params.contactType == null) {
            throw new Error('Missing required parameter contactType when calling companyContactsTypesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.contactType),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Contact Type
     * @param contactType
     */
    ContactTypesApi.prototype.companyContactsTypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'contactType' is set
        if (params.contactType == null) {
            throw new Error('Missing required parameter contactType when calling companyContactsTypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.contactType),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ContactTypesApi;
}());
exports.ContactTypesApi = ContactTypesApi;
//}
//export namespace  {
'use strict';
var ContactsApi = (function () {
    function ContactsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Contacts Count
     * @param conditions
     */
    ContactsApi.prototype.companyContactsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contacts
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ContactsApi.prototype.companyContactsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Contact By Id
     * @param id
     * @param transferContactId
     */
    ContactsApi.prototype.companyContactsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdDelete');
        }
        if (params.transferContactId !== undefined) {
            queryParameters['transferContactId'] = params.transferContactId;
        }
        var fetchParams = {
            method: 'DELETE',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact By Id
     * @param id
     */
    ContactsApi.prototype.companyContactsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Contact Image
     * @param id
     * @param useDefaultFlag
     * @param lastModified
     */
    ContactsApi.prototype.companyContactsIdImageGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/image'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdImageGet');
        }
        if (params.useDefaultFlag !== undefined) {
            queryParameters['useDefaultFlag'] = params.useDefaultFlag;
        }
        if (params.lastModified !== undefined) {
            queryParameters['lastModified'] = params.lastModified;
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Update Contact
     * @param id
     * @param operations
     */
    ContactsApi.prototype.companyContactsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling companyContactsIdPatch');
        }
        var fetchParams = {
            method: 'PATCH',
            headers: headerParams,
            body: JSON.stringify(params.operations),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Portal Security
     * @param id
     */
    ContactsApi.prototype.companyContactsIdPortalSecurityGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}/portalSecurity'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdPortalSecurityGet');
        }
        var fetchParams = {
            method: 'GET',
            headers: headerParams,
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Replace Contact
     * @param id
     * @param contact
     */
    ContactsApi.prototype.companyContactsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling companyContactsIdPut');
        }
        // verify required parameter 'contact' is set
        if (params.contact == null) {
            throw new Error('Missing required parameter contact when calling companyContactsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.contact),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Contact
     * @param contact
     */
    ContactsApi.prototype.companyContactsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'contact' is set
        if (params.contact == null) {
            throw new Error('Missing required parameter contact when calling companyContactsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.contact),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Request Password
     * @param request
     */
    ContactsApi.prototype.companyContactsRequestPasswordPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/requestPassword';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'request' is set
        if (params.request == null) {
            throw new Error('Missing required parameter request when calling companyContactsRequestPasswordPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.request),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Validate Portal Credentials
     * @param request
     */
    ContactsApi.prototype.companyContactsValidatePortalCredentialsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/company/contacts/validatePortalCredentials';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'request' is set
        if (params.request == null) {
            throw new Error('Missing required parameter request when calling companyContactsValidatePortalCredentialsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.request),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ContactsApi;
}());
exports.ContactsApi = ContactsApi;
//}
