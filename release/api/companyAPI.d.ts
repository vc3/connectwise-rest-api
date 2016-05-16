export interface AgreementReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CalendarReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CommunicationTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Company {
    "id"?: number;
    "identifier": string;
    "name": string;
    "status": CompanyStatusReference;
    "type": CompanyTypeReference;
    "addressLine1": string;
    "addressLine2"?: string;
    "city"?: string;
    "state"?: string;
    "zip"?: string;
    "country"?: CountryReference;
    "phoneNumber"?: string;
    "faxNumber"?: string;
    "website"?: string;
    "territoryId"?: number;
    "marketId"?: number;
    "accountNumber"?: string;
    "defaultContact"?: ContactReference;
    "dateAcquired"?: Date;
    "sicCode"?: SicCodeReference;
    "parentCompany"?: CompanyReference;
    "annualRevenue"?: number;
    "numberOfEmployees"?: number;
    "ownershipType"?: OwnershipTypeReference;
    "timeZone"?: TimeZoneReference;
    "leadSource"?: string;
    "leadFlag"?: boolean;
    "unsubscribeFlag"?: boolean;
    "calendarId"?: number;
    "deletedFlag"?: boolean;
    "dateDeleted"?: Date;
    "deletedBy"?: string;
    "mobileGuid"?: Guid;
    "currency"?: CurrencyReference;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "customFields"?: Array<CustomFieldValue>;
}
export interface CompanyManagementSummary {
    "id"?: number;
    "managementSolution"?: ManagementSolutionReference;
    "groupIdentifier": string;
    /**
     * deviceType is required if the managementSolution is Legacy
     */
    "deviceType"?: DeviceTypeEnum;
    "agreement"?: AgreementReference;
    "snmpMachines"?: number;
    "totalWorkstations"?: number;
    "totalServers"?: number;
    "totalWindowsServers"?: number;
    "totalWindowsWorkstations"?: number;
    "totalManagedMachines"?: number;
    "serversOffline"?: number;
    "serversDiskSpaceLow"?: number;
    "failedBackupJobs"?: number;
    "totalNotifications"?: number;
    "successfulBackupJobs"?: number;
    "serverAvailability"?: number;
    "virusesRemoved"?: number;
    "spywareItemsRemoved"?: number;
    "windowsPatchesInstalled"?: number;
    "diskCleanups"?: number;
    "diskDefragmentations"?: number;
    "fullyPatchedMachines"?: number;
    "missingOneTwoPatchesMachines"?: number;
    "missingThreeFivePatchesMachines"?: number;
    "missingMoreFivePatchesMachines"?: number;
    "missingUnscannedPatchesMachines"?: number;
    "alertsGenerated"?: string;
    "internetConnectivity"?: number;
    "diskSpaceCleanedMb"?: number;
    "missingSecurityPatches"?: string;
    "cpuUtilization"?: number;
    "memoryUtilization"?: number;
    "company"?: CompanyReference;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum DeviceTypeEnum {
    WorkstationsAndServers,
    BackupStats,
    Servers,
    Workstations,
}
export interface CompanyMerge {
    "toCompanyId": number;
    "name"?: NameEnum;
    "identifier"?: IdentifierEnum;
    "status"?: StatusEnum;
    "type"?: TypeEnum;
    "primaryAddress"?: PrimaryAddressEnum;
    "primaryContact"?: PrimaryContactEnum;
    "phone"?: PhoneEnum;
    "fax"?: FaxEnum;
    "website"?: WebsiteEnum;
    "market"?: MarketEnum;
    "territory"?: TerritoryEnum;
    "revenue"?: RevenueEnum;
    "revenueYear"?: RevenueYearEnum;
    "numberOfEmployees"?: NumberOfEmployeesEnum;
    "sicCode"?: SicCodeEnum;
    "dateAcquired"?: DateAcquiredEnum;
    "timeZone"?: TimeZoneEnum;
    "sourceList"?: SourceListEnum;
    "userDefinedField1"?: UserDefinedField1Enum;
    "userDefinedField2"?: UserDefinedField2Enum;
    "userDefinedField3"?: UserDefinedField3Enum;
    "userDefinedField4"?: UserDefinedField4Enum;
    "userDefinedField5"?: UserDefinedField5Enum;
    "userDefinedField6"?: UserDefinedField6Enum;
    "userDefinedField7"?: UserDefinedField7Enum;
    "userDefinedField8"?: UserDefinedField8Enum;
    "userDefinedField9"?: UserDefinedField9Enum;
    "userDefinedField10"?: UserDefinedField10Enum;
    "billingAddress"?: BillingAddressEnum;
    "billingContact"?: BillingContactEnum;
    "taxCode"?: TaxCodeEnum;
    "accountNumber"?: AccountNumberEnum;
    "billingTerms"?: BillingTermsEnum;
    "notes"?: NotesEnum;
    "sites"?: SitesEnum;
    "activities"?: ActivitiesEnum;
    "opportunities"?: OpportunitiesEnum;
    "services"?: ServicesEnum;
    "projects"?: ProjectsEnum;
    "contacts"?: ContactsEnum;
    "documents"?: DocumentsEnum;
}
export declare enum NameEnum {
    From,
    To,
}
export declare enum IdentifierEnum {
    From,
    To,
}
export declare enum StatusEnum {
    From,
    To,
}
export declare enum TypeEnum {
    From,
    To,
}
export declare enum PrimaryAddressEnum {
    From,
    To,
}
export declare enum PrimaryContactEnum {
    From,
    To,
}
export declare enum PhoneEnum {
    From,
    To,
}
export declare enum FaxEnum {
    From,
    To,
}
export declare enum WebsiteEnum {
    From,
    To,
}
export declare enum MarketEnum {
    From,
    To,
}
export declare enum TerritoryEnum {
    From,
    To,
}
export declare enum RevenueEnum {
    From,
    To,
}
export declare enum RevenueYearEnum {
    From,
    To,
}
export declare enum NumberOfEmployeesEnum {
    From,
    To,
}
export declare enum SicCodeEnum {
    From,
    To,
}
export declare enum DateAcquiredEnum {
    From,
    To,
}
export declare enum TimeZoneEnum {
    From,
    To,
}
export declare enum SourceListEnum {
    From,
    To,
}
export declare enum UserDefinedField1Enum {
    From,
    To,
}
export declare enum UserDefinedField2Enum {
    From,
    To,
}
export declare enum UserDefinedField3Enum {
    From,
    To,
}
export declare enum UserDefinedField4Enum {
    From,
    To,
}
export declare enum UserDefinedField5Enum {
    From,
    To,
}
export declare enum UserDefinedField6Enum {
    From,
    To,
}
export declare enum UserDefinedField7Enum {
    From,
    To,
}
export declare enum UserDefinedField8Enum {
    From,
    To,
}
export declare enum UserDefinedField9Enum {
    From,
    To,
}
export declare enum UserDefinedField10Enum {
    From,
    To,
}
export declare enum BillingAddressEnum {
    From,
    To,
}
export declare enum BillingContactEnum {
    From,
    To,
}
export declare enum TaxCodeEnum {
    From,
    To,
}
export declare enum AccountNumberEnum {
    From,
    To,
}
export declare enum BillingTermsEnum {
    From,
    To,
}
export declare enum NotesEnum {
    Discard,
    Merge,
}
export declare enum SitesEnum {
    Discard,
    Merge,
}
export declare enum ActivitiesEnum {
    Discard,
    Merge,
}
export declare enum OpportunitiesEnum {
    Discard,
    Merge,
}
export declare enum ServicesEnum {
    Discard,
    Merge,
}
export declare enum ProjectsEnum {
    Discard,
    Merge,
}
export declare enum ContactsEnum {
    Discard,
    Merge,
}
export declare enum DocumentsEnum {
    Discard,
    Merge,
}
export interface CompanyNote {
    "id"?: number;
    "text": string;
    "type"?: NoteTypeReference;
    "flagged"?: boolean;
    "enteredBy"?: string;
    "company"?: CompanyReference;
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
export interface CompanySite {
    "id"?: number;
    "name": string;
    "addressLine1"?: string;
    "addressLine2"?: string;
    "city"?: string;
    "state"?: string;
    "zip"?: string;
    "country"?: CountryReference;
    "phoneNumber"?: string;
    "faxNumber"?: string;
    "taxCodeId"?: number;
    "expenseReimbursement"?: number;
    "primaryAddressFlag"?: boolean;
    "defaultShippingFlag"?: boolean;
    "defaultBillingFlag"?: boolean;
    "defaultMailingFlag"?: boolean;
    "calendar"?: CalendarReference;
    "timeZone"?: TimeZoneReference;
    "company"?: CompanyReference;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CompanyStatus {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "notifyFlag"?: boolean;
    "disallowSavingFlag"?: boolean;
    "notificationMessage"?: string;
    "customNoteFlag"?: boolean;
    "cancelOpenTracksFlag"?: boolean;
    "track"?: TrackReference;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CompanyStatusReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CompanyTeam {
    "id"?: number;
    "company"?: CompanyReference;
    "teamRole": TeamRoleReference;
    "locationId"?: number;
    "businessUnitId"?: number;
    "contact"?: ContactReference;
    "member"?: MemberReference;
    "accountManagerFlag"?: boolean;
    "techFlag"?: boolean;
    "salesFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CompanyType {
    "id"?: number;
    "name": string;
    "defaultFlag"?: boolean;
    "vendorFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface CompanyTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Configuration {
    "id"?: number;
    "name": string;
    "type": ConfigurationTypeReference;
    "status"?: ConfigurationStatusReference;
    "company": CompanyReference;
    "contact"?: ContactReference;
    "site"?: SiteReference;
    "locationId"?: number;
    "businessUnitId"?: number;
    "deviceIdentifier"?: string;
    "serialNumber"?: string;
    "modelNumber"?: string;
    "tagNumber"?: string;
    "purchaseDate"?: Date;
    "installationDate"?: Date;
    "installedBy"?: MemberReference;
    "warrantyExpirationDate"?: Date;
    "vendorNotes"?: string;
    "notes"?: string;
    "macAddress"?: string;
    "lastLoginName"?: string;
    "billFlag"?: boolean;
    "backupSuccesses"?: number;
    "backupIncomplete"?: number;
    "backupFailed"?: number;
    "backupRestores"?: number;
    "lastBackupDate"?: Date;
    "backupServerName"?: string;
    "backupBillableSpaceGb"?: number;
    "backupProtectedDeviceList"?: string;
    "backupYear"?: number;
    "backupMonth"?: number;
    "ipAddress"?: string;
    "defaultGateway"?: string;
    "osType"?: string;
    "osInfo"?: string;
    "cpuSpeed"?: string;
    "ram"?: string;
    "localHardDrives"?: string;
    "parentConfigurationId"?: number;
    "vendor"?: CompanyReference;
    "manufacturer"?: ManufacturerReference;
    "questions"?: Array<ConfigurationQuestion>;
    "activeFlag"?: boolean;
    "managementLink"?: string;
    "remoteLink"?: string;
    "sla"?: SLAReference;
    "mobileGuid"?: Guid;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "customFields"?: Array<CustomFieldValue>;
}
export interface ConfigurationQuestion {
    "answerId"?: number;
    "questionId"?: number;
    "question"?: string;
    "answer"?: string;
    "sequenceNumber"?: number;
    "numberOfDecimals"?: number;
    "fieldType"?: FieldTypeEnum;
    "requiredFlag"?: boolean;
}
export declare enum FieldTypeEnum {
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
export interface ConfigurationStatus {
    "id"?: number;
    "description": string;
    "closedFlag"?: boolean;
    "defaultFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ConfigurationStatusReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ConfigurationType {
    "id"?: number;
    "name": string;
    "inactiveFlag"?: boolean;
    "systemFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ConfigurationTypeQuestion {
    "id"?: number;
    "configurationTypeId"?: number;
    "fieldType": FieldTypeEnum;
    "entryType": EntryTypeEnum;
    "sequenceNumber"?: number;
    "question": string;
    "numberOfDecimals"?: number;
    "requiredFlag"?: boolean;
    "inactiveFlag"?: boolean;
    "possibleAnswers"?: Array<string>;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum FieldTypeEnum {
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
export declare enum EntryTypeEnum {
    EntryField,
    List,
    Option,
}
export interface ConfigurationTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Contact {
    "id"?: number;
    "firstName": string;
    "lastName"?: string;
    "type"?: ContactTypeReference;
    "company"?: CompanyReference;
    "site"?: SiteReference;
    "addressLine1"?: string;
    "addressLine2"?: string;
    "city"?: string;
    "state"?: string;
    "zip"?: string;
    "country"?: string;
    "relationship"?: RelationshipReference;
    "department"?: ContactDepartmentReference;
    "inactiveFlag"?: boolean;
    "securityIdentifier"?: string;
    "managerContactId"?: number;
    "assistantContactId"?: number;
    "title"?: string;
    "school"?: string;
    "nickName"?: string;
    "marriedFlag"?: boolean;
    "childrenFlag"?: boolean;
    "significantOther"?: string;
    "portalPassword"?: string;
    "portalSecurityLevel"?: number;
    "disablePortalLoginFlag"?: boolean;
    "unsubscribeFlag"?: boolean;
    "gender"?: GenderEnum;
    "birthDay"?: Date;
    "anniversary"?: Date;
    "presence"?: PresenceEnum;
    "mobileGuid"?: Guid;
    "facebookUrl"?: string;
    "twitterUrl"?: string;
    "linkedInUrl"?: string;
    "communicationItems"?: Array<ContactCommunicationItem>;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
    "customFields"?: Array<CustomFieldValue>;
}
export declare enum GenderEnum {
    Male,
    Female,
}
export declare enum PresenceEnum {
    Online,
    DoNotDisturb,
    Away,
    Offline,
    NoAgent,
}
export interface ContactCommunication {
    "id"?: number;
    "contactId"?: number;
    "type": CommunicationTypeReference;
    "value": string;
    "extension"?: string;
    "defaultFlag"?: boolean;
    "mobileGuid"?: Guid;
    "communicationType"?: CommunicationTypeEnum;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export declare enum CommunicationTypeEnum {
    Phone,
    Fax,
    Email,
}
export interface ContactCommunicationItem {
    "id"?: number;
    "type": CommunicationTypeReference;
    "value": string;
    "extension"?: string;
    "defaultFlag"?: boolean;
    "communicationType"?: CommunicationTypeEnum;
}
export declare enum CommunicationTypeEnum {
    Phone,
    Fax,
    Email,
}
export interface ContactDepartment {
    "id"?: number;
    "name": string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ContactDepartmentReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ContactNote {
    "id"?: number;
    "contactId"?: number;
    "text": string;
    "type"?: NoteTypeReference;
    "flagged"?: boolean;
    "enteredBy"?: string;
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
export interface ContactRelationship {
    "id"?: number;
    "name": string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ContactType {
    "id"?: number;
    "description": string;
    "defaultFlag"?: boolean;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ContactTypeReference {
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
export interface CurrencyReference {
    "id"?: number;
    "identifier"?: string;
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
export interface Guid {
}
export interface ManagementSolutionReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ManufacturerReference {
    "id"?: number;
    "name"?: string;
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
export interface NoteTypeReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface OwnershipTypeReference {
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
export interface PortalSecurity {
    "identifier"?: string;
    "enabled"?: boolean;
}
export interface RelationshipReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface RequestPasswordRequest {
    "email"?: string;
}
export interface SLAReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface SicCodeReference {
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
export interface SuccessResponse {
    "success"?: boolean;
    "message"?: string;
}
export interface TeamRoleReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface TimeZoneReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface Track {
    "id"?: number;
    "trackId": number;
    "name"?: string;
    "startDate"?: string;
    "endDate"?: string;
    "actionTaken"?: number;
    "actionRemaining"?: number;
    "startedBy"?: string;
    "company"?: CompanyReference;
    "contact"?: ContactReference;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface TrackReference {
    "id"?: number;
    "name"?: string;
    /**
     * Metadata of the entity
     */
    "info"?: Metadata;
}
export interface ValidatePortalRequest {
    "email"?: string;
    "password"?: string;
}
export interface ValidatePortalResponse {
    "success"?: boolean;
    "contactId"?: number;
}
export interface ValidationError {
    "code"?: string;
    "message"?: string;
    "resource"?: string;
    "field"?: string;
}
export declare class CompaniesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Companies Count
     * @param conditions
     */
    companyCompaniesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Companies
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyCompaniesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Company>>;
    /**
     *
     * Delete Company By Id
     * @param id
     */
    companyCompaniesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Company By Id
     * @param id
     */
    companyCompaniesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Company>;
    /**
     *
     * Merge Company
     * @param id
     * @param merge
     */
    companyCompaniesIdMergePost(params: {
        id: number;
        merge: CompanyMerge;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<SuccessResponse>;
    /**
     *
     * Update Company
     * @param id
     * @param operations
     */
    companyCompaniesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Company>;
    /**
     *
     * Replace Company
     * @param id
     * @param company
     */
    companyCompaniesIdPut(params: {
        id: number;
        company: Company;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Company>;
    /**
     *
     * Create Company
     * @param company
     */
    companyCompaniesPost(params: {
        company: Company;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Company>;
}
export declare class CompanyManagementSummarysApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Company Types Count
     * @param id
     * @param conditions
     */
    companyCompaniesIdManagementSummaryReportsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Management Summarys
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyCompaniesIdManagementSummaryReportsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CompanyManagementSummary>>;
    /**
     *
     * Create Management Summary
     * @param id
     * @param managementSummary
     */
    companyCompaniesIdManagementSummaryReportsPost(params: {
        id: number;
        managementSummary: CompanyManagementSummary;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyManagementSummary>;
    /**
     *
     * Delete Management Summary By Id
     * @param id
     * @param reportId
     */
    companyCompaniesIdManagementSummaryReportsReportIdDelete(params: {
        id: number;
        reportId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Management Summary By Id
     * @param id
     * @param reportId
     */
    companyCompaniesIdManagementSummaryReportsReportIdGet(params: {
        id: number;
        reportId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyManagementSummary>;
    /**
     *
     * Update Management Summary
     * @param id
     * @param reportId
     * @param operations
     */
    companyCompaniesIdManagementSummaryReportsReportIdPatch(params: {
        id: number;
        reportId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyManagementSummary>;
    /**
     *
     * Replace Management Summary
     * @param id
     * @param reportId
     * @param managementSummary
     */
    companyCompaniesIdManagementSummaryReportsReportIdPut(params: {
        id: number;
        reportId: number;
        managementSummary: CompanyManagementSummary;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyManagementSummary>;
}
export declare class CompanyNotesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Company Notes Count
     * @param id
     * @param conditions
     */
    companyCompaniesIdNotesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Company Notes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyCompaniesIdNotesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CompanyNote>>;
    /**
     *
     * Delete Company Note By Id
     * @param id
     * @param noteId
     */
    companyCompaniesIdNotesNoteIdDelete(params: {
        id: number;
        noteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Company Note By Id
     * @param id
     * @param noteId
     */
    companyCompaniesIdNotesNoteIdGet(params: {
        id: number;
        noteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyNote>;
    /**
     *
     * Update Company Note
     * @param id
     * @param noteId
     * @param operations
     */
    companyCompaniesIdNotesNoteIdPatch(params: {
        id: number;
        noteId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyNote>;
    /**
     *
     * Replace Company Note
     * @param id
     * @param noteId
     * @param companyNote
     */
    companyCompaniesIdNotesNoteIdPut(params: {
        id: number;
        noteId: number;
        companyNote: CompanyNote;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyNote>;
    /**
     *
     * Create Company Note
     * @param id
     * @param companyNote
     */
    companyCompaniesIdNotesPost(params: {
        id: number;
        companyNote: CompanyNote;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyNote>;
}
export declare class CompanySitesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Sites Count
     * @param id
     * @param conditions
     */
    companyCompaniesIdSitesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Sites
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyCompaniesIdSitesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CompanySite>>;
    /**
     *
     * Create Site
     * @param id
     * @param site
     */
    companyCompaniesIdSitesPost(params: {
        id: number;
        site: CompanySite;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanySite>;
    /**
     *
     * Delete Site By Id
     * @param id
     * @param siteId
     */
    companyCompaniesIdSitesSiteIdDelete(params: {
        id: number;
        siteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Site By Id
     * @param id
     * @param siteId
     */
    companyCompaniesIdSitesSiteIdGet(params: {
        id: number;
        siteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanySite>;
    /**
     *
     * Update Site
     * @param id
     * @param siteId
     * @param operations
     */
    companyCompaniesIdSitesSiteIdPatch(params: {
        id: number;
        siteId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanySite>;
    /**
     *
     * Replace Site
     * @param id
     * @param siteId
     * @param site
     */
    companyCompaniesIdSitesSiteIdPut(params: {
        id: number;
        siteId: number;
        site: CompanySite;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanySite>;
}
export declare class CompanyStatusesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Company Statuses Count
     * @param conditions
     */
    companyCompaniesStatusesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Company Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyCompaniesStatusesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CompanyStatus>>;
    /**
     *
     * Delete Company Status By Id
     * @param id
     */
    companyCompaniesStatusesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Company Status By Id
     * @param id
     */
    companyCompaniesStatusesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyStatus>;
    /**
     *
     * Update Company Status
     * @param id
     * @param operations
     */
    companyCompaniesStatusesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyStatus>;
    /**
     *
     * Replace Company Status
     * @param id
     * @param companyStatus
     */
    companyCompaniesStatusesIdPut(params: {
        id: number;
        companyStatus: CompanyStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyStatus>;
    /**
     *
     * Create Company Status
     * @param companyStatus
     */
    companyCompaniesStatusesPost(params: {
        companyStatus: CompanyStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyStatus>;
}
export declare class CompanyTeamsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Company Teams Count
     * @param id
     * @param conditions
     */
    companyCompaniesIdTeamsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Company Teams
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyCompaniesIdTeamsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CompanyTeam>>;
    /**
     *
     * Create Company Team
     * @param id
     * @param companyTeam
     */
    companyCompaniesIdTeamsPost(params: {
        id: number;
        companyTeam: CompanyTeam;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyTeam>;
    /**
     *
     * Delete Company Team By Id
     * @param id
     * @param teamId
     */
    companyCompaniesIdTeamsTeamIdDelete(params: {
        id: number;
        teamId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Company Team By Id
     * @param id
     * @param teamId
     */
    companyCompaniesIdTeamsTeamIdGet(params: {
        id: number;
        teamId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyTeam>;
    /**
     *
     * Update Company Team
     * @param id
     * @param teamId
     * @param operations
     */
    companyCompaniesIdTeamsTeamIdPatch(params: {
        id: number;
        teamId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyTeam>;
    /**
     *
     * Replace Company Team
     * @param id
     * @param teamId
     * @param companyTeam
     */
    companyCompaniesIdTeamsTeamIdPut(params: {
        id: number;
        teamId: number;
        companyTeam: CompanyTeam;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyTeam>;
}
export declare class CompanyTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Company Types Count
     * @param conditions
     */
    companyCompaniesTypesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Company Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyCompaniesTypesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<CompanyType>>;
    /**
     *
     * Delete Company Type By Id
     * @param id
     */
    companyCompaniesTypesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Company Type By Id
     * @param id
     */
    companyCompaniesTypesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyType>;
    /**
     *
     * Update Company Type
     * @param id
     * @param operations
     */
    companyCompaniesTypesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyType>;
    /**
     *
     * Replace Company Type
     * @param id
     * @param companyType
     */
    companyCompaniesTypesIdPut(params: {
        id: number;
        companyType: CompanyType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyType>;
    /**
     *
     * Create Company Type
     * @param companyType
     */
    companyCompaniesTypesPost(params: {
        companyType: CompanyType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<CompanyType>;
}
export declare class ConfigurationStatusesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Configuration Statuses Count
     * @param conditions
     */
    companyConfigurationsStatusesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Configuration Statuses
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyConfigurationsStatusesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ConfigurationStatus>>;
    /**
     *
     * Delete Configuration Status By Id
     * @param id
     */
    companyConfigurationsStatusesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Configuration Status By Id
     * @param id
     */
    companyConfigurationsStatusesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationStatus>;
    /**
     *
     * Update Configuration Status
     * @param id
     * @param operations
     */
    companyConfigurationsStatusesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationStatus>;
    /**
     *
     * Replace Configuration Status
     * @param id
     * @param configurationStatus
     */
    companyConfigurationsStatusesIdPut(params: {
        id: number;
        configurationStatus: ConfigurationStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationStatus>;
    /**
     *
     * Create Configuration Status
     * @param configurationStatus
     */
    companyConfigurationsStatusesPost(params: {
        configurationStatus: ConfigurationStatus;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationStatus>;
}
export declare class ConfigurationTypeQuestionsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Configuration Type Questions Count
     * @param id
     * @param conditions
     */
    companyConfigurationsTypesIdQuestionsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Configuration Type Questions
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyConfigurationsTypesIdQuestionsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ConfigurationTypeQuestion>>;
    /**
     *
     * Create Configuration Type Question
     * @param id
     * @param configurationTypeQuestion
     */
    companyConfigurationsTypesIdQuestionsPost(params: {
        id: number;
        configurationTypeQuestion: ConfigurationTypeQuestion;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationTypeQuestion>;
    /**
     *
     * Delete Configuration Type Question By Id
     * @param id
     * @param questionId
     */
    companyConfigurationsTypesIdQuestionsQuestionIdDelete(params: {
        id: number;
        questionId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Configuration Type Question By Id
     * @param id
     * @param questionId
     */
    companyConfigurationsTypesIdQuestionsQuestionIdGet(params: {
        id: number;
        questionId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationTypeQuestion>;
    /**
     *
     * Update Configuration Type Question
     * @param id
     * @param questionId
     * @param operations
     */
    companyConfigurationsTypesIdQuestionsQuestionIdPatch(params: {
        id: number;
        questionId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationTypeQuestion>;
    /**
     *
     * Replace Configuration Type Question
     * @param id
     * @param questionId
     * @param configurationTypeQuestion
     */
    companyConfigurationsTypesIdQuestionsQuestionIdPut(params: {
        id: number;
        questionId: number;
        configurationTypeQuestion: ConfigurationTypeQuestion;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationTypeQuestion>;
}
export declare class ConfigurationTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Configuration Types Count
     * @param conditions
     */
    companyConfigurationsTypesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Configuration Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyConfigurationsTypesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ConfigurationType>>;
    /**
     *
     * Delete Configuration Type By Id
     * @param id
     */
    companyConfigurationsTypesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Configuration Type By Id
     * @param id
     */
    companyConfigurationsTypesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationType>;
    /**
     *
     * Update Configuration Type
     * @param id
     * @param operations
     */
    companyConfigurationsTypesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationType>;
    /**
     *
     * Replace Configuration Type
     * @param id
     * @param configurationType
     */
    companyConfigurationsTypesIdPut(params: {
        id: number;
        configurationType: ConfigurationType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationType>;
    /**
     *
     * Create Configuration Type
     * @param configurationType
     */
    companyConfigurationsTypesPost(params: {
        configurationType: ConfigurationType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ConfigurationType>;
}
export declare class ConfigurationsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Configurations Count
     * @param conditions
     * @param managedIdentifier
     */
    companyConfigurationsCountGet(params: {
        conditions?: string;
        managedIdentifier?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Configurations
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     * @param managedIdentifier
     */
    companyConfigurationsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
        managedIdentifier?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Configuration>>;
    /**
     *
     * Delete Configuration By Id
     * @param id
     */
    companyConfigurationsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Configuration By Id
     * @param id
     */
    companyConfigurationsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Configuration>;
    /**
     *
     * Update Configuration
     * @param id
     * @param operations
     * @param managementSolutionName
     * @param managedIdentifier
     * @param type
     * @param level
     * @param childConfigurationsMatchingOn
     * @param inactivateConfigurationsMatchingOn
     * @param inactiveConfigurationStatusId
     */
    companyConfigurationsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
        managementSolutionName?: string;
        managedIdentifier?: string;
        type?: string;
        level?: string;
        childConfigurationsMatchingOn?: string;
        inactivateConfigurationsMatchingOn?: string;
        inactiveConfigurationStatusId?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Configuration>;
    /**
     *
     * Replace Configuration
     * @param id
     * @param configuration
     * @param managementSolutionName
     * @param managedIdentifier
     * @param type
     * @param level
     * @param childConfigurationsMatchingOn
     * @param inactivateConfigurationsMatchingOn
     * @param inactiveConfigurationStatusId
     */
    companyConfigurationsIdPut(params: {
        id: number;
        configuration: Configuration;
        managementSolutionName?: string;
        managedIdentifier?: string;
        type?: string;
        level?: string;
        childConfigurationsMatchingOn?: string;
        inactivateConfigurationsMatchingOn?: string;
        inactiveConfigurationStatusId?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Configuration>;
    /**
     *
     * Create Configuration
     * @param configuration
     * @param managementSolutionName
     * @param managedIdentifier
     * @param type
     * @param level
     * @param childConfigurationsMatchingOn
     * @param inactivateConfigurationsMatchingOn
     * @param inactiveConfigurationStatusId
     */
    companyConfigurationsPost(params: {
        configuration: Configuration;
        managementSolutionName?: string;
        managedIdentifier?: string;
        type?: string;
        level?: string;
        childConfigurationsMatchingOn?: string;
        inactivateConfigurationsMatchingOn?: string;
        inactiveConfigurationStatusId?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Configuration>;
}
export declare class ContactCommunicationsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Delete Contact Communication By Id
     * @param id
     * @param communicationId
     */
    companyContactsIdCommunicationsCommunicationIdDelete(params: {
        id: number;
        communicationId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Contact Communication By Id
     * @param id
     * @param communicationId
     */
    companyContactsIdCommunicationsCommunicationIdGet(params: {
        id: number;
        communicationId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactCommunication>;
    /**
     *
     * Update Contact Communication
     * @param id
     * @param communicationId
     * @param operations
     */
    companyContactsIdCommunicationsCommunicationIdPatch(params: {
        id: number;
        communicationId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactCommunication>;
    /**
     *
     * Replace Contact Communication
     * @param id
     * @param communicationId
     * @param contactCommunication
     */
    companyContactsIdCommunicationsCommunicationIdPut(params: {
        id: number;
        communicationId: number;
        contactCommunication: ContactCommunication;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactCommunication>;
    /**
     *
     * Get Contact Communications Count
     * @param id
     * @param conditions
     */
    companyContactsIdCommunicationsCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Contact Communications
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyContactsIdCommunicationsGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ContactCommunication>>;
    /**
     *
     * Create Contact Communication
     * @param id
     * @param contactCommunication
     */
    companyContactsIdCommunicationsPost(params: {
        id: number;
        contactCommunication: ContactCommunication;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactCommunication>;
}
export declare class ContactDepartmentsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Contact Departments Count
     * @param conditions
     */
    companyContactsDepartmentsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Contact Departments
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyContactsDepartmentsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ContactDepartment>>;
    /**
     *
     * Delete Contact Department By Id
     * @param id
     */
    companyContactsDepartmentsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Contact Department By Id
     * @param id
     */
    companyContactsDepartmentsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactDepartment>;
    /**
     *
     * Update Contact Department
     * @param id
     * @param operations
     */
    companyContactsDepartmentsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactDepartment>;
    /**
     *
     * Replace Contact Department
     * @param id
     * @param contactDepartment
     */
    companyContactsDepartmentsIdPut(params: {
        id: number;
        contactDepartment: ContactDepartment;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactDepartment>;
    /**
     *
     * Create Contact Department
     * @param contactDepartment
     */
    companyContactsDepartmentsPost(params: {
        contactDepartment: ContactDepartment;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactDepartment>;
}
export declare class ContactNotesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Contact Notes Count
     * @param id
     * @param conditions
     */
    companyContactsIdNotesCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Contact Notes
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyContactsIdNotesGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ContactNote>>;
    /**
     *
     * Delete Contact Note By Id
     * @param id
     * @param noteId
     */
    companyContactsIdNotesNoteIdDelete(params: {
        id: number;
        noteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Contact Note By Id
     * @param id
     * @param noteId
     */
    companyContactsIdNotesNoteIdGet(params: {
        id: number;
        noteId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactNote>;
    /**
     *
     * Update Contact Note
     * @param id
     * @param noteId
     * @param operations
     */
    companyContactsIdNotesNoteIdPatch(params: {
        id: number;
        noteId: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactNote>;
    /**
     *
     * Replace Contact Note
     * @param id
     * @param noteId
     * @param contactNote
     */
    companyContactsIdNotesNoteIdPut(params: {
        id: number;
        noteId: number;
        contactNote: ContactNote;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactNote>;
    /**
     *
     * Create Contact Note
     * @param id
     * @param contactNote
     */
    companyContactsIdNotesPost(params: {
        id: number;
        contactNote: ContactNote;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactNote>;
}
export declare class ContactRelationshipsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Contact Relationships Count
     * @param conditions
     */
    companyContactsRelationshipsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Contact Relationships
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyContactsRelationshipsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ContactRelationship>>;
    /**
     *
     * Delete Contact Relationship By Id
     * @param id
     */
    companyContactsRelationshipsIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Contact Relationship By Id
     * @param id
     */
    companyContactsRelationshipsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactRelationship>;
    /**
     *
     * Update Contact Relationship
     * @param id
     * @param operations
     */
    companyContactsRelationshipsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactRelationship>;
    /**
     *
     * Replace Contact Relationship
     * @param id
     * @param contactRelationship
     */
    companyContactsRelationshipsIdPut(params: {
        id: number;
        contactRelationship: ContactRelationship;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactRelationship>;
    /**
     *
     * Create Contact Relationship
     * @param contactRelationship
     */
    companyContactsRelationshipsPost(params: {
        contactRelationship: ContactRelationship;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactRelationship>;
}
export declare class ContactTracksApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Tracks Count
     * @param id
     * @param conditions
     */
    companyContactsIdTracksCountGet(params: {
        id: number;
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Tracks
     * @param id
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyContactsIdTracksGet(params: {
        id: number;
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Track>>;
    /**
     *
     * Create Track
     * @param id
     * @param track
     */
    companyContactsIdTracksPost(params: {
        id: number;
        track: Track;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Track>;
    /**
     *
     * Delete Track By Id
     * @param id
     * @param trackId
     */
    companyContactsIdTracksTrackIdDelete(params: {
        id: number;
        trackId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Track By Id
     * @param id
     * @param trackId
     */
    companyContactsIdTracksTrackIdGet(params: {
        id: number;
        trackId: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Track>;
}
export declare class ContactTypesApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Contact Types Count
     * @param conditions
     */
    companyContactsTypesCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Contact Types
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyContactsTypesGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<ContactType>>;
    /**
     *
     * Delete Contact Type By Id
     * @param id
     */
    companyContactsTypesIdDelete(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Contact Type By Id
     * @param id
     */
    companyContactsTypesIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactType>;
    /**
     *
     * Update Contact Type
     * @param id
     * @param operations
     */
    companyContactsTypesIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactType>;
    /**
     *
     * Replace Contact Type
     * @param id
     * @param contactType
     */
    companyContactsTypesIdPut(params: {
        id: number;
        contactType: ContactType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactType>;
    /**
     *
     * Create Contact Type
     * @param contactType
     */
    companyContactsTypesPost(params: {
        contactType: ContactType;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ContactType>;
}
export declare class ContactsApi {
    protected basePath: string;
    defaultHeaders: any;
    constructor(basePath?: string);
    /**
     *
     * Get Contacts Count
     * @param conditions
     */
    companyContactsCountGet(params: {
        conditions?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Count>;
    /**
     *
     * Get Contacts
     * @param conditions
     * @param orderBy
     * @param page
     * @param pageSize
     */
    companyContactsGet(params: {
        conditions?: string;
        orderBy?: string;
        page?: number;
        pageSize?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<Contact>>;
    /**
     *
     * Delete Contact By Id
     * @param id
     * @param transferContactId
     */
    companyContactsIdDelete(params: {
        id: number;
        transferContactId?: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Get Contact By Id
     * @param id
     */
    companyContactsIdGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Contact>;
    /**
     *
     * Get Contact Image
     * @param id
     * @param useDefaultFlag
     * @param lastModified
     */
    companyContactsIdImageGet(params: {
        id: number;
        useDefaultFlag?: boolean;
        lastModified?: string;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Update Contact
     * @param id
     * @param operations
     */
    companyContactsIdPatch(params: {
        id: number;
        operations: Array<PatchOperation>;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Contact>;
    /**
     *
     * Get Portal Security
     * @param id
     */
    companyContactsIdPortalSecurityGet(params: {
        id: number;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Array<PortalSecurity>>;
    /**
     *
     * Replace Contact
     * @param id
     * @param contact
     */
    companyContactsIdPut(params: {
        id: number;
        contact: Contact;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Contact>;
    /**
     *
     * Create Contact
     * @param contact
     */
    companyContactsPost(params: {
        contact: Contact;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<Contact>;
    /**
     *
     * Request Password
     * @param request
     */
    companyContactsRequestPasswordPost(params: {
        request: RequestPasswordRequest;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<{}>;
    /**
     *
     * Validate Portal Credentials
     * @param request
     */
    companyContactsValidatePortalCredentialsPost(params: {
        request: ValidatePortalRequest;
    }, extraQueryParams?: any, extraFetchParams?: any): Promise<ValidatePortalResponse>;
}
