"use strict";
var querystring = require('querystring');
var fetch = require('isomorphic-fetch');
var assign_1 = require('./assign');
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
(function (BillingMethodEnum) {
    BillingMethodEnum[BillingMethodEnum["ActualRates"] = 'ActualRates'] = "ActualRates";
    BillingMethodEnum[BillingMethodEnum["FixedFee"] = 'FixedFee'] = "FixedFee";
    BillingMethodEnum[BillingMethodEnum["NotToExceed"] = 'NotToExceed'] = "NotToExceed";
    BillingMethodEnum[BillingMethodEnum["OverrideRate"] = 'OverrideRate'] = "OverrideRate";
})(exports.BillingMethodEnum || (exports.BillingMethodEnum = {}));
var BillingMethodEnum = exports.BillingMethodEnum;
//export namespace  {
'use strict';
var ProjectContactsApi = (function () {
    function ProjectContactsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Delete Project Contact By Id
     * @param id
     * @param contactId
     */
    ProjectContactsApi.prototype.projectProjectsIdContactsContactIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/contacts/{contactId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'contactId' + '}', String(params.contactId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdContactsContactIdDelete');
        }
        // verify required parameter 'contactId' is set
        if (params.contactId == null) {
            throw new Error('Missing required parameter contactId when calling projectProjectsIdContactsContactIdDelete');
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
     * Get Project Contact By Id
     * @param id
     * @param contactId
     */
    ProjectContactsApi.prototype.projectProjectsIdContactsContactIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/contacts/{contactId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'contactId' + '}', String(params.contactId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdContactsContactIdGet');
        }
        // verify required parameter 'contactId' is set
        if (params.contactId == null) {
            throw new Error('Missing required parameter contactId when calling projectProjectsIdContactsContactIdGet');
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
     * Get Project Contacts
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ProjectContactsApi.prototype.projectProjectsIdContactsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/contacts'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdContactsGet');
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
     * Create Project Contact
     * @param id
     * @param contact
     */
    ProjectContactsApi.prototype.projectProjectsIdContactsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/contacts'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdContactsPost');
        }
        // verify required parameter 'contact' is set
        if (params.contact == null) {
            throw new Error('Missing required parameter contact when calling projectProjectsIdContactsPost');
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
    return ProjectContactsApi;
}());
exports.ProjectContactsApi = ProjectContactsApi;
//}
//export namespace  {
'use strict';
var ProjectNotesApi = (function () {
    function ProjectNotesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Project Notes Count
     * @param id
     * @param conditions
     */
    ProjectNotesApi.prototype.projectProjectsIdNotesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/notes/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdNotesCountGet');
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
     * Get Project Notes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ProjectNotesApi.prototype.projectProjectsIdNotesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/notes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdNotesGet');
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
     * Delete Project Note By Id
     * @param id
     * @param noteId
     */
    ProjectNotesApi.prototype.projectProjectsIdNotesNoteIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdNotesNoteIdDelete');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling projectProjectsIdNotesNoteIdDelete');
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
     * Get Project Note By Id
     * @param id
     * @param noteId
     */
    ProjectNotesApi.prototype.projectProjectsIdNotesNoteIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdNotesNoteIdGet');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling projectProjectsIdNotesNoteIdGet');
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
     * Update Project Note
     * @param id
     * @param noteId
     * @param operations
     */
    ProjectNotesApi.prototype.projectProjectsIdNotesNoteIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdNotesNoteIdPatch');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling projectProjectsIdNotesNoteIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling projectProjectsIdNotesNoteIdPatch');
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
     * Replace Project Note
     * @param id
     * @param noteId
     * @param note
     */
    ProjectNotesApi.prototype.projectProjectsIdNotesNoteIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdNotesNoteIdPut');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling projectProjectsIdNotesNoteIdPut');
        }
        // verify required parameter 'note' is set
        if (params.note == null) {
            throw new Error('Missing required parameter note when calling projectProjectsIdNotesNoteIdPut');
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
     * Create Project Note
     * @param id
     * @param note
     */
    ProjectNotesApi.prototype.projectProjectsIdNotesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/notes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdNotesPost');
        }
        // verify required parameter 'note' is set
        if (params.note == null) {
            throw new Error('Missing required parameter note when calling projectProjectsIdNotesPost');
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
    return ProjectNotesApi;
}());
exports.ProjectNotesApi = ProjectNotesApi;
//}
//export namespace  {
'use strict';
var ProjectPhasesApi = (function () {
    function ProjectPhasesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Project Phases Count
     * @param id
     * @param conditions
     */
    ProjectPhasesApi.prototype.projectProjectsIdPhasesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/phases/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdPhasesCountGet');
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
     * Get Project Phases
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ProjectPhasesApi.prototype.projectProjectsIdPhasesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/phases'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdPhasesGet');
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
     * Delete Project Phase By Id
     * @param id
     * @param phaseId
     */
    ProjectPhasesApi.prototype.projectProjectsIdPhasesPhaseIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/phases/{phaseId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'phaseId' + '}', String(params.phaseId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdPhasesPhaseIdDelete');
        }
        // verify required parameter 'phaseId' is set
        if (params.phaseId == null) {
            throw new Error('Missing required parameter phaseId when calling projectProjectsIdPhasesPhaseIdDelete');
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
     * Get Project Phase By Id
     * @param id
     * @param phaseId
     */
    ProjectPhasesApi.prototype.projectProjectsIdPhasesPhaseIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/phases/{phaseId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'phaseId' + '}', String(params.phaseId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdPhasesPhaseIdGet');
        }
        // verify required parameter 'phaseId' is set
        if (params.phaseId == null) {
            throw new Error('Missing required parameter phaseId when calling projectProjectsIdPhasesPhaseIdGet');
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
     * Update Project Phase
     * @param id
     * @param phaseId
     * @param operations
     */
    ProjectPhasesApi.prototype.projectProjectsIdPhasesPhaseIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/phases/{phaseId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'phaseId' + '}', String(params.phaseId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdPhasesPhaseIdPatch');
        }
        // verify required parameter 'phaseId' is set
        if (params.phaseId == null) {
            throw new Error('Missing required parameter phaseId when calling projectProjectsIdPhasesPhaseIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling projectProjectsIdPhasesPhaseIdPatch');
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
     * Replace Project Phase
     * @param id
     * @param phaseId
     * @param projectPhase
     */
    ProjectPhasesApi.prototype.projectProjectsIdPhasesPhaseIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/phases/{phaseId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'phaseId' + '}', String(params.phaseId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdPhasesPhaseIdPut');
        }
        // verify required parameter 'phaseId' is set
        if (params.phaseId == null) {
            throw new Error('Missing required parameter phaseId when calling projectProjectsIdPhasesPhaseIdPut');
        }
        // verify required parameter 'projectPhase' is set
        if (params.projectPhase == null) {
            throw new Error('Missing required parameter projectPhase when calling projectProjectsIdPhasesPhaseIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.projectPhase),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Project Phase
     * @param id
     * @param projectPhase
     */
    ProjectPhasesApi.prototype.projectProjectsIdPhasesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/phases'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdPhasesPost');
        }
        // verify required parameter 'projectPhase' is set
        if (params.projectPhase == null) {
            throw new Error('Missing required parameter projectPhase when calling projectProjectsIdPhasesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.projectPhase),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ProjectPhasesApi;
}());
exports.ProjectPhasesApi = ProjectPhasesApi;
//}
//export namespace  {
'use strict';
var ProjectsApi = (function () {
    function ProjectsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Projects Count
     * @param conditions
     */
    ProjectsApi.prototype.projectProjectsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/count';
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
     * Get Projects
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ProjectsApi.prototype.projectProjectsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects';
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
     * Delete Project By Id
     * @param id
     */
    ProjectsApi.prototype.projectProjectsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdDelete');
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
     * Get Project By Id
     * @param id
     */
    ProjectsApi.prototype.projectProjectsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdGet');
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
     * Update Project
     * @param id
     * @param operations
     */
    ProjectsApi.prototype.projectProjectsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling projectProjectsIdPatch');
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
     * Replace Project
     * @param id
     * @param project
     */
    ProjectsApi.prototype.projectProjectsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdPut');
        }
        // verify required parameter 'project' is set
        if (params.project == null) {
            throw new Error('Missing required parameter project when calling projectProjectsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.project),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Project
     * @param project
     */
    ProjectsApi.prototype.projectProjectsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'project' is set
        if (params.project == null) {
            throw new Error('Missing required parameter project when calling projectProjectsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.project),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ProjectsApi;
}());
exports.ProjectsApi = ProjectsApi;
//}
//export namespace  {
'use strict';
var ProjectsTeamMembersApi = (function () {
    function ProjectsTeamMembersApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Team Members Count
     * @param id
     * @param conditions
     */
    ProjectsTeamMembersApi.prototype.projectProjectsIdTeamMembersCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/teamMembers/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersCountGet');
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
     * Get Team Members
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    ProjectsTeamMembersApi.prototype.projectProjectsIdTeamMembersGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/teamMembers'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersGet');
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
     * Create Team Member
     * @param id
     * @param teamMember
     */
    ProjectsTeamMembersApi.prototype.projectProjectsIdTeamMembersPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/teamMembers'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersPost');
        }
        // verify required parameter 'teamMember' is set
        if (params.teamMember == null) {
            throw new Error('Missing required parameter teamMember when calling projectProjectsIdTeamMembersPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.teamMember),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Team Member By Id
     * @param id
     * @param teamMemberId
     */
    ProjectsTeamMembersApi.prototype.projectProjectsIdTeamMembersTeamMemberIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/teamMembers/{teamMemberId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamMemberId' + '}', String(params.teamMemberId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersTeamMemberIdDelete');
        }
        // verify required parameter 'teamMemberId' is set
        if (params.teamMemberId == null) {
            throw new Error('Missing required parameter teamMemberId when calling projectProjectsIdTeamMembersTeamMemberIdDelete');
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
     * Get Team Member By Id
     * @param id
     * @param teamMemberId
     */
    ProjectsTeamMembersApi.prototype.projectProjectsIdTeamMembersTeamMemberIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/teamMembers/{teamMemberId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamMemberId' + '}', String(params.teamMemberId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersTeamMemberIdGet');
        }
        // verify required parameter 'teamMemberId' is set
        if (params.teamMemberId == null) {
            throw new Error('Missing required parameter teamMemberId when calling projectProjectsIdTeamMembersTeamMemberIdGet');
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
     * Update Team Member
     * @param id
     * @param teamMemberId
     * @param operations
     */
    ProjectsTeamMembersApi.prototype.projectProjectsIdTeamMembersTeamMemberIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/teamMembers/{teamMemberId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamMemberId' + '}', String(params.teamMemberId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersTeamMemberIdPatch');
        }
        // verify required parameter 'teamMemberId' is set
        if (params.teamMemberId == null) {
            throw new Error('Missing required parameter teamMemberId when calling projectProjectsIdTeamMembersTeamMemberIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling projectProjectsIdTeamMembersTeamMemberIdPatch');
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
     * Replace Team Member
     * @param id
     * @param teamMemberId
     * @param teamMember
     */
    ProjectsTeamMembersApi.prototype.projectProjectsIdTeamMembersTeamMemberIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/project/projects/{id}/teamMembers/{teamMemberId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamMemberId' + '}', String(params.teamMemberId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersTeamMemberIdPut');
        }
        // verify required parameter 'teamMemberId' is set
        if (params.teamMemberId == null) {
            throw new Error('Missing required parameter teamMemberId when calling projectProjectsIdTeamMembersTeamMemberIdPut');
        }
        // verify required parameter 'teamMember' is set
        if (params.teamMember == null) {
            throw new Error('Missing required parameter teamMember when calling projectProjectsIdTeamMembersTeamMemberIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.teamMember),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return ProjectsTeamMembersApi;
}());
exports.ProjectsTeamMembersApi = ProjectsTeamMembersApi;
//}
