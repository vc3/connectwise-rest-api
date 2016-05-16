"use strict";
var querystring = require('querystring');
var fetch = require('isomorphic-fetch');
var assign_1 = require('./assign');
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
(function (ChargeToTypeEnum) {
    ChargeToTypeEnum[ChargeToTypeEnum["ServiceTicket"] = 'ServiceTicket'] = "ServiceTicket";
    ChargeToTypeEnum[ChargeToTypeEnum["ProjectTicket"] = 'ProjectTicket'] = "ProjectTicket";
    ChargeToTypeEnum[ChargeToTypeEnum["ChargeCode"] = 'ChargeCode'] = "ChargeCode";
    ChargeToTypeEnum[ChargeToTypeEnum["Activity"] = 'Activity'] = "Activity";
})(exports.ChargeToTypeEnum || (exports.ChargeToTypeEnum = {}));
var ChargeToTypeEnum = exports.ChargeToTypeEnum;
(function (BillableOptionEnum) {
    BillableOptionEnum[BillableOptionEnum["Billable"] = 'Billable'] = "Billable";
    BillableOptionEnum[BillableOptionEnum["DoNotBill"] = 'DoNotBill'] = "DoNotBill";
    BillableOptionEnum[BillableOptionEnum["NoCharge"] = 'NoCharge'] = "NoCharge";
    BillableOptionEnum[BillableOptionEnum["NoDefault"] = 'NoDefault'] = "NoDefault";
})(exports.BillableOptionEnum || (exports.BillableOptionEnum = {}));
var BillableOptionEnum = exports.BillableOptionEnum;
//export namespace  {
'use strict';
var TimeEntriesApi = (function () {
    function TimeEntriesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Time Entries Count
     * @param conditions
     */
    TimeEntriesApi.prototype.timeEntriesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/time/entries/count';
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
     * Get Time Entries
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    TimeEntriesApi.prototype.timeEntriesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/time/entries';
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
     * Delete Time Entry By Id
     * @param id
     */
    TimeEntriesApi.prototype.timeEntriesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/time/entries/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling timeEntriesIdDelete');
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
     * Get Time Entry By Id
     * @param id
     */
    TimeEntriesApi.prototype.timeEntriesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/time/entries/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling timeEntriesIdGet');
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
     * Update Time Entry
     * @param id
     * @param operations
     */
    TimeEntriesApi.prototype.timeEntriesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/time/entries/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling timeEntriesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling timeEntriesIdPatch');
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
     * Replace Time Entry
     * @param id
     * @param timeEntry
     */
    TimeEntriesApi.prototype.timeEntriesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/time/entries/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling timeEntriesIdPut');
        }
        // verify required parameter 'timeEntry' is set
        if (params.timeEntry == null) {
            throw new Error('Missing required parameter timeEntry when calling timeEntriesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.timeEntry),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Time Entry
     * @param timeEntry
     */
    TimeEntriesApi.prototype.timeEntriesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/time/entries';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'timeEntry' is set
        if (params.timeEntry == null) {
            throw new Error('Missing required parameter timeEntry when calling timeEntriesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.timeEntry),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return TimeEntriesApi;
}());
exports.TimeEntriesApi = TimeEntriesApi;
//}
