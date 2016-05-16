///<reference path="../../typings/main.d.ts"/>
import * as querystring from 'querystring';
import * as fetch from 'isomorphic-fetch';
import {assign} from './assign';


export interface ActivityReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Campaign {
    "id"?: number;
    "name": string;
    "type": CampaignTypeReference;
    "subType": CampaignSubTypeReference;
    "status"?: CampaignStatusReference;
    "startDate": Date;
    "endDate"?: Date;
    "locationId"?: number;
    "member"?: MemberReference;
    "inactive"?: boolean;
    "inactiveDaysAfterEnd"?: number;
    "notes"?: string;
    "defaultGroup"?: GroupReference;
    "marketingManagerDefaultTrackId"?: number;
    "opportunityDefaultTrackId"?: number;
    "impressions"?: number;
    "budgetRevenue"?: number;
    "budgetCost"?: number;
    "actualCost"?: number;
    "budgetGrossMargin"?: number;
    "budgetROI"?: number;
    "actualRevenue"?: number;
    "actualGrossMargin"?: number;
    "actualROI"?: number;
    "emailsSent"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CampaignAudit {
    "id"?: number;
    "emailsSent": number;
    "emailsUnsent"?: number;
    "documentsCreated"?: number;
    "emailSubject"?: string;
    "group"?: GroupReference;
    "campaignId"?: number;
    "createdBy"?: string;
    "dateCreated"?: string;
}

export interface CampaignStatus {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    "inactiveFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CampaignStatusReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CampaignSubType {
    "id"?: number;
    "typeId"?: number;
    "name": string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CampaignSubTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CampaignType {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CampaignTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Count {
    "count"?: number;
}

export interface EmailOpened {
    "id"?: number;
    "campaignId"?: number;
    "contactId": number;
    "dateOpened"?: Date;
}

export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
}

export interface FormSubmitted {
    "id"?: number;
    "campaignId"?: number;
    "contactId": number;
    "dateSubmitted"?: Date;
    "url": string;
    "queryString"?: string;
    "pageType"?: string;
    "pageSubType"?: string;
    "topic"?: string;
    "version"?: string;
    "status"?: string;
}

export interface Group {
    "id"?: number;
    "name": string;
    "publicDescription"?: string;
    "publicFlag"?: boolean;
    "inactiveFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface GroupReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface LinkClicked {
    "id"?: number;
    "campaignId"?: number;
    "contactId": number;
    "dateClicked"?: Date;
    "url": string;
    "queryString"?: string;
}

export interface MarketingCompany {
    "id": number;
    "groupId"?: number;
    "defaultContactFlag"?: boolean;
    "allContactsFlag"?: boolean;
    "unsubscribeFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface MarketingContact {
    "id": number;
    "groupId"?: number;
    "note"?: string;
    "unsubscribeFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface MemberReference {
    "id"?: number;
    "identifier"?: string;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

/**
 * Metadata of the entity
 */
export interface Metadata {
}

export interface OpportunityReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface PatchOperation {
    "op"?: string;
    "path"?: string;
    "value"?: string;
}

export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}


//export namespace  {
    'use strict';

