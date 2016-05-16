import * as querystring from 'querystring';
import * as fetch from 'isomorphic-fetch';
import {assign} from './assign';


export interface AuditTrailEntry {
    "text"?: string;
    "enteredDate"?: string;
    "enteredBy"?: string;
    "auditType"?: string;
    "auditSource"?: string;
}

export interface AuditTrailEntryInsertRequest {
    "text": string;
    "objects"?: Array<AuditTrailObjects>;
}

export interface AuditTrailObjects {
    "type": TypeEnum;
    "ids": Array<string>;
}


export enum TypeEnum { 
    Ticket = <any> 'Ticket',
    Configuration = <any> 'Configuration'
}
export interface CallbackEntry {
    "id"?: number;
    "url": string;
    "objectId": number;
    "type": string;
    "level": string;
    "memberId"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ConnectWiseHostedSetup {
    "id"?: number;

    /**
     * Can be obtained via ConnectWiseHostedApiScreen report
     */
    "screenId": number;
    "description": string;
    "origin"?: string;
    "url": string;
    "podHeight"?: number;
    "type": TypeEnum;
    "disabledFlag"?: boolean;
    "createdBy"?: string;
    "dateCreated"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum TypeEnum { 
    Tab = <any> 'Tab',
    Pod = <any> 'Pod'
}
export interface Count {
    "count"?: number;
}

export interface DocumentInfo {
    "id"?: number;
    "title"?: string;
    "fileName"?: string;
    "serverFileName"?: string;
    "owner"?: string;
    "linkFlag"?: boolean;
    "imageFlag"?: boolean;
    "publicFlag"?: boolean;
    "readOnlyFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
}

export interface Info {
    "version"?: string;
    "isCloud"?: boolean;
    "serverTimeZone"?: string;
}

export interface IntegrationRequest {
    "url": string;
    "actionName": string;
    "token"?: string;
    "helpUrl"?: string;
    "disabledFlag"?: boolean;
}

export interface JObject {
}

export interface Link {
    "id"?: number;
    "name": string;
    "tableReferenceId": number;
    "url"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Member {
    "id"?: number;
    "identifier"?: string;
    "emailAddress"?: string;
    "name"?: string;
    "calendarId"?: number;
    "inactiveFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface MenuEntry {
    "id"?: number;
    "menuLocation": MenuLocationReference;
    "caption": string;
    "link": string;
    "newWindowFlag": boolean;
    "locationIds"?: Array<number>;
    "origin"?: string;
    "addAllLocations"?: boolean;
    "removeAllLocations"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface MenuLocationReference {
    "id"?: number;
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

export interface PatchOperation {
    "op"?: string;
    "path"?: string;
    "value"?: string;
}

export interface Report {
    "name"?: string;
}

export interface ReportDataResponse {
    "columnDefinitions"?: Array<JObject>;
    "rowValues"?: Array<JObject>;
}

export interface Token {
    "publicKey"?: string;
    "privateKey"?: string;
    "expiration"?: string;
}

export interface UserDefinedField {

    /**
     * ID of the custom user defined field
     */
    "id"?: number;

    /**
     * Id of the Pod where the custom field will be placed
     */
    "podId": number;

    /**
     * Field caption
     */
    "caption": string;

    /**
     * Must be between 1 and 50.  This defines the order in which the custom fields will appear
     */
    "sequenceNumber": number;

    /**
     * Help text to accompany the custom field
     */
    "helpText"?: string;
    "fieldTypeIdentifier": FieldTypeIdentifierEnum;

    /**
     * Only valid for Number or percent
     */
    "numberDecimals"?: number;
    "entryTypeIdentifier"?: EntryTypeIdentifierEnum;
    "requiredFlag"?: boolean;
    "displayOnScreenFlag"?: boolean;
    "readOnlyFlag"?: boolean;

    /**
     * Denotes that this custom field is included on a list view
     */
    "listViewFlag"?: boolean;

    /**
     * Only available with Button Field Type. Required when entryTypeIdentifier is button
     */
    "buttonUrl"?: string;
    "options"?: Array<UserDefinedFieldOption>;

    /**
     * Date in UTC the custom field was created
     */
    "dateCreated"?: Date;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum FieldTypeIdentifierEnum { 
    Text = <any> 'Text',
    Button = <any> 'Button',
    Date = <any> 'Date',
    Hyperlink = <any> 'Hyperlink',
    Checkbox = <any> 'Checkbox',
    Number = <any> 'Number',
    Percent = <any> 'Percent',
    TextArea = <any> 'TextArea'
}

export enum EntryTypeIdentifierEnum { 
    EntryField = <any> 'EntryField',
    List = <any> 'List',
    Option = <any> 'Option'
}
export interface UserDefinedFieldOption {
    "id"?: number;
    "optionValue": string;
    "defaultFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "sortOrder"?: number;
}

export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}


//export namespace  {
    'use strict';

    export class AuditTrailApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public systemAudittrailCountGet (params: {  type?: string; id?: number; deviceIdentifier?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/system/audittrail/count';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.type !== undefined) {
                queryParameters['type'] = params.type;
            }

            if (params.id !== undefined) {
                queryParameters['id'] = params.id;
            }

            if (params.deviceIdentifier !== undefined) {
                queryParameters['deviceIdentifier'] = params.deviceIdentifier;
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
         * Get Audit Trail
         * @param type 
         * @param id 
         * @param deviceIdentifier 
         * @param page 
         * @param pageSize 
         */
        public systemAudittrailGet (params: {  type?: string; id?: number; deviceIdentifier?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<AuditTrailEntry>> {
            const localVarPath = this.basePath + '/system/audittrail';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
         * Insert Audit Trail Entries
         * @param insertRequest 
         */
        public systemAudittrailPost (params: {  insertRequest: AuditTrailEntryInsertRequest; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/audittrail';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'insertRequest' is set
            if (params.insertRequest == null) {
                throw new Error('Missing required parameter insertRequest when calling systemAudittrailPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.insertRequest),
                
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

    export class CallbackEntriesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Callback Entries Count
         * @param conditions 
         */
        public systemCallbacksCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/system/callbacks/count';

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
         * Get Callback Entries
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public systemCallbacksGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<CallbackEntry>> {
            const localVarPath = this.basePath + '/system/callbacks';

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
         * Delete Callback Entry By Id
         * @param id 
         */
        public systemCallbacksIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/callbacks/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemCallbacksIdDelete');
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
         * Get Callback Entry By Id
         * @param id 
         */
        public systemCallbacksIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CallbackEntry> {
            const localVarPath = this.basePath + '/system/callbacks/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemCallbacksIdGet');
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
         * Update Callback Entry
         * @param id 
         * @param operations 
         */
        public systemCallbacksIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CallbackEntry> {
            const localVarPath = this.basePath + '/system/callbacks/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemCallbacksIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling systemCallbacksIdPatch');
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
         * Replace Callback Entry
         * @param id 
         * @param callbackEntry 
         */
        public systemCallbacksIdPut (params: {  id: number; callbackEntry: CallbackEntry; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CallbackEntry> {
            const localVarPath = this.basePath + '/system/callbacks/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemCallbacksIdPut');
            }
            // verify required parameter 'callbackEntry' is set
            if (params.callbackEntry == null) {
                throw new Error('Missing required parameter callbackEntry when calling systemCallbacksIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.callbackEntry),
                
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
         * Create Callback Entry
         * @param callbackEntry 
         */
        public systemCallbacksPost (params: {  callbackEntry: CallbackEntry; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CallbackEntry> {
            const localVarPath = this.basePath + '/system/callbacks';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'callbackEntry' is set
            if (params.callbackEntry == null) {
                throw new Error('Missing required parameter callbackEntry when calling systemCallbacksPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.callbackEntry),
                
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

    export class ConnectWiseHostedSetupsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Connect Wise Hosted Setups Count
         * @param conditions 
         */
        public systemConnectwisehostedsetupsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/system/connectwisehostedsetups/count';

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
         * Get Connect Wise Hosted Setups
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public systemConnectwisehostedsetupsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ConnectWiseHostedSetup>> {
            const localVarPath = this.basePath + '/system/connectwisehostedsetups';

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
         * Delete Connect Wise Hosted Setup By Id
         * @param id 
         */
        public systemConnectwisehostedsetupsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/connectwisehostedsetups/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemConnectwisehostedsetupsIdDelete');
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
         * Get Connect Wise Hosted Setup By Id
         * @param id 
         */
        public systemConnectwisehostedsetupsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConnectWiseHostedSetup> {
            const localVarPath = this.basePath + '/system/connectwisehostedsetups/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemConnectwisehostedsetupsIdGet');
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
         * Update Connect Wise Hosted Setup
         * @param id 
         * @param operations 
         */
        public systemConnectwisehostedsetupsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConnectWiseHostedSetup> {
            const localVarPath = this.basePath + '/system/connectwisehostedsetups/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemConnectwisehostedsetupsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling systemConnectwisehostedsetupsIdPatch');
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
         * Replace Connect Wise Hosted Setup
         * @param id 
         * @param connectWiseHostedSetup 
         */
        public systemConnectwisehostedsetupsIdPut (params: {  id: number; connectWiseHostedSetup: ConnectWiseHostedSetup; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConnectWiseHostedSetup> {
            const localVarPath = this.basePath + '/system/connectwisehostedsetups/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemConnectwisehostedsetupsIdPut');
            }
            // verify required parameter 'connectWiseHostedSetup' is set
            if (params.connectWiseHostedSetup == null) {
                throw new Error('Missing required parameter connectWiseHostedSetup when calling systemConnectwisehostedsetupsIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.connectWiseHostedSetup),
                
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
         * Create Connect Wise Hosted Setup
         * @param connectWiseHostedSetup 
         */
        public systemConnectwisehostedsetupsPost (params: {  connectWiseHostedSetup: ConnectWiseHostedSetup; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConnectWiseHostedSetup> {
            const localVarPath = this.basePath + '/system/connectwisehostedsetups';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'connectWiseHostedSetup' is set
            if (params.connectWiseHostedSetup == null) {
                throw new Error('Missing required parameter connectWiseHostedSetup when calling systemConnectwisehostedsetupsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.connectWiseHostedSetup),
                
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

    export class DocumentsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public systemDocumentsCountGet (params: {  recordType?: string; recordId?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/system/documents/count';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.recordType !== undefined) {
                queryParameters['recordType'] = params.recordType;
            }

            if (params.recordId !== undefined) {
                queryParameters['recordId'] = params.recordId;
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
         * Get Documents Info
         * @param recordType 
         * @param recordId 
         * @param page 
         * @param pageSize 
         */
        public systemDocumentsGet (params: {  recordType?: string; recordId?: number; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<DocumentInfo>> {
            const localVarPath = this.basePath + '/system/documents';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
         * Delete Document Info By Id
         * @param id 
         */
        public systemDocumentsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/documents/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemDocumentsIdDelete');
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
         * Download Document
         * @param id 
         * @param lastModified 
         */
        public systemDocumentsIdDownloadGet (params: {  id: number; lastModified?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/documents/{id}/download'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemDocumentsIdDownloadGet');
            }
            if (params.lastModified !== undefined) {
                queryParameters['lastModified'] = params.lastModified;
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
         * Get Document Info By Id
         * @param id 
         */
        public systemDocumentsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<DocumentInfo> {
            const localVarPath = this.basePath + '/system/documents/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemDocumentsIdGet');
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
        public systemDocumentsIdPost (params: {  id: number; recordId: number; recordType: string; title: string; url: string; file?: any; privateFlag?: boolean; readOnlyFlag?: boolean; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<DocumentInfo> {
            const localVarPath = this.basePath + '/system/documents/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let formParams: any = {};
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

            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                                body: querystring.stringify(formParams),

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
         * Insert Document
         * @param recordId Entity id
         * @param recordType Entity type
         * @param title Document title
         * @param url Document url
         * @param file File to upload
         * @param privateFlag Indicates if document is private
         * @param readOnlyFlag Indicates if document is readonly
         */
        public systemDocumentsPost (params: {  recordId: number; recordType: string; title: string; url: string; file?: any; privateFlag?: boolean; readOnlyFlag?: boolean; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<DocumentInfo> {
            const localVarPath = this.basePath + '/system/documents';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let formParams: any = {};
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

            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                                body: querystring.stringify(formParams),

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
         * Get Upload Sample Page
         */
        public systemDocumentsUploadsampleGet (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/documents/uploadsample';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
    }
//}
//export namespace  {
    'use strict';

    export class InfoApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Infos
         */
        public systemInfoGet (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Info> {
            const localVarPath = this.basePath + '/system/info';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
    }
//}
//export namespace  {
    'use strict';

    export class IntegrationsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public systemIntegrationsIntegratorPost (params: {  integrator: string; request: IntegrationRequest; type?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/integrations/{integrator}'
                .replace('{' + 'integrator' + '}', String(params.integrator));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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

            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.request),
                
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

    export class LinksApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Links Count
         * @param conditions 
         */
        public systemLinksCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/system/links/count';

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
         * Get Links
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public systemLinksGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Link>> {
            const localVarPath = this.basePath + '/system/links';

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
         * Delete Link By Id
         * @param id 
         */
        public systemLinksIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/links/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemLinksIdDelete');
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
         * Get Link By Id
         * @param id 
         */
        public systemLinksIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Link> {
            const localVarPath = this.basePath + '/system/links/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemLinksIdGet');
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
         * Update Link
         * @param id 
         * @param operations 
         */
        public systemLinksIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Link> {
            const localVarPath = this.basePath + '/system/links/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemLinksIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling systemLinksIdPatch');
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
         * Replace Link
         * @param id 
         * @param link 
         */
        public systemLinksIdPut (params: {  id: number; link: Link; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Link> {
            const localVarPath = this.basePath + '/system/links/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemLinksIdPut');
            }
            // verify required parameter 'link' is set
            if (params.link == null) {
                throw new Error('Missing required parameter link when calling systemLinksIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.link),
                
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
         * Create Link
         * @param link 
         */
        public systemLinksPost (params: {  link: Link; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Link> {
            const localVarPath = this.basePath + '/system/links';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'link' is set
            if (params.link == null) {
                throw new Error('Missing required parameter link when calling systemLinksPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.link),
                
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

    export class MembersApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Members Count
         * @param conditions 
         */
        public systemMembersCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/system/members/count';

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
         * Get Members
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public systemMembersGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Member>> {
            const localVarPath = this.basePath + '/system/members';

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
         * Get Member By Id
         * @param memberIdentifier 
         */
        public systemMembersMemberIdentifierGet (params: {  memberIdentifier: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Member> {
            const localVarPath = this.basePath + '/system/members/{memberIdentifier}'
                .replace('{' + 'memberIdentifier' + '}', String(params.memberIdentifier));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'memberIdentifier' is set
            if (params.memberIdentifier == null) {
                throw new Error('Missing required parameter memberIdentifier when calling systemMembersMemberIdentifierGet');
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
         * Get Member Image
         * @param memberIdentifier 
         * @param useDefaultFlag 
         * @param lastmodified 
         */
        public systemMembersMemberIdentifierImageGet (params: {  memberIdentifier: string; useDefaultFlag?: boolean; lastmodified?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/members/{memberIdentifier}/image'
                .replace('{' + 'memberIdentifier' + '}', String(params.memberIdentifier));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
         * Create Token By Member Identifier
         * @param memberIdentifier 
         */
        public systemMembersMemberIdentifierTokensPost (params: {  memberIdentifier: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Token> {
            const localVarPath = this.basePath + '/system/members/{memberIdentifier}/tokens'
                .replace('{' + 'memberIdentifier' + '}', String(params.memberIdentifier));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'memberIdentifier' is set
            if (params.memberIdentifier == null) {
                throw new Error('Missing required parameter memberIdentifier when calling systemMembersMemberIdentifierTokensPost');
            }
            let fetchParams = {
                method: 'POST',
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
    }
//}
//export namespace  {
    'use strict';

    export class MenuEntriesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Menu Entries Count
         * @param conditions 
         */
        public systemMenuentriesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/system/menuentries/count';

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
         * Get Menu Entries
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public systemMenuentriesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<MenuEntry>> {
            const localVarPath = this.basePath + '/system/menuentries';

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
         * Delete Menu Entry By Id
         * @param id 
         */
        public systemMenuentriesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/menuentries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemMenuentriesIdDelete');
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
         * Get Menu Entry By Id
         * @param id 
         */
        public systemMenuentriesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MenuEntry> {
            const localVarPath = this.basePath + '/system/menuentries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemMenuentriesIdGet');
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
         * Get Menu Entry Image
         * @param id 
         * @param lastmodified 
         * @param largeFlag 
         */
        public systemMenuentriesIdImageGet (params: {  id: number; lastmodified?: string; largeFlag?: boolean; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/menuentries/{id}/image'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
         * Upload Menu Entry Image
         * @param id 
         */
        public systemMenuentriesIdImagePost (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/menuentries/{id}/image'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemMenuentriesIdImagePost');
            }
            let fetchParams = {
                method: 'POST',
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
         * Update Menu Entry
         * @param id 
         * @param operations 
         */
        public systemMenuentriesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MenuEntry> {
            const localVarPath = this.basePath + '/system/menuentries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemMenuentriesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling systemMenuentriesIdPatch');
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
         * Replace Menu Entry
         * @param id 
         * @param menuEntry 
         */
        public systemMenuentriesIdPut (params: {  id: number; menuEntry: MenuEntry; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MenuEntry> {
            const localVarPath = this.basePath + '/system/menuentries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemMenuentriesIdPut');
            }
            // verify required parameter 'menuEntry' is set
            if (params.menuEntry == null) {
                throw new Error('Missing required parameter menuEntry when calling systemMenuentriesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.menuEntry),
                
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
         * Create Menu Entry
         * @param menuEntry 
         */
        public systemMenuentriesPost (params: {  menuEntry: MenuEntry; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<MenuEntry> {
            const localVarPath = this.basePath + '/system/menuentries';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'menuEntry' is set
            if (params.menuEntry == null) {
                throw new Error('Missing required parameter menuEntry when calling systemMenuentriesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.menuEntry),
                
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

    export class ReportsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
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
        public systemReportsGet (params: {  conditions?: string; orderBy?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Report>> {
            const localVarPath = this.basePath + '/system/reports';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.conditions !== undefined) {
                queryParameters['conditions'] = params.conditions;
            }

            if (params.orderBy !== undefined) {
                queryParameters['orderBy'] = params.orderBy;
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
         * Get Column Definitions
         * @param reportName 
         */
        public systemReportsReportNameColumnsGet (params: {  reportName: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<JObject>> {
            const localVarPath = this.basePath + '/system/reports/{reportName}/columns'
                .replace('{' + 'reportName' + '}', String(params.reportName));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'reportName' is set
            if (params.reportName == null) {
                throw new Error('Missing required parameter reportName when calling systemReportsReportNameColumnsGet');
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
         * Get Report Results Count
         * @param reportName 
         * @param conditions 
         */
        public systemReportsReportNameCountGet (params: {  reportName: string; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/system/reports/{reportName}/count'
                .replace('{' + 'reportName' + '}', String(params.reportName));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'reportName' is set
            if (params.reportName == null) {
                throw new Error('Missing required parameter reportName when calling systemReportsReportNameCountGet');
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
         * Get Report Results
         * @param reportName 
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         * @param columns 
         */
        public systemReportsReportNameGet (params: {  reportName: string; conditions?: string; orderBy?: string; page?: number; pageSize?: number; columns?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ReportDataResponse> {
            const localVarPath = this.basePath + '/system/reports/{reportName}'
                .replace('{' + 'reportName' + '}', String(params.reportName));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
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
    }
//}
//export namespace  {
    'use strict';

    export class UserDefinedFieldsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get User Defined Fields Count
         * @param conditions 
         */
        public systemUserDefinedFieldsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/system/userDefinedFields/count';

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
         * Get User Defined Fields
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public systemUserDefinedFieldsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<UserDefinedField>> {
            const localVarPath = this.basePath + '/system/userDefinedFields';

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
         * Delete User Defined Field By Id
         * @param id 
         */
        public systemUserDefinedFieldsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/system/userDefinedFields/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemUserDefinedFieldsIdDelete');
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
         * Get User Defined Field By Id
         * @param id 
         */
        public systemUserDefinedFieldsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserDefinedField> {
            const localVarPath = this.basePath + '/system/userDefinedFields/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemUserDefinedFieldsIdGet');
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
         * Update User Defined Field
         * @param id 
         * @param operations 
         */
        public systemUserDefinedFieldsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserDefinedField> {
            const localVarPath = this.basePath + '/system/userDefinedFields/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemUserDefinedFieldsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling systemUserDefinedFieldsIdPatch');
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
         * Replace User Defined Field
         * @param id 
         * @param userDefinedField 
         */
        public systemUserDefinedFieldsIdPut (params: {  id: number; userDefinedField: UserDefinedField; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserDefinedField> {
            const localVarPath = this.basePath + '/system/userDefinedFields/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling systemUserDefinedFieldsIdPut');
            }
            // verify required parameter 'userDefinedField' is set
            if (params.userDefinedField == null) {
                throw new Error('Missing required parameter userDefinedField when calling systemUserDefinedFieldsIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.userDefinedField),
                
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
         * Create User Defined Field
         * @param userDefinedField 
         */
        public systemUserDefinedFieldsPost (params: {  userDefinedField: UserDefinedField; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserDefinedField> {
            const localVarPath = this.basePath + '/system/userDefinedFields';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userDefinedField' is set
            if (params.userDefinedField == null) {
                throw new Error('Missing required parameter userDefinedField when calling systemUserDefinedFieldsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.userDefinedField),
                
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
