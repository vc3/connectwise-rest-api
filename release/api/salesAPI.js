"use strict";
var querystring = require('querystring');
var fetch = require('isomorphic-fetch');
var assign_1 = require('./assign');
(function (ApplicationUnitsEnum) {
    ApplicationUnitsEnum[ApplicationUnitsEnum["Amount"] = 'Amount'] = "Amount";
    ApplicationUnitsEnum[ApplicationUnitsEnum["Hours"] = 'Hours'] = "Hours";
    ApplicationUnitsEnum[ApplicationUnitsEnum["Incidents"] = 'Incidents'] = "Incidents";
})(exports.ApplicationUnitsEnum || (exports.ApplicationUnitsEnum = {}));
var ApplicationUnitsEnum = exports.ApplicationUnitsEnum;
(function (ApplicationCycleEnum) {
    ApplicationCycleEnum[ApplicationCycleEnum["Contract2Weeks"] = 'Contract2Weeks'] = "Contract2Weeks";
    ApplicationCycleEnum[ApplicationCycleEnum["Contract4Weeks"] = 'Contract4Weeks'] = "Contract4Weeks";
    ApplicationCycleEnum[ApplicationCycleEnum["ContractYear"] = 'ContractYear'] = "ContractYear";
    ApplicationCycleEnum[ApplicationCycleEnum["CalendarMonth"] = 'CalendarMonth'] = "CalendarMonth";
    ApplicationCycleEnum[ApplicationCycleEnum["CalendarQuarter"] = 'CalendarQuarter'] = "CalendarQuarter";
    ApplicationCycleEnum[ApplicationCycleEnum["CalendarWeek"] = 'CalendarWeek'] = "CalendarWeek";
    ApplicationCycleEnum[ApplicationCycleEnum["ContractQuarter"] = 'ContractQuarter'] = "ContractQuarter";
    ApplicationCycleEnum[ApplicationCycleEnum["CalendarYear"] = 'CalendarYear'] = "CalendarYear";
})(exports.ApplicationCycleEnum || (exports.ApplicationCycleEnum = {}));
var ApplicationCycleEnum = exports.ApplicationCycleEnum;
(function (EmployeeCompRateEnum) {
    EmployeeCompRateEnum[EmployeeCompRateEnum["Actual"] = 'Actual'] = "Actual";
    EmployeeCompRateEnum[EmployeeCompRateEnum["Hourly"] = 'Hourly'] = "Hourly";
})(exports.EmployeeCompRateEnum || (exports.EmployeeCompRateEnum = {}));
var EmployeeCompRateEnum = exports.EmployeeCompRateEnum;
(function (EmployeeCompNotExceedEnum) {
    EmployeeCompNotExceedEnum[EmployeeCompNotExceedEnum["Billing"] = 'Billing'] = "Billing";
    EmployeeCompNotExceedEnum[EmployeeCompNotExceedEnum["Percent"] = 'Percent'] = "Percent";
    EmployeeCompNotExceedEnum[EmployeeCompNotExceedEnum["Amount"] = 'Amount'] = "Amount";
})(exports.EmployeeCompNotExceedEnum || (exports.EmployeeCompNotExceedEnum = {}));
var EmployeeCompNotExceedEnum = exports.EmployeeCompNotExceedEnum;
(function (InvoicingCycleEnum) {
    InvoicingCycleEnum[InvoicingCycleEnum["CalendarYear"] = 'CalendarYear'] = "CalendarYear";
    InvoicingCycleEnum[InvoicingCycleEnum["ContractYear"] = 'ContractYear'] = "ContractYear";
})(exports.InvoicingCycleEnum || (exports.InvoicingCycleEnum = {}));
var InvoicingCycleEnum = exports.InvoicingCycleEnum;
(function (BillTimeEnum) {
    BillTimeEnum[BillTimeEnum["Billable"] = 'Billable'] = "Billable";
    BillTimeEnum[BillTimeEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillTimeEnum[BillTimeEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillTimeEnum[BillTimeEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillTimeEnum || (exports.BillTimeEnum = {}));
var BillTimeEnum = exports.BillTimeEnum;
(function (BillExpensesEnum) {
    BillExpensesEnum[BillExpensesEnum["Billable"] = 'Billable'] = "Billable";
    BillExpensesEnum[BillExpensesEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillExpensesEnum[BillExpensesEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillExpensesEnum[BillExpensesEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillExpensesEnum || (exports.BillExpensesEnum = {}));
var BillExpensesEnum = exports.BillExpensesEnum;
(function (BillProductsEnum) {
    BillProductsEnum[BillProductsEnum["Billable"] = 'Billable'] = "Billable";
    BillProductsEnum[BillProductsEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillProductsEnum[BillProductsEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillProductsEnum[BillProductsEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillProductsEnum || (exports.BillProductsEnum = {}));
var BillProductsEnum = exports.BillProductsEnum;
(function (PeriodTypeEnum) {
    PeriodTypeEnum[PeriodTypeEnum["Current"] = 'Current'] = "Current";
    PeriodTypeEnum[PeriodTypeEnum["Future"] = 'Future'] = "Future";
    PeriodTypeEnum[PeriodTypeEnum["Both"] = 'Both'] = "Both";
    PeriodTypeEnum[PeriodTypeEnum["Undefined"] = 'Undefined'] = "Undefined";
})(exports.PeriodTypeEnum || (exports.PeriodTypeEnum = {}));
var PeriodTypeEnum = exports.PeriodTypeEnum;
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
(function (TypeEnum) {
    TypeEnum[TypeEnum["Product"] = 'Product'] = "Product";
    TypeEnum[TypeEnum["Service"] = 'Service'] = "Service";
    TypeEnum[TypeEnum["Agreement"] = 'Agreement'] = "Agreement";
    TypeEnum[TypeEnum["Other1"] = 'Other1'] = "Other1";
    TypeEnum[TypeEnum["Other2"] = 'Other2'] = "Other2";
})(exports.TypeEnum || (exports.TypeEnum = {}));
var TypeEnum = exports.TypeEnum;
(function (CycleTypeEnum) {
    CycleTypeEnum[CycleTypeEnum["CalendarYear"] = 'CalendarYear'] = "CalendarYear";
    CycleTypeEnum[CycleTypeEnum["ContractYear"] = 'ContractYear'] = "ContractYear";
})(exports.CycleTypeEnum || (exports.CycleTypeEnum = {}));
var CycleTypeEnum = exports.CycleTypeEnum;
(function (BillingMethodEnum) {
    BillingMethodEnum[BillingMethodEnum["ActualRates"] = 'ActualRates'] = "ActualRates";
    BillingMethodEnum[BillingMethodEnum["FixedFee"] = 'FixedFee'] = "FixedFee";
    BillingMethodEnum[BillingMethodEnum["NotToExceed"] = 'NotToExceed'] = "NotToExceed";
    BillingMethodEnum[BillingMethodEnum["OverrideRate"] = 'OverrideRate'] = "OverrideRate";
})(exports.BillingMethodEnum || (exports.BillingMethodEnum = {}));
var BillingMethodEnum = exports.BillingMethodEnum;
(function (BudgetAnalysisEnum) {
    BudgetAnalysisEnum[BudgetAnalysisEnum["ActualHours"] = 'ActualHours'] = "ActualHours";
    BudgetAnalysisEnum[BudgetAnalysisEnum["BillableHours"] = 'BillableHours'] = "BillableHours";
})(exports.BudgetAnalysisEnum || (exports.BudgetAnalysisEnum = {}));
var BudgetAnalysisEnum = exports.BudgetAnalysisEnum;
(function (BillingRateTypeEnum) {
    BillingRateTypeEnum[BillingRateTypeEnum["WorkRole"] = 'WorkRole'] = "WorkRole";
    BillingRateTypeEnum[BillingRateTypeEnum["StaffMember"] = 'StaffMember'] = "StaffMember";
})(exports.BillingRateTypeEnum || (exports.BillingRateTypeEnum = {}));
var BillingRateTypeEnum = exports.BillingRateTypeEnum;
(function (BillTimeEnum) {
    BillTimeEnum[BillTimeEnum["Billable"] = 'Billable'] = "Billable";
    BillTimeEnum[BillTimeEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillTimeEnum[BillTimeEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillTimeEnum[BillTimeEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillTimeEnum || (exports.BillTimeEnum = {}));
var BillTimeEnum = exports.BillTimeEnum;
(function (BillExpensesEnum) {
    BillExpensesEnum[BillExpensesEnum["Billable"] = 'Billable'] = "Billable";
    BillExpensesEnum[BillExpensesEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillExpensesEnum[BillExpensesEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillExpensesEnum[BillExpensesEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillExpensesEnum || (exports.BillExpensesEnum = {}));
var BillExpensesEnum = exports.BillExpensesEnum;
(function (BillProductsEnum) {
    BillProductsEnum[BillProductsEnum["Billable"] = 'Billable'] = "Billable";
    BillProductsEnum[BillProductsEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillProductsEnum[BillProductsEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillProductsEnum[BillProductsEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillProductsEnum || (exports.BillProductsEnum = {}));
var BillProductsEnum = exports.BillProductsEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["Individual"] = 'Individual'] = "Individual";
    TypeEnum[TypeEnum["Team"] = 'Team'] = "Team";
})(exports.TypeEnum || (exports.TypeEnum = {}));
var TypeEnum = exports.TypeEnum;
(function (RecordTypeEnum) {
    RecordTypeEnum[RecordTypeEnum["ServiceTicket"] = 'ServiceTicket'] = "ServiceTicket";
    RecordTypeEnum[RecordTypeEnum["ProjectTicket"] = 'ProjectTicket'] = "ProjectTicket";
    RecordTypeEnum[RecordTypeEnum["ProjectIssue"] = 'ProjectIssue'] = "ProjectIssue";
})(exports.RecordTypeEnum || (exports.RecordTypeEnum = {}));
var RecordTypeEnum = exports.RecordTypeEnum;
(function (SeverityEnum) {
    SeverityEnum[SeverityEnum["Low"] = 'Low'] = "Low";
    SeverityEnum[SeverityEnum["Medium"] = 'Medium'] = "Medium";
    SeverityEnum[SeverityEnum["High"] = 'High'] = "High";
})(exports.SeverityEnum || (exports.SeverityEnum = {}));
var SeverityEnum = exports.SeverityEnum;
(function (ImpactEnum) {
    ImpactEnum[ImpactEnum["Low"] = 'Low'] = "Low";
    ImpactEnum[ImpactEnum["Medium"] = 'Medium'] = "Medium";
    ImpactEnum[ImpactEnum["High"] = 'High'] = "High";
})(exports.ImpactEnum || (exports.ImpactEnum = {}));
var ImpactEnum = exports.ImpactEnum;
(function (SubBillingMethodEnum) {
    SubBillingMethodEnum[SubBillingMethodEnum["ActualRates"] = 'ActualRates'] = "ActualRates";
    SubBillingMethodEnum[SubBillingMethodEnum["FixedFee"] = 'FixedFee'] = "FixedFee";
    SubBillingMethodEnum[SubBillingMethodEnum["NotToExceed"] = 'NotToExceed'] = "NotToExceed";
    SubBillingMethodEnum[SubBillingMethodEnum["OverrideRate"] = 'OverrideRate'] = "OverrideRate";
})(exports.SubBillingMethodEnum || (exports.SubBillingMethodEnum = {}));
var SubBillingMethodEnum = exports.SubBillingMethodEnum;
(function (KnowledgeBaseLinkTypeEnum) {
    KnowledgeBaseLinkTypeEnum[KnowledgeBaseLinkTypeEnum["ServiceTicket"] = 'ServiceTicket'] = "ServiceTicket";
    KnowledgeBaseLinkTypeEnum[KnowledgeBaseLinkTypeEnum["ProjectTicket"] = 'ProjectTicket'] = "ProjectTicket";
    KnowledgeBaseLinkTypeEnum[KnowledgeBaseLinkTypeEnum["ProjectIssue"] = 'ProjectIssue'] = "ProjectIssue";
    KnowledgeBaseLinkTypeEnum[KnowledgeBaseLinkTypeEnum["KnowledgeBaseArticle"] = 'KnowledgeBaseArticle'] = "KnowledgeBaseArticle";
    KnowledgeBaseLinkTypeEnum[KnowledgeBaseLinkTypeEnum["Time"] = 'Time'] = "Time";
    KnowledgeBaseLinkTypeEnum[KnowledgeBaseLinkTypeEnum["Activity"] = 'Activity'] = "Activity";
})(exports.KnowledgeBaseLinkTypeEnum || (exports.KnowledgeBaseLinkTypeEnum = {}));
var KnowledgeBaseLinkTypeEnum = exports.KnowledgeBaseLinkTypeEnum;
(function (BillTimeEnum) {
    BillTimeEnum[BillTimeEnum["Billable"] = 'Billable'] = "Billable";
    BillTimeEnum[BillTimeEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillTimeEnum[BillTimeEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillTimeEnum[BillTimeEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillTimeEnum || (exports.BillTimeEnum = {}));
var BillTimeEnum = exports.BillTimeEnum;
(function (BillExpensesEnum) {
    BillExpensesEnum[BillExpensesEnum["Billable"] = 'Billable'] = "Billable";
    BillExpensesEnum[BillExpensesEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillExpensesEnum[BillExpensesEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillExpensesEnum[BillExpensesEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillExpensesEnum || (exports.BillExpensesEnum = {}));
var BillExpensesEnum = exports.BillExpensesEnum;
(function (BillProductsEnum) {
    BillProductsEnum[BillProductsEnum["Billable"] = 'Billable'] = "Billable";
    BillProductsEnum[BillProductsEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillProductsEnum[BillProductsEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillProductsEnum[BillProductsEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillProductsEnum || (exports.BillProductsEnum = {}));
var BillProductsEnum = exports.BillProductsEnum;
(function (PredecessorTypeEnum) {
    PredecessorTypeEnum[PredecessorTypeEnum["Ticket"] = 'Ticket'] = "Ticket";
    PredecessorTypeEnum[PredecessorTypeEnum["Phase"] = 'Phase'] = "Phase";
})(exports.PredecessorTypeEnum || (exports.PredecessorTypeEnum = {}));
var PredecessorTypeEnum = exports.PredecessorTypeEnum;
//export namespace  {
'use strict';
var ActivitiesApi = (function () {
    function ActivitiesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Activities Count
     * @param conditions
     */
    ActivitiesApi.prototype.salesActivitiesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/count';
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
     * Get Activities
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ActivitiesApi.prototype.salesActivitiesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities';
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
     * Delete Activity By Id
     * @param id
     */
    ActivitiesApi.prototype.salesActivitiesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesIdDelete');
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
     * Get Activity By Id
     * @param id
     */
    ActivitiesApi.prototype.salesActivitiesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesIdGet');
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
     * Update Activity
     * @param id
     * @param operations
     */
    ActivitiesApi.prototype.salesActivitiesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesActivitiesIdPatch');
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
     * Replace Activity
     * @param id
     * @param activity
     */
    ActivitiesApi.prototype.salesActivitiesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesIdPut');
        }
        // verify required parameter 'activity' is set
        if (params.activity == null) {
            throw new Error('Missing required parameter activity when calling salesActivitiesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.activity),
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
     * Create Activity
     * @param activity
     */
    ActivitiesApi.prototype.salesActivitiesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'activity' is set
        if (params.activity == null) {
            throw new Error('Missing required parameter activity when calling salesActivitiesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.activity),
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
    return ActivitiesApi;
}());
exports.ActivitiesApi = ActivitiesApi;
//}
//export namespace  {
'use strict';
var ActivityStatusesApi = (function () {
    function ActivityStatusesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Activity Statuses Count
     * @param conditions
     */
    ActivityStatusesApi.prototype.salesActivitiesStatusesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/statuses/count';
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
     * Get Activity Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ActivityStatusesApi.prototype.salesActivitiesStatusesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/statuses';
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
     * Delete Activity Status By Id
     * @param id
     */
    ActivityStatusesApi.prototype.salesActivitiesStatusesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesStatusesIdDelete');
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
     * Get Activity Status By Id
     * @param id
     */
    ActivityStatusesApi.prototype.salesActivitiesStatusesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesStatusesIdGet');
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
     * Update Activity Status
     * @param id
     * @param operations
     */
    ActivityStatusesApi.prototype.salesActivitiesStatusesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesStatusesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesActivitiesStatusesIdPatch');
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
     * Replace Activity Status
     * @param id
     * @param activityStatus
     */
    ActivityStatusesApi.prototype.salesActivitiesStatusesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesStatusesIdPut');
        }
        // verify required parameter 'activityStatus' is set
        if (params.activityStatus == null) {
            throw new Error('Missing required parameter activityStatus when calling salesActivitiesStatusesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.activityStatus),
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
     * Create Activity Status
     * @param activityStatus
     */
    ActivityStatusesApi.prototype.salesActivitiesStatusesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/statuses';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'activityStatus' is set
        if (params.activityStatus == null) {
            throw new Error('Missing required parameter activityStatus when calling salesActivitiesStatusesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.activityStatus),
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
    return ActivityStatusesApi;
}());
exports.ActivityStatusesApi = ActivityStatusesApi;
//}
//export namespace  {
'use strict';
var ActivityTypesApi = (function () {
    function ActivityTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Activity Types Count
     * @param conditions
     */
    ActivityTypesApi.prototype.salesActivitiesTypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/types/count';
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
     * Get Activity Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ActivityTypesApi.prototype.salesActivitiesTypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/types';
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
     * Delete Activity Type By Id
     * @param id
     */
    ActivityTypesApi.prototype.salesActivitiesTypesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesTypesIdDelete');
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
     * Get Activity Type By Id
     * @param id
     */
    ActivityTypesApi.prototype.salesActivitiesTypesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesTypesIdGet');
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
     * Update Activity Type
     * @param id
     * @param operations
     */
    ActivityTypesApi.prototype.salesActivitiesTypesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesTypesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesActivitiesTypesIdPatch');
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
     * Replace Activity Type
     * @param id
     * @param activityType
     */
    ActivityTypesApi.prototype.salesActivitiesTypesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesActivitiesTypesIdPut');
        }
        // verify required parameter 'activityType' is set
        if (params.activityType == null) {
            throw new Error('Missing required parameter activityType when calling salesActivitiesTypesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.activityType),
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
     * Create Activity Type
     * @param activityType
     */
    ActivityTypesApi.prototype.salesActivitiesTypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/activities/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'activityType' is set
        if (params.activityType == null) {
            throw new Error('Missing required parameter activityType when calling salesActivitiesTypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.activityType),
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
    return ActivityTypesApi;
}());
exports.ActivityTypesApi = ActivityTypesApi;
//}
//export namespace  {
'use strict';
var OpportunitiesApi = (function () {
    function OpportunitiesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Opportunities Count
     * @param conditions
     */
    OpportunitiesApi.prototype.salesOpportunitiesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/count';
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
     * Get Opportunities
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    OpportunitiesApi.prototype.salesOpportunitiesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities';
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
     * Convert Opportunity To Agreement
     * @param id
     * @param conversion
     */
    OpportunitiesApi.prototype.salesOpportunitiesIdConvertToAgreementPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/convertToAgreement'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdConvertToAgreementPost');
        }
        // verify required parameter 'conversion' is set
        if (params.conversion == null) {
            throw new Error('Missing required parameter conversion when calling salesOpportunitiesIdConvertToAgreementPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.conversion),
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
     * Convert Opportunity To Project
     * @param id
     * @param conversion
     */
    OpportunitiesApi.prototype.salesOpportunitiesIdConvertToProjectPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/convertToProject'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdConvertToProjectPost');
        }
        // verify required parameter 'conversion' is set
        if (params.conversion == null) {
            throw new Error('Missing required parameter conversion when calling salesOpportunitiesIdConvertToProjectPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.conversion),
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
     * Convert Opportunity To Sales Order
     * @param id
     * @param conversion
     */
    OpportunitiesApi.prototype.salesOpportunitiesIdConvertToSalesOrderPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/convertToSalesOrder'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdConvertToSalesOrderPost');
        }
        // verify required parameter 'conversion' is set
        if (params.conversion == null) {
            throw new Error('Missing required parameter conversion when calling salesOpportunitiesIdConvertToSalesOrderPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.conversion),
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
     * Convert Opportunity To Service Ticket
     * @param id
     * @param conversion
     */
    OpportunitiesApi.prototype.salesOpportunitiesIdConvertToServiceTicketPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/convertToServiceTicket'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdConvertToServiceTicketPost');
        }
        // verify required parameter 'conversion' is set
        if (params.conversion == null) {
            throw new Error('Missing required parameter conversion when calling salesOpportunitiesIdConvertToServiceTicketPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.conversion),
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
     * Delete Opportunity By Id
     * @param id
     */
    OpportunitiesApi.prototype.salesOpportunitiesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdDelete');
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
     * Get Opportunity By Id
     * @param id
     */
    OpportunitiesApi.prototype.salesOpportunitiesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdGet');
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
     * Update Opportunity
     * @param id
     * @param operations
     */
    OpportunitiesApi.prototype.salesOpportunitiesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesOpportunitiesIdPatch');
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
     * Replace Opportunity
     * @param id
     * @param opportunity
     */
    OpportunitiesApi.prototype.salesOpportunitiesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdPut');
        }
        // verify required parameter 'opportunity' is set
        if (params.opportunity == null) {
            throw new Error('Missing required parameter opportunity when calling salesOpportunitiesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.opportunity),
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
     * Create Opportunity
     * @param opportunity
     */
    OpportunitiesApi.prototype.salesOpportunitiesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'opportunity' is set
        if (params.opportunity == null) {
            throw new Error('Missing required parameter opportunity when calling salesOpportunitiesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.opportunity),
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
    return OpportunitiesApi;
}());
exports.OpportunitiesApi = OpportunitiesApi;
//}
//export namespace  {
'use strict';
var OpportunityContactsApi = (function () {
    function OpportunityContactsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Delete Opportunity Contact By Id
     * @param id
     * @param contactId
     */
    OpportunityContactsApi.prototype.salesOpportunitiesIdContactsContactIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/contacts/{contactId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'contactId' + '}', String(params.contactId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsContactIdDelete');
        }
        // verify required parameter 'contactId' is set
        if (params.contactId == null) {
            throw new Error('Missing required parameter contactId when calling salesOpportunitiesIdContactsContactIdDelete');
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
     * Get Opportunity Contact By Id
     * @param id
     * @param contactId
     */
    OpportunityContactsApi.prototype.salesOpportunitiesIdContactsContactIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/contacts/{contactId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'contactId' + '}', String(params.contactId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsContactIdGet');
        }
        // verify required parameter 'contactId' is set
        if (params.contactId == null) {
            throw new Error('Missing required parameter contactId when calling salesOpportunitiesIdContactsContactIdGet');
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
     * Update Opportunity Contact
     * @param id
     * @param contactId
     * @param operations
     */
    OpportunityContactsApi.prototype.salesOpportunitiesIdContactsContactIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/contacts/{contactId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'contactId' + '}', String(params.contactId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsContactIdPatch');
        }
        // verify required parameter 'contactId' is set
        if (params.contactId == null) {
            throw new Error('Missing required parameter contactId when calling salesOpportunitiesIdContactsContactIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesOpportunitiesIdContactsContactIdPatch');
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
     * Replace Opportunity Contact
     * @param id
     * @param contactId
     * @param opportunityContact
     */
    OpportunityContactsApi.prototype.salesOpportunitiesIdContactsContactIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/contacts/{contactId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'contactId' + '}', String(params.contactId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsContactIdPut');
        }
        // verify required parameter 'contactId' is set
        if (params.contactId == null) {
            throw new Error('Missing required parameter contactId when calling salesOpportunitiesIdContactsContactIdPut');
        }
        // verify required parameter 'opportunityContact' is set
        if (params.opportunityContact == null) {
            throw new Error('Missing required parameter opportunityContact when calling salesOpportunitiesIdContactsContactIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.opportunityContact),
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
     * Get Opportunity Contacts Count
     * @param id
     * @param conditions
     */
    OpportunityContactsApi.prototype.salesOpportunitiesIdContactsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/contacts/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsCountGet');
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
     * Get Opportunity Contacts
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    OpportunityContactsApi.prototype.salesOpportunitiesIdContactsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/contacts'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsGet');
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
     * Create Opportunity Contact
     * @param id
     * @param opportunityContact
     */
    OpportunityContactsApi.prototype.salesOpportunitiesIdContactsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/contacts'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsPost');
        }
        // verify required parameter 'opportunityContact' is set
        if (params.opportunityContact == null) {
            throw new Error('Missing required parameter opportunityContact when calling salesOpportunitiesIdContactsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.opportunityContact),
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
    return OpportunityContactsApi;
}());
exports.OpportunityContactsApi = OpportunityContactsApi;
//}
//export namespace  {
'use strict';
var OpportunityForecastsApi = (function () {
    function OpportunityForecastsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Forecasts Count
     * @param id
     * @param conditions
     */
    OpportunityForecastsApi.prototype.salesOpportunitiesIdForecastCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/forecast/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastCountGet');
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
     * Delete Forecast By Id
     * @param id
     * @param forecastId
     */
    OpportunityForecastsApi.prototype.salesOpportunitiesIdForecastForecastIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/forecast/{forecastId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'forecastId' + '}', String(params.forecastId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastForecastIdDelete');
        }
        // verify required parameter 'forecastId' is set
        if (params.forecastId == null) {
            throw new Error('Missing required parameter forecastId when calling salesOpportunitiesIdForecastForecastIdDelete');
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
     * Get Forecast By Id
     * @param id
     * @param forecastId
     */
    OpportunityForecastsApi.prototype.salesOpportunitiesIdForecastForecastIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/forecast/{forecastId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'forecastId' + '}', String(params.forecastId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastForecastIdGet');
        }
        // verify required parameter 'forecastId' is set
        if (params.forecastId == null) {
            throw new Error('Missing required parameter forecastId when calling salesOpportunitiesIdForecastForecastIdGet');
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
     * Update Forecast
     * @param id
     * @param forecastId
     * @param operations
     */
    OpportunityForecastsApi.prototype.salesOpportunitiesIdForecastForecastIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/forecast/{forecastId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'forecastId' + '}', String(params.forecastId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastForecastIdPatch');
        }
        // verify required parameter 'forecastId' is set
        if (params.forecastId == null) {
            throw new Error('Missing required parameter forecastId when calling salesOpportunitiesIdForecastForecastIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesOpportunitiesIdForecastForecastIdPatch');
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
     * Replace Forecast
     * @param id
     * @param forecastId
     * @param forecast
     */
    OpportunityForecastsApi.prototype.salesOpportunitiesIdForecastForecastIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/forecast/{forecastId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'forecastId' + '}', String(params.forecastId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastForecastIdPut');
        }
        // verify required parameter 'forecastId' is set
        if (params.forecastId == null) {
            throw new Error('Missing required parameter forecastId when calling salesOpportunitiesIdForecastForecastIdPut');
        }
        // verify required parameter 'forecast' is set
        if (params.forecast == null) {
            throw new Error('Missing required parameter forecast when calling salesOpportunitiesIdForecastForecastIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.forecast),
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
     * Get Forecasts
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    OpportunityForecastsApi.prototype.salesOpportunitiesIdForecastGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/forecast'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastGet');
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
     * Create Forecast
     * @param id
     * @param forecast
     */
    OpportunityForecastsApi.prototype.salesOpportunitiesIdForecastPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/forecast'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastPost');
        }
        // verify required parameter 'forecast' is set
        if (params.forecast == null) {
            throw new Error('Missing required parameter forecast when calling salesOpportunitiesIdForecastPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.forecast),
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
    return OpportunityForecastsApi;
}());
exports.OpportunityForecastsApi = OpportunityForecastsApi;
//}
//export namespace  {
'use strict';
var OpportunityNotesApi = (function () {
    function OpportunityNotesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Opportunity Notes Count
     * @param id
     * @param conditions
     */
    OpportunityNotesApi.prototype.salesOpportunitiesIdNotesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/notes/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesCountGet');
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
     * Get Opportunity Notes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    OpportunityNotesApi.prototype.salesOpportunitiesIdNotesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/notes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesGet');
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
     * Delete Opportunity Note By Id
     * @param id
     * @param noteId
     */
    OpportunityNotesApi.prototype.salesOpportunitiesIdNotesNoteIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesNoteIdDelete');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling salesOpportunitiesIdNotesNoteIdDelete');
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
     * Get Opportunity Note By Id
     * @param id
     * @param noteId
     */
    OpportunityNotesApi.prototype.salesOpportunitiesIdNotesNoteIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesNoteIdGet');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling salesOpportunitiesIdNotesNoteIdGet');
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
     * Update Opportunity Note
     * @param id
     * @param noteId
     * @param operations
     */
    OpportunityNotesApi.prototype.salesOpportunitiesIdNotesNoteIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesNoteIdPatch');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling salesOpportunitiesIdNotesNoteIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesOpportunitiesIdNotesNoteIdPatch');
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
     * Replace Opportunity Note
     * @param id
     * @param noteId
     * @param note
     */
    OpportunityNotesApi.prototype.salesOpportunitiesIdNotesNoteIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesNoteIdPut');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling salesOpportunitiesIdNotesNoteIdPut');
        }
        // verify required parameter 'note' is set
        if (params.note == null) {
            throw new Error('Missing required parameter note when calling salesOpportunitiesIdNotesNoteIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.note),
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
     * Create Opportunity Note
     * @param id
     * @param note
     */
    OpportunityNotesApi.prototype.salesOpportunitiesIdNotesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/notes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesPost');
        }
        // verify required parameter 'note' is set
        if (params.note == null) {
            throw new Error('Missing required parameter note when calling salesOpportunitiesIdNotesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.note),
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
    return OpportunityNotesApi;
}());
exports.OpportunityNotesApi = OpportunityNotesApi;
//}
//export namespace  {
'use strict';
var OpportunityRatingsApi = (function () {
    function OpportunityRatingsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Opportunity Ratings Count
     * @param conditions
     */
    OpportunityRatingsApi.prototype.salesOpportunitiesRatingsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/ratings/count';
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
     * Get Opportunity Ratings
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    OpportunityRatingsApi.prototype.salesOpportunitiesRatingsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/ratings';
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
     * Delete Opportunity Rating By Id
     * @param id
     */
    OpportunityRatingsApi.prototype.salesOpportunitiesRatingsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/ratings/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesRatingsIdDelete');
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
     * Get Opportunity Rating By Id
     * @param id
     */
    OpportunityRatingsApi.prototype.salesOpportunitiesRatingsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/ratings/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesRatingsIdGet');
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
     * Update Opportunity Rating
     * @param id
     * @param operations
     */
    OpportunityRatingsApi.prototype.salesOpportunitiesRatingsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/ratings/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesRatingsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesOpportunitiesRatingsIdPatch');
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
     * Replace Opportunity Rating
     * @param id
     * @param opportunityRating
     */
    OpportunityRatingsApi.prototype.salesOpportunitiesRatingsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/ratings/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesRatingsIdPut');
        }
        // verify required parameter 'opportunityRating' is set
        if (params.opportunityRating == null) {
            throw new Error('Missing required parameter opportunityRating when calling salesOpportunitiesRatingsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.opportunityRating),
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
     * Create Opportunity Rating
     * @param opportunityRating
     */
    OpportunityRatingsApi.prototype.salesOpportunitiesRatingsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/ratings';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'opportunityRating' is set
        if (params.opportunityRating == null) {
            throw new Error('Missing required parameter opportunityRating when calling salesOpportunitiesRatingsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.opportunityRating),
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
    return OpportunityRatingsApi;
}());
exports.OpportunityRatingsApi = OpportunityRatingsApi;
//}
//export namespace  {
'use strict';
var OpportunityStatusesApi = (function () {
    function OpportunityStatusesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Statuses Count
     * @param conditions
     */
    OpportunityStatusesApi.prototype.salesOpportunitiesStatusesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/statuses/count';
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
     * Get Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    OpportunityStatusesApi.prototype.salesOpportunitiesStatusesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/statuses';
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
     * Delete Status By Id
     * @param id
     */
    OpportunityStatusesApi.prototype.salesOpportunitiesStatusesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesStatusesIdDelete');
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
     * Get Status By Id
     * @param id
     */
    OpportunityStatusesApi.prototype.salesOpportunitiesStatusesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesStatusesIdGet');
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
     * Update Status
     * @param id
     * @param operations
     */
    OpportunityStatusesApi.prototype.salesOpportunitiesStatusesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesStatusesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesOpportunitiesStatusesIdPatch');
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
     * Replace Status
     * @param id
     * @param status
     */
    OpportunityStatusesApi.prototype.salesOpportunitiesStatusesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesStatusesIdPut');
        }
        // verify required parameter 'status' is set
        if (params.status == null) {
            throw new Error('Missing required parameter status when calling salesOpportunitiesStatusesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.status),
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
     * Create Status
     * @param status
     */
    OpportunityStatusesApi.prototype.salesOpportunitiesStatusesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/statuses';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'status' is set
        if (params.status == null) {
            throw new Error('Missing required parameter status when calling salesOpportunitiesStatusesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.status),
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
    return OpportunityStatusesApi;
}());
exports.OpportunityStatusesApi = OpportunityStatusesApi;
//}
//export namespace  {
'use strict';
var OpportunityTeamsApi = (function () {
    function OpportunityTeamsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Teams Count
     * @param id
     * @param conditions
     */
    OpportunityTeamsApi.prototype.salesOpportunitiesIdTeamCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/team/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamCountGet');
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
     * Get Teams
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    OpportunityTeamsApi.prototype.salesOpportunitiesIdTeamGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/team'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamGet');
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
     * Create Team
     * @param id
     * @param team
     */
    OpportunityTeamsApi.prototype.salesOpportunitiesIdTeamPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/team'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamPost');
        }
        // verify required parameter 'team' is set
        if (params.team == null) {
            throw new Error('Missing required parameter team when calling salesOpportunitiesIdTeamPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.team),
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
     * Delete Team By Id
     * @param id
     * @param teamId
     */
    OpportunityTeamsApi.prototype.salesOpportunitiesIdTeamTeamIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/team/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamTeamIdDelete');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling salesOpportunitiesIdTeamTeamIdDelete');
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
     * Get Team By Id
     * @param id
     * @param teamId
     */
    OpportunityTeamsApi.prototype.salesOpportunitiesIdTeamTeamIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/team/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamTeamIdGet');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling salesOpportunitiesIdTeamTeamIdGet');
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
     * Update Team
     * @param id
     * @param teamId
     * @param operations
     */
    OpportunityTeamsApi.prototype.salesOpportunitiesIdTeamTeamIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/team/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamTeamIdPatch');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling salesOpportunitiesIdTeamTeamIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesOpportunitiesIdTeamTeamIdPatch');
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
     * Replace Team
     * @param id
     * @param teamId
     * @param team
     */
    OpportunityTeamsApi.prototype.salesOpportunitiesIdTeamTeamIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/{id}/team/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamTeamIdPut');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling salesOpportunitiesIdTeamTeamIdPut');
        }
        // verify required parameter 'team' is set
        if (params.team == null) {
            throw new Error('Missing required parameter team when calling salesOpportunitiesIdTeamTeamIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.team),
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
    return OpportunityTeamsApi;
}());
exports.OpportunityTeamsApi = OpportunityTeamsApi;
//}
//export namespace  {
'use strict';
var OpportunityTypesApi = (function () {
    function OpportunityTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Opportunity Types Count
     * @param conditions
     */
    OpportunityTypesApi.prototype.salesOpportunitiesTypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/types/count';
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
     * Get Opportunity Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    OpportunityTypesApi.prototype.salesOpportunitiesTypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/types';
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
     * Delete Opportunity Type By Id
     * @param id
     */
    OpportunityTypesApi.prototype.salesOpportunitiesTypesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesTypesIdDelete');
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
     * Get Opportunity Type By Id
     * @param id
     */
    OpportunityTypesApi.prototype.salesOpportunitiesTypesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesTypesIdGet');
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
     * Update Opportunity Type
     * @param id
     * @param operations
     */
    OpportunityTypesApi.prototype.salesOpportunitiesTypesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesTypesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesOpportunitiesTypesIdPatch');
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
     * Replace Opportunity Type
     * @param id
     * @param opportunityType
     */
    OpportunityTypesApi.prototype.salesOpportunitiesTypesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOpportunitiesTypesIdPut');
        }
        // verify required parameter 'opportunityType' is set
        if (params.opportunityType == null) {
            throw new Error('Missing required parameter opportunityType when calling salesOpportunitiesTypesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.opportunityType),
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
     * Create Opportunity Type
     * @param opportunityType
     */
    OpportunityTypesApi.prototype.salesOpportunitiesTypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/opportunities/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'opportunityType' is set
        if (params.opportunityType == null) {
            throw new Error('Missing required parameter opportunityType when calling salesOpportunitiesTypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.opportunityType),
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
    return OpportunityTypesApi;
}());
exports.OpportunityTypesApi = OpportunityTypesApi;
//}
//export namespace  {
'use strict';
var OrderStatusesApi = (function () {
    function OrderStatusesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Order Statuses Count
     * @param conditions
     */
    OrderStatusesApi.prototype.salesOrdersStatusesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/statuses/count';
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
     * Get Order Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    OrderStatusesApi.prototype.salesOrdersStatusesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/statuses';
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
     * Delete Order Status By Id
     * @param id
     */
    OrderStatusesApi.prototype.salesOrdersStatusesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOrdersStatusesIdDelete');
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
     * Get Order Status By Id
     * @param id
     */
    OrderStatusesApi.prototype.salesOrdersStatusesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOrdersStatusesIdGet');
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
     * Update Order Status
     * @param id
     * @param operations
     */
    OrderStatusesApi.prototype.salesOrdersStatusesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOrdersStatusesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesOrdersStatusesIdPatch');
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
     * Replace Order Status
     * @param id
     * @param status
     */
    OrderStatusesApi.prototype.salesOrdersStatusesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOrdersStatusesIdPut');
        }
        // verify required parameter 'status' is set
        if (params.status == null) {
            throw new Error('Missing required parameter status when calling salesOrdersStatusesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.status),
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
     * Create Order Status
     * @param status
     */
    OrderStatusesApi.prototype.salesOrdersStatusesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/statuses';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'status' is set
        if (params.status == null) {
            throw new Error('Missing required parameter status when calling salesOrdersStatusesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.status),
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
    return OrderStatusesApi;
}());
exports.OrderStatusesApi = OrderStatusesApi;
//}
//export namespace  {
'use strict';
var OrdersApi = (function () {
    function OrdersApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Sales Orders Count
     * @param conditions
     */
    OrdersApi.prototype.salesOrdersCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/count';
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
     * Get Sales Orders
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    OrdersApi.prototype.salesOrdersGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders';
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
     * Delete Sales Order By Id
     * @param id
     */
    OrdersApi.prototype.salesOrdersIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOrdersIdDelete');
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
     * Get Sales Order By Id
     * @param id
     */
    OrdersApi.prototype.salesOrdersIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOrdersIdGet');
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
     * Update Sales Order
     * @param id
     * @param operations
     */
    OrdersApi.prototype.salesOrdersIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOrdersIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling salesOrdersIdPatch');
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
     * Replace Sales Order
     * @param id
     * @param order
     */
    OrdersApi.prototype.salesOrdersIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling salesOrdersIdPut');
        }
        // verify required parameter 'order' is set
        if (params.order == null) {
            throw new Error('Missing required parameter order when calling salesOrdersIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.order),
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
     * Create Sales Order
     * @param order
     */
    OrdersApi.prototype.salesOrdersPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/sales/orders';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'order' is set
        if (params.order == null) {
            throw new Error('Missing required parameter order when calling salesOrdersPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.order),
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
    return OrdersApi;
}());
exports.OrdersApi = OrdersApi;
//}
