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
export declare enum ApplicationUnitsEnum {
    Amount,
    Hours,
    Incidents,
}
export declare enum ApplicationCycleEnum {
    Contract2Weeks,
    Contract4Weeks,
    ContractYear,
    CalendarMonth,
    CalendarQuarter,
    CalendarWeek,
    ContractQuarter,
    CalendarYear,
}
export declare enum EmployeeCompRateEnum {
    Actual,
    Hourly,
}
export declare enum EmployeeCompNotExceedEnum {
    Billing,
    Percent,
    Amount,
}
export declare enum InvoicingCycleEnum {
    CalendarYear,
    ContractYear,
}
export declare enum BillTimeEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillExpensesEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillProductsEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum PeriodTypeEnum {
    Current,
    Future,
    Both,
    Undefined,
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
export declare enum TypeEnum {
    Text,
    Button,
    Currency,
    Date,
    Hyperlink,
    IPAddress,
    Checkbox,
    Number,
    Percent,
    TextArea,
    Password,
}
export declare enum EntryMethodEnum {
    EntryField,
    List,
    Option,
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
export declare enum TypeEnum {
    Product,
    Service,
    Agreement,
    Other1,
    Other2,
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
export declare enum CycleTypeEnum {
    CalendarYear,
    ContractYear,
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
export declare enum BillingMethodEnum {
    ActualRates,
    FixedFee,
    NotToExceed,
    OverrideRate,
}
export declare enum BudgetAnalysisEnum {
    ActualHours,
    BillableHours,
}
export declare enum BillingRateTypeEnum {
    WorkRole,
    StaffMember,
}
export declare enum BillTimeEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillExpensesEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillProductsEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
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
export declare enum TypeEnum {
    Individual,
    Team,
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
export declare enum RecordTypeEnum {
    ServiceTicket,
    ProjectTicket,
    ProjectIssue,
}
export declare enum SeverityEnum {
    Low,
    Medium,
    High,
}
export declare enum ImpactEnum {
    Low,
    Medium,
    High,
}
export declare enum SubBillingMethodEnum {
    ActualRates,
    FixedFee,
    NotToExceed,
    OverrideRate,
}
export declare enum KnowledgeBaseLinkTypeEnum {
    ServiceTicket,
    ProjectTicket,
    ProjectIssue,
    KnowledgeBaseArticle,
    Time,
    Activity,
}
export declare enum BillTimeEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillExpensesEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum BillProductsEnum {
    Billable,
    DoNotBill,
    NoCharge,
    NoDefault,
}
export declare enum PredecessorTypeEnum {
    Ticket,
    Phase,
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
export declare class ActivitiesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Activities Count
     * @param conditions
     */
    salesActivitiesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Activities
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesActivitiesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Activity>>;
    /**
     *
     * Delete Activity By Id
     * @param id
     */
    salesActivitiesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Activity By Id
     * @param id
     */
    salesActivitiesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Activity>;
    /**
     *
     * Update Activity
     * @param id
     * @param operations
     */
    salesActivitiesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Activity>;
    /**
     *
     * Replace Activity
     * @param id
     * @param activity
     */
    salesActivitiesIdPut(params: {
        id: number;
        activity: Activity;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Activity>;
    /**
     *
     * Create Activity
     * @param activity
     */
    salesActivitiesPost(params: {
        activity: Activity;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Activity>;
}
export declare class ActivityStatusesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Activity Statuses Count
     * @param conditions
     */
    salesActivitiesStatusesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Activity Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesActivitiesStatusesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ActivityStatus>>;
    /**
     *
     * Delete Activity Status By Id
     * @param id
     */
    salesActivitiesStatusesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Activity Status By Id
     * @param id
     */
    salesActivitiesStatusesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ActivityStatus>;
    /**
     *
     * Update Activity Status
     * @param id
     * @param operations
     */
    salesActivitiesStatusesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ActivityStatus>;
    /**
     *
     * Replace Activity Status
     * @param id
     * @param activityStatus
     */
    salesActivitiesStatusesIdPut(params: {
        id: number;
        activityStatus: ActivityStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ActivityStatus>;
    /**
     *
     * Create Activity Status
     * @param activityStatus
     */
    salesActivitiesStatusesPost(params: {
        activityStatus: ActivityStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ActivityStatus>;
}
export declare class ActivityTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Activity Types Count
     * @param conditions
     */
    salesActivitiesTypesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Activity Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesActivitiesTypesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ActivityType>>;
    /**
     *
     * Delete Activity Type By Id
     * @param id
     */
    salesActivitiesTypesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Activity Type By Id
     * @param id
     */
    salesActivitiesTypesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ActivityType>;
    /**
     *
     * Update Activity Type
     * @param id
     * @param operations
     */
    salesActivitiesTypesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ActivityType>;
    /**
     *
     * Replace Activity Type
     * @param id
     * @param activityType
     */
    salesActivitiesTypesIdPut(params: {
        id: number;
        activityType: ActivityType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ActivityType>;
    /**
     *
     * Create Activity Type
     * @param activityType
     */
    salesActivitiesTypesPost(params: {
        activityType: ActivityType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ActivityType>;
}
export declare class OpportunitiesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Opportunities Count
     * @param conditions
     */
    salesOpportunitiesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Opportunities
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesOpportunitiesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Opportunity>>;
    /**
     *
     * Convert Opportunity To Agreement
     * @param id
     * @param conversion
     */
    salesOpportunitiesIdConvertToAgreementPost(params: {
        id: number;
        conversion: OpportunityToAgreementConversion;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Agreement>;
    /**
     *
     * Convert Opportunity To Project
     * @param id
     * @param conversion
     */
    salesOpportunitiesIdConvertToProjectPost(params: {
        id: number;
        conversion: OpportunityToProjectConversion;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Project>;
    /**
     *
     * Convert Opportunity To Sales Order
     * @param id
     * @param conversion
     */
    salesOpportunitiesIdConvertToSalesOrderPost(params: {
        id: number;
        conversion: OpportunityToSalesOrderConversion;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Order>;
    /**
     *
     * Convert Opportunity To Service Ticket
     * @param id
     * @param conversion
     */
    salesOpportunitiesIdConvertToServiceTicketPost(params: {
        id: number;
        conversion: OpportunityToServiceTicketConversion;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Ticket>;
    /**
     *
     * Delete Opportunity By Id
     * @param id
     */
    salesOpportunitiesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Opportunity By Id
     * @param id
     */
    salesOpportunitiesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Opportunity>;
    /**
     *
     * Update Opportunity
     * @param id
     * @param operations
     */
    salesOpportunitiesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Opportunity>;
    /**
     *
     * Replace Opportunity
     * @param id
     * @param opportunity
     */
    salesOpportunitiesIdPut(params: {
        id: number;
        opportunity: Opportunity;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Opportunity>;
    /**
     *
     * Create Opportunity
     * @param opportunity
     */
    salesOpportunitiesPost(params: {
        opportunity: Opportunity;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Opportunity>;
}
export declare class OpportunityContactsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Opportunity Contact By Id
     * @param id
     * @param contactId
     */
    salesOpportunitiesIdContactsContactIdDelete(params: {
        id: number;
        contactId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Opportunity Contact By Id
     * @param id
     * @param contactId
     */
    salesOpportunitiesIdContactsContactIdGet(params: {
        id: number;
        contactId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityContact>;
    /**
     *
     * Update Opportunity Contact
     * @param id
     * @param contactId
     * @param operations
     */
    salesOpportunitiesIdContactsContactIdPatch(params: {
        id: number;
        contactId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityContact>;
    /**
     *
     * Replace Opportunity Contact
     * @param id
     * @param contactId
     * @param opportunityContact
     */
    salesOpportunitiesIdContactsContactIdPut(params: {
        id: number;
        contactId: number;
        opportunityContact: OpportunityContact;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityContact>;
    /**
     *
     * Get Opportunity Contacts Count
     * @param id
     * @param conditions
     */
    salesOpportunitiesIdContactsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Opportunity Contacts
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesOpportunitiesIdContactsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<OpportunityContact>>;
    /**
     *
     * Create Opportunity Contact
     * @param id
     * @param opportunityContact
     */
    salesOpportunitiesIdContactsPost(params: {
        id: number;
        opportunityContact: OpportunityContact;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityContact>;
}
export declare class OpportunityForecastsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Forecasts Count
     * @param id
     * @param conditions
     */
    salesOpportunitiesIdForecastCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Delete Forecast By Id
     * @param id
     * @param forecastId
     */
    salesOpportunitiesIdForecastForecastIdDelete(params: {
        id: number;
        forecastId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Forecast By Id
     * @param id
     * @param forecastId
     */
    salesOpportunitiesIdForecastForecastIdGet(params: {
        id: number;
        forecastId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Forecast>;
    /**
     *
     * Update Forecast
     * @param id
     * @param forecastId
     * @param operations
     */
    salesOpportunitiesIdForecastForecastIdPatch(params: {
        id: number;
        forecastId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Forecast>;
    /**
     *
     * Replace Forecast
     * @param id
     * @param forecastId
     * @param forecast
     */
    salesOpportunitiesIdForecastForecastIdPut(params: {
        id: number;
        forecastId: number;
        forecast: Forecast;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Forecast>;
    /**
     *
     * Get Forecasts
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesOpportunitiesIdForecastGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Forecast>>;
    /**
     *
     * Create Forecast
     * @param id
     * @param forecast
     */
    salesOpportunitiesIdForecastPost(params: {
        id: number;
        forecast: Forecast;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Forecast>;
}
export declare class OpportunityNotesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Opportunity Notes Count
     * @param id
     * @param conditions
     */
    salesOpportunitiesIdNotesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<OpportunityNote>>;
    /**
     *
     * Get Opportunity Notes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesOpportunitiesIdNotesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<OpportunityNote>>;
    /**
     *
     * Delete Opportunity Note By Id
     * @param id
     * @param noteId
     */
    salesOpportunitiesIdNotesNoteIdDelete(params: {
        id: number;
        noteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Opportunity Note By Id
     * @param id
     * @param noteId
     */
    salesOpportunitiesIdNotesNoteIdGet(params: {
        id: number;
        noteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityNote>;
    /**
     *
     * Update Opportunity Note
     * @param id
     * @param noteId
     * @param operations
     */
    salesOpportunitiesIdNotesNoteIdPatch(params: {
        id: number;
        noteId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityNote>;
    /**
     *
     * Replace Opportunity Note
     * @param id
     * @param noteId
     * @param note
     */
    salesOpportunitiesIdNotesNoteIdPut(params: {
        id: number;
        noteId: number;
        note: OpportunityNote;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityNote>;
    /**
     *
     * Create Opportunity Note
     * @param id
     * @param note
     */
    salesOpportunitiesIdNotesPost(params: {
        id: number;
        note: OpportunityNote;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityNote>;
}
export declare class OpportunityRatingsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Opportunity Ratings Count
     * @param conditions
     */
    salesOpportunitiesRatingsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Opportunity Ratings
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesOpportunitiesRatingsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<OpportunityRating>>;
    /**
     *
     * Delete Opportunity Rating By Id
     * @param id
     */
    salesOpportunitiesRatingsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Opportunity Rating By Id
     * @param id
     */
    salesOpportunitiesRatingsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityRating>;
    /**
     *
     * Update Opportunity Rating
     * @param id
     * @param operations
     */
    salesOpportunitiesRatingsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityRating>;
    /**
     *
     * Replace Opportunity Rating
     * @param id
     * @param opportunityRating
     */
    salesOpportunitiesRatingsIdPut(params: {
        id: number;
        opportunityRating: OpportunityRating;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityRating>;
    /**
     *
     * Create Opportunity Rating
     * @param opportunityRating
     */
    salesOpportunitiesRatingsPost(params: {
        opportunityRating: OpportunityRating;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityRating>;
}
export declare class OpportunityStatusesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Statuses Count
     * @param conditions
     */
    salesOpportunitiesStatusesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesOpportunitiesStatusesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<OpportunityStatus>>;
    /**
     *
     * Delete Status By Id
     * @param id
     */
    salesOpportunitiesStatusesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Status By Id
     * @param id
     */
    salesOpportunitiesStatusesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityStatus>;
    /**
     *
     * Update Status
     * @param id
     * @param operations
     */
    salesOpportunitiesStatusesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityStatus>;
    /**
     *
     * Replace Status
     * @param id
     * @param status
     */
    salesOpportunitiesStatusesIdPut(params: {
        id: number;
        status: OpportunityStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityStatus>;
    /**
     *
     * Create Status
     * @param status
     */
    salesOpportunitiesStatusesPost(params: {
        status: OpportunityStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityStatus>;
}
export declare class OpportunityTeamsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Teams Count
     * @param id
     * @param conditions
     */
    salesOpportunitiesIdTeamCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Teams
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesOpportunitiesIdTeamGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Team>>;
    /**
     *
     * Create Team
     * @param id
     * @param team
     */
    salesOpportunitiesIdTeamPost(params: {
        id: number;
        team: Team;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Team>;
    /**
     *
     * Delete Team By Id
     * @param id
     * @param teamId
     */
    salesOpportunitiesIdTeamTeamIdDelete(params: {
        id: number;
        teamId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Team By Id
     * @param id
     * @param teamId
     */
    salesOpportunitiesIdTeamTeamIdGet(params: {
        id: number;
        teamId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Team>;
    /**
     *
     * Update Team
     * @param id
     * @param teamId
     * @param operations
     */
    salesOpportunitiesIdTeamTeamIdPatch(params: {
        id: number;
        teamId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Team>;
    /**
     *
     * Replace Team
     * @param id
     * @param teamId
     * @param team
     */
    salesOpportunitiesIdTeamTeamIdPut(params: {
        id: number;
        teamId: number;
        team: Team;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Team>;
}
export declare class OpportunityTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Opportunity Types Count
     * @param conditions
     */
    salesOpportunitiesTypesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Opportunity Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesOpportunitiesTypesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<OpportunityType>>;
    /**
     *
     * Delete Opportunity Type By Id
     * @param id
     */
    salesOpportunitiesTypesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Opportunity Type By Id
     * @param id
     */
    salesOpportunitiesTypesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityType>;
    /**
     *
     * Update Opportunity Type
     * @param id
     * @param operations
     */
    salesOpportunitiesTypesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityType>;
    /**
     *
     * Replace Opportunity Type
     * @param id
     * @param opportunityType
     */
    salesOpportunitiesTypesIdPut(params: {
        id: number;
        opportunityType: OpportunityType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityType>;
    /**
     *
     * Create Opportunity Type
     * @param opportunityType
     */
    salesOpportunitiesTypesPost(params: {
        opportunityType: OpportunityType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OpportunityType>;
}
export declare class OrderStatusesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Order Statuses Count
     * @param conditions
     */
    salesOrdersStatusesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Order Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesOrdersStatusesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<OrderStatus>>;
    /**
     *
     * Delete Order Status By Id
     * @param id
     */
    salesOrdersStatusesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Order Status By Id
     * @param id
     */
    salesOrdersStatusesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OrderStatus>;
    /**
     *
     * Update Order Status
     * @param id
     * @param operations
     */
    salesOrdersStatusesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OrderStatus>;
    /**
     *
     * Replace Order Status
     * @param id
     * @param status
     */
    salesOrdersStatusesIdPut(params: {
        id: number;
        status: OrderStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<OrderStatus>;
    /**
     *
     * Create Order Status
     * @param status
     */
    salesOrdersStatusesPost(params: {
        status: OrderStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<OrderStatus>>;
}
export declare class OrdersApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Sales Orders Count
     * @param conditions
     */
    salesOrdersCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Sales Orders
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    salesOrdersGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Order>>;
    /**
     *
     * Delete Sales Order By Id
     * @param id
     */
    salesOrdersIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Sales Order By Id
     * @param id
     */
    salesOrdersIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Order>;
    /**
     *
     * Update Sales Order
     * @param id
     * @param operations
     */
    salesOrdersIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Order>;
    /**
     *
     * Replace Sales Order
     * @param id
     * @param order
     */
    salesOrdersIdPut(params: {
        id: number;
        order: Order;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Order>;
    /**
     *
     * Create Sales Order
     * @param order
     */
    salesOrdersPost(params: {
        order: Order;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Order>>;
}
