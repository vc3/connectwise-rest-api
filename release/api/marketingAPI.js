"use strict";
///<reference path="../../typings/main.d.ts"/>
var querystring = require('querystring');
var fetch = require('isomorphic-fetch');
var assign_1 = require('./assign');
//export namespace  {
'use strict';
var CampaignAuditsApi = (function () {
    function CampaignAuditsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Delete Campaign Audit By Id
     * @param id
     * @param auditId
     */
    CampaignAuditsApi.prototype.marketingCampaignsIdAuditsAuditIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/audits/{auditId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'auditId' + '}', String(params.auditId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsAuditIdDelete');
        }
        // verify required parameter 'auditId' is set
        if (params.auditId == null) {
            throw new Error('Missing required parameter auditId when calling marketingCampaignsIdAuditsAuditIdDelete');
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
     * Get Campaign Audit By Id
     * @param id
     * @param auditId
     */
    CampaignAuditsApi.prototype.marketingCampaignsIdAuditsAuditIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/audits/{auditId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'auditId' + '}', String(params.auditId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsAuditIdGet');
        }
        // verify required parameter 'auditId' is set
        if (params.auditId == null) {
            throw new Error('Missing required parameter auditId when calling marketingCampaignsIdAuditsAuditIdGet');
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
     * Update Campaign Audit
     * @param id
     * @param auditId
     * @param operations
     */
    CampaignAuditsApi.prototype.marketingCampaignsIdAuditsAuditIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/audits/{auditId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'auditId' + '}', String(params.auditId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsAuditIdPatch');
        }
        // verify required parameter 'auditId' is set
        if (params.auditId == null) {
            throw new Error('Missing required parameter auditId when calling marketingCampaignsIdAuditsAuditIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingCampaignsIdAuditsAuditIdPatch');
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
     * Replace Campaign Audit
     * @param id
     * @param auditId
     * @param campaignAudit
     */
    CampaignAuditsApi.prototype.marketingCampaignsIdAuditsAuditIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/audits/{auditId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'auditId' + '}', String(params.auditId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsAuditIdPut');
        }
        // verify required parameter 'auditId' is set
        if (params.auditId == null) {
            throw new Error('Missing required parameter auditId when calling marketingCampaignsIdAuditsAuditIdPut');
        }
        // verify required parameter 'campaignAudit' is set
        if (params.campaignAudit == null) {
            throw new Error('Missing required parameter campaignAudit when calling marketingCampaignsIdAuditsAuditIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.campaignAudit),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Campaign Audits Count
     * @param id
     * @param conditions
     */
    CampaignAuditsApi.prototype.marketingCampaignsIdAuditsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/audits/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsCountGet');
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
     * Get Campaign Audits
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CampaignAuditsApi.prototype.marketingCampaignsIdAuditsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/audits'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsGet');
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
     * Create Campaign Audit
     * @param id
     * @param campaignAudit
     */
    CampaignAuditsApi.prototype.marketingCampaignsIdAuditsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/audits'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsPost');
        }
        // verify required parameter 'campaignAudit' is set
        if (params.campaignAudit == null) {
            throw new Error('Missing required parameter campaignAudit when calling marketingCampaignsIdAuditsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.campaignAudit),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CampaignAuditsApi;
}());
exports.CampaignAuditsApi = CampaignAuditsApi;
//}
//export namespace  {
'use strict';
var CampaignEmailsOpenedApi = (function () {
    function CampaignEmailsOpenedApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Emails Opened Count
     * @param id
     * @param conditions
     */
    CampaignEmailsOpenedApi.prototype.marketingCampaignsIdEmailsOpenedCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedCountGet');
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
     * Delete Email Opened By Id
     * @param id
     * @param emailOpenedId
     */
    CampaignEmailsOpenedApi.prototype.marketingCampaignsIdEmailsOpenedEmailOpenedIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened/{emailOpenedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'emailOpenedId' + '}', String(params.emailOpenedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdDelete');
        }
        // verify required parameter 'emailOpenedId' is set
        if (params.emailOpenedId == null) {
            throw new Error('Missing required parameter emailOpenedId when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdDelete');
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
     * Get Email Opened By Id
     * @param id
     * @param emailOpenedId
     */
    CampaignEmailsOpenedApi.prototype.marketingCampaignsIdEmailsOpenedEmailOpenedIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened/{emailOpenedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'emailOpenedId' + '}', String(params.emailOpenedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdGet');
        }
        // verify required parameter 'emailOpenedId' is set
        if (params.emailOpenedId == null) {
            throw new Error('Missing required parameter emailOpenedId when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdGet');
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
     * Update Email Opened
     * @param id
     * @param emailOpenedId
     * @param operations
     */
    CampaignEmailsOpenedApi.prototype.marketingCampaignsIdEmailsOpenedEmailOpenedIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened/{emailOpenedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'emailOpenedId' + '}', String(params.emailOpenedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdPatch');
        }
        // verify required parameter 'emailOpenedId' is set
        if (params.emailOpenedId == null) {
            throw new Error('Missing required parameter emailOpenedId when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdPatch');
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
     * Replace Email Opened
     * @param id
     * @param emailOpenedId
     * @param emailOpened
     */
    CampaignEmailsOpenedApi.prototype.marketingCampaignsIdEmailsOpenedEmailOpenedIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened/{emailOpenedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'emailOpenedId' + '}', String(params.emailOpenedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdPut');
        }
        // verify required parameter 'emailOpenedId' is set
        if (params.emailOpenedId == null) {
            throw new Error('Missing required parameter emailOpenedId when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdPut');
        }
        // verify required parameter 'emailOpened' is set
        if (params.emailOpened == null) {
            throw new Error('Missing required parameter emailOpened when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.emailOpened),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Emails Opened
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CampaignEmailsOpenedApi.prototype.marketingCampaignsIdEmailsOpenedGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedGet');
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
     * Create Email Opened
     * @param id
     * @param emailOpened
     */
    CampaignEmailsOpenedApi.prototype.marketingCampaignsIdEmailsOpenedPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedPost');
        }
        // verify required parameter 'emailOpened' is set
        if (params.emailOpened == null) {
            throw new Error('Missing required parameter emailOpened when calling marketingCampaignsIdEmailsOpenedPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.emailOpened),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CampaignEmailsOpenedApi;
}());
exports.CampaignEmailsOpenedApi = CampaignEmailsOpenedApi;
//}
//export namespace  {
'use strict';
var CampaignFormsSubmittedApi = (function () {
    function CampaignFormsSubmittedApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Forms Submitted Count
     * @param id
     * @param conditions
     */
    CampaignFormsSubmittedApi.prototype.marketingCampaignsIdFormsSubmittedCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedCountGet');
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
     * Delete Form Submitted By Id
     * @param id
     * @param formSubmittedId
     */
    CampaignFormsSubmittedApi.prototype.marketingCampaignsIdFormsSubmittedFormSubmittedIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted/{formSubmittedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'formSubmittedId' + '}', String(params.formSubmittedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdDelete');
        }
        // verify required parameter 'formSubmittedId' is set
        if (params.formSubmittedId == null) {
            throw new Error('Missing required parameter formSubmittedId when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdDelete');
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
     * Get Form Submitted By Id
     * @param id
     * @param formSubmittedId
     */
    CampaignFormsSubmittedApi.prototype.marketingCampaignsIdFormsSubmittedFormSubmittedIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted/{formSubmittedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'formSubmittedId' + '}', String(params.formSubmittedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdGet');
        }
        // verify required parameter 'formSubmittedId' is set
        if (params.formSubmittedId == null) {
            throw new Error('Missing required parameter formSubmittedId when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdGet');
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
     * Update Form Submitted
     * @param id
     * @param formSubmittedId
     * @param operations
     */
    CampaignFormsSubmittedApi.prototype.marketingCampaignsIdFormsSubmittedFormSubmittedIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted/{formSubmittedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'formSubmittedId' + '}', String(params.formSubmittedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdPatch');
        }
        // verify required parameter 'formSubmittedId' is set
        if (params.formSubmittedId == null) {
            throw new Error('Missing required parameter formSubmittedId when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdPatch');
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
     * Replace Form Submitted
     * @param id
     * @param formSubmittedId
     * @param formSubmitted
     */
    CampaignFormsSubmittedApi.prototype.marketingCampaignsIdFormsSubmittedFormSubmittedIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted/{formSubmittedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'formSubmittedId' + '}', String(params.formSubmittedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdPut');
        }
        // verify required parameter 'formSubmittedId' is set
        if (params.formSubmittedId == null) {
            throw new Error('Missing required parameter formSubmittedId when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdPut');
        }
        // verify required parameter 'formSubmitted' is set
        if (params.formSubmitted == null) {
            throw new Error('Missing required parameter formSubmitted when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.formSubmitted),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Forms Submitted
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CampaignFormsSubmittedApi.prototype.marketingCampaignsIdFormsSubmittedGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedGet');
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
     * Create Form Submitted
     * @param id
     * @param formSubmitted
     */
    CampaignFormsSubmittedApi.prototype.marketingCampaignsIdFormsSubmittedPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedPost');
        }
        // verify required parameter 'formSubmitted' is set
        if (params.formSubmitted == null) {
            throw new Error('Missing required parameter formSubmitted when calling marketingCampaignsIdFormsSubmittedPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.formSubmitted),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CampaignFormsSubmittedApi;
}());
exports.CampaignFormsSubmittedApi = CampaignFormsSubmittedApi;
//}
//export namespace  {
'use strict';
var CampaignLinksClickedApi = (function () {
    function CampaignLinksClickedApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Links Clicked Count
     * @param id
     * @param conditions
     */
    CampaignLinksClickedApi.prototype.marketingCampaignsIdLinksClickedCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedCountGet');
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
     * Get Links Clicked
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CampaignLinksClickedApi.prototype.marketingCampaignsIdLinksClickedGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedGet');
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
     * Delete Link Clicked By Id
     * @param id
     * @param linkClickedId
     */
    CampaignLinksClickedApi.prototype.marketingCampaignsIdLinksClickedLinkClickedIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked/{linkClickedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'linkClickedId' + '}', String(params.linkClickedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedLinkClickedIdDelete');
        }
        // verify required parameter 'linkClickedId' is set
        if (params.linkClickedId == null) {
            throw new Error('Missing required parameter linkClickedId when calling marketingCampaignsIdLinksClickedLinkClickedIdDelete');
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
     * Get Link Clicked By Id
     * @param id
     * @param linkClickedId
     */
    CampaignLinksClickedApi.prototype.marketingCampaignsIdLinksClickedLinkClickedIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked/{linkClickedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'linkClickedId' + '}', String(params.linkClickedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedLinkClickedIdGet');
        }
        // verify required parameter 'linkClickedId' is set
        if (params.linkClickedId == null) {
            throw new Error('Missing required parameter linkClickedId when calling marketingCampaignsIdLinksClickedLinkClickedIdGet');
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
     * Update Link Clicked
     * @param id
     * @param linkClickedId
     * @param operations
     */
    CampaignLinksClickedApi.prototype.marketingCampaignsIdLinksClickedLinkClickedIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked/{linkClickedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'linkClickedId' + '}', String(params.linkClickedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedLinkClickedIdPatch');
        }
        // verify required parameter 'linkClickedId' is set
        if (params.linkClickedId == null) {
            throw new Error('Missing required parameter linkClickedId when calling marketingCampaignsIdLinksClickedLinkClickedIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingCampaignsIdLinksClickedLinkClickedIdPatch');
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
     * Replace Link Clicked
     * @param id
     * @param linkClickedId
     * @param linkClicked
     */
    CampaignLinksClickedApi.prototype.marketingCampaignsIdLinksClickedLinkClickedIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked/{linkClickedId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'linkClickedId' + '}', String(params.linkClickedId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedLinkClickedIdPut');
        }
        // verify required parameter 'linkClickedId' is set
        if (params.linkClickedId == null) {
            throw new Error('Missing required parameter linkClickedId when calling marketingCampaignsIdLinksClickedLinkClickedIdPut');
        }
        // verify required parameter 'linkClicked' is set
        if (params.linkClicked == null) {
            throw new Error('Missing required parameter linkClicked when calling marketingCampaignsIdLinksClickedLinkClickedIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.linkClicked),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Link Clicked
     * @param id
     * @param linkClicked
     */
    CampaignLinksClickedApi.prototype.marketingCampaignsIdLinksClickedPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedPost');
        }
        // verify required parameter 'linkClicked' is set
        if (params.linkClicked == null) {
            throw new Error('Missing required parameter linkClicked when calling marketingCampaignsIdLinksClickedPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.linkClicked),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CampaignLinksClickedApi;
}());
exports.CampaignLinksClickedApi = CampaignLinksClickedApi;
//}
//export namespace  {
'use strict';
var CampaignStatusesApi = (function () {
    function CampaignStatusesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Campaign Statuses Count
     * @param conditions
     */
    CampaignStatusesApi.prototype.marketingCampaignsStatusesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/statuses/count';
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
     * Get Campaign Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CampaignStatusesApi.prototype.marketingCampaignsStatusesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/statuses';
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
     * Delete Campaign Status By Id
     * @param id
     */
    CampaignStatusesApi.prototype.marketingCampaignsStatusesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsStatusesIdDelete');
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
     * Get Campaign Status By Id
     * @param id
     */
    CampaignStatusesApi.prototype.marketingCampaignsStatusesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsStatusesIdGet');
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
     * Update Campaign Status
     * @param id
     * @param operations
     */
    CampaignStatusesApi.prototype.marketingCampaignsStatusesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsStatusesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingCampaignsStatusesIdPatch');
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
     * Replace Campaign Status
     * @param id
     * @param campaignStatus
     */
    CampaignStatusesApi.prototype.marketingCampaignsStatusesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/statuses/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsStatusesIdPut');
        }
        // verify required parameter 'campaignStatus' is set
        if (params.campaignStatus == null) {
            throw new Error('Missing required parameter campaignStatus when calling marketingCampaignsStatusesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.campaignStatus),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Campaign Status
     * @param campaignStatus
     */
    CampaignStatusesApi.prototype.marketingCampaignsStatusesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/statuses';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'campaignStatus' is set
        if (params.campaignStatus == null) {
            throw new Error('Missing required parameter campaignStatus when calling marketingCampaignsStatusesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.campaignStatus),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CampaignStatusesApi;
}());
exports.CampaignStatusesApi = CampaignStatusesApi;
//}
//export namespace  {
'use strict';
var CampaignSubTypesApi = (function () {
    function CampaignSubTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Campaign Sub Types Count
     * @param id
     * @param conditions
     */
    CampaignSubTypesApi.prototype.marketingCampaignsTypesIdSubTypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesCountGet');
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
     * Get Campaign Sub Types
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CampaignSubTypesApi.prototype.marketingCampaignsTypesIdSubTypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesGet');
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
     * Create Campaign Sub Type
     * @param id
     * @param campaignSubType
     */
    CampaignSubTypesApi.prototype.marketingCampaignsTypesIdSubTypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesPost');
        }
        // verify required parameter 'campaignSubType' is set
        if (params.campaignSubType == null) {
            throw new Error('Missing required parameter campaignSubType when calling marketingCampaignsTypesIdSubTypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.campaignSubType),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Campaign Sub Type By Id
     * @param id
     * @param subTypeId
     */
    CampaignSubTypesApi.prototype.marketingCampaignsTypesIdSubTypesSubTypeIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes/{subTypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subTypeId' + '}', String(params.subTypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesSubTypeIdDelete');
        }
        // verify required parameter 'subTypeId' is set
        if (params.subTypeId == null) {
            throw new Error('Missing required parameter subTypeId when calling marketingCampaignsTypesIdSubTypesSubTypeIdDelete');
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
     * Get Campaign Sub Type By Id
     * @param id
     * @param subTypeId
     */
    CampaignSubTypesApi.prototype.marketingCampaignsTypesIdSubTypesSubTypeIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes/{subTypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subTypeId' + '}', String(params.subTypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesSubTypeIdGet');
        }
        // verify required parameter 'subTypeId' is set
        if (params.subTypeId == null) {
            throw new Error('Missing required parameter subTypeId when calling marketingCampaignsTypesIdSubTypesSubTypeIdGet');
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
     * Update Campaign Sub Type
     * @param id
     * @param subTypeId
     * @param operations
     */
    CampaignSubTypesApi.prototype.marketingCampaignsTypesIdSubTypesSubTypeIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes/{subTypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subTypeId' + '}', String(params.subTypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesSubTypeIdPatch');
        }
        // verify required parameter 'subTypeId' is set
        if (params.subTypeId == null) {
            throw new Error('Missing required parameter subTypeId when calling marketingCampaignsTypesIdSubTypesSubTypeIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingCampaignsTypesIdSubTypesSubTypeIdPatch');
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
     * Replace Campaign Sub Type
     * @param id
     * @param subTypeId
     * @param campaignSubType
     */
    CampaignSubTypesApi.prototype.marketingCampaignsTypesIdSubTypesSubTypeIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes/{subTypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subTypeId' + '}', String(params.subTypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesSubTypeIdPut');
        }
        // verify required parameter 'subTypeId' is set
        if (params.subTypeId == null) {
            throw new Error('Missing required parameter subTypeId when calling marketingCampaignsTypesIdSubTypesSubTypeIdPut');
        }
        // verify required parameter 'campaignSubType' is set
        if (params.campaignSubType == null) {
            throw new Error('Missing required parameter campaignSubType when calling marketingCampaignsTypesIdSubTypesSubTypeIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.campaignSubType),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CampaignSubTypesApi;
}());
exports.CampaignSubTypesApi = CampaignSubTypesApi;
//}
//export namespace  {
'use strict';
var CampaignTypesApi = (function () {
    function CampaignTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Campaign Types Count
     * @param conditions
     */
    CampaignTypesApi.prototype.marketingCampaignsTypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/count';
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
     * Get Campaign Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CampaignTypesApi.prototype.marketingCampaignsTypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types';
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
     * Delete Campaign Type By Id
     * @param id
     */
    CampaignTypesApi.prototype.marketingCampaignsTypesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdDelete');
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
     * Get Campaign Type By Id
     * @param id
     */
    CampaignTypesApi.prototype.marketingCampaignsTypesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdGet');
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
     * Update Campaign Type
     * @param id
     * @param operations
     */
    CampaignTypesApi.prototype.marketingCampaignsTypesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingCampaignsTypesIdPatch');
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
     * Replace Campaign Type
     * @param id
     * @param campaignType
     */
    CampaignTypesApi.prototype.marketingCampaignsTypesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdPut');
        }
        // verify required parameter 'campaignType' is set
        if (params.campaignType == null) {
            throw new Error('Missing required parameter campaignType when calling marketingCampaignsTypesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.campaignType),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Campaign Type
     * @param campaignType
     */
    CampaignTypesApi.prototype.marketingCampaignsTypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/types';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'campaignType' is set
        if (params.campaignType == null) {
            throw new Error('Missing required parameter campaignType when calling marketingCampaignsTypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.campaignType),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CampaignTypesApi;
}());
exports.CampaignTypesApi = CampaignTypesApi;
//}
//export namespace  {
'use strict';
var CampaignsApi = (function () {
    function CampaignsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Campaigns Count
     * @param conditions
     */
    CampaignsApi.prototype.marketingCampaignsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/count';
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
     * Get Campaigns
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CampaignsApi.prototype.marketingCampaignsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns';
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
     * Get Campaign Activities Count
     * @param id
     */
    CampaignsApi.prototype.marketingCampaignsIdActivitiesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/activities/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdActivitiesCountGet');
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
     * Get Campaign Activities
     * @param id
     * @param page
     * @param pageSize
     */
    CampaignsApi.prototype.marketingCampaignsIdActivitiesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/activities'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdActivitiesGet');
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
     * Delete Campaign By Id
     * @param id
     */
    CampaignsApi.prototype.marketingCampaignsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdDelete');
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
     * Get Campaign By Id
     * @param id
     */
    CampaignsApi.prototype.marketingCampaignsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdGet');
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
     * Get Campaign Opportunities Count
     * @param id
     */
    CampaignsApi.prototype.marketingCampaignsIdOpportunitiesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/opportunities/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdOpportunitiesCountGet');
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
     * Get Campaign Opportunities
     * @param id
     * @param page
     * @param pageSize
     */
    CampaignsApi.prototype.marketingCampaignsIdOpportunitiesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}/opportunities'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdOpportunitiesGet');
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
     * Update Campaign
     * @param id
     * @param operations
     */
    CampaignsApi.prototype.marketingCampaignsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingCampaignsIdPatch');
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
     * Replace Campaign
     * @param id
     * @param campaign
     */
    CampaignsApi.prototype.marketingCampaignsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingCampaignsIdPut');
        }
        // verify required parameter 'campaign' is set
        if (params.campaign == null) {
            throw new Error('Missing required parameter campaign when calling marketingCampaignsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.campaign),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Campaign
     * @param campaign
     */
    CampaignsApi.prototype.marketingCampaignsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/campaigns';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'campaign' is set
        if (params.campaign == null) {
            throw new Error('Missing required parameter campaign when calling marketingCampaignsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.campaign),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CampaignsApi;
}());
exports.CampaignsApi = CampaignsApi;
//}
//export namespace  {
'use strict';
var GroupCompaniesApi = (function () {
    function GroupCompaniesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Delete Marketing Company By Id
     * @param id
     * @param companyId
     */
    GroupCompaniesApi.prototype.marketingGroupsIdCompaniesCompanyIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/companies/{companyId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'companyId' + '}', String(params.companyId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesCompanyIdDelete');
        }
        // verify required parameter 'companyId' is set
        if (params.companyId == null) {
            throw new Error('Missing required parameter companyId when calling marketingGroupsIdCompaniesCompanyIdDelete');
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
     * Get Marketing Company By Id
     * @param id
     * @param companyId
     */
    GroupCompaniesApi.prototype.marketingGroupsIdCompaniesCompanyIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/companies/{companyId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'companyId' + '}', String(params.companyId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesCompanyIdGet');
        }
        // verify required parameter 'companyId' is set
        if (params.companyId == null) {
            throw new Error('Missing required parameter companyId when calling marketingGroupsIdCompaniesCompanyIdGet');
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
     * Update Marketing Company
     * @param id
     * @param companyId
     * @param operations
     */
    GroupCompaniesApi.prototype.marketingGroupsIdCompaniesCompanyIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/companies/{companyId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'companyId' + '}', String(params.companyId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesCompanyIdPatch');
        }
        // verify required parameter 'companyId' is set
        if (params.companyId == null) {
            throw new Error('Missing required parameter companyId when calling marketingGroupsIdCompaniesCompanyIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingGroupsIdCompaniesCompanyIdPatch');
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
     * Replace Marketing Company
     * @param id
     * @param companyId
     * @param marketingCompany
     */
    GroupCompaniesApi.prototype.marketingGroupsIdCompaniesCompanyIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/companies/{companyId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'companyId' + '}', String(params.companyId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesCompanyIdPut');
        }
        // verify required parameter 'companyId' is set
        if (params.companyId == null) {
            throw new Error('Missing required parameter companyId when calling marketingGroupsIdCompaniesCompanyIdPut');
        }
        // verify required parameter 'marketingCompany' is set
        if (params.marketingCompany == null) {
            throw new Error('Missing required parameter marketingCompany when calling marketingGroupsIdCompaniesCompanyIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.marketingCompany),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Marketing Companys Count
     * @param id
     * @param conditions
     */
    GroupCompaniesApi.prototype.marketingGroupsIdCompaniesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/companies/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesCountGet');
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
     * Get Marketing Companys
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    GroupCompaniesApi.prototype.marketingGroupsIdCompaniesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/companies'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesGet');
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
     * Create Marketing Company
     * @param id
     * @param marketingCompany
     */
    GroupCompaniesApi.prototype.marketingGroupsIdCompaniesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/companies'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesPost');
        }
        // verify required parameter 'marketingCompany' is set
        if (params.marketingCompany == null) {
            throw new Error('Missing required parameter marketingCompany when calling marketingGroupsIdCompaniesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.marketingCompany),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return GroupCompaniesApi;
}());
exports.GroupCompaniesApi = GroupCompaniesApi;
//}
//export namespace  {
'use strict';
var GroupContactsApi = (function () {
    function GroupContactsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Delete Marketing Contact By Id
     * @param id
     * @param contactId
     */
    GroupContactsApi.prototype.marketingGroupsIdContactsContactIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/contacts/{contactId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'contactId' + '}', String(params.contactId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdContactsContactIdDelete');
        }
        // verify required parameter 'contactId' is set
        if (params.contactId == null) {
            throw new Error('Missing required parameter contactId when calling marketingGroupsIdContactsContactIdDelete');
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
     * Get Marketing Contact By Id
     * @param id
     * @param contactId
     */
    GroupContactsApi.prototype.marketingGroupsIdContactsContactIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/contacts/{contactId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'contactId' + '}', String(params.contactId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdContactsContactIdGet');
        }
        // verify required parameter 'contactId' is set
        if (params.contactId == null) {
            throw new Error('Missing required parameter contactId when calling marketingGroupsIdContactsContactIdGet');
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
     * Update Marketing Contact
     * @param id
     * @param contactId
     * @param operations
     */
    GroupContactsApi.prototype.marketingGroupsIdContactsContactIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/contacts/{contactId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'contactId' + '}', String(params.contactId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdContactsContactIdPatch');
        }
        // verify required parameter 'contactId' is set
        if (params.contactId == null) {
            throw new Error('Missing required parameter contactId when calling marketingGroupsIdContactsContactIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingGroupsIdContactsContactIdPatch');
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
     * Replace Marketing Contact
     * @param id
     * @param contactId
     * @param marketingContact
     */
    GroupContactsApi.prototype.marketingGroupsIdContactsContactIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/contacts/{contactId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'contactId' + '}', String(params.contactId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdContactsContactIdPut');
        }
        // verify required parameter 'contactId' is set
        if (params.contactId == null) {
            throw new Error('Missing required parameter contactId when calling marketingGroupsIdContactsContactIdPut');
        }
        // verify required parameter 'marketingContact' is set
        if (params.marketingContact == null) {
            throw new Error('Missing required parameter marketingContact when calling marketingGroupsIdContactsContactIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.marketingContact),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Marketing Contacts Count
     * @param id
     * @param conditions
     */
    GroupContactsApi.prototype.marketingGroupsIdContactsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/contacts/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdContactsCountGet');
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
     * Get Marketing Contacts
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    GroupContactsApi.prototype.marketingGroupsIdContactsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/contacts'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdContactsGet');
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
     * Create Marketing Contact
     * @param id
     * @param marketingContact
     */
    GroupContactsApi.prototype.marketingGroupsIdContactsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}/contacts'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdContactsPost');
        }
        // verify required parameter 'marketingContact' is set
        if (params.marketingContact == null) {
            throw new Error('Missing required parameter marketingContact when calling marketingGroupsIdContactsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.marketingContact),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return GroupContactsApi;
}());
exports.GroupContactsApi = GroupContactsApi;
//}
//export namespace  {
'use strict';
var GroupsApi = (function () {
    function GroupsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Groups Count
     * @param conditions
     */
    GroupsApi.prototype.marketingGroupsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/count';
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
     * Get Groups
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    GroupsApi.prototype.marketingGroupsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups';
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
     * Delete Group By Id
     * @param id
     */
    GroupsApi.prototype.marketingGroupsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdDelete');
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
     * Get Group By Id
     * @param id
     */
    GroupsApi.prototype.marketingGroupsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdGet');
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
     * Update Group
     * @param id
     * @param operations
     */
    GroupsApi.prototype.marketingGroupsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling marketingGroupsIdPatch');
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
     * Replace Group
     * @param id
     * @param group
     */
    GroupsApi.prototype.marketingGroupsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling marketingGroupsIdPut');
        }
        // verify required parameter 'group' is set
        if (params.group == null) {
            throw new Error('Missing required parameter group when calling marketingGroupsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.group),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Group
     * @param group
     */
    GroupsApi.prototype.marketingGroupsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/marketing/groups';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'group' is set
        if (params.group == null) {
            throw new Error('Missing required parameter group when calling marketingGroupsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.group),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return GroupsApi;
}());
exports.GroupsApi = GroupsApi;
//}
