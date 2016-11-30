///<reference path="../../typings/index.d.ts"/>
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

export interface AgreementReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface Board {
	"id"?: number;
	"name": string;
	"locationId": number;
	"businessUnitId": number;
	"inactive"?: boolean;
	"signOffTemplate"?: ServiceSignoffReference;
	"sendToContact"?: boolean;
	"contactTemplateId"?: number;
	"sendToResource"?: boolean;
	"resourceTemplateId"?: number;
	"projectFlag"?: boolean;

	/**
	 * This field only shows if it is Project Board.
	 */
	"showDependenciesFlag"?: boolean;

	/**
	 * This field only shows if it is Project Board.
	 */
	"showEstimatesFlag"?: boolean;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface BoardReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface Code {
	"id"?: number;
	"name": string;
	"description": string;
	"boardId"?: number;
	"locationId"?: number;
	"businessUnitId"?: number;

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

export interface ConfigurationReference {
	"id"?: number;
	"deviceIdentifier"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ContactReference {
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

export interface CountryReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
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
export interface DocumentReference {
	"id"?: number;

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

export interface ExcludedMember {
	"id"?: number;
	"memberId": number;
	"boardId"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface FilterValues {
	"conditions"?: string;
	"orderBy"?: string;
}

export interface GenericIdIdentifierReference {
	"id"?: number;
	"identifier"?: string;
}

export interface Item {
	"id"?: number;
	"name": string;
	"inactive"?: boolean;
	"typeAssociations"?: Array<TypeAssociations>;
	"addAllSubTypes"?: boolean;
	"removeAllSubTypes"?: boolean;
	"typeId"?: number;
	"boardId"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface KnowledgeBaseArticle {
	"id"?: number;
	"title": string;
	"issue": string;
	"resolution": string;
	"locationId"?: number;
	"businessUnitId"?: number;
	"boardId"?: number;
	"categoryId"?: number;
	"subCategoryId"?: number;
	"dateCreated"?: string;
	"createdBy"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface Location {
	"id"?: number;
	"name": string;
	"where": WhereEnum;
	"defaultFlag"?: boolean;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}


export enum WhereEnum {
	OnSite = <any> 'OnSite',
	Remote = <any> 'Remote',
	InHouse = <any> 'InHouse'
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

export interface Priority {
	"id"?: number;
	"name": string;
	"color": string;
	"sortOrder"?: number;
	"defaultFlag"?: boolean;
	"imageLink"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface PriorityReference {
	"id"?: number;
	"name"?: string;
	"sort"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ProductReference {
	"id"?: number;
	"description"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ProjectPhaseReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ProjectReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ScheduleEntryReference {
	"id"?: number;
	"description"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ServiceCodeReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ServiceItemReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ServiceLocationReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ServiceNote {
	"id"?: number;
	"ticketId"?: number;
	"text"?: string;
	"detailDescriptionFlag"?: boolean;
	"internalAnalysisFlag"?: boolean;
	"resolutionFlag"?: boolean;
	"member"?: MemberReference;
	"contact"?: ContactReference;
	"customerUpdatedFlag"?: boolean;
	"processNotifications"?: boolean;
	"dateCreated"?: string;
	"createdBy"?: string;
	"internalFlag"?: boolean;
	"externalFlag"?: boolean;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ServiceSignoffReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ServiceSourceReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ServiceStatusReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ServiceSubTypeReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ServiceTeamReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ServiceTypeReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface SiteReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface Source {
	"id"?: number;
	"name": string;
	"defaultFlag"?: boolean;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
	"enteredBy"?: string;
	"dateEntered"?: Date;
}

export interface Status {
	"id"?: number;
	"name": string;
	"boardId"?: number;
	"sortOrder"?: number;
	"displayOnBoard"?: boolean;
	"inactive"?: boolean;
	"closedStatus"?: boolean;
	"timeEntryNotAllowed"?: boolean;
	"defaultFlag"?: boolean;
	"escalationStatus"?: EscalationStatusEnum;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}


export enum EscalationStatusEnum {
	NotResponded = <any> 'NotResponded',
	Responded = <any> 'Responded',
	ResolutionPlan = <any> 'ResolutionPlan',
	Resolved = <any> 'Resolved',
	NoEscalation = <any> 'NoEscalation'
}
export interface SubType {
	"id"?: number;
	"name": string;
	"inactive"?: boolean;
	"typeAssociationIds"?: Array<number>;
	"addAllTypes"?: boolean;
	"removeAllTypes"?: boolean;
	"boardId"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface Survey {
	"id"?: number;
	"name": string;
	"inactiveFlag"?: boolean;
	"headerIncludeLogoFlag"?: boolean;
	"headerText"?: string;
	"headerTextVisibleFlag"?: boolean;
	"footerText"?: string;
	"footerTextVisibleFlag"?: boolean;
	"thankYouText"?: string;
	"notifyWho"?: GenericIdIdentifierReference;
	"notifyWhoVisibleFlag"?: boolean;
	"notifyMember"?: MemberReference;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface SurveyQuestion {
	"id"?: number;
	"sequenceNumber"?: number;
	"type": TypeEnum;
	"question": string;
	"options"?: Array<SurveyQuestionOption>;
	"includeFlag"?: boolean;
	"requiredFlag"?: boolean;
	"noAnswerPoints"?: number;
	"surveyId"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}


export enum TypeEnum {
	OpenEnded = <any> 'OpenEnded',
	Selection = <any> 'Selection'
}
export interface SurveyQuestionOption {
	"includeFlag"?: boolean;
	"caption": string;
	"points"?: number;
}

export interface SurveyResult {
	"id"?: number;
	"ticketId": number;
	"emailAddress"?: string;
	"footerResponse"?: string;
	"contactMeFlag"?: boolean;
	"contact"?: ContactReference;
	"results"?: Array<SurveyResultDetail>;
	"totalPoints"?: number;
	"company"?: CompanyReference;
	"surveyId"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface SurveyResultDetail {
	"questionId": number;

	/**
	 * If question type is Selection, this should be the option array index
	 */
	"answer"?: string;
}

export interface Task {
	"id"?: number;
	"ticketId"?: number;
	"notes"?: string;
	"closedFlag"?: boolean;
	"priority"?: number;
	"schedule"?: ScheduleEntryReference;
	"code"?: ServiceCodeReference;
	"resolution"?: string;
	"childScheduleAction"?: ChildScheduleActionEnum;
	"childTicketId"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}


export enum ChildScheduleActionEnum {
	Transfer = <any> 'Transfer',
	Delete = <any> 'Delete',
	Done = <any> 'Done'
}
export interface Team {
	"id"?: number;
	"name": string;
	"teamLeader": MemberReference;
	"members"?: Array<number>;
	"defaultFlag"?: boolean;
	"notifyOnTicketDelete"?: boolean;
	"boardId"?: number;
	"locationId"?: number;
	"businessUnitId"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface Ticket {
	"id"?: number;
	"summary": string;
	"recordType"?: RecordTypeEnum;
	"board"?: BoardReference;
	"status"?: ServiceStatusReference;
	"project"?: ProjectReference;
	"phase"?: ProjectPhaseReference;
	"wbsCode"?: string;
	"company": CompanyReference;
	"site"?: SiteReference;
	"siteName"?: string;
	"addressLine1"?: string;
	"addressLine2"?: string;
	"city"?: string;
	"stateIdentifier"?: string;
	"zip"?: string;
	"country"?: CountryReference;
	"contact"?: ContactReference;
	"contactPhoneNumber"?: string;
	"contactPhoneExtension"?: string;
	"contactEmailAddress"?: string;
	"type"?: ServiceTypeReference;
	"subType"?: ServiceSubTypeReference;
	"item"?: ServiceItemReference;
	"team"?: ServiceTeamReference;
	"owner"?: MemberReference;
	"priority"?: PriorityReference;
	"serviceLocation"?: ServiceLocationReference;
	"source"?: ServiceSourceReference;
	"requiredDate"?: Date;
	"budgetHours"?: number;
	"opportunity"?: OpportunityReference;
	"agreement"?: AgreementReference;
	"severity"?: SeverityEnum;
	"impact"?: ImpactEnum;
	"externalXRef"?: string;
	"poNumber"?: string;
	"knowledgeBaseCategoryId"?: number;
	"knowledgeBaseSubCategoryId"?: number;
	"allowAllClientsPortalView"?: boolean;
	"customerUpdatedFlag"?: boolean;
	"automaticEmailContactFlag"?: boolean;
	"automaticEmailResourceFlag"?: boolean;
	"automaticEmailCcFlag"?: boolean;
	"automaticEmailCc"?: string;
	"initialDescription"?: string;
	"initialInternalAnalysis"?: string;
	"initialResolution"?: string;
	"contactEmailLookup"?: string;
	"processNotifications"?: boolean;
	"skipCallback"?: boolean;
	"closedDate"?: string;
	"closedBy"?: string;
	"closedFlag"?: boolean;
	"dateEntered"?: string;
	"enteredBy"?: string;
	"actualHours"?: number;
	"approved"?: boolean;
	"subBillingMethod"?: SubBillingMethodEnum;
	"subBillingAmount"?: number;
	"subDateAccepted"?: string;
	"dateResolved"?: string;
	"dateResplan"?: string;
	"dateResponded"?: string;
	"resolveMinutes"?: number;
	"resPlanMinutes"?: number;
	"respondMinutes"?: number;
	"isInSla"?: boolean;
	"knowledgeBaseLinkId"?: number;
	"resources"?: string;
	"parentTicketId"?: number;
	"hasChildTicket"?: boolean;
	"knowledgeBaseLinkType"?: KnowledgeBaseLinkTypeEnum;
	"billTime"?: BillTimeEnum;
	"billExpenses"?: BillExpensesEnum;
	"billProducts"?: BillProductsEnum;
	"predecessorType"?: PredecessorTypeEnum;
	"predecessorId"?: number;
	"predecessorClosedFlag"?: boolean;
	"lagDays"?: number;
	"lagNonworkingDaysFlag"?: boolean;
	"estimatedStartDate"?: Date;
	"duration"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
	"customFields"?: Array<CustomFieldValue>;
}


export enum RecordTypeEnum {
	ServiceTicket = <any> 'ServiceTicket',
	ProjectTicket = <any> 'ProjectTicket',
	ProjectIssue = <any> 'ProjectIssue'
}

export enum SeverityEnum {
	Low = <any> 'Low',
	Medium = <any> 'Medium',
	High = <any> 'High'
}

export enum ImpactEnum {
	Low = <any> 'Low',
	Medium = <any> 'Medium',
	High = <any> 'High'
}

export enum SubBillingMethodEnum {
	ActualRates = <any> 'ActualRates',
	FixedFee = <any> 'FixedFee',
	NotToExceed = <any> 'NotToExceed',
	OverrideRate = <any> 'OverrideRate'
}

export enum KnowledgeBaseLinkTypeEnum {
	ServiceTicket = <any> 'ServiceTicket',
	ProjectTicket = <any> 'ProjectTicket',
	ProjectIssue = <any> 'ProjectIssue',
	KnowledgeBaseArticle = <any> 'KnowledgeBaseArticle',
	Time = <any> 'Time',
	Activity = <any> 'Activity'
}

export enum BillTimeEnum {
	Billable = <any> 'Billable',
	DoNotBill = <any> 'DoNotBill',
	NoCharge = <any> 'NoCharge',
	NoDefault = <any> 'NoDefault'
}

export enum BillExpensesEnum {
	Billable = <any> 'Billable',
	DoNotBill = <any> 'DoNotBill',
	NoCharge = <any> 'NoCharge',
	NoDefault = <any> 'NoDefault'
}

export enum BillProductsEnum {
	Billable = <any> 'Billable',
	DoNotBill = <any> 'DoNotBill',
	NoCharge = <any> 'NoCharge',
	NoDefault = <any> 'NoDefault'
}

export enum PredecessorTypeEnum {
	Ticket = <any> 'Ticket',
	Phase = <any> 'Phase'
}
export interface TimeEntryReference {
	"id"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface Type {
	"id"?: number;
	"name": string;
	"category"?: CategoryEnum;
	"defaultFlag"?: boolean;
	"inactive"?: boolean;
	"requestForChange"?: boolean;
	"boardId"?: number;
	"locationId"?: number;
	"businessUnitId"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}


export enum CategoryEnum {
	Reactive = <any> 'Reactive',
	Proactive = <any> 'Proactive'
}
export interface TypeAssociations {
	"typeId"?: number;
	"subTypeAssociationIds"?: Array<number>;
}

export interface ValidationError {
	"code"?: string;
	"message"?: string;
	"resource"?: string;
	"field"?: string;
}


//export namespace  {
	'use strict';

	export class BoardExcludedMembersApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public serviceBoardsIdExcludedMembersCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/boards/{id}/excludedMembers/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdExcludedMembersCountGet');
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
		 * Delete Excluded Member By Id
		 * @param id
		 * @param excludedMemberId
		 */
		public serviceBoardsIdExcludedMembersExcludedMemberIdDelete (params: {  id: number; excludedMemberId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/boards/{id}/excludedMembers/{excludedMemberId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'excludedMemberId' + '}', String(params.excludedMemberId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdExcludedMembersExcludedMemberIdDelete');
			}
			// verify required parameter 'excludedMemberId' is set
			if (params.excludedMemberId == null) {
				throw new Error('Missing required parameter excludedMemberId when calling serviceBoardsIdExcludedMembersExcludedMemberIdDelete');
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
		 * Get Excluded Member By Id
		 * @param id
		 * @param excludedMemberId
		 */
		public serviceBoardsIdExcludedMembersExcludedMemberIdGet (params: {  id: number; excludedMemberId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ExcludedMember> {
			const localVarPath = this.basePath + '/service/boards/{id}/excludedMembers/{excludedMemberId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'excludedMemberId' + '}', String(params.excludedMemberId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdExcludedMembersExcludedMemberIdGet');
			}
			// verify required parameter 'excludedMemberId' is set
			if (params.excludedMemberId == null) {
				throw new Error('Missing required parameter excludedMemberId when calling serviceBoardsIdExcludedMembersExcludedMemberIdGet');
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
		 * Get Excluded Members
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceBoardsIdExcludedMembersGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ExcludedMember>> {
			const localVarPath = this.basePath + '/service/boards/{id}/excludedMembers'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Excluded Member
		 * @param id
		 * @param excludedMember
		 */
		public serviceBoardsIdExcludedMembersPost (params: {  id: number; excludedMember: ExcludedMember; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ExcludedMember> {
			const localVarPath = this.basePath + '/service/boards/{id}/excludedMembers'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdExcludedMembersPost');
			}
			// verify required parameter 'excludedMember' is set
			if (params.excludedMember == null) {
				throw new Error('Missing required parameter excludedMember when calling serviceBoardsIdExcludedMembersPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.excludedMember),

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

	export class BoardItemsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public serviceBoardsIdItemsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/boards/{id}/items/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdItemsCountGet');
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
		 * Get Items
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceBoardsIdItemsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Item>> {
			const localVarPath = this.basePath + '/service/boards/{id}/items'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Delete Item By Id
		 * @param id
		 * @param itemId
		 */
		public serviceBoardsIdItemsItemIdDelete (params: {  id: number; itemId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/boards/{id}/items/{itemId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'itemId' + '}', String(params.itemId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdItemsItemIdDelete');
			}
			// verify required parameter 'itemId' is set
			if (params.itemId == null) {
				throw new Error('Missing required parameter itemId when calling serviceBoardsIdItemsItemIdDelete');
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
		 * Get Item By Id
		 * @param id
		 * @param itemId
		 */
		public serviceBoardsIdItemsItemIdGet (params: {  id: number; itemId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Item> {
			const localVarPath = this.basePath + '/service/boards/{id}/items/{itemId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'itemId' + '}', String(params.itemId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdItemsItemIdGet');
			}
			// verify required parameter 'itemId' is set
			if (params.itemId == null) {
				throw new Error('Missing required parameter itemId when calling serviceBoardsIdItemsItemIdGet');
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
		 * Update Item
		 * @param id
		 * @param itemId
		 * @param operations
		 */
		public serviceBoardsIdItemsItemIdPatch (params: {  id: number; itemId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Item> {
			const localVarPath = this.basePath + '/service/boards/{id}/items/{itemId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'itemId' + '}', String(params.itemId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Item
		 * @param id
		 * @param itemId
		 * @param item
		 */
		public serviceBoardsIdItemsItemIdPut (params: {  id: number; itemId: number; item: Item; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Item> {
			const localVarPath = this.basePath + '/service/boards/{id}/items/{itemId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'itemId' + '}', String(params.itemId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.item),

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
		 * Create Item
		 * @param id
		 * @param item
		 */
		public serviceBoardsIdItemsPost (params: {  id: number; item: Item; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Item> {
			const localVarPath = this.basePath + '/service/boards/{id}/items'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdItemsPost');
			}
			// verify required parameter 'item' is set
			if (params.item == null) {
				throw new Error('Missing required parameter item when calling serviceBoardsIdItemsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.item),

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

	export class BoardStatusesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public serviceBoardsIdStatusesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/boards/{id}/statuses/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesCountGet');
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
		 * Get Statuses
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceBoardsIdStatusesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Status>> {
			const localVarPath = this.basePath + '/service/boards/{id}/statuses'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Statuses
		 * @param id
		 * @param status
		 */
		public serviceBoardsIdStatusesPost (params: {  id: number; status: Status; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Status> {
			const localVarPath = this.basePath + '/service/boards/{id}/statuses'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesPost');
			}
			// verify required parameter 'status' is set
			if (params.status == null) {
				throw new Error('Missing required parameter status when calling serviceBoardsIdStatusesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.status),

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
		 * Delete Status By Id
		 * @param id
		 * @param statusId
		 */
		public serviceBoardsIdStatusesStatusIdDelete (params: {  id: number; statusId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/boards/{id}/statuses/{statusId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'statusId' + '}', String(params.statusId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesStatusIdDelete');
			}
			// verify required parameter 'statusId' is set
			if (params.statusId == null) {
				throw new Error('Missing required parameter statusId when calling serviceBoardsIdStatusesStatusIdDelete');
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
		 * Get Status By Id
		 * @param id
		 * @param statusId
		 */
		public serviceBoardsIdStatusesStatusIdGet (params: {  id: number; statusId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Status> {
			const localVarPath = this.basePath + '/service/boards/{id}/statuses/{statusId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'statusId' + '}', String(params.statusId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdStatusesStatusIdGet');
			}
			// verify required parameter 'statusId' is set
			if (params.statusId == null) {
				throw new Error('Missing required parameter statusId when calling serviceBoardsIdStatusesStatusIdGet');
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
		 * Update Status
		 * @param id
		 * @param statusId
		 * @param operations
		 */
		public serviceBoardsIdStatusesStatusIdPatch (params: {  id: number; statusId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Status> {
			const localVarPath = this.basePath + '/service/boards/{id}/statuses/{statusId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'statusId' + '}', String(params.statusId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Statuses
		 * @param id
		 * @param statusId
		 * @param status
		 */
		public serviceBoardsIdStatusesStatusIdPut (params: {  id: number; statusId: number; status: Status; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Status> {
			const localVarPath = this.basePath + '/service/boards/{id}/statuses/{statusId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'statusId' + '}', String(params.statusId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.status),

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

	export class BoardSubTypesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public serviceBoardsIdSubtypesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/boards/{id}/subtypes/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesCountGet');
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
		 * Get Subtypes
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceBoardsIdSubtypesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<SubType>> {
			const localVarPath = this.basePath + '/service/boards/{id}/subtypes'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Subtype
		 * @param id
		 * @param subtype
		 */
		public serviceBoardsIdSubtypesPost (params: {  id: number; subtype: SubType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SubType> {
			const localVarPath = this.basePath + '/service/boards/{id}/subtypes'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesPost');
			}
			// verify required parameter 'subtype' is set
			if (params.subtype == null) {
				throw new Error('Missing required parameter subtype when calling serviceBoardsIdSubtypesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.subtype),

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
		 * Delete Subtype By Id
		 * @param id
		 * @param subtypeId
		 */
		public serviceBoardsIdSubtypesSubtypeIdDelete (params: {  id: number; subtypeId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/boards/{id}/subtypes/{subtypeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'subtypeId' + '}', String(params.subtypeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesSubtypeIdDelete');
			}
			// verify required parameter 'subtypeId' is set
			if (params.subtypeId == null) {
				throw new Error('Missing required parameter subtypeId when calling serviceBoardsIdSubtypesSubtypeIdDelete');
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
		 * Get Subtype By Id
		 * @param id
		 * @param subtypeId
		 */
		public serviceBoardsIdSubtypesSubtypeIdGet (params: {  id: number; subtypeId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SubType> {
			const localVarPath = this.basePath + '/service/boards/{id}/subtypes/{subtypeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'subtypeId' + '}', String(params.subtypeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdSubtypesSubtypeIdGet');
			}
			// verify required parameter 'subtypeId' is set
			if (params.subtypeId == null) {
				throw new Error('Missing required parameter subtypeId when calling serviceBoardsIdSubtypesSubtypeIdGet');
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
		 * Update Subtype
		 * @param id
		 * @param subtypeId
		 * @param operations
		 */
		public serviceBoardsIdSubtypesSubtypeIdPatch (params: {  id: number; subtypeId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SubType> {
			const localVarPath = this.basePath + '/service/boards/{id}/subtypes/{subtypeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'subtypeId' + '}', String(params.subtypeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Subtype
		 * @param id
		 * @param subtypeId
		 * @param subtype
		 */
		public serviceBoardsIdSubtypesSubtypeIdPut (params: {  id: number; subtypeId: number; subtype: SubType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SubType> {
			const localVarPath = this.basePath + '/service/boards/{id}/subtypes/{subtypeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'subtypeId' + '}', String(params.subtypeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.subtype),

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

	export class BoardTeamsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public serviceBoardsIdTeamsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/boards/{id}/teams/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsCountGet');
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
		 * Get Teams
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceBoardsIdTeamsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Team>> {
			const localVarPath = this.basePath + '/service/boards/{id}/teams'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Team
		 * @param id
		 * @param team
		 */
		public serviceBoardsIdTeamsPost (params: {  id: number; team: Team; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Team> {
			const localVarPath = this.basePath + '/service/boards/{id}/teams'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsPost');
			}
			// verify required parameter 'team' is set
			if (params.team == null) {
				throw new Error('Missing required parameter team when calling serviceBoardsIdTeamsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.team),

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
		 * Delete Team By Id
		 * @param id
		 * @param teamId
		 */
		public serviceBoardsIdTeamsTeamIdDelete (params: {  id: number; teamId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/boards/{id}/teams/{teamId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'teamId' + '}', String(params.teamId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsTeamIdDelete');
			}
			// verify required parameter 'teamId' is set
			if (params.teamId == null) {
				throw new Error('Missing required parameter teamId when calling serviceBoardsIdTeamsTeamIdDelete');
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
		 * Get Team By Id
		 * @param id
		 * @param teamId
		 */
		public serviceBoardsIdTeamsTeamIdGet (params: {  id: number; teamId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Team> {
			const localVarPath = this.basePath + '/service/boards/{id}/teams/{teamId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'teamId' + '}', String(params.teamId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdTeamsTeamIdGet');
			}
			// verify required parameter 'teamId' is set
			if (params.teamId == null) {
				throw new Error('Missing required parameter teamId when calling serviceBoardsIdTeamsTeamIdGet');
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
		 * Update Team
		 * @param id
		 * @param teamId
		 * @param operations
		 */
		public serviceBoardsIdTeamsTeamIdPatch (params: {  id: number; teamId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Team> {
			const localVarPath = this.basePath + '/service/boards/{id}/teams/{teamId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'teamId' + '}', String(params.teamId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Team
		 * @param id
		 * @param teamId
		 * @param team
		 */
		public serviceBoardsIdTeamsTeamIdPut (params: {  id: number; teamId: number; team: Team; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Team> {
			const localVarPath = this.basePath + '/service/boards/{id}/teams/{teamId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'teamId' + '}', String(params.teamId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.team),

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

	export class BoardTypesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public serviceBoardsIdTypesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/boards/{id}/types/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdTypesCountGet');
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
		 * Get Types
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceBoardsIdTypesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Type>> {
			const localVarPath = this.basePath + '/service/boards/{id}/types'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Type
		 * @param id
		 * @param type
		 */
		public serviceBoardsIdTypesPost (params: {  id: number; type: Type; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Type> {
			const localVarPath = this.basePath + '/service/boards/{id}/types'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdTypesPost');
			}
			// verify required parameter 'type' is set
			if (params.type == null) {
				throw new Error('Missing required parameter type when calling serviceBoardsIdTypesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.type),

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
		 * Delete Type By Id
		 * @param id
		 * @param typeId
		 */
		public serviceBoardsIdTypesTypeIdDelete (params: {  id: number; typeId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/boards/{id}/types/{typeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'typeId' + '}', String(params.typeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdTypesTypeIdDelete');
			}
			// verify required parameter 'typeId' is set
			if (params.typeId == null) {
				throw new Error('Missing required parameter typeId when calling serviceBoardsIdTypesTypeIdDelete');
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
		 * Get Type By Id
		 * @param id
		 * @param typeId
		 */
		public serviceBoardsIdTypesTypeIdGet (params: {  id: number; typeId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Type> {
			const localVarPath = this.basePath + '/service/boards/{id}/types/{typeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'typeId' + '}', String(params.typeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdTypesTypeIdGet');
			}
			// verify required parameter 'typeId' is set
			if (params.typeId == null) {
				throw new Error('Missing required parameter typeId when calling serviceBoardsIdTypesTypeIdGet');
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
		 * Update Types
		 * @param id
		 * @param typeId
		 * @param operations
		 */
		public serviceBoardsIdTypesTypeIdPatch (params: {  id: number; typeId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Type> {
			const localVarPath = this.basePath + '/service/boards/{id}/types/{typeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'typeId' + '}', String(params.typeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Types
		 * @param id
		 * @param typeId
		 * @param type
		 */
		public serviceBoardsIdTypesTypeIdPut (params: {  id: number; typeId: number; type: Type; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Type> {
			const localVarPath = this.basePath + '/service/boards/{id}/types/{typeId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'typeId' + '}', String(params.typeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.type),

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
		 * Get Sub Type Association
		 * @param id
		 * @param typeId
		 */
		public serviceBoardsIdTypesTypeIdSubTypeAssociationGet (params: {  id: number; typeId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<number> {
			const localVarPath = this.basePath + '/service/boards/{id}/types/{typeId}/subTypeAssociation'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'typeId' + '}', String(params.typeId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdTypesTypeIdSubTypeAssociationGet');
			}
			// verify required parameter 'typeId' is set
			if (params.typeId == null) {
				throw new Error('Missing required parameter typeId when calling serviceBoardsIdTypesTypeIdSubTypeAssociationGet');
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

	export class BoardsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Boards Count
		 * @param conditions
		 */
		public serviceBoardsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/boards/count';

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
		 * Get Boards
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceBoardsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Board>> {
			const localVarPath = this.basePath + '/service/boards';

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
		 * Delete Board By Id
		 * @param id
		 */
		public serviceBoardsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/boards/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdDelete');
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
		 * Get Board By Id
		 * @param id
		 */
		public serviceBoardsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Board> {
			const localVarPath = this.basePath + '/service/boards/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdGet');
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
		 * Update Board
		 * @param id
		 * @param operations
		 */
		public serviceBoardsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Board> {
			const localVarPath = this.basePath + '/service/boards/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling serviceBoardsIdPatch');
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
		 * Replace Board
		 * @param id
		 * @param board
		 */
		public serviceBoardsIdPut (params: {  id: number; board: Board; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Board> {
			const localVarPath = this.basePath + '/service/boards/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceBoardsIdPut');
			}
			// verify required parameter 'board' is set
			if (params.board == null) {
				throw new Error('Missing required parameter board when calling serviceBoardsIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.board),

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
		 * Create Board
		 * @param board
		 */
		public serviceBoardsPost (params: {  board: Board; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Board> {
			const localVarPath = this.basePath + '/service/boards';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'board' is set
			if (params.board == null) {
				throw new Error('Missing required parameter board when calling serviceBoardsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.board),

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

	export class CodesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Create Codes Count
		 * @param conditions
		 */
		public serviceCodesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/codes/count';

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
		 * Get Codes
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceCodesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Code>> {
			const localVarPath = this.basePath + '/service/codes';

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
		 * Delete Code By Id
		 * @param id
		 */
		public serviceCodesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/codes/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceCodesIdDelete');
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
		 * Get Code By Id
		 * @param id
		 */
		public serviceCodesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Code> {
			const localVarPath = this.basePath + '/service/codes/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceCodesIdGet');
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
		 * Update Code
		 * @param id
		 * @param operations
		 */
		public serviceCodesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Code> {
			const localVarPath = this.basePath + '/service/codes/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceCodesIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling serviceCodesIdPatch');
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
		 * Replace Code
		 * @param id
		 * @param code
		 */
		public serviceCodesIdPut (params: {  id: number; code: Code; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Code> {
			const localVarPath = this.basePath + '/service/codes/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceCodesIdPut');
			}
			// verify required parameter 'code' is set
			if (params.code == null) {
				throw new Error('Missing required parameter code when calling serviceCodesIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.code),

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
		 * Create Codes
		 * @param code
		 */
		public serviceCodesPost (params: {  code: Code; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Code> {
			const localVarPath = this.basePath + '/service/codes';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'code' is set
			if (params.code == null) {
				throw new Error('Missing required parameter code when calling serviceCodesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.code),

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

	export class KnowledgeBaseArticlesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Knowledge Base Articles Count
		 * @param conditions
		 */
		public serviceKnowledgeBaseArticlesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/knowledgeBaseArticles/count';

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
		 * Get Knowledge Base Articles
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceKnowledgeBaseArticlesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<KnowledgeBaseArticle>> {
			const localVarPath = this.basePath + '/service/knowledgeBaseArticles';

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
		 * Delete Knowledge Base Article By Id
		 * @param id
		 */
		public serviceKnowledgeBaseArticlesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/knowledgeBaseArticles/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceKnowledgeBaseArticlesIdDelete');
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
		 * Get Knowledge Base Article By Id
		 * @param id
		 */
		public serviceKnowledgeBaseArticlesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<KnowledgeBaseArticle> {
			const localVarPath = this.basePath + '/service/knowledgeBaseArticles/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceKnowledgeBaseArticlesIdGet');
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
		 * Update Knowledge Base Article
		 * @param id
		 * @param operations
		 */
		public serviceKnowledgeBaseArticlesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<KnowledgeBaseArticle> {
			const localVarPath = this.basePath + '/service/knowledgeBaseArticles/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceKnowledgeBaseArticlesIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling serviceKnowledgeBaseArticlesIdPatch');
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
		 * Replace Knowledge Base Article
		 * @param id
		 * @param knowledgeBaseArticle
		 */
		public serviceKnowledgeBaseArticlesIdPut (params: {  id: number; knowledgeBaseArticle: KnowledgeBaseArticle; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<KnowledgeBaseArticle> {
			const localVarPath = this.basePath + '/service/knowledgeBaseArticles/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceKnowledgeBaseArticlesIdPut');
			}
			// verify required parameter 'knowledgeBaseArticle' is set
			if (params.knowledgeBaseArticle == null) {
				throw new Error('Missing required parameter knowledgeBaseArticle when calling serviceKnowledgeBaseArticlesIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.knowledgeBaseArticle),

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
		 * Create Knowledge Base Article
		 * @param knowledgeBaseArticle
		 */
		public serviceKnowledgeBaseArticlesPost (params: {  knowledgeBaseArticle: KnowledgeBaseArticle; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<KnowledgeBaseArticle> {
			const localVarPath = this.basePath + '/service/knowledgeBaseArticles';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'knowledgeBaseArticle' is set
			if (params.knowledgeBaseArticle == null) {
				throw new Error('Missing required parameter knowledgeBaseArticle when calling serviceKnowledgeBaseArticlesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.knowledgeBaseArticle),

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

	export class LocationsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Create Locations Count
		 * @param conditions
		 */
		public serviceLocationsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/locations/count';

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
		 * Get Locations
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceLocationsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Location>> {
			const localVarPath = this.basePath + '/service/locations';

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
		 * Delete Location By Id
		 * @param id
		 */
		public serviceLocationsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/locations/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceLocationsIdDelete');
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
		 * Get Location By Id
		 * @param id
		 */
		public serviceLocationsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Location> {
			const localVarPath = this.basePath + '/service/locations/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceLocationsIdGet');
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
		 * Update Location
		 * @param id
		 * @param operations
		 */
		public serviceLocationsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Location> {
			const localVarPath = this.basePath + '/service/locations/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceLocationsIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling serviceLocationsIdPatch');
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
		 * Replace Location
		 * @param id
		 * @param location
		 */
		public serviceLocationsIdPut (params: {  id: number; location: Location; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Location> {
			const localVarPath = this.basePath + '/service/locations/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceLocationsIdPut');
			}
			// verify required parameter 'location' is set
			if (params.location == null) {
				throw new Error('Missing required parameter location when calling serviceLocationsIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.location),

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
		 * Create Location
		 * @param location
		 */
		public serviceLocationsPost (params: {  location: Location; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Location> {
			const localVarPath = this.basePath + '/service/locations';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'location' is set
			if (params.location == null) {
				throw new Error('Missing required parameter location when calling serviceLocationsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.location),

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

	export class PrioritiesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Create Priorities Count
		 * @param conditions
		 */
		public servicePrioritiesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/priorities/count';

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
		 * Get Priorities
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public servicePrioritiesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Priority>> {
			const localVarPath = this.basePath + '/service/priorities';

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
		 * Delete Priority By Id
		 * @param id
		 */
		public servicePrioritiesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/priorities/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling servicePrioritiesIdDelete');
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
		 * Get Priority By Id
		 * @param id
		 */
		public servicePrioritiesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Priority> {
			const localVarPath = this.basePath + '/service/priorities/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling servicePrioritiesIdGet');
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
		 * Get Priority Image
		 * @param id
		 * @param useDefaultFlag
		 * @param lastModified
		 */
		public servicePrioritiesIdImageGet (params: {  id: number; useDefaultFlag?: boolean; lastModified?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/priorities/{id}/image'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Update Priority
		 * @param id
		 * @param operations
		 */
		public servicePrioritiesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Priority> {
			const localVarPath = this.basePath + '/service/priorities/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling servicePrioritiesIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling servicePrioritiesIdPatch');
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
		 * Replace Priority
		 * @param id
		 * @param priority
		 */
		public servicePrioritiesIdPut (params: {  id: number; priority: Priority; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Priority> {
			const localVarPath = this.basePath + '/service/priorities/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling servicePrioritiesIdPut');
			}
			// verify required parameter 'priority' is set
			if (params.priority == null) {
				throw new Error('Missing required parameter priority when calling servicePrioritiesIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.priority),

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
		 * Create Priority
		 * @param priority
		 */
		public servicePrioritiesPost (params: {  priority: Priority; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Priority> {
			const localVarPath = this.basePath + '/service/priorities';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'priority' is set
			if (params.priority == null) {
				throw new Error('Missing required parameter priority when calling servicePrioritiesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.priority),

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

	export class SourcesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Create Sources Count
		 * @param conditions
		 */
		public serviceSourcesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/sources/count';

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
		 * Get Sources
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceSourcesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Source>> {
			const localVarPath = this.basePath + '/service/sources';

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
		 * Delete Source By Id
		 * @param id
		 */
		public serviceSourcesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/sources/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSourcesIdDelete');
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
		 * Get Source By Id
		 * @param id
		 */
		public serviceSourcesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Source> {
			const localVarPath = this.basePath + '/service/sources/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSourcesIdGet');
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
		 * Update Source
		 * @param id
		 * @param operations
		 */
		public serviceSourcesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Source> {
			const localVarPath = this.basePath + '/service/sources/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSourcesIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling serviceSourcesIdPatch');
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
		 * Replace Source
		 * @param id
		 * @param source
		 */
		public serviceSourcesIdPut (params: {  id: number; source: Source; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Source> {
			const localVarPath = this.basePath + '/service/sources/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSourcesIdPut');
			}
			// verify required parameter 'source' is set
			if (params.source == null) {
				throw new Error('Missing required parameter source when calling serviceSourcesIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.source),

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
		 * Create Source
		 * @param source
		 */
		public serviceSourcesPost (params: {  source: Source; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Source> {
			const localVarPath = this.basePath + '/service/sources';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'source' is set
			if (params.source == null) {
				throw new Error('Missing required parameter source when calling serviceSourcesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.source),

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

	export class SurveyQuestionsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public serviceSurveysIdQuestionsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/surveys/{id}/questions/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsCountGet');
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
		 * Get Survey Questions
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceSurveysIdQuestionsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<SurveyQuestion>> {
			const localVarPath = this.basePath + '/service/surveys/{id}/questions'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Survey Question
		 * @param id
		 * @param surveyQuestion
		 */
		public serviceSurveysIdQuestionsPost (params: {  id: number; surveyQuestion: SurveyQuestion; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SurveyQuestion> {
			const localVarPath = this.basePath + '/service/surveys/{id}/questions'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsPost');
			}
			// verify required parameter 'surveyQuestion' is set
			if (params.surveyQuestion == null) {
				throw new Error('Missing required parameter surveyQuestion when calling serviceSurveysIdQuestionsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.surveyQuestion),

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
		 * Delete Survey Question By Id
		 * @param id
		 * @param questionId
		 */
		public serviceSurveysIdQuestionsQuestionIdDelete (params: {  id: number; questionId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/surveys/{id}/questions/{questionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'questionId' + '}', String(params.questionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsQuestionIdDelete');
			}
			// verify required parameter 'questionId' is set
			if (params.questionId == null) {
				throw new Error('Missing required parameter questionId when calling serviceSurveysIdQuestionsQuestionIdDelete');
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
		 * Get Survey Question By Id
		 * @param id
		 * @param questionId
		 */
		public serviceSurveysIdQuestionsQuestionIdGet (params: {  id: number; questionId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SurveyQuestion> {
			const localVarPath = this.basePath + '/service/surveys/{id}/questions/{questionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'questionId' + '}', String(params.questionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdQuestionsQuestionIdGet');
			}
			// verify required parameter 'questionId' is set
			if (params.questionId == null) {
				throw new Error('Missing required parameter questionId when calling serviceSurveysIdQuestionsQuestionIdGet');
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
		 * Update Survey Question
		 * @param id
		 * @param questionId
		 * @param operations
		 */
		public serviceSurveysIdQuestionsQuestionIdPatch (params: {  id: number; questionId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SurveyQuestion> {
			const localVarPath = this.basePath + '/service/surveys/{id}/questions/{questionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'questionId' + '}', String(params.questionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Survey Question
		 * @param id
		 * @param questionId
		 * @param surveyQuestion
		 */
		public serviceSurveysIdQuestionsQuestionIdPut (params: {  id: number; questionId: number; surveyQuestion: SurveyQuestion; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SurveyQuestion> {
			const localVarPath = this.basePath + '/service/surveys/{id}/questions/{questionId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'questionId' + '}', String(params.questionId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.surveyQuestion),

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

	export class SurveyResultsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public serviceSurveysIdResultsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/surveys/{id}/results/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdResultsCountGet');
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
		 * Get Survey Results
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceSurveysIdResultsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<SurveyResult>> {
			const localVarPath = this.basePath + '/service/surveys/{id}/results'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Survey Result
		 * @param id
		 * @param surveyResult
		 */
		public serviceSurveysIdResultsPost (params: {  id: number; surveyResult: SurveyResult; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SurveyResult> {
			const localVarPath = this.basePath + '/service/surveys/{id}/results'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdResultsPost');
			}
			// verify required parameter 'surveyResult' is set
			if (params.surveyResult == null) {
				throw new Error('Missing required parameter surveyResult when calling serviceSurveysIdResultsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.surveyResult),

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
		 * Delete Survey Result By Id
		 * @param id
		 * @param resultId
		 */
		public serviceSurveysIdResultsResultIdDelete (params: {  id: number; resultId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/surveys/{id}/results/{resultId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'resultId' + '}', String(params.resultId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdResultsResultIdDelete');
			}
			// verify required parameter 'resultId' is set
			if (params.resultId == null) {
				throw new Error('Missing required parameter resultId when calling serviceSurveysIdResultsResultIdDelete');
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
		 * Get Survey Result By Id
		 * @param id
		 * @param resultId
		 */
		public serviceSurveysIdResultsResultIdGet (params: {  id: number; resultId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SurveyResult> {
			const localVarPath = this.basePath + '/service/surveys/{id}/results/{resultId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'resultId' + '}', String(params.resultId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdResultsResultIdGet');
			}
			// verify required parameter 'resultId' is set
			if (params.resultId == null) {
				throw new Error('Missing required parameter resultId when calling serviceSurveysIdResultsResultIdGet');
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
		 * Update Survey Result
		 * @param id
		 * @param resultId
		 * @param operations
		 */
		public serviceSurveysIdResultsResultIdPatch (params: {  id: number; resultId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SurveyResult> {
			const localVarPath = this.basePath + '/service/surveys/{id}/results/{resultId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'resultId' + '}', String(params.resultId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Survey Result
		 * @param id
		 * @param resultId
		 * @param surveyResult
		 */
		public serviceSurveysIdResultsResultIdPut (params: {  id: number; resultId: number; surveyResult: SurveyResult; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SurveyResult> {
			const localVarPath = this.basePath + '/service/surveys/{id}/results/{resultId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'resultId' + '}', String(params.resultId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.surveyResult),

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

	export class SurveysApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Surveys Count
		 * @param conditions
		 */
		public serviceSurveysCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/surveys/count';

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
		 * Get Surveys
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceSurveysGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Survey>> {
			const localVarPath = this.basePath + '/service/surveys';

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
		 * Delete Survey By Id
		 * @param id
		 */
		public serviceSurveysIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/surveys/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdDelete');
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
		 * Get Survey By Id
		 * @param id
		 */
		public serviceSurveysIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Survey> {
			const localVarPath = this.basePath + '/service/surveys/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdGet');
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
		 * Update Survey
		 * @param id
		 * @param operations
		 */
		public serviceSurveysIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Survey> {
			const localVarPath = this.basePath + '/service/surveys/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling serviceSurveysIdPatch');
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
		 * Replace Survey
		 * @param id
		 * @param survey
		 */
		public serviceSurveysIdPut (params: {  id: number; survey: Survey; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Survey> {
			const localVarPath = this.basePath + '/service/surveys/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceSurveysIdPut');
			}
			// verify required parameter 'survey' is set
			if (params.survey == null) {
				throw new Error('Missing required parameter survey when calling serviceSurveysIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.survey),

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
		 * Create Survey
		 * @param survey
		 */
		public serviceSurveysPost (params: {  survey: Survey; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Survey> {
			const localVarPath = this.basePath + '/service/surveys';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'survey' is set
			if (params.survey == null) {
				throw new Error('Missing required parameter survey when calling serviceSurveysPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.survey),

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

	export class TicketNotesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public serviceTicketsIdNotesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/tickets/{id}/notes/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdNotesCountGet');
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
		 * Get Service Notes
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceTicketsIdNotesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ServiceNote>> {
			const localVarPath = this.basePath + '/service/tickets/{id}/notes'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Delete Service Note By Id
		 * @param id
		 * @param noteId
		 */
		public serviceTicketsIdNotesNoteIdDelete (params: {  id: number; noteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/tickets/{id}/notes/{noteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'noteId' + '}', String(params.noteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdNotesNoteIdDelete');
			}
			// verify required parameter 'noteId' is set
			if (params.noteId == null) {
				throw new Error('Missing required parameter noteId when calling serviceTicketsIdNotesNoteIdDelete');
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
		 * Get Service Note By Id
		 * @param id
		 * @param noteId
		 */
		public serviceTicketsIdNotesNoteIdGet (params: {  id: number; noteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ServiceNote> {
			const localVarPath = this.basePath + '/service/tickets/{id}/notes/{noteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'noteId' + '}', String(params.noteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdNotesNoteIdGet');
			}
			// verify required parameter 'noteId' is set
			if (params.noteId == null) {
				throw new Error('Missing required parameter noteId when calling serviceTicketsIdNotesNoteIdGet');
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
		 * Update Service Note
		 * @param id
		 * @param noteId
		 * @param operations
		 */
		public serviceTicketsIdNotesNoteIdPatch (params: {  id: number; noteId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ServiceNote> {
			const localVarPath = this.basePath + '/service/tickets/{id}/notes/{noteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'noteId' + '}', String(params.noteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Service Note
		 * @param id
		 * @param noteId
		 * @param serviceNote
		 */
		public serviceTicketsIdNotesNoteIdPut (params: {  id: number; noteId: number; serviceNote: ServiceNote; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ServiceNote> {
			const localVarPath = this.basePath + '/service/tickets/{id}/notes/{noteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'noteId' + '}', String(params.noteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.serviceNote),

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
		 * Create Service Note
		 * @param id
		 * @param serviceNote
		 */
		public serviceTicketsIdNotesPost (params: {  id: number; serviceNote: ServiceNote; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ServiceNote> {
			const localVarPath = this.basePath + '/service/tickets/{id}/notes'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdNotesPost');
			}
			// verify required parameter 'serviceNote' is set
			if (params.serviceNote == null) {
				throw new Error('Missing required parameter serviceNote when calling serviceTicketsIdNotesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.serviceNote),

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

	export class TicketTasksApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public serviceTicketsIdTasksCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/tickets/{id}/tasks/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdTasksCountGet');
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
		 * Get Tasks
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceTicketsIdTasksGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Task>> {
			const localVarPath = this.basePath + '/service/tickets/{id}/tasks'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Task
		 * @param id
		 * @param task
		 */
		public serviceTicketsIdTasksPost (params: {  id: number; task: Task; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Task> {
			const localVarPath = this.basePath + '/service/tickets/{id}/tasks'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdTasksPost');
			}
			// verify required parameter 'task' is set
			if (params.task == null) {
				throw new Error('Missing required parameter task when calling serviceTicketsIdTasksPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.task),

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
		 * Delete Task By Id
		 * @param id
		 * @param taskId
		 */
		public serviceTicketsIdTasksTaskIdDelete (params: {  id: number; taskId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/tickets/{id}/tasks/{taskId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'taskId' + '}', String(params.taskId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdTasksTaskIdDelete');
			}
			// verify required parameter 'taskId' is set
			if (params.taskId == null) {
				throw new Error('Missing required parameter taskId when calling serviceTicketsIdTasksTaskIdDelete');
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
		 * Get Task By Id
		 * @param id
		 * @param taskId
		 */
		public serviceTicketsIdTasksTaskIdGet (params: {  id: number; taskId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Task> {
			const localVarPath = this.basePath + '/service/tickets/{id}/tasks/{taskId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'taskId' + '}', String(params.taskId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdTasksTaskIdGet');
			}
			// verify required parameter 'taskId' is set
			if (params.taskId == null) {
				throw new Error('Missing required parameter taskId when calling serviceTicketsIdTasksTaskIdGet');
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
		 * Update Task
		 * @param id
		 * @param taskId
		 * @param operations
		 */
		public serviceTicketsIdTasksTaskIdPatch (params: {  id: number; taskId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Task> {
			const localVarPath = this.basePath + '/service/tickets/{id}/tasks/{taskId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'taskId' + '}', String(params.taskId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Task
		 * @param id
		 * @param taskId
		 * @param task
		 */
		public serviceTicketsIdTasksTaskIdPut (params: {  id: number; taskId: number; task: Task; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Task> {
			const localVarPath = this.basePath + '/service/tickets/{id}/tasks/{taskId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'taskId' + '}', String(params.taskId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.task),

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

	export class TicketsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Tickets Count
		 * @param conditions
		 */
		public serviceTicketsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/tickets/count';

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
		 * Get Tickets
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public serviceTicketsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Ticket>> {
			const localVarPath = this.basePath + '/service/tickets';

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
		 * Get Ticket Activities Count
		 * @param id
		 */
		public serviceTicketsIdActivitiesCountGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/tickets/{id}/activities/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdActivitiesCountGet');
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
		 * Get Ticket Activities
		 * @param id
		 * @param page
		 * @param pageSize
		 */
		public serviceTicketsIdActivitiesGet (params: {  id: number; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ActivityReference>> {
			const localVarPath = this.basePath + '/service/tickets/{id}/activities'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Delete Configuration Association
		 * @param id
		 * @param configId
		 */
		public serviceTicketsIdConfigurationsConfigIdDelete (params: {  id: number; configId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/tickets/{id}/configurations/{configId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'configId' + '}', String(params.configId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdConfigurationsConfigIdDelete');
			}
			// verify required parameter 'configId' is set
			if (params.configId == null) {
				throw new Error('Missing required parameter configId when calling serviceTicketsIdConfigurationsConfigIdDelete');
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
		 * Get Configuration Association
		 * @param id
		 * @param configId
		 */
		public serviceTicketsIdConfigurationsConfigIdGet (params: {  id: number; configId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationReference> {
			const localVarPath = this.basePath + '/service/tickets/{id}/configurations/{configId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'configId' + '}', String(params.configId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdConfigurationsConfigIdGet');
			}
			// verify required parameter 'configId' is set
			if (params.configId == null) {
				throw new Error('Missing required parameter configId when calling serviceTicketsIdConfigurationsConfigIdGet');
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
		 * Get Ticket Configurations Count
		 * @param id
		 */
		public serviceTicketsIdConfigurationsCountGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/tickets/{id}/configurations/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdConfigurationsCountGet');
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
		 * Get Ticket Configurations
		 * @param id
		 * @param page
		 * @param pageSize
		 */
		public serviceTicketsIdConfigurationsGet (params: {  id: number; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ConfigurationReference>> {
			const localVarPath = this.basePath + '/service/tickets/{id}/configurations'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Configuration Association
		 * @param id
		 * @param configuration
		 */
		public serviceTicketsIdConfigurationsPost (params: {  id: number; configuration: ConfigurationReference; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ConfigurationReference> {
			const localVarPath = this.basePath + '/service/tickets/{id}/configurations'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdConfigurationsPost');
			}
			// verify required parameter 'configuration' is set
			if (params.configuration == null) {
				throw new Error('Missing required parameter configuration when calling serviceTicketsIdConfigurationsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.configuration),

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
		 * Delete Ticket By Id
		 * @param id
		 */
		public serviceTicketsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/service/tickets/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdDelete');
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
		 * Get Ticket Documents Count
		 * @param id
		 */
		public serviceTicketsIdDocumentsCountGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/tickets/{id}/documents/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdDocumentsCountGet');
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
		 * Get Ticket Documents
		 * @param id
		 * @param page
		 * @param pageSize
		 */
		public serviceTicketsIdDocumentsGet (params: {  id: number; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<DocumentReference>> {
			const localVarPath = this.basePath + '/service/tickets/{id}/documents'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Get Ticket By Id
		 * @param id
		 */
		public serviceTicketsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ): Promise<Ticket> {
			const localVarPath = this.basePath + '/service/tickets/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdGet');
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
		 * Update Ticket
		 * @param id
		 * @param operations
		 */
		public serviceTicketsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Ticket> {
			const localVarPath = this.basePath + '/service/tickets/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling serviceTicketsIdPatch');
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
		 * Get Ticket Products Count
		 * @param id
		 */
		public serviceTicketsIdProductsCountGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/tickets/{id}/products/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdProductsCountGet');
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
		 * Get Ticket Products
		 * @param id
		 * @param page
		 * @param pageSize
		 */
		public serviceTicketsIdProductsGet (params: {  id: number; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProductReference>> {
			const localVarPath = this.basePath + '/service/tickets/{id}/products'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Ticket
		 * @param id
		 * @param ticket
		 */
		public serviceTicketsIdPut (params: {  id: number; ticket: Ticket; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Ticket> {
			const localVarPath = this.basePath + '/service/tickets/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdPut');
			}
			// verify required parameter 'ticket' is set
			if (params.ticket == null) {
				throw new Error('Missing required parameter ticket when calling serviceTicketsIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.ticket),

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
		 * Get Ticket Schedule Entries Count
		 * @param id
		 */
		public serviceTicketsIdScheduleentriesCountGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/tickets/{id}/scheduleentries/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdScheduleentriesCountGet');
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
		 * Get Ticket Schedule Entries
		 * @param id
		 * @param page
		 * @param pageSize
		 */
		public serviceTicketsIdScheduleentriesGet (params: {  id: number; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ScheduleEntryReference>> {
			const localVarPath = this.basePath + '/service/tickets/{id}/scheduleentries'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Get Ticket Time Entries Count
		 * @param id
		 */
		public serviceTicketsIdTimeentriesCountGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/service/tickets/{id}/timeentries/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling serviceTicketsIdTimeentriesCountGet');
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
		 * Get Ticket Time Entries
		 * @param id
		 * @param page
		 * @param pageSize
		 */
		public serviceTicketsIdTimeentriesGet (params: {  id: number; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<TimeEntryReference>> {
			const localVarPath = this.basePath + '/service/tickets/{id}/timeentries'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Ticket
		 * @param ticket
		 */
		public serviceTicketsPost (params: {  ticket: Ticket; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Ticket> {
			const localVarPath = this.basePath + '/service/tickets';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'ticket' is set
			if (params.ticket == null) {
				throw new Error('Missing required parameter ticket when calling serviceTicketsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.ticket),

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
		 * Ticket Search
		 * @param filterValues
		 * @param page
		 * @param pageSize
		 */
		public serviceTicketsSearchPost (params: {  filterValues: FilterValues; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Ticket>> {
			const localVarPath = this.basePath + '/service/tickets/search';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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

			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.filterValues),

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
