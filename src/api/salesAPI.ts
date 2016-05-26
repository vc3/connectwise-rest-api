///<reference path="../../typings/index.d.ts"/>
/* tslint:disable */

'use strict';


import * as querystring from 'querystring';
import * as fetch from 'isomorphic-fetch';
import {assign} from './assign';


export interface Activity {
    "id"?: number;
    "name": string;
    "type"?: ActivityTypeReference;
    "company"?: CompanyReference;
    "contact"?: ContactReference;
    "phoneNumber"?: string;
    "email"?: string;
    "status": ActivityStatusReference;
    "opportunity"?: OpportunityReference;
    "ticket"?: TicketReference;
    "agreement"?: AgreementReference;
    "campaign"?: CampaignReference;
    "notes"?: string;
    "dateStart"?: Date;
    "dateEnd"?: Date;
    "assignedBy"?: MemberReference;
    "assignTo": MemberReference;
    "scheduleStatus"?: ScheduleStatusReference;
    "reminder"?: ReminderReference;
    "where"?: ServiceLocationReference;
    "notifyFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "customFields"?: Array<CustomFieldValue>;
}

export interface ActivityStatus {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "spawnFollowupFlag"?: boolean;
    "closedFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ActivityStatusReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ActivityType {
    "id"?: number;
    "name": string;
    "points"?: number;
    "defaultFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "emailFlag"?: boolean;
    "memoFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ActivityTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Agreement {
    "id"?: number;
    "name": string;
    "type": AgreementTypeReference;
    "company": CompanyReference;
    "contact": ContactReference;
    "subContractCompany"?: CompanyReference;
    "subContractContact"?: ContactReference;
    "parentAgreementId"?: number;
    "customerPO"?: string;
    "locationId"?: number;
    "businessUnitId"?: number;
    "restrictLocationFlag"?: boolean;
    "restrictDepartmentFlag"?: boolean;
    "startDate"?: Date;
    "endDate"?: Date;
    "noEndingDateFlag"?: boolean;
    "opportunity"?: OpportunityReference;
    "cancelledFlag"?: boolean;
    "dateCancelled"?: Date;
    "reasonCancelled"?: string;
    "slaId"?: number;
    "workOrder"?: string;
    "internalNotes"?: string;
    "applicationUnits"?: ApplicationUnitsEnum;
    "applicationLimit"?: number;
    "applicationCycle"?: ApplicationCycleEnum;
    "applicationUnlimitedFlag"?: boolean;
    "oneTimeFlag"?: boolean;
    "coverAgreementTime"?: boolean;
    "coverAgreementProduct"?: boolean;
    "coverAgreementExpense"?: boolean;
    "coverSalesTax"?: boolean;
    "carryOverUnused"?: boolean;
    "allowOverruns"?: boolean;
    "expiredDays"?: number;
    "limit"?: number;
    "expireWhenZero"?: boolean;
    "chargeToFirm"?: boolean;
    "employeeCompRate"?: EmployeeCompRateEnum;
    "employeeCompNotExceed"?: EmployeeCompNotExceedEnum;
    "compHourlyRate"?: number;
    "compLimitAmount"?: number;
    "billCycleId"?: number;
    "billOneTimeFlag"?: boolean;
    "billTermsId"?: number;
    "invoicingCycle"?: InvoicingCycleEnum;
    "billToCompany"?: CompanyReference;
    "billToSite"?: SiteReference;
    "billAmount"?: number;
    "taxable"?: boolean;
    "prorateFirstBill"?: number;
    "billStartDate"?: Date;
    "taxCodeId"?: number;
    "restrictDownPayment"?: boolean;
    "invoiceDescription"?: string;
    "topComment"?: boolean;
    "bottomComment"?: boolean;
    "workRole"?: WorkRoleReference;
    "workType"?: WorkTypeReference;
    "projectTypeId"?: number;
    "invoiceTemplateSetupId"?: number;
    "billTime"?: BillTimeEnum;
    "billExpenses"?: BillExpensesEnum;
    "billProducts"?: BillProductsEnum;
    "billableTimeInvoice"?: boolean;
    "billableExpenseInvoice"?: boolean;
    "billableProductInvoice"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "periodType"?: PeriodTypeEnum;
}


export enum ApplicationUnitsEnum {
    Amount = <any> 'Amount',
    Hours = <any> 'Hours',
    Incidents = <any> 'Incidents'
}

export enum ApplicationCycleEnum {
    Contract2Weeks = <any> 'Contract2Weeks',
    Contract4Weeks = <any> 'Contract4Weeks',
    ContractYear = <any> 'ContractYear',
    CalendarMonth = <any> 'CalendarMonth',
    CalendarQuarter = <any> 'CalendarQuarter',
    CalendarWeek = <any> 'CalendarWeek',
    ContractQuarter = <any> 'ContractQuarter',
    CalendarYear = <any> 'CalendarYear'
}

export enum EmployeeCompRateEnum {
    Actual = <any> 'Actual',
    Hourly = <any> 'Hourly'
}

export enum EmployeeCompNotExceedEnum {
    Billing = <any> 'Billing',
    Percent = <any> 'Percent',
    Amount = <any> 'Amount'
}

export enum InvoicingCycleEnum {
    CalendarYear = <any> 'CalendarYear',
    ContractYear = <any> 'ContractYear'
}

