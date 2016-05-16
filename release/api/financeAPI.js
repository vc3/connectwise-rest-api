"use strict";
///<reference path="../../typings/main.d.ts"/>
var querystring = require('querystring');
var fetch = require('isomorphic-fetch');
var assign_1 = require('./assign');
(function (BillCustomerEnum) {
    BillCustomerEnum[BillCustomerEnum["Billable"] = 'Billable'] = "Billable";
    BillCustomerEnum[BillCustomerEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillCustomerEnum[BillCustomerEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
})(exports.BillCustomerEnum || (exports.BillCustomerEnum = {}));
var BillCustomerEnum = exports.BillCustomerEnum;
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
(function (PrefixSuffixOptionEnum) {
    PrefixSuffixOptionEnum[PrefixSuffixOptionEnum["Prefix"] = 'Prefix'] = "Prefix";
    PrefixSuffixOptionEnum[PrefixSuffixOptionEnum["Suffix"] = 'Suffix'] = "Suffix";
})(exports.PrefixSuffixOptionEnum || (exports.PrefixSuffixOptionEnum = {}));
var PrefixSuffixOptionEnum = exports.PrefixSuffixOptionEnum;
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
(function (RateTypeEnum) {
    RateTypeEnum[RateTypeEnum["AdjAmount"] = 'AdjAmount'] = "AdjAmount";
    RateTypeEnum[RateTypeEnum["Custom"] = 'Custom'] = "Custom";
    RateTypeEnum[RateTypeEnum["Multiplier"] = 'Multiplier'] = "Multiplier";
})(exports.RateTypeEnum || (exports.RateTypeEnum = {}));
var RateTypeEnum = exports.RateTypeEnum;
(function (RateTypeEnum) {
    RateTypeEnum[RateTypeEnum["AdjAmount"] = 'AdjAmount'] = "AdjAmount";
    RateTypeEnum[RateTypeEnum["Custom"] = 'Custom'] = "Custom";
    RateTypeEnum[RateTypeEnum["Multiplier"] = 'Multiplier'] = "Multiplier";
})(exports.RateTypeEnum || (exports.RateTypeEnum = {}));
var RateTypeEnum = exports.RateTypeEnum;
(function (BillTimeEnum) {
    BillTimeEnum[BillTimeEnum["Billable"] = 'Billable'] = "Billable";
    BillTimeEnum[BillTimeEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillTimeEnum[BillTimeEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillTimeEnum[BillTimeEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillTimeEnum || (exports.BillTimeEnum = {}));
var BillTimeEnum = exports.BillTimeEnum;
(function (OverageRateTypeEnum) {
    OverageRateTypeEnum[OverageRateTypeEnum["AdjAmount"] = 'AdjAmount'] = "AdjAmount";
    OverageRateTypeEnum[OverageRateTypeEnum["Custom"] = 'Custom'] = "Custom";
    OverageRateTypeEnum[OverageRateTypeEnum["Multiplier"] = 'Multiplier'] = "Multiplier";
})(exports.OverageRateTypeEnum || (exports.OverageRateTypeEnum = {}));
var OverageRateTypeEnum = exports.OverageRateTypeEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["Agreement"] = 'Agreement'] = "Agreement";
    TypeEnum[TypeEnum["CreditMemo"] = 'CreditMemo'] = "CreditMemo";
    TypeEnum[TypeEnum["DownPayment"] = 'DownPayment'] = "DownPayment";
    TypeEnum[TypeEnum["Miscellaneous"] = 'Miscellaneous'] = "Miscellaneous";
    TypeEnum[TypeEnum["Progress"] = 'Progress'] = "Progress";
    TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
})(exports.TypeEnum || (exports.TypeEnum = {}));
var TypeEnum = exports.TypeEnum;
(function (ApplyToTypeEnum) {
    ApplyToTypeEnum[ApplyToTypeEnum["All"] = 'All'] = "All";
    ApplyToTypeEnum[ApplyToTypeEnum["Agreement"] = 'Agreement'] = "Agreement";
    ApplyToTypeEnum[ApplyToTypeEnum["Project"] = 'Project'] = "Project";
    ApplyToTypeEnum[ApplyToTypeEnum["ProjectPhase"] = 'ProjectPhase'] = "ProjectPhase";
    ApplyToTypeEnum[ApplyToTypeEnum["SalesOrder"] = 'SalesOrder'] = "SalesOrder";
    ApplyToTypeEnum[ApplyToTypeEnum["Ticket"] = 'Ticket'] = "Ticket";
})(exports.ApplyToTypeEnum || (exports.ApplyToTypeEnum = {}));
var ApplyToTypeEnum = exports.ApplyToTypeEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["AP"] = 'AP'] = "AP";
    TypeEnum[TypeEnum["AR"] = 'AR'] = "AR";
    TypeEnum[TypeEnum["EE"] = 'EE'] = "EE";
    TypeEnum[TypeEnum["EI"] = 'EI'] = "EI";
    TypeEnum[TypeEnum["EO"] = 'EO'] = "EO";
    TypeEnum[TypeEnum["IA"] = 'IA'] = "IA";
    TypeEnum[TypeEnum["IT"] = 'IT'] = "IT";
    TypeEnum[TypeEnum["P"] = 'P'] = "P";
    TypeEnum[TypeEnum["PF"] = 'PF'] = "PF";
    TypeEnum[TypeEnum["R"] = 'R'] = "R";
    TypeEnum[TypeEnum["RA"] = 'RA'] = "RA";
    TypeEnum[TypeEnum["RD"] = 'RD'] = "RD";
    TypeEnum[TypeEnum["RE"] = 'RE'] = "RE";
    TypeEnum[TypeEnum["RP"] = 'RP'] = "RP";
    TypeEnum[TypeEnum["ST"] = 'ST'] = "ST";
    TypeEnum[TypeEnum["SD"] = 'SD'] = "SD";
    TypeEnum[TypeEnum["ET"] = 'ET'] = "ET";
    TypeEnum[TypeEnum["RM"] = 'RM'] = "RM";
    TypeEnum[TypeEnum["FT"] = 'FT'] = "FT";
    TypeEnum[TypeEnum["PT"] = 'PT'] = "PT";
})(exports.TypeEnum || (exports.TypeEnum = {}));
var TypeEnum = exports.TypeEnum;
(function (ExpenseClassEnum) {
    ExpenseClassEnum[ExpenseClassEnum["NonReimbursable"] = 'NonReimbursable'] = "NonReimbursable";
    ExpenseClassEnum[ExpenseClassEnum["Reimbursable"] = 'Reimbursable'] = "Reimbursable";
    ExpenseClassEnum[ExpenseClassEnum["Personal"] = 'Personal'] = "Personal";
})(exports.ExpenseClassEnum || (exports.ExpenseClassEnum = {}));
var ExpenseClassEnum = exports.ExpenseClassEnum;
(function (ClassificationEnum) {
    ClassificationEnum[ClassificationEnum["NonReimbursable"] = 'NonReimbursable'] = "NonReimbursable";
    ClassificationEnum[ClassificationEnum["Reimbursable"] = 'Reimbursable'] = "Reimbursable";
    ClassificationEnum[ClassificationEnum["Personal"] = 'Personal'] = "Personal";
})(exports.ClassificationEnum || (exports.ClassificationEnum = {}));
var ClassificationEnum = exports.ClassificationEnum;
(function (GlTypeEnum) {
    GlTypeEnum[GlTypeEnum["AP"] = 'AP'] = "AP";
    GlTypeEnum[GlTypeEnum["AR"] = 'AR'] = "AR";
    GlTypeEnum[GlTypeEnum["EE"] = 'EE'] = "EE";
    GlTypeEnum[GlTypeEnum["EI"] = 'EI'] = "EI";
    GlTypeEnum[GlTypeEnum["EO"] = 'EO'] = "EO";
    GlTypeEnum[GlTypeEnum["IA"] = 'IA'] = "IA";
    GlTypeEnum[GlTypeEnum["IT"] = 'IT'] = "IT";
    GlTypeEnum[GlTypeEnum["P"] = 'P'] = "P";
    GlTypeEnum[GlTypeEnum["PF"] = 'PF'] = "PF";
    GlTypeEnum[GlTypeEnum["R"] = 'R'] = "R";
    GlTypeEnum[GlTypeEnum["RA"] = 'RA'] = "RA";
    GlTypeEnum[GlTypeEnum["RD"] = 'RD'] = "RD";
    GlTypeEnum[GlTypeEnum["RE"] = 'RE'] = "RE";
    GlTypeEnum[GlTypeEnum["RP"] = 'RP'] = "RP";
    GlTypeEnum[GlTypeEnum["ST"] = 'ST'] = "ST";
    GlTypeEnum[GlTypeEnum["SD"] = 'SD'] = "SD";
    GlTypeEnum[GlTypeEnum["ET"] = 'ET'] = "ET";
    GlTypeEnum[GlTypeEnum["RM"] = 'RM'] = "RM";
    GlTypeEnum[GlTypeEnum["FT"] = 'FT'] = "FT";
    GlTypeEnum[GlTypeEnum["PT"] = 'PT'] = "PT";
})(exports.GlTypeEnum || (exports.GlTypeEnum = {}));
var GlTypeEnum = exports.GlTypeEnum;
(function (InvoiceTypeEnum) {
    InvoiceTypeEnum[InvoiceTypeEnum["Agreement"] = 'Agreement'] = "Agreement";
    InvoiceTypeEnum[InvoiceTypeEnum["CreditMemo"] = 'CreditMemo'] = "CreditMemo";
    InvoiceTypeEnum[InvoiceTypeEnum["DownPayment"] = 'DownPayment'] = "DownPayment";
    InvoiceTypeEnum[InvoiceTypeEnum["Miscellaneous"] = 'Miscellaneous'] = "Miscellaneous";
    InvoiceTypeEnum[InvoiceTypeEnum["Progress"] = 'Progress'] = "Progress";
    InvoiceTypeEnum[InvoiceTypeEnum["Standard"] = 'Standard'] = "Standard";
})(exports.InvoiceTypeEnum || (exports.InvoiceTypeEnum = {}));
var InvoiceTypeEnum = exports.InvoiceTypeEnum;
(function (ProcurementTypeEnum) {
    ProcurementTypeEnum[ProcurementTypeEnum["Purchase"] = 'Purchase'] = "Purchase";
    ProcurementTypeEnum[ProcurementTypeEnum["Adjustment"] = 'Adjustment'] = "Adjustment";
    ProcurementTypeEnum[ProcurementTypeEnum["Transfer"] = 'Transfer'] = "Transfer";
})(exports.ProcurementTypeEnum || (exports.ProcurementTypeEnum = {}));
var ProcurementTypeEnum = exports.ProcurementTypeEnum;
//export namespace  {
'use strict';
var AccountingBatchTransactionsApi = (function () {
    function AccountingBatchTransactionsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Transactions Count
     * @param id
     * @param conditions
     */
    AccountingBatchTransactionsApi.prototype.financeAccountingBatchesIdTransactionsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/batches/{id}/transactions/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAccountingBatchesIdTransactionsCountGet');
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
     * Get Transactions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AccountingBatchTransactionsApi.prototype.financeAccountingBatchesIdTransactionsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/batches/{id}/transactions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAccountingBatchesIdTransactionsGet');
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
     * Get Transaction By Id
     * @param id
     * @param transactionId
     */
    AccountingBatchTransactionsApi.prototype.financeAccountingBatchesIdTransactionsTransactionIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/batches/{id}/transactions/{transactionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'transactionId' + '}', String(params.transactionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAccountingBatchesIdTransactionsTransactionIdGet');
        }
        // verify required parameter 'transactionId' is set
        if (params.transactionId == null) {
            throw new Error('Missing required parameter transactionId when calling financeAccountingBatchesIdTransactionsTransactionIdGet');
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
    return AccountingBatchTransactionsApi;
}());
exports.AccountingBatchTransactionsApi = AccountingBatchTransactionsApi;
//}
//export namespace  {
'use strict';
var AccountingBatchesApi = (function () {
    function AccountingBatchesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Batches Count
     * @param conditions
     */
    AccountingBatchesApi.prototype.financeAccountingBatchesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/batches/count';
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
     * Get Batches
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AccountingBatchesApi.prototype.financeAccountingBatchesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/batches';
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
     * Delete Batch By Id
     * @param id
     */
    AccountingBatchesApi.prototype.financeAccountingBatchesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/batches/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAccountingBatchesIdDelete');
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
     * Get Batch By Id
     * @param id
     */
    AccountingBatchesApi.prototype.financeAccountingBatchesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/batches/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAccountingBatchesIdGet');
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
     * Create Batch
     * @param batch
     */
    AccountingBatchesApi.prototype.financeAccountingBatchesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/batches';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'batch' is set
        if (params.batch == null) {
            throw new Error('Missing required parameter batch when calling financeAccountingBatchesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.batch),
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
    return AccountingBatchesApi;
}());
exports.AccountingBatchesApi = AccountingBatchesApi;
//}
//export namespace  {
'use strict';
var AccountingUnpostedExpensesApi = (function () {
    function AccountingUnpostedExpensesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Unposted Expenses Count
     * @param conditions
     */
    AccountingUnpostedExpensesApi.prototype.financeAccountingUnpostedexpensesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/unpostedexpenses/count';
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
     * Get Unposted Expenses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AccountingUnpostedExpensesApi.prototype.financeAccountingUnpostedexpensesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/unpostedexpenses';
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
     * Get Unposted Expense By Id
     * @param id
     */
    AccountingUnpostedExpensesApi.prototype.financeAccountingUnpostedexpensesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/unpostedexpenses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAccountingUnpostedexpensesIdGet');
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
    return AccountingUnpostedExpensesApi;
}());
exports.AccountingUnpostedExpensesApi = AccountingUnpostedExpensesApi;
//}
//export namespace  {
'use strict';
var AccountingUnpostedProcurementsApi = (function () {
    function AccountingUnpostedProcurementsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Unposted Procurements Count
     * @param conditions
     */
    AccountingUnpostedProcurementsApi.prototype.financeAccountingUnpostedprocurementCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/unpostedprocurement/count';
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
     * Get Unposted Procurements
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AccountingUnpostedProcurementsApi.prototype.financeAccountingUnpostedprocurementGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/unpostedprocurement';
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
     * Get Unposted Procurement By Id
     * @param id
     */
    AccountingUnpostedProcurementsApi.prototype.financeAccountingUnpostedprocurementIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/unpostedprocurement/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAccountingUnpostedprocurementIdGet');
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
    return AccountingUnpostedProcurementsApi;
}());
exports.AccountingUnpostedProcurementsApi = AccountingUnpostedProcurementsApi;
//}
//export namespace  {
'use strict';
var AccountingUnpostedinvoicesApi = (function () {
    function AccountingUnpostedinvoicesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Unposted Invoices Count
     * @param conditions
     */
    AccountingUnpostedinvoicesApi.prototype.financeAccountingUnpostedinvoicesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/unpostedinvoices/count';
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
     * Get Unposted Invoices
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AccountingUnpostedinvoicesApi.prototype.financeAccountingUnpostedinvoicesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/unpostedinvoices';
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
     * Get Unposted Invoice By Id
     * @param id
     */
    AccountingUnpostedinvoicesApi.prototype.financeAccountingUnpostedinvoicesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/accounting/unpostedinvoices/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAccountingUnpostedinvoicesIdGet');
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
    return AccountingUnpostedinvoicesApi;
}());
exports.AccountingUnpostedinvoicesApi = AccountingUnpostedinvoicesApi;
//}
//export namespace  {
'use strict';
var AgreementAdditionsApi = (function () {
    function AgreementAdditionsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Delete Addition By Id
     * @param id
     * @param additionId
     */
    AgreementAdditionsApi.prototype.financeAgreementsIdAdditionsAdditionIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/additions/{additionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'additionId' + '}', String(params.additionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsAdditionIdDelete');
        }
        // verify required parameter 'additionId' is set
        if (params.additionId == null) {
            throw new Error('Missing required parameter additionId when calling financeAgreementsIdAdditionsAdditionIdDelete');
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
     * Get Addition By Id
     * @param id
     * @param additionId
     */
    AgreementAdditionsApi.prototype.financeAgreementsIdAdditionsAdditionIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/additions/{additionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'additionId' + '}', String(params.additionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsAdditionIdGet');
        }
        // verify required parameter 'additionId' is set
        if (params.additionId == null) {
            throw new Error('Missing required parameter additionId when calling financeAgreementsIdAdditionsAdditionIdGet');
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
     * Update Addition
     * @param id
     * @param additionId
     * @param operations
     */
    AgreementAdditionsApi.prototype.financeAgreementsIdAdditionsAdditionIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/additions/{additionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'additionId' + '}', String(params.additionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsAdditionIdPatch');
        }
        // verify required parameter 'additionId' is set
        if (params.additionId == null) {
            throw new Error('Missing required parameter additionId when calling financeAgreementsIdAdditionsAdditionIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeAgreementsIdAdditionsAdditionIdPatch');
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
     * Replace Addition
     * @param id
     * @param additionId
     * @param addition
     */
    AgreementAdditionsApi.prototype.financeAgreementsIdAdditionsAdditionIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/additions/{additionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'additionId' + '}', String(params.additionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsAdditionIdPut');
        }
        // verify required parameter 'additionId' is set
        if (params.additionId == null) {
            throw new Error('Missing required parameter additionId when calling financeAgreementsIdAdditionsAdditionIdPut');
        }
        // verify required parameter 'addition' is set
        if (params.addition == null) {
            throw new Error('Missing required parameter addition when calling financeAgreementsIdAdditionsAdditionIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.addition),
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
     * Get Additions Count
     * @param id
     * @param conditions
     */
    AgreementAdditionsApi.prototype.financeAgreementsIdAdditionsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/additions/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsCountGet');
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
     * Get Additions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AgreementAdditionsApi.prototype.financeAgreementsIdAdditionsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/additions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsGet');
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
     * Create Addition
     * @param id
     * @param addition
     */
    AgreementAdditionsApi.prototype.financeAgreementsIdAdditionsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/additions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdditionsPost');
        }
        // verify required parameter 'addition' is set
        if (params.addition == null) {
            throw new Error('Missing required parameter addition when calling financeAgreementsIdAdditionsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.addition),
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
    return AgreementAdditionsApi;
}());
exports.AgreementAdditionsApi = AgreementAdditionsApi;
//}
//export namespace  {
'use strict';
var AgreementAdjustmentsApi = (function () {
    function AgreementAdjustmentsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Delete Adjustment By Id
     * @param id
     * @param adjustmentId
     */
    AgreementAdjustmentsApi.prototype.financeAgreementsIdAdjustmentsAdjustmentIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/adjustments/{adjustmentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'adjustmentId' + '}', String(params.adjustmentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsAdjustmentIdDelete');
        }
        // verify required parameter 'adjustmentId' is set
        if (params.adjustmentId == null) {
            throw new Error('Missing required parameter adjustmentId when calling financeAgreementsIdAdjustmentsAdjustmentIdDelete');
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
     * Get Adjustment By Id
     * @param id
     * @param adjustmentId
     */
    AgreementAdjustmentsApi.prototype.financeAgreementsIdAdjustmentsAdjustmentIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/adjustments/{adjustmentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'adjustmentId' + '}', String(params.adjustmentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsAdjustmentIdGet');
        }
        // verify required parameter 'adjustmentId' is set
        if (params.adjustmentId == null) {
            throw new Error('Missing required parameter adjustmentId when calling financeAgreementsIdAdjustmentsAdjustmentIdGet');
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
     * Update Adjustment
     * @param id
     * @param adjustmentId
     * @param operations
     */
    AgreementAdjustmentsApi.prototype.financeAgreementsIdAdjustmentsAdjustmentIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/adjustments/{adjustmentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'adjustmentId' + '}', String(params.adjustmentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsAdjustmentIdPatch');
        }
        // verify required parameter 'adjustmentId' is set
        if (params.adjustmentId == null) {
            throw new Error('Missing required parameter adjustmentId when calling financeAgreementsIdAdjustmentsAdjustmentIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeAgreementsIdAdjustmentsAdjustmentIdPatch');
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
     * Replace Adjustment
     * @param id
     * @param adjustmentId
     * @param adjustment
     */
    AgreementAdjustmentsApi.prototype.financeAgreementsIdAdjustmentsAdjustmentIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/adjustments/{adjustmentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'adjustmentId' + '}', String(params.adjustmentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsAdjustmentIdPut');
        }
        // verify required parameter 'adjustmentId' is set
        if (params.adjustmentId == null) {
            throw new Error('Missing required parameter adjustmentId when calling financeAgreementsIdAdjustmentsAdjustmentIdPut');
        }
        // verify required parameter 'adjustment' is set
        if (params.adjustment == null) {
            throw new Error('Missing required parameter adjustment when calling financeAgreementsIdAdjustmentsAdjustmentIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.adjustment),
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
     * Get Adjustments Count
     * @param id
     * @param conditions
     */
    AgreementAdjustmentsApi.prototype.financeAgreementsIdAdjustmentsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/adjustments/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsCountGet');
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
     * Get Adjustments
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AgreementAdjustmentsApi.prototype.financeAgreementsIdAdjustmentsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/adjustments'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsGet');
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
     * Create Adjustment
     * @param id
     * @param adjustment
     */
    AgreementAdjustmentsApi.prototype.financeAgreementsIdAdjustmentsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/adjustments'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdAdjustmentsPost');
        }
        // verify required parameter 'adjustment' is set
        if (params.adjustment == null) {
            throw new Error('Missing required parameter adjustment when calling financeAgreementsIdAdjustmentsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.adjustment),
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
    return AgreementAdjustmentsApi;
}());
exports.AgreementAdjustmentsApi = AgreementAdjustmentsApi;
//}
//export namespace  {
'use strict';
var AgreementBoardDefaultsApi = (function () {
    function AgreementBoardDefaultsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Delete Board Default By Id
     * @param id
     * @param boardDefaultId
     */
    AgreementBoardDefaultsApi.prototype.financeAgreementsIdBoardDefaultsBoardDefaultIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults/{boardDefaultId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'boardDefaultId' + '}', String(params.boardDefaultId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsBoardDefaultIdDelete');
        }
        // verify required parameter 'boardDefaultId' is set
        if (params.boardDefaultId == null) {
            throw new Error('Missing required parameter boardDefaultId when calling financeAgreementsIdBoardDefaultsBoardDefaultIdDelete');
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
     * Get Board Default By Id
     * @param id
     * @param boardDefaultId
     */
    AgreementBoardDefaultsApi.prototype.financeAgreementsIdBoardDefaultsBoardDefaultIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults/{boardDefaultId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'boardDefaultId' + '}', String(params.boardDefaultId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsBoardDefaultIdGet');
        }
        // verify required parameter 'boardDefaultId' is set
        if (params.boardDefaultId == null) {
            throw new Error('Missing required parameter boardDefaultId when calling financeAgreementsIdBoardDefaultsBoardDefaultIdGet');
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
     * Update Board Default
     * @param id
     * @param boardDefaultId
     * @param operations
     */
    AgreementBoardDefaultsApi.prototype.financeAgreementsIdBoardDefaultsBoardDefaultIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults/{boardDefaultId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'boardDefaultId' + '}', String(params.boardDefaultId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPatch');
        }
        // verify required parameter 'boardDefaultId' is set
        if (params.boardDefaultId == null) {
            throw new Error('Missing required parameter boardDefaultId when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPatch');
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
     * Replace Board Default
     * @param id
     * @param boardDefaultId
     * @param boardDefault
     */
    AgreementBoardDefaultsApi.prototype.financeAgreementsIdBoardDefaultsBoardDefaultIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults/{boardDefaultId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'boardDefaultId' + '}', String(params.boardDefaultId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPut');
        }
        // verify required parameter 'boardDefaultId' is set
        if (params.boardDefaultId == null) {
            throw new Error('Missing required parameter boardDefaultId when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPut');
        }
        // verify required parameter 'boardDefault' is set
        if (params.boardDefault == null) {
            throw new Error('Missing required parameter boardDefault when calling financeAgreementsIdBoardDefaultsBoardDefaultIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.boardDefault),
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
     * Get Board Defaults Count
     * @param id
     * @param conditions
     */
    AgreementBoardDefaultsApi.prototype.financeAgreementsIdBoardDefaultsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsCountGet');
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
     * Get Board Defaults
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AgreementBoardDefaultsApi.prototype.financeAgreementsIdBoardDefaultsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsGet');
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
     * Create Board Default
     * @param id
     * @param boardDefault
     */
    AgreementBoardDefaultsApi.prototype.financeAgreementsIdBoardDefaultsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/boardDefaults'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdBoardDefaultsPost');
        }
        // verify required parameter 'boardDefault' is set
        if (params.boardDefault == null) {
            throw new Error('Missing required parameter boardDefault when calling financeAgreementsIdBoardDefaultsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.boardDefault),
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
    return AgreementBoardDefaultsApi;
}());
exports.AgreementBoardDefaultsApi = AgreementBoardDefaultsApi;
//}
//export namespace  {
'use strict';
var AgreementSitesApi = (function () {
    function AgreementSitesApi(basePath) {
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
    AgreementSitesApi.prototype.financeAgreementsIdSitesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/sites/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdSitesCountGet');
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
    AgreementSitesApi.prototype.financeAgreementsIdSitesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/sites'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdSitesGet');
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
    AgreementSitesApi.prototype.financeAgreementsIdSitesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/sites'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdSitesPost');
        }
        // verify required parameter 'site' is set
        if (params.site == null) {
            throw new Error('Missing required parameter site when calling financeAgreementsIdSitesPost');
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
    AgreementSitesApi.prototype.financeAgreementsIdSitesSiteIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/sites/{siteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'siteId' + '}', String(params.siteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdSitesSiteIdDelete');
        }
        // verify required parameter 'siteId' is set
        if (params.siteId == null) {
            throw new Error('Missing required parameter siteId when calling financeAgreementsIdSitesSiteIdDelete');
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
    AgreementSitesApi.prototype.financeAgreementsIdSitesSiteIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/sites/{siteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'siteId' + '}', String(params.siteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdSitesSiteIdGet');
        }
        // verify required parameter 'siteId' is set
        if (params.siteId == null) {
            throw new Error('Missing required parameter siteId when calling financeAgreementsIdSitesSiteIdGet');
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
    AgreementSitesApi.prototype.financeAgreementsIdSitesSiteIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/sites/{siteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'siteId' + '}', String(params.siteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdSitesSiteIdPatch');
        }
        // verify required parameter 'siteId' is set
        if (params.siteId == null) {
            throw new Error('Missing required parameter siteId when calling financeAgreementsIdSitesSiteIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeAgreementsIdSitesSiteIdPatch');
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
    AgreementSitesApi.prototype.financeAgreementsIdSitesSiteIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/sites/{siteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'siteId' + '}', String(params.siteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdSitesSiteIdPut');
        }
        // verify required parameter 'siteId' is set
        if (params.siteId == null) {
            throw new Error('Missing required parameter siteId when calling financeAgreementsIdSitesSiteIdPut');
        }
        // verify required parameter 'site' is set
        if (params.site == null) {
            throw new Error('Missing required parameter site when calling financeAgreementsIdSitesSiteIdPut');
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
    return AgreementSitesApi;
}());
exports.AgreementSitesApi = AgreementSitesApi;
//}
//export namespace  {
'use strict';
var AgreementTypesApi = (function () {
    function AgreementTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Agreement Types Count
     * @param conditions
     */
    AgreementTypesApi.prototype.financeAgreementsTypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/types/count';
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
     * Get Agreement Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AgreementTypesApi.prototype.financeAgreementsTypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/types';
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
     * Delete Agreement Type By Id
     * @param id
     */
    AgreementTypesApi.prototype.financeAgreementsTypesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsTypesIdDelete');
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
     * Get Agreement Type By Id
     * @param id
     */
    AgreementTypesApi.prototype.financeAgreementsTypesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsTypesIdGet');
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
     * Update Agreement Type
     * @param id
     * @param operations
     */
    AgreementTypesApi.prototype.financeAgreementsTypesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsTypesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeAgreementsTypesIdPatch');
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
     * Replace Agreement Type
     * @param id
     * @param agreementType
     */
    AgreementTypesApi.prototype.financeAgreementsTypesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsTypesIdPut');
        }
        // verify required parameter 'agreementType' is set
        if (params.agreementType == null) {
            throw new Error('Missing required parameter agreementType when calling financeAgreementsTypesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.agreementType),
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
     * Create Agreement Type
     * @param agreementType
     */
    AgreementTypesApi.prototype.financeAgreementsTypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'agreementType' is set
        if (params.agreementType == null) {
            throw new Error('Missing required parameter agreementType when calling financeAgreementsTypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.agreementType),
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
    return AgreementTypesApi;
}());
exports.AgreementTypesApi = AgreementTypesApi;
//}
//export namespace  {
'use strict';
var AgreementWorkRoleExclusionsApi = (function () {
    function AgreementWorkRoleExclusionsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Work Role Exclusions Count
     * @param id
     * @param conditions
     */
    AgreementWorkRoleExclusionsApi.prototype.financeAgreementsIdWorkRoleExclusionsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workRoleExclusions/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkRoleExclusionsCountGet');
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
     * Get Work Role Exclusions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AgreementWorkRoleExclusionsApi.prototype.financeAgreementsIdWorkRoleExclusionsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workRoleExclusions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkRoleExclusionsGet');
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
     * Create Work Role Exclusion
     * @param id
     * @param workRoleExclusion
     */
    AgreementWorkRoleExclusionsApi.prototype.financeAgreementsIdWorkRoleExclusionsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workRoleExclusions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkRoleExclusionsPost');
        }
        // verify required parameter 'workRoleExclusion' is set
        if (params.workRoleExclusion == null) {
            throw new Error('Missing required parameter workRoleExclusion when calling financeAgreementsIdWorkRoleExclusionsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.workRoleExclusion),
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
     * Delete Work Role Exclusion By Id
     * @param id
     * @param workRoleExclusionId
     */
    AgreementWorkRoleExclusionsApi.prototype.financeAgreementsIdWorkRoleExclusionsWorkRoleExclusionIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workRoleExclusions/{workRoleExclusionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'workRoleExclusionId' + '}', String(params.workRoleExclusionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkRoleExclusionsWorkRoleExclusionIdDelete');
        }
        // verify required parameter 'workRoleExclusionId' is set
        if (params.workRoleExclusionId == null) {
            throw new Error('Missing required parameter workRoleExclusionId when calling financeAgreementsIdWorkRoleExclusionsWorkRoleExclusionIdDelete');
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
    return AgreementWorkRoleExclusionsApi;
}());
exports.AgreementWorkRoleExclusionsApi = AgreementWorkRoleExclusionsApi;
//}
//export namespace  {
'use strict';
var AgreementWorkRolesApi = (function () {
    function AgreementWorkRolesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Work Roles Count
     * @param id
     * @param conditions
     */
    AgreementWorkRolesApi.prototype.financeAgreementsIdWorkrolesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workroles/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesCountGet');
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
     * Get Work Roles
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AgreementWorkRolesApi.prototype.financeAgreementsIdWorkrolesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workroles'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesGet');
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
     * Create Work Role
     * @param id
     * @param workRole
     */
    AgreementWorkRolesApi.prototype.financeAgreementsIdWorkrolesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workroles'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesPost');
        }
        // verify required parameter 'workRole' is set
        if (params.workRole == null) {
            throw new Error('Missing required parameter workRole when calling financeAgreementsIdWorkrolesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.workRole),
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
     * Delete Work Role By Id
     * @param id
     * @param workRoleId
     */
    AgreementWorkRolesApi.prototype.financeAgreementsIdWorkrolesWorkRoleIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workroles/{workRoleId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'workRoleId' + '}', String(params.workRoleId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesWorkRoleIdDelete');
        }
        // verify required parameter 'workRoleId' is set
        if (params.workRoleId == null) {
            throw new Error('Missing required parameter workRoleId when calling financeAgreementsIdWorkrolesWorkRoleIdDelete');
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
     * Get Work Role By Id
     * @param id
     * @param workRoleId
     */
    AgreementWorkRolesApi.prototype.financeAgreementsIdWorkrolesWorkRoleIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workroles/{workRoleId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'workRoleId' + '}', String(params.workRoleId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesWorkRoleIdGet');
        }
        // verify required parameter 'workRoleId' is set
        if (params.workRoleId == null) {
            throw new Error('Missing required parameter workRoleId when calling financeAgreementsIdWorkrolesWorkRoleIdGet');
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
     * Update Work Role
     * @param id
     * @param workRoleId
     * @param operations
     */
    AgreementWorkRolesApi.prototype.financeAgreementsIdWorkrolesWorkRoleIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workroles/{workRoleId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'workRoleId' + '}', String(params.workRoleId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesWorkRoleIdPatch');
        }
        // verify required parameter 'workRoleId' is set
        if (params.workRoleId == null) {
            throw new Error('Missing required parameter workRoleId when calling financeAgreementsIdWorkrolesWorkRoleIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeAgreementsIdWorkrolesWorkRoleIdPatch');
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
     * Replace Work Role
     * @param id
     * @param workRoleId
     * @param workRole
     */
    AgreementWorkRolesApi.prototype.financeAgreementsIdWorkrolesWorkRoleIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workroles/{workRoleId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'workRoleId' + '}', String(params.workRoleId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkrolesWorkRoleIdPut');
        }
        // verify required parameter 'workRoleId' is set
        if (params.workRoleId == null) {
            throw new Error('Missing required parameter workRoleId when calling financeAgreementsIdWorkrolesWorkRoleIdPut');
        }
        // verify required parameter 'workRole' is set
        if (params.workRole == null) {
            throw new Error('Missing required parameter workRole when calling financeAgreementsIdWorkrolesWorkRoleIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.workRole),
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
    return AgreementWorkRolesApi;
}());
exports.AgreementWorkRolesApi = AgreementWorkRolesApi;
//}
//export namespace  {
'use strict';
var AgreementWorkTypeExclusionsApi = (function () {
    function AgreementWorkTypeExclusionsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Work Type Exclusions Count
     * @param id
     * @param conditions
     */
    AgreementWorkTypeExclusionsApi.prototype.financeAgreementsIdWorkTypeExclusionsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workTypeExclusions/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkTypeExclusionsCountGet');
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
     * Get Work Type Exclusions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AgreementWorkTypeExclusionsApi.prototype.financeAgreementsIdWorkTypeExclusionsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workTypeExclusions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkTypeExclusionsGet');
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
     * Create Work Type Exclusion
     * @param id
     * @param workTypeExclusion
     */
    AgreementWorkTypeExclusionsApi.prototype.financeAgreementsIdWorkTypeExclusionsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workTypeExclusions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkTypeExclusionsPost');
        }
        // verify required parameter 'workTypeExclusion' is set
        if (params.workTypeExclusion == null) {
            throw new Error('Missing required parameter workTypeExclusion when calling financeAgreementsIdWorkTypeExclusionsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.workTypeExclusion),
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
     * Delete Work Type Exclusion By Id
     * @param id
     * @param workTypeExclusionId
     */
    AgreementWorkTypeExclusionsApi.prototype.financeAgreementsIdWorkTypeExclusionsWorkTypeExclusionIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/workTypeExclusions/{workTypeExclusionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'workTypeExclusionId' + '}', String(params.workTypeExclusionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorkTypeExclusionsWorkTypeExclusionIdDelete');
        }
        // verify required parameter 'workTypeExclusionId' is set
        if (params.workTypeExclusionId == null) {
            throw new Error('Missing required parameter workTypeExclusionId when calling financeAgreementsIdWorkTypeExclusionsWorkTypeExclusionIdDelete');
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
    return AgreementWorkTypeExclusionsApi;
}());
exports.AgreementWorkTypeExclusionsApi = AgreementWorkTypeExclusionsApi;
//}
//export namespace  {
'use strict';
var AgreementWorkTypesApi = (function () {
    function AgreementWorkTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Work Types Count
     * @param id
     * @param conditions
     */
    AgreementWorkTypesApi.prototype.financeAgreementsIdWorktypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/worktypes/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesCountGet');
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
     * Get Work Types
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AgreementWorkTypesApi.prototype.financeAgreementsIdWorktypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/worktypes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesGet');
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
     * Create Work Type
     * @param id
     * @param workType
     */
    AgreementWorkTypesApi.prototype.financeAgreementsIdWorktypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/worktypes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesPost');
        }
        // verify required parameter 'workType' is set
        if (params.workType == null) {
            throw new Error('Missing required parameter workType when calling financeAgreementsIdWorktypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.workType),
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
     * Delete Work Type By Id
     * @param id
     * @param worktypeId
     */
    AgreementWorkTypesApi.prototype.financeAgreementsIdWorktypesWorktypeIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/worktypes/{worktypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'worktypeId' + '}', String(params.worktypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesWorktypeIdDelete');
        }
        // verify required parameter 'worktypeId' is set
        if (params.worktypeId == null) {
            throw new Error('Missing required parameter worktypeId when calling financeAgreementsIdWorktypesWorktypeIdDelete');
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
     * Get Work Type By Id
     * @param id
     * @param worktypeId
     */
    AgreementWorkTypesApi.prototype.financeAgreementsIdWorktypesWorktypeIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/worktypes/{worktypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'worktypeId' + '}', String(params.worktypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesWorktypeIdGet');
        }
        // verify required parameter 'worktypeId' is set
        if (params.worktypeId == null) {
            throw new Error('Missing required parameter worktypeId when calling financeAgreementsIdWorktypesWorktypeIdGet');
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
     * Update Work Type
     * @param id
     * @param worktypeId
     * @param operations
     */
    AgreementWorkTypesApi.prototype.financeAgreementsIdWorktypesWorktypeIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/worktypes/{worktypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'worktypeId' + '}', String(params.worktypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesWorktypeIdPatch');
        }
        // verify required parameter 'worktypeId' is set
        if (params.worktypeId == null) {
            throw new Error('Missing required parameter worktypeId when calling financeAgreementsIdWorktypesWorktypeIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeAgreementsIdWorktypesWorktypeIdPatch');
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
     * Replace Work Type
     * @param id
     * @param worktypeId
     * @param workType
     */
    AgreementWorkTypesApi.prototype.financeAgreementsIdWorktypesWorktypeIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/worktypes/{worktypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'worktypeId' + '}', String(params.worktypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdWorktypesWorktypeIdPut');
        }
        // verify required parameter 'worktypeId' is set
        if (params.worktypeId == null) {
            throw new Error('Missing required parameter worktypeId when calling financeAgreementsIdWorktypesWorktypeIdPut');
        }
        // verify required parameter 'workType' is set
        if (params.workType == null) {
            throw new Error('Missing required parameter workType when calling financeAgreementsIdWorktypesWorktypeIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.workType),
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
    return AgreementWorkTypesApi;
}());
exports.AgreementWorkTypesApi = AgreementWorkTypesApi;
//}
//export namespace  {
'use strict';
var AgreementsApi = (function () {
    function AgreementsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Agreements Count
     * @param conditions
     */
    AgreementsApi.prototype.financeAgreementsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/count';
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
     * Get Agreements
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    AgreementsApi.prototype.financeAgreementsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements';
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
     * Delete Configuration Association
     * @param id
     * @param configurationId
     */
    AgreementsApi.prototype.financeAgreementsIdConfigurationsConfigurationIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/configurations/{configurationId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'configurationId' + '}', String(params.configurationId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdConfigurationsConfigurationIdDelete');
        }
        // verify required parameter 'configurationId' is set
        if (params.configurationId == null) {
            throw new Error('Missing required parameter configurationId when calling financeAgreementsIdConfigurationsConfigurationIdDelete');
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
     * Get Configuration Association
     * @param id
     * @param configurationId
     */
    AgreementsApi.prototype.financeAgreementsIdConfigurationsConfigurationIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/configurations/{configurationId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'configurationId' + '}', String(params.configurationId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdConfigurationsConfigurationIdGet');
        }
        // verify required parameter 'configurationId' is set
        if (params.configurationId == null) {
            throw new Error('Missing required parameter configurationId when calling financeAgreementsIdConfigurationsConfigurationIdGet');
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
     * Get Agreement Configurations Count
     * @param id
     */
    AgreementsApi.prototype.financeAgreementsIdConfigurationsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/configurations/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdConfigurationsCountGet');
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
     * Get Agreement Configurations
     * @param id
     * @param page
     * @param pageSize
     */
    AgreementsApi.prototype.financeAgreementsIdConfigurationsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/configurations'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdConfigurationsGet');
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
     * Create Configuration Association
     * @param id
     * @param configuration
     */
    AgreementsApi.prototype.financeAgreementsIdConfigurationsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}/configurations'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdConfigurationsPost');
        }
        // verify required parameter 'configuration' is set
        if (params.configuration == null) {
            throw new Error('Missing required parameter configuration when calling financeAgreementsIdConfigurationsPost');
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
    /**
     *
     * Delete Agreement By Id
     * @param id
     */
    AgreementsApi.prototype.financeAgreementsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdDelete');
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
     * Get Agreement By Id
     * @param id
     */
    AgreementsApi.prototype.financeAgreementsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdGet');
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
     * Update Agreement
     * @param id
     * @param operations
     */
    AgreementsApi.prototype.financeAgreementsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeAgreementsIdPatch');
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
     * Replace Agreement
     * @param id
     * @param agreement
     */
    AgreementsApi.prototype.financeAgreementsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeAgreementsIdPut');
        }
        // verify required parameter 'agreement' is set
        if (params.agreement == null) {
            throw new Error('Missing required parameter agreement when calling financeAgreementsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.agreement),
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
     * Create Agreement
     * @param agreement
     */
    AgreementsApi.prototype.financeAgreementsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/agreements';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'agreement' is set
        if (params.agreement == null) {
            throw new Error('Missing required parameter agreement when calling financeAgreementsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.agreement),
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
    return AgreementsApi;
}());
exports.AgreementsApi = AgreementsApi;
//}
//export namespace  {
'use strict';
var CurrenciesApi = (function () {
    function CurrenciesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Currencies Count
     * @param conditions
     */
    CurrenciesApi.prototype.financeCurrenciesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/currencies/count';
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
     * Get Currencies
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CurrenciesApi.prototype.financeCurrenciesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/currencies';
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
     * Delete Currency By Id
     * @param id
     */
    CurrenciesApi.prototype.financeCurrenciesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/currencies/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeCurrenciesIdDelete');
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
     * Get Currency By Id
     * @param id
     */
    CurrenciesApi.prototype.financeCurrenciesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/currencies/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeCurrenciesIdGet');
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
     * Update Currency
     * @param id
     * @param operations
     */
    CurrenciesApi.prototype.financeCurrenciesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/currencies/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeCurrenciesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeCurrenciesIdPatch');
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
     * Replace Currency
     * @param id
     * @param currency
     */
    CurrenciesApi.prototype.financeCurrenciesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/currencies/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeCurrenciesIdPut');
        }
        // verify required parameter 'currency' is set
        if (params.currency == null) {
            throw new Error('Missing required parameter currency when calling financeCurrenciesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.currency),
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
     * Create Currency
     * @param currency
     */
    CurrenciesApi.prototype.financeCurrenciesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/currencies';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'currency' is set
        if (params.currency == null) {
            throw new Error('Missing required parameter currency when calling financeCurrenciesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.currency),
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
    return CurrenciesApi;
}());
exports.CurrenciesApi = CurrenciesApi;
//}
//export namespace  {
'use strict';
var InvoicePaymentsApi = (function () {
    function InvoicePaymentsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Payments
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    InvoicePaymentsApi.prototype.financeInvoicesIdPaymentsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}/payments'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsGet');
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
     * Delete Payment By Id
     * @param id
     * @param paymentId
     */
    InvoicePaymentsApi.prototype.financeInvoicesIdPaymentsPaymentIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}/payments/{paymentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'paymentId' + '}', String(params.paymentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsPaymentIdDelete');
        }
        // verify required parameter 'paymentId' is set
        if (params.paymentId == null) {
            throw new Error('Missing required parameter paymentId when calling financeInvoicesIdPaymentsPaymentIdDelete');
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
     * Get Payment By Id
     * @param id
     * @param paymentId
     */
    InvoicePaymentsApi.prototype.financeInvoicesIdPaymentsPaymentIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}/payments/{paymentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'paymentId' + '}', String(params.paymentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsPaymentIdGet');
        }
        // verify required parameter 'paymentId' is set
        if (params.paymentId == null) {
            throw new Error('Missing required parameter paymentId when calling financeInvoicesIdPaymentsPaymentIdGet');
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
     * Update Payment
     * @param id
     * @param paymentId
     * @param operations
     */
    InvoicePaymentsApi.prototype.financeInvoicesIdPaymentsPaymentIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}/payments/{paymentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'paymentId' + '}', String(params.paymentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsPaymentIdPatch');
        }
        // verify required parameter 'paymentId' is set
        if (params.paymentId == null) {
            throw new Error('Missing required parameter paymentId when calling financeInvoicesIdPaymentsPaymentIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeInvoicesIdPaymentsPaymentIdPatch');
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
     * Replace Payment
     * @param id
     * @param paymentId
     * @param payment
     */
    InvoicePaymentsApi.prototype.financeInvoicesIdPaymentsPaymentIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}/payments/{paymentId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'paymentId' + '}', String(params.paymentId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsPaymentIdPut');
        }
        // verify required parameter 'paymentId' is set
        if (params.paymentId == null) {
            throw new Error('Missing required parameter paymentId when calling financeInvoicesIdPaymentsPaymentIdPut');
        }
        // verify required parameter 'payment' is set
        if (params.payment == null) {
            throw new Error('Missing required parameter payment when calling financeInvoicesIdPaymentsPaymentIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.payment),
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
     * Create Payment
     * @param id
     * @param payment
     */
    InvoicePaymentsApi.prototype.financeInvoicesIdPaymentsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}/payments'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdPaymentsPost');
        }
        // verify required parameter 'payment' is set
        if (params.payment == null) {
            throw new Error('Missing required parameter payment when calling financeInvoicesIdPaymentsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.payment),
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
    return InvoicePaymentsApi;
}());
exports.InvoicePaymentsApi = InvoicePaymentsApi;
//}
//export namespace  {
'use strict';
var InvoicesApi = (function () {
    function InvoicesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Invoices Count
     * @param conditions
     */
    InvoicesApi.prototype.financeInvoicesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/count';
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
     * Get Invoices
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    InvoicesApi.prototype.financeInvoicesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices';
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
     * Delete Invoice By Id
     * @param id
     */
    InvoicesApi.prototype.financeInvoicesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdDelete');
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
     * Get Invoice By Id
     * @param id
     */
    InvoicesApi.prototype.financeInvoicesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdGet');
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
     * Update Invoice
     * @param id
     * @param operations
     */
    InvoicesApi.prototype.financeInvoicesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling financeInvoicesIdPatch');
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
     * Get Invoice Pdf
     * @param id
     */
    InvoicesApi.prototype.financeInvoicesIdPdfGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}/pdf'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdPdfGet');
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
     * Replace Invoice
     * @param id
     * @param invoice
     */
    InvoicesApi.prototype.financeInvoicesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling financeInvoicesIdPut');
        }
        // verify required parameter 'invoice' is set
        if (params.invoice == null) {
            throw new Error('Missing required parameter invoice when calling financeInvoicesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.invoice),
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
     * Create Invoice
     * @param invoice
     */
    InvoicesApi.prototype.financeInvoicesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/finance/invoices';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'invoice' is set
        if (params.invoice == null) {
            throw new Error('Missing required parameter invoice when calling financeInvoicesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.invoice),
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
    return InvoicesApi;
}());
exports.InvoicesApi = InvoicesApi;
//}
