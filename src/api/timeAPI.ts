///<reference path="../../typings/index.d.ts"/>
import * as querystring from 'querystring';
import * as fetch from 'isomorphic-fetch';
import {assign} from './assign';


export interface AgreementReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface CompanyReference {
    "id"?: number;
    "identifier"?: string;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Count {
    "value"?: number;
}

export interface CustomFieldValue {
    "id"?: number;
    "caption"?: string;
    "type"?: TypeEnum;
    "entryMethod"?: EntryMethodEnum;
    "numberOfDecimals"?: number;
    "value"?: string;
}


export enum TypeEnum { 
    Text = <any> 'Text',
    Button = <any> 'Button',
    Currency = <any> 'Currency',
    Date = <any> 'Date',
    Hyperlink = <any> 'Hyperlink',
    IPAddress = <any> 'IPAddress',
    Checkbox = <any> 'Checkbox',
    Number = <any> 'Number',
    Percent = <any> 'Percent',
    TextArea = <any> 'TextArea',
    Password = <any> 'Password'
}

export enum EntryMethodEnum { 
    EntryField = <any> 'EntryField',
    List = <any> 'List',
    Option = <any> 'Option'
}
export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
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

export interface PatchOperation {
    "op"?: string;
    "path"?: string;
    "value"?: string;
}

export interface TimeEntry {
    "id"?: number;
    "company"?: CompanyReference;
    "chargeToId"?: number;
    "chargeToType"?: ChargeToTypeEnum;
    "member"?: MemberReference;
    "locationId"?: number;
    "businessUnitId"?: number;
    "workType"?: WorkTypeReference;
    "workRole"?: WorkRoleReference;
    "agreement"?: AgreementReference;
    "timeStart": Date;
    "timeEnd"?: Date;
    "hoursDeduct"?: number;
    "actualHours"?: number;
    "billableOption": BillableOptionEnum;
    "notes"?: string;
    "internalNotes"?: string;
    "addToDetailDescriptionFlag"?: boolean;
    "addToInternalAnalysisFlag"?: boolean;
    "addToResolutionFlag"?: boolean;
    "emailResourceFlag"?: boolean;
    "emailContactFlag"?: boolean;
    "emailCcFlag"?: boolean;
    "emailCc"?: string;
    "hoursBilled"?: number;
    "enteredBy"?: string;
    "dateEntered"?: Date;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "customFields"?: Array<CustomFieldValue>;
}


export enum ChargeToTypeEnum { 
    ServiceTicket = <any> 'ServiceTicket',
    ProjectTicket = <any> 'ProjectTicket',
    ChargeCode = <any> 'ChargeCode',
    Activity = <any> 'Activity'
}

export enum BillableOptionEnum { 
    Billable = <any> 'Billable',
    DoNotBill = <any> 'DoNotBill',
    NoCharge = <any> 'NoCharge',
    NoDefault = <any> 'NoDefault'
}
export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}

export interface WorkRoleReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface WorkTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


//export namespace  {
    'use strict';

    export class TimeEntriesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * Get Time Entries Count
         * @param conditions 
         */
        public timeEntriesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/time/entries/count';

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
         * Get Time Entries
         * @param conditions 
         * @param orderBy 
         * @param page 
         * @param pageSize 
         */
        public timeEntriesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<TimeEntry>> {
            const localVarPath = this.basePath + '/time/entries';

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
         * Delete Time Entry By Id
         * @param id 
         */
        public timeEntriesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/time/entries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling timeEntriesIdDelete');
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
         * Get Time Entry By Id
         * @param id 
         */
        public timeEntriesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TimeEntry> {
            const localVarPath = this.basePath + '/time/entries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling timeEntriesIdGet');
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
         * Update Time Entry
         * @param id 
         * @param operations 
         */
        public timeEntriesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TimeEntry> {
            const localVarPath = this.basePath + '/time/entries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling timeEntriesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling timeEntriesIdPatch');
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
         * Replace Time Entry
         * @param id 
         * @param timeEntry 
         */
        public timeEntriesIdPut (params: {  id: number; timeEntry: TimeEntry; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TimeEntry> {
            const localVarPath = this.basePath + '/time/entries/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling timeEntriesIdPut');
            }
            // verify required parameter 'timeEntry' is set
            if (params.timeEntry == null) {
                throw new Error('Missing required parameter timeEntry when calling timeEntriesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.timeEntry),
                
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
         * Create Time Entry
         * @param timeEntry 
         */
        public timeEntriesPost (params: {  timeEntry: TimeEntry; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TimeEntry> {
            const localVarPath = this.basePath + '/time/entries';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'timeEntry' is set
            if (params.timeEntry == null) {
                throw new Error('Missing required parameter timeEntry when calling timeEntriesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.timeEntry),
                
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