    export class CampaignAuditsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public marketingCampaignsIdAuditsAuditIdDelete (params: {  id: number; auditId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/audits/{auditId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'auditId' + '}', String(params.auditId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsAuditIdDelete');
            }
            // verify required parameter 'auditId' is set
            if (params.auditId == null) {
                throw new Error('Missing required parameter auditId when calling marketingCampaignsIdAuditsAuditIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Audit By Id
         * @param id 
         * @param auditId 
         */
        public marketingCampaignsIdAuditsAuditIdGet (params: {  id: number; auditId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignAudit> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/audits/{auditId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'auditId' + '}', String(params.auditId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsAuditIdGet');
            }
            // verify required parameter 'auditId' is set
            if (params.auditId == null) {
                throw new Error('Missing required parameter auditId when calling marketingCampaignsIdAuditsAuditIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Campaign Audit
         * @param id 
         * @param auditId 
         * @param operations 
         */
        public marketingCampaignsIdAuditsAuditIdPatch (params: {  id: number; auditId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignAudit> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/audits/{auditId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'auditId' + '}', String(params.auditId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Campaign Audit
         * @param id 
         * @param auditId 
         * @param campaignAudit 
         */
        public marketingCampaignsIdAuditsAuditIdPut (params: {  id: number; auditId: number; campaignAudit: CampaignAudit; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignAudit> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/audits/{auditId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'auditId' + '}', String(params.auditId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.campaignAudit),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Audits Count
         * @param id 
         * @param conditions 
         */
        public marketingCampaignsIdAuditsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/audits/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsCountGet');
            }
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Audits
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingCampaignsIdAuditsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CampaignAudit>> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/audits'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Campaign Audit
         * @param id 
         * @param campaignAudit 
         */
        public marketingCampaignsIdAuditsPost (params: {  id: number; campaignAudit: CampaignAudit; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignAudit> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/audits'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdAuditsPost');
            }
            // verify required parameter 'campaignAudit' is set
            if (params.campaignAudit == null) {
                throw new Error('Missing required parameter campaignAudit when calling marketingCampaignsIdAuditsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.campaignAudit),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class CampaignEmailsOpenedApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public marketingCampaignsIdEmailsOpenedCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedCountGet');
            }
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Delete Email Opened By Id
         * @param id 
         * @param emailOpenedId 
         */
        public marketingCampaignsIdEmailsOpenedEmailOpenedIdDelete (params: {  id: number; emailOpenedId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened/{emailOpenedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'emailOpenedId' + '}', String(params.emailOpenedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdDelete');
            }
            // verify required parameter 'emailOpenedId' is set
            if (params.emailOpenedId == null) {
                throw new Error('Missing required parameter emailOpenedId when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Email Opened By Id
         * @param id 
         * @param emailOpenedId 
         */
        public marketingCampaignsIdEmailsOpenedEmailOpenedIdGet (params: {  id: number; emailOpenedId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<EmailOpened> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened/{emailOpenedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'emailOpenedId' + '}', String(params.emailOpenedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdGet');
            }
            // verify required parameter 'emailOpenedId' is set
            if (params.emailOpenedId == null) {
                throw new Error('Missing required parameter emailOpenedId when calling marketingCampaignsIdEmailsOpenedEmailOpenedIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Email Opened
         * @param id 
         * @param emailOpenedId 
         * @param operations 
         */
        public marketingCampaignsIdEmailsOpenedEmailOpenedIdPatch (params: {  id: number; emailOpenedId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<EmailOpened> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened/{emailOpenedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'emailOpenedId' + '}', String(params.emailOpenedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Email Opened
         * @param id 
         * @param emailOpenedId 
         * @param emailOpened 
         */
        public marketingCampaignsIdEmailsOpenedEmailOpenedIdPut (params: {  id: number; emailOpenedId: number; emailOpened: EmailOpened; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<EmailOpened> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened/{emailOpenedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'emailOpenedId' + '}', String(params.emailOpenedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.emailOpened),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Emails Opened
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingCampaignsIdEmailsOpenedGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<EmailOpened>> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Email Opened
         * @param id 
         * @param emailOpened 
         */
        public marketingCampaignsIdEmailsOpenedPost (params: {  id: number; emailOpened: EmailOpened; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<EmailOpened> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/emailsOpened'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdEmailsOpenedPost');
            }
            // verify required parameter 'emailOpened' is set
            if (params.emailOpened == null) {
                throw new Error('Missing required parameter emailOpened when calling marketingCampaignsIdEmailsOpenedPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.emailOpened),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class CampaignFormsSubmittedApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public marketingCampaignsIdFormsSubmittedCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedCountGet');
            }
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Delete Form Submitted By Id
         * @param id 
         * @param formSubmittedId 
         */
        public marketingCampaignsIdFormsSubmittedFormSubmittedIdDelete (params: {  id: number; formSubmittedId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted/{formSubmittedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'formSubmittedId' + '}', String(params.formSubmittedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdDelete');
            }
            // verify required parameter 'formSubmittedId' is set
            if (params.formSubmittedId == null) {
                throw new Error('Missing required parameter formSubmittedId when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Form Submitted By Id
         * @param id 
         * @param formSubmittedId 
         */
        public marketingCampaignsIdFormsSubmittedFormSubmittedIdGet (params: {  id: number; formSubmittedId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<FormSubmitted> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted/{formSubmittedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'formSubmittedId' + '}', String(params.formSubmittedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdGet');
            }
            // verify required parameter 'formSubmittedId' is set
            if (params.formSubmittedId == null) {
                throw new Error('Missing required parameter formSubmittedId when calling marketingCampaignsIdFormsSubmittedFormSubmittedIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Form Submitted
         * @param id 
         * @param formSubmittedId 
         * @param operations 
         */
        public marketingCampaignsIdFormsSubmittedFormSubmittedIdPatch (params: {  id: number; formSubmittedId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<FormSubmitted> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted/{formSubmittedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'formSubmittedId' + '}', String(params.formSubmittedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Form Submitted
         * @param id 
         * @param formSubmittedId 
         * @param formSubmitted 
         */
        public marketingCampaignsIdFormsSubmittedFormSubmittedIdPut (params: {  id: number; formSubmittedId: number; formSubmitted: FormSubmitted; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<FormSubmitted> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted/{formSubmittedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'formSubmittedId' + '}', String(params.formSubmittedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.formSubmitted),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Forms Submitted
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingCampaignsIdFormsSubmittedGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<FormSubmitted>> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Form Submitted
         * @param id 
         * @param formSubmitted 
         */
        public marketingCampaignsIdFormsSubmittedPost (params: {  id: number; formSubmitted: FormSubmitted; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<FormSubmitted> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/formsSubmitted'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdFormsSubmittedPost');
            }
            // verify required parameter 'formSubmitted' is set
            if (params.formSubmitted == null) {
                throw new Error('Missing required parameter formSubmitted when calling marketingCampaignsIdFormsSubmittedPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.formSubmitted),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class CampaignLinksClickedApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public marketingCampaignsIdLinksClickedCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedCountGet');
            }
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Links Clicked
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingCampaignsIdLinksClickedGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<LinkClicked>> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Delete Link Clicked By Id
         * @param id 
         * @param linkClickedId 
         */
        public marketingCampaignsIdLinksClickedLinkClickedIdDelete (params: {  id: number; linkClickedId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked/{linkClickedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'linkClickedId' + '}', String(params.linkClickedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedLinkClickedIdDelete');
            }
            // verify required parameter 'linkClickedId' is set
            if (params.linkClickedId == null) {
                throw new Error('Missing required parameter linkClickedId when calling marketingCampaignsIdLinksClickedLinkClickedIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Link Clicked By Id
         * @param id 
         * @param linkClickedId 
         */
        public marketingCampaignsIdLinksClickedLinkClickedIdGet (params: {  id: number; linkClickedId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<LinkClicked> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked/{linkClickedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'linkClickedId' + '}', String(params.linkClickedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedLinkClickedIdGet');
            }
            // verify required parameter 'linkClickedId' is set
            if (params.linkClickedId == null) {
                throw new Error('Missing required parameter linkClickedId when calling marketingCampaignsIdLinksClickedLinkClickedIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Link Clicked
         * @param id 
         * @param linkClickedId 
         * @param operations 
         */
        public marketingCampaignsIdLinksClickedLinkClickedIdPatch (params: {  id: number; linkClickedId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<LinkClicked> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked/{linkClickedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'linkClickedId' + '}', String(params.linkClickedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Link Clicked
         * @param id 
         * @param linkClickedId 
         * @param linkClicked 
         */
        public marketingCampaignsIdLinksClickedLinkClickedIdPut (params: {  id: number; linkClickedId: number; linkClicked: LinkClicked; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<LinkClicked> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked/{linkClickedId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'linkClickedId' + '}', String(params.linkClickedId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.linkClicked),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Link Clicked
         * @param id 
         * @param linkClicked 
         */
        public marketingCampaignsIdLinksClickedPost (params: {  id: number; linkClicked: LinkClicked; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<LinkClicked> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/linksClicked'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdLinksClickedPost');
            }
            // verify required parameter 'linkClicked' is set
            if (params.linkClicked == null) {
                throw new Error('Missing required parameter linkClicked when calling marketingCampaignsIdLinksClickedPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.linkClicked),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class CampaignStatusesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Campaign Statuses Count
         * @param conditions 
         */
        public marketingCampaignsStatusesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/campaigns/statuses/count';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Statuses
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingCampaignsStatusesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CampaignStatus>> {
            const localVarPath = this.basePath + '/marketing/campaigns/statuses';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Delete Campaign Status By Id
         * @param id 
         */
        public marketingCampaignsStatusesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/campaigns/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsStatusesIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Status By Id
         * @param id 
         */
        public marketingCampaignsStatusesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignStatus> {
            const localVarPath = this.basePath + '/marketing/campaigns/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsStatusesIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Campaign Status
         * @param id 
         * @param operations 
         */
        public marketingCampaignsStatusesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignStatus> {
            const localVarPath = this.basePath + '/marketing/campaigns/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsStatusesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling marketingCampaignsStatusesIdPatch');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Campaign Status
         * @param id 
         * @param campaignStatus 
         */
        public marketingCampaignsStatusesIdPut (params: {  id: number; campaignStatus: CampaignStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignStatus> {
            const localVarPath = this.basePath + '/marketing/campaigns/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsStatusesIdPut');
            }
            // verify required parameter 'campaignStatus' is set
            if (params.campaignStatus == null) {
                throw new Error('Missing required parameter campaignStatus when calling marketingCampaignsStatusesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.campaignStatus),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Campaign Status
         * @param campaignStatus 
         */
        public marketingCampaignsStatusesPost (params: {  campaignStatus: CampaignStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignStatus> {
            const localVarPath = this.basePath + '/marketing/campaigns/statuses';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'campaignStatus' is set
            if (params.campaignStatus == null) {
                throw new Error('Missing required parameter campaignStatus when calling marketingCampaignsStatusesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.campaignStatus),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class CampaignSubTypesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public marketingCampaignsTypesIdSubTypesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesCountGet');
            }
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Sub Types
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingCampaignsTypesIdSubTypesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CampaignSubType>> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Campaign Sub Type
         * @param id 
         * @param campaignSubType 
         */
        public marketingCampaignsTypesIdSubTypesPost (params: {  id: number; campaignSubType: CampaignSubType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignSubType> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesPost');
            }
            // verify required parameter 'campaignSubType' is set
            if (params.campaignSubType == null) {
                throw new Error('Missing required parameter campaignSubType when calling marketingCampaignsTypesIdSubTypesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.campaignSubType),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Delete Campaign Sub Type By Id
         * @param id 
         * @param subTypeId 
         */
        public marketingCampaignsTypesIdSubTypesSubTypeIdDelete (params: {  id: number; subTypeId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes/{subTypeId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'subTypeId' + '}', String(params.subTypeId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesSubTypeIdDelete');
            }
            // verify required parameter 'subTypeId' is set
            if (params.subTypeId == null) {
                throw new Error('Missing required parameter subTypeId when calling marketingCampaignsTypesIdSubTypesSubTypeIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Sub Type By Id
         * @param id 
         * @param subTypeId 
         */
        public marketingCampaignsTypesIdSubTypesSubTypeIdGet (params: {  id: number; subTypeId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignSubType> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes/{subTypeId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'subTypeId' + '}', String(params.subTypeId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdSubTypesSubTypeIdGet');
            }
            // verify required parameter 'subTypeId' is set
            if (params.subTypeId == null) {
                throw new Error('Missing required parameter subTypeId when calling marketingCampaignsTypesIdSubTypesSubTypeIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Campaign Sub Type
         * @param id 
         * @param subTypeId 
         * @param operations 
         */
        public marketingCampaignsTypesIdSubTypesSubTypeIdPatch (params: {  id: number; subTypeId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignSubType> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes/{subTypeId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'subTypeId' + '}', String(params.subTypeId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Campaign Sub Type
         * @param id 
         * @param subTypeId 
         * @param campaignSubType 
         */
        public marketingCampaignsTypesIdSubTypesSubTypeIdPut (params: {  id: number; subTypeId: number; campaignSubType: CampaignSubType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignSubType> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}/subTypes/{subTypeId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'subTypeId' + '}', String(params.subTypeId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.campaignSubType),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class CampaignTypesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Campaign Types Count
         * @param conditions 
         */
        public marketingCampaignsTypesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/count';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Types
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingCampaignsTypesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CampaignType>> {
            const localVarPath = this.basePath + '/marketing/campaigns/types';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Delete Campaign Type By Id
         * @param id 
         */
        public marketingCampaignsTypesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Type By Id
         * @param id 
         */
        public marketingCampaignsTypesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignType> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Campaign Type
         * @param id 
         * @param operations 
         */
        public marketingCampaignsTypesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignType> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling marketingCampaignsTypesIdPatch');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Campaign Type
         * @param id 
         * @param campaignType 
         */
        public marketingCampaignsTypesIdPut (params: {  id: number; campaignType: CampaignType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignType> {
            const localVarPath = this.basePath + '/marketing/campaigns/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsTypesIdPut');
            }
            // verify required parameter 'campaignType' is set
            if (params.campaignType == null) {
                throw new Error('Missing required parameter campaignType when calling marketingCampaignsTypesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.campaignType),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Campaign Type
         * @param campaignType 
         */
        public marketingCampaignsTypesPost (params: {  campaignType: CampaignType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CampaignType> {
            const localVarPath = this.basePath + '/marketing/campaigns/types';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'campaignType' is set
            if (params.campaignType == null) {
                throw new Error('Missing required parameter campaignType when calling marketingCampaignsTypesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.campaignType),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class CampaignsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Campaigns Count
         * @param conditions 
         */
        public marketingCampaignsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/campaigns/count';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaigns
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingCampaignsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Campaign>> {
            const localVarPath = this.basePath + '/marketing/campaigns';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Activities Count
         * @param id 
         */
        public marketingCampaignsIdActivitiesCountGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/activities/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdActivitiesCountGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Activities
         * @param id 
         * @param page 
         * @param pageSize 
         */
        public marketingCampaignsIdActivitiesGet (params: {  id: number; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ActivityReference>> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/activities'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Delete Campaign By Id
         * @param id 
         */
        public marketingCampaignsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign By Id
         * @param id 
         */
        public marketingCampaignsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Campaign> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Opportunities Count
         * @param id 
         */
        public marketingCampaignsIdOpportunitiesCountGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/opportunities/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdOpportunitiesCountGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Campaign Opportunities
         * @param id 
         * @param page 
         * @param pageSize 
         */
        public marketingCampaignsIdOpportunitiesGet (params: {  id: number; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<OpportunityReference>> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}/opportunities'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Campaign
         * @param id 
         * @param operations 
         */
        public marketingCampaignsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Campaign> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling marketingCampaignsIdPatch');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Campaign
         * @param id 
         * @param campaign 
         */
        public marketingCampaignsIdPut (params: {  id: number; campaign: Campaign; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Campaign> {
            const localVarPath = this.basePath + '/marketing/campaigns/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingCampaignsIdPut');
            }
            // verify required parameter 'campaign' is set
            if (params.campaign == null) {
                throw new Error('Missing required parameter campaign when calling marketingCampaignsIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.campaign),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Campaign
         * @param campaign 
         */
        public marketingCampaignsPost (params: {  campaign: Campaign; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Campaign> {
            const localVarPath = this.basePath + '/marketing/campaigns';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'campaign' is set
            if (params.campaign == null) {
                throw new Error('Missing required parameter campaign when calling marketingCampaignsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.campaign),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class GroupCompaniesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public marketingGroupsIdCompaniesCompanyIdDelete (params: {  id: number; companyId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/companies/{companyId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'companyId' + '}', String(params.companyId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesCompanyIdDelete');
            }
            // verify required parameter 'companyId' is set
            if (params.companyId == null) {
                throw new Error('Missing required parameter companyId when calling marketingGroupsIdCompaniesCompanyIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Marketing Company By Id
         * @param id 
         * @param companyId 
         */
        public marketingGroupsIdCompaniesCompanyIdGet (params: {  id: number; companyId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MarketingCompany> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/companies/{companyId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'companyId' + '}', String(params.companyId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesCompanyIdGet');
            }
            // verify required parameter 'companyId' is set
            if (params.companyId == null) {
                throw new Error('Missing required parameter companyId when calling marketingGroupsIdCompaniesCompanyIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Marketing Company
         * @param id 
         * @param companyId 
         * @param operations 
         */
        public marketingGroupsIdCompaniesCompanyIdPatch (params: {  id: number; companyId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MarketingCompany> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/companies/{companyId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'companyId' + '}', String(params.companyId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Marketing Company
         * @param id 
         * @param companyId 
         * @param marketingCompany 
         */
        public marketingGroupsIdCompaniesCompanyIdPut (params: {  id: number; companyId: number; marketingCompany: MarketingCompany; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MarketingCompany> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/companies/{companyId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'companyId' + '}', String(params.companyId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.marketingCompany),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Marketing Companys Count
         * @param id 
         * @param conditions 
         */
        public marketingGroupsIdCompaniesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/companies/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesCountGet');
            }
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Marketing Companys
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingGroupsIdCompaniesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<MarketingCompany>> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/companies'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Marketing Company
         * @param id 
         * @param marketingCompany 
         */
        public marketingGroupsIdCompaniesPost (params: {  id: number; marketingCompany: MarketingCompany; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MarketingCompany> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/companies'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdCompaniesPost');
            }
            // verify required parameter 'marketingCompany' is set
            if (params.marketingCompany == null) {
                throw new Error('Missing required parameter marketingCompany when calling marketingGroupsIdCompaniesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.marketingCompany),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class GroupContactsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public marketingGroupsIdContactsContactIdDelete (params: {  id: number; contactId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/contacts/{contactId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'contactId' + '}', String(params.contactId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdContactsContactIdDelete');
            }
            // verify required parameter 'contactId' is set
            if (params.contactId == null) {
                throw new Error('Missing required parameter contactId when calling marketingGroupsIdContactsContactIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Marketing Contact By Id
         * @param id 
         * @param contactId 
         */
        public marketingGroupsIdContactsContactIdGet (params: {  id: number; contactId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MarketingContact> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/contacts/{contactId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'contactId' + '}', String(params.contactId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdContactsContactIdGet');
            }
            // verify required parameter 'contactId' is set
            if (params.contactId == null) {
                throw new Error('Missing required parameter contactId when calling marketingGroupsIdContactsContactIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Marketing Contact
         * @param id 
         * @param contactId 
         * @param operations 
         */
        public marketingGroupsIdContactsContactIdPatch (params: {  id: number; contactId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MarketingContact> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/contacts/{contactId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'contactId' + '}', String(params.contactId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Marketing Contact
         * @param id 
         * @param contactId 
         * @param marketingContact 
         */
        public marketingGroupsIdContactsContactIdPut (params: {  id: number; contactId: number; marketingContact: MarketingContact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MarketingContact> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/contacts/{contactId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'contactId' + '}', String(params.contactId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.marketingContact),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Marketing Contacts Count
         * @param id 
         * @param conditions 
         */
        public marketingGroupsIdContactsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/contacts/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdContactsCountGet');
            }
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Marketing Contacts
         * @param id 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingGroupsIdContactsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<MarketingContact>> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/contacts'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Marketing Contact
         * @param id 
         * @param marketingContact 
         */
        public marketingGroupsIdContactsPost (params: {  id: number; marketingContact: MarketingContact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MarketingContact> {
            const localVarPath = this.basePath + '/marketing/groups/{id}/contacts'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdContactsPost');
            }
            // verify required parameter 'marketingContact' is set
            if (params.marketingContact == null) {
                throw new Error('Missing required parameter marketingContact when calling marketingGroupsIdContactsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.marketingContact),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class GroupsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Groups Count
         * @param conditions 
         */
        public marketingGroupsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/marketing/groups/count';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Groups
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public marketingGroupsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Group>> {
            const localVarPath = this.basePath + '/marketing/groups';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Delete Group By Id
         * @param id 
         */
        public marketingGroupsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/marketing/groups/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdDelete');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Get Group By Id
         * @param id 
         */
        public marketingGroupsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Group> {
            const localVarPath = this.basePath + '/marketing/groups/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdGet');
            }
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Update Group
         * @param id 
         * @param operations 
         */
        public marketingGroupsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Group> {
            const localVarPath = this.basePath + '/marketing/groups/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling marketingGroupsIdPatch');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Replace Group
         * @param id 
         * @param group 
         */
        public marketingGroupsIdPut (params: {  id: number; group: Group; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Group> {
            const localVarPath = this.basePath + '/marketing/groups/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling marketingGroupsIdPut');
            }
            // verify required parameter 'group' is set
            if (params.group == null) {
                throw new Error('Missing required parameter group when calling marketingGroupsIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.group),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * Create Group
         * @param group 
         */
        public marketingGroupsPost (params: {  group: Group; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Group> {
            const localVarPath = this.basePath + '/marketing/groups';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'group' is set
            if (params.group == null) {
                throw new Error('Missing required parameter group when calling marketingGroupsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.group),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
    }
//}