export enum PeriodTypeEnum {
    Current = <any> 'Current',
    Future = <any> 'Future',
    Both = <any> 'Both',
    Undefined = <any> 'Undefined'
}

export interface AgreementReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface AgreementTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface BillingTermsReference {
    "id"?: number;
    "name"?: string;

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

export interface CampaignReference {
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
export interface Error {
    "code"?: string;
    "message"?: string;
    "errors"?: Array<ValidationError>;
}

export interface Forecast {
    "id"?: number;
    "name"?: string;
    "revenue"?: number;
    "cost"?: number;
    "type": TypeEnum;
    "status"?: OpportunityStatusReference;
    "includedFlag"?: boolean;
    "recurring"?: ProductRecurring;
    "percent"?: number;
    "margin"?: number;
    "opportunityId"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum TypeEnum {
    Product = <any> 'Product',
    Service = <any> 'Service',
    Agreement = <any> 'Agreement',
    Other1 = <any> 'Other1',
    Other2 = <any> 'Other2'
}
export interface Guid {
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

export interface Opportunity {
    "id"?: number;
    "name": string;
    "expectedCloseDate"?: Date;
    "type"?: OpportunityTypeReference;
    "stage"?: OpportunityStageReference;
    "status"?: OpportunityStatusReference;
    "priority"?: OpportunityPriorityReference;
    "notes"?: string;
    "probability"?: OpportunityProbabilityReference;
    "source"?: string;
    "rating"?: OpportunityRatingReference;
    "campaign"?: CampaignReference;
    "primarySalesRep": MemberReference;
    "secondarySalesRep"?: MemberReference;
    "locationId"?: number;
    "businessUnitId"?: number;
    "company": CompanyReference;
    "contact": ContactReference;
    "site": SiteReference;
    "customerPO"?: string;
    "pipelineChangeDate"?: Date;
    "dateBecameLead"?: Date;
    "closedDate"?: Date;
    "closedBy"?: MemberReference;
    "totalSalesTax"?: number;
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
    "customFields"?: Array<CustomFieldValue>;
}

export interface OpportunityContact {
    "id"?: number;
    "contact": ContactReference;
    "company"?: CompanyReference;
    "role"?: OpportunitySalesRoleReference;
    "notes"?: string;
    "referralFlag"?: boolean;
    "opportunityId"?: number;
    "phoneNumber"?: string;
    "emailAddress"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OpportunityNote {
    "id"?: number;
    "opportunityId"?: number;
    "type"?: NoteTypeReference;
    "text": string;
    "flagged"?: boolean;
    "enteredBy"?: string;
    "mobileGuid"?: Guid;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OpportunityPriorityReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OpportunityProbabilityReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OpportunityRating {
    "id"?: number;
    "name": string;
    "sortOrder"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OpportunityRatingReference {
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

export interface OpportunitySalesRoleReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OpportunityStageReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OpportunityStatus {
    "id"?: number;
    "name": string;
    "wonFlag"?: boolean;
    "lostFlag"?: boolean;
    "closedFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "defaultFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "enteredBy"?: string;
    "dateEntered"?: Date;
}

export interface OpportunityStatusReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OpportunityToAgreementConversion {
    "agreementId"?: number;
    "name"?: string;
    "type"?: AgreementTypeReference;
    "startDate"?: string;
    "endDate"?: string;
    "noEndingDateFlag"?: boolean;
    "billCycleId"?: number;
    "locationId"?: number;
    "businessUnitId"?: number;
    "includeAllNotesFlag"?: boolean;
    "includeAllDocumentsFlag"?: boolean;
    "includeAllProductsFlag"?: boolean;
    "includeNoteIds"?: Array<number>;
    "includeDocumentIds"?: Array<number>;
    "includeProductIds"?: Array<number>;
}

export interface OpportunityToProjectConversion {
    "projectId"?: number;
    "name"?: string;
    "status"?: ProjectStatusReference;
    "locationId"?: number;
    "businessUnitId"?: number;
    "board"?: ProjectBoardReference;
    "manager"?: MemberReference;
    "estimatedStart"?: string;
    "estimatedEnd"?: string;
    "includeAllNotesFlag"?: boolean;
    "includeAllDocumentsFlag"?: boolean;
    "includeAllProductsFlag"?: boolean;
    "includeNoteIds"?: Array<number>;
    "includeDocumentIds"?: Array<number>;
    "includeProductIds"?: Array<number>;
}

export interface OpportunityToSalesOrderConversion {
    "salesOrderId"?: number;
    "name"?: string;
    "includeAllNotesFlag"?: boolean;
    "includeAllDocumentsFlag"?: boolean;
    "includeAllProductsFlag"?: boolean;
    "includeNoteIds"?: Array<number>;
    "includeDocumentIds"?: Array<number>;
    "includeProductIds"?: Array<number>;
}

export interface OpportunityToServiceTicketConversion {
    "ticketId"?: number;
    "summary"?: string;
    "includeAllNotesFlag"?: boolean;
    "includeAllDocumentsFlag"?: boolean;
    "includeAllProductsFlag"?: boolean;
    "includeNoteIds"?: Array<number>;
    "includeDocumentIds"?: Array<number>;
    "includeProductIds"?: Array<number>;
}

export interface OpportunityType {
    "id"?: number;
    "description": string;
    "inactiveFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OpportunityTypeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Order {
    "id"?: number;
    "company": CompanyReference;
    "contact"?: ContactReference;
    "phone"?: string;
    "phoneExt"?: string;
    "email"?: string;
    "site"?: SiteReference;
    "status": OrderStatusReference;
    "opportunity"?: OpportunityReference;
    "orderDate"?: Date;
    "dueDate"?: Date;
    "billingTerms"?: BillingTermsReference;
    "taxCode"?: TaxCodeReference;
    "poNumber"?: string;
    "locationId"?: number;
    "businessUnitId"?: number;
    "salesRep": MemberReference;
    "notes"?: string;
    "billClosedFlag"?: boolean;
    "billShippedFlag"?: boolean;
    "restrictDownpaymentFlag"?: boolean;
    "description"?: string;
    "topCommentFlag"?: boolean;
    "bottomCommentFlag"?: boolean;
    "shipToCompany"?: CompanyReference;
    "shipToContact"?: ContactReference;
    "shipToSite"?: SiteReference;
    "billToCompany"?: CompanyReference;
    "billToContact"?: ContactReference;
    "billToSite"?: SiteReference;
    "productIds"?: Array<number>;
    "documentIds"?: Array<number>;
    "invoiceIds"?: Array<number>;
    "configIds"?: Array<number>;
    "total"?: number;
    "taxTotal"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OrderStatus {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "sortOrder"?: number;
    "closedFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface OrderStatusReference {
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

export interface PriorityReference {
    "id"?: number;
    "name"?: string;
    "sort"?: number;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ProductRecurring {
    "recurringRevenue": number;
    "recurringCost": number;
    "startDate": Date;
    "endDate": Date;
    "billCycleId": number;
    "cycles": number;
    "cycleType": CycleTypeEnum;
}


export enum CycleTypeEnum {
    CalendarYear = <any> 'CalendarYear',
    ContractYear = <any> 'ContractYear'
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


export enum BillingMethodEnum {
    ActualRates = <any> 'ActualRates',
    FixedFee = <any> 'FixedFee',
    NotToExceed = <any> 'NotToExceed',
    OverrideRate = <any> 'OverrideRate'
}

export enum BudgetAnalysisEnum {
    ActualHours = <any> 'ActualHours',
    BillableHours = <any> 'BillableHours'
}

export enum BillingRateTypeEnum {
    WorkRole = <any> 'WorkRole',
    StaffMember = <any> 'StaffMember'
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
export interface ProjectBoardReference {
    "id"?: number;
    "name"?: string;

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

export interface ProjectStatusReference {
    "id"?: number;
    "name"?: string;

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

export interface ReminderReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface SalesTeamReference {
    "id"?: number;
    "identifier"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface ScheduleStatusReference {
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

export interface TaxCodeReference {
    "id"?: number;
    "name"?: string;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}

export interface Team {
    "id"?: number;
    "type": TypeEnum;
    "member"?: MemberReference;
    "salesTeam"?: SalesTeamReference;
    "commissionPercent"?: number;
    "referralFlag"?: boolean;
    "opportunityId"?: number;
    "responsibleFlag"?: boolean;

    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}


export enum TypeEnum {
    Individual = <any> 'Individual',
    Team = <any> 'Team'
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

export enum PredecessorTypeEnum {
    Ticket = <any> 'Ticket',
    Phase = <any> 'Phase'
}
export interface TicketReference {
    "id"?: number;
    "summary"?: string;

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

    export class ActivitiesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Activities Count
         * @param conditions
         */
        public salesActivitiesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/activities/count';

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
         * Get Activities
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesActivitiesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Activity>> {
            const localVarPath = this.basePath + '/sales/activities';

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
         * Delete Activity By Id
         * @param id
         */
        public salesActivitiesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/activities/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesIdDelete');
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
         * Get Activity By Id
         * @param id
         */
        public salesActivitiesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Activity> {
            const localVarPath = this.basePath + '/sales/activities/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesIdGet');
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
         * Update Activity
         * @param id
         * @param operations
         */
        public salesActivitiesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Activity> {
            const localVarPath = this.basePath + '/sales/activities/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesActivitiesIdPatch');
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
         * Replace Activity
         * @param id
         * @param activity
         */
        public salesActivitiesIdPut (params: {  id: number; activity: Activity; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Activity> {
            const localVarPath = this.basePath + '/sales/activities/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesIdPut');
            }
            // verify required parameter 'activity' is set
            if (params.activity == null) {
                throw new Error('Missing required parameter activity when calling salesActivitiesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.activity),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Create Activity
         * @param activity
         */
        public salesActivitiesPost (params: {  activity: Activity; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Activity> {
            const localVarPath = this.basePath + '/sales/activities';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'activity' is set
            if (params.activity == null) {
                throw new Error('Missing required parameter activity when calling salesActivitiesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.activity),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

    export class ActivityStatusesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Activity Statuses Count
         * @param conditions
         */
        public salesActivitiesStatusesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/activities/statuses/count';

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
         * Get Activity Statuses
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesActivitiesStatusesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ActivityStatus>> {
            const localVarPath = this.basePath + '/sales/activities/statuses';

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
         * Delete Activity Status By Id
         * @param id
         */
        public salesActivitiesStatusesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/activities/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesStatusesIdDelete');
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
         * Get Activity Status By Id
         * @param id
         */
        public salesActivitiesStatusesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ActivityStatus> {
            const localVarPath = this.basePath + '/sales/activities/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesStatusesIdGet');
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
         * Update Activity Status
         * @param id
         * @param operations
         */
        public salesActivitiesStatusesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ActivityStatus> {
            const localVarPath = this.basePath + '/sales/activities/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesStatusesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesActivitiesStatusesIdPatch');
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
         * Replace Activity Status
         * @param id
         * @param activityStatus
         */
        public salesActivitiesStatusesIdPut (params: {  id: number; activityStatus: ActivityStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ActivityStatus> {
            const localVarPath = this.basePath + '/sales/activities/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesStatusesIdPut');
            }
            // verify required parameter 'activityStatus' is set
            if (params.activityStatus == null) {
                throw new Error('Missing required parameter activityStatus when calling salesActivitiesStatusesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.activityStatus),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Create Activity Status
         * @param activityStatus
         */
        public salesActivitiesStatusesPost (params: {  activityStatus: ActivityStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ActivityStatus> {
            const localVarPath = this.basePath + '/sales/activities/statuses';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'activityStatus' is set
            if (params.activityStatus == null) {
                throw new Error('Missing required parameter activityStatus when calling salesActivitiesStatusesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.activityStatus),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

    export class ActivityTypesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Activity Types Count
         * @param conditions
         */
        public salesActivitiesTypesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/activities/types/count';

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
         * Get Activity Types
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesActivitiesTypesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ActivityType>> {
            const localVarPath = this.basePath + '/sales/activities/types';

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
         * Delete Activity Type By Id
         * @param id
         */
        public salesActivitiesTypesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/activities/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesTypesIdDelete');
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
         * Get Activity Type By Id
         * @param id
         */
        public salesActivitiesTypesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ActivityType> {
            const localVarPath = this.basePath + '/sales/activities/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesTypesIdGet');
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
         * Update Activity Type
         * @param id
         * @param operations
         */
        public salesActivitiesTypesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ActivityType> {
            const localVarPath = this.basePath + '/sales/activities/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesTypesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesActivitiesTypesIdPatch');
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
         * Replace Activity Type
         * @param id
         * @param activityType
         */
        public salesActivitiesTypesIdPut (params: {  id: number; activityType: ActivityType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ActivityType> {
            const localVarPath = this.basePath + '/sales/activities/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesActivitiesTypesIdPut');
            }
            // verify required parameter 'activityType' is set
            if (params.activityType == null) {
                throw new Error('Missing required parameter activityType when calling salesActivitiesTypesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.activityType),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Create Activity Type
         * @param activityType
         */
        public salesActivitiesTypesPost (params: {  activityType: ActivityType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ActivityType> {
            const localVarPath = this.basePath + '/sales/activities/types';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'activityType' is set
            if (params.activityType == null) {
                throw new Error('Missing required parameter activityType when calling salesActivitiesTypesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.activityType),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

    export class OpportunitiesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Opportunities Count
         * @param conditions
         */
        public salesOpportunitiesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/opportunities/count';

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
         * Get Opportunities
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesOpportunitiesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Opportunity>> {
            const localVarPath = this.basePath + '/sales/opportunities';

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
         * Convert Opportunity To Agreement
         * @param id
         * @param conversion
         */
        public salesOpportunitiesIdConvertToAgreementPost (params: {  id: number; conversion: OpportunityToAgreementConversion; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Agreement> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/convertToAgreement'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdConvertToAgreementPost');
            }
            // verify required parameter 'conversion' is set
            if (params.conversion == null) {
                throw new Error('Missing required parameter conversion when calling salesOpportunitiesIdConvertToAgreementPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.conversion),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Convert Opportunity To Project
         * @param id
         * @param conversion
         */
        public salesOpportunitiesIdConvertToProjectPost (params: {  id: number; conversion: OpportunityToProjectConversion; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Project> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/convertToProject'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdConvertToProjectPost');
            }
            // verify required parameter 'conversion' is set
            if (params.conversion == null) {
                throw new Error('Missing required parameter conversion when calling salesOpportunitiesIdConvertToProjectPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.conversion),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Convert Opportunity To Sales Order
         * @param id
         * @param conversion
         */
        public salesOpportunitiesIdConvertToSalesOrderPost (params: {  id: number; conversion: OpportunityToSalesOrderConversion; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Order> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/convertToSalesOrder'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdConvertToSalesOrderPost');
            }
            // verify required parameter 'conversion' is set
            if (params.conversion == null) {
                throw new Error('Missing required parameter conversion when calling salesOpportunitiesIdConvertToSalesOrderPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.conversion),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Convert Opportunity To Service Ticket
         * @param id
         * @param conversion
         */
        public salesOpportunitiesIdConvertToServiceTicketPost (params: {  id: number; conversion: OpportunityToServiceTicketConversion; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Ticket> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/convertToServiceTicket'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdConvertToServiceTicketPost');
            }
            // verify required parameter 'conversion' is set
            if (params.conversion == null) {
                throw new Error('Missing required parameter conversion when calling salesOpportunitiesIdConvertToServiceTicketPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.conversion),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Delete Opportunity By Id
         * @param id
         */
        public salesOpportunitiesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdDelete');
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
         * Get Opportunity By Id
         * @param id
         */
        public salesOpportunitiesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Opportunity> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdGet');
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
         * Update Opportunity
         * @param id
         * @param operations
         */
        public salesOpportunitiesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Opportunity> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesOpportunitiesIdPatch');
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
         * Replace Opportunity
         * @param id
         * @param opportunity
         */
        public salesOpportunitiesIdPut (params: {  id: number; opportunity: Opportunity; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Opportunity> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdPut');
            }
            // verify required parameter 'opportunity' is set
            if (params.opportunity == null) {
                throw new Error('Missing required parameter opportunity when calling salesOpportunitiesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.opportunity),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Create Opportunity
         * @param opportunity
         */
        public salesOpportunitiesPost (params: {  opportunity: Opportunity; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Opportunity> {
            const localVarPath = this.basePath + '/sales/opportunities';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'opportunity' is set
            if (params.opportunity == null) {
                throw new Error('Missing required parameter opportunity when calling salesOpportunitiesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.opportunity),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

    export class OpportunityContactsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Delete Opportunity Contact By Id
         * @param id
         * @param contactId
         */
        public salesOpportunitiesIdContactsContactIdDelete (params: {  id: number; contactId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/contacts/{contactId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'contactId' + '}', String(params.contactId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsContactIdDelete');
            }
            // verify required parameter 'contactId' is set
            if (params.contactId == null) {
                throw new Error('Missing required parameter contactId when calling salesOpportunitiesIdContactsContactIdDelete');
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
         * Get Opportunity Contact By Id
         * @param id
         * @param contactId
         */
        public salesOpportunitiesIdContactsContactIdGet (params: {  id: number; contactId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityContact> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/contacts/{contactId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'contactId' + '}', String(params.contactId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsContactIdGet');
            }
            // verify required parameter 'contactId' is set
            if (params.contactId == null) {
                throw new Error('Missing required parameter contactId when calling salesOpportunitiesIdContactsContactIdGet');
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
         * Update Opportunity Contact
         * @param id
         * @param contactId
         * @param operations
         */
        public salesOpportunitiesIdContactsContactIdPatch (params: {  id: number; contactId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityContact> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/contacts/{contactId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'contactId' + '}', String(params.contactId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsContactIdPatch');
            }
            // verify required parameter 'contactId' is set
            if (params.contactId == null) {
                throw new Error('Missing required parameter contactId when calling salesOpportunitiesIdContactsContactIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesOpportunitiesIdContactsContactIdPatch');
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
         * Replace Opportunity Contact
         * @param id
         * @param contactId
         * @param opportunityContact
         */
        public salesOpportunitiesIdContactsContactIdPut (params: {  id: number; contactId: number; opportunityContact: OpportunityContact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityContact> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/contacts/{contactId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'contactId' + '}', String(params.contactId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsContactIdPut');
            }
            // verify required parameter 'contactId' is set
            if (params.contactId == null) {
                throw new Error('Missing required parameter contactId when calling salesOpportunitiesIdContactsContactIdPut');
            }
            // verify required parameter 'opportunityContact' is set
            if (params.opportunityContact == null) {
                throw new Error('Missing required parameter opportunityContact when calling salesOpportunitiesIdContactsContactIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.opportunityContact),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Get Opportunity Contacts Count
         * @param id
         * @param conditions
         */
        public salesOpportunitiesIdContactsCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/contacts/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsCountGet');
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
         * Get Opportunity Contacts
         * @param id
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesOpportunitiesIdContactsGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<OpportunityContact>> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/contacts'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsGet');
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
         * Create Opportunity Contact
         * @param id
         * @param opportunityContact
         */
        public salesOpportunitiesIdContactsPost (params: {  id: number; opportunityContact: OpportunityContact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityContact> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/contacts'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdContactsPost');
            }
            // verify required parameter 'opportunityContact' is set
            if (params.opportunityContact == null) {
                throw new Error('Missing required parameter opportunityContact when calling salesOpportunitiesIdContactsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.opportunityContact),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

    export class OpportunityForecastsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Forecasts Count
         * @param id
         * @param conditions
         */
        public salesOpportunitiesIdForecastCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/forecast/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastCountGet');
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
         * Delete Forecast By Id
         * @param id
         * @param forecastId
         */
        public salesOpportunitiesIdForecastForecastIdDelete (params: {  id: number; forecastId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/forecast/{forecastId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'forecastId' + '}', String(params.forecastId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastForecastIdDelete');
            }
            // verify required parameter 'forecastId' is set
            if (params.forecastId == null) {
                throw new Error('Missing required parameter forecastId when calling salesOpportunitiesIdForecastForecastIdDelete');
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
         * Get Forecast By Id
         * @param id
         * @param forecastId
         */
        public salesOpportunitiesIdForecastForecastIdGet (params: {  id: number; forecastId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Forecast> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/forecast/{forecastId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'forecastId' + '}', String(params.forecastId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastForecastIdGet');
            }
            // verify required parameter 'forecastId' is set
            if (params.forecastId == null) {
                throw new Error('Missing required parameter forecastId when calling salesOpportunitiesIdForecastForecastIdGet');
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
         * Update Forecast
         * @param id
         * @param forecastId
         * @param operations
         */
        public salesOpportunitiesIdForecastForecastIdPatch (params: {  id: number; forecastId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Forecast> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/forecast/{forecastId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'forecastId' + '}', String(params.forecastId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastForecastIdPatch');
            }
            // verify required parameter 'forecastId' is set
            if (params.forecastId == null) {
                throw new Error('Missing required parameter forecastId when calling salesOpportunitiesIdForecastForecastIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesOpportunitiesIdForecastForecastIdPatch');
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
         * Replace Forecast
         * @param id
         * @param forecastId
         * @param forecast
         */
        public salesOpportunitiesIdForecastForecastIdPut (params: {  id: number; forecastId: number; forecast: Forecast; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Forecast> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/forecast/{forecastId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'forecastId' + '}', String(params.forecastId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastForecastIdPut');
            }
            // verify required parameter 'forecastId' is set
            if (params.forecastId == null) {
                throw new Error('Missing required parameter forecastId when calling salesOpportunitiesIdForecastForecastIdPut');
            }
            // verify required parameter 'forecast' is set
            if (params.forecast == null) {
                throw new Error('Missing required parameter forecast when calling salesOpportunitiesIdForecastForecastIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.forecast),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Get Forecasts
         * @param id
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesOpportunitiesIdForecastGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Forecast>> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/forecast'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastGet');
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
         * Create Forecast
         * @param id
         * @param forecast
         */
        public salesOpportunitiesIdForecastPost (params: {  id: number; forecast: Forecast; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Forecast> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/forecast'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdForecastPost');
            }
            // verify required parameter 'forecast' is set
            if (params.forecast == null) {
                throw new Error('Missing required parameter forecast when calling salesOpportunitiesIdForecastPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.forecast),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

    export class OpportunityNotesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Opportunity Notes Count
         * @param id
         * @param conditions
         */
        public salesOpportunitiesIdNotesCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<OpportunityNote>> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/notes/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesCountGet');
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
         * Get Opportunity Notes
         * @param id
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesOpportunitiesIdNotesGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<OpportunityNote>> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/notes'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesGet');
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
         * Delete Opportunity Note By Id
         * @param id
         * @param noteId
         */
        public salesOpportunitiesIdNotesNoteIdDelete (params: {  id: number; noteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesNoteIdDelete');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling salesOpportunitiesIdNotesNoteIdDelete');
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
         * Get Opportunity Note By Id
         * @param id
         * @param noteId
         */
        public salesOpportunitiesIdNotesNoteIdGet (params: {  id: number; noteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityNote> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesNoteIdGet');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling salesOpportunitiesIdNotesNoteIdGet');
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
         * Update Opportunity Note
         * @param id
         * @param noteId
         * @param operations
         */
        public salesOpportunitiesIdNotesNoteIdPatch (params: {  id: number; noteId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityNote> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesNoteIdPatch');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling salesOpportunitiesIdNotesNoteIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesOpportunitiesIdNotesNoteIdPatch');
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
         * Replace Opportunity Note
         * @param id
         * @param noteId
         * @param note
         */
        public salesOpportunitiesIdNotesNoteIdPut (params: {  id: number; noteId: number; note: OpportunityNote; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityNote> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/notes/{noteId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'noteId' + '}', String(params.noteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesNoteIdPut');
            }
            // verify required parameter 'noteId' is set
            if (params.noteId == null) {
                throw new Error('Missing required parameter noteId when calling salesOpportunitiesIdNotesNoteIdPut');
            }
            // verify required parameter 'note' is set
            if (params.note == null) {
                throw new Error('Missing required parameter note when calling salesOpportunitiesIdNotesNoteIdPut');
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
         * Create Opportunity Note
         * @param id
         * @param note
         */
        public salesOpportunitiesIdNotesPost (params: {  id: number; note: OpportunityNote; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityNote> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/notes'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdNotesPost');
            }
            // verify required parameter 'note' is set
            if (params.note == null) {
                throw new Error('Missing required parameter note when calling salesOpportunitiesIdNotesPost');
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

    export class OpportunityRatingsApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Opportunity Ratings Count
         * @param conditions
         */
        public salesOpportunitiesRatingsCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/opportunities/ratings/count';

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
         * Get Opportunity Ratings
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesOpportunitiesRatingsGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<OpportunityRating>> {
            const localVarPath = this.basePath + '/sales/opportunities/ratings';

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
         * Delete Opportunity Rating By Id
         * @param id
         */
        public salesOpportunitiesRatingsIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/opportunities/ratings/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesRatingsIdDelete');
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
         * Get Opportunity Rating By Id
         * @param id
         */
        public salesOpportunitiesRatingsIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityRating> {
            const localVarPath = this.basePath + '/sales/opportunities/ratings/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesRatingsIdGet');
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
         * Update Opportunity Rating
         * @param id
         * @param operations
         */
        public salesOpportunitiesRatingsIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityRating> {
            const localVarPath = this.basePath + '/sales/opportunities/ratings/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesRatingsIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesOpportunitiesRatingsIdPatch');
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
         * Replace Opportunity Rating
         * @param id
         * @param opportunityRating
         */
        public salesOpportunitiesRatingsIdPut (params: {  id: number; opportunityRating: OpportunityRating; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityRating> {
            const localVarPath = this.basePath + '/sales/opportunities/ratings/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesRatingsIdPut');
            }
            // verify required parameter 'opportunityRating' is set
            if (params.opportunityRating == null) {
                throw new Error('Missing required parameter opportunityRating when calling salesOpportunitiesRatingsIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.opportunityRating),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Create Opportunity Rating
         * @param opportunityRating
         */
        public salesOpportunitiesRatingsPost (params: {  opportunityRating: OpportunityRating; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityRating> {
            const localVarPath = this.basePath + '/sales/opportunities/ratings';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'opportunityRating' is set
            if (params.opportunityRating == null) {
                throw new Error('Missing required parameter opportunityRating when calling salesOpportunitiesRatingsPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.opportunityRating),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

    export class OpportunityStatusesApi {
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
         * @param conditions
         */
        public salesOpportunitiesStatusesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/opportunities/statuses/count';

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
         * Get Statuses
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesOpportunitiesStatusesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<OpportunityStatus>> {
            const localVarPath = this.basePath + '/sales/opportunities/statuses';

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
         * Delete Status By Id
         * @param id
         */
        public salesOpportunitiesStatusesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/opportunities/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesStatusesIdDelete');
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
         */
        public salesOpportunitiesStatusesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityStatus> {
            const localVarPath = this.basePath + '/sales/opportunities/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesStatusesIdGet');
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
         * @param operations
         */
        public salesOpportunitiesStatusesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityStatus> {
            const localVarPath = this.basePath + '/sales/opportunities/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesStatusesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesOpportunitiesStatusesIdPatch');
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
         * Replace Status
         * @param id
         * @param status
         */
        public salesOpportunitiesStatusesIdPut (params: {  id: number; status: OpportunityStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityStatus> {
            const localVarPath = this.basePath + '/sales/opportunities/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesStatusesIdPut');
            }
            // verify required parameter 'status' is set
            if (params.status == null) {
                throw new Error('Missing required parameter status when calling salesOpportunitiesStatusesIdPut');
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
        /**
         *
         * Create Status
         * @param status
         */
        public salesOpportunitiesStatusesPost (params: {  status: OpportunityStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityStatus> {
            const localVarPath = this.basePath + '/sales/opportunities/statuses';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'status' is set
            if (params.status == null) {
                throw new Error('Missing required parameter status when calling salesOpportunitiesStatusesPost');
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
    }
//}
//export namespace  {
    'use strict';

    export class OpportunityTeamsApi {
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
        public salesOpportunitiesIdTeamCountGet (params: {  id: number; conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/team/count'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamCountGet');
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
        public salesOpportunitiesIdTeamGet (params: {  id: number; conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Team>> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/team'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamGet');
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
        public salesOpportunitiesIdTeamPost (params: {  id: number; team: Team; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Team> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/team'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamPost');
            }
            // verify required parameter 'team' is set
            if (params.team == null) {
                throw new Error('Missing required parameter team when calling salesOpportunitiesIdTeamPost');
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
        public salesOpportunitiesIdTeamTeamIdDelete (params: {  id: number; teamId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/team/{teamId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'teamId' + '}', String(params.teamId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamTeamIdDelete');
            }
            // verify required parameter 'teamId' is set
            if (params.teamId == null) {
                throw new Error('Missing required parameter teamId when calling salesOpportunitiesIdTeamTeamIdDelete');
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
        public salesOpportunitiesIdTeamTeamIdGet (params: {  id: number; teamId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Team> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/team/{teamId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'teamId' + '}', String(params.teamId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamTeamIdGet');
            }
            // verify required parameter 'teamId' is set
            if (params.teamId == null) {
                throw new Error('Missing required parameter teamId when calling salesOpportunitiesIdTeamTeamIdGet');
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
        public salesOpportunitiesIdTeamTeamIdPatch (params: {  id: number; teamId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Team> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/team/{teamId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'teamId' + '}', String(params.teamId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamTeamIdPatch');
            }
            // verify required parameter 'teamId' is set
            if (params.teamId == null) {
                throw new Error('Missing required parameter teamId when calling salesOpportunitiesIdTeamTeamIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesOpportunitiesIdTeamTeamIdPatch');
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
        public salesOpportunitiesIdTeamTeamIdPut (params: {  id: number; teamId: number; team: Team; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Team> {
            const localVarPath = this.basePath + '/sales/opportunities/{id}/team/{teamId}'
                .replace('{' + 'id' + '}', String(params.id))
                .replace('{' + 'teamId' + '}', String(params.teamId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesIdTeamTeamIdPut');
            }
            // verify required parameter 'teamId' is set
            if (params.teamId == null) {
                throw new Error('Missing required parameter teamId when calling salesOpportunitiesIdTeamTeamIdPut');
            }
            // verify required parameter 'team' is set
            if (params.team == null) {
                throw new Error('Missing required parameter team when calling salesOpportunitiesIdTeamTeamIdPut');
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

    export class OpportunityTypesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Opportunity Types Count
         * @param conditions
         */
        public salesOpportunitiesTypesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/opportunities/types/count';

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
         * Get Opportunity Types
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesOpportunitiesTypesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<OpportunityType>> {
            const localVarPath = this.basePath + '/sales/opportunities/types';

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
         * Delete Opportunity Type By Id
         * @param id
         */
        public salesOpportunitiesTypesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/opportunities/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesTypesIdDelete');
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
         * Get Opportunity Type By Id
         * @param id
         */
        public salesOpportunitiesTypesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityType> {
            const localVarPath = this.basePath + '/sales/opportunities/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesTypesIdGet');
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
         * Update Opportunity Type
         * @param id
         * @param operations
         */
        public salesOpportunitiesTypesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityType> {
            const localVarPath = this.basePath + '/sales/opportunities/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesTypesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesOpportunitiesTypesIdPatch');
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
         * Replace Opportunity Type
         * @param id
         * @param opportunityType
         */
        public salesOpportunitiesTypesIdPut (params: {  id: number; opportunityType: OpportunityType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityType> {
            const localVarPath = this.basePath + '/sales/opportunities/types/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOpportunitiesTypesIdPut');
            }
            // verify required parameter 'opportunityType' is set
            if (params.opportunityType == null) {
                throw new Error('Missing required parameter opportunityType when calling salesOpportunitiesTypesIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.opportunityType),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Create Opportunity Type
         * @param opportunityType
         */
        public salesOpportunitiesTypesPost (params: {  opportunityType: OpportunityType; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OpportunityType> {
            const localVarPath = this.basePath + '/sales/opportunities/types';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'opportunityType' is set
            if (params.opportunityType == null) {
                throw new Error('Missing required parameter opportunityType when calling salesOpportunitiesTypesPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.opportunityType),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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

    export class OrderStatusesApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Order Statuses Count
         * @param conditions
         */
        public salesOrdersStatusesCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/orders/statuses/count';

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
         * Get Order Statuses
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesOrdersStatusesGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<OrderStatus>> {
            const localVarPath = this.basePath + '/sales/orders/statuses';

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
         * Delete Order Status By Id
         * @param id
         */
        public salesOrdersStatusesIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/orders/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOrdersStatusesIdDelete');
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
         * Get Order Status By Id
         * @param id
         */
        public salesOrdersStatusesIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OrderStatus> {
            const localVarPath = this.basePath + '/sales/orders/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOrdersStatusesIdGet');
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
         * Update Order Status
         * @param id
         * @param operations
         */
        public salesOrdersStatusesIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OrderStatus> {
            const localVarPath = this.basePath + '/sales/orders/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOrdersStatusesIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesOrdersStatusesIdPatch');
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
         * Replace Order Status
         * @param id
         * @param status
         */
        public salesOrdersStatusesIdPut (params: {  id: number; status: OrderStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<OrderStatus> {
            const localVarPath = this.basePath + '/sales/orders/statuses/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOrdersStatusesIdPut');
            }
            // verify required parameter 'status' is set
            if (params.status == null) {
                throw new Error('Missing required parameter status when calling salesOrdersStatusesIdPut');
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
        /**
         *
         * Create Order Status
         * @param status
         */
        public salesOrdersStatusesPost (params: {  status: OrderStatus; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<OrderStatus>> {
            const localVarPath = this.basePath + '/sales/orders/statuses';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'status' is set
            if (params.status == null) {
                throw new Error('Missing required parameter status when calling salesOrdersStatusesPost');
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
    }
//}
//export namespace  {
    'use strict';

    export class OrdersApi {
        protected basePath = 'https://api-na.myconnectwise.net/v4_6_release/apis/3.0';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         *
         * Get Sales Orders Count
         * @param conditions
         */
        public salesOrdersCountGet (params: {  conditions?: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Count> {
            const localVarPath = this.basePath + '/sales/orders/count';

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
         * Get Sales Orders
         * @param conditions
         * @param orderBy
         * @param page
         * @param pageSize
         */
        public salesOrdersGet (params: {  conditions?: string; orderBy?: string; page?: number; pageSize?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Order>> {
            const localVarPath = this.basePath + '/sales/orders';

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
         * Delete Sales Order By Id
         * @param id
         */
        public salesOrdersIdDelete (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/sales/orders/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOrdersIdDelete');
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
         * Get Sales Order By Id
         * @param id
         */
        public salesOrdersIdGet (params: {  id: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Order> {
            const localVarPath = this.basePath + '/sales/orders/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOrdersIdGet');
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
         * Update Sales Order
         * @param id
         * @param operations
         */
        public salesOrdersIdPatch (params: {  id: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Order> {
            const localVarPath = this.basePath + '/sales/orders/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOrdersIdPatch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling salesOrdersIdPatch');
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
         * Replace Sales Order
         * @param id
         * @param order
         */
        public salesOrdersIdPut (params: {  id: number; order: Order; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Order> {
            const localVarPath = this.basePath + '/sales/orders/{id}'
                .replace('{' + 'id' + '}', String(params.id));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling salesOrdersIdPut');
            }
            // verify required parameter 'order' is set
            if (params.order == null) {
                throw new Error('Missing required parameter order when calling salesOrdersIdPut');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.order),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText);
                    error['response'] = response;
                    throw error;
                }
            });
        }
        /**
         *
         * Create Sales Order
         * @param order
         */
        public salesOrdersPost (params: {  order: Order; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Order>> {
            const localVarPath = this.basePath + '/sales/orders';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'order' is set
            if (params.order == null) {
                throw new Error('Missing required parameter order when calling salesOrdersPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.order),

            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
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
