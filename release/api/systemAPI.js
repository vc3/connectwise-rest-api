"use strict";
var querystring = require('querystring');
var fetch = require('isomorphic-fetch');
var assign_1 = require('./assign');
(function (TypeEnum) {
    TypeEnum[TypeEnum["Ticket"] = 'Ticket'] = "Ticket";
    TypeEnum[TypeEnum["Configuration"] = 'Configuration'] = "Configuration";
})(exports.TypeEnum || (exports.TypeEnum = {}));
var TypeEnum = exports.TypeEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["Tab"] = 'Tab'] = "Tab";
    TypeEnum[TypeEnum["Pod"] = 'Pod'] = "Pod";
})(exports.TypeEnum || (exports.TypeEnum = {}));
var TypeEnum = exports.TypeEnum;
(function (FieldTypeIdentifierEnum) {
    FieldTypeIdentifierEnum[FieldTypeIdentifierEnum["Text"] = 'Text'] = "Text";
    FieldTypeIdentifierEnum[FieldTypeIdentifierEnum["Button"] = 'Button'] = "Button";
    FieldTypeIdentifierEnum[FieldTypeIdentifierEnum["Date"] = 'Date'] = "Date";
    FieldTypeIdentifierEnum[FieldTypeIdentifierEnum["Hyperlink"] = 'Hyperlink'] = "Hyperlink";
    FieldTypeIdentifierEnum[FieldTypeIdentifierEnum["Checkbox"] = 'Checkbox'] = "Checkbox";
    FieldTypeIdentifierEnum[FieldTypeIdentifierEnum["Number"] = 'Number'] = "Number";
    FieldTypeIdentifierEnum[FieldTypeIdentifierEnum["Percent"] = 'Percent'] = "Percent";
    FieldTypeIdentifierEnum[FieldTypeIdentifierEnum["TextArea"] = 'TextArea'] = "TextArea";
})(exports.FieldTypeIdentifierEnum || (exports.FieldTypeIdentifierEnum = {}));
var FieldTypeIdentifierEnum = exports.FieldTypeIdentifierEnum;
(function (EntryTypeIdentifierEnum) {
    EntryTypeIdentifierEnum[EntryTypeIdentifierEnum["EntryField"] = 'EntryField'] = "EntryField";
    EntryTypeIdentifierEnum[EntryTypeIdentifierEnum["List"] = 'List'] = "List";
    EntryTypeIdentifierEnum[EntryTypeIdentifierEnum["Option"] = 'Option'] = "Option";
})(exports.EntryTypeIdentifierEnum || (exports.EntryTypeIdentifierEnum = {}));
var EntryTypeIdentifierEnum = exports.EntryTypeIdentifierEnum;
//export namespace  {
'use strict';
var AuditTrailApi = (function () {
    function AuditTrailApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Members Count
     * @param type
     * @param id
     * @param deviceIdentifier
     */
    AuditTrailApi.prototype.systemAudittrailCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/audittrail/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.type !== undefined) {
            queryParameters['type'] = params.type;
        }
        if (params.id !== undefined) {
            queryParameters['id'] = params.id;
        }
        if (params.deviceIdentifier !== undefined) {
            queryParameters['deviceIdentifier'] = params.deviceIdentifier;
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
     * Get Audit Trail
     * @param type
     * @param id
     * @param deviceIdentifier
     * @param page
     * @param pageSize
     */
    AuditTrailApi.prototype.systemAudittrailGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/audittrail';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.type !== undefined) {
            queryParameters['type'] = params.type;
        }
        if (params.id !== undefined) {
            queryParameters['id'] = params.id;
        }
        if (params.deviceIdentifier !== undefined) {
            queryParameters['deviceIdentifier'] = params.deviceIdentifier;
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
     * Insert Audit Trail Entries
     * @param insertRequest
     */
    AuditTrailApi.prototype.systemAudittrailPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/audittrail';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'insertRequest' is set
        if (params.insertRequest == null) {
            throw new Error('Missing required parameter insertRequest when calling systemAudittrailPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.insertRequest),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return AuditTrailApi;
}());
exports.AuditTrailApi = AuditTrailApi;
//}
//export namespace  {
'use strict';
var CallbackEntriesApi = (function () {
    function CallbackEntriesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Callback Entries Count
     * @param conditions
     */
    CallbackEntriesApi.prototype.systemCallbacksCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/callbacks/count';
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
     * Get Callback Entries
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CallbackEntriesApi.prototype.systemCallbacksGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/callbacks';
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
     * Delete Callback Entry By Id
     * @param id
     */
    CallbackEntriesApi.prototype.systemCallbacksIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/callbacks/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemCallbacksIdDelete');
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
     * Get Callback Entry By Id
     * @param id
     */
    CallbackEntriesApi.prototype.systemCallbacksIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/callbacks/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemCallbacksIdGet');
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
     * Update Callback Entry
     * @param id
     * @param operations
     */
    CallbackEntriesApi.prototype.systemCallbacksIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/callbacks/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemCallbacksIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling systemCallbacksIdPatch');
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
     * Replace Callback Entry
     * @param id
     * @param callbackEntry
     */
    CallbackEntriesApi.prototype.systemCallbacksIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/callbacks/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemCallbacksIdPut');
        }
        // verify required parameter 'callbackEntry' is set
        if (params.callbackEntry == null) {
            throw new Error('Missing required parameter callbackEntry when calling systemCallbacksIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.callbackEntry),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Callback Entry
     * @param callbackEntry
     */
    CallbackEntriesApi.prototype.systemCallbacksPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/callbacks';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'callbackEntry' is set
        if (params.callbackEntry == null) {
            throw new Error('Missing required parameter callbackEntry when calling systemCallbacksPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.callbackEntry),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CallbackEntriesApi;
}());
exports.CallbackEntriesApi = CallbackEntriesApi;
//}
//export namespace  {
'use strict';
var ConnectWiseHostedSetupsApi = (function () {
    function ConnectWiseHostedSetupsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Connect Wise Hosted Setups Count
     * @param conditions
     */
    ConnectWiseHostedSetupsApi.prototype.systemConnectwisehostedsetupsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/connectwisehostedsetups/count';
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
     * Get Connect Wise Hosted Setups
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ConnectWiseHostedSetupsApi.prototype.systemConnectwisehostedsetupsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/connectwisehostedsetups';
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
     * Delete Connect Wise Hosted Setup By Id
     * @param id
     */
    ConnectWiseHostedSetupsApi.prototype.systemConnectwisehostedsetupsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/connectwisehostedsetups/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemConnectwisehostedsetupsIdDelete');
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
     * Get Connect Wise Hosted Setup By Id
     * @param id
     */
    ConnectWiseHostedSetupsApi.prototype.systemConnectwisehostedsetupsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/connectwisehostedsetups/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemConnectwisehostedsetupsIdGet');
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
     * Update Connect Wise Hosted Setup
     * @param id
     * @param operations
     */
    ConnectWiseHostedSetupsApi.prototype.systemConnectwisehostedsetupsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/connectwisehostedsetups/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemConnectwisehostedsetupsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling systemConnectwisehostedsetupsIdPatch');
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
     * Replace Connect Wise Hosted Setup
     * @param id
     * @param connectWiseHostedSetup
     */
    ConnectWiseHostedSetupsApi.prototype.systemConnectwisehostedsetupsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/connectwisehostedsetups/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemConnectwisehostedsetupsIdPut');
        }
        // verify required parameter 'connectWiseHostedSetup' is set
        if (params.connectWiseHostedSetup == null) {
            throw new Error('Missing required parameter connectWiseHostedSetup when calling systemConnectwisehostedsetupsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.connectWiseHostedSetup),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Connect Wise Hosted Setup
     * @param connectWiseHostedSetup
     */
    ConnectWiseHostedSetupsApi.prototype.systemConnectwisehostedsetupsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/connectwisehostedsetups';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'connectWiseHostedSetup' is set
        if (params.connectWiseHostedSetup == null) {
            throw new Error('Missing required parameter connectWiseHostedSetup when calling systemConnectwisehostedsetupsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.connectWiseHostedSetup),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ConnectWiseHostedSetupsApi;
}());
exports.ConnectWiseHostedSetupsApi = ConnectWiseHostedSetupsApi;
//}
//export namespace  {
'use strict';
var DocumentsApi = (function () {
    function DocumentsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Documents Info Count
     * @param recordType
     * @param recordId
     */
    DocumentsApi.prototype.systemDocumentsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/documents/count';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.recordType !== undefined) {
            queryParameters['recordType'] = params.recordType;
        }
        if (params.recordId !== undefined) {
            queryParameters['recordId'] = params.recordId;
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
     * Get Documents Info
     * @param recordType
     * @param recordId
     * @param page
     * @param pageSize
     */
    DocumentsApi.prototype.systemDocumentsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/documents';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.recordType !== undefined) {
            queryParameters['recordType'] = params.recordType;
        }
        if (params.recordId !== undefined) {
            queryParameters['recordId'] = params.recordId;
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
     * Delete Document Info By Id
     * @param id
     */
    DocumentsApi.prototype.systemDocumentsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/documents/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemDocumentsIdDelete');
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
     * Download Document
     * @param id
     * @param lastModified
     */
    DocumentsApi.prototype.systemDocumentsIdDownloadGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/documents/{id}/download'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemDocumentsIdDownloadGet');
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
     * Get Document Info By Id
     * @param id
     */
    DocumentsApi.prototype.systemDocumentsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/documents/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemDocumentsIdGet');
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
     * Update Document By Id
     * @param id
     * @param recordId Entity id
     * @param recordType Entity type
     * @param title Document title
     * @param url Document url
     * @param file File to upload
     * @param privateFlag Indicates if document is private
     * @param readOnlyFlag Indicates if document is readonly
     */
    DocumentsApi.prototype.systemDocumentsIdPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/documents/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        var formParams = {};
        headerParams['Content-Type'] = 'application/x-www-form-urlencoded';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemDocumentsIdPost');
        }
        // verify required parameter 'recordId' is set
        if (params.recordId == null) {
            throw new Error('Missing required parameter recordId when calling systemDocumentsIdPost');
        }
        // verify required parameter 'recordType' is set
        if (params.recordType == null) {
            throw new Error('Missing required parameter recordType when calling systemDocumentsIdPost');
        }
        // verify required parameter 'title' is set
        if (params.title == null) {
            throw new Error('Missing required parameter title when calling systemDocumentsIdPost');
        }
        // verify required parameter 'url' is set
        if (params.url == null) {
            throw new Error('Missing required parameter url when calling systemDocumentsIdPost');
        }
        formParams['file'] = params.file;
        formParams['recordId'] = params.recordId;
        formParams['recordType'] = params.recordType;
        formParams['title'] = params.title;
        formParams['url'] = params.url;
        formParams['privateFlag'] = params.privateFlag;
        formParams['readOnlyFlag'] = params.readOnlyFlag;
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: querystring.stringify(formParams),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Insert Document
     * @param recordId Entity id
     * @param recordType Entity type
     * @param title Document title
     * @param url Document url
     * @param file File to upload
     * @param privateFlag Indicates if document is private
     * @param readOnlyFlag Indicates if document is readonly
     */
    DocumentsApi.prototype.systemDocumentsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/documents';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        var formParams = {};
        headerParams['Content-Type'] = 'application/x-www-form-urlencoded';
        // verify required parameter 'recordId' is set
        if (params.recordId == null) {
            throw new Error('Missing required parameter recordId when calling systemDocumentsPost');
        }
        // verify required parameter 'recordType' is set
        if (params.recordType == null) {
            throw new Error('Missing required parameter recordType when calling systemDocumentsPost');
        }
        // verify required parameter 'title' is set
        if (params.title == null) {
            throw new Error('Missing required parameter title when calling systemDocumentsPost');
        }
        // verify required parameter 'url' is set
        if (params.url == null) {
            throw new Error('Missing required parameter url when calling systemDocumentsPost');
        }
        formParams['file'] = params.file;
        formParams['recordId'] = params.recordId;
        formParams['recordType'] = params.recordType;
        formParams['title'] = params.title;
        formParams['url'] = params.url;
        formParams['privateFlag'] = params.privateFlag;
        formParams['readOnlyFlag'] = params.readOnlyFlag;
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: querystring.stringify(formParams),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Upload Sample Page
     */
    DocumentsApi.prototype.systemDocumentsUploadsampleGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/documents/uploadsample';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
    return DocumentsApi;
}());
exports.DocumentsApi = DocumentsApi;
//}
//export namespace  {
'use strict';
var InfoApi = (function () {
    function InfoApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Infos
     */
    InfoApi.prototype.systemInfoGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/info';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
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
    return InfoApi;
}());
exports.InfoApi = InfoApi;
//}
//export namespace  {
'use strict';
var IntegrationsApi = (function () {
    function IntegrationsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Add Or Update Integration
     * @param integrator
     * @param request
     * @param type
     */
    IntegrationsApi.prototype.systemIntegrationsIntegratorPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/integrations/{integrator}'
            .replace('{' + 'integrator' + '}', String(params.integrator));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'integrator' is set
        if (params.integrator == null) {
            throw new Error('Missing required parameter integrator when calling systemIntegrationsIntegratorPost');
        }
        // verify required parameter 'request' is set
        if (params.request == null) {
            throw new Error('Missing required parameter request when calling systemIntegrationsIntegratorPost');
        }
        if (params.type !== undefined) {
            queryParameters['type'] = params.type;
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
    return IntegrationsApi;
}());
exports.IntegrationsApi = IntegrationsApi;
//}
//export namespace  {
'use strict';
var LinksApi = (function () {
    function LinksApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Links Count
     * @param conditions
     */
    LinksApi.prototype.systemLinksCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/links/count';
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
     * Get Links
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    LinksApi.prototype.systemLinksGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/links';
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
     * Delete Link By Id
     * @param id
     */
    LinksApi.prototype.systemLinksIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/links/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemLinksIdDelete');
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
     * Get Link By Id
     * @param id
     */
    LinksApi.prototype.systemLinksIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/links/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemLinksIdGet');
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
     * Update Link
     * @param id
     * @param operations
     */
    LinksApi.prototype.systemLinksIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/links/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemLinksIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling systemLinksIdPatch');
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
     * Replace Link
     * @param id
     * @param link
     */
    LinksApi.prototype.systemLinksIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/links/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemLinksIdPut');
        }
        // verify required parameter 'link' is set
        if (params.link == null) {
            throw new Error('Missing required parameter link when calling systemLinksIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.link),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Link
     * @param link
     */
    LinksApi.prototype.systemLinksPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/links';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'link' is set
        if (params.link == null) {
            throw new Error('Missing required parameter link when calling systemLinksPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.link),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return LinksApi;
}());
exports.LinksApi = LinksApi;
//}
//export namespace  {
'use strict';
var MembersApi = (function () {
    function MembersApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Members Count
     * @param conditions
     */
    MembersApi.prototype.systemMembersCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/members/count';
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
     * Get Members
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    MembersApi.prototype.systemMembersGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/members';
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
     * Get Member By Id
     * @param memberIdentifier
     */
    MembersApi.prototype.systemMembersMemberIdentifierGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/members/{memberIdentifier}'
            .replace('{' + 'memberIdentifier' + '}', String(params.memberIdentifier));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'memberIdentifier' is set
        if (params.memberIdentifier == null) {
            throw new Error('Missing required parameter memberIdentifier when calling systemMembersMemberIdentifierGet');
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
     * Get Member Image
     * @param memberIdentifier
     * @param useDefaultFlag
     * @param lastmodified
     */
    MembersApi.prototype.systemMembersMemberIdentifierImageGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/members/{memberIdentifier}/image'
            .replace('{' + 'memberIdentifier' + '}', String(params.memberIdentifier));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'memberIdentifier' is set
        if (params.memberIdentifier == null) {
            throw new Error('Missing required parameter memberIdentifier when calling systemMembersMemberIdentifierImageGet');
        }
        if (params.useDefaultFlag !== undefined) {
            queryParameters['useDefaultFlag'] = params.useDefaultFlag;
        }
        if (params.lastmodified !== undefined) {
            queryParameters['lastmodified'] = params.lastmodified;
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
     * Create Token By Member Identifier
     * @param memberIdentifier
     */
    MembersApi.prototype.systemMembersMemberIdentifierTokensPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/members/{memberIdentifier}/tokens'
            .replace('{' + 'memberIdentifier' + '}', String(params.memberIdentifier));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'memberIdentifier' is set
        if (params.memberIdentifier == null) {
            throw new Error('Missing required parameter memberIdentifier when calling systemMembersMemberIdentifierTokensPost');
        }
        var fetchParams = {
            method: 'POST',
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
    return MembersApi;
}());
exports.MembersApi = MembersApi;
//}
//export namespace  {
'use strict';
var MenuEntriesApi = (function () {
    function MenuEntriesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Menu Entries Count
     * @param conditions
     */
    MenuEntriesApi.prototype.systemMenuentriesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/menuentries/count';
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
     * Get Menu Entries
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    MenuEntriesApi.prototype.systemMenuentriesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/menuentries';
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
     * Delete Menu Entry By Id
     * @param id
     */
    MenuEntriesApi.prototype.systemMenuentriesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/menuentries/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemMenuentriesIdDelete');
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
     * Get Menu Entry By Id
     * @param id
     */
    MenuEntriesApi.prototype.systemMenuentriesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/menuentries/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemMenuentriesIdGet');
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
     * Get Menu Entry Image
     * @param id
     * @param lastmodified
     * @param largeFlag
     */
    MenuEntriesApi.prototype.systemMenuentriesIdImageGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/menuentries/{id}/image'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemMenuentriesIdImageGet');
        }
        if (params.lastmodified !== undefined) {
            queryParameters['lastmodified'] = params.lastmodified;
        }
        if (params.largeFlag !== undefined) {
            queryParameters['largeFlag'] = params.largeFlag;
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
     * Upload Menu Entry Image
     * @param id
     */
    MenuEntriesApi.prototype.systemMenuentriesIdImagePost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/menuentries/{id}/image'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemMenuentriesIdImagePost');
        }
        var fetchParams = {
            method: 'POST',
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
     * Update Menu Entry
     * @param id
     * @param operations
     */
    MenuEntriesApi.prototype.systemMenuentriesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/menuentries/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemMenuentriesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling systemMenuentriesIdPatch');
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
     * Replace Menu Entry
     * @param id
     * @param menuEntry
     */
    MenuEntriesApi.prototype.systemMenuentriesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/menuentries/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemMenuentriesIdPut');
        }
        // verify required parameter 'menuEntry' is set
        if (params.menuEntry == null) {
            throw new Error('Missing required parameter menuEntry when calling systemMenuentriesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.menuEntry),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Menu Entry
     * @param menuEntry
     */
    MenuEntriesApi.prototype.systemMenuentriesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/menuentries';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'menuEntry' is set
        if (params.menuEntry == null) {
            throw new Error('Missing required parameter menuEntry when calling systemMenuentriesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.menuEntry),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return MenuEntriesApi;
}());
exports.MenuEntriesApi = MenuEntriesApi;
//}
//export namespace  {
'use strict';
var ReportsApi = (function () {
    function ReportsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Reports
     * @param conditions
     * @param orderBy
     */
    ReportsApi.prototype.systemReportsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/reports';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        if (params.conditions !== undefined) {
            queryParameters['conditions'] = params.conditions;
        }
        if (params.orderBy !== undefined) {
            queryParameters['orderBy'] = params.orderBy;
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
     * Get Column Definitions
     * @param reportName
     */
    ReportsApi.prototype.systemReportsReportNameColumnsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/reports/{reportName}/columns'
            .replace('{' + 'reportName' + '}', String(params.reportName));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'reportName' is set
        if (params.reportName == null) {
            throw new Error('Missing required parameter reportName when calling systemReportsReportNameColumnsGet');
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
     * Get Report Results Count
     * @param reportName
     * @param conditions
     */
    ReportsApi.prototype.systemReportsReportNameCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/reports/{reportName}/count'
            .replace('{' + 'reportName' + '}', String(params.reportName));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'reportName' is set
        if (params.reportName == null) {
            throw new Error('Missing required parameter reportName when calling systemReportsReportNameCountGet');
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
     * Get Report Results
     * @param reportName
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     * @param columns
     */
    ReportsApi.prototype.systemReportsReportNameGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/reports/{reportName}'
            .replace('{' + 'reportName' + '}', String(params.reportName));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'reportName' is set
        if (params.reportName == null) {
            throw new Error('Missing required parameter reportName when calling systemReportsReportNameGet');
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
        if (params.columns !== undefined) {
            queryParameters['columns'] = params.columns;
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
    return ReportsApi;
}());
exports.ReportsApi = ReportsApi;
//}
//export namespace  {
'use strict';
var UserDefinedFieldsApi = (function () {
    function UserDefinedFieldsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get User Defined Fields Count
     * @param conditions
     */
    UserDefinedFieldsApi.prototype.systemUserDefinedFieldsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/userDefinedFields/count';
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
     * Get User Defined Fields
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    UserDefinedFieldsApi.prototype.systemUserDefinedFieldsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/userDefinedFields';
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
     * Delete User Defined Field By Id
     * @param id
     */
    UserDefinedFieldsApi.prototype.systemUserDefinedFieldsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/userDefinedFields/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemUserDefinedFieldsIdDelete');
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
     * Get User Defined Field By Id
     * @param id
     */
    UserDefinedFieldsApi.prototype.systemUserDefinedFieldsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/userDefinedFields/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemUserDefinedFieldsIdGet');
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
     * Update User Defined Field
     * @param id
     * @param operations
     */
    UserDefinedFieldsApi.prototype.systemUserDefinedFieldsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/userDefinedFields/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemUserDefinedFieldsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling systemUserDefinedFieldsIdPatch');
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
     * Replace User Defined Field
     * @param id
     * @param userDefinedField
     */
    UserDefinedFieldsApi.prototype.systemUserDefinedFieldsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/userDefinedFields/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling systemUserDefinedFieldsIdPut');
        }
        // verify required parameter 'userDefinedField' is set
        if (params.userDefinedField == null) {
            throw new Error('Missing required parameter userDefinedField when calling systemUserDefinedFieldsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.userDefinedField),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create User Defined Field
     * @param userDefinedField
     */
    UserDefinedFieldsApi.prototype.systemUserDefinedFieldsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/system/userDefinedFields';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'userDefinedField' is set
        if (params.userDefinedField == null) {
            throw new Error('Missing required parameter userDefinedField when calling systemUserDefinedFieldsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.userDefinedField),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return UserDefinedFieldsApi;
}());
exports.UserDefinedFieldsApi = UserDefinedFieldsApi;
//}
