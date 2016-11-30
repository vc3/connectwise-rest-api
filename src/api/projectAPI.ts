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

export interface ContactReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface Count {
	"value"?: number;
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

export interface NoteTypeReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
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

export interface PhaseStatusReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface Project {
	"id"?: number;
	"name": string;
	"company": CompanyReference;
	"site"?: SiteReference;
	"opportunity"?: OpportunityReference;
	"contact"?: ContactReference;
	"manager"?: MemberReference;
	"type"?: ProjectTypeReference;
	"board": ProjectBoardReference;
	"status"?: ProjectStatusReference;
	"agreement"?: AgreementReference;
	"billingMethod": BillingMethodEnum;
	"billingAmount"?: number;
	"estimatedTimeRevenue"?: number;
	"estimatedExpenseRevenue"?: number;
	"estimatedProductRevenue"?: number;
	"estimatedStart": Date;
	"estimatedEnd": Date;
	"estimatedHours"?: number;
	"description"?: string;
	"timeApprover"?: MemberReference;
	"expenseApprover"?: MemberReference;
	"budgetAnalysis"?: BudgetAnalysisEnum;
	"budgetFlag"?: boolean;
	"billingRateType"?: BillingRateTypeEnum;
	"billTime"?: BillTimeEnum;
	"billExpenses"?: BillExpensesEnum;
	"billProducts"?: BillProductsEnum;
	"downpayment"?: number;
	"restrictDownPaymentFlag"?: boolean;
	"billingAttention"?: string;
	"customerPO"?: string;
	"billProjectAfterClosedFlag"?: boolean;
	"billUnapprovedTimeAndExpense"?: boolean;
	"scheduledHours"?: number;
	"scheduledStart"?: string;
	"scheduledEnd"?: string;
	"actualHours"?: number;
	"actualStart"?: string;
	"actualEnd"?: string;
	"budgetHours"?: number;
	"projectTemplateId"?: number;
	"locationId"?: number;
	"businessUnitId"?: number;
	"shipToCompany"?: CompanyReference;
	"shipToContact"?: ContactReference;
	"shipToSite"?: SiteReference;
	"billToCompany"?: CompanyReference;
	"billToContact"?: ContactReference;
	"billToSite"?: SiteReference;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}
export enum BudgetAnalysisEnum {
	ActualHours = <any> 'ActualHours',
	BillableHours = <any> 'BillableHours'
}

export enum BillingRateTypeEnum {
	WorkRole = <any> 'WorkRole',
	StaffMember = <any> 'StaffMember'
}
export interface ProjectBoardReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ProjectContact {
	"id"?: number;
	"projectId"?: number;
	"contact": ContactReference;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ProjectNote {
	"id"?: number;
	"projectId"?: number;
	"text": string;
	"type"?: NoteTypeReference;
	"flagged"?: boolean;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ProjectPhase {
	"id"?: number;
	"projectId"?: number;
	"description": string;
	"board"?: ProjectBoardReference;
	"status"?: PhaseStatusReference;
	"agreement"?: AgreementReference;
	"opportunity"?: OpportunityReference;
	"parentPhase"?: ProjectPhaseReference;
	"wbsCode"?: string;
	"billTime"?: BillTimeEnum;
	"billExpenses"?: BillExpensesEnum;
	"billProducts"?: BillProductsEnum;
	"markAsMilestoneFlag"?: boolean;
	"notes"?: string;
	"deadlineDate"?: Date;
	"billSeparatelyFlag"?: boolean;
	"billingMethod"?: BillingMethodEnum;
	"scheduledHours"?: number;
	"scheduledStart"?: string;
	"scheduledEnd"?: string;
	"actualHours"?: number;
	"actualStart"?: string;
	"actualEnd"?: string;
	"budgetHours"?: number;
	"locationId"?: number;
	"businessUnitId"?: number;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
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

export enum BillingMethodEnum {
	ActualRates = <any> 'ActualRates',
	FixedFee = <any> 'FixedFee',
	NotToExceed = <any> 'NotToExceed',
	OverrideRate = <any> 'OverrideRate'
}
export interface ProjectPhaseReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ProjectRoleReference {
	"id"?: number;
	"identifier"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ProjectStatusReference {
	"id"?: number;
	"name"?: string;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ProjectTeamMember {
	"id"?: number;
	"projectId"?: number;
	"hours"?: number;
	"member": MemberReference;
	"projectRole": ProjectRoleReference;
	"workRole"?: WorkRoleReference;
	"startDate"?: Date;
	"endDate"?: Date;

	/**
	 * Metadata of the entity
	 */
	"info"?: Metadata;
}

export interface ProjectTypeReference {
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


//export namespace  {
	'use strict';

	export class ProjectContactsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public projectProjectsIdContactsContactIdDelete (params: {  id: number; contactId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/project/projects/{id}/contacts/{contactId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'contactId' + '}', String(params.contactId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdContactsContactIdDelete');
			}
			// verify required parameter 'contactId' is set
			if (params.contactId == null) {
				throw new Error('Missing required parameter contactId when calling projectProjectsIdContactsContactIdDelete');
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
		 * Get Project Contact By Id
		 * @param id
		 * @param contactId
		 */
		public projectProjectsIdContactsContactIdGet (params: {  id: number; contactId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectContact> {
			const localVarPath = this.basePath + '/project/projects/{id}/contacts/{contactId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'contactId' + '}', String(params.contactId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdContactsContactIdGet');
			}
			// verify required parameter 'contactId' is set
			if (params.contactId == null) {
				throw new Error('Missing required parameter contactId when calling projectProjectsIdContactsContactIdGet');
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
		 * Get Project Contacts
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public projectProjectsIdContactsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProjectContact>> {
			const localVarPath = this.basePath + '/project/projects/{id}/contacts'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Project Contact
		 * @param id
		 * @param contact
		 */
		public projectProjectsIdContactsPost (params: {  id: number; contact: ProjectContact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectContact> {
			const localVarPath = this.basePath + '/project/projects/{id}/contacts'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdContactsPost');
			}
			// verify required parameter 'contact' is set
			if (params.contact == null) {
				throw new Error('Missing required parameter contact when calling projectProjectsIdContactsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.contact),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

	export class ProjectNotesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public projectProjectsIdNotesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/project/projects/{id}/notes/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdNotesCountGet');
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
		 * Get Project Notes
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public projectProjectsIdNotesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProjectNote>> {
			const localVarPath = this.basePath + '/project/projects/{id}/notes'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Delete Project Note By Id
		 * @param id
		 * @param noteId
		 */
		public projectProjectsIdNotesNoteIdDelete (params: {  id: number; noteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/project/projects/{id}/notes/{noteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'noteId' + '}', String(params.noteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdNotesNoteIdDelete');
			}
			// verify required parameter 'noteId' is set
			if (params.noteId == null) {
				throw new Error('Missing required parameter noteId when calling projectProjectsIdNotesNoteIdDelete');
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
		 * Get Project Note By Id
		 * @param id
		 * @param noteId
		 */
		public projectProjectsIdNotesNoteIdGet (params: {  id: number; noteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectNote> {
			const localVarPath = this.basePath + '/project/projects/{id}/notes/{noteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'noteId' + '}', String(params.noteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdNotesNoteIdGet');
			}
			// verify required parameter 'noteId' is set
			if (params.noteId == null) {
				throw new Error('Missing required parameter noteId when calling projectProjectsIdNotesNoteIdGet');
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
		 * Update Project Note
		 * @param id
		 * @param noteId
		 * @param operations
		 */
		public projectProjectsIdNotesNoteIdPatch (params: {  id: number; noteId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectNote> {
			const localVarPath = this.basePath + '/project/projects/{id}/notes/{noteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'noteId' + '}', String(params.noteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Project Note
		 * @param id
		 * @param noteId
		 * @param note
		 */
		public projectProjectsIdNotesNoteIdPut (params: {  id: number; noteId: number; note: ProjectNote; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectNote> {
			const localVarPath = this.basePath + '/project/projects/{id}/notes/{noteId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'noteId' + '}', String(params.noteId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.note),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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
		 * Create Project Note
		 * @param id
		 * @param note
		 */
		public projectProjectsIdNotesPost (params: {  id: number; note: ProjectNote; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectNote> {
			const localVarPath = this.basePath + '/project/projects/{id}/notes'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdNotesPost');
			}
			// verify required parameter 'note' is set
			if (params.note == null) {
				throw new Error('Missing required parameter note when calling projectProjectsIdNotesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.note),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

	export class ProjectPhasesApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public projectProjectsIdPhasesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/project/projects/{id}/phases/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdPhasesCountGet');
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
		 * Get Project Phases
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public projectProjectsIdPhasesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProjectPhase>> {
			const localVarPath = this.basePath + '/project/projects/{id}/phases'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Delete Project Phase By Id
		 * @param id
		 * @param phaseId
		 */
		public projectProjectsIdPhasesPhaseIdDelete (params: {  id: number; phaseId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/project/projects/{id}/phases/{phaseId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'phaseId' + '}', String(params.phaseId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdPhasesPhaseIdDelete');
			}
			// verify required parameter 'phaseId' is set
			if (params.phaseId == null) {
				throw new Error('Missing required parameter phaseId when calling projectProjectsIdPhasesPhaseIdDelete');
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
		 * Get Project Phase By Id
		 * @param id
		 * @param phaseId
		 */
		public projectProjectsIdPhasesPhaseIdGet (params: {  id: number; phaseId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectPhase> {
			const localVarPath = this.basePath + '/project/projects/{id}/phases/{phaseId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'phaseId' + '}', String(params.phaseId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdPhasesPhaseIdGet');
			}
			// verify required parameter 'phaseId' is set
			if (params.phaseId == null) {
				throw new Error('Missing required parameter phaseId when calling projectProjectsIdPhasesPhaseIdGet');
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
		 * Update Project Phase
		 * @param id
		 * @param phaseId
		 * @param operations
		 */
		public projectProjectsIdPhasesPhaseIdPatch (params: {  id: number; phaseId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectPhase> {
			const localVarPath = this.basePath + '/project/projects/{id}/phases/{phaseId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'phaseId' + '}', String(params.phaseId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Project Phase
		 * @param id
		 * @param phaseId
		 * @param projectPhase
		 */
		public projectProjectsIdPhasesPhaseIdPut (params: {  id: number; phaseId: number; projectPhase: ProjectPhase; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectPhase> {
			const localVarPath = this.basePath + '/project/projects/{id}/phases/{phaseId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'phaseId' + '}', String(params.phaseId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.projectPhase),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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
		 * Create Project Phase
		 * @param id
		 * @param projectPhase
		 */
		public projectProjectsIdPhasesPost (params: {  id: number; projectPhase: ProjectPhase; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectPhase> {
			const localVarPath = this.basePath + '/project/projects/{id}/phases'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdPhasesPost');
			}
			// verify required parameter 'projectPhase' is set
			if (params.projectPhase == null) {
				throw new Error('Missing required parameter projectPhase when calling projectProjectsIdPhasesPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.projectPhase),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

	export class ProjectsApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
			if (basePath) {
				this.basePath = basePath;
			}
		}

		/**
		 *
		 * Get Projects Count
		 * @param conditions
		 */
		public projectProjectsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/project/projects/count';

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
		 * Get Projects
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public projectProjectsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Project>> {
			const localVarPath = this.basePath + '/project/projects';

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
		 * Delete Project By Id
		 * @param id
		 */
		public projectProjectsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/project/projects/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdDelete');
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
		 * Get Project By Id
		 * @param id
		 */
		public projectProjectsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Project> {
			const localVarPath = this.basePath + '/project/projects/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdGet');
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
		 * Update Project
		 * @param id
		 * @param operations
		 */
		public projectProjectsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Project> {
			const localVarPath = this.basePath + '/project/projects/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdPatch');
			}
			// verify required parameter 'operations' is set
			if (params.operations == null) {
				throw new Error('Missing required parameter operations when calling projectProjectsIdPatch');
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
		 * Replace Project
		 * @param id
		 * @param project
		 */
		public projectProjectsIdPut (params: {  id: number; project: Project; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Project> {
			const localVarPath = this.basePath + '/project/projects/{id}'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdPut');
			}
			// verify required parameter 'project' is set
			if (params.project == null) {
				throw new Error('Missing required parameter project when calling projectProjectsIdPut');
			}
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.project),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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
		 * Create Project
		 * @param project
		 */
		public projectProjectsPost (params: {  project: Project; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Project> {
			const localVarPath = this.basePath + '/project/projects';

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'project' is set
			if (params.project == null) {
				throw new Error('Missing required parameter project when calling projectProjectsPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.project),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

	export class ProjectsTeamMembersApi {
		protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
		public defaultHeaders : any = {};

		constructor(basePath?: string) {
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
		public projectProjectsIdTeamMembersCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
			const localVarPath = this.basePath + '/project/projects/{id}/teamMembers/count'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersCountGet');
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
		 * Get Team Members
		 * @param id
		 * @param conditions
		 * @param orderBy
		 * @param page
		 * @param pageSize
		 */
		public projectProjectsIdTeamMembersGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ProjectTeamMember>> {
			const localVarPath = this.basePath + '/project/projects/{id}/teamMembers'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Create Team Member
		 * @param id
		 * @param teamMember
		 */
		public projectProjectsIdTeamMembersPost (params: {  id: number; teamMember: ProjectTeamMember; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectTeamMember> {
			const localVarPath = this.basePath + '/project/projects/{id}/teamMembers'
				.replace('{' + 'id' + '}', String(params.id));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			headerParams['Content-Type'] = 'application/json';

			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersPost');
			}
			// verify required parameter 'teamMember' is set
			if (params.teamMember == null) {
				throw new Error('Missing required parameter teamMember when calling projectProjectsIdTeamMembersPost');
			}
			let fetchParams = {
				method: 'POST',
				headers: headerParams,
				body: JSON.stringify(params.teamMember),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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
		 * Delete Team Member By Id
		 * @param id
		 * @param teamMemberId
		 */
		public projectProjectsIdTeamMembersTeamMemberIdDelete (params: {  id: number; teamMemberId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
			const localVarPath = this.basePath + '/project/projects/{id}/teamMembers/{teamMemberId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'teamMemberId' + '}', String(params.teamMemberId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersTeamMemberIdDelete');
			}
			// verify required parameter 'teamMemberId' is set
			if (params.teamMemberId == null) {
				throw new Error('Missing required parameter teamMemberId when calling projectProjectsIdTeamMembersTeamMemberIdDelete');
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
		 * Get Team Member By Id
		 * @param id
		 * @param teamMemberId
		 */
		public projectProjectsIdTeamMembersTeamMemberIdGet (params: {  id: number; teamMemberId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectTeamMember> {
			const localVarPath = this.basePath + '/project/projects/{id}/teamMembers/{teamMemberId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'teamMemberId' + '}', String(params.teamMemberId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
			// verify required parameter 'id' is set
			if (params.id == null) {
				throw new Error('Missing required parameter id when calling projectProjectsIdTeamMembersTeamMemberIdGet');
			}
			// verify required parameter 'teamMemberId' is set
			if (params.teamMemberId == null) {
				throw new Error('Missing required parameter teamMemberId when calling projectProjectsIdTeamMembersTeamMemberIdGet');
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
		 * Update Team Member
		 * @param id
		 * @param teamMemberId
		 * @param operations
		 */
		public projectProjectsIdTeamMembersTeamMemberIdPatch (params: {  id: number; teamMemberId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectTeamMember> {
			const localVarPath = this.basePath + '/project/projects/{id}/teamMembers/{teamMemberId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'teamMemberId' + '}', String(params.teamMemberId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
		 * Replace Team Member
		 * @param id
		 * @param teamMemberId
		 * @param teamMember
		 */
		public projectProjectsIdTeamMembersTeamMemberIdPut (params: {  id: number; teamMemberId: number; teamMember: ProjectTeamMember; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ProjectTeamMember> {
			const localVarPath = this.basePath + '/project/projects/{id}/teamMembers/{teamMemberId}'
				.replace('{' + 'id' + '}', String(params.id))
				.replace('{' + 'teamMemberId' + '}', String(params.teamMemberId));

			let queryParameters: any = assign({}, extraQueryParams);
			let headerParams: any = assign({}, this.defaultHeaders);
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
			let fetchParams = {
				method: 'PUT',
				headers: headerParams,
				body: JSON.stringify(params.teamMember),

			};

			if (extraFetchParams) {
				fetchParams = assign(fetchParams, extraFetchParams);
			}

			let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

			return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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
