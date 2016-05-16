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
(function (WhereEnum) {
    WhereEnum[WhereEnum["OnSite"] = 'OnSite'] = "OnSite";
    WhereEnum[WhereEnum["Remote"] = 'Remote'] = "Remote";
    WhereEnum[WhereEnum["InHouse"] = 'InHouse'] = "InHouse";
})(exports.WhereEnum || (exports.WhereEnum = {}));
var WhereEnum = exports.WhereEnum;
(function (EscalationStatusEnum) {
    EscalationStatusEnum[EscalationStatusEnum["NotResponded"] = 'NotResponded'] = "NotResponded";
    EscalationStatusEnum[EscalationStatusEnum["Responded"] = 'Responded'] = "Responded";
    EscalationStatusEnum[EscalationStatusEnum["ResolutionPlan"] = 'ResolutionPlan'] = "ResolutionPlan";
    EscalationStatusEnum[EscalationStatusEnum["Resolved"] = 'Resolved'] = "Resolved";
    EscalationStatusEnum[EscalationStatusEnum["NoEscalation"] = 'NoEscalation'] = "NoEscalation";
})(exports.EscalationStatusEnum || (exports.EscalationStatusEnum = {}));
var EscalationStatusEnum = exports.EscalationStatusEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["OpenEnded"] = 'OpenEnded'] = "OpenEnded";
    TypeEnum[TypeEnum["Selection"] = 'Selection'] = "Selection";
})(exports.TypeEnum || (exports.TypeEnum = {}));
var TypeEnum = exports.TypeEnum;
(function (ChildScheduleActionEnum) {
    ChildScheduleActionEnum[ChildScheduleActionEnum["Transfer"] = 'Transfer'] = "Transfer";
    ChildScheduleActionEnum[ChildScheduleActionEnum["Delete"] = 'Delete'] = "Delete";
    ChildScheduleActionEnum[ChildScheduleActionEnum["Done"] = 'Done'] = "Done";
})(exports.ChildScheduleActionEnum || (exports.ChildScheduleActionEnum = {}));
var ChildScheduleActionEnum = exports.ChildScheduleActionEnum;
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
(function (CategoryEnum) {
    CategoryEnum[CategoryEnum["Reactive"] = 'Reactive'] = "Reactive";
    CategoryEnum[CategoryEnum["Proactive"] = 'Proactive'] = "Proactive";
})(exports.CategoryEnum || (exports.CategoryEnum = {}));
var CategoryEnum = exports.CategoryEnum;
//export namespace  {
'use strict';
var BoardExcludedMembersApi = (function () {
    function BoardExcludedMembersApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Excluded Members Count
     * @param id
     * @param conditions
     */
    BoardExcludedMembersApi.prototype.serviceBoardsIdExcludedMembersCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/excludedMembers/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdExcludedMembersCountGet');
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
     * Delete Excluded Member By Id
     * @param id
     * @param excludedMemberId
     */
    BoardExcludedMembersApi.prototype.serviceBoardsIdExcludedMembersExcludedMemberIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/excludedMembers/{excludedMemberId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'excludedMemberId' + '}', String(params.excludedMemberId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdExcludedMembersExcludedMemberIdDelete');
        }
        // verify required parameter 'excludedMemberId' is set
        if (params.excludedMemberId == null) {
            throw new Error('Missing required parameter excludedMemberId when calling serviceBoardsIdExcludedMembersExcludedMemberIdDelete');
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
     * Get Excluded Member By Id
     * @param id
     * @param excludedMemberId
     */
    BoardExcludedMembersApi.prototype.serviceBoardsIdExcludedMembersExcludedMemberIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/excludedMembers/{excludedMemberId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'excludedMemberId' + '}', String(params.excludedMemberId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdExcludedMembersExcludedMemberIdGet');
        }
        // verify required parameter 'excludedMemberId' is set
        if (params.excludedMemberId == null) {
            throw new Error('Missing required parameter excludedMemberId when calling serviceBoardsIdExcludedMembersExcludedMemberIdGet');
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
     * Get Excluded Members
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    BoardExcludedMembersApi.prototype.serviceBoardsIdExcludedMembersGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/excludedMembers'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdExcludedMembersGet');
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
     * Create Excluded Member
     * @param id
     * @param excludedMember
     */
    BoardExcludedMembersApi.prototype.serviceBoardsIdExcludedMembersPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/excludedMembers'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdExcludedMembersPost');
        }
        // verify required parameter 'excludedMember' is set
        if (params.excludedMember == null) {
            throw new Error('Missing required parameter excludedMember when calling serviceBoardsIdExcludedMembersPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.excludedMember),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return BoardExcludedMembersApi;
}());
exports.BoardExcludedMembersApi = BoardExcludedMembersApi;
//}
//export namespace  {
'use strict';
var BoardItemsApi = (function () {
    function BoardItemsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Items Count
     * @param id
     * @param conditions
     */
    BoardItemsApi.prototype.serviceBoardsIdItemsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/items/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdItemsCountGet');
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
     * Get Items
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    BoardItemsApi.prototype.serviceBoardsIdItemsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/items'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdItemsGet');
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
     * Delete Item By Id
     * @param id
     * @param itemId
     */
    BoardItemsApi.prototype.serviceBoardsIdItemsItemIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/items/{itemId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'itemId' + '}', String(params.itemId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdItemsItemIdDelete');
        }
        // verify required parameter 'itemId' is set
        if (params.itemId == null) {
            throw new Error('Missing required parameter itemId when calling serviceBoardsIdItemsItemIdDelete');
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
     * Get Item By Id
     * @param id
     * @param itemId
     */
    BoardItemsApi.prototype.serviceBoardsIdItemsItemIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/items/{itemId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'itemId' + '}', String(params.itemId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdItemsItemIdGet');
        }
        // verify required parameter 'itemId' is set
        if (params.itemId == null) {
            throw new Error('Missing required parameter itemId when calling serviceBoardsIdItemsItemIdGet');
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
     * Update Item
     * @param id
     * @param itemId
     * @param operations
     */
    BoardItemsApi.prototype.serviceBoardsIdItemsItemIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/items/{itemId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'itemId' + '}', String(params.itemId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdItemsItemIdPatch');
        }
        // verify required parameter 'itemId' is set
        if (params.itemId == null) {
            throw new Error('Missing required parameter itemId when calling serviceBoardsIdItemsItemIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceBoardsIdItemsItemIdPatch');
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
     * Replace Item
     * @param id
     * @param itemId
     * @param item
     */
    BoardItemsApi.prototype.serviceBoardsIdItemsItemIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/items/{itemId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'itemId' + '}', String(params.itemId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdItemsItemIdPut');
        }
        // verify required parameter 'itemId' is set
        if (params.itemId == null) {
            throw new Error('Missing required parameter itemId when calling serviceBoardsIdItemsItemIdPut');
        }
        // verify required parameter 'item' is set
        if (params.item == null) {
            throw new Error('Missing required parameter item when calling serviceBoardsIdItemsItemIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.item),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Item
     * @param id
     * @param item
     */
    BoardItemsApi.prototype.serviceBoardsIdItemsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/items'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdItemsPost');
        }
        // verify required parameter 'item' is set
        if (params.item == null) {
            throw new Error('Missing required parameter item when calling serviceBoardsIdItemsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.item),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return BoardItemsApi;
}());
exports.BoardItemsApi = BoardItemsApi;
//}
//export namespace  {
'use strict';
var BoardStatusesApi = (function () {
    function BoardStatusesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Statuses Count
     * @param id
     * @param conditions
     */
    BoardStatusesApi.prototype.serviceBoardsIdStatusesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/statuses/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesCountGet');
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
     * Get Statuses
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    BoardStatusesApi.prototype.serviceBoardsIdStatusesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/statuses'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesGet');
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
     * Create Statuses
     * @param id
     * @param status
     */
    BoardStatusesApi.prototype.serviceBoardsIdStatusesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/statuses'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesPost');
        }
        // verify required parameter 'status' is set
        if (params.status == null) {
            throw new Error('Missing required parameter status when calling serviceBoardsIdStatusesPost');
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
    /**
     *
     * Delete Status By Id
     * @param id
     * @param statusId
     */
    BoardStatusesApi.prototype.serviceBoardsIdStatusesStatusIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/statuses/{statusId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'statusId' + '}', String(params.statusId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesStatusIdDelete');
        }
        // verify required parameter 'statusId' is set
        if (params.statusId == null) {
            throw new Error('Missing required parameter statusId when calling serviceBoardsIdStatusesStatusIdDelete');
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
     * @param statusId
     */
    BoardStatusesApi.prototype.serviceBoardsIdStatusesStatusIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/statuses/{statusId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'statusId' + '}', String(params.statusId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesStatusIdGet');
        }
        // verify required parameter 'statusId' is set
        if (params.statusId == null) {
            throw new Error('Missing required parameter statusId when calling serviceBoardsIdStatusesStatusIdGet');
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
     * @param statusId
     * @param operations
     */
    BoardStatusesApi.prototype.serviceBoardsIdStatusesStatusIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/statuses/{statusId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'statusId' + '}', String(params.statusId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesStatusIdPatch');
        }
        // verify required parameter 'statusId' is set
        if (params.statusId == null) {
            throw new Error('Missing required parameter statusId when calling serviceBoardsIdStatusesStatusIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceBoardsIdStatusesStatusIdPatch');
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
     * Replace Statuses
     * @param id
     * @param statusId
     * @param status
     */
    BoardStatusesApi.prototype.serviceBoardsIdStatusesStatusIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/statuses/{statusId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'statusId' + '}', String(params.statusId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesStatusIdPut');
        }
        // verify required parameter 'statusId' is set
        if (params.statusId == null) {
            throw new Error('Missing required parameter statusId when calling serviceBoardsIdStatusesStatusIdPut');
        }
        // verify required parameter 'status' is set
        if (params.status == null) {
            throw new Error('Missing required parameter status when calling serviceBoardsIdStatusesStatusIdPut');
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
    return BoardStatusesApi;
}());
exports.BoardStatusesApi = BoardStatusesApi;
//}
//export namespace  {
'use strict';
var BoardSubTypesApi = (function () {
    function BoardSubTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Subtypes Count
     * @param id
     * @param conditions
     */
    BoardSubTypesApi.prototype.serviceBoardsIdSubtypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/subtypes/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesCountGet');
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
     * Get Subtypes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    BoardSubTypesApi.prototype.serviceBoardsIdSubtypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/subtypes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesGet');
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
     * Create Subtype
     * @param id
     * @param subtype
     */
    BoardSubTypesApi.prototype.serviceBoardsIdSubtypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/subtypes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesPost');
        }
        // verify required parameter 'subtype' is set
        if (params.subtype == null) {
            throw new Error('Missing required parameter subtype when calling serviceBoardsIdSubtypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.subtype),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Subtype By Id
     * @param id
     * @param subtypeId
     */
    BoardSubTypesApi.prototype.serviceBoardsIdSubtypesSubtypeIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/subtypes/{subtypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subtypeId' + '}', String(params.subtypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesSubtypeIdDelete');
        }
        // verify required parameter 'subtypeId' is set
        if (params.subtypeId == null) {
            throw new Error('Missing required parameter subtypeId when calling serviceBoardsIdSubtypesSubtypeIdDelete');
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
     * Get Subtype By Id
     * @param id
     * @param subtypeId
     */
    BoardSubTypesApi.prototype.serviceBoardsIdSubtypesSubtypeIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/subtypes/{subtypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subtypeId' + '}', String(params.subtypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesSubtypeIdGet');
        }
        // verify required parameter 'subtypeId' is set
        if (params.subtypeId == null) {
            throw new Error('Missing required parameter subtypeId when calling serviceBoardsIdSubtypesSubtypeIdGet');
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
     * Update Subtype
     * @param id
     * @param subtypeId
     * @param operations
     */
    BoardSubTypesApi.prototype.serviceBoardsIdSubtypesSubtypeIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/subtypes/{subtypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subtypeId' + '}', String(params.subtypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesSubtypeIdPatch');
        }
        // verify required parameter 'subtypeId' is set
        if (params.subtypeId == null) {
            throw new Error('Missing required parameter subtypeId when calling serviceBoardsIdSubtypesSubtypeIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceBoardsIdSubtypesSubtypeIdPatch');
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
     * Replace Subtype
     * @param id
     * @param subtypeId
     * @param subtype
     */
    BoardSubTypesApi.prototype.serviceBoardsIdSubtypesSubtypeIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/subtypes/{subtypeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'subtypeId' + '}', String(params.subtypeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesSubtypeIdPut');
        }
        // verify required parameter 'subtypeId' is set
        if (params.subtypeId == null) {
            throw new Error('Missing required parameter subtypeId when calling serviceBoardsIdSubtypesSubtypeIdPut');
        }
        // verify required parameter 'subtype' is set
        if (params.subtype == null) {
            throw new Error('Missing required parameter subtype when calling serviceBoardsIdSubtypesSubtypeIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.subtype),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return BoardSubTypesApi;
}());
exports.BoardSubTypesApi = BoardSubTypesApi;
//}
//export namespace  {
'use strict';
var BoardTeamsApi = (function () {
    function BoardTeamsApi(basePath) {
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
    BoardTeamsApi.prototype.serviceBoardsIdTeamsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/teams/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsCountGet');
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
    BoardTeamsApi.prototype.serviceBoardsIdTeamsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/teams'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsGet');
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
    BoardTeamsApi.prototype.serviceBoardsIdTeamsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/teams'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsPost');
        }
        // verify required parameter 'team' is set
        if (params.team == null) {
            throw new Error('Missing required parameter team when calling serviceBoardsIdTeamsPost');
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
    BoardTeamsApi.prototype.serviceBoardsIdTeamsTeamIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/teams/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsTeamIdDelete');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling serviceBoardsIdTeamsTeamIdDelete');
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
    BoardTeamsApi.prototype.serviceBoardsIdTeamsTeamIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/teams/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsTeamIdGet');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling serviceBoardsIdTeamsTeamIdGet');
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
    BoardTeamsApi.prototype.serviceBoardsIdTeamsTeamIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/teams/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsTeamIdPatch');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling serviceBoardsIdTeamsTeamIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceBoardsIdTeamsTeamIdPatch');
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
    BoardTeamsApi.prototype.serviceBoardsIdTeamsTeamIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/teams/{teamId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'teamId' + '}', String(params.teamId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsTeamIdPut');
        }
        // verify required parameter 'teamId' is set
        if (params.teamId == null) {
            throw new Error('Missing required parameter teamId when calling serviceBoardsIdTeamsTeamIdPut');
        }
        // verify required parameter 'team' is set
        if (params.team == null) {
            throw new Error('Missing required parameter team when calling serviceBoardsIdTeamsTeamIdPut');
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
    return BoardTeamsApi;
}());
exports.BoardTeamsApi = BoardTeamsApi;
//}
//export namespace  {
'use strict';
var BoardTypesApi = (function () {
    function BoardTypesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Types Count
     * @param id
     * @param conditions
     */
    BoardTypesApi.prototype.serviceBoardsIdTypesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/types/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTypesCountGet');
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
     * Get Types
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    BoardTypesApi.prototype.serviceBoardsIdTypesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/types'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTypesGet');
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
     * Create Type
     * @param id
     * @param type
     */
    BoardTypesApi.prototype.serviceBoardsIdTypesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/types'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTypesPost');
        }
        // verify required parameter 'type' is set
        if (params.type == null) {
            throw new Error('Missing required parameter type when calling serviceBoardsIdTypesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.type),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Type By Id
     * @param id
     * @param typeId
     */
    BoardTypesApi.prototype.serviceBoardsIdTypesTypeIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/types/{typeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'typeId' + '}', String(params.typeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTypesTypeIdDelete');
        }
        // verify required parameter 'typeId' is set
        if (params.typeId == null) {
            throw new Error('Missing required parameter typeId when calling serviceBoardsIdTypesTypeIdDelete');
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
     * Get Type By Id
     * @param id
     * @param typeId
     */
    BoardTypesApi.prototype.serviceBoardsIdTypesTypeIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/types/{typeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'typeId' + '}', String(params.typeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTypesTypeIdGet');
        }
        // verify required parameter 'typeId' is set
        if (params.typeId == null) {
            throw new Error('Missing required parameter typeId when calling serviceBoardsIdTypesTypeIdGet');
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
     * Update Types
     * @param id
     * @param typeId
     * @param operations
     */
    BoardTypesApi.prototype.serviceBoardsIdTypesTypeIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/types/{typeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'typeId' + '}', String(params.typeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTypesTypeIdPatch');
        }
        // verify required parameter 'typeId' is set
        if (params.typeId == null) {
            throw new Error('Missing required parameter typeId when calling serviceBoardsIdTypesTypeIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceBoardsIdTypesTypeIdPatch');
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
     * Replace Types
     * @param id
     * @param typeId
     * @param type
     */
    BoardTypesApi.prototype.serviceBoardsIdTypesTypeIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/types/{typeId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'typeId' + '}', String(params.typeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTypesTypeIdPut');
        }
        // verify required parameter 'typeId' is set
        if (params.typeId == null) {
            throw new Error('Missing required parameter typeId when calling serviceBoardsIdTypesTypeIdPut');
        }
        // verify required parameter 'type' is set
        if (params.type == null) {
            throw new Error('Missing required parameter type when calling serviceBoardsIdTypesTypeIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.type),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Sub Type Association
     * @param id
     * @param typeId
     */
    BoardTypesApi.prototype.serviceBoardsIdTypesTypeIdSubTypeAssociationGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}/types/{typeId}/subTypeAssociation'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'typeId' + '}', String(params.typeId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdTypesTypeIdSubTypeAssociationGet');
        }
        // verify required parameter 'typeId' is set
        if (params.typeId == null) {
            throw new Error('Missing required parameter typeId when calling serviceBoardsIdTypesTypeIdSubTypeAssociationGet');
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
    return BoardTypesApi;
}());
exports.BoardTypesApi = BoardTypesApi;
//}
//export namespace  {
'use strict';
var BoardsApi = (function () {
    function BoardsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Boards Count
     * @param conditions
     */
    BoardsApi.prototype.serviceBoardsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/count';
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
     * Get Boards
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    BoardsApi.prototype.serviceBoardsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards';
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
     * Delete Board By Id
     * @param id
     */
    BoardsApi.prototype.serviceBoardsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdDelete');
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
     * Get Board By Id
     * @param id
     */
    BoardsApi.prototype.serviceBoardsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdGet');
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
     * Update Board
     * @param id
     * @param operations
     */
    BoardsApi.prototype.serviceBoardsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceBoardsIdPatch');
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
     * Replace Board
     * @param id
     * @param board
     */
    BoardsApi.prototype.serviceBoardsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceBoardsIdPut');
        }
        // verify required parameter 'board' is set
        if (params.board == null) {
            throw new Error('Missing required parameter board when calling serviceBoardsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.board),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Board
     * @param board
     */
    BoardsApi.prototype.serviceBoardsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/boards';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'board' is set
        if (params.board == null) {
            throw new Error('Missing required parameter board when calling serviceBoardsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.board),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return BoardsApi;
}());
exports.BoardsApi = BoardsApi;
//}
//export namespace  {
'use strict';
var CodesApi = (function () {
    function CodesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Create Codes Count
     * @param conditions
     */
    CodesApi.prototype.serviceCodesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/codes/count';
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
     * Get Codes
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    CodesApi.prototype.serviceCodesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/codes';
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
     * Delete Code By Id
     * @param id
     */
    CodesApi.prototype.serviceCodesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/codes/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceCodesIdDelete');
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
     * Get Code By Id
     * @param id
     */
    CodesApi.prototype.serviceCodesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/codes/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceCodesIdGet');
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
     * Update Code
     * @param id
     * @param operations
     */
    CodesApi.prototype.serviceCodesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/codes/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceCodesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceCodesIdPatch');
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
     * Replace Code
     * @param id
     * @param code
     */
    CodesApi.prototype.serviceCodesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/codes/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceCodesIdPut');
        }
        // verify required parameter 'code' is set
        if (params.code == null) {
            throw new Error('Missing required parameter code when calling serviceCodesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.code),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Codes
     * @param code
     */
    CodesApi.prototype.serviceCodesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/codes';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'code' is set
        if (params.code == null) {
            throw new Error('Missing required parameter code when calling serviceCodesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.code),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return CodesApi;
}());
exports.CodesApi = CodesApi;
//}
//export namespace  {
'use strict';
var KnowledgeBaseArticlesApi = (function () {
    function KnowledgeBaseArticlesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Knowledge Base Articles Count
     * @param conditions
     */
    KnowledgeBaseArticlesApi.prototype.serviceKnowledgeBaseArticlesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/knowledgeBaseArticles/count';
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
     * Get Knowledge Base Articles
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    KnowledgeBaseArticlesApi.prototype.serviceKnowledgeBaseArticlesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/knowledgeBaseArticles';
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
     * Delete Knowledge Base Article By Id
     * @param id
     */
    KnowledgeBaseArticlesApi.prototype.serviceKnowledgeBaseArticlesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/knowledgeBaseArticles/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceKnowledgeBaseArticlesIdDelete');
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
     * Get Knowledge Base Article By Id
     * @param id
     */
    KnowledgeBaseArticlesApi.prototype.serviceKnowledgeBaseArticlesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/knowledgeBaseArticles/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceKnowledgeBaseArticlesIdGet');
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
     * Update Knowledge Base Article
     * @param id
     * @param operations
     */
    KnowledgeBaseArticlesApi.prototype.serviceKnowledgeBaseArticlesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/knowledgeBaseArticles/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceKnowledgeBaseArticlesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceKnowledgeBaseArticlesIdPatch');
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
     * Replace Knowledge Base Article
     * @param id
     * @param knowledgeBaseArticle
     */
    KnowledgeBaseArticlesApi.prototype.serviceKnowledgeBaseArticlesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/knowledgeBaseArticles/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceKnowledgeBaseArticlesIdPut');
        }
        // verify required parameter 'knowledgeBaseArticle' is set
        if (params.knowledgeBaseArticle == null) {
            throw new Error('Missing required parameter knowledgeBaseArticle when calling serviceKnowledgeBaseArticlesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.knowledgeBaseArticle),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Knowledge Base Article
     * @param knowledgeBaseArticle
     */
    KnowledgeBaseArticlesApi.prototype.serviceKnowledgeBaseArticlesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/knowledgeBaseArticles';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'knowledgeBaseArticle' is set
        if (params.knowledgeBaseArticle == null) {
            throw new Error('Missing required parameter knowledgeBaseArticle when calling serviceKnowledgeBaseArticlesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.knowledgeBaseArticle),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return KnowledgeBaseArticlesApi;
}());
exports.KnowledgeBaseArticlesApi = KnowledgeBaseArticlesApi;
//}
//export namespace  {
'use strict';
var LocationsApi = (function () {
    function LocationsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Create Locations Count
     * @param conditions
     */
    LocationsApi.prototype.serviceLocationsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/locations/count';
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
     * Get Locations
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    LocationsApi.prototype.serviceLocationsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/locations';
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
     * Delete Location By Id
     * @param id
     */
    LocationsApi.prototype.serviceLocationsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/locations/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceLocationsIdDelete');
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
     * Get Location By Id
     * @param id
     */
    LocationsApi.prototype.serviceLocationsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/locations/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceLocationsIdGet');
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
     * Update Location
     * @param id
     * @param operations
     */
    LocationsApi.prototype.serviceLocationsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/locations/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceLocationsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceLocationsIdPatch');
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
     * Replace Location
     * @param id
     * @param location
     */
    LocationsApi.prototype.serviceLocationsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/locations/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceLocationsIdPut');
        }
        // verify required parameter 'location' is set
        if (params.location == null) {
            throw new Error('Missing required parameter location when calling serviceLocationsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.location),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Location
     * @param location
     */
    LocationsApi.prototype.serviceLocationsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/locations';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'location' is set
        if (params.location == null) {
            throw new Error('Missing required parameter location when calling serviceLocationsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.location),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return LocationsApi;
}());
exports.LocationsApi = LocationsApi;
//}
//export namespace  {
'use strict';
var PrioritiesApi = (function () {
    function PrioritiesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Create Priorities Count
     * @param conditions
     */
    PrioritiesApi.prototype.servicePrioritiesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/priorities/count';
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
     * Get Priorities
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    PrioritiesApi.prototype.servicePrioritiesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/priorities';
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
     * Delete Priority By Id
     * @param id
     */
    PrioritiesApi.prototype.servicePrioritiesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/priorities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling servicePrioritiesIdDelete');
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
     * Get Priority By Id
     * @param id
     */
    PrioritiesApi.prototype.servicePrioritiesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/priorities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling servicePrioritiesIdGet');
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
     * Get Priority Image
     * @param id
     * @param useDefaultFlag
     * @param lastModified
     */
    PrioritiesApi.prototype.servicePrioritiesIdImageGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/priorities/{id}/image'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling servicePrioritiesIdImageGet');
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
     * Update Priority
     * @param id
     * @param operations
     */
    PrioritiesApi.prototype.servicePrioritiesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/priorities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling servicePrioritiesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling servicePrioritiesIdPatch');
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
     * Replace Priority
     * @param id
     * @param priority
     */
    PrioritiesApi.prototype.servicePrioritiesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/priorities/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling servicePrioritiesIdPut');
        }
        // verify required parameter 'priority' is set
        if (params.priority == null) {
            throw new Error('Missing required parameter priority when calling servicePrioritiesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.priority),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Priority
     * @param priority
     */
    PrioritiesApi.prototype.servicePrioritiesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/priorities';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'priority' is set
        if (params.priority == null) {
            throw new Error('Missing required parameter priority when calling servicePrioritiesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.priority),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return PrioritiesApi;
}());
exports.PrioritiesApi = PrioritiesApi;
//}
//export namespace  {
'use strict';
var SourcesApi = (function () {
    function SourcesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Create Sources Count
     * @param conditions
     */
    SourcesApi.prototype.serviceSourcesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/sources/count';
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
     * Get Sources
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    SourcesApi.prototype.serviceSourcesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/sources';
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
     * Delete Source By Id
     * @param id
     */
    SourcesApi.prototype.serviceSourcesIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/sources/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSourcesIdDelete');
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
     * Get Source By Id
     * @param id
     */
    SourcesApi.prototype.serviceSourcesIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/sources/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSourcesIdGet');
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
     * Update Source
     * @param id
     * @param operations
     */
    SourcesApi.prototype.serviceSourcesIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/sources/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSourcesIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceSourcesIdPatch');
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
     * Replace Source
     * @param id
     * @param source
     */
    SourcesApi.prototype.serviceSourcesIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/sources/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSourcesIdPut');
        }
        // verify required parameter 'source' is set
        if (params.source == null) {
            throw new Error('Missing required parameter source when calling serviceSourcesIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.source),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Source
     * @param source
     */
    SourcesApi.prototype.serviceSourcesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/sources';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'source' is set
        if (params.source == null) {
            throw new Error('Missing required parameter source when calling serviceSourcesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.source),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return SourcesApi;
}());
exports.SourcesApi = SourcesApi;
//}
//export namespace  {
'use strict';
var SurveyQuestionsApi = (function () {
    function SurveyQuestionsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Survey Questions Count
     * @param id
     * @param conditions
     */
    SurveyQuestionsApi.prototype.serviceSurveysIdQuestionsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/questions/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsCountGet');
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
     * Get Survey Questions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    SurveyQuestionsApi.prototype.serviceSurveysIdQuestionsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/questions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsGet');
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
     * Create Survey Question
     * @param id
     * @param surveyQuestion
     */
    SurveyQuestionsApi.prototype.serviceSurveysIdQuestionsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/questions'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsPost');
        }
        // verify required parameter 'surveyQuestion' is set
        if (params.surveyQuestion == null) {
            throw new Error('Missing required parameter surveyQuestion when calling serviceSurveysIdQuestionsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.surveyQuestion),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Survey Question By Id
     * @param id
     * @param questionId
     */
    SurveyQuestionsApi.prototype.serviceSurveysIdQuestionsQuestionIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/questions/{questionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'questionId' + '}', String(params.questionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsQuestionIdDelete');
        }
        // verify required parameter 'questionId' is set
        if (params.questionId == null) {
            throw new Error('Missing required parameter questionId when calling serviceSurveysIdQuestionsQuestionIdDelete');
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
     * Get Survey Question By Id
     * @param id
     * @param questionId
     */
    SurveyQuestionsApi.prototype.serviceSurveysIdQuestionsQuestionIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/questions/{questionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'questionId' + '}', String(params.questionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsQuestionIdGet');
        }
        // verify required parameter 'questionId' is set
        if (params.questionId == null) {
            throw new Error('Missing required parameter questionId when calling serviceSurveysIdQuestionsQuestionIdGet');
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
     * Update Survey Question
     * @param id
     * @param questionId
     * @param operations
     */
    SurveyQuestionsApi.prototype.serviceSurveysIdQuestionsQuestionIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/questions/{questionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'questionId' + '}', String(params.questionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsQuestionIdPatch');
        }
        // verify required parameter 'questionId' is set
        if (params.questionId == null) {
            throw new Error('Missing required parameter questionId when calling serviceSurveysIdQuestionsQuestionIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceSurveysIdQuestionsQuestionIdPatch');
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
     * Replace Survey Question
     * @param id
     * @param questionId
     * @param surveyQuestion
     */
    SurveyQuestionsApi.prototype.serviceSurveysIdQuestionsQuestionIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/questions/{questionId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'questionId' + '}', String(params.questionId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsQuestionIdPut');
        }
        // verify required parameter 'questionId' is set
        if (params.questionId == null) {
            throw new Error('Missing required parameter questionId when calling serviceSurveysIdQuestionsQuestionIdPut');
        }
        // verify required parameter 'surveyQuestion' is set
        if (params.surveyQuestion == null) {
            throw new Error('Missing required parameter surveyQuestion when calling serviceSurveysIdQuestionsQuestionIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.surveyQuestion),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return SurveyQuestionsApi;
}());
exports.SurveyQuestionsApi = SurveyQuestionsApi;
//}
//export namespace  {
'use strict';
var SurveyResultsApi = (function () {
    function SurveyResultsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Survey Results Count
     * @param id
     * @param conditions
     */
    SurveyResultsApi.prototype.serviceSurveysIdResultsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/results/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdResultsCountGet');
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
     * Get Survey Results
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    SurveyResultsApi.prototype.serviceSurveysIdResultsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/results'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdResultsGet');
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
     * Create Survey Result
     * @param id
     * @param surveyResult
     */
    SurveyResultsApi.prototype.serviceSurveysIdResultsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/results'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdResultsPost');
        }
        // verify required parameter 'surveyResult' is set
        if (params.surveyResult == null) {
            throw new Error('Missing required parameter surveyResult when calling serviceSurveysIdResultsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.surveyResult),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Survey Result By Id
     * @param id
     * @param resultId
     */
    SurveyResultsApi.prototype.serviceSurveysIdResultsResultIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/results/{resultId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'resultId' + '}', String(params.resultId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdResultsResultIdDelete');
        }
        // verify required parameter 'resultId' is set
        if (params.resultId == null) {
            throw new Error('Missing required parameter resultId when calling serviceSurveysIdResultsResultIdDelete');
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
     * Get Survey Result By Id
     * @param id
     * @param resultId
     */
    SurveyResultsApi.prototype.serviceSurveysIdResultsResultIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/results/{resultId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'resultId' + '}', String(params.resultId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdResultsResultIdGet');
        }
        // verify required parameter 'resultId' is set
        if (params.resultId == null) {
            throw new Error('Missing required parameter resultId when calling serviceSurveysIdResultsResultIdGet');
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
     * Update Survey Result
     * @param id
     * @param resultId
     * @param operations
     */
    SurveyResultsApi.prototype.serviceSurveysIdResultsResultIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/results/{resultId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'resultId' + '}', String(params.resultId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdResultsResultIdPatch');
        }
        // verify required parameter 'resultId' is set
        if (params.resultId == null) {
            throw new Error('Missing required parameter resultId when calling serviceSurveysIdResultsResultIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceSurveysIdResultsResultIdPatch');
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
     * Replace Survey Result
     * @param id
     * @param resultId
     * @param surveyResult
     */
    SurveyResultsApi.prototype.serviceSurveysIdResultsResultIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}/results/{resultId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'resultId' + '}', String(params.resultId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdResultsResultIdPut');
        }
        // verify required parameter 'resultId' is set
        if (params.resultId == null) {
            throw new Error('Missing required parameter resultId when calling serviceSurveysIdResultsResultIdPut');
        }
        // verify required parameter 'surveyResult' is set
        if (params.surveyResult == null) {
            throw new Error('Missing required parameter surveyResult when calling serviceSurveysIdResultsResultIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.surveyResult),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return SurveyResultsApi;
}());
exports.SurveyResultsApi = SurveyResultsApi;
//}
//export namespace  {
'use strict';
var SurveysApi = (function () {
    function SurveysApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Surveys Count
     * @param conditions
     */
    SurveysApi.prototype.serviceSurveysCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/count';
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
     * Get Surveys
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    SurveysApi.prototype.serviceSurveysGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys';
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
     * Delete Survey By Id
     * @param id
     */
    SurveysApi.prototype.serviceSurveysIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdDelete');
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
     * Get Survey By Id
     * @param id
     */
    SurveysApi.prototype.serviceSurveysIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdGet');
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
     * Update Survey
     * @param id
     * @param operations
     */
    SurveysApi.prototype.serviceSurveysIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceSurveysIdPatch');
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
     * Replace Survey
     * @param id
     * @param survey
     */
    SurveysApi.prototype.serviceSurveysIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceSurveysIdPut');
        }
        // verify required parameter 'survey' is set
        if (params.survey == null) {
            throw new Error('Missing required parameter survey when calling serviceSurveysIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.survey),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Survey
     * @param survey
     */
    SurveysApi.prototype.serviceSurveysPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/surveys';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'survey' is set
        if (params.survey == null) {
            throw new Error('Missing required parameter survey when calling serviceSurveysPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.survey),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return SurveysApi;
}());
exports.SurveysApi = SurveysApi;
//}
//export namespace  {
'use strict';
var TicketNotesApi = (function () {
    function TicketNotesApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Service Notes Count
     * @param id
     * @param conditions
     */
    TicketNotesApi.prototype.serviceTicketsIdNotesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/notes/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdNotesCountGet');
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
     * Get Service Notes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    TicketNotesApi.prototype.serviceTicketsIdNotesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/notes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdNotesGet');
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
     * Delete Service Note By Id
     * @param id
     * @param noteId
     */
    TicketNotesApi.prototype.serviceTicketsIdNotesNoteIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdNotesNoteIdDelete');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling serviceTicketsIdNotesNoteIdDelete');
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
     * Get Service Note By Id
     * @param id
     * @param noteId
     */
    TicketNotesApi.prototype.serviceTicketsIdNotesNoteIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdNotesNoteIdGet');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling serviceTicketsIdNotesNoteIdGet');
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
     * Update Service Note
     * @param id
     * @param noteId
     * @param operations
     */
    TicketNotesApi.prototype.serviceTicketsIdNotesNoteIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdNotesNoteIdPatch');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling serviceTicketsIdNotesNoteIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceTicketsIdNotesNoteIdPatch');
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
     * Replace Service Note
     * @param id
     * @param noteId
     * @param serviceNote
     */
    TicketNotesApi.prototype.serviceTicketsIdNotesNoteIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/notes/{noteId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'noteId' + '}', String(params.noteId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdNotesNoteIdPut');
        }
        // verify required parameter 'noteId' is set
        if (params.noteId == null) {
            throw new Error('Missing required parameter noteId when calling serviceTicketsIdNotesNoteIdPut');
        }
        // verify required parameter 'serviceNote' is set
        if (params.serviceNote == null) {
            throw new Error('Missing required parameter serviceNote when calling serviceTicketsIdNotesNoteIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.serviceNote),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Create Service Note
     * @param id
     * @param serviceNote
     */
    TicketNotesApi.prototype.serviceTicketsIdNotesPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/notes'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdNotesPost');
        }
        // verify required parameter 'serviceNote' is set
        if (params.serviceNote == null) {
            throw new Error('Missing required parameter serviceNote when calling serviceTicketsIdNotesPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.serviceNote),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return TicketNotesApi;
}());
exports.TicketNotesApi = TicketNotesApi;
//}
//export namespace  {
'use strict';
var TicketTasksApi = (function () {
    function TicketTasksApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Tasks Count
     * @param id
     * @param conditions
     */
    TicketTasksApi.prototype.serviceTicketsIdTasksCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/tasks/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdTasksCountGet');
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
     * Get Tasks
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    TicketTasksApi.prototype.serviceTicketsIdTasksGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/tasks'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdTasksGet');
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
     * Create Task
     * @param id
     * @param task
     */
    TicketTasksApi.prototype.serviceTicketsIdTasksPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/tasks'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdTasksPost');
        }
        // verify required parameter 'task' is set
        if (params.task == null) {
            throw new Error('Missing required parameter task when calling serviceTicketsIdTasksPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.task),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Delete Task By Id
     * @param id
     * @param taskId
     */
    TicketTasksApi.prototype.serviceTicketsIdTasksTaskIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/tasks/{taskId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'taskId' + '}', String(params.taskId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdTasksTaskIdDelete');
        }
        // verify required parameter 'taskId' is set
        if (params.taskId == null) {
            throw new Error('Missing required parameter taskId when calling serviceTicketsIdTasksTaskIdDelete');
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
     * Get Task By Id
     * @param id
     * @param taskId
     */
    TicketTasksApi.prototype.serviceTicketsIdTasksTaskIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/tasks/{taskId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'taskId' + '}', String(params.taskId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdTasksTaskIdGet');
        }
        // verify required parameter 'taskId' is set
        if (params.taskId == null) {
            throw new Error('Missing required parameter taskId when calling serviceTicketsIdTasksTaskIdGet');
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
     * Update Task
     * @param id
     * @param taskId
     * @param operations
     */
    TicketTasksApi.prototype.serviceTicketsIdTasksTaskIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/tasks/{taskId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'taskId' + '}', String(params.taskId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdTasksTaskIdPatch');
        }
        // verify required parameter 'taskId' is set
        if (params.taskId == null) {
            throw new Error('Missing required parameter taskId when calling serviceTicketsIdTasksTaskIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceTicketsIdTasksTaskIdPatch');
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
     * Replace Task
     * @param id
     * @param taskId
     * @param task
     */
    TicketTasksApi.prototype.serviceTicketsIdTasksTaskIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/tasks/{taskId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'taskId' + '}', String(params.taskId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdTasksTaskIdPut');
        }
        // verify required parameter 'taskId' is set
        if (params.taskId == null) {
            throw new Error('Missing required parameter taskId when calling serviceTicketsIdTasksTaskIdPut');
        }
        // verify required parameter 'task' is set
        if (params.task == null) {
            throw new Error('Missing required parameter task when calling serviceTicketsIdTasksTaskIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.task),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return TicketTasksApi;
}());
exports.TicketTasksApi = TicketTasksApi;
//}
//export namespace  {
'use strict';
var TicketsApi = (function () {
    function TicketsApi(basePath) {
        this.basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        this.defaultHeaders = {};
        if (basePath) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * Get Tickets Count
     * @param conditions
     */
    TicketsApi.prototype.serviceTicketsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/count';
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
     * Get Tickets
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    TicketsApi.prototype.serviceTicketsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets';
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
     * Get Ticket Activities Count
     * @param id
     */
    TicketsApi.prototype.serviceTicketsIdActivitiesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/activities/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdActivitiesCountGet');
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
     * Get Ticket Activities
     * @param id
     * @param page
     * @param pageSize
     */
    TicketsApi.prototype.serviceTicketsIdActivitiesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/activities'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdActivitiesGet');
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
     * @param configId
     */
    TicketsApi.prototype.serviceTicketsIdConfigurationsConfigIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/configurations/{configId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'configId' + '}', String(params.configId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdConfigurationsConfigIdDelete');
        }
        // verify required parameter 'configId' is set
        if (params.configId == null) {
            throw new Error('Missing required parameter configId when calling serviceTicketsIdConfigurationsConfigIdDelete');
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
     * @param configId
     */
    TicketsApi.prototype.serviceTicketsIdConfigurationsConfigIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/configurations/{configId}'
            .replace('{' + 'id' + '}', String(params.id))
            .replace('{' + 'configId' + '}', String(params.configId));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdConfigurationsConfigIdGet');
        }
        // verify required parameter 'configId' is set
        if (params.configId == null) {
            throw new Error('Missing required parameter configId when calling serviceTicketsIdConfigurationsConfigIdGet');
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
     * Get Ticket Configurations Count
     * @param id
     */
    TicketsApi.prototype.serviceTicketsIdConfigurationsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/configurations/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdConfigurationsCountGet');
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
     * Get Ticket Configurations
     * @param id
     * @param page
     * @param pageSize
     */
    TicketsApi.prototype.serviceTicketsIdConfigurationsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/configurations'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdConfigurationsGet');
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
    TicketsApi.prototype.serviceTicketsIdConfigurationsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/configurations'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdConfigurationsPost');
        }
        // verify required parameter 'configuration' is set
        if (params.configuration == null) {
            throw new Error('Missing required parameter configuration when calling serviceTicketsIdConfigurationsPost');
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
     * Delete Ticket By Id
     * @param id
     */
    TicketsApi.prototype.serviceTicketsIdDelete = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdDelete');
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
     * Get Ticket Documents Count
     * @param id
     */
    TicketsApi.prototype.serviceTicketsIdDocumentsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/documents/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdDocumentsCountGet');
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
     * Get Ticket Documents
     * @param id
     * @param page
     * @param pageSize
     */
    TicketsApi.prototype.serviceTicketsIdDocumentsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/documents'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdDocumentsGet');
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
     * Get Ticket By Id
     * @param id
     */
    TicketsApi.prototype.serviceTicketsIdGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdGet');
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
     * Update Ticket
     * @param id
     * @param operations
     */
    TicketsApi.prototype.serviceTicketsIdPatch = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdPatch');
        }
        // verify required parameter 'operations' is set
        if (params.operations == null) {
            throw new Error('Missing required parameter operations when calling serviceTicketsIdPatch');
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
     * Get Ticket Products Count
     * @param id
     */
    TicketsApi.prototype.serviceTicketsIdProductsCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/products/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdProductsCountGet');
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
     * Get Ticket Products
     * @param id
     * @param page
     * @param pageSize
     */
    TicketsApi.prototype.serviceTicketsIdProductsGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/products'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdProductsGet');
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
     * Replace Ticket
     * @param id
     * @param ticket
     */
    TicketsApi.prototype.serviceTicketsIdPut = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdPut');
        }
        // verify required parameter 'ticket' is set
        if (params.ticket == null) {
            throw new Error('Missing required parameter ticket when calling serviceTicketsIdPut');
        }
        var fetchParams = {
            method: 'PUT',
            headers: headerParams,
            body: JSON.stringify(params.ticket),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Get Ticket Schedule Entries Count
     * @param id
     */
    TicketsApi.prototype.serviceTicketsIdScheduleentriesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/scheduleentries/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdScheduleentriesCountGet');
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
     * Get Ticket Schedule Entries
     * @param id
     * @param page
     * @param pageSize
     */
    TicketsApi.prototype.serviceTicketsIdScheduleentriesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/scheduleentries'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdScheduleentriesGet');
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
     * Get Ticket Time Entries Count
     * @param id
     */
    TicketsApi.prototype.serviceTicketsIdTimeentriesCountGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/timeentries/count'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdTimeentriesCountGet');
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
     * Get Ticket Time Entries
     * @param id
     * @param page
     * @param pageSize
     */
    TicketsApi.prototype.serviceTicketsIdTimeentriesGet = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/{id}/timeentries'
            .replace('{' + 'id' + '}', String(params.id));
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is set
        if (params.id == null) {
            throw new Error('Missing required parameter id when calling serviceTicketsIdTimeentriesGet');
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
     * Create Ticket
     * @param ticket
     */
    TicketsApi.prototype.serviceTicketsPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'ticket' is set
        if (params.ticket == null) {
            throw new Error('Missing required parameter ticket when calling serviceTicketsPost');
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.ticket),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    /**
     *
     * Ticket Search
     * @param filterValues
     * @param page
     * @param pageSize
     */
    TicketsApi.prototype.serviceTicketsSearchPost = function (params, extraQueryParams, extraFetchParams) {
        var localVarPath = this.basePath + '/service/tickets/search';
        var queryParameters = assign_1.assign({}, extraQueryParams);
        var headerParams = assign_1.assign({}, this.defaultHeaders);
        headerParams['Content-Type'] = 'application/json';
        // verify required parameter 'filterValues' is set
        if (params.filterValues == null) {
            throw new Error('Missing required parameter filterValues when calling serviceTicketsSearchPost');
        }
        if (params.page !== undefined) {
            queryParameters['page'] = params.page;
        }
        if (params.pageSize !== undefined) {
            queryParameters['pageSize'] = params.pageSize;
        }
        var fetchParams = {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(params.filterValues),
        };
        if (extraFetchParams) {
            fetchParams = assign_1.assign(fetchParams, extraFetchParams);
        }
        var localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);
        return fetch(localVarPathWithQueryParameters, fetchParams).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            else {
                var error = new Error(response.statusText);
                error['response'] = response;
                throw error;
            }
        });
    };
    return TicketsApi;
}());
exports.TicketsApi = TicketsApi;
//}
